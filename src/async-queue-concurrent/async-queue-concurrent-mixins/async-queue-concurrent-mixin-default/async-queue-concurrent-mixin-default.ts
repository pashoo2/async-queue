import {ConstructorType, createPromisePendingRejectable} from '@pashoo2/utils';

import {IAsyncQueueConcurrentMixinDefault} from '../../async-queue-concurrent.types';
import {IAsyncQueueConcurrentWithAutoExecution} from '../../async-queue-concurrent-extended/async-queue-concurrent-with-auto-execution/async-queue-concurrent-with-auto-execution.types';
import {ConcurrentAsyncQueueWithAutoExecution} from '../../async-queue-concurrent-extended/async-queue-concurrent-with-auto-execution/async-queue-concurrent-with-auto-execution';

export function asyncQueueConcurrentMixinDefault<
  M extends ConstructorType<any>
>(
  BaseClass: M,
  jobTimeoutDefault: number
): M & ConstructorType<IAsyncQueueConcurrentMixinDefault> {
  class Mixin extends BaseClass {
    /**
     * All async operations with the database, excluding database
     * close and open, should use this queue.
     *
     * @protected
     * @memberof SwarmStoreConnectorOrbitDBDatabase
     */
    private __asyncOperationsQueue:
      | IAsyncQueueConcurrentWithAutoExecution<void, Error>
      | undefined;

    public async _runAsJob<F extends () => any>(
      func: F,
      jobName: string,
      jobTimeout: number = jobTimeoutDefault
    ): Promise<ReturnType<F>> {
      return await this._getAsyncOperationsQueue().executeQueued(
        func,
        jobTimeout,
        jobName
      );
    }

    public _rejectAllPendingOperations(err: Error): Promise<void> {
      return this._getAsyncOperationsQueue().destroy(err);
    }

    protected _initializeAsyncQueue() {
      this.__asyncOperationsQueue = new ConcurrentAsyncQueueWithAutoExecution<
        void,
        Error
      >(createPromisePendingRejectable);
    }

    protected _getAsyncOperationsQueue(): IAsyncQueueConcurrentWithAutoExecution<
      void,
      Error
    > {
      if (!this.__asyncOperationsQueue) {
        this._initializeAsyncQueue();
      }
      if (!this.__asyncOperationsQueue) {
        throw new Error('Failed to initialize the async queue instance');
      }
      return this.__asyncOperationsQueue;
    }
  }
  Object.defineProperty(Mixin, 'name', {
    value: `${BaseClass.name}Queued`,
    configurable: false,
    writable: false,
    enumerable: false,
  });
  return Mixin;
}
