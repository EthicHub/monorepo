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
    name: "AssetLogic__transferAssetToContract_feeOnTransferNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
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
    name: "RoutersFacet__onlyProposedRouterOwner_notProposedRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyProposedRouterOwner_notRouterOwner",
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
    name: "RoutersFacet__removeRouter_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouter_routerEmpty",
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
    name: "RoutersFacet__setRouterRecipient_notNewRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setupRouter_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setupRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouterForPortal_notApproved",
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
        name: "router",
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
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "proposed",
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
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "removeRouter",
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
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setupRouter",
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
  "0x608060405234801561001057600080fd5b50611fe1806100206000396000f3fe6080604052600436106101405760003560e01c806354064594116100b65780639bf6d8751161006f5780639bf6d875146103ce578063c6bf691d146103e3578063da3a892f1461041c578063e9160f3e1461043c578063eb492f441461045c578063ffaf3f1a1461047c57600080fd5b80635406459414610302578063582c78d2146103155780636ae0b1541461033557806382904716146103555780638770e68214610375578063899962a1146103ae57600080fd5b8063197c139d11610108578063197c139d1461022a57806322a3c0071461024a5780632d3f9ef61461026a5780633b688da61461027d57806341258b5c146102cd5780634b72c5da146102ed57600080fd5b806304376ff4146101455780630951d6d81461016757806309935b8f1461018b57806312d57170146101ab5780631407093b146101e1575b600080fd5b34801561015157600080fd5b50610165610160366004611d00565b61049c565b005b34801561017357600080fd5b506001545b6040519081526020015b60405180910390f35b34801561019757600080fd5b506101656101a6366004611d00565b610562565b3480156101b757600080fd5b506101786101c6366004611d00565b6001600160a01b031660009081526021602052604090205490565b3480156101ed57600080fd5b5061021a6101fc366004611d00565b6001600160a01b03166000908152601c602052604090205460ff1690565b6040519015158152602001610182565b34801561023657600080fd5b50610165610245366004611d1d565b61071c565b34801561025657600080fd5b50610165610265366004611d70565b6107ba565b610165610278366004611da9565b6108ff565b34801561028957600080fd5b506102b5610298366004611d00565b6001600160a01b0390811660009081526020805260409020541690565b6040516001600160a01b039091168152602001610182565b3480156102d957600080fd5b506101786102e8366004611d70565b610961565b3480156102f957600080fd5b50612710610178565b610165610310366004611deb565b61098e565b34801561032157600080fd5b50610165610330366004611e10565b6109ef565b34801561034157600080fd5b50610165610350366004611d00565b610abb565b34801561036157600080fd5b50610165610370366004611e10565b610d1a565b34801561038157600080fd5b5061021a610390366004611d00565b6001600160a01b03166000908152601d602052604090205460ff1690565b3480156103ba57600080fd5b506101656103c9366004611da9565b610db3565b3480156103da57600080fd5b50601254610178565b3480156103ef57600080fd5b506102b56103fe366004611d00565b6001600160a01b039081166000908152601e60205260409020541690565b34801561042857600080fd5b50610165610437366004611d00565b610e0c565b34801561044857600080fd5b506102b5610457366004611d00565b610f1b565b34801561046857600080fd5b50610165610477366004611e29565b610f4d565b34801561048857600080fd5b50610165610497366004611d70565b61113a565b336104a561123c565b6001600160a01b0316146104cc576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152601d602052604090205460ff1661050557604051635d3abc4360e11b815260040160405180910390fd5b6001600160a01b0381166000818152601d6020908152604091829020805460ff19169055815192835233908301527f903522f09b29fa2102f5d8d8b181ac8edb4cfaf5d705076e4ab95117f6bb02ad91015b60405180910390a150565b6001600160a01b038082166000908152602080526040902054829116806105ea576001600160a01b038083166000908152601f602052604090205416801580156105b45750336001600160a01b038416145b806105c757506001600160a01b03811633145b6105e45760405163f72e7a4760e01b815260040160405180910390fd5b50610613565b336001600160a01b0382161461061357604051630c2baa6160e41b815260040160405180910390fd5b600061061e84610f1b565b6001600160a01b03851660009081526021602052604090205490915062093a80906106499042611e6f565b11610667576040516376b2ad0760e01b815260040160405180910390fd5b6001600160a01b0380851660009081526020808052604080832054601f90925290912080546001600160a01b0319169190921690811790915580156106cc576001600160a01b0385166000908152602080526040902080546001600160a01b03191690555b6001600160a01b038086166000818152602160205260408082208290555184841693861692917fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d191a45050505050565b6022546001190161074057604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff161561076957604051633ee5b89360e01b815260040160405180910390fd5b61077281610f1b565b6001600160a01b0316336001600160a01b0316146107a35760405163f3dc2d1960e01b815260040160405180910390fd5b6107af8484848461126a565b505060016022555050565b6001600160a01b038083166000908152601f6020526040902054839116801580156107ed5750336001600160a01b038316145b8061080057506001600160a01b03811633145b61081d5760405163407c584960e01b815260040160405180910390fd5b826001600160a01b031661083085610f1b565b6001600160a01b03160361085757604051630e49614b60e31b815260040160405180910390fd5b6001600160a01b0380851660009081526020805260409020548116908416810361089457604051631b2163f160e31b815260040160405180910390fd5b6001600160a01b0385811660008181526020808052604080832080546001600160a01b0319168a87169081179091556021909252808320429055519093851692917fee0158b57adc03901d8b16c48cd10c33ca1283ee96c6e0d30f817ceba74dc4a191a45050505050565b6022546001190161092357604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff161561094c57604051633ee5b89360e01b815260040160405180910390fd5b6109578383836113e4565b5050600160225550565b6001600160a01b038083166000908152600e60209081526040808320938516835292905220545b92915050565b602254600119016109b257604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff16156109db57604051633ee5b89360e01b815260040160405180910390fd5b6109e68282336113e4565b50506001602255565b336109f861123c565b6001600160a01b031614610a1f576040516314e74a2560e21b815260040160405180910390fd5b6127106064610a2f82605f611e86565b610a399190611ea5565b821015610a595760405163b74bfc8360e01b815260040160405180910390fd5b80821115610a7a57604051637347083360e11b815260040160405180910390fd5b6001829055604080518381523360208201527feb6222a0b32216f861511e9aba88faa9549b749c2e0ad47df4e288565de5ceae910160405180910390a15050565b33610ac461123c565b6001600160a01b031614158015610aff57506003336000908152601b602052604090205460ff166003811115610afc57610afc611ec7565b14155b15610b1d57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b038116610b445760405163128df0bf60e21b815260040160405180910390fd5b6001600160a01b0381166000908152601c602052604090205460ff16610b7d57604051633fb36f5d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601c6020908152604091829020805460ff1916905590513381527fbee3e974bb6a6f44f20096ede047c191eef60322e65e4ee4bd3392230a8716d5910160405180910390a26001600160a01b038082166000908152601f6020526040902054168015610c54576040516000906001600160a01b0383811691908516907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908490a46001600160a01b0382166000908152601f6020526040902080546001600160a01b03191690555b6001600160a01b038083166000908152601e6020526040902054168015610cd7576040516000906001600160a01b0383811691908616907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908490a46001600160a01b0383166000908152601e6020526040902080546001600160a01b03191690555b50506001600160a01b031660009081526020808052604080832080546001600160a01b031916905560218252808320839055601d9091529020805460ff19169055565b33610d2361123c565b6001600160a01b031614610d4a576040516314e74a2560e21b815260040160405180910390fd5b801580610d58575060125481145b15610d7657604051630d9f9fad60e01b815260040160405180910390fd5b604080518281523360208201527fa7fe33308fb33ae6f3259e3c7c954ae3d6cd7f428cd17f653413c2cdc691666d910160405180910390a1601255565b60225460011901610dd757604051637ce54e2d60e11b815260040160405180910390fd5b600260225560255460ff1615610e0057604051633ee5b89360e01b815260040160405180910390fd5b6109578383833361126a565b33610e1561123c565b6001600160a01b031614610e3c576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152601c602052604090205460ff16158015610e6a5750610e686115f7565b155b15610e88576040516375befccb60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601d602052604090205460ff1615610ec25760405163c896c2d960e01b815260040160405180910390fd5b6001600160a01b0381166000818152601d6020908152604091829020805460ff19166001179055815192835233908301527fc428fad4df337e27be8199c35a79ca103e8d00538a69b0f9701fb2bdf7d6c84c9101610557565b6001600160a01b038082166000908152601f60205260408120549091168015610f445780610f46565b825b9392505050565b33610f5661123c565b6001600160a01b031614158015610f9157506001336000908152601b602052604090205460ff166003811115610f8e57610f8e611ec7565b14155b15610faf576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b038316610fd65760405163e0239aa960e01b815260040160405180910390fd5b6001600160a01b0383166000908152601c602052604090205460ff16156110105760405163201b2fd160e11b815260040160405180910390fd5b6001600160a01b0383166000818152601c6020908152604091829020805460ff1916600117905590513381527fbc68405e644da2aaf25623ce2199da82c6dfd2e1de102b400eba6a091704d4f4910160405180910390a26001600160a01b038216156110ce576001600160a01b038381166000818152601f602052604080822080546001600160a01b0319169487169485179055519091907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908390a45b6001600160a01b03811615611135576001600160a01b038381166000818152601e602052604080822080546001600160a01b0319169486169485179055519091907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908390a45b505050565b6001600160a01b038083166000908152601f60205260409020548391168015801561116d5750336001600160a01b038316145b8061118057506001600160a01b03811633145b61119d5760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038085166000908152601e6020526040902054811690841681036111db57604051631b0043f560e31b815260040160405180910390fd5b6001600160a01b038581166000818152601e602052604080822080546001600160a01b03191689861690811790915590519093851692917f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d791a45050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b038181166000908152601e60205260409020541680156112915780611293565b825b90506001600160a01b0381166112bc5760405163516101e760e11b815260040160405180910390fd5b846000036112dd5760405163606ab7a160e11b815260040160405180910390fd5b60006112e88561161e565b905060006112fe8260200151836000015161163d565b6001600160a01b038086166000908152600e60209081526040808320938b16835292905220549091508781101561134857604051630a1e6d4d60e01b815260040160405180910390fd5b6001600160a01b038086166000908152600e60209081526040808320938b16835292905220888203905561137d87858a61167f565b604080516001600160a01b0386811682528981166020830152918101849052606081018a9052336080820152908616907ffacf3161e9675ca1ca84a16d238bc838c7e2084c302cf411d9da7ac0391f64869060a00160405180910390a25050505050505050565b6001600160a01b03811661140b576040516339773cbf60e21b815260040160405180910390fd5b8260000361142c57604051632a24141960e01b815260040160405180910390fd5b600080611438846116be565b915091506114446115f7565b15801561146a57506001600160a01b0383166000908152601c602052604090205460ff16155b1561148857604051631464c65f60e31b815260040160405180910390fd5b815160045463ffffffff918216911603611555576040516370a0823160e01b815230600482015260009086906001600160a01b038716906370a0823190602401602060405180830381865afa1580156114e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115099190611edd565b6115139190611ef6565b60008381526007602052604090205490915080821180156115345750600081115b1561155257604051638ada373160e01b815260040160405180910390fd5b50505b61155f8486611742565b6001600160a01b038084166000908152600e6020908152604080832093881683529290529081208054879290611596908490611ef6565b9091555050604080516001600160a01b03868116825260208201849052918101879052336060820152908416907fcc3100122c1752fe0f6bfa5503175bc53eb00b5f2d774e81efedcd2b10a6d24b9060800160405180910390a25050505050565b60008061160261123c565b6001600160a01b03161480611619575060175460ff165b905090565b6040805180820190915260008082526020820152610988826000611783565b6000828260405160200161166192919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b8060000361168c57505050565b6001600160a01b0383166116b357604051633a48ca7b60e11b815260040160405180910390fd5b61113583838361187b565b60408051808201909152600080825260208201526000806116de8461161e565b905060006116f48260200151836000015161163d565b90506116fe6118de565b15801561171a575060008181526006602052604090205460ff16155b156117385760405163d7ad34f160e01b815260040160405180910390fd5b9094909350915050565b8060000361174e575050565b6001600160a01b03821661177557604051632a38b13360e01b815260040160405180910390fd5b61177f8282611903565b5050565b604080518082019091526000808252602082015260408051808201909152600080825260208201526001600160a01b0384166117c0579050610988565b506001600160a01b03831660009081526008830160209081526040918290208251808401909352805463ffffffff16808452600190910154918301919091521561180b579050610988565b6118158484611a1c565b1561183b57600483015463ffffffff1681526001600160a01b0384166020820152610f46565b506001600160a01b03831660009081526009830160209081526040918290208251808401909352805463ffffffff16835260010154908201529392505050565b6040516001600160a01b03831660248201526044810182905261113590849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611a52565b6000806118e961123c565b6001600160a01b0316148061161957505060195460ff1690565b8060000361190f575050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015611956573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061197a9190611edd565b905061198883333085611b29565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa1580156119d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f49190611edd565b6119fe9190611e6f565b1461113557604051631a39afd960e11b815260040160405180910390fd5b6001600160a01b038216600090815260098201602052604081205463ffffffff1615611a4a57506000610988565b50503b151590565b6000611aa7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b679092919063ffffffff16565b8051909150156111355780806020019051810190611ac59190611f0e565b6111355760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6040516001600160a01b0380851660248301528316604482015260648101829052611b619085906323b872dd60e01b906084016118a7565b50505050565b6060611b768484600085611b7e565b949350505050565b606082471015611bdf5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611b20565b6001600160a01b0385163b611c365760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611b20565b600080866001600160a01b03168587604051611c529190611f5c565b60006040518083038185875af1925050503d8060008114611c8f576040519150601f19603f3d011682016040523d82523d6000602084013e611c94565b606091505b5091509150611ca4828286611caf565b979650505050505050565b60608315611cbe575081610f46565b825115611cce5782518084602001fd5b8160405162461bcd60e51b8152600401611b209190611f78565b6001600160a01b0381168114611cfd57600080fd5b50565b600060208284031215611d1257600080fd5b8135610f4681611ce8565b60008060008060808587031215611d3357600080fd5b843593506020850135611d4581611ce8565b92506040850135611d5581611ce8565b91506060850135611d6581611ce8565b939692955090935050565b60008060408385031215611d8357600080fd5b8235611d8e81611ce8565b91506020830135611d9e81611ce8565b809150509250929050565b600080600060608486031215611dbe57600080fd5b833592506020840135611dd081611ce8565b91506040840135611de081611ce8565b809150509250925092565b60008060408385031215611dfe57600080fd5b823591506020830135611d9e81611ce8565b600060208284031215611e2257600080fd5b5035919050565b600080600060608486031215611e3e57600080fd5b8335611e4981611ce8565b92506020840135611dd081611ce8565b634e487b7160e01b600052601160045260246000fd5b600082821015611e8157611e81611e59565b500390565b6000816000190483118215151615611ea057611ea0611e59565b500290565b600082611ec257634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b600060208284031215611eef57600080fd5b5051919050565b60008219821115611f0957611f09611e59565b500190565b600060208284031215611f2057600080fd5b81518015158114610f4657600080fd5b60005b83811015611f4b578181015183820152602001611f33565b83811115611b615750506000910152565b60008251611f6e818460208701611f30565b9190910192915050565b6020815260008251806020840152611f97816040850160208701611f30565b601f01601f1916919091016040019291505056fea26469706673582212202e27239cf3df337cc1c43a6178e56c25859645452afbcaadc42a2d0710e4ef1064736f6c634300080f0033";

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
