/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface ExecutorInterface extends utils.Interface {
  functions: {
    "execute(bytes32,uint256,address,address,bytes,bytes)": FunctionFragment;
    "getConnext()": FunctionFragment;
    "origin()": FunctionFragment;
    "originSender()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "execute" | "getConnext" | "origin" | "originSender"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [BytesLike, BigNumberish, string, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getConnext",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "origin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "originSender",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConnext", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "origin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "originSender",
    data: BytesLike
  ): Result;

  events: {
    "Executed(bytes32,address,address,uint256,bytes,bytes,bytes,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export interface ExecutedEventObject {
  transferId: string;
  to: string;
  assetId: string;
  amount: BigNumber;
  _properties: string;
  callData: string;
  returnData: string;
  success: boolean;
}
export type ExecutedEvent = TypedEvent<
  [string, string, string, BigNumber, string, string, string, boolean],
  ExecutedEventObject
>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface Executor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExecutorInterface;

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
    execute(
      _transferId: BytesLike,
      _amount: BigNumberish,
      _to: string,
      _assetId: string,
      _properties: BytesLike,
      _callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getConnext(overrides?: CallOverrides): Promise<[string]>;

    origin(overrides?: CallOverrides): Promise<[number]>;

    originSender(overrides?: CallOverrides): Promise<[string]>;
  };

  execute(
    _transferId: BytesLike,
    _amount: BigNumberish,
    _to: string,
    _assetId: string,
    _properties: BytesLike,
    _callData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getConnext(overrides?: CallOverrides): Promise<string>;

  origin(overrides?: CallOverrides): Promise<number>;

  originSender(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    execute(
      _transferId: BytesLike,
      _amount: BigNumberish,
      _to: string,
      _assetId: string,
      _properties: BytesLike,
      _callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    getConnext(overrides?: CallOverrides): Promise<string>;

    origin(overrides?: CallOverrides): Promise<number>;

    originSender(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Executed(bytes32,address,address,uint256,bytes,bytes,bytes,bool)"(
      transferId?: BytesLike | null,
      to?: string | null,
      assetId?: null,
      amount?: null,
      _properties?: null,
      callData?: null,
      returnData?: null,
      success?: null
    ): ExecutedEventFilter;
    Executed(
      transferId?: BytesLike | null,
      to?: string | null,
      assetId?: null,
      amount?: null,
      _properties?: null,
      callData?: null,
      returnData?: null,
      success?: null
    ): ExecutedEventFilter;
  };

  estimateGas: {
    execute(
      _transferId: BytesLike,
      _amount: BigNumberish,
      _to: string,
      _assetId: string,
      _properties: BytesLike,
      _callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getConnext(overrides?: CallOverrides): Promise<BigNumber>;

    origin(overrides?: CallOverrides): Promise<BigNumber>;

    originSender(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      _transferId: BytesLike,
      _amount: BigNumberish,
      _to: string,
      _assetId: string,
      _properties: BytesLike,
      _callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getConnext(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    origin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    originSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
