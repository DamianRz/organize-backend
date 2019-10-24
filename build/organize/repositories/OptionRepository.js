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
var Option_1 = __importDefault(require("../models/Option"));
var OptionList_1 = __importDefault(require("../models/OptionList"));
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var QueryFunctions_1 = __importDefault(require("../Queries/QueryFunctions"));
var Queries_1 = __importDefault(require("../Queries/Queries"));
var JoinEventRepository = /** @class */ (function () {
    function JoinEventRepository() {
        this.queryFunctions = new QueryFunctions_1.default();
        this.queries = new Queries_1.default();
    }
    // add
    JoinEventRepository.prototype.add = function (o) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [o.idUser, o.idQuestion, o.name, o.cost];
                return [2 /*return*/, this.queryFunctions.action(this.queries.getQuery('option', 'add'), data)];
            });
        });
    };
    // linkQuestionnaire
    JoinEventRepository.prototype.linkQuestionnaire = function (idOption, idQuestionnaire) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [idOption, idQuestionnaire];
                return [2 /*return*/, this.queryFunctions.action(this.queries.getQuery('option', 'link'), data)];
            });
        });
    };
    // save
    JoinEventRepository.prototype.save = function (o) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [o.name, o.cost, o.idUser, o.idQuestion, o.id];
                return [2 /*return*/, this.queryFunctions.action(this.queries.getQuery('option', 'save'), data)];
            });
        });
    };
    // getByIdUser
    JoinEventRepository.prototype.getByIdUser = function (idUser) {
        return __awaiter(this, void 0, void 0, function () {
            var data, rows, oList_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [idUser];
                        return [4 /*yield*/, this.queryFunctions.get(this.queries.getQuery('option', 'getByIdUser'), data)];
                    case 1:
                        rows = _a.sent();
                        if (rows.statusCode === 200) {
                            oList_1 = new OptionList_1.default();
                            rows.value.forEach(function (item) {
                                var option = new Option_1.default();
                                Object.assign(option, item);
                                oList_1.add(option);
                            });
                            return [2 /*return*/, new ResultObject_1.default(200, oList_1)];
                        }
                        else {
                            return [2 /*return*/, new ResultObject_1.default(rows.statusCode, rows)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // getIdByIdQuestionnaire
    JoinEventRepository.prototype.getIdByIdQuestionnaire = function (idQuestionnaire) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [idQuestionnaire];
                        return [4 /*yield*/, this.queryFunctions.get(this.queries.getQuery('option', 'getIdByIdQuestionnaire'), data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // getId
    JoinEventRepository.prototype.getId = function (o) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [o.idUser, o.idQuestion, o.name];
                        return [4 /*yield*/, this.queryFunctions.get(this.queries.getQuery('option', 'getId'), data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // delete
    JoinEventRepository.prototype.delete = function (idOption) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [idOption];
                        return [4 /*yield*/, this.queryFunctions.action(this.queries.getQuery('option', 'delete'), data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // deleteRelation
    JoinEventRepository.prototype.deleteRelation = function (idOption) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [idOption];
                        return [4 /*yield*/, this.queryFunctions.action(this.queries.getQuery('option', 'deleteRelation'), data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return JoinEventRepository;
}());
exports.default = JoinEventRepository;
//# sourceMappingURL=OptionRepository.js.map