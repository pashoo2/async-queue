[@pashoo2/async-queue](../README.md) / [Exports](../modules.md) / IAsyncQueueBaseClass

# Interface: IAsyncQueueBaseClass

## Implemented by

- [`TAsyncQueueBaseClass`](../classes/tasyncqueuebaseclass.md)

## Table of contents

### Methods

- [do](iasyncqueuebaseclass.md#do)

## Methods

### do

▸ **do**<`T`\>(`pending`): `Promise`<`Error` \| (`Error` \| `T`)[]\>

resolve promises provided in queue

**`memberof`** IAsyncQueueBaseClass

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pending` | [`TAsyncQueueBaseClassPromiseProviderBatch`](../modules.md#tasyncqueuebaseclasspromiseproviderbatch)<`T`\> |

#### Returns

`Promise`<`Error` \| (`Error` \| `T`)[]\>

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:43](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L43)

▸ **do**<`T`\>(`pending`): `Promise`<`Error` \| `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pending` | [`TAsyncQueueBaseClassPromiseProvider`](../modules.md#tasyncqueuebaseclasspromiseprovider)<`T`\> |

#### Returns

`Promise`<`Error` \| `T`\>

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:46](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L46)
