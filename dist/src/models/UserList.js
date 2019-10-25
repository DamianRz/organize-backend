"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserList = (function () {
    function UserList() {
        this._users = [];
    }
    UserList.prototype.get = function (index) {
        return this._users[index];
    };
    UserList.prototype.set = function (index, user) {
        this._users[index] = user;
    };
    UserList.prototype.add = function (user) {
        this._users.push(user);
    };
    UserList.prototype.length = function () {
        return this._users.length;
    };
    return UserList;
}());
exports.default = UserList;
//# sourceMappingURL=UserList.js.map