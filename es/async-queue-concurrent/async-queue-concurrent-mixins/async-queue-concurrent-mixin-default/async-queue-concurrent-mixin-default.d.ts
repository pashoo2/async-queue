import { ConstructorType } from '@pashoo2/utils';
import { IAsyncQueueConcurrentMixinDefault } from '../../async-queue-concurrent.types';
export declare function asyncQueueConcurrentMixinDefault<M extends ConstructorType<any>>(BaseClass: M, jobTimeoutDefault: number): M & ConstructorType<IAsyncQueueConcurrentMixinDefault>;
