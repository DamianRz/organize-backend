"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Question_1 = __importDefault(require("../models/Question"));
var QuestionRepository_1 = __importDefault(require("../repositories/QuestionRepository"));
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var QuestionService = (function () {
    function QuestionService() {
        this.repository = new QuestionRepository_1.default();
    }
    QuestionService.prototype.add = function (qData) {
        return __awaiter(this, void 0, void 0, function () {
            var question, addNew, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        question = new Question_1.default();
                        question.idType = qData.idType;
                        question.name = qData.name;
                        question.category = qData.category;
                        return [4, this.repository.add(question)];
                    case 1:
                        addNew = _a.sent();
                        if (!(addNew.statusCode == 200)) return [3, 3];
                        return [4, this.repository.getId(question)];
                    case 2: return [2, _a.sent()];
                    case 3: return [2, addNew];
                    case 4: return [3, 6];
                    case 5:
                        ex_1 = _a.sent();
                        return [2, new ResultObject_1.default(400, { error: String(ex_1) })];
                    case 6: return [2];
                }
            });
        });
    };
    QuestionService.prototype.save = function (qData) {
        return __awaiter(this, void 0, void 0, function () {
            var q, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        q = new Question_1.default();
                        q.id = qData.id;
                        q.idType = qData.idType;
                        q.name = qData.name;
                        q.category = qData.category;
                        return [4, this.repository.save(q)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        ex_2 = _a.sent();
                        return [2, new ResultObject_1.default(400, { error: String(ex_2) })];
                    case 3: return [2];
                }
            });
        });
    };
    QuestionService.prototype.delete = function (idQuestion) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.repository.delete(idQuestion)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        ex_3 = _a.sent();
                        return [2, new ResultObject_1.default(400, { error: String(ex_3) })];
                    case 3: return [2];
                }
            });
        });
    };
    QuestionService.prototype.getByIdType = function (idType) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.repository.getByIdType(idType)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        ex_4 = _a.sent();
                        return [2, new ResultObject_1.default(400, { error: String(ex_4) })];
                    case 3: return [2];
                }
            });
        });
    };
    return QuestionService;
}());
exports.default = QuestionService;
//# sourceMappingURL=QuestionService.js.map