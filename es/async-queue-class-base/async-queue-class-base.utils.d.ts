import { TAsyncQueueBaseClassPromiseProvider } from './async-queue-class-base.types';
export declare const getRun: (timeoutMs: number) => <T>(promiseProvider: TAsyncQueueBaseClassPromiseProvider<T>) => Promise<Error | T>;
