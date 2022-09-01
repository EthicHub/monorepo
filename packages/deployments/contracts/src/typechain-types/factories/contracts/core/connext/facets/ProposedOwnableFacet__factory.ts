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
    name: "ProposedOwnableFacet__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__renounceOwnership_noProposal",
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
    inputs: [],
    name: "delay",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
  "0x608060405234801561001057600080fd5b506109db806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638456cb59116100a2578063c5b350df11610071578063c5b350df146101c7578063d1851c92146101cf578063d232c220146101e0578063e2b31fc7146101e8578063f2d8d74a146101f057600080fd5b80638456cb59146101845780638da5cb5b1461018c578063a59c8c64146101ac578063b1f8100d146101b457600080fd5b80633cf52ffb116100e95780633cf52ffb1461015b5780633f4ba83a146101635780636a42b8f81461016b5780636e26deba14610174578063715018a61461017c57600080fd5b806311f7ea6d1461011b5780632c6c579c14610137578063357aac78146101415780633863f87414610149575b600080fd5b601a5460ff165b60405190151581526020015b60405180910390f35b61013f6101fb565b005b61013f610259565b601b545b60405190815260200161012e565b60175461014d565b61013f6102b5565b62093a8061014d565b60195461014d565b61013f61031a565b61013f6103db565b610194610443565b6040516001600160a01b03909116815260200161012e565b61013f610452565b61013f6101c2366004610950565b610503565b61013f6105bb565b6016546001600160a01b0316610194565b610122610651565b61013f61066b565b60185460ff16610122565b3361020461071c565b6001600160a01b03161461022b576040516314e74a2560e21b815260040160405180910390fd5b60185460ff161561024f57604051633934404160e01b815260040160405180910390fd5b61025761074a565b565b3361026261071c565b6001600160a01b031614610289576040516314e74a2560e21b815260040160405180910390fd5b601a5460ff16156102ad5760405163a3515c1f60e01b815260040160405180910390fd5b610257610786565b336102be61071c565b6001600160a01b0316146102e5576040516314e74a2560e21b815260040160405180910390fd5b6025805460ff191690556040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a1565b3361032361071c565b6001600160a01b03161461034a576040516314e74a2560e21b815260040160405180910390fd5b60175460000361036d57604051630fde518360e11b815260040160405180910390fd5b60175462093a809061037f9042610980565b1161039c576040516202943360e61b815260040160405180910390fd5b6016546001600160a01b0316156103c6576040516351d346a960e01b815260040160405180910390fd5b601654610257906001600160a01b03166107bc565b336103e461071c565b6001600160a01b03161461040b576040516314e74a2560e21b815260040160405180910390fd5b6025805460ff191660011790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a1565b600061044d61071c565b905090565b3361045b61071c565b6001600160a01b031614610482576040516314e74a2560e21b815260040160405180910390fd5b60185460ff16156104a65760405163c4fcf53b60e01b815260040160405180910390fd5b6019546000036104c95760405163a7f043cd60e01b815260040160405180910390fd5b60195462093a80906104db9042610980565b116104f957604051630f94fc2560e21b815260040160405180910390fd5b61025760016107da565b3361050c61071c565b6001600160a01b031614610533576040516314e74a2560e21b815260040160405180910390fd5b6016546001600160a01b03828116911614801561055857506001600160a01b03811615155b1561057657604051630274ac4360e21b815260040160405180910390fd5b806001600160a01b0316610588610443565b6001600160a01b0316036105af57604051631f677f5160e01b815260040160405180910390fd5b6105b881610827565b50565b6016546001600160a01b031633146105e657604051631b54eee360e11b815260040160405180910390fd5b6016546001600160a01b03166105fa610443565b6001600160a01b031603610621576040516355cc507960e01b815260040160405180910390fd5b60175462093a80906106339042610980565b116103c6576040516301e60c7360e51b815260040160405180910390fd5b60008061065c610443565b6001600160a01b031614905090565b3361067461071c565b6001600160a01b03161461069b576040516314e74a2560e21b815260040160405180910390fd5b601a5460ff16156106bf57604051630608cb0760e41b815260040160405180910390fd5b601b546000036106e257604051634bb4e70d60e01b815260040160405180910390fd5b601b5462093a80906106f49042610980565b11610712576040516320502ec760e21b815260040160405180910390fd5b6102576001610875565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b4260198190556040519081527f3fb93cd2d7b177a05cdfd1945eefab6bd66ff1c9935d36b3d3906f8f63b4b7cc906020015b60405180910390a1565b42601b8190556040519081527f33b2ecb6423e15093e362932044a5d4b879d34959f073bcc4a2f622a4a48d77a9060200161077c565b6000601755601680546001600160a01b03191690556105b8816108bb565b6018805460ff191682151590811790915560006019556040519081527f4304b1b406eaf3fee0619669a5059495538ebbc3000c03d3ff6ccbc266f25e3c906020015b60405180910390a150565b42601755601680546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b601a805460ff19168215159081179091556000601b556040519081527f6d2bda5daaba704b44ef68f2d7e8da6da754a843400bb7b37ae88b41864b7fd59060200161081c565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b038481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60006020828403121561096257600080fd5b81356001600160a01b038116811461097957600080fd5b9392505050565b6000828210156109a057634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220aae60c3e464e4ad661dea494c5ba9153d9286e9c3772c5ecf851961812ac8fc164736f6c634300080f0033";

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
