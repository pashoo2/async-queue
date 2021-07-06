import { IPromisePendingRejectableCreator, MaybeError } from '@pashoo2/utils';
import { IJobPromise, IAsyncQueueConcurrent } from './async-queue-concurrent.types';
export declare const createJobPromise: <T, E extends MaybeError = void>(promisePendingRejectableCreator: IPromisePendingRejectableCreator<T, E>) => IJobPromise<T, E>;
export declare const wrapAllMethodsWithAsyncQueue: <F extends Function, E extends MaybeError = void>(target: F, asyncQueueCreator: (object: any) => IAsyncQueueConcurrent<void, E>, methodsNamesList?: string[] | undefined) => F;
