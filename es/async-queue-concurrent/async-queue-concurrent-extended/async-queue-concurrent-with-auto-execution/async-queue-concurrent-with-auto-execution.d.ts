import { MaybeError } from '@pashoo2/utils';
import { ConcurrentAsyncQueue } from '../../async-queue-concurrent';
import { IAsyncQueueConcurrentWithAutoExecution } from './async-queue-concurrent-with-auto-execution.types';
export declare class ConcurrentAsyncQueueWithAutoExecution<T = void, E extends MaybeError = void> extends ConcurrentAsyncQueue<T, E> implements IAsyncQueueConcurrentWithAutoExecution<T, E> {
    executeQueued<TE extends T = T>(jobCreator: () => Promise<TE>, timeoutMs?: number, jobName?: string): Promise<TE>;
}
