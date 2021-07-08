"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoratorAsyncQueueConcurentMixinDefault = void 0;
const async_queue_concurrent_mixin_default_1 = require("./async-queue-concurrent-mixin-default");
function decoratorAsyncQueueConcurentMixinDefault(jobTimeoutDefault, ...methodsToWrapInAsync) {
    function assignQueuedMethods(inst) {
        methodsToWrapInAsync.forEach(methodName => {
            const origin = inst[methodName];
            if (typeof origin === 'function') {
                inst[methodName] = (...args) => {
                    return inst._runAsJob(() => origin.apply(inst, args), String(methodName));
                };
            }
        });
    }
    return function decorate(BaseClass) {
        return class extends async_queue_concurrent_mixin_default_1.asyncQueueConcurrentMixinDefault(BaseClass, jobTimeoutDefault) {
            constructor(...args) {
                super(...args);
                assignQueuedMethods(this);
            }
        };
    };
}
exports.decoratorAsyncQueueConcurentMixinDefault = decoratorAsyncQueueConcurentMixinDefault;
//# sourceMappingURL=async-queue-concurrent-mixin-default-decorator.js.map