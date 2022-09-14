/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  PortalFacet,
  PortalFacetInterface,
} from "../../../../../contracts/core/connext/facets/PortalFacet";

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
            name: "delegate",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
        ],
        internalType: "struct CallParams",
        name: "_params",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "originSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bridgedAmt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "normalizedIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "canonicalId",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
        ],
        internalType: "struct TransferIdGenerationInformation",
        name: "_idInfo",
        type: "tuple",
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
            name: "delegate",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "slippage",
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
        name: "_normalizedIn",
        type: "uint256",
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
  "0x608060405234801561001057600080fd5b506120f6806100206000396000f3fe60806040526004361061007b5760003560e01c806354cc92261161004e57806354cc922614610122578063a03e4bc314610135578063d1e5f31c1461016b578063ef1eb0c11461019857600080fd5b806309d7ba541461008057806328936053146100c0578063349f937c146100e25780633bd30d3414610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004611b4f565b60009081526024602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611b80565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd366004611c1d565b6103ae565b34801561010e57600080fd5b506100e061011d366004611b4f565b61042f565b6100e0610130366004611c3a565b6104b0565b34801561014157600080fd5b5060225461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561017757600080fd5b506100ad610186366004611b4f565b60009081526025602052604090205490565b3480156101a457600080fd5b506023546100ad565b601f54600119016101d157604051637ce54e2d60e11b815260040160405180910390fd5b6002601f5560045460009064010000000090046001600160a01b031663589b3c6461020260c0880160a08901611cde565b6040516001600160e01b031960e084901b16815263ffffffff91909116600482015260808801356024820152604401602060405180830381865afa15801561024e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102729190611cf9565b336000908152600b602090815260408083206001600160a01b03851684529091529020549091508211156102b95760405163badaeb5960e01b815260040160405180910390fd5b60006102fd6102c788611dfb565b6040880135602089013560608a013560808b01356102eb60c08d0160a08e01611cde565b6102f860208e018e611c1d565b6105a8565b90506000808061033461032360808b013561031e60c08d0160a08e01611cde565b6105ea565b8661032e8a8c611eb7565b8961062d565b92509250925082610358576040516379a3a9f160e01b815260040160405180910390fd5b336000908152600b602090815260408083206001600160a01b03891684529091528120805484929061038b908490611ecf565b9091555061039d905081898987610687565b50506001601f555050505050505050565b336103e07fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610407576040516314e74a2560e21b815260040160405180910390fd5b602280546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336104617fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610488576040516314e74a2560e21b815260040160405180910390fd5b6127108111156104ab5760405163f48157d160e01b815260040160405180910390fd5b602355565b601f54600119016104d457604051637ce54e2d60e11b815260040160405180910390fd5b6002601f556001600160a01b0387166000908152600760209081526040918290208251808401909352805463ffffffff1683526001015490820181905261052e5760405163f88b978d60e01b815260040160405180910390fd5b600061054f61053c8b611dfb565b888888866020015187600001518e6105a8565b9050600061055d8486611eb7565b905080600003610580576040516330d5e3e360e11b815260040160405180910390fd5b61058a8a826107dc565b6105968a868685610687565b50506001601f55505050505050505050565b600084888386868a8c6040516020016105c79796959493929190611f3e565b604051602081830303815290604052805190602001209050979650505050505050565b6000828260405160200161060e92919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000848152600860205260408120548190819081906001600160a01b0390811690881681036106675760018789945094509450505061067d565b6106748989838a8a61081d565b94509450945050505b9450945094915050565b600081815260246020526040812080548592906106a5908490611ecf565b9091555050600081815260256020526040812080548492906106c8908490611ecf565b90915550506022546106eb90859061010090046001600160a01b03166000610a09565b60225461071190859061010090046001600160a01b031661070c8587611eb7565b610b5b565b60225460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b15801561076c57600080fd5b505af1158015610780573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b806000036107e8575050565b6001600160a01b03821661080f57604051632a38b13360e01b815260040160405180910390fd5b6108198282610c13565b5050565b600080808060008061083f8b6000908152602080526040902060080154151590565b1561089d5760008b815260208085019052604081209061085f8d8d610d2c565b9050600061086d8e8d610d2c565b905061087b8383838e610db2565b8a1061089557600194506108928383838e8e610e1d565b93505b5050506109f9565b60008b815260058401602052604080822054905163f9a15fb960e01b81526001600160a01b038d811660048301528c81166024830152604482018c90529091169190829063f9a15fb990606401602060405180830381865afa158015610907573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092b9190612004565b90508881116109f657600193506109448c836000610a09565b61094f8c8383610b5b565b6001600160a01b038216635428c1178b8e8e8d61096e42610e10611eb7565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af11580156109cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f39190612004565b92505b50505b909a909950969750505050505050565b801580610a835750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610a5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a819190612004565b155b610af35760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b038316602482015260448101829052610b5690849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526110e0565b505050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610bac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd09190612004565b610bda9190611eb7565b6040516001600160a01b038516602482015260448101829052909150610c0d90859063095ea7b360e01b90606401610b1f565b50505050565b80600003610c1f575050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610c66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8a9190612004565b9050610c98833330856111b2565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015610ce0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d049190612004565b610d0e9190611ecf565b14610b5657604051631a39afd960e11b815260040160405180910390fd5b60008281526021602090815260408083206001600160a01b038516808552908352818420548685529280529083206008018054849360ff1692919083908110610d7757610d7761201d565b6000918252602090912001546001600160a01b031614610daa5760405163054e442960e41b815260040160405180910390fd5b949350505050565b6000610e138585858589600a01805480602002602001604051908101604052809291908181526020018280548015610e0957602002820191906000526020600020905b815481526020019060010190808311610df5575b50505050506111ea565b5095945050505050565b600085600a018460ff1681548110610e3757610e3761201d565b9060005260206000200154831115610e8a5760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b6044820152606401610aea565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610edd57602002820191906000526020600020905b815481526020019060010190808311610ec9575b50505050509050610ef189898989856111ea565b909350915084831115610f335760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b6044820152606401610aea565b6000896009018960ff1681548110610f4d57610f4d61201d565b90600052602060002001546402540be4008b6006015485610f6e9190612033565b610f789190612052565b610f829190612052565b90508084838b60ff1681518110610f9b57610f9b61201d565b6020026020010151610fad9190611eb7565b610fb79190611ecf565b8a600a018a60ff1681548110610fcf57610fcf61201d565b906000526020600020018190555086828960ff1681518110610ff357610ff361201d565b60200260200101516110059190611ecf565b8a600a018960ff168154811061101d5761101d61201d565b600091825260209091200155801561108257808a600b018a60ff16815481106110485761104861201d565b906000526020600020015461105d9190611eb7565b8a600b018a60ff16815481106110755761107561201d565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b6000611135826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114349092919063ffffffff16565b805190915015610b5657808060200190518101906111539190612074565b610b565760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610aea565b6040516001600160a01b0380851660248301528316604482015260648101829052610c0d9085906323b872dd60e01b90608401610b1f565b6000808460ff168660ff16036112425760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c660000000000000000006044820152606401610aea565b60008760090180548060200260200160405190810160405280929190818152602001828054801561129257602002820191906000526020600020905b81548152602001906001019080831161127e575b5050505050905060006112a5858361144d565b905080518860ff161080156112bd575080518760ff16105b6112fe5760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b6044820152606401610aea565b60006113098a611558565b905060006113178383611563565b9050838960ff168151811061132e5761132e61201d565b6020026020010151886113419190612033565b838a60ff16815181106113565761135661201d565b60200260200101516113689190611ecf565b838a60ff168151811061137d5761137d61201d565b6020026020010181815250506000611397838c8685611710565b9050838b60ff16815181106113ae576113ae61201d565b6020026020010151816113c19190611ecf565b6113cc906001611eb7565b96506402540be4008c60050154886113e49190612033565b6113ee9190612052565b9550848b60ff16815181106114055761140561201d565b602002602001015186886114199190611eb7565b6114239190612052565b965050505050509550959350505050565b606061144384846000856118ff565b90505b9392505050565b8151815160609190811461149a5760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b6044820152606401610aea565b60008167ffffffffffffffff8111156114b5576114b5611d16565b6040519080825280602002602001820160405280156114de578160200160208202803683370190505b50905060005b8281101561154f578481815181106114fe576114fe61201d565b60200260200101518682815181106115185761151861201d565b602002602001015161152a9190612033565b82828151811061153c5761153c61201d565b60209081029190910101526001016114e4565b50949350505050565b600061062782611a30565b815160009081805b828110156115a2578581815181106115855761158561201d565b6020026020010151826115989190611eb7565b915060010161156b565b50806000036115b657600092505050610627565b600081816115c48588612033565b905060005b6101008110156116d1578260005b8781101561162257878b82815181106115f2576115f261201d565b60200260200101516116049190612033565b61160e8684612033565b6116189190612052565b91506001016115d7565b50839450808760016116349190611eb7565b61163e9190612033565b60648561164b8287611ecf565b6116559190612033565b61165f9190612052565b6116699190611eb7565b846116748984612033565b60646116808a88612033565b61168a9190612052565b6116949190611eb7565b61169e9190612033565b6116a89190612052565b93506116b48486611ada565b156116c85783975050505050505050610627565b506001016115c9565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b6044820152606401610aea565b815160009060ff851681116117595760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b6044820152606401610aea565b82600080611767848a612033565b905060005b848110156117e9578860ff1681146117e1578781815181106117905761179061201d565b6020026020010151836117a39190611eb7565b9250848882815181106117b8576117b861201d565b60200260200101516117ca9190612033565b6117d48886612033565b6117de9190612052565b93505b60010161176c565b506117f48482612033565b60646118008886612033565b61180a9190612033565b6118149190612052565b9250600081611824606489612033565b61182e9190612052565b6118389084611eb7565b9050600087815b6101008110156118b657819250898483600261185b9190612033565b6118659190611eb7565b61186f9190611ecf565b8761187a8480612033565b6118849190611eb7565b61188e9190612052565b915061189a8284611ada565b156118ae57509650610daa95505050505050565b60010161183f565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e766572676500006044820152606401610aea565b6060824710156119605760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610aea565b6001600160a01b0385163b6119b75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610aea565b600080866001600160a01b031685876040516119d39190612091565b60006040518083038185875af1925050503d8060008114611a10576040519150601f19603f3d011682016040523d82523d6000602084013e611a15565b606091505b5091509150611a25828286611af1565b979650505050505050565b600481015460028201546000919042821115611446576003840154600185015480831115611a9e57611a628285611ecf565b611a6c8342611ecf565b611a768386611ecf565b611a809190612033565b611a8a9190612052565b611a949082611eb7565b9695505050505050565b611aa88285611ecf565b611ab28342611ecf565b611abc8584611ecf565b611ac69190612033565b611ad09190612052565b611a949082611ecf565b60006001611ae88484611b2a565b11159392505050565b60608315611b00575081611446565b825115611b105782518084602001fd5b8160405162461bcd60e51b8152600401610aea91906120ad565b600081831115611b4557611b3e8284611ecf565b9050610627565b6114468383611ecf565b600060208284031215611b6157600080fd5b5035919050565b600060e08284031215611b7a57600080fd5b50919050565b6000806000806000858703610140811215611b9a57600080fd5b863567ffffffffffffffff811115611bb157600080fd5b611bbd89828a01611b68565b96505060c0601f1982011215611bd257600080fd5b50939660208601965060e086013595610100810135955061012001359350915050565b6001600160a01b0381168114611c0a57600080fd5b50565b8035611c1881611bf5565b919050565b600060208284031215611c2f57600080fd5b813561144681611bf5565b600080600080600080600080610100898b031215611c5757600080fd5b883567ffffffffffffffff811115611c6e57600080fd5b611c7a8b828c01611b68565b9850506020890135611c8b81611bf5565b96506040890135611c9b81611bf5565b979a96995096976060810135975060808101359660a0820135965060c0820135955060e0909101359350915050565b803563ffffffff81168114611c1857600080fd5b600060208284031215611cf057600080fd5b61144682611cca565b600060208284031215611d0b57600080fd5b815161144681611bf5565b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611d4f57611d4f611d16565b60405290565b600082601f830112611d6657600080fd5b813567ffffffffffffffff80821115611d8157611d81611d16565b604051601f8301601f19908116603f01168101908282118183101715611da957611da9611d16565b81604052838152866020858801011115611dc257600080fd5b836020870160208301376000602085830101528094505050505092915050565b8015158114611c0a57600080fd5b8035611c1881611de2565b600060e08236031215611e0d57600080fd5b611e15611d2c565b611e1e83611c0d565b8152602083013567ffffffffffffffff811115611e3a57600080fd5b611e4636828601611d55565b602083015250611e5860408401611cca565b6040820152611e6960608401611cca565b6060820152611e7a60808401611c0d565b6080820152611e8b60a08401611df0565b60a082015260c092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b60008219821115611eca57611eca611ea1565b500190565b600082821015611ee157611ee1611ea1565b500390565b60005b83811015611f01578181015183820152602001611ee9565b83811115610c0d5750506000910152565b60008151808452611f2a816020860160208601611ee6565b601f01601f19169290920160200192915050565b87815260e0602082015260018060a01b0387511660e08201526000602088015160e0610100840152611f746101c0840182611f12565b60408a015163ffffffff90811661012086015260608b01511661014085015260808a01516001600160a01b0381166101608601529091505060a08901518015156101808501525060c08901516101a08401526001600160a01b03881660408401529050856060830152611fef608083018663ffffffff169052565b60a082019390935260c0015295945050505050565b60006020828403121561201657600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561204d5761204d611ea1565b500290565b60008261206f57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561208657600080fd5b815161144681611de2565b600082516120a3818460208701611ee6565b9190910192915050565b6020815260006114466020830184611f1256fea264697066735822122018f5fa9ded1813d79b0867526256282e07c8eda6b5b9bf010281ad0de3a4c38864736f6c634300080f0033";

type PortalFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PortalFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PortalFacet__factory extends ContractFactory {
  constructor(...args: PortalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PortalFacet> {
    return super.deploy(overrides || {}) as Promise<PortalFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
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
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PortalFacet {
    return new Contract(address, _abi, signerOrProvider) as PortalFacet;
  }
}
