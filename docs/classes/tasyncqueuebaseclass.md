[@pashoo2/async-queue](../README.md) / [Exports](../modules.md) / TAsyncQueueBaseClass

# Class: TAsyncQueueBaseClass

## Hierarchy

- **`TAsyncQueueBaseClass`**

  ↳ [`AsyncQueueClassBase`](asyncqueueclassbase.md)

## Implements

- [`IAsyncQueueBaseClass`](../interfaces/iasyncqueuebaseclass.md)

## Table of contents

### Constructors

- [constructor](tasyncqueuebaseclass.md#constructor)

### Properties

- [batch](tasyncqueuebaseclass.md#batch)
- [options](tasyncqueuebaseclass.md#options)
- [queue](tasyncqueuebaseclass.md#queue)

### Methods

- [do](tasyncqueuebaseclass.md#do)

## Constructors

### constructor

• **new TAsyncQueueBaseClass**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IAsyncQueueBaseClassOptions`](../interfaces/iasyncqueuebaseclassoptions.md) |

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:68](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L68)

## Properties

### batch

• `Protected` `Abstract` **batch**: `void` \| `Promise`<`any`[]\>

the currently executing batch of a promises

**`abstract`**

**`memberof`** TAsyncQueueBaseClass

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:68](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L68)

___

### options

• `Protected` **options**: [`IAsyncQueueBaseClassOptions`](../interfaces/iasyncqueuebaseclassoptions.md)

___

### queue

• `Protected` `Abstract` **queue**: [`TAsyncQueueBaseClassPromiseProvider`](../modules.md#tasyncqueuebaseclasspromiseprovider)<`any`\>[]

queue of promises pending

**`abstract`**

**`memberof`** TAsyncQueueBaseClass

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:58](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L58)

## Methods

### do

▸ `Abstract` **do**<`T`\>(`pending`): `Promise`<`Error` \| `T` \| (`Error` \| `T`)[]\>

resolve promises provided in queue

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pending` | [`TAsyncQueueBaseClassPromiseProviderPending`](../modules.md#tasyncqueuebaseclasspromiseproviderpending)<`T`\> |

#### Returns

`Promise`<`Error` \| `T` \| (`Error` \| `T`)[]\>

#### Implementation of

[IAsyncQueueBaseClass](../interfaces/iasyncqueuebaseclass.md).[do](../interfaces/iasyncqueuebaseclass.md#do)

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:72](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L72)
