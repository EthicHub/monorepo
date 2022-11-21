/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RoutersFacet,
  RoutersFacetInterface,
} from "../../../../../contracts/core/connext/facets/RoutersFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_feeOnTransferNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__acceptProposedRouterOwner_badCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__acceptProposedRouterOwner_notElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_capReached",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_alreadyApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouter_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__initializeRouter_configNotEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyRouterOwner_notRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_notNewOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidityFor_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_recipientEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setMaxRoutersPerTransfer_invalidMaxRoutersPerTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setRouterOwner_noChange",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setRouterRecipient_notNewRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouterForPortal_notApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouter_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouter_routerEmpty",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityFeeNumerator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "LiquidityFeeNumeratorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRoutersPerTransfer",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MaxRoutersPerTransferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterApprovedForPortal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "RouterInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "RouterOwnerAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevProposed",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newProposed",
        type: "address",
      },
    ],
    name: "RouterOwnerProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevRecipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RouterRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterUnapprovedForPortal",
    type: "event",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_NUMERATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "acceptProposedRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    name: "addRouterLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "addRouterLiquidityFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "approveRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "approveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwnerTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApprovalForPortal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "initializeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRoutersPerTransfer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proposed",
        type: "address",
      },
    ],
    name: "proposeRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "removeRouterLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "removeRouterLiquidityFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "routerBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numerator",
        type: "uint256",
      },
    ],
    name: "setLiquidityFeeNumerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxRouters",
        type: "uint256",
      },
    ],
    name: "setMaxRoutersPerTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRouterRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "unapproveRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "unapproveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612047806100206000396000f3fe60806040526004361061014b5760003560e01c8063582c78d2116100b6578063b214c9011161006f578063b214c901146103fa578063c6bf691d1461041a578063da3a892f14610456578063e9160f3e14610476578063f259cd27146104b5578063ffaf3f1a146104d557600080fd5b8063582c78d21461032757806382904716146103475780638770e68214610367578063899962a1146103a5578063911b8ee2146103c55780639bf6d875146103e557600080fd5b806322a3c0071161010857806322a3c007146102585780632d3f9ef6146102785780633b688da61461028b57806341258b5c146102df5780634b72c5da146102ff578063540645941461031457600080fd5b806304376ff4146101505780630951d6d81461017257806309935b8f1461019657806312d57170146101b65780631407093b146101ef578063197c139d14610238575b600080fd5b34801561015c57600080fd5b5061017061016b366004611daf565b6104f5565b005b34801561017e57600080fd5b506001545b6040519081526020015b60405180910390f35b3480156101a257600080fd5b506101706101b1366004611daf565b6105f2565b3480156101c257600080fd5b506101836101d1366004611daf565b6001600160a01b03166000908152601c602052604090206003015490565b3480156101fb57600080fd5b5061022861020a366004611daf565b6001600160a01b03166000908152601c602052604090205460ff1690565b604051901515815260200161018d565b34801561024457600080fd5b50610170610253366004611dcc565b610752565b34801561026457600080fd5b50610170610273366004611e1f565b61081c565b610170610286366004611e58565b61099b565b34801561029757600080fd5b506102c76102a6366004611daf565b6001600160a01b039081166000908152601c60205260409020600201541690565b6040516001600160a01b03909116815260200161018d565b3480156102eb57600080fd5b506101836102fa366004611e1f565b610a04565b34801561030b57600080fd5b50612710610183565b610170610322366004611e9a565b610a31565b34801561033357600080fd5b50610170610342366004611ebf565b610a99565b34801561035357600080fd5b50610170610362366004611ebf565b610b98565b34801561037357600080fd5b50610228610382366004611daf565b6001600160a01b03166000908152601c6020526040902054610100900460ff1690565b3480156103b157600080fd5b506101706103c0366004611e58565b610c63565b3480156103d157600080fd5b506101706103e0366004611daf565b610cc3565b3480156103f157600080fd5b50601154610183565b34801561040657600080fd5b50610170610415366004611e1f565b610e38565b34801561042657600080fd5b506102c7610435366004611daf565b6001600160a01b039081166000908152601c60205260409020600101541690565b34801561046257600080fd5b50610170610471366004611daf565b610f6c565b34801561048257600080fd5b506102c7610491366004611daf565b6001600160a01b039081166000908152601c60205260409020546201000090041690565b3480156104c157600080fd5b506101706104d0366004611daf565b6110ef565b3480156104e157600080fd5b506101706104f0366004611e1f565b61120c565b336104fe61127f565b6001600160a01b03161415801561053957506003336000908152601b602052604090205460ff16600381111561053657610536611ed8565b14155b1561055757604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601c6020526040902054610100900460ff1661059557604051635d3abc4360e11b815260040160405180910390fd5b6001600160a01b0381166000818152601c6020908152604091829020805461ff0019169055815192835233908301527f903522f09b29fa2102f5d8d8b181ac8edb4cfaf5d705076e4ab95117f6bb02ad910160405180910390a150565b6001600160a01b038082166000908152601c6020908152604091829020825160c081018452815460ff8082161515835261010082041615159382019390935262010000909204841692820192909252600182015483166060820152600282015490921660808301526003015460a0820181905262093a80906106749042611f04565b11610692576040516376b2ad0760e01b815260040160405180910390fd5b60808101516000906001600160a01b0316156106b25781608001516106b8565b81604001515b9050336001600160a01b038216146106e357604051633253a7bd60e01b815260040160405180910390fd5b6106f683836080015184604001516112ad565b60808201516001600160a01b031615610733576001600160a01b0383166000908152601c6020526040902060020180546001600160a01b03191690555b50506001600160a01b03166000908152601c6020526040812060030155565b601d546001190161077657604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55602154600160a01b900460ff16156107a657604051633ee5b89360e01b815260040160405180910390fd5b6001600160a01b038082166000908152601c60205260408120546201000090049091169081156107d657816107d8565b825b9050336001600160a01b038216146108035760405163f3dc2d1960e01b815260040160405180910390fd5b61080f86868686611348565b50506001601d5550505050565b6001600160a01b038083166000908152601c602052604090205483916201000090910416331461085f5760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038084166000908152601c6020908152604091829020825160c081018452815460ff808216151583526101008204161515938201939093526201000090920484169282018390526001810154841660608301526002810154841660808301526003015460a082015291841690036108f057604051630e49614b60e31b815260040160405180910390fd5b826001600160a01b031681608001516001600160a01b03160361092657604051631b2163f160e31b815260040160405180910390fd5b6001600160a01b038481166000818152601c60205260408082206002810180546001600160a01b031916898716908117909155426003909201919091556080860151915190949190911692917fee0158b57adc03901d8b16c48cd10c33ca1283ee96c6e0d30f817ceba74dc4a191a450505050565b601d54600119016109bf57604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55602154600160a01b900460ff16156109ef57604051633ee5b89360e01b815260040160405180910390fd5b6109fa8383836114c5565b50506001601d5550565b6001600160a01b038083166000908152600f60209081526040808320938516835292905220545b92915050565b601d5460011901610a5557604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55602154600160a01b900460ff1615610a8557604051633ee5b89360e01b815260040160405180910390fd5b610a908282336114c5565b50506001601d55565b33610aa261127f565b6001600160a01b031614158015610add57506003336000908152601b602052604090205460ff166003811115610ada57610ada611ed8565b14155b15610afb57604051637b32c26b60e01b815260040160405180910390fd5b6127106064610b0b82605f611f17565b610b159190611f2e565b821015610b355760405163b74bfc8360e01b815260040160405180910390fd5b80821115610b5657604051637347083360e11b815260040160405180910390fd5b6001829055604080518381523360208201527feb6222a0b32216f861511e9aba88faa9549b749c2e0ad47df4e288565de5ceae91015b60405180910390a15050565b33610ba161127f565b6001600160a01b031614158015610bdc57506003336000908152601b602052604090205460ff166003811115610bd957610bd9611ed8565b14155b15610bfa57604051637b32c26b60e01b815260040160405180910390fd5b801580610c08575060115481145b15610c2657604051630d9f9fad60e01b815260040160405180910390fd5b604080518281523360208201527fa7fe33308fb33ae6f3259e3c7c954ae3d6cd7f428cd17f653413c2cdc691666d910160405180910390a1601155565b601d5460011901610c8757604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55602154600160a01b900460ff1615610cb757604051633ee5b89360e01b815260040160405180910390fd5b6109fa83838333611348565b33610ccc61127f565b6001600160a01b031614158015610d0757506001336000908152601b602052604090205460ff166003811115610d0457610d04611ed8565b14155b15610d25576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b038116610d4c5760405163085dd61360e11b815260040160405180910390fd5b6001600160a01b038082166000908152601c6020908152604091829020825160c081018452815460ff808216151580845261010083049091161515948301949094526201000090048516938101939093526001810154841660608401526002810154909316608083015260039092015460a082015290610ddf57604051632b31895f60e21b815260040160405180910390fd5b6001600160a01b0382166000818152601c6020908152604091829020805461ffff1916905590513381527fbee3e974bb6a6f44f20096ede047c191eef60322e65e4ee4bd3392230a8716d5910160405180910390a25050565b336000908152601c6020908152604091829020825160c081018452815460ff80821615158352610100820416151593820193909352620100009092046001600160a01b0390811693830184905260018201548116606084015260028201541660808301526003015460a082015290151580610ebf575060608101516001600160a01b031615155b80610ed6575060808101516001600160a01b031615155b80610ee5575060008160a00151115b15610f0357604051630efdad3160e11b815260040160405180910390fd5b6001600160a01b038316610f15573392505b610f21338460006112ad565b6001600160a01b03821615610f3c57610f3c33836000611608565b60405133907f2622745e83f97f2d871ef785497c1eeba6f9bb94c7dd486cf28228e814d929e490600090a2505050565b33610f7561127f565b6001600160a01b031614158015610fb057506003336000908152601b602052604090205460ff166003811115610fad57610fad611ed8565b14155b15610fce57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b038082166000908152601c6020908152604091829020825160c081018452815460ff808216158015808552610100840490921615159584019590955262010000909104861694820194909452600182015485166060820152600282015490941660808501526003015460a084015290611053575061105161169c565b155b15611071576040516375befccb60e01b815260040160405180910390fd5b8060200151156110945760405163c896c2d960e01b815260040160405180910390fd5b6001600160a01b0382166000818152601c6020908152604091829020805461ff001916610100179055815192835233908301527fc428fad4df337e27be8199c35a79ca103e8d00538a69b0f9701fb2bdf7d6c84c9101610b8c565b336110f861127f565b6001600160a01b03161415801561113357506001336000908152601b602052604090205460ff16600381111561113057611130611ed8565b14155b15611151576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b0381166111785760405163330ef51f60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601c602052604090205460ff16156111b25760405163916e73bd60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601c6020908152604091829020805460ff1916600117905590513381527fbc68405e644da2aaf25623ce2199da82c6dfd2e1de102b400eba6a091704d4f4910160405180910390a250565b6001600160a01b038083166000908152601c602052604090205483916201000090910416331461124f5760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038084166000908152601c602052604090206001015461127a918591859116611608565b505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b816001600160a01b0316816001600160a01b0316036112df576040516309a3ec2160e11b815260040160405180910390fd5b6001600160a01b038381166000818152601c6020526040808220805462010000600160b01b031916620100008887169081029190911790915590519093851692917fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d191a4505050565b6001600160a01b038181166000908152601c60205260409020600101541680156113725780611374565b825b90506001600160a01b03811661139d5760405163516101e760e11b815260040160405180910390fd5b846000036113be5760405163606ab7a160e11b815260040160405180910390fd5b60006113c9856116c3565b905060006113df826020015183600001516116e2565b6001600160a01b038086166000908152600f60209081526040808320938b16835292905220549091508781101561142957604051630a1e6d4d60e01b815260040160405180910390fd5b6001600160a01b038086166000908152600f60209081526040808320938b16835292905220888203905561145e87858a611724565b604080516001600160a01b0386811682528981166020830152918101849052606081018a9052336080820152908616907ffacf3161e9675ca1ca84a16d238bc838c7e2084c302cf411d9da7ac0391f64869060a00160405180910390a25050505050505050565b6001600160a01b0381166114ec576040516339773cbf60e21b815260040160405180910390fd5b8260000361150d57604051632a24141960e01b815260040160405180910390fd5b600061151883611763565b91505061152361169c565b15801561154957506001600160a01b0382166000908152601c602052604090205460ff16155b1561156757604051631464c65f60e31b815260040160405180910390fd5b61157183856117e7565b6001600160a01b038083166000908152600f60209081526040808320938716835292905290812080548692906115a8908490611f50565b9091555050604080516001600160a01b03858116825260208201849052918101869052336060820152908316907fcc3100122c1752fe0f6bfa5503175bc53eb00b5f2d774e81efedcd2b10a6d24b9060800160405180910390a250505050565b816001600160a01b0316816001600160a01b03160361163a57604051631b0043f560e31b815260040160405180910390fd5b6001600160a01b038381166000818152601c602052604080822060010180546001600160a01b03191687861690811790915590519093851692917f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d791a4505050565b6000806116a761127f565b6001600160a01b031614806116be575060175460ff165b905090565b6040805180820190915260008082526020820152610a2b826000611938565b6000828260405160200161170692919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b8060000361173157505050565b6001600160a01b03831661175857604051633a48ca7b60e11b815260040160405180910390fd5b61127a838383611a31565b6040805180820190915260008082526020820152600080611783846116c3565b90506000611799826020015183600001516116e2565b90506117a3611a94565b1580156117bf575060008181526006602052604090205460ff16155b156117dd5760405163a13f958f60e01b815260040160405180910390fd5b9094909350915050565b806000036117f3575050565b6001600160a01b03821661181a57604051632a38b13360e01b815260040160405180910390fd5b6040516370a0823160e01b815230600482015282906000906001600160a01b038316906370a0823190602401602060405180830381865afa158015611863573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118879190611f63565b905061189e6001600160a01b038316333086611ab9565b6040516370a0823160e01b8152306004820152839082906001600160a01b038516906370a0823190602401602060405180830381865afa1580156118e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061190a9190611f63565b6119149190611f04565b1461193257604051630e40773560e21b815260040160405180910390fd5b50505050565b604080518082019091526000808252602082015260408051808201909152600080825260208201526001600160a01b038416611975579050610a2b565b506001600160a01b03831660009081526009830160209081526040918290208251808401909352805463ffffffff1680845260019091015491830191909152156119c0579050610a2b565b6119ca8484611af1565b156119f057600483015463ffffffff1681526001600160a01b0384166020820152611a2a565b506001600160a01b0383166000908152600a830160209081526040918290208251808401909352805463ffffffff16835260010154908201525b9392505050565b6040516001600160a01b03831660248201526044810182905261127a90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611b30565b600080611a9f61127f565b6001600160a01b031614806116be57505060195460ff1690565b6040516001600160a01b03808516602483015283166044820152606481018290526119329085906323b872dd60e01b90608401611a5d565b6001600160a01b0382166000908152600a8201602052604081205463ffffffff1615611b1f57506000610a2b565b50506001600160a01b03163b151590565b6000611b85826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c079092919063ffffffff16565b80519091501561127a5780806020019051810190611ba39190611f7c565b61127a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6060611c168484600085611c1e565b949350505050565b606082471015611c7f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611bfe565b600080866001600160a01b03168587604051611c9b9190611fc2565b60006040518083038185875af1925050503d8060008114611cd8576040519150601f19603f3d011682016040523d82523d6000602084013e611cdd565b606091505b5091509150611cee87838387611cf9565b979650505050505050565b60608315611d68578251600003611d61576001600160a01b0385163b611d615760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611bfe565b5081611c16565b611c168383815115611d7d5781518083602001fd5b8060405162461bcd60e51b8152600401611bfe9190611fde565b6001600160a01b0381168114611dac57600080fd5b50565b600060208284031215611dc157600080fd5b8135611a2a81611d97565b60008060008060808587031215611de257600080fd5b843593506020850135611df481611d97565b92506040850135611e0481611d97565b91506060850135611e1481611d97565b939692955090935050565b60008060408385031215611e3257600080fd5b8235611e3d81611d97565b91506020830135611e4d81611d97565b809150509250929050565b600080600060608486031215611e6d57600080fd5b833592506020840135611e7f81611d97565b91506040840135611e8f81611d97565b809150509250925092565b60008060408385031215611ead57600080fd5b823591506020830135611e4d81611d97565b600060208284031215611ed157600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610a2b57610a2b611eee565b8082028115828204841417610a2b57610a2b611eee565b600082611f4b57634e487b7160e01b600052601260045260246000fd5b500490565b80820180821115610a2b57610a2b611eee565b600060208284031215611f7557600080fd5b5051919050565b600060208284031215611f8e57600080fd5b81518015158114611a2a57600080fd5b60005b83811015611fb9578181015183820152602001611fa1565b50506000910152565b60008251611fd4818460208701611f9e565b9190910192915050565b6020815260008251806020840152611ffd816040850160208701611f9e565b601f01601f1916919091016040019291505056fea26469706673582212204d825921c256561abf504a357f9d4cea1b110cd887016e312cb651d4153d7fc064736f6c63430008110033";

type RoutersFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoutersFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoutersFacet__factory extends ContractFactory {
  constructor(...args: RoutersFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoutersFacet> {
    return super.deploy(overrides || {}) as Promise<RoutersFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RoutersFacet {
    return super.attach(address) as RoutersFacet;
  }
  override connect(signer: Signer): RoutersFacet__factory {
    return super.connect(signer) as RoutersFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoutersFacetInterface {
    return new utils.Interface(_abi) as RoutersFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoutersFacet {
    return new Contract(address, _abi, signerOrProvider) as RoutersFacet;
  }
}
