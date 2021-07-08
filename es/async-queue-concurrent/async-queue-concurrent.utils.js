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
exports.wrapAllMethodsWithAsyncQueue = exports.createJobPromise = void 0;
const createJobPromise = (promisePendingRejectableCreator) => promisePendingRejectableCreator();
exports.createJobPromise = createJobPromise;
const wrapAllMethodsWithAsyncQueue = (target, asyncQueueCreator, methodsNamesList) => {
    const prototype = Object.assign({}, target.prototype);
    for (const propertyName of Object.keys(prototype)) {
        if (methodsNamesList && methodsNamesList.includes(propertyName)) {
            continue;
        }
        const descriptor = Object.getOwnPropertyDescriptor(prototype, propertyName);
        if (!descriptor) {
            continue;
        }
        const isMethod = descriptor.value instanceof Function;
        if (!isMethod)
            continue;
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                const job = yield asyncQueueCreator(this).wait();
                try {
                    return originalMethod.apply(this, args);
                }
                finally {
                    job.done();
                }
            });
        };
        Object.defineProperty(prototype, propertyName, descriptor);
    }
    Object.setPrototypeOf(target, prototype);
    return target;
};
exports.wrapAllMethodsWithAsyncQueue = wrapAllMethodsWithAsyncQueue;
//# sourceMappingURL=async-queue-concurrent.utils.js.map