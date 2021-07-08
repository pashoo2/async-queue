[@pashoo2/async-queue](../README.md) / [Exports](../modules.md) / ConcurrentAsyncQueue

# Class: ConcurrentAsyncQueue<T, E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |
| `E` | extends `MaybeError``void` |

## Hierarchy

- **`ConcurrentAsyncQueue`**

  ↳ [`ConcurrentAsyncQueueWithAutoExecution`](concurrentasyncqueuewithautoexecution.md)

## Implements

- `IAsyncQueueConcurrent`<`T`, `E`\>

## Table of contents

### Constructors

- [constructor](concurrentasyncqueue.md#constructor)

### Properties

- [\_isDestroying](concurrentasyncqueue.md#_isdestroying)
- [\_promisePendingRejectableCreator](concurrentasyncqueue.md#_promisependingrejectablecreator)
- [queue](concurrentasyncqueue.md#queue)

### Methods

- [\_addInQueue](concurrentasyncqueue.md#_addinqueue)
- [\_createResolverStep](concurrentasyncqueue.md#_createresolverstep)
- [\_createWorkPromiseResolver](concurrentasyncqueue.md#_createworkpromiseresolver)
- [\_getLastJobFromQueue](concurrentasyncqueue.md#_getlastjobfromqueue)
- [\_logIfErrorResult](concurrentasyncqueue.md#_logiferrorresult)
- [\_rejectAllPendingJobs](concurrentasyncqueue.md#_rejectallpendingjobs)
- [\_removePromiseFromQueue](concurrentasyncqueue.md#_removepromisefromqueue)
- [clearQueue](concurrentasyncqueue.md#clearqueue)
- [destroy](concurrentasyncqueue.md#destroy)
- [failIfDestroying](concurrentasyncqueue.md#failifdestroying)
- [setIsDestroying](concurrentasyncqueue.md#setisdestroying)
- [unsetIsDestroying](concurrentasyncqueue.md#unsetisdestroying)
- [wait](concurrentasyncqueue.md#wait)

## Constructors

### constructor

• **new ConcurrentAsyncQueue**<`T`, `E`\>(`_promisePendingRejectableCreator`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |
| `E` | extends `MaybeError``void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_promisePendingRejectableCreator` | `IPromisePendingRejectableCreator`<`T`, `E`\> |

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:16](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L16)

## Properties

### \_isDestroying

• `Private` **\_isDestroying**: `boolean` = `false`

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:16](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L16)

___

### \_promisePendingRejectableCreator

• `Protected` **\_promisePendingRejectableCreator**: `IPromisePendingRejectableCreator`<`T`, `E`\>

___

### queue

• `Private` **queue**: `IJobPromise`<`T`, `E`\>[] = `[]`

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:14](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L14)

## Methods

### \_addInQueue

▸ `Protected` **_addInQueue**(`jobPromise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jobPromise` | `IJobPromise`<`T`, `E`\> |

#### Returns

`void`

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

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:82](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L82)

___

### \_getLastJobFromQueue

▸ `Protected` **_getLastJobFromQueue**(): `undefined` \| `IJobPromise`<`T`, `E`\>

#### Returns

`undefined` \| `IJobPromise`<`T`, `E`\>

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

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:93](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L93)

___

### clearQueue

▸ `Protected` **clearQueue**(): `void`

#### Returns

`void`

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:101](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L101)

___

### destroy

▸ **destroy**(`err`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `E` |

#### Returns

`Promise`<`void`\>

#### Implementation of

IAsyncQueueConcurrent.destroy

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:44](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L44)

___

### failIfDestroying

▸ `Protected` **failIfDestroying**(): `void`

#### Returns

`void`

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:113](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L113)

___

### setIsDestroying

▸ `Protected` **setIsDestroying**(): `void`

#### Returns

`void`

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:105](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L105)

___

### unsetIsDestroying

▸ `Protected` **unsetIsDestroying**(): `void`

#### Returns

`void`

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:109](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L109)

___

### wait

▸ **wait**(): `Promise`<`IJobResolver`<`T`\>\>

#### Returns

`Promise`<`IJobResolver`<`T`\>\>

#### Implementation of

IAsyncQueueConcurrent.wait

#### Defined in

[async-queue-concurrent/async-queue-concurrent.ts:25](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.ts#L25)
