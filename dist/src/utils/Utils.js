"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var ErrorsList_1 = __importDefault(require("../errors/ErrorsList"));
var Utils = (function () {
    function Utils() {
        this.errorList = new ErrorsList_1.default();
    }
    Utils.prototype.validateData = function (body, requiredObjects, socket) {
        var _this = this;
        var missingItem = [];
        var missingObject = [];
        if (JSON.stringify(body) != '{}') {
            requiredObjects.items.forEach(function (object) {
                if (body[object.name]) {
                    object.items.forEach(function (item) {
                        if (body[object.name][item] == '') {
                            missingItem.push({ item: item, message: _this.errorList.clientError.itemRequired });
                        }
                    });
                }
                else {
                    missingObject.push({ object: object.name, message: _this.errorList.clientError.objectRequired });
                }
            });
            if (missingObject.length == 0) {
                if (missingItem.length == 0) {
                    return true;
                }
                else {
                    socket.emit(requiredObjects.socketUrl, new ResultObject_1.default(400, { missingItem: missingItem }));
                    return false;
                }
            }
            else {
                socket.emit(requiredObjects.socketUrl, new ResultObject_1.default(400, { missingObject: missingObject }));
                return false;
            }
        }
        else {
            socket.emit(requiredObjects.socketUrl, new ResultObject_1.default(400, this.errorList.clientError.nullBody));
            return false;
        }
    };
    Utils.prototype.validation = function (body, objects, response) {
        return false;
    };
    return Utils;
}());
exports.default = Utils;
//# sourceMappingURL=Utils.js.map