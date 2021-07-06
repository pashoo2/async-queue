import {IPromisePendingRejectableCreator, MaybeError} from '@pashoo2/utils';

import {
  IAsyncQueueConcurrent,
  IJobPromise,
  IJobResolver,
  IJobResolveCallback,
} from './async-queue-concurrent.types';
import {createJobPromise} from './async-queue-concurrent.utils';

export class ConcurrentAsyncQueue<T = void, E extends MaybeError = void>
  implements IAsyncQueueConcurrent<T, E>
{
  private queue: Array<IJobPromise<T, E>> = [];

  private _isDestroying = false;

  constructor(
    protected _promisePendingRejectableCreator: IPromisePendingRejectableCreator<
      T,
      E
    >
  ) {}

  public wait = (): Promise<IJobResolver<T>> => {
    this.failIfDestroying();

    const lastWorkPromise = this._getLastJobFromQueue();
    const jobPromise = createJobPromise<T, E>(
      this._promisePendingRejectableCreator
    );
    const promiseToWaitBeforeRunJob = (lastWorkPromise ||
      Promise.resolve()) as IJobPromise<T, E>;

    this._addInQueue(jobPromise);

    const jobResolver = this._createResolverStep(
      this._createWorkPromiseResolver(jobPromise.resolve, jobPromise)
    );

    return promiseToWaitBeforeRunJob.then(jobResolver, jobResolver);
  };

  public destroy = async (err: E): Promise<void> => {
    this.failIfDestroying();
    try {
      this.setIsDestroying();
      await this._rejectAllPendingJobs(err);
      this.clearQueue();
    } finally {
      this.unsetIsDestroying();
    }
  };

  protected _getLastJobFromQueue(): IJobPromise<T, E> | undefined {
    const queue = this.queue;
    return queue.length ? queue[queue.length - 1] : undefined;
  }

  protected _addInQueue = (jobPromise: IJobPromise<T, E>) => {
    this.queue = [...this.queue, jobPromise];
  };

  protected _createResolverStep = (
    resolver: IJobResolveCallback<T>
  ): (() => IJobResolver<T>) => {
    return (resultPrevPromise?: any) => {
      this._logIfErrorResult(resultPrevPromise);
      return {
        done: resolver,
      };
    };
  };

  protected _logIfErrorResult(error: any) {
    if (error instanceof Error) {
      console.error('Job failed');
      console.error(error);
    }
  }

  protected _createWorkPromiseResolver = (
    workPromiseResolve: IJobResolveCallback<T>,
    workPromise: IJobPromise<T, E>
  ): ((v: T) => void) => {
    return (v: T): void => {
      this.failIfDestroying();
      this._removePromiseFromQueue(workPromise);
      workPromiseResolve(v);
    };
  };

  protected _removePromiseFromQueue = (workPromise: IJobPromise<T, E>) => {
    this.queue = this.queue.filter(item => item !== workPromise);
  };

  protected _rejectAllPendingJobs = (err: E) => {
    return Promise.all(this.queue.map(job => job.reject(err)));
  };

  protected clearQueue = () => {
    this.queue = [];
  };

  protected setIsDestroying() {
    this._isDestroying = true;
  }

  protected unsetIsDestroying() {
    this._isDestroying = false;
  }

  protected failIfDestroying() {
    if (this._isDestroying) {
      throw new Error('The instance is destroying');
    }
  }
}
