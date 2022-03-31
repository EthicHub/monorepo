/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Executor,
  ExecutorInterface,
} from "../../../contracts/interpreters/Executor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
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
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetId",
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
        internalType: "bytes",
        name: "_properties",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_assetId",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_properties",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConnext",
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
    name: "origin",
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
    name: "originSender",
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
];

const _bytecode =
  "0x60e0604052601d60a081905262ffffff1960c090815262000024916000919062000067565b503480156200003257600080fd5b50604051620016053803806200160583398101604081905262000055916200010d565b6001600160a01b03166080526200017c565b82805462000075906200013f565b90600052602060002090601f016020900481019282620000995760008555620000e4565b82601f10620000b457805160ff1916838001178555620000e4565b82800160010185558215620000e4579182015b82811115620000e4578251825591602001919060010190620000c7565b50620000f2929150620000f6565b5090565b5b80821115620000f25760008155600101620000f7565b6000602082840312156200012057600080fd5b81516001600160a01b03811681146200013857600080fd5b9392505050565b600181811c908216806200015457607f821691505b602082108114156200017657634e487b7160e01b600052602260045260246000fd5b50919050565b6080516114676200019e6000396000818160d4015261010701526114676000f3fe60806040526004361061003f5760003560e01c80631e29b440146100445780632b59241f1461006e578063938b5f321461009b578063975740c6146100c5575b600080fd5b610057610052366004611103565b6100f8565b604051610065929190611270565b60405180910390f35b34801561007a57600080fd5b506100836102ef565b6040516001600160a01b039091168152602001610065565b3480156100a757600080fd5b506100b0610396565b60405163ffffffff9091168152602001610065565b3480156100d157600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610083565b60006060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101635760405162461bcd60e51b8152602060048201526007602482015266234f433a30323760c81b60448201526064015b60405180910390fd5b6001600160a01b038616158061017e5761017e87898b6103b4565b600060606001600160a01b038a163b6101c55760405162461bcd60e51b81526020600482015260096024820152680858dbdb9d1c9858dd60ba1b604482015260640161015a565b87516101d89060009060208b0190610ffc565b50896001600160a01b0316836101ef5760006101f1565b8b5b888860405161020192919061128b565b60006040518083038185875af1925050503d806000811461023e576040519150601f19603f3d011682016040523d82523d6000602084013e610243565b606091505b5060408051808201909152601d80825262ffffff1960209092019182529294509092506102739160009190610ffc565b5081158015610280575082155b1561029057610290898b8d61049f565b896001600160a01b03168c7f627b4985667a94d1a70c70277b9471eed68009d6f9c3ae5d25fa799fd3f0398d8b8e8c8c8c888a6040516102d6979695949392919061129b565b60405180910390a3909b909a5098505050505050505050565b6000806103856000805461030290611318565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90611318565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b50505050506105b2565b9050610390816105cc565b91505090565b6000806103a96000805461030290611318565b9050610390816105fd565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610405573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610429919061134d565b610433919061137c565b6040516001600160a01b03851660248201526044810182905290915061049990859063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261061f565b50505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156104ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610513919061134d565b9050818110156105775760405162461bcd60e51b815260206004820152602960248201527f5361666545524332303a2064656372656173656420616c6c6f77616e63652062604482015268656c6f77207a65726f60b81b606482015260840161015a565b6040516001600160a01b038416602482015282820360448201819052906105ab90869063095ea7b360e01b90606401610462565b5050505050565b60006105c66105c183836106f6565b61071a565b92915050565b60008160016105e3815b62ffffff19841690610733565b506105f562ffffff198516600561080c565b949350505050565b600081600161060b816105d6565b506105f562ffffff19851660016004610821565b6000610674826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108519092919063ffffffff16565b8051909150156106f157808060200190518101906106929190611394565b6106f15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161015a565b505050565b81516000906020840161071164ffffffffff85168284610860565b95945050505050565b60006105c6610728836108a4565b62ffffff19166108de565b600061073f8383610939565b61080557600061075e6107528560d81c90565b64ffffffffff1661095c565b91505060006107738464ffffffffff1661095c565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b815260040161015a91906113b6565b5090919050565b600061081a83836014610821565b9392505050565b600061082e8260206113c9565b6108399060086113ec565b60ff16610847858585610a0a565b901c949350505050565b60606105f58484600085610b63565b60008061086d838561137c565b905060405181111561087d575060005b8061088f5762ffffff1991505061081a565b5050606092831b9190911790911b1760181b90565b60006001600160601b03601883901c16601914156108d4576301000000600160d81b038216600160d81b176105c6565b62ffffff196105c6565b60006108e982610c94565b6109355760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015260640161015a565b5090565b60008164ffffffffff1661094d8460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff1611156109b157600061097b8260086113ec565b60ff1685901c905061098c81610cd2565b61ffff16841793508160ff166010146109a757601084901b93505b5060001901610962565b50600f5b60ff8160ff161015610a045760006109ce8260086113ec565b60ff1685901c90506109df81610cd2565b61ffff16831792508160ff166000146109fa57601083901b92505b50600019016109b5565b50915091565b600060ff8216610a1c5750600061081a565b610a2f8460181c6001600160601b031690565b6001600160601b0316610a4560ff84168561137c565b1115610aa957610a90610a618560781c6001600160601b031690565b6001600160601b0316610a7d8660181c6001600160601b031690565b6001600160601b0316858560ff16610d04565b60405162461bcd60e51b815260040161015a91906113b6565b60208260ff161115610b235760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161015a565b600882026000610b3c8660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b606082471015610bc45760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161015a565b6001600160a01b0385163b610c1b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161015a565b600080866001600160a01b03168587604051610c379190611415565b60006040518083038185875af1925050503d8060008114610c74576040519150601f19603f3d011682016040523d82523d6000602084013e610c79565b606091505b5091509150610c89828286610e2e565b979650505050505050565b6000610ca08260d81c90565b64ffffffffff1664ffffffffff1415610cbb57506000919050565b6000610cc683610e67565b60405110199392505050565b6000610ce460048360ff16901c610ea0565b60ff1661ffff919091161760081b610cfb82610ea0565b60ff1617919050565b60606000610d118661095c565b9150506000610d1f8661095c565b9150506000610d2d8661095c565b9150506000610d3b8661095c565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b60608315610e3d57508161081a565b825115610e4d5782518084602001fd5b8160405162461bcd60e51b815260040161015a91906113b6565b6000610e7c8260181c6001600160601b031690565b610e8f8360781c6001600160601b031690565b016001600160601b03169050919050565b600060f08083179060ff82161415610ebb5750603092915050565b8060ff1660f11415610ed05750603192915050565b8060ff1660f21415610ee55750603292915050565b8060ff1660f31415610efa5750603392915050565b8060ff1660f41415610f0f5750603492915050565b8060ff1660f51415610f245750603592915050565b8060ff1660f61415610f395750603692915050565b8060ff1660f71415610f4e5750603792915050565b8060ff1660f81415610f635750603892915050565b8060ff1660f91415610f785750603992915050565b8060ff1660fa1415610f8d5750606192915050565b8060ff1660fb1415610fa25750606292915050565b8060ff1660fc1415610fb75750606392915050565b8060ff1660fd1415610fcc5750606492915050565b8060ff1660fe1415610fe15750606592915050565b8060ff1660ff1415610ff65750606692915050565b50919050565b82805461100890611318565b90600052602060002090601f01602090048101928261102a5760008555611070565b82601f1061104357805160ff1916838001178555611070565b82800160010185558215611070579182015b82811115611070578251825591602001919060010190611055565b506109359291505b808211156109355760008155600101611078565b6001600160a01b03811681146110a157600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60008083601f8401126110cc57600080fd5b50813567ffffffffffffffff8111156110e457600080fd5b6020830191508360208285010111156110fc57600080fd5b9250929050565b600080600080600080600060c0888a03121561111e57600080fd5b873596506020880135955060408801356111378161108c565b945060608801356111478161108c565b9350608088013567ffffffffffffffff8082111561116457600080fd5b818a0191508a601f83011261117857600080fd5b81358181111561118a5761118a6110a4565b604051601f8201601f19908116603f011681019083821181831017156111b2576111b26110a4565b816040528281528d60208487010111156111cb57600080fd5b8260208601602083013760006020848301015280975050505060a08a01359150808211156111f857600080fd5b506112058a828b016110ba565b989b979a50959850939692959293505050565b60005b8381101561123357818101518382015260200161121b565b838111156104995750506000910152565b6000815180845261125c816020860160208601611218565b601f01601f19169290920160200192915050565b82151581526040602082015260006105f56040830184611244565b8183823760009101908152919050565b60018060a01b038816815286602082015260c0604082015260006112c260c0830188611244565b828103606084015285815285876020830137600060208783010152601f19601f8701168101905060208382030160808401526113016020820186611244565b91505082151560a083015298975050505050505050565b600181811c9082168061132c57607f821691505b60208210811415610ff657634e487b7160e01b600052602260045260246000fd5b60006020828403121561135f57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561138f5761138f611366565b500190565b6000602082840312156113a657600080fd5b8151801515811461081a57600080fd5b60208152600061081a6020830184611244565b600060ff821660ff8416808210156113e3576113e3611366565b90039392505050565b600060ff821660ff84168160ff048111821515161561140d5761140d611366565b029392505050565b60008251611427818460208701611218565b919091019291505056fea2646970667358221220cf99f1e51cad9594d66ba9ebc40248a29d4e0b4207c330460e78f292f23ffbec64736f6c634300080b0033";

type ExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Executor__factory extends ContractFactory {
  constructor(...args: ExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _connext: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Executor> {
    return super.deploy(_connext, overrides || {}) as Promise<Executor>;
  }
  override getDeployTransaction(
    _connext: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_connext, overrides || {});
  }
  override attach(address: string): Executor {
    return super.attach(address) as Executor;
  }
  override connect(signer: Signer): Executor__factory {
    return super.connect(signer) as Executor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExecutorInterface {
    return new utils.Interface(_abi) as ExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Executor {
    return new Contract(address, _abi, signerOrProvider) as Executor;
  }
}
