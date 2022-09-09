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

export type ExecuteArgsStruct = {
  params: CallParamsStruct;
  local: PromiseOrValue<string>;
  routers: PromiseOrValue<string>[];
  routerSignatures: PromiseOrValue<BytesLike>[];
  sequencer: PromiseOrValue<string>;
  sequencerSignature: PromiseOrValue<BytesLike>;
  amount: PromiseOrValue<BigNumberish>;
  nonce: PromiseOrValue<BigNumberish>;
  originSender: PromiseOrValue<string>;
};

export type ExecuteArgsStructOutput = [
  CallParamsStructOutput,
  string,
  string[],
  string[],
  string,
  string,
  BigNumber,
  BigNumber,
  string
] & {
  params: CallParamsStructOutput;
  local: string;
  routers: string[];
  routerSignatures: string[];
  sequencer: string;
  sequencerSignature: string;
  amount: BigNumber;
  nonce: BigNumber;
  originSender: string;
};

export type UserFacingCallParamsStruct = {
  to: PromiseOrValue<string>;
  callData: PromiseOrValue<BytesLike>;
  destinationDomain: PromiseOrValue<BigNumberish>;
  agent: PromiseOrValue<string>;
  recovery: PromiseOrValue<string>;
  receiveLocal: PromiseOrValue<boolean>;
  callback: PromiseOrValue<string>;
  callbackFee: PromiseOrValue<BigNumberish>;
  relayerFee: PromiseOrValue<BigNumberish>;
  destinationMinOut: PromiseOrValue<BigNumberish>;
};

export type UserFacingCallParamsStructOutput = [
  string,
  string,
  number,
  string,
  string,
  boolean,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  to: string;
  callData: string;
  destinationDomain: number;
  agent: string;
  recovery: string;
  receiveLocal: boolean;
  callback: string;
  callbackFee: BigNumber;
  relayerFee: BigNumber;
  destinationMinOut: BigNumber;
};

export type XCallArgsStruct = {
  params: UserFacingCallParamsStruct;
  asset: PromiseOrValue<string>;
  amount: PromiseOrValue<BigNumberish>;
  originMinOut: PromiseOrValue<BigNumberish>;
};

export type XCallArgsStructOutput = [
  UserFacingCallParamsStructOutput,
  string,
  BigNumber,
  BigNumber
] & {
  params: UserFacingCallParamsStructOutput;
  asset: string;
  amount: BigNumber;
  originMinOut: BigNumber;
};

export interface BridgeFacetInterface extends utils.Interface {
  functions: {
    "AAVE_REFERRAL_CODE()": FunctionFragment;
    "addConnextion(uint32,address)": FunctionFragment;
    "addSequencer(address)": FunctionFragment;
    "approvedSequencers(address)": FunctionFragment;
    "bumpTransfer(bytes32)": FunctionFragment;
    "connextion(uint32)": FunctionFragment;
    "domain()": FunctionFragment;
    "execute(((address,bytes,uint32,uint32,address,bool,address,uint256,uint256,uint256),address,address[],bytes[],address,bytes,uint256,uint256,address))": FunctionFragment;
    "forceReceiveLocal((address,bytes,uint32,uint32,address,bool,address,uint256,uint256,uint256),uint256,uint256,bytes32,uint32,address)": FunctionFragment;
    "nonce()": FunctionFragment;
    "promiseRouter()": FunctionFragment;
    "reconciledTransfers(bytes32)": FunctionFragment;
    "relayerFees(bytes32)": FunctionFragment;
    "removeSequencer(address)": FunctionFragment;
    "routedTransfers(bytes32)": FunctionFragment;
    "setPromiseRouter(address)": FunctionFragment;
    "setSponsorVault(address)": FunctionFragment;
    "sponsorVault()": FunctionFragment;
    "xcall(((address,bytes,uint32,address,address,bool,address,uint256,uint256,uint256),address,uint256,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AAVE_REFERRAL_CODE"
      | "addConnextion"
      | "addSequencer"
      | "approvedSequencers"
      | "bumpTransfer"
      | "connextion"
      | "domain"
      | "execute"
      | "forceReceiveLocal"
      | "nonce"
      | "promiseRouter"
      | "reconciledTransfers"
      | "relayerFees"
      | "removeSequencer"
      | "routedTransfers"
      | "setPromiseRouter"
      | "setSponsorVault"
      | "sponsorVault"
      | "xcall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AAVE_REFERRAL_CODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addConnextion",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
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
  encodeFunctionData(
    functionFragment: "connextion",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "domain", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [ExecuteArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "forceReceiveLocal",
    values: [
      CallParamsStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "promiseRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reconciledTransfers",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "relayerFees",
    values: [PromiseOrValue<BytesLike>]
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
    functionFragment: "setPromiseRouter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSponsorVault",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "sponsorVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "xcall",
    values: [XCallArgsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "AAVE_REFERRAL_CODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConnextion",
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
  decodeFunctionResult(functionFragment: "connextion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "domain", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forceReceiveLocal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "promiseRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reconciledTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayerFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routedTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPromiseRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSponsorVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sponsorVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xcall", data: BytesLike): Result;

  events: {
    "AavePortalMintUnbacked(bytes32,address,address,uint256)": EventFragment;
    "ConnextionAdded(uint32,address,address)": EventFragment;
    "Executed(bytes32,address,tuple,address,uint256,address)": EventFragment;
    "ExternalCalldataExecuted(bytes32,bool,bytes)": EventFragment;
    "ForcedReceiveLocal(bytes32,bytes32,uint32,uint256)": EventFragment;
    "PromiseRouterUpdated(address,address,address)": EventFragment;
    "SequencerAdded(address,address)": EventFragment;
    "SequencerRemoved(address,address)": EventFragment;
    "SponsorVaultUpdated(address,address,address)": EventFragment;
    "TransferRelayerFeesUpdated(bytes32,uint256,address)": EventFragment;
    "XCalled(bytes32,uint256,bytes32,tuple,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AavePortalMintUnbacked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConnextionAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExternalCalldataExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForcedReceiveLocal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PromiseRouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SequencerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SequencerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SponsorVaultUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferRelayerFeesUpdated"): EventFragment;
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

export interface ConnextionAddedEventObject {
  domain: number;
  connext: string;
  caller: string;
}
export type ConnextionAddedEvent = TypedEvent<
  [number, string, string],
  ConnextionAddedEventObject
>;

export type ConnextionAddedEventFilter = TypedEventFilter<ConnextionAddedEvent>;

export interface ExecutedEventObject {
  transferId: string;
  to: string;
  args: ExecuteArgsStructOutput;
  asset: string;
  amount: BigNumber;
  caller: string;
}
export type ExecutedEvent = TypedEvent<
  [string, string, ExecuteArgsStructOutput, string, BigNumber, string],
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

export interface ForcedReceiveLocalEventObject {
  transferId: string;
  canonicalId: string;
  canonicalDomain: number;
  amount: BigNumber;
}
export type ForcedReceiveLocalEvent = TypedEvent<
  [string, string, number, BigNumber],
  ForcedReceiveLocalEventObject
>;

export type ForcedReceiveLocalEventFilter =
  TypedEventFilter<ForcedReceiveLocalEvent>;

export interface PromiseRouterUpdatedEventObject {
  oldRouter: string;
  newRouter: string;
  caller: string;
}
export type PromiseRouterUpdatedEvent = TypedEvent<
  [string, string, string],
  PromiseRouterUpdatedEventObject
>;

export type PromiseRouterUpdatedEventFilter =
  TypedEventFilter<PromiseRouterUpdatedEvent>;

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

export interface SponsorVaultUpdatedEventObject {
  oldSponsorVault: string;
  newSponsorVault: string;
  caller: string;
}
export type SponsorVaultUpdatedEvent = TypedEvent<
  [string, string, string],
  SponsorVaultUpdatedEventObject
>;

export type SponsorVaultUpdatedEventFilter =
  TypedEventFilter<SponsorVaultUpdatedEvent>;

export interface TransferRelayerFeesUpdatedEventObject {
  transferId: string;
  relayerFee: BigNumber;
  caller: string;
}
export type TransferRelayerFeesUpdatedEvent = TypedEvent<
  [string, BigNumber, string],
  TransferRelayerFeesUpdatedEventObject
>;

export type TransferRelayerFeesUpdatedEventFilter =
  TypedEventFilter<TransferRelayerFeesUpdatedEvent>;

export interface XCalledEventObject {
  transferId: string;
  nonce: BigNumber;
  messageHash: string;
  xcallArgs: XCallArgsStructOutput;
  bridgedAsset: string;
  bridgedAmount: BigNumber;
  caller: string;
}
export type XCalledEvent = TypedEvent<
  [string, BigNumber, string, XCallArgsStructOutput, string, BigNumber, string],
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

    addConnextion(
      _domain: PromiseOrValue<BigNumberish>,
      _connext: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    connextion(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    domain(overrides?: CallOverrides): Promise<[number]>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forceReceiveLocal(
      _params: CallParamsStruct,
      _amount: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _canonicalId: PromiseOrValue<BytesLike>,
      _canonicalDomain: PromiseOrValue<BigNumberish>,
      _originSender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    promiseRouter(overrides?: CallOverrides): Promise<[string]>;

    reconciledTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    relayerFees(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    routedTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    setPromiseRouter(
      _promiseRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSponsorVault(
      _sponsorVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sponsorVault(overrides?: CallOverrides): Promise<[string]>;

    xcall(
      _args: XCallArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

  addConnextion(
    _domain: PromiseOrValue<BigNumberish>,
    _connext: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  connextion(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  domain(overrides?: CallOverrides): Promise<number>;

  execute(
    _args: ExecuteArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forceReceiveLocal(
    _params: CallParamsStruct,
    _amount: PromiseOrValue<BigNumberish>,
    _nonce: PromiseOrValue<BigNumberish>,
    _canonicalId: PromiseOrValue<BytesLike>,
    _canonicalDomain: PromiseOrValue<BigNumberish>,
    _originSender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  promiseRouter(overrides?: CallOverrides): Promise<string>;

  reconciledTransfers(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  relayerFees(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeSequencer(
    _sequencer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  routedTransfers(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  setPromiseRouter(
    _promiseRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSponsorVault(
    _sponsorVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sponsorVault(overrides?: CallOverrides): Promise<string>;

  xcall(
    _args: XCallArgsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

    addConnextion(
      _domain: PromiseOrValue<BigNumberish>,
      _connext: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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

    connextion(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    domain(overrides?: CallOverrides): Promise<number>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    forceReceiveLocal(
      _params: CallParamsStruct,
      _amount: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _canonicalId: PromiseOrValue<BytesLike>,
      _canonicalDomain: PromiseOrValue<BigNumberish>,
      _originSender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    promiseRouter(overrides?: CallOverrides): Promise<string>;

    reconciledTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    relayerFees(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeSequencer(
      _sequencer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    routedTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    setPromiseRouter(
      _promiseRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSponsorVault(
      _sponsorVault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    sponsorVault(overrides?: CallOverrides): Promise<string>;

    xcall(_args: XCallArgsStruct, overrides?: CallOverrides): Promise<string>;
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

    "ConnextionAdded(uint32,address,address)"(
      domain?: null,
      connext?: null,
      caller?: null
    ): ConnextionAddedEventFilter;
    ConnextionAdded(
      domain?: null,
      connext?: null,
      caller?: null
    ): ConnextionAddedEventFilter;

    "Executed(bytes32,address,tuple,address,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      to?: PromiseOrValue<string> | null,
      args?: null,
      asset?: null,
      amount?: null,
      caller?: null
    ): ExecutedEventFilter;
    Executed(
      transferId?: PromiseOrValue<BytesLike> | null,
      to?: PromiseOrValue<string> | null,
      args?: null,
      asset?: null,
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

    "ForcedReceiveLocal(bytes32,bytes32,uint32,uint256)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      canonicalId?: PromiseOrValue<BytesLike> | null,
      canonicalDomain?: null,
      amount?: null
    ): ForcedReceiveLocalEventFilter;
    ForcedReceiveLocal(
      transferId?: PromiseOrValue<BytesLike> | null,
      canonicalId?: PromiseOrValue<BytesLike> | null,
      canonicalDomain?: null,
      amount?: null
    ): ForcedReceiveLocalEventFilter;

    "PromiseRouterUpdated(address,address,address)"(
      oldRouter?: null,
      newRouter?: null,
      caller?: null
    ): PromiseRouterUpdatedEventFilter;
    PromiseRouterUpdated(
      oldRouter?: null,
      newRouter?: null,
      caller?: null
    ): PromiseRouterUpdatedEventFilter;

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

    "SponsorVaultUpdated(address,address,address)"(
      oldSponsorVault?: null,
      newSponsorVault?: null,
      caller?: null
    ): SponsorVaultUpdatedEventFilter;
    SponsorVaultUpdated(
      oldSponsorVault?: null,
      newSponsorVault?: null,
      caller?: null
    ): SponsorVaultUpdatedEventFilter;

    "TransferRelayerFeesUpdated(bytes32,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      relayerFee?: null,
      caller?: null
    ): TransferRelayerFeesUpdatedEventFilter;
    TransferRelayerFeesUpdated(
      transferId?: PromiseOrValue<BytesLike> | null,
      relayerFee?: null,
      caller?: null
    ): TransferRelayerFeesUpdatedEventFilter;

    "XCalled(bytes32,uint256,bytes32,tuple,address,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      nonce?: PromiseOrValue<BigNumberish> | null,
      messageHash?: PromiseOrValue<BytesLike> | null,
      xcallArgs?: null,
      bridgedAsset?: null,
      bridgedAmount?: null,
      caller?: null
    ): XCalledEventFilter;
    XCalled(
      transferId?: PromiseOrValue<BytesLike> | null,
      nonce?: PromiseOrValue<BigNumberish> | null,
      messageHash?: PromiseOrValue<BytesLike> | null,
      xcallArgs?: null,
      bridgedAsset?: null,
      bridgedAmount?: null,
      caller?: null
    ): XCalledEventFilter;
  };

  estimateGas: {
    AAVE_REFERRAL_CODE(overrides?: CallOverrides): Promise<BigNumber>;

    addConnextion(
      _domain: PromiseOrValue<BigNumberish>,
      _connext: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    connextion(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    domain(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forceReceiveLocal(
      _params: CallParamsStruct,
      _amount: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _canonicalId: PromiseOrValue<BytesLike>,
      _canonicalDomain: PromiseOrValue<BigNumberish>,
      _originSender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    promiseRouter(overrides?: CallOverrides): Promise<BigNumber>;

    reconciledTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relayerFees(
      _transferId: PromiseOrValue<BytesLike>,
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

    setPromiseRouter(
      _promiseRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSponsorVault(
      _sponsorVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sponsorVault(overrides?: CallOverrides): Promise<BigNumber>;

    xcall(
      _args: XCallArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AAVE_REFERRAL_CODE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addConnextion(
      _domain: PromiseOrValue<BigNumberish>,
      _connext: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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

    connextion(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      _args: ExecuteArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forceReceiveLocal(
      _params: CallParamsStruct,
      _amount: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _canonicalId: PromiseOrValue<BytesLike>,
      _canonicalDomain: PromiseOrValue<BigNumberish>,
      _originSender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    promiseRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reconciledTransfers(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relayerFees(
      _transferId: PromiseOrValue<BytesLike>,
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

    setPromiseRouter(
      _promiseRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSponsorVault(
      _sponsorVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sponsorVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    xcall(
      _args: XCallArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
