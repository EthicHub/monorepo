/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ProposedOwnableFacet,
  ProposedOwnableFacetInterface,
} from "../../../../../contracts/core/connext/facets/ProposedOwnableFacet";

const _abi = [
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
    name: "ProposedOwnableFacet__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__acceptProposedOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleAdmin_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleRouter_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleWatcher_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeAssetWhitelistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeRouterWhitelistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetWhitelist_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetWhitelist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetWhitelist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterWhitelist_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterWhitelist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterWhitelist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__revokeRole_invalidInput",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AssetWhitelistRemovalProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "renounced",
        type: "bool",
      },
    ],
    name: "AssetWhitelistRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "AssignRoleAdmin",
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
    ],
    name: "AssignRoleRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
    ],
    name: "AssignRoleWatcher",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "revokedAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Role",
        name: "revokedRole",
        type: "uint8",
      },
    ],
    name: "RevokeRole",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RouterWhitelistRemovalProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "renounced",
        type: "bool",
      },
    ],
    name: "RouterWhitelistRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetWhitelistRemoved",
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
    inputs: [],
    name: "assetWhitelistTimestamp",
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
        name: "_admin",
        type: "address",
      },
    ],
    name: "assignRoleAdmin",
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
    name: "assignRoleRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
    ],
    name: "assignRoleWatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    inputs: [],
    name: "owner",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeAssetWhitelistRemoval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeRouterWhitelistRemoval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    name: "proposedTimestamp",
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
        name: "_role",
        type: "address",
      },
    ],
    name: "queryRole",
    outputs: [
      {
        internalType: "enum Role",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeAssetWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeRouterWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_revoke",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "routerWhitelistRemoved",
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
    inputs: [],
    name: "routerWhitelistTimestamp",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610fd4806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638da5cb5b116100b8578063bb271a271161007c578063bb271a2714610218578063c5b350df1461022b578063c91cb56a14610233578063d1851c921461026c578063e2b31fc71461027d578063f2d8d74a1461028557600080fd5b80638da5cb5b146101b75780639150bb06146101d7578063a59c8c64146101ea578063a9943b1b146101f2578063b1f8100d1461020557600080fd5b80633f4ba83a116100ff5780633f4ba83a146101845780636a42b8f81461018c5780636e26deba1461019457806380e52e3f1461019c5780638456cb59146101af57600080fd5b806311f7ea6d1461013c5780632c6c579c14610158578063357aac78146101625780633863f8741461016a5780633cf52ffb1461017c575b600080fd5b60195460ff165b60405190151581526020015b60405180910390f35b610160610290565b005b610160610320565b601a545b60405190815260200161014f565b60165461016e565b6101606103ae565b61016e610445565b60185461016e565b6101606101aa366004610ee4565b610474565b610160610594565b6101bf61062e565b6040516001600160a01b03909116815260200161014f565b6101606101e5366004610ee4565b610638565b610160610754565b610160610200366004610ee4565b61083a565b610160610213366004610ee4565b61094f565b610160610226366004610ee4565b610a05565b610160610b19565b61025f610241366004610ee4565b6001600160a01b03166000908152601b602052604090205460ff1690565b60405161014f9190610f4c565b6015546001600160a01b03166101bf565b610160610bc7565b60175460ff16610143565b33610299610cad565b6001600160a01b0316141580156102d457506003336000908152601b602052604090205460ff1660038111156102d1576102d1610f14565b14155b156102f257604051637b32c26b60e01b815260040160405180910390fd5b60175460ff161561031657604051633934404160e01b815260040160405180910390fd5b61031e610cdb565b565b33610329610cad565b6001600160a01b03161415801561036457506003336000908152601b602052604090205460ff16600381111561036157610361610f14565b14155b1561038257604051637b32c26b60e01b815260040160405180910390fd5b60195460ff16156103a65760405163a3515c1f60e01b815260040160405180910390fd5b61031e610d17565b336103b7610cad565b6001600160a01b0316141580156103f257506003336000908152601b602052604090205460ff1660038111156103ef576103ef610f14565b14155b1561041057604051637b32c26b60e01b815260040160405180910390fd5b6020805460ff191690556040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a1565b600061046f7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13225490565b905090565b3361047d610cad565b6001600160a01b0316141580156104b857506003336000908152601b602052604090205460ff1660038111156104b5576104b5610f14565b14155b156104d657604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff169081600381111561050557610505610f14565b148061051857506001600160a01b038216155b1561053657604051630e15d72960e31b815260040160405180910390fd5b6001600160a01b0382166000908152601b602052604090819020805460ff19169055517fdc6f53b47a9dfbea7a15fceef0cd84711d3d79ccc0952111866167af5e59e264906105889084908490610f60565b60405180910390a15050565b3361059d610cad565b6001600160a01b0316141580156105d857506002336000908152601b602052604090205460ff1660038111156105d5576105d5610f14565b14155b156105f65760405163bae4c01f60e01b815260040160405180910390fd5b6020805460ff191660011790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a1565b600061046f610cad565b33610641610cad565b6001600160a01b03161415801561067c57506003336000908152601b602052604090205460ff16600381111561067957610679610f14565b14155b1561069a57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff1660038111156106c7576106c7610f14565b1415806106db57506001600160a01b038116155b156106f9576040516319f546ad60e11b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600117905590519182527ff294e68c632d2c26e3d36129816c9a3e54bfa0ebada89d07d08e15e87a8e240391015b60405180910390a150565b3361075d610cad565b6001600160a01b03161415801561079857506003336000908152601b602052604090205460ff16600381111561079557610795610f14565b14155b156107b657604051637b32c26b60e01b815260040160405180910390fd5b60175460ff16156107da5760405163c4fcf53b60e01b815260040160405180910390fd5b6018546000036107fd5760405163a7f043cd60e01b815260040160405180910390fd5b610805610445565b6018546108129042610f7d565b1161083057604051630f94fc2560e21b815260040160405180910390fd5b61031e6001610d4d565b33610843610cad565b6001600160a01b03161415801561087e57506003336000908152601b602052604090205460ff16600381111561087b5761087b610f14565b14155b1561089c57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff1660038111156108c9576108c9610f14565b1415806108dd57506001600160a01b038116155b156108fb57604051630bceab9d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600217905590519182527ffaac289281b8fc57dff30d0ff38b071d28bb5f24cd5ed1bd2379d6fb27f714dd9101610749565b33610958610cad565b6001600160a01b03161461097f576040516314e74a2560e21b815260040160405180910390fd5b6015546001600160a01b03828116911614806109a257506001600160a01b038116155b156109c057604051630274ac4360e21b815260040160405180910390fd5b806001600160a01b03166109d261062e565b6001600160a01b0316036109f957604051631f677f5160e01b815260040160405180910390fd5b610a0281610d93565b50565b33610a0e610cad565b6001600160a01b031614158015610a4957506003336000908152601b602052604090205460ff166003811115610a4657610a46610f14565b14155b15610a6757604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff166003811115610a9457610a94610f14565b141580610aa857506001600160a01b038116155b15610ac657604051631600e74560e31b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600317905590519182527e0a317382a4189d8763d4a024ec833785cebd3580a084ff0f887f156b822cb19101610749565b6015546001600160a01b03163314610b4457604051631b54eee360e11b815260040160405180910390fd5b6015546001600160a01b0316610b5861062e565b6001600160a01b031603610b7f576040516355cc507960e01b815260040160405180910390fd5b610b87610445565b601654610b949042610f7d565b11610bb2576040516301e60c7360e51b815260040160405180910390fd5b60155461031e906001600160a01b0316610de1565b33610bd0610cad565b6001600160a01b031614158015610c0b57506003336000908152601b602052604090205460ff166003811115610c0857610c08610f14565b14155b15610c2957604051637b32c26b60e01b815260040160405180910390fd5b60195460ff1615610c4d57604051630608cb0760e41b815260040160405180910390fd5b601a54600003610c7057604051634bb4e70d60e01b815260040160405180910390fd5b610c78610445565b601a54610c859042610f7d565b11610ca3576040516320502ec760e21b815260040160405180910390fd5b61031e6001610dff565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b4260188190556040519081527f3fb93cd2d7b177a05cdfd1945eefab6bd66ff1c9935d36b3d3906f8f63b4b7cc906020015b60405180910390a1565b42601a8190556040519081527f33b2ecb6423e15093e362932044a5d4b879d34959f073bcc4a2f622a4a48d77a90602001610d0d565b6017805460ff191682151590811790915560006018556040519081527f4304b1b406eaf3fee0619669a5059495538ebbc3000c03d3ff6ccbc266f25e3c90602001610749565b42601655601580546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6000601655601580546001600160a01b0319169055610a0281610e45565b6019805460ff19168215159081179091556000601a556040519081527f6d2bda5daaba704b44ef68f2d7e8da6da754a843400bb7b37ae88b41864b7fd590602001610749565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c916001600160a01b03848116929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360040180546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215610ef657600080fd5b81356001600160a01b0381168114610f0d57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b60048110610f4857634e487b7160e01b600052602160045260246000fd5b9052565b60208101610f5a8284610f2a565b92915050565b6001600160a01b038316815260408101610f0d6020830184610f2a565b81810381811115610f5a57634e487b7160e01b600052601160045260246000fdfea26469706673582212208a93688ec66a3c6e95c0281232894b383f353ce0e24c8ac6680325b3fba3c58a64736f6c63430008110033";

type ProposedOwnableFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProposedOwnableFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProposedOwnableFacet__factory extends ContractFactory {
  constructor(...args: ProposedOwnableFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProposedOwnableFacet> {
    return super.deploy(overrides || {}) as Promise<ProposedOwnableFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProposedOwnableFacet {
    return super.attach(address) as ProposedOwnableFacet;
  }
  override connect(signer: Signer): ProposedOwnableFacet__factory {
    return super.connect(signer) as ProposedOwnableFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProposedOwnableFacetInterface {
    return new utils.Interface(_abi) as ProposedOwnableFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProposedOwnableFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProposedOwnableFacet;
  }
}
