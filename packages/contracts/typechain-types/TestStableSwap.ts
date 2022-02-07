/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TestStableSwapInterface extends utils.Interface {
  contractName: "TestStableSwap";
  functions: {
    "setupPool(address,address,uint256,uint256)": FunctionFragment;
    "swapExact(uint256,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setupPool",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact",
    values: [BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "setupPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapExact", data: BytesLike): Result;

  events: {
    "PoolCreated(address,address,uint256,uint256)": EventFragment;
    "Swapped(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swapped"): EventFragment;
}

export type PoolCreatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { assetA: string; assetB: string; seedA: BigNumber; seedB: BigNumber }
>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export type SwappedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    assetIn: string;
    assetOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
  }
>;

export type SwappedEventFilter = TypedEventFilter<SwappedEvent>;

export interface TestStableSwap extends BaseContract {
  contractName: "TestStableSwap";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestStableSwapInterface;

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
    setupPool(
      assetA: string,
      assetB: string,
      seedA: BigNumberish,
      seedB: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExact(
      amountIn: BigNumberish,
      assetIn: string,
      assetOut: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  setupPool(
    assetA: string,
    assetB: string,
    seedA: BigNumberish,
    seedB: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExact(
    amountIn: BigNumberish,
    assetIn: string,
    assetOut: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setupPool(
      assetA: string,
      assetB: string,
      seedA: BigNumberish,
      seedB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact(
      amountIn: BigNumberish,
      assetIn: string,
      assetOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "PoolCreated(address,address,uint256,uint256)"(
      assetA?: null,
      assetB?: null,
      seedA?: null,
      seedB?: null
    ): PoolCreatedEventFilter;
    PoolCreated(
      assetA?: null,
      assetB?: null,
      seedA?: null,
      seedB?: null
    ): PoolCreatedEventFilter;

    "Swapped(address,address,uint256,uint256)"(
      assetIn?: null,
      assetOut?: null,
      amountIn?: null,
      amountOut?: null
    ): SwappedEventFilter;
    Swapped(
      assetIn?: null,
      assetOut?: null,
      amountIn?: null,
      amountOut?: null
    ): SwappedEventFilter;
  };

  estimateGas: {
    setupPool(
      assetA: string,
      assetB: string,
      seedA: BigNumberish,
      seedB: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExact(
      amountIn: BigNumberish,
      assetIn: string,
      assetOut: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setupPool(
      assetA: string,
      assetB: string,
      seedA: BigNumberish,
      seedB: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExact(
      amountIn: BigNumberish,
      assetIn: string,
      assetOut: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
