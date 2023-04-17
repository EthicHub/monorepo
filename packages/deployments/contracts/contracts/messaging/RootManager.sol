// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity 0.8.17;

import {ProposedOwnable} from "../shared/ProposedOwnable.sol";

import {IRootManager} from "./interfaces/IRootManager.sol";
import {IHubConnector} from "./interfaces/IHubConnector.sol";
import {QueueLib} from "./libraries/Queue.sol";
import {DomainIndexer} from "./libraries/DomainIndexer.sol";

import {MerkleTreeManager} from "./MerkleTreeManager.sol";
import {WatcherClient} from "./WatcherClient.sol";

/**
 * @notice This contract exists at cluster hubs, and aggregates all transfer roots from messaging
 * spokes into a single merkle tree. Regularly broadcasts the root of the aggregator tree back out
 * to all the messaging spokes.
 */
contract RootManager is ProposedOwnable, IRootManager, WatcherClient, DomainIndexer {
  // ============ Libraries ============

  using QueueLib for QueueLib.Queue;

  // ============ Events ============

  event DelayBlocksUpdated(uint256 previous, uint256 updated);

  event RootReceived(uint32 domain, bytes32 receivedRoot, uint256 queueIndex);

  event RootsAggregated(bytes32 aggregateRoot, uint256 count, bytes32[] aggregatedMessageRoots);

  event RootPropagated(bytes32 aggregateRoot, uint256 count, bytes32 domainsHash);

  event RootDiscarded(bytes32 fraudulentRoot);

  /**
   * @notice Emitted when a new proposer is added
   * @param proposer The address of the proposer
   */
  event ProposerAdded(address indexed proposer);

  /**
   * @notice Emitted when a proposer is removed
   * @param proposer The address of the proposer
   */
  event ProposerRemoved(address indexed proposer);

  event ConnectorAdded(uint32 domain, address connector, uint32[] domains, address[] connectors);

  event ConnectorRemoved(uint32 domain, address connector, uint32[] domains, address[] connectors, address caller);

  event PropagateFailed(uint32 domain, address connector);

  /**
   * @notice Emitted when slow mode is activated
   * @param watcher The address of the watcher who called the function
   */
  event SlowModeActivated(address indexed watcher);

  /**
   * @notice Emitted when optimistic mode is activated
   */
  event OptimisticModeActivated();

  /**
   * @notice Emitted when an optimistic root is propagated
   * @param aggregateRoot The aggregate root propagated
   * @param domainsHash The current domain hash
   */
  event OptimisticRootPropagated(bytes32 indexed aggregateRoot, bytes32 domainsHash);

  /**
   * @notice Emitted when a new aggregate root is proposed
   * @param snapshotId The snapshot id
   * @param endOfDispute The timestamp when the dispute period is over
   * @param aggregateRoot The new aggregate root proposed
   * @param baseRoot The root of the tree before the snapshot roots were inserted by proposer
   * @param snapshotsRoots The list of roots added to aggregate tree
   * @param domains The list of all domains
   */
  event AggregateRootProposed(
    uint256 indexed snapshotId,
    uint256 endOfDispute,
    bytes32 indexed aggregateRoot,
    bytes32 indexed baseRoot,
    bytes32[] snapshotsRoots,
    uint32[] domains
  );

  /**
   * @notice Emitted when the current proposed root is finalized
   * @param aggregateRoot The aggregate root finalized
   */
  event ProposedRootFinalized(bytes32 aggregateRoot);

  // ============ Errors ============

  error RootManager_proposeAggregateRoot__InvalidSnapshotId(uint256 snapshotId);

  error RootManager_checkDomains__InvalidDomains();

  error RootManager_finalize__InvalidAggregateRoot();

  error RootManager_onlyOptimisticMode__SlowModeOn();

  error RootManager_activateOptimisticMode__OptimisticModeOn();

  error RootManager_aggregate__OptimisticModeOn();

  error RootManager_proposeAggregateRoot__ProposeInProgress();

  error RootManager_finalize__ProposeInProgress();

  error RootManager_onlyProposer__NotWhitelistedProposer(address caller);

  error RootManager__optimisticPropagate__EmptyFinalizedOptimisticRoot();

  error RootManager__slowPropagate__OldAggregateRoot();

  // ============ Properties ============

  /**
   * @notice The time watchers have to detect and invalidate the proposed root.
   */
  uint256 public constant DISPUTE_TIME = 30 minutes;

  /**
   * @notice Duration of the snapshot
   */
  uint256 public constant SNAPSHOT_DURATION = 30 minutes;

  /**
   * @notice Maximum number of values to dequeue from the queue in one sitting (one call of `propagate`
   * or `dequeue`). Used to cap gas requirements.
   */
  uint128 public constant DEQUEUE_MAX = 100;

  /**
   * @notice Number of blocks to delay the processing of a message to allow for watchers to verify
   * the validity and pause if necessary.
   */
  uint256 public delayBlocks;

  /**
   * @notice The amount of inserted leaves prior to switching to optimistic mode
   * @dev Used to prevent the propagation of an old aggregate root right after switching to Slow mode.
   * After switching back to slow mode, if the count didnt change from previous slow mode, we consider the root as an old one since
   * probably lot of optimistic roots have been propagated.
   * Example: Propagation in slow mode happens, switch to Op Mode, multiple propagations happen, switch back to Slow mode.
   * If at this point someone calls propagate and the queue is empty or non of elemenets are ready, _slowPropagate will
   * call the dequeue function which will return the old root and count before Op mode was activated. And since multiple
   * propagations happened while in optimistic mode, the lastPropagatedRoot will be different than the old but current MERKLE.root
   * which will lead to propagating a deprecated root.
   */
  uint256 public lastCountBeforeOpMode;

  /**
   * @notice True if the system is working in optimistic mode. Otherwise is working in slow mode
   */
  bool public optimisticMode;

  /**
   * @notice The last aggregate root we propagated to spoke chains. Used to prevent sending redundant
   * aggregate roots in `propagate`.
   */
  bytes32 public lastPropagatedRoot;

  /**
   * @notice The last finalized aggregate root in optimistic mode.
   */
  bytes32 public finalizedOptimisticAggregateRoot;

  /**
   * @notice Queue used for management of verification for inbound roots from spoke chains. Once
   * the verification period elapses, the inbound messages can be aggregated into the merkle tree
   * for propagation to spoke chains.
   * @dev Watchers should be able to watch this queue for fraudulent messages and pause this contract
   * if fraud is detected.
   */
  QueueLib.Queue public pendingInboundRoots;

  /**
  @notice The proposed aggregate root.
   */
  ProposedData public proposedAggregateRoot;

  /**
   * @notice MerkleTreeManager contract instance. Will hold the active tree of aggregated inbound roots.
   * The root of this tree will be distributed crosschain to all spoke domains.
   */
  MerkleTreeManager public immutable MERKLE;

  /**
   * @notice This is used for the `onlyProposers` modifier, which gates who
   * can propose new roots using `proposeAggregateRoot`.
   */
  mapping(address => bool) public allowlistedProposers;

  /**
   * @notice Struct to store the proposed data
   * @dev The list of the snapshots roots and the domains must be in the
   * same order as the roots insertions on the tree.
   * @param endOfDispute The timestamp when the dispute period is over
   * @param aggregateRoot The new aggregate root
   */
  struct ProposedData {
    uint256 endOfDispute;
    bytes32 aggregateRoot;
  }

  // ============ Modifiers ============

  modifier onlyConnector(uint32 _domain) {
    require(getConnectorForDomain(_domain) == msg.sender, "!connector");
    _;
  }

  /**
   * @notice Checks if the proposed domains are valid
   */
  modifier checkDomains(uint32[] calldata _domains) {
    if (keccak256(abi.encode(_domains)) != domainsHash) revert RootManager_checkDomains__InvalidDomains();
    _;
  }

  /**
   * @notice Checks if root manager is working in optimistic mode
   */
  modifier onlyOptimisticMode() {
    if (!optimisticMode) revert RootManager_onlyOptimisticMode__SlowModeOn();
    _;
  }

  /**
   * @notice Checks if the proposer is in the allow list
   */
  modifier onlyProposer() {
    if (!allowlistedProposers[msg.sender]) revert RootManager_onlyProposer__NotWhitelistedProposer(msg.sender);
    _;
  }

  // ============ Constructor ============

  /**
   * @notice Creates a new RootManager instance.
   * @param _delayBlocks The delay for the validation period for incoming messages in blocks.
   * @param _merkle The address of the MerkleTreeManager on this domain.
   * @param _watcherManager The address of the WatcherManager on this domain.
   */
  constructor(
    uint256 _delayBlocks,
    address _merkle,
    address _watcherManager
  ) ProposedOwnable() WatcherClient(_watcherManager) {
    _setOwner(msg.sender);

    require(_merkle != address(0), "!zero merkle");
    MERKLE = MerkleTreeManager(_merkle);

    delayBlocks = _delayBlocks;
    optimisticMode = true;

    // Initialize pending inbound root queue.
    pendingInboundRoots.initialize();
  }

  // ================ Getters ================

  function getPendingInboundRootsCount() public view returns (uint256) {
    return pendingInboundRoots.length();
  }

  // ============ Admin Functions ============

  /**
   * @notice Adds a proposer to the allowlist.
   * @dev Only allowlisted proposers can call `proposeAggregateRoot`.
   */
  function addProposer(address _proposer) external onlyOwner {
    allowlistedProposers[_proposer] = true;
    emit ProposerAdded(_proposer);
  }

  /**
   * @notice Removes a proposer from the allowlist.
   * @dev Only allowlisted proposers can call `proposeAggregateRoot`.
   */
  function removeProposer(address _proposer) external onlyOwner {
    delete allowlistedProposers[_proposer];
    emit ProposerRemoved(_proposer);
  }

  /**
   * @notice Set the `delayBlocks`, the period in blocks over which an incoming message
   * is verified.
   */
  function setDelayBlocks(uint256 _delayBlocks) public onlyOwner {
    require(_delayBlocks != delayBlocks, "!delayBlocks");
    emit DelayBlocksUpdated(_delayBlocks, delayBlocks);
    delayBlocks = _delayBlocks;
  }

  /**
   * @notice Add a new supported domain and corresponding hub connector to the system. This new domain
   * will receive the propagated aggregate root.
   * @dev Only owner can add a new connector. Address should be the connector on L1.
   * @dev Cannot add address(0) to avoid duplicated domain in array and reduce gas fee while propagating.
   *
   * @param _domain The target spoke domain of the given connector.
   * @param _connector Address of the hub connector.
   */
  function addConnector(uint32 _domain, address _connector) external onlyOwner {
    addDomain(_domain, _connector);
    emit ConnectorAdded(_domain, _connector, domains, connectors);
  }

  /**
   * @notice Remove support for a connector and respective domain. That connector/domain will no longer
   * receive updates for the latest aggregate root.
   * @dev Only watcher can remove a connector.
   * @dev The proposedAggregateRoot will be deleted while the finalizedOptimisticAggregateRoot
   * will continue existing as it is verified.
   * TODO: Could add a metatx-able `removeConnectorWithSig` if we want to use relayers?
   *
   * @param _domain The spoke domain of the target connector we want to remove.
   */
  function removeConnector(uint32 _domain) public onlyWatcher {
    address _connector = removeDomain(_domain);
    delete proposedAggregateRoot;
    emit ConnectorRemoved(_domain, _connector, domains, connectors, msg.sender);
  }

  /**
   * @notice Removes (effectively blocklists) a given (fraudulent) root from the queue of pending
   * inbound roots.
   * @dev The given root does NOT have to currently be in the queue. It isn't removed from the queue
   * directly, but instead is filtered out when dequeuing is done for the sake of aggregation.
   * @dev Can only be called by the owner when the protocol is paused.
   *
   * @param _root The root to be discarded.
   */
  function discardRoot(bytes32 _root) public onlyOwner whenPaused {
    pendingInboundRoots.remove(_root);
    emit RootDiscarded(_root);
  }

  /**
   * @notice Remove ability to renounce ownership
   * @dev Renounce ownership should be impossible as long as watchers can freely remove connectors
   * and only the owner can add them back
   */
  function renounceOwnership() public virtual override(ProposedOwnable, WatcherClient) onlyOwner {}

  // ============ Public Functions ============

  /**
   * @notice Propose a new aggregate root
   * @dev snapshotId, snapshotRoots and domains are needed for validation and data availability for off-chain agents.
   * In the case of domains we need to check which are the current valid domains at the time of proposing.
   * This is gonna be used by the off-chain scripts to know which domains to check when validating each proposition.
   * This is to avoid problems if a new domain is added in the middle of an on-going propose.
   * Domains should be in the same order as they are in this contract.
   * Snapshot roots provided should be in order of insertion and should respect the domains order.
   *
   * @param _snapshotId The snapshot id used
   * @param _aggregateRoot The new aggregate root
   * @param _snapshotsRoots Array of snapshot roots inserted
   * @param _domains Array of all the domains
   */
  function proposeAggregateRoot(
    uint256 _snapshotId,
    bytes32 _aggregateRoot,
    bytes32[] calldata _snapshotsRoots,
    uint32[] calldata _domains
  ) external onlyProposer onlyOptimisticMode checkDomains(_domains) {
    if (_snapshotId != block.timestamp / SNAPSHOT_DURATION)
      revert RootManager_proposeAggregateRoot__InvalidSnapshotId(_snapshotId);
    if (proposedAggregateRoot.aggregateRoot > 0) revert RootManager_proposeAggregateRoot__ProposeInProgress();

    uint256 _endOfDispute = block.timestamp + DISPUTE_TIME;
    proposedAggregateRoot = ProposedData(_endOfDispute, _aggregateRoot);

    emit AggregateRootProposed(_snapshotId, _endOfDispute, _aggregateRoot, MERKLE.root(), _snapshotsRoots, _domains);
  }

  /**
   * @notice Finalizes the proposed aggregate root. This makes the current proposed root the new validated and
   * ready to propagate root.
   * @dev The system has to be in optimistic mode and the end of dispute reached.
   * Finalized root will stop being monitored by off-chain agents.
   */
  function finalize() public onlyOptimisticMode {
    ProposedData memory _proposedAggregateRoot = proposedAggregateRoot;
    if (_proposedAggregateRoot.aggregateRoot == 0) revert RootManager_finalize__InvalidAggregateRoot();
    if (_proposedAggregateRoot.endOfDispute > block.timestamp) revert RootManager_finalize__ProposeInProgress();

    finalizedOptimisticAggregateRoot = _proposedAggregateRoot.aggregateRoot;
    delete proposedAggregateRoot;

    emit ProposedRootFinalized(_proposedAggregateRoot.aggregateRoot);
  }

  /**
   * @notice Unifies the flow of finalize and propagate.
   * @dev Should be called by relayers only when proposed root is ready to be finalized.
   *
   * @param _connectors Array of connectors: should match exactly the array of `connectors` in storage;
   * used here to reduce gas costs, and keep them static regardless of number of supported domains.
   * @param _fees Array of fees in native token for an AMB if required
   * @param _encodedData Array of encodedData: extra params for each AMB if required
   */
  function finalizeAndPropagate(
    address[] calldata _connectors,
    uint256[] calldata _fees,
    bytes[] memory _encodedData
  ) external payable whenNotPaused {
    finalize();
    propagate(_connectors, _fees, _encodedData);
  }

  /**
   * @notice This is called by relayers to take the current aggregate tree root and propagate it to all
   * spoke domains (via their respective hub connectors).
   * @dev Should be called by relayers at a regular interval.
   * Workflow is different depending on the mode the system is in.
   *
   * @param _connectors Array of connectors: should match exactly the array of `connectors` in storage;
   * used here to reduce gas costs, and keep them static regardless of number of supported domains.
   * @param _fees Array of fees in native token for an AMB if required
   * @param _encodedData Array of encodedData: extra params for each AMB if required
   */
  function propagate(
    address[] calldata _connectors,
    uint256[] calldata _fees,
    bytes[] memory _encodedData
  ) public payable whenNotPaused {
    validateConnectors(_connectors);

    uint256 _numDomains = _connectors.length;
    // Sanity check: fees and encodedData lengths matches connectors length.
    require(_fees.length == _numDomains && _encodedData.length == _numDomains, "invalid lengths");

    optimisticMode
      ? _optimisticPropagate(_connectors, _fees, _encodedData)
      : _slowPropagate(_connectors, _fees, _encodedData);
  }

  /**
   * @notice Function used to propagate the aggregate root when the system is in optimistic mode.
   * @dev The root used is the already finalized optimistic root, this function does not use the MERKLE tree nor the
   * pendingInboundRoots queue.
   * Will delete finalizedOptimisticAggregateRoot.
   * Emits a unique event.
   * CRITICAL: This function does NOT check if _connectors sent to it are correct or not.
   * Can always be called internally, since it doesn't check if the system is in optimistic mode or not.
   * All the needed checks must be done before calling this function.
   *
   * @param _connectors Array of connectors: should match exactly the array of `connectors` in storage;
   * used here to reduce gas costs, and keep them static regardless of number of supported domains.
   * @param _fees Array of fees in native token for an AMB if required
   * @param _encodedData Array of encodedData: extra params for each AMB if required
   */
  function _optimisticPropagate(
    address[] calldata _connectors,
    uint256[] calldata _fees,
    bytes[] memory _encodedData
  ) internal {
    bytes32 _aggregateRoot = finalizedOptimisticAggregateRoot;
    if (_aggregateRoot == 0) revert RootManager__optimisticPropagate__EmptyFinalizedOptimisticRoot();

    delete finalizedOptimisticAggregateRoot;

    _sendRootToHubs(_aggregateRoot, _connectors, _fees, _encodedData);
    emit OptimisticRootPropagated(_aggregateRoot, domainsHash);
  }

  /**
   * @notice Function used to propagate the aggregate root when the system is in slow mode.
   * @dev Will dequeue the elements that are ready on pendingInboundRoots queue and insert them in MERKLE tree to generate
   * the new aggregate root that needs to be propagated.
   * Will delete the finalizedOptimisticAggregateRoot to discard an old root with old inboundRoots.
   * Emits a unique event.
   * CRITICAL: This function does NOT check if _connectors sent to it are correct or not.
   * Can always be called internally, since it doesn't check if the system is in slow mode or not.
   * All the needed checks must be done before calling this function.
   *
   * @param _connectors Array of connectors: should match exactly the array of `connectors` in storage;
   * used here to reduce gas costs, and keep them static regardless of number of supported domains.
   * @param _fees Array of fees in native token for an AMB if required
   * @param _encodedData Array of encodedData: extra params for each AMB if required
   */
  function _slowPropagate(
    address[] calldata _connectors,
    uint256[] calldata _fees,
    bytes[] memory _encodedData
  ) internal {
    delete finalizedOptimisticAggregateRoot;
    (bytes32 _aggregateRoot, uint256 _currentCount) = dequeue();
    if (_currentCount <= lastCountBeforeOpMode) revert RootManager__slowPropagate__OldAggregateRoot();
    _sendRootToHubs(_aggregateRoot, _connectors, _fees, _encodedData);
    emit RootPropagated(_aggregateRoot, _currentCount, domainsHash);
  }

  /**
   * @notice Send an aggregate root to every connector.
   * @dev CRITICAL: This function does NOT check if _connectors sent to it are correct or not and can always be called internally.
   * All the needed checks must be done before calling this function.
   *
   * @param _aggregateRoot The aggregate root that needs to be sent to every connector.
   * @param _connectors Array of connectors: should match exactly the array of `connectors` in storage;
   * used here to reduce gas costs, and keep them static regardless of number of supported domains.
   * @param _fees Array of fees in native token for an AMB if required
   * @param _encodedData Array of encodedData: extra params for each AMB if required
   */
  function _sendRootToHubs(
    bytes32 _aggregateRoot,
    address[] calldata _connectors,
    uint256[] calldata _fees,
    bytes[] memory _encodedData
  ) internal {
    // Sanity check: make sure we are not propagating a redundant aggregate root.
    require(_aggregateRoot != lastPropagatedRoot, "redundant root");
    lastPropagatedRoot = _aggregateRoot;

    uint256 sum = msg.value;
    for (uint32 i; i < _connectors.length; ) {
      // Try to send the message with appropriate encoded data and fees
      // Continue on revert, but emit an event
      try
        IHubConnector(_connectors[i]).sendMessage{value: _fees[i]}(abi.encodePacked(_aggregateRoot), _encodedData[i])
      {
        // NOTE: This will ensure there is sufficient msg.value for all fees before calling `sendMessage`
        // This will revert as soon as there are insufficient fees for call i, even if call n > i has
        // sufficient budget, this function will revert
        sum -= _fees[i];
      } catch {
        emit PropagateFailed(domains[i], _connectors[i]);
      }

      unchecked {
        ++i;
      }
    }
  }

  /**
   * @notice Accept an inbound root coming from a given domain's hub connector, enqueuing this incoming
   * root into the current queue as it awaits the verification period.
   * @dev The aggregate tree's root, which will include this inbound root, will be propagated to all spoke
   * domains (via `propagate`) on a regular basis assuming the verification period is surpassed without
   * dispute.
   *
   * @param _domain The source domain of the given root.
   * @param _inbound The inbound root coming from the given domain.
   */
  function aggregate(uint32 _domain, bytes32 _inbound) external whenNotPaused onlyConnector(_domain) {
    if (optimisticMode) revert RootManager_aggregate__OptimisticModeOn();
    uint128 lastIndex = pendingInboundRoots.enqueue(_inbound);
    emit RootReceived(_domain, _inbound, lastIndex);
  }

  /**
   * @notice Dequeue verified inbound roots and insert them into the aggregator tree.
   * @dev Will dequeue a fixed maximum amount of roots to prevent out of gas errors. As such, this
   * method is public and separate from `propagate` so we can curtail an overloaded queue as needed.
   * @dev Reverts if no verified inbound roots are found.
   *
   * @return bytes32 The new aggregate root.
   * @return uint256 The updated count (number of leaves).
   */
  function dequeue() public whenNotPaused returns (bytes32, uint256) {
    // Get all of the verified roots from the queue.
    bytes32[] memory _verifiedInboundRoots = pendingInboundRoots.dequeueVerified(delayBlocks, DEQUEUE_MAX);

    // If there's nothing dequeued, just return the root and count.
    if (_verifiedInboundRoots.length == 0) {
      return MERKLE.rootAndCount();
    }

    // Insert the leaves into the aggregator tree (method will also calculate and return the current
    // aggregate root and count).
    (bytes32 _aggregateRoot, uint256 _count) = MERKLE.insert(_verifiedInboundRoots);

    emit RootsAggregated(_aggregateRoot, _count, _verifiedInboundRoots);

    return (_aggregateRoot, _count);
  }

  /**
   * @notice Watcher can set the system in slow mode.
   * @dev Clear the proposed aggregate root.
   */
  function activateSlowMode() external onlyWatcher onlyOptimisticMode {
    optimisticMode = false;

    delete proposedAggregateRoot;
    emit SlowModeActivated(msg.sender);
  }

  /**
   * @notice Owner can set the system to optimistic mode.
   * @dev Elements in the queue will be discarded.
   * To save gas we are not deleting the elements from the queue, but moving the last counter to first - 1
   * so we can reassign new elements to those positions in the future.
   * Discarded roots will be included on the upcoming optimistic aggregateRoot.
   */
  function activateOptimisticMode() external onlyOwner {
    if (optimisticMode) revert RootManager_activateOptimisticMode__OptimisticModeOn();

    pendingInboundRoots.last = pendingInboundRoots.first - 1;
    lastCountBeforeOpMode = MERKLE.count();

    optimisticMode = true;
    emit OptimisticModeActivated();
  }
}
