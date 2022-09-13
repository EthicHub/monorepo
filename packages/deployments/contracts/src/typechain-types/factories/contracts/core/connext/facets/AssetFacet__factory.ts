/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  AssetFacet,
  AssetFacetInterface,
} from "../../../../../contracts/core/connext/facets/AssetFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetFacet__addAssetId_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetFacet__addAssetId_nativeAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetFacet__removeAssetId_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetFacet__setTokenRegistry_invalidTokenRegistry",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "adoptedAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "localAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AssetAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AssetRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "swapPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "StableSwapAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldTokenRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTokenRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TokenRegistryUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "addStableSwapPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adopted",
        type: "address",
      },
    ],
    name: "adoptedToCanonical",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
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
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "approvedAssets",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "approvedAssets",
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
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "canonicalToAdopted",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "canonicalToAdopted",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
    ],
    name: "removeAssetId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
    ],
    name: "removeAssetId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenRegistry",
        type: "address",
      },
    ],
    name: "setTokenRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "setupAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenRegistry",
    outputs: [
      {
        internalType: "contract ITokenRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a65806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063600620911161008c578063bd7e1e2e11610066578063bd7e1e2e14610249578063bd8671a714610272578063e9a25ab414610285578063ea7a904d1461029857600080fd5b8063600620911461019b5780639d23c4c71461021d578063ae8bc0de1461023657600080fd5b80631506e463146100d45780632c1999d0146100e957806335a5af921461012f5780633c84a51214610142578063569d29e41461015557806357bd0a3214610168575b600080fd5b6100e76100e23660046108ec565b6102ab565b005b6101126100f7366004610924565b6000908152600860205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e761013d36600461093d565b6102f8565b6100e76101503660046108ec565b6103e7565b6100e7610163366004610961565b61042e565b61018b610176366004610924565b60009081526006602052604090205460ff1690565b6040519015158152602001610126565b6101fc6101a936600461093d565b6040805180820190915260008082526020820152506040805180820182526001600160a01b03909216600081815260076020818152938220805463ffffffff168652929091528252600101549082015290565b60408051825163ffffffff1681526020928301519281019290925201610126565b60045464010000000090046001600160a01b0316610112565b61018b6102443660046109ab565b610661565b610112610257366004610924565b6000908152600560205260409020546001600160a01b031690565b6101126102803660046109ab565b610675565b6101126102933660046109ab565b610683565b6100e76102a63660046109c7565b610691565b336102b46106cf565b6001600160a01b0316146102db576040516314e74a2560e21b815260040160405180910390fd5b60006102e6836106fd565b90506102f3838383610718565b505050565b336103016106cf565b6001600160a01b031614610328576040516314e74a2560e21b815260040160405180910390fd5b6004546001600160a01b03640100000000909104811690821681148061035657506001600160a01b0382163b155b1561037457604051630543d80f60e21b815260040160405180910390fd5b60048054640100000000600160c01b0319166401000000006001600160a01b03858116918202929092179092556040805191841682526020820192909252338183015290517fb930976fe3861b681d9ff47fd2a0cd7631c018a3e76b25a945098e35e59c8ad69181900360600190a15050565b336103f06106cf565b6001600160a01b031614610417576040516314e74a2560e21b815260040160405180910390fd5b6000610422836106fd565b90506102f381836107ad565b336104376106cf565b6001600160a01b03161461045e576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b03821661048557604051634fe3da3560e01b815260040160405180910390fd5b6000610490846106fd565b60008181526006602052604090205490915060ff16156104c357604051635c0aa50f60e01b815260040160405180910390fd5b6000818152600660209081526040909120805460ff191660011790556104eb908501856109ec565b6001600160a01b038481166000818152600760209081526040808320805463ffffffff191663ffffffff9790971696909617865589820180356001909701969096558683526008909152812080546001600160a01b03191690921790915560045490926401000000009091049091169063589b3c649061056b90886109ec565b6040516001600160e01b031960e084901b16815263ffffffff91909116600482015260208801356024820152604401602060405180830381865afa1580156105b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105db9190610a12565b90506105ea60208601866109ec565b63ffffffff168560200135837f0c58c78506e2d526f5ccdba28119c9ca3b5ce48e1462e0e19bc39232db11c632878533604051610647939291906001600160a01b0393841681529183166020830152909116604082015260600190565b60405180910390a461065a858484610718565b5050505050565b600061066f610176836106fd565b92915050565b600061066f6100f7836106fd565b600061066f610257836106fd565b3361069a6106cf565b6001600160a01b0316146106c1576040516314e74a2560e21b815260040160405180910390fd5b6106cb82826107ad565b5050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b600061066f6020830180359061071390856109ec565b61087a565b600081815260056020908152604090912080546001600160a01b0319166001600160a01b03851617905561074e908401846109ec565b63ffffffff168360200135827f16285b1cf634d546d51fefe55f6e63e5edf970d2a3d2bd50b55a8cfad25e8b5685336040516107a09291906001600160a01b0392831681529116602082015260400190565b60405180910390a4505050565b60008281526006602052604090205460ff166107dc5760405163a7669c2160e01b815260040160405180910390fd5b6000828152600660209081526040808320805460ff191690556005825280832080546001600160a01b03199081169091556001600160a01b038516845260078352818420805463ffffffff1916815560010184905585845260088352928190208054909316909255905133815283917f9d181adb70e733f5235f839c1eed929407ea8526e41d01f49b9fef703e78dddf910160405180910390a25050565b6000828260405160200161089e92919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b6000604082840312156108ce57600080fd5b50919050565b6001600160a01b03811681146108e957600080fd5b50565b600080606083850312156108ff57600080fd5b61090984846108bc565b91506040830135610919816108d4565b809150509250929050565b60006020828403121561093657600080fd5b5035919050565b60006020828403121561094f57600080fd5b813561095a816108d4565b9392505050565b60008060006080848603121561097657600080fd5b61098085856108bc565b92506040840135610990816108d4565b915060608401356109a0816108d4565b809150509250925092565b6000604082840312156109bd57600080fd5b61095a83836108bc565b600080604083850312156109da57600080fd5b823591506020830135610919816108d4565b6000602082840312156109fe57600080fd5b813563ffffffff8116811461095a57600080fd5b600060208284031215610a2457600080fd5b815161095a816108d456fea26469706673582212202a425a7d1c8a40ba38e6496921852a35c36b5c32a0ab61b87b48de6bb47504be64736f6c634300080f0033";

type AssetFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetFacet__factory extends ContractFactory {
  constructor(...args: AssetFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetFacet> {
    return super.deploy(overrides || {}) as Promise<AssetFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetFacet {
    return super.attach(address) as AssetFacet;
  }
  override connect(signer: Signer): AssetFacet__factory {
    return super.connect(signer) as AssetFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetFacetInterface {
    return new utils.Interface(_abi) as AssetFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetFacet {
    return new Contract(address, _abi, signerOrProvider) as AssetFacet;
  }
}
