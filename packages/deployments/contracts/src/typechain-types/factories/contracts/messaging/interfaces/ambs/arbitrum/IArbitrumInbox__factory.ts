/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IArbitrumInbox,
  IArbitrumInboxInterface,
} from "../../../../../../contracts/messaging/interfaces/ambs/arbitrum/IArbitrumInbox";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "destAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "arbTxCallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "submissionRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "valueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPriceBid",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createRetryableTicket",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IArbitrumInbox__factory {
  static readonly abi = _abi;
  static createInterface(): IArbitrumInboxInterface {
    return new utils.Interface(_abi) as IArbitrumInboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IArbitrumInbox {
    return new Contract(address, _abi, signerOrProvider) as IArbitrumInbox;
  }
}
