[@pashoo2/async-queue](../README.md) / [Exports](../modules.md) / ConcurrentAsyncQueueWithAutoExecution

# Class: ConcurrentAsyncQueueWithAutoExecution<T, E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |
| `E` | extends `MaybeError``void` |

## Hierarchy

- [`ConcurrentAsyncQueue`](concurrentasyncqueue.md)<`T`, `E`\>

  ↳ **`ConcurrentAsyncQueueWithAutoExecution`**

## Implements

- [`IAsyncQueueConcurrentWithAutoExecution`](../interfaces/iasyncqueueconcurrentwithautoexecution.md)<`T`, `E`\>

## Table of contents

### Constructors

- [constructor](concurrentasyncqueuewithautoexecution.md#constructor)

### Properties

- [\_promisePendingRejectableCreator](concurrentasyncqueuewithautoexecution.md#_promisependingrejectablecreator)

### Methods

- [\_addInQueue](concurrentasyncqueuewithautoexecution.md#_addinqueue)
- [\_createResolverStep](concurrentasyncqueuewithautoexecution.md#_createresolverstep)
- [\_createWorkPromiseResolver](concurrentasyncqueuewithautoexecution.md#_createworkpromiseresolver)
- [\_getLastJobFromQueue](concurrentasyncqueuewithautoexecution.md#_getlastjobfromqueue)
- [\_logIfErrorResult](concurrentasyncqueuewithautoexecution.md#_logiferrorresult)
- [\_rejectAllPendingJobs](concurrentasyncqueuewithautoexecution.md#_rejectallpendingjobs)
- [\_removePromiseFromQueue](concurrentasyncqueuewithautoexecution.md#_removepromisefromqueue)
- [clearQueue](concurrentasyncqueuewithautoexecution.md#clearqueue)
- [destroy](concurrentasyncqueuewithautoexecution.md#destroy)
- [executeQueued](concurrentasyncqueuewithautoexecution.md#executequeued)
- [failIfDestroying](concurrentasyncqueuewithautoexecution.md#failifdestroying)
- [setIsDestroying](concurrentasyncqueuewithautoexecution.md#setisdestroying)
- [unsetIsDestroying](concurrentasyncqueuewithautoexecution.md#unsetisdestroying)
- [wait](concurrentasyncqueuewithautoexecution.md#wait)

## Constructors

### constructor

• **new ConcurrentAsyncQueueWithAutoExecution**<`T`, `E`\>(`_promisePendingRejectableCreator`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |
| `E` | extends `MaybeError``void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_promisePendingRejectableCreator` | `IPromisePendingRejectableCreator`<`T`, `E`\> |

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[constructor](concurrentasyncqueue.md#constructor)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:16](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L16)

## Properties

### \_promisePendingRejectableCreator

• `Protected` **\_promisePendingRejectableCreator**: `IPromisePendingRejectableCreator`<`T`, `E`\>

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_promisePendingRejectableCreator](concurrentasyncqueue.md#_promisependingrejectablecreator)

## Methods

### \_addInQueue

▸ `Protected` **_addInQueue**(`jobPromise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jobPromise` | `IJobPromise`<`T`, `E`\> |

#### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_addInQueue](concurrentasyncqueue.md#_addinqueue)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:60](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L60)

___

### \_createResolverStep

▸ `Protected` **_createResolverStep**(`resolver`): () => `IJobResolver`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolver` | `IJobResolveCallback`<`T`\> |

#### Returns

`fn`

▸ (): `IJobResolver`<`T`\>

##### Returns

`IJobResolver`<`T`\>

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_createResolverStep](concurrentasyncqueue.md#_createresolverstep)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:64](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L64)

___

### \_createWorkPromiseResolver

▸ `Protected` **_createWorkPromiseResolver**(`workPromiseResolve`, `workPromise`): (`v`: `T`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workPromiseResolve` | `IJobResolveCallback`<`T`\> |
| `workPromise` | `IJobPromise`<`T`, `E`\> |

#### Returns

`fn`

▸ (`v`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

##### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_createWorkPromiseResolver](concurrentasyncqueue.md#_createworkpromiseresolver)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:82](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L82)

___

### \_getLastJobFromQueue

▸ `Protected` **_getLastJobFromQueue**(): `undefined` \| `IJobPromise`<`T`, `E`\>

#### Returns

`undefined` \| `IJobPromise`<`T`, `E`\>

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_getLastJobFromQueue](concurrentasyncqueue.md#_getlastjobfromqueue)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:55](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L55)

___

### \_logIfErrorResult

▸ `Protected` **_logIfErrorResult**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_logIfErrorResult](concurrentasyncqueue.md#_logiferrorresult)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:75](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L75)

___

### \_rejectAllPendingJobs

▸ `Protected` **_rejectAllPendingJobs**(`err`): `Promise`<`unknown`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `E` |

#### Returns

`Promise`<`unknown`[]\>

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_rejectAllPendingJobs](concurrentasyncqueue.md#_rejectallpendingjobs)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:97](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L97)

___

### \_removePromiseFromQueue

▸ `Protected` **_removePromiseFromQueue**(`workPromise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workPromise` | `IJobPromise`<`T`, `E`\> |

#### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[_removePromiseFromQueue](concurrentasyncqueue.md#_removepromisefromqueue)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:93](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L93)

___

### clearQueue

▸ `Protected` **clearQueue**(): `void`

#### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[clearQueue](concurrentasyncqueue.md#clearqueue)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:101](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L101)

___

### destroy

▸ **destroy**(`err`): `Promise`<`void`\>

Destroy and fail all pending promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `E` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IAsyncQueueConcurrentWithAutoExecution](../interfaces/iasyncqueueconcurrentwithautoexecution.md).[destroy](../interfaces/iasyncqueueconcurrentwithautoexecution.md#destroy)

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[destroy](concurrentasyncqueue.md#destroy)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:44](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L44)

___

### executeQueued

▸ **executeQueued**<`TE`\>(`jobCreator`, `timeoutMs?`, `jobName?`): `Promise`<`TE`\>

Executes a promise returned by the job creator function
when the queue will come.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TE` | `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `jobCreator` | () => `Promise`<`TE`\> | `undefined` |
| `timeoutMs` | `number` | `1000` |
| `jobName?` | `string` | `undefined` |

#### Returns

`Promise`<`TE`\>

#### Implementation of

[IAsyncQueueConcurrentWithAutoExecution](../interfaces/iasyncqueueconcurrentwithautoexecution.md).[executeQueued](../interfaces/iasyncqueueconcurrentwithautoexecution.md#executequeued)

#### Defined in

[async-queue-concurrent/async-queue-concurrent-extended/async-queue-concurrent-with-auto-execution/async-queue-concurrent-with-auto-execution.ts:13](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent-extended/async-queue-concurrent-with-auto-execution/async-queue-concurrent-with-auto-execution.ts#L13)

___

### failIfDestroying

▸ `Protected` **failIfDestroying**(): `void`

#### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[failIfDestroying](concurrentasyncqueue.md#failifdestroying)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:113](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L113)

___

### setIsDestroying

▸ `Protected` **setIsDestroying**(): `void`

#### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[setIsDestroying](concurrentasyncqueue.md#setisdestroying)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:105](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L105)

___

### unsetIsDestroying

▸ `Protected` **unsetIsDestroying**(): `void`

#### Returns

`void`

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[unsetIsDestroying](concurrentasyncqueue.md#unsetisdestroying)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:109](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L109)

___

### wait

▸ **wait**(): `Promise`<`IJobResolver`<`T`\>\>

Wait till all previous jobs will be done

#### Returns

`Promise`<`IJobResolver`<`T`\>\>

#### Implementation of

[IAsyncQueueConcurrentWithAutoExecution](../interfaces/iasyncqueueconcurrentwithautoexecution.md).[wait](../interfaces/iasyncqueueconcurrentwithautoexecution.md#wait)

#### Inherited from

[ConcurrentAsyncQueue](concurrentasyncqueue.md).[wait](concurrentasyncqueue.md#wait)

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:25](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L25)
