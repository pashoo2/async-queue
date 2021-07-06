import { MaybeError } from '@pashoo2/utils';
import { IAsyncQueueConcurrent } from '../../async-queue-concurrent.types';
export interface IAsyncQueueConcurrentWithAutoExecution<T, E extends MaybeError> extends IAsyncQueueConcurrent<T, E> {
    /**
     * Executes a promise returned by the job creator function
     * when the queue will come.
     *
     * @template TE
     * @param {() => Promise<TE>} jobCreator
     * @returns {Promise<TE>}
     * @memberof IAsyncQueueConcurrentWithAutoExecution
     */
    executeQueued<TE extends T = T>(jobCreator: () => Promise<TE>, timeoutMs?: number, jobName?: string): Promise<TE>;
}
