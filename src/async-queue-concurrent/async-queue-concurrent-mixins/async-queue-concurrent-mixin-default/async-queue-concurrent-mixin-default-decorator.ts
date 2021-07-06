import {ConstructorType} from '@pashoo2/utils';

import {asyncQueueConcurrentMixinDefault} from './async-queue-concurrent-mixin-default';
import {IAsyncQueueConcurrentMixinDefault} from '../../async-queue-concurrent.types';

export function decoratorAsyncQueueConcurentMixinDefault<
  M extends ConstructorType<any>
>(
  jobTimeoutDefault: number,
  ...methodsToWrapInAsync: Array<keyof InstanceType<M>>
) {
  function assignQueuedMethods(
    inst: InstanceType<M & ConstructorType<IAsyncQueueConcurrentMixinDefault>>
  ) {
    methodsToWrapInAsync.forEach(methodName => {
      const origin = inst[methodName];
      if (typeof origin === 'function') {
        inst[methodName] = (
          ...args: Parameters<
            InstanceType<
              M & ConstructorType<IAsyncQueueConcurrentMixinDefault>
            >[typeof methodName]
          >
        ) => {
          return (inst as IAsyncQueueConcurrentMixinDefault)._runAsJob(
            () => origin.apply(inst, args),
            String(methodName)
          );
        };
      }
    });
  }
  return function decorate(
    BaseClass: M
  ): M & ConstructorType<IAsyncQueueConcurrentMixinDefault> {
    return class extends asyncQueueConcurrentMixinDefault<M>(
      BaseClass,
      jobTimeoutDefault
    ) {
      constructor(...args: unknown[]) {
        super(...args);
        assignQueuedMethods(
          this as InstanceType<
            M & ConstructorType<IAsyncQueueConcurrentMixinDefault>
          >
        );
      }
    };
  };
}
