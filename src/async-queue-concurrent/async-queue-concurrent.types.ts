import {IPromisePendingRejectable, MaybeError} from '@pashoo2/utils';

export interface IJobResolveCallback<T> {
  (v: T): unknown;
}

export interface IJobResolver<T> {
  done: IJobResolveCallback<T>;
}

export type IJobPromise<T, E extends MaybeError> = IPromisePendingRejectable<
  T,
  E
>;

export interface IAsyncQueueConcurrent<T, E extends MaybeError> {
  /**
   * Wait till all previous jobs will be done
   *
   * @returns {Promise<IJobResolver>}
   * @memberof IAsyncQueueConcurrent
   */
  wait(): Promise<IJobResolver<T>>;
  /**
   * Destroy and fail all pending promise
   *
   * @param {E} err
   * @returns {Promise<void>}
   * @memberof IAsyncQueueConcurrent
   */
  destroy(err: E): Promise<void>;
}

/**
 * Helper mixin for simplicity making of classes
 * whose methods executed in async queue.
 *
 * @export
 * @interface IAsyncQueueConcurrentMixinDefault
 */
export interface IAsyncQueueConcurrentMixinDefault {
  _runAsJob<F extends () => any>(
    func: F,
    jobName: string,
    jobTimeout?: number
  ): Promise<ReturnType<F>>;
  _rejectAllPendingOperations(err: Error): Promise<void>;
}
