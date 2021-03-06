import {IPromisePendingRejectableCreator, MaybeError} from '@pashoo2/utils';

import {
  IJobPromise,
  IAsyncQueueConcurrent,
} from './async-queue-concurrent.types';

export const createJobPromise = <T, E extends MaybeError = void>(
  promisePendingRejectableCreator: IPromisePendingRejectableCreator<T, E>
): IJobPromise<T, E> => promisePendingRejectableCreator();

export const wrapAllMethodsWithAsyncQueue = <
  F extends Function,
  E extends MaybeError = void
>(
  target: F,
  asyncQueueCreator: (object: any) => IAsyncQueueConcurrent<void, E>,
  methodsNamesList?: string[]
): F => {
  const prototype = {...target.prototype};
  for (const propertyName of Object.keys(prototype)) {
    if (methodsNamesList && methodsNamesList.includes(propertyName)) {
      continue;
    }

    const descriptor = Object.getOwnPropertyDescriptor(prototype, propertyName);
    if (!descriptor) {
      continue;
    }

    const isMethod = descriptor.value instanceof Function;
    if (!isMethod) continue;

    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const job = await asyncQueueCreator(this).wait();
      try {
        return originalMethod.apply(this, args);
      } finally {
        job.done();
      }
    };

    Object.defineProperty(prototype, propertyName, descriptor);
  }
  Object.setPrototypeOf(target, prototype);
  return target;
};
