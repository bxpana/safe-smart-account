/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface SafeToL2MigrationInterface extends Interface {
  getFunction(
    nameOrSignature: "MIGRATION_SINGLETON" | "migrateFromV111" | "migrateToL2"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangedMasterCopy"
      | "SafeMultiSigTransaction"
      | "SafeSetup"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "MIGRATION_SINGLETON",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrateFromV111",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateToL2",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "MIGRATION_SINGLETON",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateFromV111",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateToL2",
    data: BytesLike
  ): Result;
}

export namespace ChangedMasterCopyEvent {
  export type InputTuple = [singleton: AddressLike];
  export type OutputTuple = [singleton: string];
  export interface OutputObject {
    singleton: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SafeMultiSigTransactionEvent {
  export type InputTuple = [
    to: AddressLike,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    safeTxGas: BigNumberish,
    baseGas: BigNumberish,
    gasPrice: BigNumberish,
    gasToken: AddressLike,
    refundReceiver: AddressLike,
    signatures: BytesLike,
    additionalInfo: BytesLike
  ];
  export type OutputTuple = [
    to: string,
    value: bigint,
    data: string,
    operation: bigint,
    safeTxGas: bigint,
    baseGas: bigint,
    gasPrice: bigint,
    gasToken: string,
    refundReceiver: string,
    signatures: string,
    additionalInfo: string
  ];
  export interface OutputObject {
    to: string;
    value: bigint;
    data: string;
    operation: bigint;
    safeTxGas: bigint;
    baseGas: bigint;
    gasPrice: bigint;
    gasToken: string;
    refundReceiver: string;
    signatures: string;
    additionalInfo: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SafeSetupEvent {
  export type InputTuple = [
    initiator: AddressLike,
    owners: AddressLike[],
    threshold: BigNumberish,
    initializer: AddressLike,
    fallbackHandler: AddressLike
  ];
  export type OutputTuple = [
    initiator: string,
    owners: string[],
    threshold: bigint,
    initializer: string,
    fallbackHandler: string
  ];
  export interface OutputObject {
    initiator: string;
    owners: string[];
    threshold: bigint;
    initializer: string;
    fallbackHandler: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SafeToL2Migration extends BaseContract {
  connect(runner?: ContractRunner | null): SafeToL2Migration;
  waitForDeployment(): Promise<this>;

  interface: SafeToL2MigrationInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  MIGRATION_SINGLETON: TypedContractMethod<[], [string], "view">;

  migrateFromV111: TypedContractMethod<
    [l2Singleton: AddressLike, fallbackHandler: AddressLike],
    [void],
    "nonpayable"
  >;

  migrateToL2: TypedContractMethod<
    [l2Singleton: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MIGRATION_SINGLETON"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "migrateFromV111"
  ): TypedContractMethod<
    [l2Singleton: AddressLike, fallbackHandler: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "migrateToL2"
  ): TypedContractMethod<[l2Singleton: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "ChangedMasterCopy"
  ): TypedContractEvent<
    ChangedMasterCopyEvent.InputTuple,
    ChangedMasterCopyEvent.OutputTuple,
    ChangedMasterCopyEvent.OutputObject
  >;
  getEvent(
    key: "SafeMultiSigTransaction"
  ): TypedContractEvent<
    SafeMultiSigTransactionEvent.InputTuple,
    SafeMultiSigTransactionEvent.OutputTuple,
    SafeMultiSigTransactionEvent.OutputObject
  >;
  getEvent(
    key: "SafeSetup"
  ): TypedContractEvent<
    SafeSetupEvent.InputTuple,
    SafeSetupEvent.OutputTuple,
    SafeSetupEvent.OutputObject
  >;

  filters: {
    "ChangedMasterCopy(address)": TypedContractEvent<
      ChangedMasterCopyEvent.InputTuple,
      ChangedMasterCopyEvent.OutputTuple,
      ChangedMasterCopyEvent.OutputObject
    >;
    ChangedMasterCopy: TypedContractEvent<
      ChangedMasterCopyEvent.InputTuple,
      ChangedMasterCopyEvent.OutputTuple,
      ChangedMasterCopyEvent.OutputObject
    >;

    "SafeMultiSigTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,bytes)": TypedContractEvent<
      SafeMultiSigTransactionEvent.InputTuple,
      SafeMultiSigTransactionEvent.OutputTuple,
      SafeMultiSigTransactionEvent.OutputObject
    >;
    SafeMultiSigTransaction: TypedContractEvent<
      SafeMultiSigTransactionEvent.InputTuple,
      SafeMultiSigTransactionEvent.OutputTuple,
      SafeMultiSigTransactionEvent.OutputObject
    >;

    "SafeSetup(address,address[],uint256,address,address)": TypedContractEvent<
      SafeSetupEvent.InputTuple,
      SafeSetupEvent.OutputTuple,
      SafeSetupEvent.OutputObject
    >;
    SafeSetup: TypedContractEvent<
      SafeSetupEvent.InputTuple,
      SafeSetupEvent.OutputTuple,
      SafeSetupEvent.OutputObject
    >;
  };
}