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

export type TransferInfoStruct = {
  originDomain: PromiseOrValue<BigNumberish>;
  destinationDomain: PromiseOrValue<BigNumberish>;
  canonicalDomain: PromiseOrValue<BigNumberish>;
  to: PromiseOrValue<string>;
  delegate: PromiseOrValue<string>;
  receiveLocal: PromiseOrValue<boolean>;
  callData: PromiseOrValue<BytesLike>;
  slippage: PromiseOrValue<BigNumberish>;
  originSender: PromiseOrValue<string>;
  bridgedAmt: PromiseOrValue<BigNumberish>;
  normalizedIn: PromiseOrValue<BigNumberish>;
  nonce: PromiseOrValue<BigNumberish>;
  canonicalId: PromiseOrValue<BytesLike>;
};

export type TransferInfoStructOutput = [
  number,
  number,
  number,
  string,
  string,
  boolean,
  string,
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  originDomain: number;
  destinationDomain: number;
  canonicalDomain: number;
  to: string;
  delegate: string;
  receiveLocal: boolean;
  callData: string;
  slippage: BigNumber;
  originSender: string;
  bridgedAmt: BigNumber;
  normalizedIn: BigNumber;
  nonce: BigNumber;
  canonicalId: string;
};

export type ExecuteArgsStruct = {
  params: TransferInfoStruct;
  routers: PromiseOrValue<string>[];
  routerSignatures: PromiseOrValue<BytesLike>[];
  sequencer: PromiseOrValue<string>;
  sequencerSignature: PromiseOrValue<BytesLike>;
};

export type ExecuteArgsStructOutput = [
  TransferInfoStructOutput,
  string[],
  string[],
  string,
  string
] & {
  params: TransferInfoStructOutput;
  routers: string[];
  routerSignatures: string[];
  sequencer: string;
  sequencerSignature: string;
};

export interface BridgeFacetInterface extends utils.Interface {
  functions: {
    "AAVE_REFERRAL_CODE()": FunctionFragment;
    "addSequencer(address)": FunctionFragment;
    "approvedSequencers(address)": FunctionFragment;
    "bumpTransfer(bytes32)": FunctionFragment;
    "domain()": FunctionFragment;
    "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
    "execute(((uint32,uint32,uint32,address,address,bool,bytes,uint256,address,uint256,uint256,uint256,bytes32),address[],bytes[],address,bytes))": FunctionFragment;
    "forceUpdateSlippage((uint32,uint32,uint32,address,address,bool,bytes,uint256,address,uint256,uint256,uint256,bytes32),uint256)": FunctionFragment;
    "nonce()": FunctionFragment;
    "remote(uint32)": FunctionFragment;
    "removeSequencer(address)": FunctionFragment;
    "routedTransfers(bytes32)": FunctionFragment;
    "setXAppConnectionManager(address)": FunctionFragment;
    "transferStatus(bytes32)": FunctionFragment;
    "xAppConnectionManager()": FunctionFragment;
    "xcall(uint32,address,address,address,uint256,uint256,bytes)": FunctionFragment;
    "xcallIntoLocal(uint32,address,address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AAVE_REFERRAL_CODE"
      | "addSequencer"
      | "approvedSequencers"
      | "bumpTransfer"
      | "domain"
      | "enrollRemoteRouter"
      | "execute"
      | "forceUpdateSlippage"
      | "nonce"
      | "remote"
      | "removeSequencer"
      | "routedTransfers"
      | "setXAppConnectionManager"
      | "transferStatus"
      | "xAppConnectionManager"
      | "xcall"
      | "xcallIntoLocal"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AAVE_REFERRAL_CODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addSequencer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedSequencers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "bumpTransfer",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "domain", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "enrollRemoteRouter",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [ExecuteArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "forceUpdateSlippage",
    values: [TransferInfoStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remote",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSequencer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "routedTransfers",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setXAppConnectionManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferStatus",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "xAppConnectionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "xcall",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "xcallIntoLocal",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "AAVE_REFERRAL_CODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedSequencers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bumpTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "domain", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enrollRemoteRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forceUpdateSlippage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routedTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setXAppConnectionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xAppConnectionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xcall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "xcallIntoLocal",
    data: BytesLike
  ): Result;

  events: {
    "AavePortalMintUnbacked(bytes32,address,address,uint256)": EventFragment;
    "Executed(bytes32,address,address,tuple,address,uint256,address)": EventFragment;
    "ExternalCalldataExecuted(bytes32,bool,bytes)": EventFragment;
    "RemoteAdded(uint32,address,address)": EventFragment;
    "SequencerAdded(address,address)": EventFragment;
    "SequencerRemoved(address,address)": EventFragment;
    "SlippageUpdated(bytes32,uint256)": EventFragment;
    "TransferRelayerFeesIncreased(bytes32,uint256,address)": EventFragment;
    "XCalled(bytes32,uint256,bytes32,tuple,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AavePortalMintUnbacked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExternalCalldataExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoteAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SequencerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SequencerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SlippageUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferRelayerFeesIncreased"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "XCalled"): EventFragment;
}

export interface AavePortalMintUnbackedEventObject {
  transferId: string;
  router: string;
  asset: string;
  amount: BigNumber;
}
export type AavePortalMintUnbackedEvent = TypedEvent<
  [string, string, string, BigNumber],
  AavePortalMintUnbackedEventObject
>;

export type AavePortalMintUnbackedEventFilter =
  TypedEventFilter<AavePortalMintUnbackedEvent>;

export interface ExecutedEventObject {
  transferId: string;
  to: string;
  asset: string;
  args: ExecuteArgsStructOutput;
  local: string;
  amount: BigNumber;
  caller: string;
}
export type ExecutedEvent = TypedEvent<
  [string, string, string, ExecuteArgsStructOutput, string, BigNumber, string],
  ExecutedEventObject
>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface ExternalCalldataExecutedEventObject {
  transferId: string;
  success: boolean;
  returnData: string;
}
export type ExternalCalldataExecutedEvent = TypedEvent<
  [string, boolean, string],
  ExternalCalldataExecutedEventObject
>;

export type ExternalCalldataExecutedEventFilter =
  TypedEventFilter<ExternalCalldataExecutedEvent>;

export interface RemoteAddedEventObject {
  domain: number;
  remote: string;
  caller: string;
}
export type RemoteAddedEvent = TypedEvent<
  [number, string, string],
  RemoteAddedEventObject
>;

export type RemoteAddedEventFilter = TypedEventFilter<RemoteAddedEvent>;

export interface SequencerAddedEventObject {
  sequencer: string;
  caller: string;
}
export type SequencerAddedEvent = TypedEvent<
  [string, string],
  SequencerAddedEventObject
>;

export type SequencerAddedEventFilter = TypedEventFilter<SequencerAddedEvent>;

export interface SequencerRemovedEventObject {
  sequencer: string;
  caller: string;
}
export type SequencerRemovedEvent = TypedEvent<
  [string, string],
  SequencerRemovedEventObject
>;

export type SequencerRemovedEventFilter =
  TypedEventFilter<SequencerRemovedEvent>;

export interface SlippageUpdatedEventObject {
  transferId: string;
  slippage: BigNumber;
}
export type SlippageUpdatedEvent = TypedEvent<
  [string, BigNumber],
  SlippageUpdatedEventObject
>;

export type SlippageUpdatedEventFilter = TypedEventFilter<SlippageUpdatedEvent>;

export interface TransferRelayerFeesIncreasedEventObject {
  transferId: string;
  increase: BigNumber;
  caller: string;
}
export type TransferRelayerFeesIncreasedEvent = TypedEvent<
  [string, BigNumber, string],
  TransferRelayerFeesIncreasedEventObject
>;

export type TransferRelayerFeesIncreasedEventFilter =
  TypedEventFilter<TransferRelayerFeesIncreasedEvent>;

export interface XCalledEventObject {
  transferId: string;
  nonce: BigNumber;
  messageHash: string;
  params: TransferInfoStructOutput;
  asset: string;
  amount: BigNumber;
}
export type XCalledEvent = TypedEvent<
  [string, BigNumber, string, TransferInfoStructOutput, string, BigNumber],
  XCalledEventObject
>;

export type XCalledEventFilter = TypedEventFilter<XCalledEvent>;

export interface BridgeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeFacetInterface;

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
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<[number]>;

    addSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approvedSequencers(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    bumpTransfer(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    domain(overrides?: CallOverrides): Promise<[number]>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forceUpdateSlippage(
      _params: TransferInfoStruct,
      _slippage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    remote(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    routedTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferStatus(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    xcallIntoLocal(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

  addSequencer(
    _sequencer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approvedSequencers(
    _sequencer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  bumpTransfer(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  domain(overrides?: CallOverrides): Promise<number>;

  enrollRemoteRouter(
    _domain: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execute(
    _args: ExecuteArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forceUpdateSlippage(
    _params: TransferInfoStruct,
    _slippage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  remote(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  removeSequencer(
    _sequencer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  routedTransfers(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  setXAppConnectionManager(
    _xAppConnectionManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferStatus(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

  xcall(
    _destination: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _delegate: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _slippage: PromiseOrValue<BigNumberish>,
    _callData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  xcallIntoLocal(
    _destination: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    _asset: PromiseOrValue<string>,
    _delegate: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _slippage: PromiseOrValue<BigNumberish>,
    _callData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

    addSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    approvedSequencers(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    bumpTransfer(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    domain(overrides?: CallOverrides): Promise<number>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    forceUpdateSlippage(
      _params: TransferInfoStruct,
      _slippage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    remote(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    removeSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    routedTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferStatus(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    xcallIntoLocal(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "AavePortalMintUnbacked(bytes32,address,address,uint256)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      router?: PromiseOrValue<string> | null,
      asset?: null,
      amount?: null
    ): AavePortalMintUnbackedEventFilter;
    AavePortalMintUnbacked(
      transferId?: PromiseOrValue<BytesLike> | null,
      router?: PromiseOrValue<string> | null,
      asset?: null,
      amount?: null
    ): AavePortalMintUnbackedEventFilter;

    "Executed(bytes32,address,address,tuple,address,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      to?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      args?: null,
      local?: null,
      amount?: null,
      caller?: null
    ): ExecutedEventFilter;
    Executed(
      transferId?: PromiseOrValue<BytesLike> | null,
      to?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      args?: null,
      local?: null,
      amount?: null,
      caller?: null
    ): ExecutedEventFilter;

    "ExternalCalldataExecuted(bytes32,bool,bytes)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      success?: null,
      returnData?: null
    ): ExternalCalldataExecutedEventFilter;
    ExternalCalldataExecuted(
      transferId?: PromiseOrValue<BytesLike> | null,
      success?: null,
      returnData?: null
    ): ExternalCalldataExecutedEventFilter;

    "RemoteAdded(uint32,address,address)"(
      domain?: null,
      remote?: null,
      caller?: null
    ): RemoteAddedEventFilter;
    RemoteAdded(
      domain?: null,
      remote?: null,
      caller?: null
    ): RemoteAddedEventFilter;

    "SequencerAdded(address,address)"(
      sequencer?: null,
      caller?: null
    ): SequencerAddedEventFilter;
    SequencerAdded(sequencer?: null, caller?: null): SequencerAddedEventFilter;

    "SequencerRemoved(address,address)"(
      sequencer?: null,
      caller?: null
    ): SequencerRemovedEventFilter;
    SequencerRemoved(
      sequencer?: null,
      caller?: null
    ): SequencerRemovedEventFilter;

    "SlippageUpdated(bytes32,uint256)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      slippage?: null
    ): SlippageUpdatedEventFilter;
    SlippageUpdated(
      transferId?: PromiseOrValue<BytesLike> | null,
      slippage?: null
    ): SlippageUpdatedEventFilter;

    "TransferRelayerFeesIncreased(bytes32,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      increase?: null,
      caller?: null
    ): TransferRelayerFeesIncreasedEventFilter;
    TransferRelayerFeesIncreased(
      transferId?: PromiseOrValue<BytesLike> | null,
      increase?: null,
      caller?: null
    ): TransferRelayerFeesIncreasedEventFilter;

    "XCalled(bytes32,uint256,bytes32,tuple,address,uint256)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      nonce?: PromiseOrValue<BigNumberish> | null,
      messageHash?: PromiseOrValue<BytesLike> | null,
      params?: null,
      asset?: null,
      amount?: null
    ): XCalledEventFilter;
    XCalled(
      transferId?: PromiseOrValue<BytesLike> | null,
      nonce?: PromiseOrValue<BigNumberish> | null,
      messageHash?: PromiseOrValue<BytesLike> | null,
      params?: null,
      asset?: null,
      amount?: null
    ): XCalledEventFilter;
  };

  estimateGas: {
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<BigNumber>;

    addSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approvedSequencers(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bumpTransfer(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    domain(overrides?: CallOverrides): Promise<BigNumber>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forceUpdateSlippage(
      _params: TransferInfoStruct,
      _slippage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    remote(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    routedTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferStatus(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    xcallIntoLocal(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AAVE_REFERRAL_CODE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approvedSequencers(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bumpTransfer(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forceUpdateSlippage(
      _params: TransferInfoStruct,
      _slippage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remote(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    routedTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferStatus(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    xAppConnectionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    xcall(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    xcallIntoLocal(
      _destination: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      _asset: PromiseOrValue<string>,
      _delegate: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _slippage: PromiseOrValue<BigNumberish>,
      _callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
