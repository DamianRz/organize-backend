"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Questionnaire = /** @class */ (function () {
    function Questionnaire() {
        this._id = -1;
        this._idUser = -1;
        this._name = "";
        this._category = "";
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
    Object.defineProperty(Questionnaire.prototype, "idUser", {
        get: function () {
            return this._idUser;
        },
        set: function (idUser) {
            this._idUser = idUser;
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
//# sourceMappingURL=Questionnaire copy.js.map