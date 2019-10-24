"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultObject = /** @class */ (function () {
    function ResultObject(statusCode, value) {
        this.statusCode = statusCode;
        this.value = value;
    }
    ResultObject.prototype.getJsonObject = function () {
        return {
            statusCode: this.statusCode,
            value: this.value
        };
    };
    return ResultObject;
}());
exports.default = ResultObject;
//# sourceMappingURL=ResultObject.js.map