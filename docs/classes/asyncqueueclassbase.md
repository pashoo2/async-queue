[@pashoo2/serializer](../README.md) / [Exports](../modules.md) / AsyncQueueClassBase

# Class: AsyncQueueClassBase

## Hierarchy

- [`TAsyncQueueBaseClass`](tasyncqueuebaseclass.md)

  ↳ **`AsyncQueueClassBase`**

## Table of contents

### Constructors

- [constructor](asyncqueueclassbase.md#constructor)

### Properties

- [batch](asyncqueueclassbase.md#batch)
- [options](asyncqueueclassbase.md#options)
- [queue](asyncqueueclassbase.md#queue)
- [runPromiseProvider](asyncqueueclassbase.md#runpromiseprovider)

### Methods

- [createBatch](asyncqueueclassbase.md#createbatch)
- [createPromise](asyncqueueclassbase.md#createpromise)
- [do](asyncqueueclassbase.md#do)
- [isBatch](asyncqueueclassbase.md#isbatch)
- [start](asyncqueueclassbase.md#start)

## Constructors

### constructor

• **new AsyncQueueClassBase**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`IAsyncQueueBaseClassOptions`](../interfaces/iasyncqueuebaseclassoptions.md)\> |

#### Overrides

[TAsyncQueueBaseClass](tasyncqueuebaseclass.md).[constructor](tasyncqueuebaseclass.md#constructor)

#### Defined in

async-queue-class-base/async-queue-class-base.ts:20

## Properties

### batch

• `Protected` **batch**: `void` \| `Promise`<`any`[]\>

the currently executing batch of a promises

#### Overrides

[TAsyncQueueBaseClass](tasyncqueuebaseclass.md).[batch](tasyncqueuebaseclass.md#batch)

#### Defined in

async-queue-class-base/async-queue-class-base.ts:18

___

### options

• `Protected` **options**: [`IAsyncQueueBaseClassOptions`](../interfaces/iasyncqueuebaseclassoptions.md)

#### Inherited from

[TAsyncQueueBaseClass](tasyncqueuebaseclass.md).[options](tasyncqueuebaseclass.md#options)

___

### queue

• `Protected` **queue**: [`TAsyncQueueBaseClassPromiseProvider`](../modules.md#tasyncqueuebaseclasspromiseprovider)<`any`\>[] = `[]`

queue of promises pending

#### Overrides

[TAsyncQueueBaseClass](tasyncqueuebaseclass.md).[queue](tasyncqueuebaseclass.md#queue)

#### Defined in

async-queue-class-base/async-queue-class-base.ts:16

___

### runPromiseProvider

• `Protected` `Optional` **runPromiseProvider**: <T\>(`promiseProvider`: [`TAsyncQueueBaseClassPromiseProvider`](../modules.md#tasyncqueuebaseclasspromiseprovider)<`T`\>) => `Promise`<`T` \| `Error`\>

#### Type declaration

▸ <`T`\>(`promiseProvider`): `Promise`<`T` \| `Error`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `promiseProvider` | [`TAsyncQueueBaseClassPromiseProvider`](../modules.md#tasyncqueuebaseclasspromiseprovider)<`T`\> |

##### Returns

`Promise`<`T` \| `Error`\>

#### Defined in

async-queue-class-base/async-queue-class-base.ts:20

## Methods

### createBatch

▸ `Protected` **createBatch**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

async-queue-class-base/async-queue-class-base.ts:43

___

### createPromise

▸ `Protected` **createPromise**<`T`\>(`promiseProvider`): `Promise`<`Error` \| `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promiseProvider` | `any` |

#### Returns

`Promise`<`Error` \| `T`\>

#### Defined in

async-queue-class-base/async-queue-class-base.ts:86

▸ `Protected` **createPromise**<`T`\>(`promiseProvider`): `Promise`<(`Error` \| `T`)[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promiseProvider` | `any`[] |

#### Returns

`Promise`<(`Error` \| `T`)[]\>

#### Defined in

async-queue-class-base/async-queue-class-base.ts:87

___

### do

▸ **do**<`T`\>(`promiseProvider`): `Promise`<`Error` \| `T` \| `T` extends `any`[] ? (`Error` \| `T`)[] : `never`\>

resolve promises provided in queue

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promiseProvider` | [`TAsyncQueueBaseClassPromiseProviderPending`](../modules.md#tasyncqueuebaseclasspromiseproviderpending)<`T`\> |

#### Returns

`Promise`<`Error` \| `T` \| `T` extends `any`[] ? (`Error` \| `T`)[] : `never`\>

#### Overrides

[TAsyncQueueBaseClass](tasyncqueuebaseclass.md).[do](tasyncqueuebaseclass.md#do)

#### Defined in

async-queue-class-base/async-queue-class-base.ts:32

___

### isBatch

▸ `Protected` **isBatch**<`T`\>(`promiseProvider`): promiseProvider is TAsyncQueueBaseClassPromiseProviderBatch<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promiseProvider` | `any` |

#### Returns

promiseProvider is TAsyncQueueBaseClassPromiseProviderBatch<T\>

#### Defined in

async-queue-class-base/async-queue-class-base.ts:81

___

### start

▸ `Protected` **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

async-queue-class-base/async-queue-class-base.ts:59
