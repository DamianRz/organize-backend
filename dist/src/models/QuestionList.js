"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionnaireList = (function () {
    function QuestionnaireList() {
        this._questions = [];
    }
    QuestionnaireList.prototype.get = function (index) {
        return this._questions[index];
    };
    QuestionnaireList.prototype.set = function (index, q) {
        this._questions[index] = q;
    };
    QuestionnaireList.prototype.add = function (q) {
        this._questions.push(q);
    };
    QuestionnaireList.prototype.length = function () {
        return this._questions.length;
    };
    return QuestionnaireList;
}());
exports.default = QuestionnaireList;
//# sourceMappingURL=QuestionList.js.map