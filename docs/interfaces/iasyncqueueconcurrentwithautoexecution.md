[@pashoo2/async-queue](../README.md) / [Exports](../modules.md) / IAsyncQueueConcurrentWithAutoExecution

# Interface: IAsyncQueueConcurrentWithAutoExecution<T, E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `MaybeError` |

## Hierarchy

- `IAsyncQueueConcurrent`<`T`, `E`\>

  ↳ **`IAsyncQueueConcurrentWithAutoExecution`**

## Implemented by

- [`ConcurrentAsyncQueueWithAutoExecution`](../classes/concurrentasyncqueuewithautoexecution.md)

## Table of contents

### Methods

- [destroy](iasyncqueueconcurrentwithautoexecution.md#destroy)
- [executeQueued](iasyncqueueconcurrentwithautoexecution.md#executequeued)
- [wait](iasyncqueueconcurrentwithautoexecution.md#wait)

## Methods

### destroy

▸ **destroy**(`err`): `Promise`<`void`\>

Destroy and fail all pending promise

**`memberof`** IAsyncQueueConcurrent

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `E` |

#### Returns

`Promise`<`void`\>

#### Inherited from

IAsyncQueueConcurrent.destroy

#### Defined in

[async-queue-concurrent/async-queue-concurrent.types.ts:31](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.types.ts#L31)

___

### executeQueued

▸ **executeQueued**<`TE`\>(`jobCreator`, `timeoutMs?`, `jobName?`): `Promise`<`TE`\>

Executes a promise returned by the job creator function
when the queue will come.

**`memberof`** IAsyncQueueConcurrentWithAutoExecution

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TE` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `jobCreator` | () => `Promise`<`TE`\> |
| `timeoutMs?` | `number` |
| `jobName?` | `string` |

#### Returns

`Promise`<`TE`\>

#### Defined in

[async-queue-concurrent/async-queue-concurrent-extended/async-queue-concurrent-with-auto-execution/async-queue-concurrent-with-auto-execution.types.ts:16](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent-extended/async-queue-concurrent-with-auto-execution/async-queue-concurrent-with-auto-execution.types.ts#L16)

___

### wait

▸ **wait**(): `Promise`<`IJobResolver`<`T`\>\>

Wait till all previous jobs will be done

**`memberof`** IAsyncQueueConcurrent

#### Returns

`Promise`<`IJobResolver`<`T`\>\>

#### Inherited from

IAsyncQueueConcurrent.wait

#### Defined in

[async-queue-concurrent/async-queue-concurrent.types.ts:23](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent.types.ts#L23)
