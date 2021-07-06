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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcurrentAsyncQueue = void 0;
var async_queue_concurrent_utils_1 = require("./async-queue-concurrent.utils");
var ConcurrentAsyncQueue = /** @class */ (function () {
    function ConcurrentAsyncQueue(_promisePendingRejectableCreator) {
        var _this = this;
        this._promisePendingRejectableCreator = _promisePendingRejectableCreator;
        this.queue = [];
        this._isDestroying = false;
        this.wait = function () {
            _this.failIfDestroying();
            var lastWorkPromise = _this._getLastJobFromQueue();
            var jobPromise = async_queue_concurrent_utils_1.createJobPromise(_this._promisePendingRejectableCreator);
            var promiseToWaitBeforeRunJob = (lastWorkPromise ||
                Promise.resolve());
            _this._addInQueue(jobPromise);
            var jobResolver = _this._createResolverStep(_this._createWorkPromiseResolver(jobPromise.resolve, jobPromise));
            return promiseToWaitBeforeRunJob.then(jobResolver, jobResolver);
        };
        this.destroy = function (err) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.failIfDestroying();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        this.setIsDestroying();
                        return [4 /*yield*/, this._rejectAllPendingJobs(err)];
                    case 2:
                        _a.sent();
                        this.clearQueue();
                        return [3 /*break*/, 4];
                    case 3:
                        this.unsetIsDestroying();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this._addInQueue = function (jobPromise) {
            _this.queue = __spreadArray(__spreadArray([], __read(_this.queue)), [jobPromise]);
        };
        this._createResolverStep = function (resolver) {
            return function (resultPrevPromise) {
                _this._logIfErrorResult(resultPrevPromise);
                return {
                    done: resolver,
                };
            };
        };
        this._createWorkPromiseResolver = function (workPromiseResolve, workPromise) {
            return function (v) {
                _this.failIfDestroying();
                _this._removePromiseFromQueue(workPromise);
                workPromiseResolve(v);
            };
        };
        this._removePromiseFromQueue = function (workPromise) {
            _this.queue = _this.queue.filter(function (item) { return item !== workPromise; });
        };
        this._rejectAllPendingJobs = function (err) {
            return Promise.all(_this.queue.map(function (job) { return job.reject(err); }));
        };
        this.clearQueue = function () {
            _this.queue = [];
        };
    }
    ConcurrentAsyncQueue.prototype._getLastJobFromQueue = function () {
        var queue = this.queue;
        return queue.length ? queue[queue.length - 1] : undefined;
    };
    ConcurrentAsyncQueue.prototype._logIfErrorResult = function (error) {
        if (error instanceof Error) {
            console.error('Job failed');
            console.error(error);
        }
    };
    ConcurrentAsyncQueue.prototype.setIsDestroying = function () {
        this._isDestroying = true;
    };
    ConcurrentAsyncQueue.prototype.unsetIsDestroying = function () {
        this._isDestroying = false;
    };
    ConcurrentAsyncQueue.prototype.failIfDestroying = function () {
        if (this._isDestroying) {
            throw new Error('The instance is destroying');
        }
    };
    return ConcurrentAsyncQueue;
}());
exports.ConcurrentAsyncQueue = ConcurrentAsyncQueue;
//# sourceMappingURL=async-queue-concurrent.js.map