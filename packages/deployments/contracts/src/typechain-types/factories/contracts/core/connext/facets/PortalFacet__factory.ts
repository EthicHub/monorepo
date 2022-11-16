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
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
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
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
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
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
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
        ],
        internalType: "struct TransferInfo",
        name: "_params",
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
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
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
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
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
        ],
        internalType: "struct TransferInfo",
        name: "_params",
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
  "0x608060405234801561001057600080fd5b50611f29806100206000396000f3fe60806040526004361061007b5760003560e01c8063a03e4bc31161004e578063a03e4bc314610115578063b3f62fcb1461014b578063d1e5f31c1461016b578063ef1eb0c11461019857600080fd5b806309d7ba5414610080578063349f937c146100c05780633bd30d34146100e25780636a39b95d14610102575b600080fd5b34801561008c57600080fd5b506100ad61009b36600461198a565b60009081526023602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db3660046119bf565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd36600461198a565b610260565b6100e06101103660046119f3565b610313565b34801561012157600080fd5b5060215461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561015757600080fd5b506100e0610166366004611a41565b6103cd565b34801561017757600080fd5b506100ad61018636600461198a565b60009081526024602052604090205490565b3480156101a457600080fd5b506022546100ad565b336101df7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b03161415801561021a57506003336000908152601b602052604090205460ff16600381111561021757610217611a95565b14155b1561023857604051637b32c26b60e01b815260040160405180910390fd5b602180546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336102927fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b0316141580156102cd57506003336000908152601b602052604090205460ff1660038111156102ca576102ca611a95565b14155b156102eb57604051637b32c26b60e01b815260040160405180910390fd5b61271081111561030e5760405163f48157d160e01b815260040160405180910390fd5b602255565b601d546001190161033757604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55600061036461035f61018086013561035a6060880160408901611abf565b6104f4565b610537565b9050600061037961037486611bc3565b61056d565b905060006103878486611ccf565b9050806000036103aa576040516330d5e3e360e11b815260040160405180910390fd5b6103b4838261059d565b6103c0838686856106e2565b50506001601d5550505050565b601d54600119016103f157604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55600061041161018086013561035a6060880160408901611abf565b905060006104348261018088013561042f60608a0160408b01611abf565b610837565b336000908152600f602090815260408083206001600160a01b03851684529091529020549091508381101561047c5760405163badaeb5960e01b815260040160405180910390fd5b600061048a61037489611bc3565b90506000806104a4868661049e8b8d611ccf565b8a61084e565b90925090506104b38285611ce2565b336000908152600f602090815260408083206001600160a01b038a1684529091529020556104e3818a8a866106e2565b50506001601d555050505050505050565b6000828260405160200161051892919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000818152600b60205260408120546001600160a01b03168061053157604051634cdfde3760e11b815260040160405180910390fd5b6000816040516020016105809190611d45565b604051602081830303815290604052805190602001209050919050565b806000036105a9575050565b6001600160a01b0382166105d057604051632a38b13360e01b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b9190611e3f565b90506106498333308561089e565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015610691573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b59190611e3f565b6106bf9190611ce2565b146106dd57604051630e40773560e21b815260040160405180910390fd5b505050565b60008181526023602052604081208054859290610700908490611ce2565b909155505060008181526024602052604081208054849290610723908490611ce2565b909155505060215461074690859061010090046001600160a01b0316600061090f565b60215461076c90859061010090046001600160a01b03166107678587611ccf565b610a29565b60215460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b1580156107c757600080fd5b505af11580156107db573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b60006108468484846000610adb565b949350505050565b6000848152600b6020526040812054819081906001600160a01b0390811690871681036108815785935091506108959050565b61088e8888838989610b19565b9350935050505b94509492505050565b6040516001600160a01b03808516602483015283166044820152606481018290526109099085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610c61565b50505050565b8015806109895750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610963573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109879190611e3f565b155b6109f95760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b0383166024820152604481018290526106dd90849063095ea7b360e01b906064016108d2565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610a7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9e9190611e3f565b610aa89190611ccf565b6040516001600160a01b03851660248201526044810182905290915061090990859063095ea7b360e01b906064016108d2565b600481015460009063ffffffff90811690841603610afa575082610846565b506000938452600c01602052505060409020546001600160a01b031690565b6000858152601f6020526040812060088101548291829115610b6257610b56610b428a8a610d33565b610b4c8b8a610d33565b8391908989610db1565b87935093505050610c57565b60008981526005830160205260408120546001600160a01b031690610b8a908a90839061090f565b610b95898288610a29565b60006001600160a01b038216635428c117898c8c8b610bb642610e10611ccf565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af1158015610c17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3b9190611e3f565b9050610c498a83600061090f565b9450879350610c5792505050565b9550959350505050565b6000610cb6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166110749092919063ffffffff16565b8051909150156106dd5780806020019051810190610cd49190611e58565b6106dd5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016109f0565b6000828152602080805260408083206001600160a01b03851680855290835281842054868552601f9093529083206008018054849360ff1692919083908110610d7e57610d7e611e75565b6000918252602090912001546001600160a01b0316146108465760405163054e442960e41b815260040160405180910390fd5b600085600a018460ff1681548110610dcb57610dcb611e75565b9060005260206000200154831115610e1e5760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b60448201526064016109f0565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610e7157602002820191906000526020600020905b815481526020019060010190808311610e5d575b50505050509050610e858989898985611083565b909350915084831115610ec75760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b60448201526064016109f0565b6000896009018960ff1681548110610ee157610ee1611e75565b90600052602060002001546402540be4008b6006015485610f029190611e8b565b610f0c9190611ea2565b610f169190611ea2565b90508084838b60ff1681518110610f2f57610f2f611e75565b6020026020010151610f419190611ccf565b610f4b9190611ce2565b8a600a018a60ff1681548110610f6357610f63611e75565b906000526020600020018190555086828960ff1681518110610f8757610f87611e75565b6020026020010151610f999190611ce2565b8a600a018960ff1681548110610fb157610fb1611e75565b600091825260209091200155801561101657808a600b018a60ff1681548110610fdc57610fdc611e75565b9060005260206000200154610ff19190611ccf565b8a600b018a60ff168154811061100957611009611e75565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b606061084684846000856112ce565b6000808460ff168660ff16036110db5760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c6600000000000000000060448201526064016109f0565b60008760090180548060200260200160405190810160405280929190818152602001828054801561112b57602002820191906000526020600020905b815481526020019060010190808311611117575b50505050509050600061113e85836113a9565b905080518860ff16108015611156575080518760ff16105b6111975760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064016109f0565b60006111a28a6114b4565b905060006111b083836114bf565b9050838960ff16815181106111c7576111c7611e75565b6020026020010151886111da9190611e8b565b838a60ff16815181106111ef576111ef611e75565b60200260200101516112019190611ce2565b838a60ff168151811061121657611216611e75565b6020026020010181815250506000611230838c868561166c565b9050838b60ff168151811061124757611247611e75565b602002602001015181600161125c9190611ccf565b6112669190611ce2565b96506402540be4008c600501548861127e9190611e8b565b6112889190611ea2565b9550848b60ff168151811061129f5761129f611e75565b602002602001015186886112b39190611ccf565b6112bd9190611ea2565b965050505050509550959350505050565b60608247101561132f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016109f0565b600080866001600160a01b0316858760405161134b9190611ec4565b60006040518083038185875af1925050503d8060008114611388576040519150601f19603f3d011682016040523d82523d6000602084013e61138d565b606091505b509150915061139e8783838761185b565b979650505050505050565b815181516060919081146113f65760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b60448201526064016109f0565b60008167ffffffffffffffff81111561141157611411611ada565b60405190808252806020026020018201604052801561143a578160200160208202803683370190505b50905060005b828110156114ab5784818151811061145a5761145a611e75565b602002602001015186828151811061147457611474611e75565b60200260200101516114869190611e8b565b82828151811061149857611498611e75565b6020908102919091010152600101611440565b50949350505050565b6000610531826118d4565b815160009081805b828110156114fe578581815181106114e1576114e1611e75565b6020026020010151826114f49190611ccf565b91506001016114c7565b508060000361151257600092505050610531565b600081816115208588611e8b565b905060005b61010081101561162d578260005b8781101561157e57878b828151811061154e5761154e611e75565b60200260200101516115609190611e8b565b61156a8684611e8b565b6115749190611ea2565b9150600101611533565b50839450808760016115909190611ccf565b61159a9190611e8b565b6064856115a78287611ce2565b6115b19190611e8b565b6115bb9190611ea2565b6115c59190611ccf565b846115d08984611e8b565b60646115dc8a88611e8b565b6115e69190611ea2565b6115f09190611ccf565b6115fa9190611e8b565b6116049190611ea2565b9350611610848661191d565b156116245783975050505050505050610531565b50600101611525565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b60448201526064016109f0565b815160009060ff851681116116b55760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b60448201526064016109f0565b826000806116c3848a611e8b565b905060005b84811015611745578860ff16811461173d578781815181106116ec576116ec611e75565b6020026020010151836116ff9190611ccf565b92508488828151811061171457611714611e75565b60200260200101516117269190611e8b565b6117308886611e8b565b61173a9190611ea2565b93505b6001016116c8565b506117508482611e8b565b606461175c8886611e8b565b6117669190611e8b565b6117709190611ea2565b9250600081611780606489611e8b565b61178a9190611ea2565b6117949084611ccf565b9050600087815b6101008110156118125781925089848360026117b79190611e8b565b6117c19190611ccf565b6117cb9190611ce2565b876117d68480611e8b565b6117e09190611ccf565b6117ea9190611ea2565b91506117f6828461191d565b1561180a5750965061084695505050505050565b60010161179b565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e7665726765000060448201526064016109f0565b606083156118ca5782516000036118c3576001600160a01b0385163b6118c35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109f0565b5081610846565b6108468383611934565b6004810154600282015460018301549091908083148015906118f557508142105b15611916576000846003015490508083038142038502428503840201049350505b5050919050565b6000600161192b848461195e565b11159392505050565b8151156119445781518083602001fd5b8060405162461bcd60e51b81526004016109f09190611ee0565b600081831115611979576119728284611ce2565b9050610531565b6119838383611ce2565b9392505050565b60006020828403121561199c57600080fd5b5035919050565b80356001600160a01b03811681146119ba57600080fd5b919050565b6000602082840312156119d157600080fd5b611983826119a3565b60006101a082840312156119ed57600080fd5b50919050565b600080600060608486031215611a0857600080fd5b833567ffffffffffffffff811115611a1f57600080fd5b611a2b868287016119da565b9660208601359650604090950135949350505050565b60008060008060808587031215611a5757600080fd5b843567ffffffffffffffff811115611a6e57600080fd5b611a7a878288016119da565b97602087013597506040870135966060013595509350505050565b634e487b7160e01b600052602160045260246000fd5b803563ffffffff811681146119ba57600080fd5b600060208284031215611ad157600080fd5b61198382611aab565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611b1457611b14611ada565b60405290565b8015158114611b2857600080fd5b50565b80356119ba81611b1a565b600082601f830112611b4757600080fd5b813567ffffffffffffffff80821115611b6257611b62611ada565b604051601f8301601f19908116603f01168101908282118183101715611b8a57611b8a611ada565b81604052838152866020858801011115611ba357600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006101a08236031215611bd657600080fd5b611bde611af0565b611be783611aab565b8152611bf560208401611aab565b6020820152611c0660408401611aab565b6040820152611c17606084016119a3565b6060820152611c28608084016119a3565b6080820152611c3960a08401611b2b565b60a082015260c083013567ffffffffffffffff811115611c5857600080fd5b611c6436828601611b36565b60c08301525060e083013560e0820152610100611c828185016119a3565b9082015261012083810135908201526101408084013590820152610160808401359082015261018092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b8082018082111561053157610531611cb9565b8181038181111561053157610531611cb9565b60005b83811015611d10578181015183820152602001611cf8565b50506000910152565b60008151808452611d31816020860160208601611cf5565b601f01601f19169290920160200192915050565b60208152611d5c60208201835163ffffffff169052565b60006020830151611d75604084018263ffffffff169052565b50604083015163ffffffff811660608401525060608301516001600160a01b03811660808401525060808301516001600160a01b03811660a08401525060a083015180151560c08401525060c08301516101a08060e0850152611ddc6101c0850183611d19565b60e086015161010086810191909152860151909250610120611e08818701836001600160a01b03169052565b8601516101408681019190915286015161016080870191909152860151610180808701919091529095015193019290925250919050565b600060208284031215611e5157600080fd5b5051919050565b600060208284031215611e6a57600080fd5b815161198381611b1a565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761053157610531611cb9565b600082611ebf57634e487b7160e01b600052601260045260246000fd5b500490565b60008251611ed6818460208701611cf5565b9190910192915050565b6020815260006119836020830184611d1956fea264697066735822122049a3c38a13f074502f74c37da2e47ab1f4c402517f4c7608bd4074807eca787164736f6c63430008110033";

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
