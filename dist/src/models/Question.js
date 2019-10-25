"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Questionnaire = (function () {
    function Questionnaire() {
        this._id = -1;
        this._idType = -1;
        this._name = '';
        this._category = '';
    }
    Object.defineProperty(Questionnaire.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "idType", {
        get: function () {
            return this._idType;
        },
        set: function (idType) {
            this._idType = idType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (category) {
            this._category = category;
        },
        enumerable: true,
        configurable: true
    });
    return Questionnaire;
}());
exports.default = Questionnaire;
//# sourceMappingURL=Question.js.map