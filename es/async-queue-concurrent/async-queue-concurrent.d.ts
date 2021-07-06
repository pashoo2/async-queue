import { IPromisePendingRejectableCreator, MaybeError } from '@pashoo2/utils';
import { IAsyncQueueConcurrent, IJobPromise, IJobResolver, IJobResolveCallback } from './async-queue-concurrent.types';
export declare class ConcurrentAsyncQueue<T = void, E extends MaybeError = void> implements IAsyncQueueConcurrent<T, E> {
    protected _promisePendingRejectableCreator: IPromisePendingRejectableCreator<T, E>;
    private queue;
    private _isDestroying;
    constructor(_promisePendingRejectableCreator: IPromisePendingRejectableCreator<T, E>);
    wait: () => Promise<IJobResolver<T>>;
    destroy: (err: E) => Promise<void>;
    protected _getLastJobFromQueue(): IJobPromise<T, E> | undefined;
    protected _addInQueue: (jobPromise: IJobPromise<T, E>) => void;
    protected _createResolverStep: (resolver: IJobResolveCallback<T>) => (() => IJobResolver<T>);
    protected _logIfErrorResult(error: any): void;
    protected _createWorkPromiseResolver: (workPromiseResolve: IJobResolveCallback<T>, workPromise: IJobPromise<T, E>) => (v: T) => void;
    protected _removePromiseFromQueue: (workPromise: IJobPromise<T, E>) => void;
    protected _rejectAllPendingJobs: (err: E) => Promise<unknown[]>;
    protected clearQueue: () => void;
    protected setIsDestroying(): void;
    protected unsetIsDestroying(): void;
    protected failIfDestroying(): void;
}
