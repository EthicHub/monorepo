/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TokenRegistry,
  TokenRegistryInterface,
} from "../../../../../contracts/core/connext/helpers/TokenRegistry";

const _abi = [
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "representation",
        type: "address",
      },
    ],
    name: "TokenDeployed",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "canonicalToRepresentation",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_custom",
        type: "address",
      },
    ],
    name: "enrollCustom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "ensureLocalToken",
    outputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_representation",
        type: "address",
      },
    ],
    name: "getCanonicalTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "getLocalAddress",
    outputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_id",
        type: "address",
      },
    ],
    name: "getLocalAddress",
    outputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "getRepresentationAddress",
    outputs: [
      {
        internalType: "address",
        name: "_representation",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "getTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenBeacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "isLocalOrigin",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "mustHaveLocalToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_oldRepr",
        type: "address",
      },
    ],
    name: "oldReprToCurrentRepr",
    outputs: [
      {
        internalType: "address",
        name: "_currentRepr",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "representationToCanonical",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBeacon",
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
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract IConnectorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c98806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620001755760003560e01c80638da5cb5b11620000d3578063ccf5a77c1162000086578063ccf5a77c14620003a1578063d1851c9214620003b5578063d232c22014620003c7578063d82d053114620003e1578063dc9685a714620003f8578063f1537686146200040f57600080fd5b80638da5cb5b14620002da578063b1f8100d14620002f2578063b869d89a1462000309578063b9730eaf1462000320578063c5b350df146200036f578063c86415cb146200037957600080fd5b80633cf52ffb116200012c5780633cf52ffb146200026e57806341bdc8b51462000281578063485cc9551462000298578063589b3c6414620002af5780636a42b8f814620002c6578063715018a614620002d057600080fd5b806303e418c2146200017a5780630e71e25114620001ce5780631ecf6f9f14620001fe57806328b1aea0146200022a5780632c3da59c14620002435780633339df96146200025a575b600080fd5b620001ad6200018b366004620012e7565b6067602052600090815260409020805460019091015463ffffffff9091169082565b6040805163ffffffff90931683526020830191909152015b60405180910390f35b620001e5620001df366004620012e7565b62000426565b6040516001600160a01b039091168152602001620001c5565b620001e56200020f36600462001305565b6068602052600090815260409020546001600160a01b031681565b620002416200023b36600462001332565b620004b9565b005b620001e56200025436600462001375565b6200050a565b603454620001e5906001600160a01b031681565b6002545b604051908152602001620001c5565b6200024162000292366004620012e7565b62000565565b62000241620002a9366004620013a4565b620005b9565b620001e5620002c036600462001375565b620006aa565b62093a8062000272565b62000241620006dd565b6000546201000090046001600160a01b0316620001e5565b6200024162000303366004620012e7565b620007aa565b620001e56200031a36600462001375565b62000864565b620001ad62000331366004620012e7565b6001600160a01b03166000908152606760209081526040918290208251808401909352805463ffffffff168084526001909101549290910182905291565b62000241620008b1565b620003906200038a366004620012e7565b62000910565b6040519015158152602001620001c5565b606654620001e5906001600160a01b031681565b6001546001600160a01b0316620001e5565b620003906000546201000090046001600160a01b03161590565b620001e5620003f2366004620013dc565b62000944565b620001e56200040936600462001375565b6200095b565b620001ad62000420366004620012e7565b620009a0565b6001600160a01b03811660009081526067602090815260408083208151808301909252805463ffffffff16808352600190910154928201929092529082036200049e5760405162461bcd60e51b815260206004820152600560248201526410b932b83960d91b60448201526064015b60405180910390fd5b620004b2816000015182602001516200095b565b9392505050565b6000546201000090046001600160a01b03163314620004eb576040516311a8a1bb60e31b815260040160405180910390fd5b620004f883838362000a30565b6200050583838362000a67565b505050565b600080620005198484620006aa565b90506001600160a01b0381166200055c5760405162461bcd60e51b815260206004820152600660248201526510ba37b5b2b760d11b604482015260640162000495565b90505b92915050565b6000546201000090046001600160a01b0316331462000597576040516311a8a1bb60e31b815260040160405180910390fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff1615808015620005da5750600054600160ff909116105b80620005f65750303b158015620005f6575060005460ff166001145b620006155760405162461bcd60e51b81526004016200049590620013fd565b6000805460ff19166001179055801562000639576000805461ff0019166101001790555b606680546001600160a01b0319166001600160a01b0385161790556200065f8262000abd565b801562000505576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6000620006b662000bad565b63ffffffff168363ffffffff1603620006d15750806200055f565b6200055c83836200095b565b6000546201000090046001600160a01b031633146200070f576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036200073357604051630e4b303f60e21b815260040160405180910390fd5b62093a806002544262000747919062001461565b1162000766576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161562000791576040516323295ef960e01b815260040160405180910390fd5b600154620007a8906001600160a01b031662000bbe565b565b6000546201000090046001600160a01b03163314620007dc576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156200080257506001600160a01b03811615155b1562000821576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083166201000090920416036200085657604051634a2fb73f60e11b815260040160405180910390fd5b620008618162000c2e565b50565b600063ffffffff831615801562000879575081155b1562000888575060006200055f565b620008948383620006aa565b90506001600160a01b0381166200055f576200055c838362000c7c565b6001546001600160a01b03163314620008dd576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442620008f1919062001461565b11620007915760405163d39c12bb60e01b815260040160405180910390fd5b6001600160a01b03811660009081526067602052604081205463ffffffff16156200093d57506000919050565b503b151590565b60006200055c836001600160a01b038416620006aa565b6000806200096a848462000e8d565b905060006200097f62ffffff19831662000ecd565b6000908152606860205260409020546001600160a01b031695945050505050565b6000806001600160a01b038316620009bd57506000905080915091565b6001600160a01b03831660009081526067602090815260408083208151808301909252805463ffffffff1680835260019091015492820192909252910362000a1d5762000a0962000bad565b92506001600160a01b038416915062000a2a565b8051602082015190935091505b50915091565b6001600160a01b03166000908152606760205260409020805463ffffffff191663ffffffff93909316929092178255600190910155565b600062000a75848462000e8d565b9050600062000a8a62ffffff19831662000ecd565b600090815260686020526040902080546001600160a01b0319166001600160a01b03949094169390931790925550505050565b600054610100900460ff161580801562000ade5750600054600160ff909116105b8062000afa5750303b15801562000afa575060005460ff166001145b62000b195760405162461bcd60e51b81526004016200049590620013fd565b6000805460ff19166001179055801562000b3d576000805461ff0019166101001790555b603480546001600160a01b0319166001600160a01b03841617905562000b6262000f18565b801562000ba9576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b600062000bb962000f4c565b905090565b600080546001600160a01b038381166201000081810262010000600160b01b031985161785556002859055600180546001600160a01b031916905560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6066546040516000916001600160a01b03169062000c9a90620012bc565b6001600160a01b039091168152604060208201819052600090820152606001604051809103906000f08015801562000cd6573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562000d1557600080fd5b505af115801562000d2a573d6000803e3d6000fd5b5050505060008062000d3d858562000fbd565b6040516319524d7d60e21b815291935091506001600160a01b0384169063654935f49062000d759085908590601290600401620014cb565b600060405180830381600087803b15801562000d9057600080fd5b505af115801562000da5573d6000803e3d6000fd5b50505050826001600160a01b031663f2fde38b62000dd26000546001600160a01b03620100009091041690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801562000e1457600080fd5b505af115801562000e29573d6000803e3d6000fd5b5050505062000e3a85858562000a67565b62000e4785858562000a30565b826001600160a01b0316848663ffffffff167f84d5e3618bf276f3d29a931646fdd996b398a3efa3cf6bceefc1fe7f0304059f60405160405180910390a4505092915050565b60006200055c60016040516001600160e01b031960e087901b1660208201526024810185905260440160408051601f198184030181529190529062001058565b60008062000ee48360781c6001600160601b031690565b6001600160601b03169050600062000f058460181c6001600160601b031690565b6001600160601b03169091209392505050565b600054610100900460ff1662000f425760405162461bcd60e51b8152600401620004959062001508565b620007a86200107e565b6034546040805163234d8e3d60e21b815290516000926001600160a01b031691638d3638f49160048083019260209291908290030181865afa15801562000f97573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bb9919062001553565b606080600062000fcd84620010b3565b91505062000fdb8562001167565b816040516020016200101d92919060b09290921b6001600160b01b0319168252601760f91b600a83015260e01b6001600160e01b031916600b820152600f0190565b60408051808303601f19018152600f808452838301909252945060208201818036833701905050915060208301516020830152509250929050565b8151600090602084016200107564ffffffffff85168284620011e8565b95945050505050565b600054610100900460ff16620010a85760405162461bcd60e51b8152600401620004959062001508565b620007a83362000bbe565b600080601f5b600f8160ff1611156200111a576000620010d582600862001573565b60ff1685901c9050620010e88162001234565b61ffff16841793508160ff166010146200110457601084901b93505b50620011126001826200159f565b9050620010b9565b50600f5b60ff8160ff16101562000a2a5760ff600882021684901c620011408162001234565b61ffff16831792508160ff166000146200115c57601083901b92505b50600019016200111e565b60006030815b600a8160ff161015620011e1576200118781600862001573565b60ff168262001198600a87620015db565b63ffffffff16620011aa919062001601565b69ffffffffffffffffffff16901b9290921791620011ca600a8562001632565b9350620011d960018262001658565b90506200116d565b5050919050565b600080620011f7838562001680565b905060405181111562001208575060005b806000036200121f5762ffffff19915050620004b2565b5050606092831b9190911790911b1760181b90565b60006200124860048360ff16901c6200126a565b60ff1661ffff919091161760081b62001261826200126a565b60ff1617919050565b6040805180820190915260108082526f181899199a1a9b1b9c1cb0b131b232b360811b6020830152600091600f84169182908110620012ad57620012ad6200169b565b016020015160f81c9392505050565b6105b180620016b283390190565b80356001600160a01b0381168114620012e257600080fd5b919050565b600060208284031215620012fa57600080fd5b6200055c82620012ca565b6000602082840312156200131857600080fd5b5035919050565b63ffffffff811681146200086157600080fd5b6000806000606084860312156200134857600080fd5b833562001355816200131f565b9250602084013591506200136c60408501620012ca565b90509250925092565b600080604083850312156200138957600080fd5b823562001396816200131f565b946020939093013593505050565b60008060408385031215620013b857600080fd5b620013c383620012ca565b9150620013d360208401620012ca565b90509250929050565b60008060408385031215620013f057600080fd5b8235620013c3816200131f565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000828210156200147657620014766200144b565b500390565b6000815180845260005b81811015620014a35760208185018101518683018201520162001485565b81811115620014b6576000602083870101525b50601f01601f19169290920160200192915050565b606081526000620014e060608301866200147b565b8281036020840152620014f481866200147b565b91505060ff83166040830152949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000602082840312156200156657600080fd5b81516200055c816200131f565b600060ff821660ff84168160ff04811182151516156200159757620015976200144b565b029392505050565b600060ff821660ff841680821015620015bc57620015bc6200144b565b90039392505050565b634e487b7160e01b600052601260045260246000fd5b600063ffffffff80841680620015f557620015f5620015c5565b92169190910692915050565b600069ffffffffffffffffffff8083168185168083038211156200162957620016296200144b565b01949350505050565b600063ffffffff808416806200164c576200164c620015c5565b92169190910492915050565b600060ff821660ff84168060ff038211156200167857620016786200144b565b019392505050565b600082198211156200169657620016966200144b565b500190565b634e487b7160e01b600052603260045260246000fdfe60a06040526040516105b13803806105b18339810160408190526100229161027e565b6100358261010b60201b6100291760201c565b6100795760405162461bcd60e51b815260206004820152601060248201526f18995858dbdb880858dbdb9d1c9858dd60821b60448201526064015b60405180910390fd5b6001600160a01b03821660805260006100918361011a565b90506100a68161010b60201b6100291760201c565b6100f25760405162461bcd60e51b815260206004820152601f60248201527f626561636f6e20696d706c656d656e746174696f6e2021636f6e7472616374006044820152606401610070565b8151156101035761010381836101ae565b5050506103b3565b6001600160a01b03163b151590565b6000806000836001600160a01b0316604051600060405180830381855afa9150503d8060008114610167576040519150601f19603f3d011682016040523d82523d6000602084013e61016c565b606091505b50915091508181906101915760405162461bcd60e51b81526004016100709190610340565b50808060200190518101906101a69190610373565b949350505050565b6000826001600160a01b0316826040516101c89190610397565b600060405180830381855af49150503d8060008114610203576040519150601f19603f3d011682016040523d82523d6000602084013e610208565b606091505b505090508061021b573d6000803e3d6000fd5b505050565b6001600160a01b038116811461023557600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610269578181015183820152602001610251565b83811115610278576000848401525b50505050565b6000806040838503121561029157600080fd5b825161029c81610220565b60208401519092506001600160401b03808211156102b957600080fd5b818501915085601f8301126102cd57600080fd5b8151818111156102df576102df610238565b604051601f8201601f19908116603f0116810190838211818310171561030757610307610238565b8160405282815288602084870101111561032057600080fd5b61033183602083016020880161024e565b80955050505050509250929050565b602081526000825180602084015261035f81604085016020870161024e565b601f01601f19169190910160400192915050565b60006020828403121561038557600080fd5b815161039081610220565b9392505050565b600082516103a981846020870161024e565b9190910192915050565b6080516101e46103cd6000396000603f01526101e46000f3fe60806040523661001357610011610017565b005b6100115b610027610022610038565b610068565b565b6001600160a01b03163b151590565b60006100637f000000000000000000000000000000000000000000000000000000000000000061008c565b905090565b3660008037600080366000845af43d6000803e808015610087573d6000f35b3d6000fd5b6000806000836001600160a01b0316604051600060405180830381855afa9150503d80600081146100d9576040519150601f19603f3d011682016040523d82523d6000602084013e6100de565b606091505b509150915081819061010c5760405162461bcd60e51b81526004016101039190610129565b60405180910390fd5b5080806020019051810190610121919061017e565b949350505050565b600060208083528351808285015260005b818110156101565785810183015185820160400152820161013a565b81811115610168576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561019057600080fd5b81516001600160a01b03811681146101a757600080fd5b939250505056fea264697066735822122042436bafcc10b7d3b87b009f58b439277eb8f5d3a0eca073976612d5e2f4901264736f6c634300080f0033a264697066735822122034c3482c363a2bfcba7f56eea22aa922fd66aef83c6984ddb07a9e599cd5e27764736f6c634300080f0033";

type TokenRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenRegistry__factory extends ContractFactory {
  constructor(...args: TokenRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenRegistry> {
    return super.deploy(overrides || {}) as Promise<TokenRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenRegistry {
    return super.attach(address) as TokenRegistry;
  }
  override connect(signer: Signer): TokenRegistry__factory {
    return super.connect(signer) as TokenRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenRegistryInterface {
    return new utils.Interface(_abi) as TokenRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenRegistry {
    return new Contract(address, _abi, signerOrProvider) as TokenRegistry;
  }
}
