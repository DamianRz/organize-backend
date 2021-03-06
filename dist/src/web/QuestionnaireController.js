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
var QuestionnaireService_1 = __importDefault(require("../services/QuestionnaireService"));
var Utils_1 = __importDefault(require("../utils/Utils"));
var QuestionnaireController = (function () {
    function QuestionnaireController() {
        this.service = new QuestionnaireService_1.default();
        this.utils = new Utils_1.default();
    }
    QuestionnaireController.prototype.add = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, requiredObjects, qData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body;
                        requiredObjects = [
                            {
                                name: "questionnaire",
                                items: ["idUser", "name", "category"]
                            }
                        ];
                        if (!this.utils.validation(body, requiredObjects, response)) return [3, 2];
                        qData = body.questionnaire;
                        return [4, this.service.add(qData)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result.value);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    QuestionnaireController.prototype.save = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, requiredObjects, qData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body;
                        requiredObjects = [
                            {
                                name: "questionnaire",
                                items: ["id", "idUser", "name", "category"]
                            }
                        ];
                        if (!this.utils.validation(body, requiredObjects, response)) return [3, 2];
                        qData = body.questionnaire;
                        return [4, this.service.save(qData)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result.value);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    QuestionnaireController.prototype.getByIdUser = function (data, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var requiredObjects, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('accede al getQuestionnaire');
                        requiredObjects = {
                            socketUrl: 'get:questionnaireByIdUser',
                            items: [
                                {
                                    name: "questionnaire",
                                    items: ["idUser"]
                                },
                            ],
                        };
                        if (!this.utils.validateData(data, requiredObjects, socket)) return [3, 2];
                        return [4, this.service.getByIdUser(data.questionnaire.idUser)];
                    case 1:
                        result = _a.sent();
                        socket.emit('get:questionnaireByIdUser', result);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    QuestionnaireController.prototype.getByIdEvent = function (data, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var requiredObjects, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('accede al getQuestionnaire');
                        requiredObjects = {
                            socketUrl: 'get:questionnaireByEventId',
                            items: [
                                {
                                    name: "questionnaire",
                                    items: ["idEvent"]
                                },
                            ],
                        };
                        if (!this.utils.validateData(data, requiredObjects, socket)) return [3, 2];
                        return [4, this.service.getByIdEvent(data.questionnaire.idEvent)];
                    case 1:
                        result = _a.sent();
                        socket.emit('get:questionnaireByEventId', result);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    QuestionnaireController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, requiredObjects, qData, deleteRelation, deleteQuestionnaire;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body;
                        requiredObjects = [
                            {
                                name: "questionnaire",
                                items: ["id"]
                            }
                        ];
                        if (!this.utils.validation(body, requiredObjects, response)) return [3, 4];
                        qData = body.questionnaire;
                        return [4, this.service.deleteRelation(qData.id)];
                    case 1:
                        deleteRelation = _a.sent();
                        if (!(deleteRelation.statusCode = 200)) return [3, 3];
                        return [4, this.service.delete(qData.id)];
                    case 2:
                        deleteQuestionnaire = _a.sent();
                        response.status(deleteQuestionnaire.statusCode).send(deleteQuestionnaire.value);
                        return [3, 4];
                    case 3:
                        response.status(deleteRelation.statusCode).send(deleteRelation.value);
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    return QuestionnaireController;
}());
exports.default = QuestionnaireController;
;
//# sourceMappingURL=QuestionnaireController.js.map