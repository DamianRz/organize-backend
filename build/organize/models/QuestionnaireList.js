"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionnaireList = /** @class */ (function () {
    function QuestionnaireList() {
        this._questionnaires = [];
    }
    QuestionnaireList.prototype.get = function (index) {
        return this._questionnaires[index];
    };
    QuestionnaireList.prototype.set = function (index, q) {
        this._questionnaires[index] = q;
    };
    QuestionnaireList.prototype.add = function (q) {
        this._questionnaires.push(q);
    };
    QuestionnaireList.prototype.length = function () {
        return this._questionnaires.length;
    };
    return QuestionnaireList;
}());
exports.default = QuestionnaireList;
//# sourceMappingURL=QuestionnaireList.js.map