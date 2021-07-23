/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "count",
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
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "incrementAndSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setShouldRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shouldRevert",
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
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b506000805460ff191690556107758061002f6000396000f3fe60806040526004361061004a5760003560e01c806306661abd1461004f5780636813d78714610078578063d09de08a146100a8578063d2eee78a146100bd578063d3072d82146100d0575b600080fd5b34801561005b57600080fd5b5061006560015481565b6040519081526020015b60405180910390f35b34801561008457600080fd5b506100a6610093366004610657565b6000805460ff1916911515919091179055565b005b3480156100b457600080fd5b506100a66100fa565b6100a66100cb36600461061c565b61016b565b3480156100dc57600080fd5b506000546100ea9060ff1681565b604051901515815260200161006f565b60005460ff16156101525760405162461bcd60e51b815260206004820152601f60248201527f696e6372656d656e743a2073686f756c6452657665727420697320747275650060448201526064015b60405180910390fd5b600180600082825461016491906106de565b9091555050565b6001600160a01b0383166101d9578034146101d45760405162461bcd60e51b8152602060048201526024808201527f696e6372656d656e74416e6453656e643a20494e56414c49445f4554485f414d60448201526313d5539560e21b6064820152608401610149565b610233565b34156102275760405162461bcd60e51b815260206004820152601e60248201527f696e6372656d656e74416e6453656e643a204554485f574954485f45524300006044820152606401610149565b6102338333308461024b565b61023b6100fa565b61024683838361025d565b505050565b61025784848484610281565b50505050565b6001600160a01b03831615610277576102468383836102ec565b61024682826102f7565b6040516001600160a01b03808516602483015283166044820152606481018290526102579085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610384565b610246838383610456565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610344576040519150601f19603f3d011682016040523d82523d6000602084013e610349565b606091505b50509050806102465760405162461bcd60e51b8152602060048201526007602482015266046a88a746064760cb1b6044820152606401610149565b60006103d9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104869092919063ffffffff16565b80519091501561024657808060200190518101906103f79190610673565b6102465760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610149565b6040516001600160a01b03831660248201526044810182905261024690849063a9059cbb60e01b906064016102b5565b6060610495848460008561049f565b90505b9392505050565b6060824710156105005760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610149565b843b61054e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610149565b600080866001600160a01b0316858760405161056a919061068f565b60006040518083038185875af1925050503d80600081146105a7576040519150601f19603f3d011682016040523d82523d6000602084013e6105ac565b606091505b50915091506105bc8282866105c7565b979650505050505050565b606083156105d6575081610498565b8251156105e65782518084602001fd5b8160405162461bcd60e51b815260040161014991906106ab565b80356001600160a01b038116811461061757600080fd5b919050565b600080600060608486031215610630578283fd5b61063984610600565b925061064760208501610600565b9150604084013590509250925092565b600060208284031215610668578081fd5b81356104988161072e565b600060208284031215610684578081fd5b81516104988161072e565b600082516106a1818460208701610702565b9190910192915050565b60208152600082518060208401526106ca816040850160208701610702565b601f01601f19169190910160400192915050565b600082198211156106fd57634e487b7160e01b81526011600452602481fd5b500190565b60005b8381101561071d578181015183820152602001610705565b838111156102575750506000910152565b801515811461073c57600080fd5b5056fea2646970667358221220f718599aee767f3082dea10d5c7bba3c8ec4c3e9463af57194580acd454270ae64736f6c63430008040033";

export class Counter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}
