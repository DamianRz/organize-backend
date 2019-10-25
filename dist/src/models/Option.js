"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option = (function () {
    function Option() {
        this._id = -1;
        this._idUser = -1;
        this._idQuestion = -1;
        this._name = "";
        this._cost = 0;
    }
    Object.defineProperty(Option.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "idUser", {
        get: function () {
            return this._idUser;
        },
        set: function (idUser) {
            this._idUser = idUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "idQuestion", {
        get: function () {
            return this._idQuestion;
        },
        set: function (idQuestion) {
            this._idQuestion = idQuestion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        set: function (cost) {
            this._cost = cost;
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());
exports.default = Option;
//# sourceMappingURL=Option.js.map