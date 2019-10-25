"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(idEvent, idUser, idType) {
        this._idEvent = idEvent;
        this._idUser = idUser;
        this._idType = idType;
    }
    Object.defineProperty(User.prototype, "idEvent", {
        get: function () {
            return this._idEvent;
        },
        set: function (idEvent) {
            this._idEvent = idEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "idUser", {
        get: function () {
            return this._idUser;
        },
        set: function (idUser) {
            this._idUser = idUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "idType", {
        get: function () {
            return this._idType;
        },
        set: function (idType) {
            this._idType = idType;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.default = User;
//# sourceMappingURL=JoinEvent.js.map