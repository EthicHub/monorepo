// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";

import {XAppConnectionManager, TypeCasts} from "../../../../contracts/nomad-core/contracts/XAppConnectionManager.sol";
import {Home} from "../../../../contracts/nomad-core/contracts/Home.sol";

import {AssetLogic} from "../../../../contracts/core/connext/libraries/AssetLogic.sol";
import {IStableSwap} from "../../../../contracts/core/connext/interfaces/IStableSwap.sol";
import {ISponsorVault} from "../../../../contracts/core/connext/interfaces/ISponsorVault.sol";
import {ITokenRegistry} from "../../../../contracts/core/connext/interfaces/ITokenRegistry.sol";
import {TokenRegistry} from "../../../../contracts/core/connext/helpers/TokenRegistry.sol";
import {IBridgeToken} from "../../../../contracts/core/connext/interfaces/IBridgeToken.sol";
import {IWrapped} from "../../../../contracts/core/connext/interfaces/IWrapped.sol";
import {IExecutor} from "../../../../contracts/core/connext/interfaces/IExecutor.sol";
import {Executor} from "../../../../contracts/core/connext/helpers/Executor.sol";
import {ConnextMessage} from "../../../../contracts/core/connext/libraries/ConnextMessage.sol";
import {AssetLogic} from "../../../../contracts/core/connext/libraries/AssetLogic.sol";
import {LibCrossDomainProperty} from "../../../../contracts/core/connext/libraries/LibCrossDomainProperty.sol";
import {CallParams, ExecuteArgs, XCallArgs, PausedFunctions} from "../../../../contracts/core/connext/libraries/LibConnextStorage.sol";
import {LibDiamond} from "../../../../contracts/core/connext/libraries/LibDiamond.sol";
import {BridgeFacet} from "../../../../contracts/core/connext/facets/BridgeFacet.sol";
import {BaseConnextFacet} from "../../../../contracts/core/connext/facets/BaseConnextFacet.sol";
import {TestERC20} from "../../../../contracts/test/TestERC20.sol";
import {PromiseRouter} from "../../../../contracts/core/promise/PromiseRouter.sol";

import {MockXAppConnectionManager, MockHome, MockXApp, MockPromiseRouter, MockCallback, MockWrapper} from "../../../utils/Mock.sol";
import "forge-std/console.sol";
import "./FacetHelper.sol";

contract BridgeFacetTest is BridgeFacet, FacetHelper {
  bytes32 constant TEST_MESSAGE = bytes32("test message");

  // ============ Storage ============
  // diamond storage contract owner
  address _ds_owner = address(987654321);

  // adopted asset for this domain
  address _adopted;
  // local asset for this domain
  address _local;
  // executor contract
  address _executor;
  // mock xapp contract
  address _xapp;
  // mock xapp connection manager
  address _xappConnectionManager;
  // mock home
  address _xappHome;
  // mock promise router
  address payable _promiseRouter;
  // mock callback contract
  address _callback;

  // native asset wrapper
  address _wrapper;

  // default origin sender
  address _originSender = address(4);

  // destination remote handler id
  bytes32 _remote = bytes32("remote");

  // domains
  uint32 _originDomain = 1000;
  uint32 _destinationDomain = 2000;

  // canonical token details
  address _canonical;
  bytes32 _canonicalId;
  uint32 _canonicalDomain = _originDomain;

  // stable swap address
  address _stableSwap = address(5555555555555555555);

  // relayer fee
  uint256 _relayerFee = 0.1 ether;

  // default amount
  uint256 _amount = 1.1 ether;

  // default nonce on xcall
  uint256 _nonce = 1;

  // default recovery address
  address constant _recovery = address(121212);

  // default CallParams
  CallParams _params =
    CallParams(
      address(11), // to
      bytes(""), // callData
      _originDomain, // origin domain
      _destinationDomain, // destination domain
      _recovery, // recovery address
      address(0), // callback
      0, // callbackFee
      false, // forceSlow
      false // receiveLocal
    );

  // ============ Test set up ============
  function setUp() public {
    // Deploy any needed contracts.
    utils_deployContracts();

    setDefaults();

    // Set up asset context. By default, local is the adopted asset - the one the 'user'
    // is using - and is representational (meaning canonically it belongs to another chain).
    utils_setupAsset(true, false);

    // Promise router mock calls.
    vm.mockCall(_promiseRouter, abi.encodeWithSelector(PromiseRouter.send.selector), abi.encode());
    vm.mockCall(_promiseRouter, abi.encodeWithSelector(PromiseRouter.initCallbackFee.selector), abi.encode());

    // Other context setup: configuration, storage, etc.
    s.approvedRelayers[address(this)] = true;
    s.maxRoutersPerTransfer = 5;
    s._routerOwnershipRenounced = true;

    vm.prank(address(this));
    LibDiamond.DiamondStorage storage ds = LibDiamond.diamondStorage();
    ds.contractOwner = _ds_owner;

    // NOTE: Currently, the only time we check for the domain in params to match the contract's
    // domain is within the `xcall` method - so it's safe to set the contract domain to be origin.
    s.domain = _originDomain;
    s.remotes[_destinationDomain] = _remote;
  }

  // ============ Utils ============
  // Utils used in the following tests (as well as setup).

  // Used in set up for deploying any needed peripheral contracts.
  function utils_deployContracts() public {
    // Deploy the adopted token.
    _adopted = address(new TestERC20());
    // Deploy the local token.
    _local = address(new TestERC20());
    // Deploy the canonical token.
    _canonical = address(new TestERC20());
    _canonicalId = bytes32(abi.encodePacked(_canonical));
    // Deploy an executor.
    _executor = address(new Executor(address(this)));
    s.executor = IExecutor(_executor);
    // Deploy a mock xapp consumer.
    _xapp = address(new MockXApp());

    // Deploy a mock home.
    _xappHome = address(new MockHome());
    // Deploy a mock xapp connection manager.
    _xappConnectionManager = address(new MockXAppConnectionManager(MockHome(_xappHome)));
    s.xAppConnectionManager = XAppConnectionManager(_xappConnectionManager);
    // Deploy the promise router.
    s.promiseRouter = new MockPromiseRouter();
    _promiseRouter = payable(s.promiseRouter);

    // Deploy wrapper for native asset.
    s.wrapper = IWrapped(new MockWrapper());
    _wrapper = address(s.wrapper);
    vm.mockCall(_wrapper, abi.encodeWithSelector(IBridgeToken.name.selector), abi.encode("TestERC20"));
    vm.mockCall(_wrapper, abi.encodeWithSelector(IBridgeToken.symbol.selector), abi.encode("TEST"));
    vm.mockCall(_wrapper, abi.encodeWithSelector(IBridgeToken.decimals.selector), abi.encode(18));

    // Deploy a mock callback.
    _callback = address(new MockCallback());
  }

  // Sets the storage and token registry return results.
  function utils_setupAsset(bool localIsAdopted, bool onCanonical) public {
    if (onCanonical) {
      _local = _canonical;
      _canonicalDomain = _originDomain;
    } else {
      // If the local is already set to the canonical (i.e. from some defaults)
      // redeploy
      if (_local == _canonical) {
        _local = address(new TestERC20());
      }
      _canonicalDomain = _destinationDomain;
    }
    if (localIsAdopted) {
      _adopted = _local;
      _stableSwap = address(0);
    } else {
      // If the adopted is already set as the local, redeploy
      if (_adopted == _local) {
        _adopted = address(new TestERC20());
      }
      if (_stableSwap == address(0)) {
        _stableSwap = address(5555555555555555555);
      }
    }
    // token registry should always return the canonical
    vm.mockCall(
      _tokenRegistry,
      abi.encodeWithSelector(ITokenRegistry.getTokenId.selector),
      abi.encode(_canonicalDomain, _canonicalId)
    );

    // if you are not on canonical domain, ensure the local origin returns false
    // (indicates whether token should be burned or not)
    vm.mockCall(_tokenRegistry, abi.encodeWithSelector(ITokenRegistry.isLocalOrigin.selector), abi.encode(onCanonical));

    // ensure local token should always return the local token wrt current domain
    vm.mockCall(_tokenRegistry, abi.encodeWithSelector(ITokenRegistry.ensureLocalToken.selector), abi.encode(_local));

    // Ensure token registry is always returned properly
    vm.mockCall(_tokenRegistry, abi.encodeWithSelector(ITokenRegistry.getLocalAddress.selector), abi.encode(_local));

    // Setup the storage variables
    s.adoptedToCanonical[_adopted] = ConnextMessage.TokenId(_canonicalDomain, _canonicalId);
    s.adoptedToLocalPools[_canonicalId] = IStableSwap(_stableSwap);
    s.canonicalToAdopted[_canonicalId] = _adopted;

    // // Log stored vars
    // console.log("setup asset:");
    // console.log("- adopted:", _adopted);
    // console.log("- local:", _local);
    // console.log("- canonical:", _canonical);
    // console.log("- stableSwap:", _stableSwap);
    // console.log("- wrapper:", address(s.wrapper));
    // console.log("- isLocalOrigin", onCanonical);
  }

  function utils_setupNative(bool localIsAdopted, bool onCanonical) public {
    // When you are using the native asset:
    // - canonical asset will always be the wrapper
    // - adopted asset will always be the wrapper
    // - the local asset may or may not be the wrapper
    if (onCanonical) {
      // The wrapper is canonical when on the canonical domain
      // only
      _canonical = address(s.wrapper);
      _canonicalId = bytes32(abi.encodePacked(_canonical));
    } else {
      // If localIsAdopted, then the local asset is the wrapper
      if (localIsAdopted) {
        // this is like if madETH is adopted on cronos. in this case,
        // the wrapper must also have the `detailsHash()` functionality
        // this is handled in the other utility function (see `utils_formatMessage`)
        _local = address(new TestERC20());
        _adopted = _local;
      } else {
        // The adopted asset is the wrapper, local is bridge token
        _adopted = address(s.wrapper);
      }
    }
    utils_setupAsset(localIsAdopted, onCanonical);
  }

  // Meant to mimic the corresponding `_getTransferId` method in the BridgeFacet contract.
  function utils_getTransferIdFromXCallArgs(
    XCallArgs memory _args,
    address sender,
    bytes32 canonicalId,
    uint32 canonicalDomain
  ) public view returns (bytes32) {
    return keccak256(abi.encode(s.nonce, _args.params, sender, canonicalId, canonicalDomain, _args.amount));
  }

  // Meant to mimic the corresponding `_getTransferId` method in the BridgeFacet contract.
  function utils_getTransferIdFromExecuteArgs(ExecuteArgs memory _args) public returns (bytes32) {
    return
      keccak256(
        abi.encode(_args.nonce, _args.params, _args.originSender, _canonicalId, _canonicalDomain, _args.amount)
      );
  }

  // Makes some mock xcall arguments using params set in storage.
  function utils_makeXCallArgs() public returns (bytes32, XCallArgs memory) {
    // get args
    XCallArgs memory args = XCallArgs(
      _params,
      _adopted == address(s.wrapper) ? address(0) : _adopted, // transactingAssetId : could be adopted, local, or wrapped.
      _amount,
      _relayerFee
    );
    // generate transfer id
    bytes32 transferId = utils_getTransferIdFromXCallArgs(args, _originSender, _canonicalId, _canonicalDomain);

    return (transferId, args);
  }

  function utils_makeXCallArgs(address transactingAssetId) public returns (bytes32, XCallArgs memory) {
    // get args
    XCallArgs memory args = XCallArgs(
      _params,
      transactingAssetId, // transactingAssetId : could be adopted, local, or wrapped.
      _amount,
      _relayerFee
    );
    // generate transfer id
    bytes32 transferId = utils_getTransferIdFromXCallArgs(args, _originSender, _canonicalId, _canonicalDomain);

    return (transferId, args);
  }

  // Makes some mock router signatures.
  function utils_makeRouterSignatures(
    bytes32 _transferId,
    address[] memory _routers,
    uint256[] memory _keys
  ) public returns (bytes[] memory) {
    uint256 pathLen = _routers.length;
    bytes[] memory signatures = new bytes[](pathLen);
    if (pathLen == 0) {
      return signatures;
    }
    bytes32 preImage = keccak256(abi.encode(_transferId, pathLen));
    bytes32 toSign = ECDSA.toEthSignedMessageHash(preImage);
    for (uint256 i; i < pathLen; i++) {
      (uint8 v, bytes32 r, bytes32 _s) = vm.sign(_keys[i], toSign);
      signatures[i] = abi.encodePacked(r, _s, v);
    }
    return signatures;
  }

  // Makes some mock execute arguments with given router/key pairs.
  function utils_makeExecuteArgs(address[] memory routers, uint256[] memory keys)
    public
    returns (bytes32, ExecuteArgs memory)
  {
    // get args
    bytes[] memory empty = new bytes[](0);
    ExecuteArgs memory args = ExecuteArgs(_params, _local, routers, empty, _relayerFee, _amount, _nonce, _originSender);
    // generate transfer id
    bytes32 transferId = utils_getTransferIdFromExecuteArgs(args);
    // generate router signatures if applicable
    if (routers.length > 0) {
      args.routerSignatures = utils_makeRouterSignatures(transferId, routers, keys);
    }
    return (transferId, args);
  }

  // Make execute args, fill in a number of router/key pairs.
  // Specifically input 0 to make execute arguments with no routers/keys for slow liq simulation.
  function utils_makeExecuteArgs(uint256 num) public returns (bytes32, ExecuteArgs memory) {
    if (num == 0) {
      address[] memory routers;
      uint256[] memory keys;
      return utils_makeExecuteArgs(routers, keys);
    }
    address[] memory routers = new address[](num);
    uint256[] memory keys = new uint256[](num);
    for (uint256 i; i < num; i++) {
      routers[i] = vm.addr(777 + i);
      keys[i] = 777 + i;
    }
    return utils_makeExecuteArgs(routers, keys);
  }

  // Intended to mock the fast transfer amount calculation in the target contract.
  function utils_getFastTransferAmount(uint256 _amount) public returns (uint256) {
    // This is the method used internally to get the amount of tokens to transfer after liquidity
    // fees are taken.
    return (_amount * s.LIQUIDITY_FEE_NUMERATOR) / s.LIQUIDITY_FEE_DENOMINATOR;
  }

  // Mimics the xcall message formatting. Reduced functionality : won't burn any tokens, for example.
  function utils_formatMessage(
    XCallArgs memory _args,
    address _asset,
    bytes32 _transferId,
    uint256 _amount
  ) public returns (bytes memory) {
    IBridgeToken token = IBridgeToken(_asset);

    bytes32 detailsHash;
    if (s.tokenRegistry.isLocalOrigin(_asset)) {
      detailsHash = ConnextMessage.formatDetailsHash(token.name(), token.symbol(), token.decimals());
    } else {
      detailsHash = token.detailsHash();
    }

    bytes29 action = ConnextMessage.formatTransfer(
      TypeCasts.addressToBytes32(_args.params.to),
      _amount,
      detailsHash,
      _transferId
    );
    (uint32 canonicalDomain, bytes32 canonicalId) = s.tokenRegistry.getTokenId(_asset);
    bytes29 tokenId = ConnextMessage.formatTokenId(canonicalDomain, canonicalId);

    return ConnextMessage.formatMessage(tokenId, action);
  }

  // Wraps reconcile in order to enable externalizing the call.
  function utils_wrappedReconcile(uint32 origin, bytes memory message) external {
    _reconcile(origin, message);
  }

  // ============== Helpers ==================
  // Helpers used for executing target methods with given params that assert expected base behavior.
  function helpers_setupSuccessfulXcallCallAssertions(
    bytes32 transferId,
    XCallArgs memory args,
    uint256 bridgedAmt,
    bool isNative,
    bool shouldSwap
  ) public {
    // bridged is either local or canonical, depending on domain xcall originates on
    address bridged = _canonicalDomain == args.params.originDomain ? _canonical : _local;
    BridgeFacet.XCalledEventArgs memory eventArgs = BridgeFacet.XCalledEventArgs({
      transactingAssetId: isNative ? address(s.wrapper) : args.transactingAssetId,
      amount: args.amount,
      bridgedAmt: bridgedAmt,
      bridged: bridged
    });
    bytes memory message = utils_formatMessage(args, bridged, transferId, bridgedAmt);
    vm.expectEmit(true, true, true, true);
    emit XCalled(transferId, args, eventArgs, s.nonce, message, _originSender);

    // assert swap if expected
    if (shouldSwap && bridgedAmt > 0) {
      // Transacting asset shouldve been approved for amount in
      vm.expectCall(
        eventArgs.transactingAssetId,
        abi.encodeWithSelector(IERC20.approve.selector, _stableSwap, args.amount)
      );

      // swapExact on pool should have been called
      vm.expectCall(
        _stableSwap,
        abi.encodeWithSelector(IStableSwap.swapExact.selector, args.amount, eventArgs.transactingAssetId, _local)
      );
    }

    if (args.params.callbackFee > 0) {
      // Assert that CallbackFee would be paid by the user.
      vm.expectCall(
        _promiseRouter,
        args.params.callbackFee,
        abi.encodeWithSelector(PromiseRouter.initCallbackFee.selector, transferId)
      );
    }
    // Assert dispatch call
    vm.expectCall(
      _xappHome,
      0,
      abi.encodeWithSelector(Home.dispatch.selector, args.params.destinationDomain, _remote, message)
    );

    // if the token is a representation token, ensure that burn is called
    if (bridged != _canonical && bridgedAmt > 0) {
      vm.expectCall(_local, abi.encodeWithSelector(TestERC20.burn.selector, address(this), bridgedAmt));
    }
  }

  // Calls `xcall` with given args and handles standard assertions.
  function helpers_xcallAndAssert(
    bytes32 transferId,
    XCallArgs memory args,
    uint256 dealTokens,
    uint256 bridgedAmt,
    bytes4 expectedError,
    bool shouldSwap
  ) public {
    bool isNative = args.transactingAssetId == address(0);
    bool shouldSucceed = keccak256(abi.encode(expectedError)) == keccak256(abi.encode(bytes4("")));
    bool isCanonical = _canonicalDomain == args.params.originDomain;

    // Deal the user required eth for transfer.
    vm.deal(_originSender, 100 ether);

    uint256 initialUserBalance;
    uint256 initialContractBalance;
    if (isNative) {
      initialUserBalance = payable(_originSender).balance;
      initialContractBalance = payable(address(this)).balance;
    } else {
      TestERC20 tokenIn = TestERC20(args.transactingAssetId);
      TestERC20 localToken = TestERC20(_local);

      // Mint the specified amount of tokens for the user.
      tokenIn.mint(_originSender, dealTokens);

      initialUserBalance = tokenIn.balanceOf(_originSender);
      initialContractBalance = localToken.balanceOf(address(this));

      // Approve the target contract to spend the specified amount of tokens.
      vm.prank(_originSender);
      tokenIn.approve(address(this), dealTokens);
    }

    if (shouldSwap) {
      // Setup the expected swap mock (adopted <> local)
      vm.mockCall(_stableSwap, abi.encodeWithSelector(IStableSwap.swapExact.selector), abi.encode(bridgedAmt, _local));
    }

    assertEq(s.relayerFees[transferId], 0);

    if (shouldSucceed) {
      helpers_setupSuccessfulXcallCallAssertions(transferId, args, bridgedAmt, isNative, shouldSwap);
    } else {
      vm.expectRevert(expectedError);
    }

    uint256 fees = args.relayerFee + args.params.callbackFee;
    vm.prank(_originSender);
    this.xcall{value: isNative ? fees + args.amount : fees}(args);

    if (shouldSucceed) {
      if (isNative) {
        // Should have custodied the relayer fee, sent any callback fee to the promise router, and deposited the
        // amount into the wrapper contract.
        assertEq(payable(address(this)).balance, initialContractBalance + args.relayerFee);
      } else {
        // User should have been debited fees... but also tx cost?
        // assertEq(payable(_originSender).balance, initialUserBalance - fees);

        // Check that the user has been debited the correct amount of tokens.
        assertEq(TestERC20(args.transactingAssetId).balanceOf(_originSender), initialUserBalance - args.amount);

        // Check that the contract has been credited the correct amount of tokens.
        // NOTE: Because the tokens are a representational local asset, they are burnt. The contract
        // should NOT be holding any additional tokens after xcall completes.
        if (isCanonical) {
          // This should be a canonical asset transfer
          assertEq(TestERC20(_canonical).balanceOf(address(this)), initialContractBalance + bridgedAmt);
        } else {
          // NOTE: Normally the adopted asset would be swapped into the local asset and then
          // the local asset would be burned. Because the swap increases the contracts balance
          // the prod difference in balance is net 0. However, because the swap here is mocked,
          // when a swap occurrs no balance increase of local happens (i.e. if swap needed, the
          // balance will decrease by bridgedAmt / what is burned)
          uint256 expected = initialContractBalance - bridgedAmt;
          if (args.transactingAssetId == _local) {
            // also sent funds in
            expected += args.amount;
          }
          assertEq(TestERC20(_local).balanceOf(address(this)), expected);
        }
      }
      // Should have updated relayer fees mapping.
      assertEq(this.relayerFees(transferId), args.relayerFee);

      if (args.params.callbackFee > 0) {
        // TODO: For some reason, balance isn't changing. Perhaps the vm.mockCall prevents this?
        // CallbackFee should be delivered to the PromiseRouter.
        // assertEq(_promiseRouter.balance, _params.callbackFee);
      }
    } else {
      // Should have reverted.
      assertEq(this.relayerFees(transferId), 0);
    }
  }

  // Shortcut for the main fn. Generates args within this method.
  function helpers_xcallAndAssert(
    bytes4 expectedError,
    uint256 bridged,
    bool swaps
  ) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    uint256 dealTokens = (args.transactingAssetId == address(0)) ? 0 : args.amount;
    helpers_xcallAndAssert(transferId, args, dealTokens, bridged, expectedError, swaps);
  }

  function helpers_xcallAndAssert(bytes4 expectedError) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    uint256 dealTokens = (args.transactingAssetId == address(0)) ? 0 : args.amount;
    helpers_xcallAndAssert(transferId, args, dealTokens, 0, expectedError, false);
  }

  // Shortcut for the above fn, with no expected error.
  function helpers_xcallAndAssert(uint256 bridged, bool swaps) public {
    helpers_xcallAndAssert(bytes4(""), bridged, swaps);
  }

  // Shortcut for the above fn, no expected error, specified transacting asset
  function helpers_xcallAndAssert(
    uint256 bridged,
    address transacting,
    bool swaps
  ) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs(transacting);
    uint256 dealTokens = transacting == address(0) ? 0 : args.amount;
    helpers_xcallAndAssert(transferId, args, dealTokens, bridged, bytes4(""), swaps);
  }

  // Shortcut for the main fn.
  function helpers_xcallAndAssert(
    uint256 dealTokens,
    uint256 bridged,
    bool swaps
  ) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    helpers_xcallAndAssert(transferId, args, dealTokens, bridged, bytes4(""), swaps);
  }

  // FIXME: what about handling assertions on external call data calls?
  // Calls `execute` on the target method with the given args and asserts expected behavior.
  function helpers_executeAndAssert(
    bytes32 transferId,
    ExecuteArgs memory _args,
    bool toShouldReceive // Whether the `to` address should receive the tokens.
  ) public {
    // get pre-execute liquidity in local
    uint256 pathLen = _args.routers.length;
    uint256[] memory prevLiquidity = new uint256[](pathLen);
    for (uint256 i; i < pathLen; i++) {
      prevLiquidity[i] = s.routerBalances[_args.routers[i]][_local];
    }

    // get pre-execute balance here in local
    uint256 prevBalance = IERC20(_local).balanceOf(address(this));

    // get pre-execute to balance in adopted
    IERC20 token = IERC20(s.canonicalToAdopted[_canonicalId]);
    uint256 prevBalanceTo = token.balanceOf(_params.to);

    // execute
    uint256 transferred = pathLen == 0 ? _args.amount : utils_getFastTransferAmount(_args.amount);
    vm.expectEmit(true, true, false, true);
    emit Executed(transferId, _args.params.to, _args, _args.local, transferred, address(this));
    this.execute(_args);

    // check local balance
    if (pathLen > 0) {
      // should decrement router balance
      uint256 decrement = transferred / pathLen;
      for (uint256 i; i < pathLen; i++) {
        assertEq(s.routerBalances[_args.routers[i]][_args.local], prevLiquidity[i] - decrement);
      }
    } else {
      // should decrement balance of bridge
      assertEq(IERC20(_local).balanceOf(address(this)), prevBalance - _amount);
    }

    if (toShouldReceive) {
      // should increment balance of `to` in `adopted`
      assertEq(token.balanceOf(_params.to), prevBalanceTo + transferred);
    } else {
      // should NOT have incremented balance of `to` in `adopted`
      assertEq(token.balanceOf(_params.to), prevBalanceTo);
    }

    // should mark the transfer as executed
    assertEq(s.transferRelayer[transferId], address(this));

    // should have assigned transfer as routed
    address[] memory savedRouters = this.routedTransfers(transferId);
    for (uint256 i; i < savedRouters.length; i++) {
      assertEq(savedRouters[i], _args.routers[i]);
    }
  }

  // Shortcut for above method
  function helpers_executeAndAssert(bytes32 transferId, ExecuteArgs memory _args) public {
    helpers_executeAndAssert(transferId, _args, true);
  }

  // Helper for calling `reconcile` and asserting expected behavior.
  function helpers_reconcileAndAssert(
    bytes32 transferId,
    XCallArgs memory args,
    bytes4 expectedError
  ) public {
    bool isNative = args.transactingAssetId == address(0);
    bool shouldSucceed = keccak256(abi.encode(expectedError)) == keccak256(abi.encode(bytes4("")));

    // Derive message from xcall arguments.
    bytes memory message;
    address bridged;
    {
      uint256 bridgedAmt = args.amount;
      // FIXME: wrong asset, handle adopted
      bridged = isNative ? address(s.wrapper) : _local;
      BridgeFacet.XCalledEventArgs memory eventArgs = BridgeFacet.XCalledEventArgs({
        transactingAssetId: isNative ? address(s.wrapper) : args.transactingAssetId,
        amount: args.amount,
        bridgedAmt: bridgedAmt,
        bridged: bridged
      });
      message = utils_formatMessage(args, bridged, transferId, bridgedAmt);
    }

    uint256[] memory routerBalances = new uint256[](s.routedTransfers[transferId].length);
    for (uint256 i = 0; i < s.routedTransfers[transferId].length; i++) {
      // Warming up the slot in order to make gas estimates more accurate to appropriate conditions.
      s.routerBalances[s.routedTransfers[transferId][i]][bridged] = 1 ether;
      routerBalances[i] = 1 ether;
    }

    // Get pre-reconcile balances.
    uint256 prevBalance;
    if (isNative) {
      prevBalance = payable(address(this)).balance;
    } else {
      prevBalance = IERC20(bridged).balanceOf(address(this));
    }

    if (shouldSucceed) {
      vm.expectEmit(true, true, true, true);
      emit Reconciled(transferId, _originDomain, s.routedTransfers[transferId], _local, args.amount, address(this));
    } else {
      vm.expectRevert(expectedError);
    }

    // FIXME: still dont know what this does
    this.utils_wrappedReconcile(_originDomain, message);

    if (shouldSucceed) {
      assertEq(this.reconciledTransfers(transferId), true);
      address[] memory routers = this.routedTransfers(transferId);
      if (routers.length > 0) {
        // Fast liquidity route. Should have reimbursed routers.
        uint256 routerAmt = args.amount / s.routedTransfers[transferId].length;
        for (uint256 i = 0; i < routers.length; i++) {
          assertEq(s.routerBalances[routers[i]][_local], routerBalances[i] + routerAmt);
        }
      }
    }
  }

  function helpers_reconcileAndAssert(bytes4 expectedError) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    helpers_reconcileAndAssert(transferId, args, expectedError);
  }

  // Shortcut for above method.
  function helpers_reconcileAndAssert() public {
    helpers_reconcileAndAssert(bytes4(""));
  }

  // ============ Getters ==============

  function test_BridgeFacet_domain_works() public {
    s.domain = 0;
    assertEq(this.domain(), 0);
    s.domain = _destinationDomain;
    assertEq(this.domain(), _destinationDomain);
  }

  function test_BridgeFacet_executor_works() public {
    s.executor = IExecutor(address(0));
    assertEq(address(this.executor()), address(0));
    s.executor = IExecutor(_local);
    assertEq(address(this.executor()), _local);
  }

  function test_BridgeFacet_nonce_works() public {
    s.nonce = 0;
    assertEq(this.nonce(), 0);
    s.nonce = _destinationDomain;
    assertEq(this.nonce(), _destinationDomain);
  }

  function test_BridgeFacet_sponsorVault_works() public {
    s.sponsorVault = ISponsorVault(address(0));
    assertEq(address(this.sponsorVault()), address(0));
    s.sponsorVault = ISponsorVault(_local);
    assertEq(address(this.sponsorVault()), _local);
  }

  function test_BridgeFacet_promiseRouter_works() public {
    s.promiseRouter = PromiseRouter(payable(address(0)));
    assertEq(address(this.promiseRouter()), address(0));
    s.promiseRouter = PromiseRouter(payable(_local));
    assertEq(address(this.promiseRouter()), _local);
  }

  // The rest (relayerFees, routedTransfers, reconciledTransfers) are checked on
  // assertions for xcall / reconcile / execute

  // ============ Admin methods ==============
  // setPromiseRouter
  // FIXME: open question, test the modifiers within a base connext facet
  // test? probably makes most sense rather than repeatedly testing the same
  // code
  function test_BridgeFacet__setPromiseRouter_failIfNotOwner() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setPromiseRouter_failIfNoChange() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setPromiseRouter_failIfNotContract() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setPromiseRouter_works() public {
    // require(false, "not tested");
  }

  // setExecutor
  function test_BridgeFacet__setExecutor_failIfNotOwner() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setExecutor_failIfNoChange() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setExecutor_failIfNotContract() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setExecutor_works() public {
    // require(false, "not tested");
  }

  // setSponsorVault
  function test_BridgeFacet__setSponsorVault_failIfNotOwner() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setSponsorVault_failIfNoChange() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setSponsorVault_failIfNotContract() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__setSponsorVault_works() public {
    // require(false, "not tested");
  }

  // ============ Public methods ==============

  // ============ xcall ============

  // ============ xcall fail cases
  // fails if paused
  // FIXME: move to base connext test file
  function test_BridgeFacet__xcall_failIfPaused() public {
    // require(false, "not tested");
  }

  // fails if origin domain is incorrect
  function test_BridgeFacet__xcall_failIfDomainIncorrect() public {
    _params.originDomain = 999999;
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_wrongDomain.selector);
  }

  // TODO: fails if destination domain does not have an xapp router registered
  // FIXME: this should be tested at the integration level (i.e. when we deploy
  // the contracts via Deployer.sol), or on a facet that asserts this

  // fails if recipient `to` not a valid address (i.e. != address(0))
  function test_BridgeFacet__xcall_failIfNoRecipient() public {
    _params.to = address(0);
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_emptyTo.selector);
  }

  // fails if callback fee > 0 but callback address is not defined
  function test_BridgeFacet__xcall_failIfCallbackFeeButNoContract() public {
    _params.callback = address(0);
    _params.callbackFee = 0.001 ether;
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_nonZeroCallbackFeeForCallback.selector);
  }

  // TODO?: fails if callback is defined (and is a contract) but callback fee is 0 ??
  // FIXME: should allow this behavior

  // fails if callback is defined but not a contract
  function test_BridgeFacet__xcall_failIfCallbackNotAContract() public {
    _params.callback = address(42);
    _params.callbackFee = 0.001 ether;
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_callbackNotAContract.selector);
  }

  // FIXME: this may not allow you to send in mad assets on chains where you have the
  // adopted asset address sent to something else. see fixme in source file
  // fails if asset is not supported (i.e. s.adoptedToCanonical[transactingAssetId].id == bytes32(0))
  function test_BridgeFacet__xcall_failIfAssetNotSupported() public {
    s.adoptedToCanonical[_local] = ConnextMessage.TokenId(0, bytes32(0));
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_notSupportedAsset.selector);
  }

  // fails if native asset wrapper is not supported (i.e. s.adoptedToCanonical[transactingAssetId].id == bytes32(0))
  function test_BridgeFacet__xcall_failIfNativeAssetWrapperNotSupported() public {
    utils_setupNative(true, true);
    s.adoptedToCanonical[address(s.wrapper)] = ConnextMessage.TokenId(0, bytes32(0));
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_notSupportedAsset.selector);
  }

  // FIXME: this is antipattern. the asset logic library functions should be handled
  // in a separate test file,
  // fails if native token transfer and amount of native tokens sent is < amount + relayerFee + callbackFee
  function test_BridgeFacet__xcall_failNativeAssetCallbackFeeInsufficient() public {
    vm.deal(_originSender, 100 ether);
    utils_setupNative(true, true);
    _params.callback = _callback;
    _params.callbackFee = 0.01 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_notAmount.selector);
    vm.prank(_originSender);
    // Sending only the amount + relayer fee; callbackFee is not covered!
    this.xcall{value: args.relayerFee + args.amount}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if native token transfer and amount of native tokens sent is < amount + relayerFee
  function test_BridgeFacet__xcall_failNativeAssetRelayerFeeInsufficient() public {
    vm.deal(_originSender, 100 ether);
    utils_setupNative(true, true);
    _relayerFee = 0.002 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_notAmount.selector);
    vm.prank(_originSender);
    // Sending only the amount; relayer fee is not covered!
    this.xcall{value: args.amount}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if erc20 transfer and eth sent < relayerFee + callbackFee
  function test_BridgeFacet__xcall_failEthWithErc20TransferInsufficient() public {
    utils_setupAsset(true, false);
    vm.deal(_originSender, 100 ether);
    _relayerFee = 0.1 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_ethWithErcTransfer.selector);
    vm.prank(_originSender);
    // Sending insufficent eth to cover relayer fee.
    this.xcall{value: 0.08 ether}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if erc20 transfer and eth sent > relayerFee + callbackFee
  function test_BridgeFacet__xcall_failEthWithErc20TransferUnnecessary() public {
    vm.deal(_originSender, 100 ether);
    _relayerFee = 0.1 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_ethWithErcTransfer.selector);
    vm.prank(_originSender);
    // Sending too much eth.
    this.xcall{value: 1 ether}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if user has insufficient tokens
  function test_BridgeFacet__xcall_failInsufficientErc20Tokens() public {
    _amount = 10.1 ether;
    TestERC20 localToken = TestERC20(_local);
    localToken.mint(_originSender, 10 ether);
    vm.prank(_originSender);
    localToken.approve(address(this), 10.1 ether);

    vm.deal(_originSender, 100 ether);

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert("ERC20: transfer amount exceeds balance");
    vm.prank(_originSender);
    this.xcall{value: args.relayerFee}(args);
  }

  // fails if user has not set enough allowance
  function test_BridgeFacet__xcall_failInsufficientErc20Approval() public {
    _amount = 10.1 ether;
    TestERC20 localToken = TestERC20(_local);
    localToken.mint(_originSender, 10.1 ether);
    vm.prank(_originSender);
    localToken.approve(address(this), 10 ether);

    vm.deal(_originSender, 100 ether);

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert("ERC20: transfer amount exceeds allowance");
    vm.prank(_originSender);
    this.xcall{value: args.relayerFee}(args);
  }

  // ============ xcall success cases
  // asset cases:
  // - works on remote domain
  //   - transferring native (local == adopted)
  //   - transferring native (local != adopted)
  //   - transferring asset (local == adopted)
  //   - transferring asset (local != adopted)

  // - works on cannonical domain
  //   - transferring native (local == adopted)
  //   - transferring asset (local == adopted)
  // canonincal token transfer on canonical domain
  function test_BridgeFacet__xcall_canonicalTokenTransferWorks() public {
    utils_setupAsset(true, true);
    utils_makeXCallArgs(_canonical);
    helpers_xcallAndAssert(_amount, false);
  }

  // local token transfer on non-canonical domain (local != adopted)
  function test_BridgeFacet__xcall_localTokenTransferWorksWithAdopted() public {
    uint256 bridged = (_amount * 9995) / _liquidityFeeDenominator;
    utils_setupAsset(false, false);
    helpers_xcallAndAssert(bridged, true);
  }

  // local token transfer on non-canonical domain (local == adopted)
  function test_BridgeFacet__xcall_localTokenTransferWorksWithoutAdopted() public {
    utils_setupAsset(true, false);
    helpers_xcallAndAssert(_amount, false);
  }

  // native asset transfer on canonical domain
  function test_BridgeFacet__xcall_nativeTransferWorksOnCanonical() public {
    utils_setupNative(true, true);
    helpers_xcallAndAssert(_amount, false);
  }

  // native asset transfer on non-canonical domain with local == adopted
  // i.e. get ETH on arbitrum from cronos
  // adopted = address(madETH cronos)
  // local = address(madETH on cronos)
  // canonical = address(mainnet wrapper)
  function test_BridgeFacet__xcall_nativeTransferWorksOnRemote() public {
    utils_setupNative(true, false);
    helpers_xcallAndAssert(_amount, _local, false);
  }

  // native asset transfer on non-canonical domain with local != adopted
  // i.e. native arbitrum eth transfer to matic weth
  // adopted = address(arbitrum wrapper)
  // canonical = address(eth wrapper)
  // local = address(madETH on arbitrum)
  function test_BridgeFacet__xcall_nativeTransferWorksOnRemoteWithAdopted() public {
    utils_setupNative(false, false);
    helpers_xcallAndAssert(_amount, address(0), true);
  }

  // adopted asset transfer
  function test_BridgeFacet__xcall_adoptedTransferWorks() public {
    utils_setupAsset(false, false);
    uint256 bridged = (_amount * 9995) / _liquidityFeeDenominator;
    helpers_xcallAndAssert(bridged, true);
  }

  // FIXME: should work with fee on transfer tokens
  function test_BridgeFacet__xcall_feeOnTransferWorks() public {
    // require(false, "not tested");
  }

  // should work with positive slippage
  function test_BridgeFacet__xcall_worksWithPositiveSlippage() public {
    utils_setupAsset(false, false);
    uint256 bridged = (_amount * 10005) / _liquidityFeeDenominator;
    helpers_xcallAndAssert(bridged, true);
  }

  // should work with 0 value
  function test_BridgeFacet__xcall_worksWithoutValue() public {
    _amount = 0;
    helpers_xcallAndAssert(0, true);
  }

  // should send promise router callback fee
  function test_BridgeFacet__xcall_shouldHandleCallbackFee() public {
    _params.callback = _callback;
    _params.callbackFee = 0.02 ether;
    helpers_xcallAndAssert(_amount, false);
  }

  // works if relayer fee is set to 0
  function test_BridgeFacet__xcall_zeroRelayerFeeWorks() public {
    _relayerFee = 0;
    helpers_xcallAndAssert(_amount, false);
  }

  // works with callback fee set to 0
  function test_BridgeFacet__xcall_zeroCallbackFeesWorks() public {
    _params.callbackFee = 0;
    helpers_xcallAndAssert(_amount, false);
  }

  // FIXME: works if swap isnt required and swaps are paused
  // move to base connext facet test
  function test_BridgeFacet__xcall_worksIfNoSwapAndSwapPaused() public {
    // require(false, "not tested");
  }

  // =========== handle / reconcile ==========
  // FIXME: only needs tests depending on where we want to put the modifier tests
  // TODO: test handle? stub `_reconcile` and basically just test only nomad router permissions

  // ============ reconcile fail cases
  // fail if message is invalid
  // mustBeMessage > tryAsMessage > assertValid
  // typeOf(memView) == 0xffffffffff || not(gt( (loc(memView) + len(memView)) , mload(0x40)))
  // "Validity assertion failed"
  function test_BridgeFacet__reconcile_invalidMessage() public {
    // require(false, "not tested");
  }

  // fails if action is not transfer
  function test_BridgeFacet__reconcile_invalidTransfer() public {
    // require(false, "not tested");
  }

  // fails if already reconciled (s.reconciledTransfers[transferId] = true)
  function test_BridgeFacet__reconcile_failIfAlreadyReconciled() public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    s.reconciledTransfers[transferId] = true;
    helpers_reconcileAndAssert(transferId, args, BridgeFacet.BridgeFacet__reconcile_alreadyReconciled.selector);
  }

  // TODO?: fails if canonical asset and not enough balance ??

  // ============ reconcile success cases
  // works with local representational tokens (remote origin, so they will be minted)
  function test_BridgeFacet__reconcile_worksWithLocal() public {
    helpers_reconcileAndAssert();
  }

  function test_BridgeFacet__reconcile_worksWithCanonical() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__reconcile_worksPreExecute() public {
    // require(false, "not tested");
  }

  // funds router when post-execute (fast liquidity route)
  function test_BridgeFacet__reconcile_fastLiquiditySingleRouterWorks() public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    s.routedTransfers[transferId] = [address(42)];
    helpers_reconcileAndAssert(transferId, args, bytes4(""));
  }

  // funds routers when post-execute multipath (fast liquidity route)
  function test_BridgeFacet__reconcile_fastLiquidityMultipathWorks() public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    s.routedTransfers[transferId] = [address(42), address(43), address(44), address(45)];
    helpers_reconcileAndAssert(transferId, args, bytes4(""));
  }

  // ============ execute ============
  // ============ execute fail cases
  // should fail if bridging paused
  function test_BridgeFacet__execute_failIfBridgingPaused() public {
    // set context
    s._paused = PausedFunctions.Bridge;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // expect failure
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__whenBridgeNotPaused_bridgePaused.selector);
    this.execute(args);
  }

  // should fail if all paused
  function test_BridgeFacet__execute_failIfAllPaused() public {
    // set context
    s._paused = PausedFunctions.All;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // expect failure
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__whenBridgeNotPaused_bridgePaused.selector);
    this.execute(args);
  }

  // should fail if all swap paused && needs swap
  function test_BridgeFacet__execute_failIfSwapPaused() public {
    // setup asset context (use local == adopted)
    address adopted = address(11111111111111111);
    s.adoptedToCanonical[adopted] = ConnextMessage.TokenId(_canonicalDomain, _canonicalId);
    s.adoptedToLocalPools[_canonicalId] = IStableSwap(address(0));
    s.canonicalToAdopted[_canonicalId] = adopted;
    vm.mockCall(_tokenRegistry, abi.encodeWithSelector(ITokenRegistry.getLocalAddress.selector), abi.encode(adopted));

    // set context
    s._paused = PausedFunctions.Swap;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // set liquidity context
    for (uint256 i; i < args.routers.length; i++) {
      s.routerBalances[args.routers[i]][args.local] += 10 ether;
    }

    // expect failure
    vm.expectRevert(AssetLogic.AssetLogic__swapFromLocalAssetIfNeeded_swapPaused.selector);
    this.execute(args);
  }

  // should fail if msg.sender is not an approved relayer
  function test_BridgeFacet__execute_failIfRelayerNotApproved() public {
    // set context
    s.approvedRelayers[address(this)] = false;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // expect failure
    vm.expectRevert(BridgeFacet.BridgeFacet__execute_unapprovedRelayer.selector);
    this.execute(args);
  }

  // multipath: should fail if pathLength > maxRouters
  function test_BridgeFacet__execute_failIfPathLengthGreaterThanMaxRouters() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(s.maxRoutersPerTransfer + 1);

    for (uint256 i; i < args.routers.length; i++) {
      s.routerBalances[args.routers[i]][args.local] += 10 ether;
    }

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_maxRoutersExceeded.selector);
    this.execute(args);
  }

  // should fail if it is a slow transfer (forceSlow = true) and not reconciled
  function test_BridgeFacet__execute_failIfForceSlowAndNotReconciled() public {
    _params.forceSlow = true;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(0);

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notReconciled.selector);
    this.execute(args);
  }

  // should fail if it is a slow transfer (forceSlow = true) and we try to execute with routers
  function test_BridgeFacet__execute_failIfForceSlowAndRoutersSet() public {
    _params.forceSlow = true;

    // Routers providing liquidity implies this is a fast-liquidity transfer. If we're forcing slow,
    // this should fail.
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(2);

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notReconciled.selector);
    this.execute(args);
  }

  // should fail if no routers were passed in and not reconciled
  function test_BridgeFacet__execute_failIfNoRoutersAndNotReconciled() public {
    // Setting no routers in the execute call means that the transfer must already be reconciled.
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(0);

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notReconciled.selector);
    this.execute(args);
  }

  // should fail if the router is not approved and ownership is not renounced
  function test_BridgeFacet__execute_failIfRouterNotApproved() public {
    s._routerOwnershipRenounced = false;

    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = false;

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notSupportedRouter.selector);
    this.execute(args);
  }

  // should fail if the router signature is invalid
  function test_BridgeFacet__execute_failIfSignatureInvalid() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    // Make invalid args based on (slightly) altered params.
    _params.originDomain = 1001;
    (, ExecuteArgs memory invalidArgs) = utils_makeExecuteArgs(4);
    // The signature of the last router in the group will be invalid.
    args.routerSignatures[0] = invalidArgs.routerSignatures[0];

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_invalidRouterSignature.selector);
    this.execute(args);
  }

  // multipath: should fail if any 1 router's signature is invalid
  function test_BridgeFacet__execute_failIfAnySignatureInvalid() public {
    // Using multipath; this should fail if any 1 router signature is invalid.
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(4);

    for (uint256 i; i < args.routers.length; i++) {
      s.routerBalances[args.routers[i]][args.local] += 10 ether;
    }

    // Make invalid args based on (slightly) altered params.
    _params.originDomain = 1001;
    (, ExecuteArgs memory invalidArgs) = utils_makeExecuteArgs(4);
    // The signature of the last router in the group will be invalid.
    args.routerSignatures[3] = invalidArgs.routerSignatures[3];

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_invalidRouterSignature.selector);
    this.execute(args);
  }

  // should fail if it was already executed (s.transferRelayer[transferId] != address(0))
  function test_BridgeFacet__execute_failIfAlreadyExecuted() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);
    s.transferRelayer[transferId] = address(this);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_alreadyExecuted.selector);
    this.execute(args);
  }

  // should fail if the router does not have sufficient tokens
  function test_BridgeFacet__execute_failIfRouterHasInsufficientFunds() public {
    _amount = 5 ether;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 4.5 ether;

    vm.expectRevert(stdError.arithmeticError);
    this.execute(args);
  }

  // multipath: should fail if any 1 router has insufficient tokens
  function test_BridgeFacet__execute_failIfAnyRouterHasInsufficientFunds() public {
    _amount = 5 ether;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(s.maxRoutersPerTransfer);

    uint256 routerAmountSent = _amount / args.routers.length; // The amount each individual router will send.

    // Set the first router's balance to be (slightly) less than the amount that they'd need to send.
    s.routerBalances[args.routers[0]][args.local] = routerAmountSent - 0.1 ether;
    for (uint256 i = 1; i < args.routers.length; i++) {
      // The other routers have plenty of funds.
      s.routerBalances[args.routers[i]][args.local] = 50 ether;
    }

    vm.expectRevert(stdError.arithmeticError);
    this.execute(args);
  }

  // should fail if sponsored vault did not fund contract with returned amount

  // ============ execute success cases
  // should use slow liquidity if specified (forceSlow = true)
  function test_BridgeFacet__execute_forceSlowWorks() public {
    // set test params
    _params.forceSlow = true;

    // get args
    (bytes32 transferId, ExecuteArgs memory _args) = utils_makeExecuteArgs(0);

    // set reconciled context
    s.reconciledTransfers[transferId] = true;

    helpers_executeAndAssert(transferId, _args);
  }

  // should use the local asset if specified (receiveLocal = true)
  function test_BridgeFacet__execute_receiveLocalWorks() public {
    _params.receiveLocal = true;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    helpers_executeAndAssert(transferId, args);
  }

  // should work with approved router if router ownership is not renounced
  function test_BridgeFacet__execute_approvedRouterWorks() public {
    s._routerOwnershipRenounced = false;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    helpers_executeAndAssert(transferId, args);
  }

  // FIXME: should work with 0 value
  function test_BridgeFacet__execute_worksWith0Value() public {
    // require(false, "not tested");
  }

  // FIXME: should work if no sponsor vault set
  function test_BridgeFacet__execute_worksWithoutVault() public {
    // require(false, "not tested");
  }

  // FIXME: should sponsor if fast liquidity is used and sponsor vault set
  function test_BridgeFacet__execute_worksWithSponsorLiquidity() public {
    // require(false, "not tested");
  }

  // FIXME: should not sponsor fast liquidity if using slow mode
  function test_BridgeFacet__execute_noSlowSponsorLiquidity() public {
    // require(false, "not tested");
  }

  // FIXME: some of these tests can likely be handled with stronger assertions
  // FIXME: should not sponsor fast liquidity if using slow mode
  function test_BridgeFacet__execute_sponsorsRelayersSlow() public {
    // require(false, "not tested");
  }

  // FIXME: should not sponsor fast liquidity if using slow mode
  function test_BridgeFacet__execute_sponsorsRelayersFast() public {
    // require(false, "not tested");
  }

  // should work without calldata
  function test_BridgeFacet__execute_noCalldataWorks() public {
    _params.callData = bytes("");
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    uint256 amount = utils_getFastTransferAmount(args.amount);

    // Sanity check: caller should previously have 0 tokens.
    assertEq(IERC20(args.local).balanceOf(args.params.to), 0);
    // With no calldata set, this method call should just send funds directly to the user.
    helpers_executeAndAssert(transferId, args);
    assertEq(IERC20(args.local).balanceOf(args.params.to), amount);
  }

  // should work with successful calldata
  // FIXME: need to assert the mock calls here
  function test_BridgeFacet__execute_successfulCalldata() public {
    // Set the args.to to the mock xapp address, and args.callData to the `fulfill` fn.
    _params.callData = abi.encodeWithSelector(MockXApp.fulfill.selector, _local, TEST_MESSAGE);
    _params.to = _xapp;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    // TODO: Would be great to check for this emit, but currently it's not visible to compiler for some reason.
    // uint256 amount = utils_getFastTransferAmount(args.amount);
    // bytes memory returnData;
    // vm.expectEmit(true, true, false, true);
    // emit IExecutor.Executed(
    //   transferId,
    //   args.params.to,
    //   args.params.recovery,
    //   adopted,
    //   amount,
    //   // Should be EMPTY_BYTES because the originDomain/originSender properties have not been
    //   // optimistically verified if the call has not been reconciled.
    //   LibCrossDomainProperty.EMPTY_BYTES,
    //   args.params.callData,
    //   returnData,
    //   true
    // );

    // TODO: Can't emit this event either!
    // vm.expectEmit(true, true, false, true);
    // emit MockXApp.MockXAppEvent(address(this), _local, bytes32("test message"), amount);

    helpers_executeAndAssert(transferId, args);
    // Recovery address should not receive any funds if the call was successful.
    assertEq(IERC20(args.local).balanceOf(_recovery), 0);
  }

  // FIXME: should provide origin properties if calldata is authenticated (i.e. used the
  // slow liquidity path)
  function test_BridgeFacet__execute_usesAuthenticatedCallData() public {
    // require(false, "not tested");
  }

  // should work with failing calldata : contract call failed
  // FIXME: need to assert that promise router was called
  function test_BridgeFacet__execute_failingCalldata() public {
    // Set the args.to to the mock xapp address, and args.callData to the `fail` fn.
    _params.callData = abi.encodeWithSelector(MockXApp.fail.selector);
    _params.to = _xapp;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    uint256 amount = utils_getFastTransferAmount(args.amount);

    helpers_executeAndAssert(transferId, args, false);
    // Recovery address should receive the funds if the call failed.
    assertEq(IERC20(args.local).balanceOf(_recovery), amount);
    // TODO: Check allowance is the same as before.
  }

  // FIXME: this is antipattern, needs to be within Executor.t.sol
  // should work with failing calldata : recipient `to` is not a contract (should call _handleFailure)
  function test_BridgeFacet__execute_handleRecipientNotAContract() public {
    // Setting the calldata to be for fulfill... but obviously, that method should never be called.
    // Because `to` is not a valid contract address.
    _params.callData = abi.encodeWithSelector(MockXApp.fulfill.selector, _local, TEST_MESSAGE);
    _params.to = address(42);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    uint256 amount = utils_getFastTransferAmount(args.amount);

    helpers_executeAndAssert(transferId, args, false);
    // Recovery address should receive the funds if the call failed.
    assertEq(IERC20(args.local).balanceOf(_recovery), amount);
  }

  // should work if already reconciled (happening in slow liquidity mode)
  function test_BridgeFacet__execute_handleAlreadyReconciled() public {
    // Set the args.to to the mock xapp address, and args.callData to the
    // `fulfillWithProperties` fn. This will check to make sure `originDomain` and
    // `originSender` properties are correctly set.
    _params.callData = abi.encodeWithSelector(
      MockXApp.fulfillWithProperties.selector,
      _local,
      TEST_MESSAGE,
      _originDomain,
      _originSender
    );
    _params.to = _xapp;

    // We specify that 0 routers are in the path for this execution.
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(0);

    // Transfer has already been reconciled.
    s.reconciledTransfers[transferId] = true;

    helpers_executeAndAssert(transferId, args, true);
    // Recovery address should not receive the funds if the call succeeded.
    assertEq(IERC20(args.local).balanceOf(_recovery), 0);
  }

  // FIXME: this is antipattern, needs to be within Executor.t.sol
  // multipath: should subtract equally from each router's liquidity
  function test_BridgeFacet__execute_multipath() public {
    _amount = 1 ether;

    // We're going to call the mock xapp just to ensure that the full execute e2e remains uniform.
    _params.callData = abi.encodeWithSelector(MockXApp.fulfill.selector, _local, TEST_MESSAGE);
    _params.to = _xapp;

    // Should work if the pathLength == max routers.
    uint256 pathLength = s.maxRoutersPerTransfer;
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(pathLength);

    // Sanity check: assuming the multipath is > 1, no router should need to have more than half of the
    // transfer amount.
    s.routerBalances[args.routers[0]][args.local] = 0.5 ether;
    for (uint256 i = 1; i < args.routers.length; i++) {
      s.routerBalances[args.routers[i]][args.local] = 10 ether;
    }

    uint256 amount = utils_getFastTransferAmount(args.amount);
    uint256 routerAmountSent = amount / pathLength; // The amount each individual router will send.

    helpers_executeAndAssert(transferId, args);
    // Recovery address should not receive any funds if the call was successful.
    assertEq(IERC20(args.local).balanceOf(_recovery), 0);
    // Make sure routers had their funds deducted correctly.
    assertEq(s.routerBalances[args.routers[0]][args.local], 0.5 ether - routerAmountSent);
    for (uint256 i = 1; i < args.routers.length; i++) {
      assertEq(s.routerBalances[args.routers[i]][args.local], 10 ether - routerAmountSent);
    }
  }

  // should work with sponsorship from sponsor vault
  // TODO: see _handleExecuteTransaction

  // TODO: test callback handling, should send the promise router the return data
  // TODO: test native asset handling
  // FIXME: these should be in executor ^^

  // ============ bumpTransfer ============
  // ============ bumpTransfer fail cases
  function test_BridgeFacet__bumpTransfer_failsIfPaused() public {
    // require(false, "not tested");
  }

  function test_BridgeFacet__bumpTransfer_failsIfNoValue() public {
    // require(false, "not tested");
  }

  // ============ bumpTransfer success cases
  function test_BridgeFacet__bumpTransfer_works() public {
    // require(false, "not tested");
  }
}
