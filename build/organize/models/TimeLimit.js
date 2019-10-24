"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeLimit = /** @class */ (function () {
    function TimeLimit() {
        this._idQuestion = -1;
        this._idEvent = -1;
        this._maxTime = '';
    }
    Object.defineProperty(TimeLimit.prototype, "idQuestion", {
        get: function () {
            return this._idQuestion;
        },
        set: function (idQuestion) {
            this._idQuestion = idQuestion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeLimit.prototype, "idEvent", {
        get: function () {
            return this._idEvent;
        },
        set: function (idEvent) {
            this._idEvent = idEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeLimit.prototype, "maxTime", {
        get: function () {
            return this._maxTime;
        },
        set: function (maxTime) {
            this._maxTime = name;
        },
        enumerable: true,
        configurable: true
    });
    return TimeLimit;
}());
exports.default = TimeLimit;
//# sourceMappingURL=TimeLimit.js.map