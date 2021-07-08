"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncQueueConcurrentMixinDefault = void 0;
const utils_1 = require("@pashoo2/utils");
const async_queue_concurrent_with_auto_execution_1 = require("../../async-queue-concurrent-extended/async-queue-concurrent-with-auto-execution/async-queue-concurrent-with-auto-execution");
function asyncQueueConcurrentMixinDefault(BaseClass, jobTimeoutDefault) {
    class Mixin extends BaseClass {
        _runAsJob(func, jobName, jobTimeout = jobTimeoutDefault) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this._getAsyncOperationsQueue().executeQueued(func, jobTimeout, jobName);
            });
        }
        _rejectAllPendingOperations(err) {
            return this._getAsyncOperationsQueue().destroy(err);
        }
        _initializeAsyncQueue() {
            this.__asyncOperationsQueue = new async_queue_concurrent_with_auto_execution_1.ConcurrentAsyncQueueWithAutoExecution(utils_1.createPromisePendingRejectable);
        }
        _getAsyncOperationsQueue() {
            if (!this.__asyncOperationsQueue) {
                this._initializeAsyncQueue();
            }
            if (!this.__asyncOperationsQueue) {
                throw new Error('Failed to initialize the async queue instance');
            }
            return this.__asyncOperationsQueue;
        }
    }
    Object.defineProperty(Mixin, 'name', {
        value: `${BaseClass.name}Queued`,
        configurable: false,
        writable: false,
        enumerable: false,
    });
    return Mixin;
}
exports.asyncQueueConcurrentMixinDefault = asyncQueueConcurrentMixinDefault;
//# sourceMappingURL=async-queue-concurrent-mixin-default.js.map