/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { PortalFacet, PortalFacetInterface } from "../../../../../contracts/core/connext/facets/PortalFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__getTokenIndexFromStableSwapPool_notExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__transferAssetToContract_feeOnTransferNotSupported",
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
    inputs: [],
    name: "PortalFacet__repayAavePortalFor_notSupportedAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortalFor_zeroAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_swapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__setAavePortalFee_invalidFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AavePortalRepayment",
    type: "event",
  },
  {
    inputs: [],
    name: "aavePool",
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
    name: "aavePortalFee",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalDebt",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalFeeDebt",
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
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "agent",
            type: "address",
          },
          {
            internalType: "address",
            name: "recovery",
            type: "address",
          },
          {
            internalType: "bool",
            name: "forceSlow",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "address",
            name: "callback",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "callbackFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "relayerFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationMinOut",
            type: "uint256",
          },
        ],
        internalType: "struct CallParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address",
        name: "_originSender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_bridgedAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxIn",
        type: "uint256",
      },
    ],
    name: "repayAavePortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "agent",
            type: "address",
          },
          {
            internalType: "address",
            name: "recovery",
            type: "address",
          },
          {
            internalType: "bool",
            name: "forceSlow",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "address",
            name: "callback",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "callbackFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "relayerFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationMinOut",
            type: "uint256",
          },
        ],
        internalType: "struct CallParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adopted",
        type: "address",
      },
      {
        internalType: "address",
        name: "_originSender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_bridgedAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
    ],
    name: "repayAavePortalFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aavePool",
        type: "address",
      },
    ],
    name: "setAavePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aavePortalFeeNumerator",
        type: "uint256",
      },
    ],
    name: "setAavePortalFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612152806100206000396000f3fe60806040526004361061007b5760003560e01c8063a03e4bc31161004e578063a03e4bc314610122578063d1e5f31c14610158578063e185cf2214610185578063ef1eb0c11461019857600080fd5b806309d7ba5414610080578063349f937c146100c05780633bd30d34146100e2578063527941dc14610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004611afa565b60009081526027602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611b2f565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd366004611afa565b61022e565b34801561010e57600080fd5b506100e061011d366004611b63565b6102af565b34801561012e57600080fd5b5060255461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561016457600080fd5b506100ad610173366004611afa565b60009081526028602052604090205490565b6100e0610193366004611bef565b610475565b3480156101a457600080fd5b506026546100ad565b336101df7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610206576040516314e74a2560e21b815260040160405180910390fd5b602580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336102607fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610287576040516314e74a2560e21b815260040160405180910390fd5b6127108111156102aa5760405163f48157d160e01b815260040160405180910390fd5b602655565b602254600119016102d357604051637ce54e2d60e11b815260040160405180910390fd5b6002602255336000908152600d602090815260408083206001600160a01b038b16845290915290205481111561031c5760405163badaeb5960e01b815260040160405180910390fd5b6006546040516378a9bb4360e11b81526001600160a01b038981166004830152600092839291169063f1537686906024016040805180830381865afa158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d9190611c87565b9150915060006103aa8b6103a090611da6565b898985878e61056b565b905060008060006103cf6103be86886105aa565b8e6103c98b8d611eae565b8a6105ed565b925092509250826103f3576040516379a3a9f160e01b815260040160405180910390fd5b816000600d016000336001600160a01b03166001600160a01b0316815260200190815260200160002060008f6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461044e9190611ec6565b909155506104609050818a8a87610647565b50506001602255505050505050505050505050565b6022546001190161049957604051637ce54e2d60e11b815260040160405180910390fd5b60026022556001600160a01b0386166000908152600960209081526040918290208251808401909352805463ffffffff168352600101549082018190526104f35760405163f88b978d60e01b815260040160405180910390fd5b60006105136105018a611da6565b8787856020015186600001518c61056b565b905060006105218486611eae565b905080600003610544576040516330d5e3e360e11b815260040160405180910390fd5b61054e898261079c565b61055a89868685610647565b505060016022555050505050505050565b600084878386868a60405160200161058896959493929190611f35565b6040516020818303038152906040528051906020012090509695505050505050565b600082826040516020016105ce92919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000848152600a60205260408120548190819081906001600160a01b0390811690881681036106275760018789945094509450505061063d565b6106348989838a8a6107d1565b94509450945050505b9450945094915050565b60008181526027602052604081208054859290610665908490611ec6565b909155505060008181526028602052604081208054849290610688908490611ec6565b90915550506025546106ab90859061010090046001600160a01b031660006109be565b6025546106d190859061010090046001600160a01b03166106cc8587611eae565b610b10565b60255460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b15801561072c57600080fd5b505af1158015610740573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b6001600160a01b0382166107c357604051632a38b13360e01b815260040160405180910390fd5b6107cd8282610bc8565b5050565b60008080806000806107f48b600090815260236020526040902060080154151590565b156108525760008b81526023840160205260408120906108148d8d610cd5565b905060006108228e8d610cd5565b90506108308383838e610d5d565b8a1061084a57600194506108478383838e8e610dc8565b93505b5050506109ae565b60008b815260078401602052604080822054905163f9a15fb960e01b81526001600160a01b038d811660048301528c81166024830152604482018c90529091169190829063f9a15fb990606401602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e09190612060565b90508881116109ab57600193506108f98c8360006109be565b6109048c8383610b10565b6001600160a01b038216635428c1178b8e8e8d61092342610e10611eae565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af1158015610984573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a89190612060565b92505b50505b909a909950969750505050505050565b801580610a385750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a369190612060565b155b610aa85760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b038316602482015260448101829052610b0b90849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261108b565b505050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610b61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b859190612060565b610b8f9190611eae565b6040516001600160a01b038516602482015260448101829052909150610bc290859063095ea7b360e01b90606401610ad4565b50505050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610c0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c339190612060565b9050610c418333308561115d565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015610c89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cad9190612060565b610cb79190611ec6565b14610b0b57604051631a39afd960e11b815260040160405180910390fd5b60008281526024602090815260408083206001600160a01b0385168085529083528184205486855260239093529083206008018054849360ff1692919083908110610d2257610d22612079565b6000918252602090912001546001600160a01b031614610d555760405163054e442960e41b815260040160405180910390fd5b949350505050565b6000610dbe8585858589600a01805480602002602001604051908101604052809291908181526020018280548015610db457602002820191906000526020600020905b815481526020019060010190808311610da0575b5050505050611195565b5095945050505050565b600085600a018460ff1681548110610de257610de2612079565b9060005260206000200154831115610e355760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b6044820152606401610a9f565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610e8857602002820191906000526020600020905b815481526020019060010190808311610e74575b50505050509050610e9c8989898985611195565b909350915084831115610ede5760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b6044820152606401610a9f565b6000896009018960ff1681548110610ef857610ef8612079565b90600052602060002001546402540be4008b6006015485610f19919061208f565b610f2391906120ae565b610f2d91906120ae565b90508084838b60ff1681518110610f4657610f46612079565b6020026020010151610f589190611eae565b610f629190611ec6565b8a600a018a60ff1681548110610f7a57610f7a612079565b906000526020600020018190555086828960ff1681518110610f9e57610f9e612079565b6020026020010151610fb09190611ec6565b8a600a018960ff1681548110610fc857610fc8612079565b600091825260209091200155801561102d57808a600b018a60ff1681548110610ff357610ff3612079565b90600052602060002001546110089190611eae565b8a600b018a60ff168154811061102057611020612079565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b60006110e0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113df9092919063ffffffff16565b805190915015610b0b57808060200190518101906110fe91906120d0565b610b0b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610a9f565b6040516001600160a01b0380851660248301528316604482015260648101829052610bc29085906323b872dd60e01b90608401610ad4565b6000808460ff168660ff16036111ed5760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c660000000000000000006044820152606401610a9f565b60008760090180548060200260200160405190810160405280929190818152602001828054801561123d57602002820191906000526020600020905b815481526020019060010190808311611229575b50505050509050600061125085836113f8565b905080518860ff16108015611268575080518760ff16105b6112a95760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b6044820152606401610a9f565b60006112b48a611503565b905060006112c2838361150e565b9050838960ff16815181106112d9576112d9612079565b6020026020010151886112ec919061208f565b838a60ff168151811061130157611301612079565b60200260200101516113139190611ec6565b838a60ff168151811061132857611328612079565b6020026020010181815250506000611342838c86856116bb565b9050838b60ff168151811061135957611359612079565b60200260200101518161136c9190611ec6565b611377906001611eae565b96506402540be4008c600501548861138f919061208f565b61139991906120ae565b9550848b60ff16815181106113b0576113b0612079565b602002602001015186886113c49190611eae565b6113ce91906120ae565b965050505050509550959350505050565b60606113ee84846000856118aa565b90505b9392505050565b815181516060919081146114455760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b6044820152606401610a9f565b60008167ffffffffffffffff81111561146057611460611cb5565b604051908082528060200260200182016040528015611489578160200160208202803683370190505b50905060005b828110156114fa578481815181106114a9576114a9612079565b60200260200101518682815181106114c3576114c3612079565b60200260200101516114d5919061208f565b8282815181106114e7576114e7612079565b602090810291909101015260010161148f565b50949350505050565b60006105e7826119db565b815160009081805b8281101561154d5785818151811061153057611530612079565b6020026020010151826115439190611eae565b9150600101611516565b5080600003611561576000925050506105e7565b6000818161156f858861208f565b905060005b61010081101561167c578260005b878110156115cd57878b828151811061159d5761159d612079565b60200260200101516115af919061208f565b6115b9868461208f565b6115c391906120ae565b9150600101611582565b50839450808760016115df9190611eae565b6115e9919061208f565b6064856115f68287611ec6565b611600919061208f565b61160a91906120ae565b6116149190611eae565b8461161f898461208f565b606461162b8a8861208f565b61163591906120ae565b61163f9190611eae565b611649919061208f565b61165391906120ae565b935061165f8486611a85565b1561167357839750505050505050506105e7565b50600101611574565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b6044820152606401610a9f565b815160009060ff851681116117045760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b6044820152606401610a9f565b82600080611712848a61208f565b905060005b84811015611794578860ff16811461178c5787818151811061173b5761173b612079565b60200260200101518361174e9190611eae565b92508488828151811061176357611763612079565b6020026020010151611775919061208f565b61177f888661208f565b61178991906120ae565b93505b600101611717565b5061179f848261208f565b60646117ab888661208f565b6117b5919061208f565b6117bf91906120ae565b92506000816117cf60648961208f565b6117d991906120ae565b6117e39084611eae565b9050600087815b610100811015611861578192508984836002611806919061208f565b6118109190611eae565b61181a9190611ec6565b87611825848061208f565b61182f9190611eae565b61183991906120ae565b91506118458284611a85565b1561185957509650610d5595505050505050565b6001016117ea565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e766572676500006044820152606401610a9f565b60608247101561190b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610a9f565b6001600160a01b0385163b6119625760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a9f565b600080866001600160a01b0316858760405161197e91906120ed565b60006040518083038185875af1925050503d80600081146119bb576040519150601f19603f3d011682016040523d82523d6000602084013e6119c0565b606091505b50915091506119d0828286611a9c565b979650505050505050565b6004810154600282015460009190428211156113f1576003840154600185015480831115611a4957611a0d8285611ec6565b611a178342611ec6565b611a218386611ec6565b611a2b919061208f565b611a3591906120ae565b611a3f9082611eae565b9695505050505050565b611a538285611ec6565b611a5d8342611ec6565b611a678584611ec6565b611a71919061208f565b611a7b91906120ae565b611a3f9082611ec6565b60006001611a938484611ad5565b11159392505050565b60608315611aab5750816113f1565b825115611abb5782518084602001fd5b8160405162461bcd60e51b8152600401610a9f9190612109565b600081831115611af057611ae98284611ec6565b90506105e7565b6113f18383611ec6565b600060208284031215611b0c57600080fd5b5035919050565b80356001600160a01b0381168114611b2a57600080fd5b919050565b600060208284031215611b4157600080fd5b6113f182611b13565b60006101808284031215611b5d57600080fd5b50919050565b600080600080600080600080610100898b031215611b8057600080fd5b883567ffffffffffffffff811115611b9757600080fd5b611ba38b828c01611b4a565b985050611bb260208a01611b13565b9650611bc060408a01611b13565b979a96995096976060810135975060808101359660a0820135965060c0820135955060e0909101359350915050565b600080600080600080600060e0888a031215611c0a57600080fd5b873567ffffffffffffffff811115611c2157600080fd5b611c2d8a828b01611b4a565b975050611c3c60208901611b13565b9550611c4a60408901611b13565b969995985095966060810135965060808101359560a0820135955060c0909101359350915050565b63ffffffff81168114611c8457600080fd5b50565b60008060408385031215611c9a57600080fd5b8251611ca581611c72565b6020939093015192949293505050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611cef57611cef611cb5565b60405290565b600082601f830112611d0657600080fd5b813567ffffffffffffffff80821115611d2157611d21611cb5565b604051601f8301601f19908116603f01168101908282118183101715611d4957611d49611cb5565b81604052838152866020858801011115611d6257600080fd5b836020870160208301376000602085830101528094505050505092915050565b8035611b2a81611c72565b8015158114611c8457600080fd5b8035611b2a81611d8d565b60006101808236031215611db957600080fd5b611dc1611ccb565b611dca83611b13565b8152602083013567ffffffffffffffff811115611de657600080fd5b611df236828601611cf5565b602083015250611e0460408401611d82565b6040820152611e1560608401611d82565b6060820152611e2660808401611b13565b6080820152611e3760a08401611b13565b60a0820152611e4860c08401611d9b565b60c0820152611e5960e08401611d9b565b60e0820152610100611e6c818501611b13565b908201526101208381013590820152610140808401359082015261016092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ec157611ec1611e98565b500190565b600082821015611ed857611ed8611e98565b500390565b60005b83811015611ef8578181015183820152602001611ee0565b83811115610bc25750506000910152565b60008151808452611f21816020860160208601611edd565b601f01601f19169290920160200192915050565b86815260c06020820152611f5560c0820187516001600160a01b03169052565b600060208701516101808060e0850152611f73610240850183611f09565b91506040890151610100611f8e8187018363ffffffff169052565b60608b01519150610120611fa98188018463ffffffff169052565b60808c01519250610140611fc7818901856001600160a01b03169052565b60a08d01519350610160611fe5818a01866001600160a01b03169052565b60c08e015115159589019590955260e08d015115156101a0890152918c01516001600160a01b039081166101c0890152908c01516101e0880152908b0151610200870152919099015161022085015296909616604083015250606081019390935263ffffffff91909116608083015260a09091015292915050565b60006020828403121561207257600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b60008160001904831182151516156120a9576120a9611e98565b500290565b6000826120cb57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156120e257600080fd5b81516113f181611d8d565b600082516120ff818460208701611edd565b9190910192915050565b6020815260006113f16020830184611f0956fea26469706673582212200ecaccdd79a13245c145b14d99f125c8071560fa3c9d53795f543078f4e3a8a064736f6c634300080f0033";

type PortalFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: PortalFacetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class PortalFacet__factory extends ContractFactory {
  constructor(...args: PortalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PortalFacet> {
    return super.deploy(overrides || {}) as Promise<PortalFacet>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PortalFacet {
    return super.attach(address) as PortalFacet;
  }
  override connect(signer: Signer): PortalFacet__factory {
    return super.connect(signer) as PortalFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PortalFacetInterface {
    return new utils.Interface(_abi) as PortalFacetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PortalFacet {
    return new Contract(address, _abi, signerOrProvider) as PortalFacet;
  }
}
