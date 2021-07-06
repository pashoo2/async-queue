# async-queue
Utility classes allow to create an async queue with a batched execution or a concurrent execution of async tasks.

If you need a solution for execution tasks by joining them in batches where all task is executing in parallel way with each other you might use AsyncQueueClassBase.

If you need a tool for executing a class methods one by one in order they were called then you
could choose the "decoratorAsyncQueueConcurentMixinDefault".
E.g. you have two rival methods and they can not execute simultaneously, but it's ok if they are executed that one by one.

In case you have a list of tasks which must be executed as one by one and not simultaneously then you could use ConcurrentAsyncQueue class.

[See docs](docs/modules.md)
