// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "../../../utils/ForgeHelper.sol";
import {Deployer, DiamondInit, VersionFacet} from "../../../utils/Deployer.sol";

import "../../../../contracts/core/connext/libraries/LibDiamond.sol";
import {IConnextHandler} from "../../../../contracts/core/connext/interfaces/IConnextHandler.sol";
import {IDiamondCut} from "../../../../contracts/core/connext/interfaces/IDiamondCut.sol";

contract LibDiamondTest is ForgeHelper, Deployer {
  // ============ Libraries ============

  using stdStorage for StdStorage;

  // ============ Storage ============
  IConnextHandler connextHandler;
  uint32 domain = 1;
  uint256 acceptanceDelay = 7 days;
  address internal xAppConnectionManager = address(1);
  address relayerFeeRouter = address(3);
  address promiseRouter = address(4);
  address tokenRegistry = address(5);

  // ============ Setup ============

  function setUp() public {
    deployConnext(
      uint256(domain),
      xAppConnectionManager,
      tokenRegistry,
      address(relayerFeeRouter),
      payable(promiseRouter),
      acceptanceDelay
    );

    connextHandler = IConnextHandler(address(connextDiamondProxy));
  }

  // ============ Utils ============

  // Should work: first initialization
  function test_LibDiamond__initializeDiamondCut_works() public {
    assertTrue(connextDiamondProxy.isInitialized());
  }

  // Second initialization should not alter state.
  function test_LibDiamond__initializeDiamondCut_ignoreDuplicateInit() public {
    uint32 newDomain = 2;
    address newXAppConnectionManager = address(11);
    address newRelayerFeeRouter = address(13);
    address newPromiseRouter = address(14);
    address newTokenRegistry = address(15);

    bytes memory initCallData = abi.encodeWithSelector(
      DiamondInit.init.selector,
      newDomain,
      newXAppConnectionManager,
      newTokenRegistry,
      newRelayerFeeRouter,
      newPromiseRouter,
      acceptanceDelay
    );

    IDiamondCut.FacetCut[] memory facetCuts = new IDiamondCut.FacetCut[](1);
    bytes4[] memory versionFacetSelectors = new bytes4[](1);
    versionFacetSelectors[0] = VersionFacet.VERSION.selector;
    facetCuts[0] = IDiamondCut.FacetCut({
      facetAddress: address(0),
      action: IDiamondCut.FacetCutAction.Remove,
      functionSelectors: versionFacetSelectors
    });

    vm.warp(100);
    connextHandler.proposeDiamondCut(facetCuts, address(diamondInit), initCallData);

    vm.warp(100 + 7 days + 1);
    connextHandler.diamondCut(facetCuts, address(diamondInit), initCallData);

    // still initialized
    assertTrue(connextDiamondProxy.isInitialized());

    // promise router not updated
    assertTrue(address(connextHandler.promiseRouter()) != newPromiseRouter);
    assertTrue(address(connextHandler.promiseRouter()) == promiseRouter);
  }

  // Diamond cut prior to elapsed delay should revert.
  function testFail_LibDiamond__initializeDiamondCut_beforeAcceptanceDelay_reverts() public {
    uint32 newDomain = 2;
    address newXAppConnectionManager = address(11);
    address newRelayerFeeRouter = address(13);
    address newPromiseRouter = address(14);
    address newTokenRegistry = address(15);

    bytes memory initCallData = abi.encodeWithSelector(
      DiamondInit.init.selector,
      newDomain,
      newXAppConnectionManager,
      newTokenRegistry,
      newRelayerFeeRouter,
      newPromiseRouter,
      acceptanceDelay
    );

    IDiamondCut.FacetCut[] memory facetCuts = new IDiamondCut.FacetCut[](1);
    bytes4[] memory versionFacetSelectors = new bytes4[](1);
    versionFacetSelectors[0] = VersionFacet.VERSION.selector;
    facetCuts[0] = IDiamondCut.FacetCut({
      facetAddress: address(0),
      action: IDiamondCut.FacetCutAction.Remove,
      functionSelectors: versionFacetSelectors
    });

    vm.warp(100);
    connextHandler.proposeDiamondCut(facetCuts, address(diamondInit), initCallData);

    vm.warp(100 + 6 days + 1);
    connextHandler.diamondCut(facetCuts, address(diamondInit), initCallData);
  }

  // Diamond cut after setting 0 acceptance delay should work.
  function test_LibDiamond__initializeDiamondCut_withZeroAcceptanceDelay_works() public {
    deployConnext(
      uint256(domain),
      xAppConnectionManager,
      tokenRegistry,
      address(relayerFeeRouter),
      payable(promiseRouter),
      0
    );

    connextHandler = IConnextHandler(address(connextDiamondProxy));

    uint32 newDomain = 2;
    address newXAppConnectionManager = address(11);
    address newRelayerFeeRouter = address(13);
    address newPromiseRouter = address(14);
    address newTokenRegistry = address(15);

    bytes memory initCallData = abi.encodeWithSelector(
      DiamondInit.init.selector,
      newDomain,
      newXAppConnectionManager,
      newTokenRegistry,
      newRelayerFeeRouter,
      newPromiseRouter,
      acceptanceDelay
    );

    IDiamondCut.FacetCut[] memory facetCuts = new IDiamondCut.FacetCut[](1);
    bytes4[] memory versionFacetSelectors = new bytes4[](1);
    versionFacetSelectors[0] = VersionFacet.VERSION.selector;
    facetCuts[0] = IDiamondCut.FacetCut({
      facetAddress: address(0),
      action: IDiamondCut.FacetCutAction.Remove,
      functionSelectors: versionFacetSelectors
    });

    vm.warp(100);
    connextHandler.proposeDiamondCut(facetCuts, address(diamondInit), initCallData);
    connextHandler.diamondCut(facetCuts, address(diamondInit), initCallData);

    assertTrue(connextDiamondProxy.isInitialized());
  }
}
