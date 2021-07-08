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
exports.AsyncQueueClassBase = void 0;
const utils_1 = require("@pashoo2/utils");
const async_queue_class_base_const_1 = require("./async-queue-class-base.const");
const async_queue_class_base_types_1 = require("./async-queue-class-base.types");
const async_queue_class_base_utils_1 = require("./async-queue-class-base.utils");
class AsyncQueueClassBase extends async_queue_class_base_types_1.TAsyncQueueBaseClass {
    constructor(options) {
        super(utils_1.extend(options || {}, async_queue_class_base_const_1.ASYNC_QUEUE_BASE_CLASS_OPTIONS));
        this.queue = [];
        this.batch = undefined;
        this.do = (promiseProvider) => __awaiter(this, void 0, void 0, function* () {
            return yield new Promise(res => {
                this.queue.push(() => {
                    return this.createPromise(promiseProvider).then(res).catch(res);
                });
                void this.start();
            });
        });
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            if (this.batch) {
                return;
            }
            if (!this.queue.length) {
                return;
            }
            this.batch = this.createBatch();
            try {
                yield this.batch;
            }
            catch (err) {
                console.error('AsyncQueueClassBase::error');
                console.error(err);
            }
            const { delayMs } = this.options;
            yield utils_1.delay(delayMs);
            this.batch = undefined;
            void this.start();
        });
        this.runPromiseProvider = async_queue_class_base_utils_1.getRun(this.options.promiseTimeout);
    }
    createBatch() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.queue.length) {
                return [];
            }
            const { options } = this;
            const promisePendingBatch = this.queue.splice(0, options.batchSize);
            if (!this.runPromiseProvider) {
                throw new Error('runPromiseProvider is not defined');
            }
            return yield Promise.all(promisePendingBatch.map(this.runPromiseProvider)).catch(err => new Array(promisePendingBatch.length).fill(err)); // fill with an error if the batch was rejected
        });
    }
    isBatch(promiseProvider) {
        return promiseProvider instanceof Array;
    }
    createPromise(promiseProvider) {
        let result;
        if (!this.runPromiseProvider) {
            throw new Error('runPromiseProvider is not defined');
        }
        if (this.isBatch(promiseProvider)) {
            result = Promise.all(promiseProvider.map(this.runPromiseProvider));
        }
        else {
            result = this.runPromiseProvider(promiseProvider);
        }
        void this.start();
        return result;
    }
}
exports.AsyncQueueClassBase = AsyncQueueClassBase;
//# sourceMappingURL=async-queue-class-base.js.map