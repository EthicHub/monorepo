/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  GnosisHubConnector,
  GnosisHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/gnosis/GnosisHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "MirrorGasUpdated",
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
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
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
    inputs: [],
    name: "AMB",
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
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
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
    name: "acceptProposedOwner",
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
    name: "mirrorConnector",
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
    name: "mirrorGas",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    name: "setMirrorGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200130b3803806200130b8339810160408190526200003591620002d8565b8585858585858585858585856200004c336200019d565b8563ffffffff16600003620000975760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038316620000e35760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008e565b63ffffffff8087166080526001600160a01b0380861660a05284811660c05290861660e0528216156200011b576200011b82620001fc565b80156200012d576200012d8162000265565b604080516001600160a01b0386811682528581166020830152841681830152905163ffffffff87811692908916917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a350505050505050505050505050505050505062000350565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b805163ffffffff81168114620002bb57600080fd5b919050565b80516001600160a01b0381168114620002bb57600080fd5b60008060008060008060c08789031215620002f257600080fd5b620002fd87620002a6565b95506200030d60208801620002a6565b94506200031d60408801620002c0565b93506200032d60608801620002c0565b92506200033d60808801620002c0565b915060a087015190509295509295509295565b60805160a05160c05160e051610f49620003c26000396000818161012b01526108bc0152600081816101cd015281816104d301526108950152600081816102ba015281816102fa015281816106cd0152818161079001528181610a970152610bc0015260006101930152610f496000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806382646a58116100ad578063cf796c7511610071578063cf796c751461027d578063d1851c9214610286578063d232c22014610297578063d69f9d61146102b5578063db1b7659146102dc57600080fd5b806382646a581461022b5780638da5cb5b1461023e578063b1f8100d1461024f578063c5b350df14610262578063cc3942831461026a57600080fd5b80635bd11efc116100f45780635bd11efc146101b55780635f61e3ec146101c85780636a42b8f8146102075780636eb67a5114610210578063715018a61461022357600080fd5b806314168416146101265780633cf52ffb146101675780634ff746f61461017957806352a9674b1461018e575b600080fd5b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b6002545b60405190815260200161015e565b61018c610187366004610cb7565b6102ef565b005b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b61018c6101c3366004610d7d565b61039e565b6101ef7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161015e565b62093a8061016b565b61018c61021e366004610da1565b6103d5565b61018c610409565b61018c610239366004610cb7565b6104c8565b6000546001600160a01b03166101ef565b61018c61025d366004610d7d565b610569565b61018c61060e565b6003546101ef906001600160a01b031681565b61016b60045481565b6001546001600160a01b03166101ef565b6000546001600160a01b0316155b604051901515815260200161015e565b6101ef7f000000000000000000000000000000000000000000000000000000000000000081565b6102a56102ea366004610d7d565b610669565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103595760405162461bcd60e51b81526004016103509060208082526004908201526310a0a6a160e11b604082015260600190565b60405180910390fd5b6103628161067a565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610393929190610e07565b60405180910390a150565b6000546001600160a01b031633146103c9576040516311a8a1bb60e31b815260040160405180910390fd5b6103d281610943565b50565b6000546001600160a01b03163314610400576040516311a8a1bb60e31b815260040160405180910390fd5b6103d2816109ac565b6000546001600160a01b03163314610434576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361045757604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426104699190610e31565b11610487576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156104b1576040516323295ef960e01b815260040160405180910390fd5b6001546104c6906001600160a01b03166109ed565b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461052f5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b6044820152606401610350565b61053881610a4c565b7fa69577a1e55dd0712044e7078b408c39fadff8b3e1b334b202ff17e70eda9fdc8133604051610393929190610e07565b6000546001600160a01b03163314610594576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156105b957506001600160a01b03811615155b156105d7576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361060557604051634a2fb73f60e11b815260040160405180910390fd5b6103d281610b6b565b6001546001600160a01b03163314610639576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261064b9190610e31565b116104b15760405163d39c12bb60e01b815260040160405180910390fd5b600061067482610bb9565b92915050565b60035461068f906001600160a01b0316610bb9565b6106ca5760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b6044820152606401610350565b467f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b07506116040518163ffffffff1660e01b8152600401602060405180830381865afa158015610729573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074d9190610e56565b1461078e5760405162461bcd60e51b815260206004820152601160248201527010b232b9ba34b730ba34b7b721b430b4b760791b6044820152606401610350565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631544298e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108109190610e56565b6064146108505760405162461bcd60e51b815260206004820152600e60248201526d085cdbdd5c98d950da185a5b925960921b6044820152606401610350565b805160201461088b5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610350565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166378ffd0a17f00000000000000000000000000000000000000000000000000000000000000006108e484610e6f565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b15801561092857600080fd5b505af115801561093c573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051602014610a875760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610350565b6003546040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169263dc8601b3929116906327fba37b60e11b90610adb9030908790602401610e96565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031994851617905260048054915160e087901b9094168452610b24949301610ec2565b6020604051808303816000875af1158015610b43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b679190610e56565b5050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006106747f0000000000000000000000000000000000000000000000000000000000000000836000336001600160a01b03841614610c245760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b6044820152606401610350565b816001600160a01b0316836001600160a01b031663d67bdd256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c909190610ef6565b6001600160a01b0316149392505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610cc957600080fd5b813567ffffffffffffffff80821115610ce157600080fd5b818401915084601f830112610cf557600080fd5b813581811115610d0757610d07610ca1565b604051601f8201601f19908116603f01168101908382118183101715610d2f57610d2f610ca1565b81604052828152876020848701011115610d4857600080fd5b826020860160208301376000928101602001929092525095945050505050565b6001600160a01b03811681146103d257600080fd5b600060208284031215610d8f57600080fd5b8135610d9a81610d68565b9392505050565b600060208284031215610db357600080fd5b5035919050565b6000815180845260005b81811015610de057602081850181015186830182015201610dc4565b81811115610df2576000602083870101525b50601f01601f19169290920160200192915050565b604081526000610e1a6040830185610dba565b905060018060a01b03831660208301529392505050565b600082821015610e5157634e487b7160e01b600052601160045260246000fd5b500390565b600060208284031215610e6857600080fd5b5051919050565b80516020808301519190811015610e90576000198160200360031b1b821691505b50919050565b6001600160a01b0383168152604060208201819052600090610eba90830184610dba565b949350505050565b6001600160a01b0384168152606060208201819052600090610ee690830185610dba565b9050826040830152949350505050565b600060208284031215610f0857600080fd5b8151610d9a81610d6856fea2646970667358221220d26dfa75abd025015e80317d084697fa607393ef5340845ae8dc42e6202db60664736f6c634300080f0033";

type GnosisHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisHubConnector__factory extends ContractFactory {
  constructor(...args: GnosisHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      overrides || {}
    ) as Promise<GnosisHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      overrides || {}
    );
  }
  override attach(address: string): GnosisHubConnector {
    return super.attach(address) as GnosisHubConnector;
  }
  override connect(signer: Signer): GnosisHubConnector__factory {
    return super.connect(signer) as GnosisHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisHubConnectorInterface {
    return new utils.Interface(_abi) as GnosisHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisHubConnector {
    return new Contract(address, _abi, signerOrProvider) as GnosisHubConnector;
  }
}
