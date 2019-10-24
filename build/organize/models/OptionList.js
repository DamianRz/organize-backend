"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionList = /** @class */ (function () {
    function OptionList() {
        this._options = [];
    }
    OptionList.prototype.get = function (index) {
        return this._options[index];
    };
    OptionList.prototype.set = function (index, option) {
        this._options[index] = option;
    };
    OptionList.prototype.add = function (option) {
        this._options.push(option);
    };
    OptionList.prototype.length = function () {
        return this._options.length;
    };
    return OptionList;
}());
exports.default = OptionList;
//# sourceMappingURL=OptionList.js.map