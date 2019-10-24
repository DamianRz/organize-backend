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
var QuestionList_1 = __importDefault(require("../models/QuestionList"));
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var QueryFunctions_1 = __importDefault(require("../Queries/QueryFunctions"));
var Queries_1 = __importDefault(require("../Queries/Queries"));
var QuestionRepository = /** @class */ (function () {
    function QuestionRepository() {
        this.queryFunctions = new QueryFunctions_1.default();
        this.queries = new Queries_1.default();
    }
    // add
    QuestionRepository.prototype.add = function (q) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [q.idType, q.name, q.category];
                return [2 /*return*/, this.queryFunctions.action(this.queries.getQuery('question', 'add'), data)];
            });
        });
    };
    // save
    QuestionRepository.prototype.save = function (q) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [q.idType, q.name, q.category, q.id];
                return [2 /*return*/, this.queryFunctions.action(this.queries.getQuery('question', 'save'), data)];
            });
        });
    };
    // getByIdType
    QuestionRepository.prototype.getByIdType = function (idType) {
        return __awaiter(this, void 0, void 0, function () {
            var data, rows, qList_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [idType];
                        return [4 /*yield*/, this.queryFunctions.get(this.queries.getQuery('question', 'getByIdType'), data)];
                    case 1:
                        rows = _a.sent();
                        if (rows.statusCode === 200) {
                            qList_1 = new QuestionList_1.default();
                            rows.value.forEach(function (item) {
                                var q = new Question_1.default();
                                Object.assign(q, item);
                                qList_1.add(q);
                            });
                            return [2 /*return*/, new ResultObject_1.default(200, qList_1)];
                        }
                        else {
                            return [2 /*return*/, new ResultObject_1.default(rows.statusCode, rows.value)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // getId
    QuestionRepository.prototype.getId = function (q) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [q.idType, q.name, q.category];
                return [2 /*return*/, this.queryFunctions.get(this.queries.getQuery('question', 'getId'), data)];
            });
        });
    };
    // delete
    QuestionRepository.prototype.delete = function (idQuestion) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [idQuestion];
                return [2 /*return*/, this.queryFunctions.action(this.queries.getQuery('question', 'delete'), data)];
            });
        });
    };
    return QuestionRepository;
}());
exports.default = QuestionRepository;
//# sourceMappingURL=QuestionRepository.js.map