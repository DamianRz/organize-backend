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
var EventService_1 = __importDefault(require("../services/EventService"));
var OptionService_1 = __importDefault(require("../services/OptionService"));
var JoinEventService_1 = __importDefault(require("../services/JoinEventService"));
var Utils_1 = __importDefault(require("../utils/Utils"));
var UserController = /** @class */ (function () {
    function UserController() {
        this.service = new EventService_1.default();
        this.joinEventService = new JoinEventService_1.default();
        this.optionService = new OptionService_1.default();
        this.utils = new Utils_1.default();
    }
    // add
    UserController.prototype.add = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, requiredObjects, eventData, jeData, newEvent, addJoinEvent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body;
                        requiredObjects = [
                            {
                                name: 'event',
                                items: ['name', 'location', 'start', 'end', 'description', 'guestsNumber', 'created', 'state'],
                            },
                            {
                                name: 'joinEvent',
                                items: ['idUser', 'idType'],
                            },
                        ];
                        if (!this.utils.validation(body, requiredObjects, response)) return [3 /*break*/, 4];
                        eventData = body.event;
                        jeData = body.joinEvent;
                        return [4 /*yield*/, this.service.add(eventData)];
                    case 1:
                        newEvent = _a.sent();
                        if (!(newEvent.statusCode === 200)) return [3 /*break*/, 3];
                        jeData.idEvent = newEvent.value.id;
                        return [4 /*yield*/, this.joinEventService.add(jeData)];
                    case 2:
                        addJoinEvent = _a.sent();
                        if (addJoinEvent.statusCode === 200) {
                            response.status(addJoinEvent.statusCode)
                                .send(addJoinEvent.value);
                        }
                        else {
                            response.status(addJoinEvent.statusCode).send(addJoinEvent.value);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        response.status(newEvent.statusCode).send(newEvent.value);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // save
    UserController.prototype.save = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, requiredObjects, eventData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body;
                        requiredObjects = [
                            {
                                name: 'event',
                                items: ['id', 'name', 'location', 'start', 'end', 'description', 'guestsNumber'],
                            },
                        ];
                        if (!this.utils.validation(body, requiredObjects, response)) return [3 /*break*/, 2];
                        eventData = body.event;
                        return [4 /*yield*/, this.service.save(eventData)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result.value);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // delete
    UserController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, requiredObjects, eventId, deleteJoinEvent, deleteEvent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body;
                        requiredObjects = [
                            {
                                name: 'event',
                                items: ['id'],
                            },
                        ];
                        if (!this.utils.validation(body, requiredObjects, response)) return [3 /*break*/, 4];
                        eventId = body.event.id;
                        return [4 /*yield*/, this.joinEventService.delete(eventId)];
                    case 1:
                        deleteJoinEvent = _a.sent();
                        if (!(deleteJoinEvent.statusCode === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.delete(body.id)];
                    case 2:
                        deleteEvent = _a.sent();
                        response.status(deleteEvent.statusCode).send(deleteEvent.value);
                        return [3 /*break*/, 4];
                    case 3:
                        response.status(deleteJoinEvent.statusCode).send(deleteJoinEvent.value); // error
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // linkQuestionnaire
    UserController.prototype.linkQuestionnaire = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, requiredObjects, lData, options, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body;
                        requiredObjects = [
                            {
                                name: 'link',
                                items: ['idEvent', 'idQuestionnaire'],
                            },
                        ];
                        if (!this.utils.validation(body, requiredObjects, response)) return [3 /*break*/, 4];
                        lData = body.link;
                        return [4 /*yield*/, this.optionService.getIdByIdQuestionnaire(lData.idQuestionnaire)];
                    case 1:
                        options = _a.sent();
                        if (!(options.statusCode === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.linkQuestionnaire(lData.idEvent, lData.idQuestionnaire, options.value)];
                    case 2:
                        result = _a.sent();
                        response.status(result.statusCode).send(result.value);
                        return [3 /*break*/, 4];
                    case 3:
                        response.status(options.statusCode).send(options.value); // error
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=EventController.js.map