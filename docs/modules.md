[@pashoo2/async-queue](README.md) / Exports

# @pashoo2/async-queue

## Table of contents

### Classes

- [AsyncQueueClassBase](classes/asyncqueueclassbase.md)
- [ConcurrentAsyncQueue](classes/concurrentasyncqueue.md)
- [ConcurrentAsyncQueueWithAutoExecution](classes/concurrentasyncqueuewithautoexecution.md)
- [TAsyncQueueBaseClass](classes/tasyncqueuebaseclass.md)

### Interfaces

- [IAsyncQueueBaseClass](interfaces/iasyncqueuebaseclass.md)
- [IAsyncQueueBaseClassOptions](interfaces/iasyncqueuebaseclassoptions.md)
- [IAsyncQueueConcurrentWithAutoExecution](interfaces/iasyncqueueconcurrentwithautoexecution.md)

### Type aliases

- [TAsyncQueueBaseClassPromiseProvider](modules.md#tasyncqueuebaseclasspromiseprovider)
- [TAsyncQueueBaseClassPromiseProviderBatch](modules.md#tasyncqueuebaseclasspromiseproviderbatch)
- [TAsyncQueueBaseClassPromiseProviderPending](modules.md#tasyncqueuebaseclasspromiseproviderpending)

### Functions

- [asyncQueueConcurrentMixinDefault](modules.md#asyncqueueconcurrentmixindefault)
- [decoratorAsyncQueueConcurentMixinDefault](modules.md#decoratorasyncqueueconcurentmixindefault)
- [getRun](modules.md#getrun)

## Type aliases

### TAsyncQueueBaseClassPromiseProvider

Ƭ **TAsyncQueueBaseClassPromiseProvider**<`T`\>: () => `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `Promise`<`T`\>

##### Returns

`Promise`<`T`\>

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:25](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L25)

___

### TAsyncQueueBaseClassPromiseProviderBatch

Ƭ **TAsyncQueueBaseClassPromiseProviderBatch**<`T`\>: [`TAsyncQueueBaseClassPromiseProvider`](modules.md#tasyncqueuebaseclasspromiseprovider)<`T`\>[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:27](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L27)

___

### TAsyncQueueBaseClassPromiseProviderPending

Ƭ **TAsyncQueueBaseClassPromiseProviderPending**<`T`\>: [`TAsyncQueueBaseClassPromiseProvider`](modules.md#tasyncqueuebaseclasspromiseprovider)<`T`\> \| [`TAsyncQueueBaseClassPromiseProviderBatch`](modules.md#tasyncqueuebaseclasspromiseproviderbatch)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[async-queue-class-base/async-queue-class-base.types.ts:30](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.types.ts#L30)

## Functions

### asyncQueueConcurrentMixinDefault

▸ **asyncQueueConcurrentMixinDefault**<`M`\>(`BaseClass`, `jobTimeoutDefault`): `M` & `ConstructorType`<`IAsyncQueueConcurrentMixinDefault`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `ConstructorType`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `BaseClass` | `M` |
| `jobTimeoutDefault` | `number` |

#### Returns

`M` & `ConstructorType`<`IAsyncQueueConcurrentMixinDefault`\>

#### Defined in

[async-queue-concurrent/async-queue-concurrent-mixins/async-queue-concurrent-mixin-default/async-queue-concurrent-mixin-default.ts:7](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent-mixins/async-queue-concurrent-mixin-default/async-queue-concurrent-mixin-default.ts#L7)

___

### decoratorAsyncQueueConcurentMixinDefault

▸ **decoratorAsyncQueueConcurentMixinDefault**<`M`\>(`jobTimeoutDefault`, ...`methodsToWrapInAsync`): (`BaseClass`: `M`) => `M` & `ConstructorType`<`IAsyncQueueConcurrentMixinDefault`, `any`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `ConstructorType`<`any`, `any`[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `jobTimeoutDefault` | `number` |
| `...methodsToWrapInAsync` | keyof `InstanceType`<`M`\>[] |

#### Returns

`fn`

▸ (`BaseClass`): `M` & `ConstructorType`<`IAsyncQueueConcurrentMixinDefault`, `any`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `BaseClass` | `M` |

##### Returns

`M` & `ConstructorType`<`IAsyncQueueConcurrentMixinDefault`, `any`[]\>

#### Defined in

[async-queue-concurrent/async-queue-concurrent-mixins/async-queue-concurrent-mixin-default/async-queue-concurrent-mixin-default-decorator.ts:6](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-concurrent/async-queue-concurrent-mixins/async-queue-concurrent-mixin-default/async-queue-concurrent-mixin-default-decorator.ts#L6)

___

### getRun

▸ `Const` **getRun**(`timeoutMs`): <T\>(`promiseProvider`: [`TAsyncQueueBaseClassPromiseProvider`](modules.md#tasyncqueuebaseclasspromiseprovider)<`T`\>) => `Promise`<`T` \| `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs` | `number` |

#### Returns

`fn`

▸ <`T`\>(`promiseProvider`): `Promise`<`T` \| `Error`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `promiseProvider` | [`TAsyncQueueBaseClassPromiseProvider`](modules.md#tasyncqueuebaseclasspromiseprovider)<`T`\> |

##### Returns

`Promise`<`T` \| `Error`\>

#### Defined in

[async-queue-class-base/async-queue-class-base.utils.ts:9](https://github.com/pashoo2/async-queue/blob/d250c8e/src/async-queue-class-base/async-queue-class-base.utils.ts#L9)
