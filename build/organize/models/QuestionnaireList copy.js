"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserList = /** @class */ (function () {
    function UserList() {
        this._questionnaires = [];
    }
    UserList.prototype.get = function (index) {
        return this._questionnaires[index];
    };
    UserList.prototype.set = function (index, q) {
        this._questionnaires[index] = q;
    };
    UserList.prototype.add = function (q) {
        this._questionnaires.push(q);
    };
    UserList.prototype.length = function () {
        return this._questionnaires.length;
    };
    return UserList;
}());
exports.default = UserList;
//# sourceMappingURL=QuestionnaireList copy.js.map