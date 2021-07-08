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
exports.ConcurrentAsyncQueue = void 0;
const async_queue_concurrent_utils_1 = require("./async-queue-concurrent.utils");
class ConcurrentAsyncQueue {
    constructor(_promisePendingRejectableCreator) {
        this._promisePendingRejectableCreator = _promisePendingRejectableCreator;
        this.queue = [];
        this._isDestroying = false;
        this.wait = () => {
            this.failIfDestroying();
            const lastWorkPromise = this._getLastJobFromQueue();
            const jobPromise = async_queue_concurrent_utils_1.createJobPromise(this._promisePendingRejectableCreator);
            const promiseToWaitBeforeRunJob = (lastWorkPromise ||
                Promise.resolve());
            this._addInQueue(jobPromise);
            const jobResolver = this._createResolverStep(this._createWorkPromiseResolver(jobPromise.resolve, jobPromise));
            return promiseToWaitBeforeRunJob.then(jobResolver, jobResolver);
        };
        this.destroy = (err) => __awaiter(this, void 0, void 0, function* () {
            this.failIfDestroying();
            try {
                this.setIsDestroying();
                yield this._rejectAllPendingJobs(err);
                this.clearQueue();
            }
            finally {
                this.unsetIsDestroying();
            }
        });
        this._addInQueue = (jobPromise) => {
            this.queue = [...this.queue, jobPromise];
        };
        this._createResolverStep = (resolver) => {
            return (resultPrevPromise) => {
                this._logIfErrorResult(resultPrevPromise);
                return {
                    done: resolver,
                };
            };
        };
        this._createWorkPromiseResolver = (workPromiseResolve, workPromise) => {
            return (v) => {
                this.failIfDestroying();
                this._removePromiseFromQueue(workPromise);
                workPromiseResolve(v);
            };
        };
        this._removePromiseFromQueue = (workPromise) => {
            this.queue = this.queue.filter(item => item !== workPromise);
        };
        this._rejectAllPendingJobs = (err) => {
            return Promise.all(this.queue.map(job => job.reject(err)));
        };
        this.clearQueue = () => {
            this.queue = [];
        };
    }
    _getLastJobFromQueue() {
        const queue = this.queue;
        return queue.length ? queue[queue.length - 1] : undefined;
    }
    _logIfErrorResult(error) {
        if (error instanceof Error) {
            console.error('Job failed');
            console.error(error);
        }
    }
    setIsDestroying() {
        this._isDestroying = true;
    }
    unsetIsDestroying() {
        this._isDestroying = false;
    }
    failIfDestroying() {
        if (this._isDestroying) {
            throw new Error('The instance is destroying');
        }
    }
}
exports.ConcurrentAsyncQueue = ConcurrentAsyncQueue;
//# sourceMappingURL=async-queue-concurrent.js.map