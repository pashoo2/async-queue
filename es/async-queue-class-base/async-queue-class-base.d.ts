import { TAsyncQueueBaseClassPromiseProviderPending, TAsyncQueueBaseClassPromiseProvider } from './async-queue-class-base.types';
import { TAsyncQueueBaseClass, IAsyncQueueBaseClassOptions } from './async-queue-class-base.types';
import { getRun } from './async-queue-class-base.utils';
import { TAsyncQueueBaseClassPromiseProviderBatch } from './async-queue-class-base.types';
export declare class AsyncQueueClassBase extends TAsyncQueueBaseClass {
    protected queue: TAsyncQueueBaseClassPromiseProvider<any>[];
    protected batch: Promise<any[]> | void;
    protected runPromiseProvider?: ReturnType<typeof getRun>;
    constructor(options?: Partial<IAsyncQueueBaseClassOptions>);
    do: <T>(promiseProvider: TAsyncQueueBaseClassPromiseProviderPending<T>) => Promise<Error | T | (T extends any[] ? (Error | T)[] : never)>;
    protected createBatch(): Promise<any[]>;
    protected start: () => Promise<void>;
    protected isBatch<T>(promiseProvider: any): promiseProvider is TAsyncQueueBaseClassPromiseProviderBatch<T>;
    protected createPromise<T>(promiseProvider: any): Promise<T | Error>;
    protected createPromise<T>(promiseProvider: any[]): Promise<Array<T | Error>>;
}
