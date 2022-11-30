/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface ProposedOwnableFacetInterface extends utils.Interface {
  functions: {
    "acceptProposedOwner()": FunctionFragment;
    "assignRoleAdmin(address)": FunctionFragment;
    "assignRoleRouterAdmin(address)": FunctionFragment;
    "assignRoleWatcher(address)": FunctionFragment;
    "delay()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposeRouterAllowlistRemoval()": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "queryRole(address)": FunctionFragment;
    "removeRouterAllowlist()": FunctionFragment;
    "revokeRole(address)": FunctionFragment;
    "routerAllowlistRemoved()": FunctionFragment;
    "routerAllowlistTimestamp()": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptProposedOwner"
      | "assignRoleAdmin"
      | "assignRoleRouterAdmin"
      | "assignRoleWatcher"
      | "delay"
      | "owner"
      | "pause"
      | "proposeNewOwner"
      | "proposeRouterAllowlistRemoval"
      | "proposed"
      | "proposedTimestamp"
      | "queryRole"
      | "removeRouterAllowlist"
      | "revokeRole"
      | "routerAllowlistRemoved"
      | "routerAllowlistTimestamp"
      | "unpause"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assignRoleAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assignRoleRouterAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assignRoleWatcher",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeRouterAllowlistRemoval",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queryRole",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRouterAllowlist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "routerAllowlistRemoved",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "routerAllowlistTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignRoleRouterAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignRoleWatcher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeRouterAllowlistRemoval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queryRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeRouterAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routerAllowlistRemoved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routerAllowlistTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "AssignRoleAdmin(address)": EventFragment;
    "AssignRoleRouter(address)": EventFragment;
    "AssignRoleWatcher(address)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused()": EventFragment;
    "RevokeRole(address,uint8)": EventFragment;
    "RouterAllowlistRemovalProposed(uint256)": EventFragment;
    "RouterAllowlistRemoved(bool)": EventFragment;
    "Unpaused()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssignRoleAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssignRoleRouter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssignRoleWatcher"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokeRole"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RouterAllowlistRemovalProposed"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterAllowlistRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface AssignRoleAdminEventObject {
  admin: string;
}
export type AssignRoleAdminEvent = TypedEvent<
  [string],
  AssignRoleAdminEventObject
>;

export type AssignRoleAdminEventFilter = TypedEventFilter<AssignRoleAdminEvent>;

export interface AssignRoleRouterEventObject {
  router: string;
}
export type AssignRoleRouterEvent = TypedEvent<
  [string],
  AssignRoleRouterEventObject
>;

export type AssignRoleRouterEventFilter =
  TypedEventFilter<AssignRoleRouterEvent>;

export interface AssignRoleWatcherEventObject {
  watcher: string;
}
export type AssignRoleWatcherEvent = TypedEvent<
  [string],
  AssignRoleWatcherEventObject
>;

export type AssignRoleWatcherEventFilter =
  TypedEventFilter<AssignRoleWatcherEvent>;

export interface OwnershipProposedEventObject {
  proposedOwner: string;
}
export type OwnershipProposedEvent = TypedEvent<
  [string],
  OwnershipProposedEventObject
>;

export type OwnershipProposedEventFilter =
  TypedEventFilter<OwnershipProposedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {}
export type PausedEvent = TypedEvent<[], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RevokeRoleEventObject {
  revokedAddress: string;
  revokedRole: number;
}
export type RevokeRoleEvent = TypedEvent<
  [string, number],
  RevokeRoleEventObject
>;

export type RevokeRoleEventFilter = TypedEventFilter<RevokeRoleEvent>;

export interface RouterAllowlistRemovalProposedEventObject {
  timestamp: BigNumber;
}
export type RouterAllowlistRemovalProposedEvent = TypedEvent<
  [BigNumber],
  RouterAllowlistRemovalProposedEventObject
>;

export type RouterAllowlistRemovalProposedEventFilter =
  TypedEventFilter<RouterAllowlistRemovalProposedEvent>;

export interface RouterAllowlistRemovedEventObject {
  renounced: boolean;
}
export type RouterAllowlistRemovedEvent = TypedEvent<
  [boolean],
  RouterAllowlistRemovedEventObject
>;

export type RouterAllowlistRemovedEventFilter =
  TypedEventFilter<RouterAllowlistRemovedEvent>;

export interface UnpausedEventObject {}
export type UnpausedEvent = TypedEvent<[], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface ProposedOwnableFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProposedOwnableFacetInterface;

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
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assignRoleAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assignRoleRouterAdmin(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assignRoleWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeRouterAllowlistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    queryRole(
      _role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    removeRouterAllowlist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      _revoke: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    routerAllowlistRemoved(overrides?: CallOverrides): Promise<[boolean]>;

    routerAllowlistTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assignRoleAdmin(
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assignRoleRouterAdmin(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assignRoleWatcher(
    _watcher: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeRouterAllowlistRemoval(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  queryRole(
    _role: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  removeRouterAllowlist(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    _revoke: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  routerAllowlistRemoved(overrides?: CallOverrides): Promise<boolean>;

  routerAllowlistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    assignRoleAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    assignRoleRouterAdmin(
      _router: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    assignRoleWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposeRouterAllowlistRemoval(overrides?: CallOverrides): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    queryRole(
      _role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    removeRouterAllowlist(overrides?: CallOverrides): Promise<void>;

    revokeRole(
      _revoke: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    routerAllowlistRemoved(overrides?: CallOverrides): Promise<boolean>;

    routerAllowlistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AssignRoleAdmin(address)"(admin?: null): AssignRoleAdminEventFilter;
    AssignRoleAdmin(admin?: null): AssignRoleAdminEventFilter;

    "AssignRoleRouter(address)"(router?: null): AssignRoleRouterEventFilter;
    AssignRoleRouter(router?: null): AssignRoleRouterEventFilter;

    "AssignRoleWatcher(address)"(watcher?: null): AssignRoleWatcherEventFilter;
    AssignRoleWatcher(watcher?: null): AssignRoleWatcherEventFilter;

    "OwnershipProposed(address)"(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;
    OwnershipProposed(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused()"(): PausedEventFilter;
    Paused(): PausedEventFilter;

    "RevokeRole(address,uint8)"(
      revokedAddress?: null,
      revokedRole?: null
    ): RevokeRoleEventFilter;
    RevokeRole(
      revokedAddress?: null,
      revokedRole?: null
    ): RevokeRoleEventFilter;

    "RouterAllowlistRemovalProposed(uint256)"(
      timestamp?: null
    ): RouterAllowlistRemovalProposedEventFilter;
    RouterAllowlistRemovalProposed(
      timestamp?: null
    ): RouterAllowlistRemovalProposedEventFilter;

    "RouterAllowlistRemoved(bool)"(
      renounced?: null
    ): RouterAllowlistRemovedEventFilter;
    RouterAllowlistRemoved(renounced?: null): RouterAllowlistRemovedEventFilter;

    "Unpaused()"(): UnpausedEventFilter;
    Unpaused(): UnpausedEventFilter;
  };

  estimateGas: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assignRoleAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assignRoleRouterAdmin(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assignRoleWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeRouterAllowlistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    queryRole(
      _role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeRouterAllowlist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      _revoke: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    routerAllowlistRemoved(overrides?: CallOverrides): Promise<BigNumber>;

    routerAllowlistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assignRoleAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assignRoleRouterAdmin(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assignRoleWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeRouterAllowlistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryRole(
      _role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeRouterAllowlist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      _revoke: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    routerAllowlistRemoved(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    routerAllowlistTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
