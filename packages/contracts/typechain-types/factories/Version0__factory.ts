/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Version0, Version0Interface } from "../Version0";

const _abi = [
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060808061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ffa1ad7414602d575b600080fd5b6034600081565b60405160ff909116815260200160405180910390f3fea2646970667358221220c72e514692f1116b079087419a6f5894e6b58716f75481f7a646068893e22f0e64736f6c634300080b0033";

type Version0ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Version0ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Version0__factory extends ContractFactory {
  constructor(...args: Version0ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Version0";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Version0> {
    return super.deploy(overrides || {}) as Promise<Version0>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Version0 {
    return super.attach(address) as Version0;
  }
  connect(signer: Signer): Version0__factory {
    return super.connect(signer) as Version0__factory;
  }
  static readonly contractName: "Version0";
  public readonly contractName: "Version0";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Version0Interface {
    return new utils.Interface(_abi) as Version0Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Version0 {
    return new Contract(address, _abi, signerOrProvider) as Version0;
  }
}
