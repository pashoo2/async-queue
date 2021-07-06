"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncQueueClassBase = void 0;
var utils_1 = require("@pashoo2/utils");
var async_queue_class_base_const_1 = require("./async-queue-class-base.const");
var async_queue_class_base_types_1 = require("./async-queue-class-base.types");
var async_queue_class_base_utils_1 = require("./async-queue-class-base.utils");
var AsyncQueueClassBase = /** @class */ (function (_super) {
    __extends(AsyncQueueClassBase, _super);
    function AsyncQueueClassBase(options) {
        var _this = _super.call(this, utils_1.extend(options || {}, async_queue_class_base_const_1.ASYNC_QUEUE_BASE_CLASS_OPTIONS)) || this;
        _this.queue = [];
        _this.batch = undefined;
        _this.do = function (promiseProvider) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) {
                            _this.queue.push(function () {
                                return _this.createPromise(promiseProvider).then(res).catch(res);
                            });
                            void _this.start();
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.start = function () { return __awaiter(_this, void 0, void 0, function () {
            var err_1, delayMs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.batch) {
                            return [2 /*return*/];
                        }
                        if (!this.queue.length) {
                            return [2 /*return*/];
                        }
                        this.batch = this.createBatch();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.batch];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error('AsyncQueueClassBase::error');
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        delayMs = this.options.delayMs;
                        return [4 /*yield*/, utils_1.delay(delayMs)];
                    case 5:
                        _a.sent();
                        this.batch = undefined;
                        void this.start();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.runPromiseProvider = async_queue_class_base_utils_1.getRun(_this.options.promiseTimeout);
        return _this;
    }
    AsyncQueueClassBase.prototype.createBatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, promisePendingBatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.queue.length) {
                            return [2 /*return*/, []];
                        }
                        options = this.options;
                        promisePendingBatch = this.queue.splice(0, options.batchSize);
                        if (!this.runPromiseProvider) {
                            throw new Error('runPromiseProvider is not defined');
                        }
                        return [4 /*yield*/, Promise.all(promisePendingBatch.map(this.runPromiseProvider)).catch(function (err) { return new Array(promisePendingBatch.length).fill(err); })];
                    case 1: return [2 /*return*/, _a.sent()]; // fill with an error if the batch was rejected
                }
            });
        });
    };
    AsyncQueueClassBase.prototype.isBatch = function (promiseProvider) {
        return promiseProvider instanceof Array;
    };
    AsyncQueueClassBase.prototype.createPromise = function (promiseProvider) {
        var result;
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
    };
    return AsyncQueueClassBase;
}(async_queue_class_base_types_1.TAsyncQueueBaseClass));
exports.AsyncQueueClassBase = AsyncQueueClassBase;
//# sourceMappingURL=async-queue-class-base.js.map