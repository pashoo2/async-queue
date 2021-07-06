"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRun = void 0;
var utils_1 = require("@pashoo2/utils");
var returnError = function (res) {
    return res instanceof Error ? res : new Error(String(res));
};
var getRun = function (timeoutMs) {
    return function (promiseProvider) {
        try {
            return Promise.race([promiseProvider(), utils_1.timeout(timeoutMs)]).catch(returnError);
        }
        catch (err) {
            return Promise.resolve(err);
        }
    };
};
exports.getRun = getRun;
//# sourceMappingURL=async-queue-class-base.utils.js.map