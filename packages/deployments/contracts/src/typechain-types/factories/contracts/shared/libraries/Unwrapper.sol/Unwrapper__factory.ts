/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Unwrapper,
  UnwrapperInterface,
} from "../../../../../contracts/shared/libraries/Unwrapper.sol/Unwrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "connext",
        type: "address",
      },
      {
        internalType: "address",
        name: "wrapper",
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
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
    ],
    name: "SendUnwrappedFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
    ],
    name: "TransferWrappedFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
    ],
    name: "UnwrappingFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
    ],
    name: "WrongAsset",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "CONNEXT",
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
    name: "WRAPPER",
    outputs: [
      {
        internalType: "contract IWrapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "getTargetWrapperContract",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "originSender",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "xReceive",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610aa5380380610aa583398101604081905261002f91610062565b6001600160a01b0390811660a05216608052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a0516109c46100e16000396000818160e70152818161011d0152818161023a01528181610423015261051301526000818160660152818160b4015261017901526109c46000f3fe60806040526004361061004b5760003560e01c806392f75cb214610054578063975740c6146100a5578063d6a3df39146100d8578063e1eb13c11461010b578063fd614f411461013f57005b3661005257005b005b34801561006057600080fd5b506100887f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100b157600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610088565b3480156100e457600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610088565b34801561011757600080fd5b506100887f000000000000000000000000000000000000000000000000000000000000000081565b34801561014b57600080fd5b5061015f61015a36600461078a565b61016c565b60405161009c91906108d4565b6060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101de5760405162461bcd60e51b815260206004820152601060248201526f1d5b9ddc985c0e880858dbdb9b995e1d60821b60448201526064015b60405180910390fd5b856000036102205760405162461bcd60e51b815260206004820152600f60248201526e1d5b9ddc985c0e8808585b5bdd5b9d608a1b60448201526064016101d5565b60008280602001905181019061023691906108ee565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b03161461040d5760405163a9059cbb60e01b81526001600160a01b0382811660048301526024820189905287169063a9059cbb906044016020604051808303816000875af19250505080156102dc575060408051601f3d908101601f191682019092526102d99181019061090b565b60015b610351573d80801561030a576040519150601f19603f3d011682016040523d82523d6000602084013e61030f565b606091505b507f3f26f0f41cc8b2b1e266f9a0d4693924a154cd6735901bc95d48892b989804aa8288836040516103439392919061092d565b60405180910390a1506103f7565b806103f557604080516001600160a01b0384811682528916602082015260608183018190526038908201527f77726f6e67206173736574207573656420666f7220756e7772617020616e642060808201527f66616c6c6261636b207472616e73666572206661696c6564000000000000000060a082015290517f3f26f0f41cc8b2b1e266f9a0d4693924a154cd6735901bc95d48892b989804aa9181900360c00190a15b505b5050604080516020810190915260008152610752565b604051632e1a7d4d60e01b8152600481018890527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561046f57600080fd5b505af1925050508015610480575060015b61067a573d8080156104ae576040519150601f19603f3d011682016040523d82523d6000602084013e6104b3565b606091505b507fe5d470ef5b587451b1441a652887c466ffe31d76371ce2f0e118181f34271e7582826040516104e5929190610962565b60405180910390a160405163a9059cbb60e01b81526001600160a01b038381166004830152602482018a90527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1925050508015610578575060408051601f3d908101601f191682019092526105759181019061090b565b60015b6105eb573d8080156105a6576040519150601f19603f3d011682016040523d82523d6000602084013e6105ab565b606091505b507fbb3b2abce55b081f5913cdcc1db3095173f4fb319b3807163db70ae98ad7782b83826040516105dd929190610962565b60405180910390a150610674565b8061067257604080516001600160a01b0385168152602081018290526029818301527f66616c6c6261636b207472616e73666572206f66207772617070656420617373606082015268195d0819985a5b195960ba1b608082015290517fbb3b2abce55b081f5913cdcc1db3095173f4fb319b3807163db70ae98ad7782b9181900360a00190a15b505b50610740565b6040516000906001600160a01b0383169089156108fc02908a9084818181858888f1935050505090508061073e57604080516001600160a01b0384168152602081018290528082018290527f756e7772617020737563636565646564206275742073656e64696e6720756e7760608201527f72617070656420617373657420746f20726563697069656e74206661696c6564608082015290517fd3f9fbf8b8ad9fded0185c6f952eb2cdb006133170df8bc5046a856b01911dfd9181900360a00190a15b505b50506040805160208101909152600081525b9695505050505050565b6001600160a01b038116811461077157600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60008060008060008060c087890312156107a357600080fd5b863595506020870135945060408701356107bc8161075c565b935060608701356107cc8161075c565b9250608087013563ffffffff811681146107e557600080fd5b915060a087013567ffffffffffffffff8082111561080257600080fd5b818901915089601f83011261081657600080fd5b81358181111561082857610828610774565b604051601f8201601f19908116603f0116810190838211818310171561085057610850610774565b816040528281528c602084870101111561086957600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b6000815180845260005b818110156108b457602081850181015186830182015201610898565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006108e7602083018461088e565b9392505050565b60006020828403121561090057600080fd5b81516108e78161075c565b60006020828403121561091d57600080fd5b815180151581146108e757600080fd5b6001600160a01b038481168252831660208201526060604082018190526000906109599083018461088e565b95945050505050565b6001600160a01b03831681526040602082018190526000906109869083018461088e565b94935050505056fea26469706673582212205ae82f06b2ba5ab6ca6b7e9150e62186fed7c92750fba47d7d4f0a64f321b49e64736f6c63430008110033";

type UnwrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnwrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Unwrapper__factory extends ContractFactory {
  constructor(...args: UnwrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    connext: PromiseOrValue<string>,
    wrapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Unwrapper> {
    return super.deploy(
      connext,
      wrapper,
      overrides || {}
    ) as Promise<Unwrapper>;
  }
  override getDeployTransaction(
    connext: PromiseOrValue<string>,
    wrapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(connext, wrapper, overrides || {});
  }
  override attach(address: string): Unwrapper {
    return super.attach(address) as Unwrapper;
  }
  override connect(signer: Signer): Unwrapper__factory {
    return super.connect(signer) as Unwrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnwrapperInterface {
    return new utils.Interface(_abi) as UnwrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Unwrapper {
    return new Contract(address, _abi, signerOrProvider) as Unwrapper;
  }
}
