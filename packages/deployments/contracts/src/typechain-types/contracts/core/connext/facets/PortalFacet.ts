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
  Overrides,
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
} from "../../../../common";

export type CallParamsStruct = {
  to: PromiseOrValue<string>;
  callData: PromiseOrValue<BytesLike>;
  originDomain: PromiseOrValue<BigNumberish>;
  destinationDomain: PromiseOrValue<BigNumberish>;
  agent: PromiseOrValue<string>;
  receiveLocal: PromiseOrValue<boolean>;
  callback: PromiseOrValue<string>;
  callbackFee: PromiseOrValue<BigNumberish>;
  relayerFee: PromiseOrValue<BigNumberish>;
  destinationMinOut: PromiseOrValue<BigNumberish>;
};

export type CallParamsStructOutput = [
  string,
  string,
  number,
  number,
  string,
  boolean,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  to: string;
  callData: string;
  originDomain: number;
  destinationDomain: number;
  agent: string;
  receiveLocal: boolean;
  callback: string;
  callbackFee: BigNumber;
  relayerFee: BigNumber;
  destinationMinOut: BigNumber;
};

export interface PortalFacetInterface extends utils.Interface {
  functions: {
    "aavePool()": FunctionFragment;
    "aavePortalFee()": FunctionFragment;
    "getAavePortalDebt(bytes32)": FunctionFragment;
    "getAavePortalFeeDebt(bytes32)": FunctionFragment;
    "repayAavePortal((address,bytes,uint32,uint32,address,bool,address,uint256,uint256,uint256),address,address,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "repayAavePortalFor((address,bytes,uint32,uint32,address,bool,address,uint256,uint256,uint256),address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "setAavePool(address)": FunctionFragment;
    "setAavePortalFee(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "aavePool"
      | "aavePortalFee"
      | "getAavePortalDebt"
      | "getAavePortalFeeDebt"
      | "repayAavePortal"
      | "repayAavePortalFor"
      | "setAavePool"
      | "setAavePortalFee"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "aavePool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "aavePortalFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAavePortalDebt",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAavePortalFeeDebt",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "repayAavePortal",
    values: [
      CallParamsStruct,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "repayAavePortalFor",
    values: [
      CallParamsStruct,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setAavePool",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setAavePortalFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "aavePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "aavePortalFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAavePortalDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAavePortalFeeDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayAavePortal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayAavePortalFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAavePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAavePortalFee",
    data: BytesLike
  ): Result;

  events: {
    "AavePortalRepayment(bytes32,address,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AavePortalRepayment"): EventFragment;
}

export interface AavePortalRepaymentEventObject {
  transferId: string;
  asset: string;
  amount: BigNumber;
  fee: BigNumber;
  caller: string;
}
export type AavePortalRepaymentEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string],
  AavePortalRepaymentEventObject
>;

export type AavePortalRepaymentEventFilter =
  TypedEventFilter<AavePortalRepaymentEvent>;

export interface PortalFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PortalFacetInterface;

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
    aavePool(overrides?: CallOverrides): Promise<[string]>;

    aavePortalFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAavePortalDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAavePortalFeeDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    repayAavePortal(
      _params: CallParamsStruct,
      _local: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      _maxIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayAavePortalFor(
      _params: CallParamsStruct,
      _adopted: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAavePool(
      _aavePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAavePortalFee(
      _aavePortalFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  aavePool(overrides?: CallOverrides): Promise<string>;

  aavePortalFee(overrides?: CallOverrides): Promise<BigNumber>;

  getAavePortalDebt(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAavePortalFeeDebt(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  repayAavePortal(
    _params: CallParamsStruct,
    _local: PromiseOrValue<string>,
    _originSender: PromiseOrValue<string>,
    _bridgedAmt: PromiseOrValue<BigNumberish>,
    _nonce: PromiseOrValue<BigNumberish>,
    _backingAmount: PromiseOrValue<BigNumberish>,
    _feeAmount: PromiseOrValue<BigNumberish>,
    _maxIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayAavePortalFor(
    _params: CallParamsStruct,
    _adopted: PromiseOrValue<string>,
    _originSender: PromiseOrValue<string>,
    _bridgedAmt: PromiseOrValue<BigNumberish>,
    _nonce: PromiseOrValue<BigNumberish>,
    _backingAmount: PromiseOrValue<BigNumberish>,
    _feeAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAavePool(
    _aavePool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAavePortalFee(
    _aavePortalFeeNumerator: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    aavePool(overrides?: CallOverrides): Promise<string>;

    aavePortalFee(overrides?: CallOverrides): Promise<BigNumber>;

    getAavePortalDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAavePortalFeeDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayAavePortal(
      _params: CallParamsStruct,
      _local: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      _maxIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    repayAavePortalFor(
      _params: CallParamsStruct,
      _adopted: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAavePool(
      _aavePool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAavePortalFee(
      _aavePortalFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AavePortalRepayment(bytes32,address,uint256,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      asset?: null,
      amount?: null,
      fee?: null,
      caller?: null
    ): AavePortalRepaymentEventFilter;
    AavePortalRepayment(
      transferId?: PromiseOrValue<BytesLike> | null,
      asset?: null,
      amount?: null,
      fee?: null,
      caller?: null
    ): AavePortalRepaymentEventFilter;
  };

  estimateGas: {
    aavePool(overrides?: CallOverrides): Promise<BigNumber>;

    aavePortalFee(overrides?: CallOverrides): Promise<BigNumber>;

    getAavePortalDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAavePortalFeeDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayAavePortal(
      _params: CallParamsStruct,
      _local: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      _maxIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayAavePortalFor(
      _params: CallParamsStruct,
      _adopted: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAavePool(
      _aavePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAavePortalFee(
      _aavePortalFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aavePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aavePortalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAavePortalDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAavePortalFeeDebt(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    repayAavePortal(
      _params: CallParamsStruct,
      _local: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      _maxIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayAavePortalFor(
      _params: CallParamsStruct,
      _adopted: PromiseOrValue<string>,
      _originSender: PromiseOrValue<string>,
      _bridgedAmt: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _backingAmount: PromiseOrValue<BigNumberish>,
      _feeAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAavePool(
      _aavePool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAavePortalFee(
      _aavePortalFeeNumerator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
