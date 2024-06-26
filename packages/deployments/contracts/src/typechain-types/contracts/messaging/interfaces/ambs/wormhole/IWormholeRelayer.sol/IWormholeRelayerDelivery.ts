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
  PromiseOrValue,
} from "../../../../../../common";

export interface IWormholeRelayerDeliveryInterface extends utils.Interface {
  functions: {
    "deliver(bytes[],bytes,address,bytes)": FunctionFragment;
    "getRegisteredWormholeRelayerContract(uint16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "deliver" | "getRegisteredWormholeRelayerContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deliver",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegisteredWormholeRelayerContract",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "deliver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRegisteredWormholeRelayerContract",
    data: BytesLike
  ): Result;

  events: {
    "Delivery(address,uint16,uint64,bytes32,uint8,uint256,uint8,bytes,bytes)": EventFragment;
    "SendEvent(uint64,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Delivery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendEvent"): EventFragment;
}

export interface DeliveryEventObject {
  recipientContract: string;
  sourceChain: number;
  sequence: BigNumber;
  deliveryVaaHash: string;
  status: number;
  gasUsed: BigNumber;
  refundStatus: number;
  additionalStatusInfo: string;
  overridesInfo: string;
}
export type DeliveryEvent = TypedEvent<
  [
    string,
    number,
    BigNumber,
    string,
    number,
    BigNumber,
    number,
    string,
    string
  ],
  DeliveryEventObject
>;

export type DeliveryEventFilter = TypedEventFilter<DeliveryEvent>;

export interface SendEventEventObject {
  sequence: BigNumber;
  deliveryQuote: BigNumber;
  paymentForExtraReceiverValue: BigNumber;
}
export type SendEventEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SendEventEventObject
>;

export type SendEventEventFilter = TypedEventFilter<SendEventEvent>;

export interface IWormholeRelayerDelivery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWormholeRelayerDeliveryInterface;

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
    deliver(
      encodedVMs: PromiseOrValue<BytesLike>[],
      encodedDeliveryVAA: PromiseOrValue<BytesLike>,
      relayerRefundAddress: PromiseOrValue<string>,
      deliveryOverrides: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  deliver(
    encodedVMs: PromiseOrValue<BytesLike>[],
    encodedDeliveryVAA: PromiseOrValue<BytesLike>,
    relayerRefundAddress: PromiseOrValue<string>,
    deliveryOverrides: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRegisteredWormholeRelayerContract(
    chainId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    deliver(
      encodedVMs: PromiseOrValue<BytesLike>[],
      encodedDeliveryVAA: PromiseOrValue<BytesLike>,
      relayerRefundAddress: PromiseOrValue<string>,
      deliveryOverrides: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Delivery(address,uint16,uint64,bytes32,uint8,uint256,uint8,bytes,bytes)"(
      recipientContract?: PromiseOrValue<string> | null,
      sourceChain?: PromiseOrValue<BigNumberish> | null,
      sequence?: PromiseOrValue<BigNumberish> | null,
      deliveryVaaHash?: null,
      status?: null,
      gasUsed?: null,
      refundStatus?: null,
      additionalStatusInfo?: null,
      overridesInfo?: null
    ): DeliveryEventFilter;
    Delivery(
      recipientContract?: PromiseOrValue<string> | null,
      sourceChain?: PromiseOrValue<BigNumberish> | null,
      sequence?: PromiseOrValue<BigNumberish> | null,
      deliveryVaaHash?: null,
      status?: null,
      gasUsed?: null,
      refundStatus?: null,
      additionalStatusInfo?: null,
      overridesInfo?: null
    ): DeliveryEventFilter;

    "SendEvent(uint64,uint256,uint256)"(
      sequence?: PromiseOrValue<BigNumberish> | null,
      deliveryQuote?: null,
      paymentForExtraReceiverValue?: null
    ): SendEventEventFilter;
    SendEvent(
      sequence?: PromiseOrValue<BigNumberish> | null,
      deliveryQuote?: null,
      paymentForExtraReceiverValue?: null
    ): SendEventEventFilter;
  };

  estimateGas: {
    deliver(
      encodedVMs: PromiseOrValue<BytesLike>[],
      encodedDeliveryVAA: PromiseOrValue<BytesLike>,
      relayerRefundAddress: PromiseOrValue<string>,
      deliveryOverrides: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deliver(
      encodedVMs: PromiseOrValue<BytesLike>[],
      encodedDeliveryVAA: PromiseOrValue<BytesLike>,
      relayerRefundAddress: PromiseOrValue<string>,
      deliveryOverrides: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRegisteredWormholeRelayerContract(
      chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
