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
exports.ConcurrentAsyncQueueWithAutoExecution = void 0;
const utils_1 = require("@pashoo2/utils");
const async_queue_concurrent_1 = require("../../async-queue-concurrent");
class ConcurrentAsyncQueueWithAutoExecution extends async_queue_concurrent_1.ConcurrentAsyncQueue {
    executeQueued(jobCreator, timeoutMs = 1000, jobName) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentJob = yield this.wait();
            const thisJobName = jobName || jobCreator.name;
            let jobResult = undefined;
            let isError = false;
            try {
                jobResult = (yield Promise.race([
                    jobCreator(),
                    utils_1.timeout(timeoutMs, new Error(`Job ${thisJobName} timed-out`)),
                ]));
                isError = false;
            }
            catch (err) {
                console.error(err);
                isError = true;
                throw new Error(`Job ${thisJobName} failed: ${err.message}`);
            }
            finally {
                if (!isError) {
                    currentJob.done(jobResult);
                }
            }
            return jobResult;
        });
    }
}
exports.ConcurrentAsyncQueueWithAutoExecution = ConcurrentAsyncQueueWithAutoExecution;
//# sourceMappingURL=async-queue-concurrent-with-auto-execution.js.map