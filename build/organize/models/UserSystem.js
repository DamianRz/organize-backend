"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserSystem = /** @class */ (function () {
    function UserSystem() {
        this._id = -1;
        this._username = "";
        this._email = "";
        this._password = "";
    }
    Object.defineProperty(UserSystem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSystem.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (username) {
            this._username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSystem.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSystem.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        },
        enumerable: true,
        configurable: true
    });
    return UserSystem;
}());
exports.default = UserSystem;
//# sourceMappingURL=UserSystem.js.map