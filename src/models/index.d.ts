import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLeaveMessageData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeaveMessageData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLeaveMessageData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeaveMessageData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LeaveMessageData = LazyLoading extends LazyLoadingDisabled ? EagerLeaveMessageData : LazyLeaveMessageData

export declare const LeaveMessageData: (new (init: ModelInit<LeaveMessageData>) => LeaveMessageData) & {
  copyOf(source: LeaveMessageData, mutator: (draft: MutableModel<LeaveMessageData>) => MutableModel<LeaveMessageData> | void): LeaveMessageData;
}