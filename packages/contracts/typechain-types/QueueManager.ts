/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface QueueManagerInterface extends utils.Interface {
  contractName: "QueueManager";
  functions: {
    "queueContains(bytes32)": FunctionFragment;
    "queueEnd()": FunctionFragment;
    "queueLength()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "queueContains",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "queueEnd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queueLength",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "queueContains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queueEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueLength",
    data: BytesLike
  ): Result;

  events: {};
}

export interface QueueManager extends BaseContract {
  contractName: "QueueManager";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: QueueManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    queueEnd(overrides?: CallOverrides): Promise<[string]>;

    queueLength(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  queueContains(_item: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  queueEnd(overrides?: CallOverrides): Promise<string>;

  queueLength(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queueEnd(overrides?: CallOverrides): Promise<string>;

    queueLength(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queueEnd(overrides?: CallOverrides): Promise<BigNumber>;

    queueLength(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queueEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
