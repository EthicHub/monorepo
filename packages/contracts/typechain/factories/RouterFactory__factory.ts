/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RouterFactory, RouterFactoryInterface } from "../RouterFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "routerSigner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "transactionManager",
        type: "address",
      },
    ],
    name: "RouterCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "routerSigner",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
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
        name: "routerSigner",
        type: "address",
      },
    ],
    name: "getRouterAddress",
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
        name: "_transactionManager",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "routerAddresses",
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
    name: "transactionManager",
    outputs: [
      {
        internalType: "contract ITransactionManager",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161299738038061299783398101604081905261002f91610167565b61003833610047565b61004181610097565b50610195565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146100f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b03811661015b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ed565b61016481610047565b50565b600060208284031215610178578081fd5b81516001600160a01b038116811461018e578182fd5b9392505050565b6127f3806101a46000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063715018a61161005b578063715018a61461010d5780637f629efc146101155780638da5cb5b14610128578063f2fde38b1461013957600080fd5b806319ab453c1461008d5780631f16a046146100a25780633b716452146100e7578063463a6176146100fa575b600080fd5b6100a061009b3660046107c6565b61014c565b005b6100cb6100b03660046107c6565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6002546100cb906001600160a01b031681565b6100cb6101083660046107c6565b610253565b6100a061027b565b6100cb6101233660046107e0565b6102b1565b6000546001600160a01b03166100cb565b6100a06101473660046107c6565b6104a2565b6000546001600160a01b0316331461017f5760405162461bcd60e51b815260040161017690610878565b60405180910390fd5b6001600160a01b0381166101c15760405162461bcd60e51b815260206004820152600960248201526811a9232fa49d181a1960b91b6044820152606401610176565b600280546001600160a01b0319166001600160a01b038316908117909155604080516303408e4760e41b81529051633408e47091600480820192602092909190829003018186803b15801561021557600080fd5b505afa158015610229573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024d9190610812565b60015550565b60006102756102618361053d565b61026961057c565b805190602001206105e4565b92915050565b6000546001600160a01b031633146102a55760405162461bcd60e51b815260040161017690610878565b6102af6000610643565b565b6002546000906001600160a01b03166102f95760405162461bcd60e51b815260206004820152600a60248201526911a9232fa1a91d181a1960b11b6044820152606401610176565b6001600160a01b03831661033c5760405162461bcd60e51b815260206004820152600a6024820152692352465f43523a30343160b01b6044820152606401610176565b6001600160a01b03821661037f5760405162461bcd60e51b815260206004820152600a6024820152692352465f43523a30303760b01b6044820152606401610176565b600061039c600061038f8661053d565b61039761057c565b610693565b6002546001546040516344bd376560e01b81526001600160a01b0392831660048201526024810191909152868216604482015285821660648201523360848201529192508216906344bd37659060a401600060405180830381600087803b15801561040657600080fd5b505af115801561041a573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526003602090815260409182902080548686166001600160a01b0319909116811790915560025483519182529181019390935286841683830152909216606082015290517fe8e811674d167b407a67a22f592a226ade5e34b608e7d56721f82422f3b981979181900360800190a19392505050565b6000546001600160a01b031633146104cc5760405162461bcd60e51b815260040161017690610878565b6001600160a01b0381166105315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610176565b61053a81610643565b50565b6040516bffffffffffffffffffffffff19606083901b166020820152600090603401604051602081830303815290604052805190602001209050919050565b60606000604051806020016105909061079d565b601f1982820381018352601f90910116604081815230602083015291925082910160408051601f19818403018152908290526105cf9291602001610863565b60405160208183030381529060405291505090565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff193060601b16602183015260358201859052605580830185905283518084039091018152607590920190925280519101206000905b9392505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080844710156106e65760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401610176565b82516107345760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401610176565b8383516020850187f590506001600160a01b0381166107955760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606401610176565b949350505050565b611f10806108ae83390190565b80356001600160a01b03811681146107c157600080fd5b919050565b6000602082840312156107d7578081fd5b61063c826107aa565b600080604083850312156107f2578081fd5b6107fb836107aa565b9150610809602084016107aa565b90509250929050565b600060208284031215610823578081fd5b5051919050565b60008151815b8181101561084a5760208185018101518683015201610830565b818111156108585782828601525b509290920192915050565b6000610795610872838661082a565b8461082a565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe60a06040523480156200001157600080fd5b5060405162001f1038038062001f108339810160408190526200003491620000a5565b6200003f3362000055565b60601b6001600160601b031916608052620000d5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000b7578081fd5b81516001600160a01b0381168114620000ce578182fd5b9392505050565b60805160601c611e15620000fb600039600081816101a901526103710152611e156000f3fe6080604052600436106100f35760003560e01c80636e2054a91161008a578063d4132a0b11610059578063d4132a0b1461029e578063d42030ed146102be578063f2fde38b146102de578063fc6bee13146102fe57600080fd5b80636e2054a91461022b578063715018a6146102585780638da5cb5b1461026d578063ce9765391461028b57600080fd5b80634ba51437116100c65780634ba51437146101975780634f64cfc5146101cb57806366d003ac146101eb5780636c19e7831461020b57600080fd5b80633411dbdc146100f85780633b716452146101355780633bbed4a01461015557806344bd376514610177575b600080fd5b34801561010457600080fd5b50600454610118906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561014157600080fd5b50600154610118906001600160a01b031681565b34801561016157600080fd5b506101756101703660046113c4565b610311565b005b34801561018357600080fd5b506101756101923660046113e0565b610366565b3480156101a357600080fd5b506101187f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d757600080fd5b506101756101e636600461167d565b610423565b3480156101f757600080fd5b50600354610118906001600160a01b031681565b34801561021757600080fd5b506101756102263660046113c4565b6104f4565b34801561023757600080fd5b5061024b6102463660046114f5565b610540565b60405161012c9190611bea565b34801561026457600080fd5b50610175610676565b34801561027957600080fd5b506000546001600160a01b0316610118565b61024b610299366004611537565b6106ac565b3480156102aa57600080fd5b506101756102b93660046116ac565b6107ed565b3480156102ca57600080fd5b5061024b6102d9366004611467565b610916565b3480156102ea57600080fd5b506101756102f93660046113c4565b6109d9565b61017561030c36600461167d565b610a74565b6000546001600160a01b031633146103445760405162461bcd60e51b815260040161033b90611b28565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103d15760405162461bcd60e51b815260206004820152601060248201526f4f4e4c595f5649415f464143544f525960801b604482015260640161033b565b600180546001600160a01b038088166001600160a01b031992831617909255600286905560048054868416908316179055600380549285169290911691909117905561041c816109d9565b5050505050565b6000546001600160a01b0316331461044d5760405162461bcd60e51b815260040161033b90611b28565b6000821161048b5760405162461bcd60e51b815260206004820152600b60248201526a11a921afa929231d18181960a91b604482015260640161033b565b6003546104a39082906001600160a01b031684610b93565b604080516001600160a01b03831681526020810184905233918101919091527f5d760a2d1cc0892ddaea1748093916f51d345b37724db0f69b41574a92adc06f906060015b60405180910390a15050565b6000546001600160a01b0316331461051e5760405162461bcd60e51b815260040161033b90611b28565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6105486112de565b6004546001600160a01b031633146105e957600061058a87878760405160200161057493929190611bb1565b6040516020818303038152906040528585610bbc565b6004549091506001600160a01b038083169116146105d65760405162461bcd60e51b815260206004820152600960248201526802352435f463a3034360bc1b604482015260640161033b565b84156105e7576105e7863387610b93565b505b6001546040516301362a3560e71b81526001600160a01b0390911690639b151a8090610619908990600401611b9e565b61020060405180830381600087803b15801561063457600080fd5b505af1158015610648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066c9190611579565b9695505050505050565b6000546001600160a01b031633146106a05760405162461bcd60e51b815260040161033b90611b28565b6106aa6000610c65565b565b6106b46112de565b6004546001600160a01b0316331461073f5760006106e087878760405160200161057493929190611bd7565b6004549091506001600160a01b0380831691161461072c5760405162461bcd60e51b815260206004820152600960248201526802352435f503a3034360bc1b604482015260640161033b565b841561073d5761073d863387610b93565b505b6001546001600160a01b031663d945937261077061076360a08a0160808b016113c4565b6001600160a01b03161590565b61077b57600061077d565b345b886040518363ffffffff1660e01b815260040161079a9190611bc4565b610200604051808303818588803b1580156107b457600080fd5b505af11580156107c8573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061066c9190611579565b6004546001600160a01b0316331461089f5760025460045460408051602081018890526001600160a01b038088169282019290925260608101939093521660808201526000906108509060a0016040516020818303038152906040528484610bbc565b6004549091506001600160a01b0380831691161461089d5760405162461bcd60e51b815260206004820152600a60248201526902352435f524c3a3034360b41b604482015260640161033b565b505b600154600354604051633cc6af3160e21b8152600481018790526001600160a01b038681166024830152918216604482015291169063f31abcc490606401600060405180830381600087803b1580156108f757600080fd5b505af115801561090b573d6000803e3d6000fd5b505050505b50505050565b61091e6112de565b6004546001600160a01b031633146109a957600061094a87878760405160200161057493929190611b70565b6004549091506001600160a01b038083169116146109965760405162461bcd60e51b815260206004820152600960248201526802352435f433a3034360bc1b604482015260640161033b565b84156109a7576109a7863387610b93565b505b600154604051635f48d15d60e11b81526001600160a01b039091169063be91a2ba90610619908990600401611b5d565b6000546001600160a01b03163314610a035760405162461bcd60e51b815260040161033b90611b28565b6001600160a01b038116610a685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161033b565b610a7181610c65565b50565b60008211610ab25760405162461bcd60e51b815260206004820152600b60248201526a11a921afa0a9231d18181960a91b604482015260640161033b565b6001600160a01b038116610b0257813414610afd5760405162461bcd60e51b815260206004820152600b60248201526a2352435f4152463a30303560a81b604482015260640161033b565b610b4a565b3415610b3e5760405162461bcd60e51b815260206004820152600b60248201526a11a921afa0a9231d18181b60a91b604482015260640161033b565b610b4a81333085610cb5565b604080516001600160a01b03831681526020810184905233918101919091527f1104e763408245681528382e9b9fcd4d8f1b4bce2e83f5ce2be8d1a5ec8323a0906060016104e8565b6001600160a01b03831615610bb257610bad838383610cc1565b505050565b610bad8282610ccc565b6000610c5b610c1f85805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cda92505050565b90505b9392505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61091084848484610d84565b610bad838383610def565b610cd68282610e1f565b5050565b6000815160411415610d0e5760208201516040830151606084015160001a610d0486828585610f38565b9350505050610d7e565b815160401415610d365760208201516040830151610d2d8583836110e1565b92505050610d7e565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161033b565b92915050565b6040516001600160a01b03808516602483015283166044820152606481018290526109109085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611101565b6040516001600160a01b038316602482015260448101829052610bad90849063a9059cbb60e01b90606401610db8565b80471015610e6f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161033b565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610ebc576040519150601f19603f3d011682016040523d82523d6000602084013e610ec1565b606091505b5050905080610bad5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161033b565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610fb55760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161033b565b8360ff16601b1480610fca57508360ff16601c145b6110215760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161033b565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015611075573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166110d85760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161033b565b95945050505050565b60006001600160ff1b03821660ff83901c601b0161066c86828785610f38565b6000611156826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111d39092919063ffffffff16565b805190915015610bad57808060200190518101906111749190611447565b610bad5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161033b565b6060610c5b848460008585843b61122c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161033b565b600080866001600160a01b031685876040516112489190611ad9565b60006040518083038185875af1925050503d8060008114611285576040519150601f19603f3d011682016040523d82523d6000602084013e61128a565b606091505b509150915061129a8282866112a5565b979650505050505050565b606083156112b4575081610c5e565b8251156112c45782518084602001fd5b8160405162461bcd60e51b815260040161033b9190611af5565b6040805161020081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081019190915290565b803561136d81611dca565b919050565b805161136d81611dca565b60008083601f84011261138e578182fd5b50813567ffffffffffffffff8111156113a5578182fd5b6020830191508360208285010111156113bd57600080fd5b9250929050565b6000602082840312156113d5578081fd5b8135610c5e81611dca565b600080600080600060a086880312156113f7578081fd5b853561140281611dca565b945060208601359350604086013561141981611dca565b9250606086013561142981611dca565b9150608086013561143981611dca565b809150509295509295909350565b600060208284031215611458578081fd5b81518015158114610c5e578182fd5b60008060008060006080868803121561147e578081fd5b853567ffffffffffffffff80821115611495578283fd5b90870190610240828a0312156114a9578283fd5b9095506020870135906114bb82611dca565b90945060408701359350606087013590808211156114d7578283fd5b506114e48882890161137d565b969995985093965092949392505050565b60008060008060006080868803121561150c578081fd5b853567ffffffffffffffff80821115611523578283fd5b90870190610280828a0312156114a9578283fd5b60008060008060006080868803121561154e578081fd5b853567ffffffffffffffff80821115611565578283fd5b90870190610260828a0312156114a9578283fd5b6000610200828403121561158b578081fd5b611593611d21565b61159c83611372565b81526115aa60208401611372565b60208201526115bb60408401611372565b60408201526115cc60608401611372565b60608201526115dd60808401611372565b60808201526115ee60a08401611372565b60a08201526115ff60c08401611372565b60c082015261161060e08401611372565b60e0820152610100611623818501611372565b9082015261012083810151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b6000806040838503121561168f578182fd5b8235915060208301356116a181611dca565b809150509250929050565b600080600080606085870312156116c1578182fd5b8435935060208501356116d381611dca565b9250604085013567ffffffffffffffff8111156116ee578283fd5b6116fa8782880161137d565b95989497509550505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600061024061173e84846119ad565b61020061174d81850185611d59565b838388015261175f8488018284611706565b935050505061022061177381850185611d59565b8684038388015261129a848284611706565b600061028061179484846119ad565b61020083810135908501526102206117ae81850185611d59565b83838801526117c08488018284611706565b93505050506102406117d481850185611d59565b868403838801526117e6848284611706565b935050505061026061177381850185611d59565b60006102606118198461180c85611362565b6001600160a01b03169052565b61182560208401611362565b6001600160a01b0316602085015261183f60408401611362565b6001600160a01b0316604085015261185960608401611362565b6001600160a01b0316606085015261187360808401611362565b6001600160a01b0316608085015261188d60a08401611362565b6001600160a01b031660a08501526118a760c08401611362565b6001600160a01b031660c08501526118c160e08401611362565b6001600160a01b031660e08501526101006118dd848201611362565b6001600160a01b03169085015261012083810135908501526101408084013590850152610160808401359085015261018080840135908501526101a080840135908501526101c080840135908501526101e061193b81850185611d59565b838388015261194d8488018284611706565b935050505061020061196181850185611d59565b86840383880152611973848284611706565b935050505061022061198781850185611d59565b86840383880152611999848284611706565b935050505061024061177381850185611d59565b6119ba8261180c83611362565b6119c660208201611362565b6001600160a01b031660208301526119e060408201611362565b6001600160a01b031660408301526119fa60608201611362565b6001600160a01b03166060830152611a1460808201611362565b6001600160a01b03166080830152611a2e60a08201611362565b6001600160a01b031660a0830152611a4860c08201611362565b6001600160a01b031660c0830152611a6260e08201611362565b6001600160a01b031660e0830152610100611a7e828201611362565b6001600160a01b03169083015261012081810135908301526101408082013590830152610160808201359083015261018080820135908301526101a080820135908301526101c080820135908301526101e090810135910152565b60008251611aeb818460208701611d9e565b9190910192915050565b6020815260008251806020840152611b14816040850160208701611d9e565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602081526000610c5e602083018461172f565b606081526000611b83606083018661172f565b6001600160a01b039490941660208301525060400152919050565b602081526000610c5e6020830184611785565b606081526000611b836060830186611785565b602081526000610c5e60208301846117fa565b606081526000611b8360608301866117fa565b81516001600160a01b0316815261020081016020830151611c1660208401826001600160a01b03169052565b506040830151611c3160408401826001600160a01b03169052565b506060830151611c4c60608401826001600160a01b03169052565b506080830151611c6760808401826001600160a01b03169052565b5060a0830151611c8260a08401826001600160a01b03169052565b5060c0830151611c9d60c08401826001600160a01b03169052565b5060e0830151611cb860e08401826001600160a01b03169052565b50610100838101516001600160a01b03169083015261012080840151908301526101408084015190830152610160808401519083015261018080840151908301526101a080840151908301526101c080840151908301526101e092830151929091019190915290565b604051610200810167ffffffffffffffff81118282101715611d5357634e487b7160e01b600052604160045260246000fd5b60405290565b6000808335601e19843603018112611d6f578283fd5b830160208101925035905067ffffffffffffffff811115611d8f57600080fd5b8036038313156113bd57600080fd5b60005b83811015611db9578181015183820152602001611da1565b838111156109105750506000910152565b6001600160a01b0381168114610a7157600080fdfea264697066735822122022455d969ab24b738845efb4fd186783ee1c9628804c8d2db53e16a51e37153364736f6c63430008040033a2646970667358221220d330a879947227cbdf2b15fe83664ab0284b3b5636b9d4d39504997fb0e86a1f64736f6c63430008040033";

export class RouterFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RouterFactory> {
    return super.deploy(_owner, overrides || {}) as Promise<RouterFactory>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): RouterFactory {
    return super.attach(address) as RouterFactory;
  }
  connect(signer: Signer): RouterFactory__factory {
    return super.connect(signer) as RouterFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterFactoryInterface {
    return new utils.Interface(_abi) as RouterFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterFactory {
    return new Contract(address, _abi, signerOrProvider) as RouterFactory;
  }
}
