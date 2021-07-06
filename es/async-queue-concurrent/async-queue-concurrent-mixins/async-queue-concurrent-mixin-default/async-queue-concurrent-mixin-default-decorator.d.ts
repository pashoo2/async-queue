import { ConstructorType } from '@pashoo2/utils';
import { IAsyncQueueConcurrentMixinDefault } from '../../async-queue-concurrent.types';
export declare function decoratorAsyncQueueConcurentMixinDefault<M extends ConstructorType<any>>(jobTimeoutDefault: number, ...methodsToWrapInAsync: Array<keyof InstanceType<M>>): (BaseClass: M) => M & ConstructorType<IAsyncQueueConcurrentMixinDefault>;
