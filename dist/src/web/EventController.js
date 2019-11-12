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
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var UserController = (function () {
    function UserController() {
        this.service = new EventService_1.default();
        this.joinEventService = new JoinEventService_1.default();
        this.optionService = new OptionService_1.default();
        this.utils = new Utils_1.default();
    }
    UserController.prototype.getJoinEvents = function (data, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var requiredObjects, jeData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requiredObjects = {
                            socketUrl: 'get:joinEvents',
                            items: [
                                {
                                    name: 'joinEvent',
                                    items: ['idUser', 'idType'],
                                },
                            ],
                        };
                        if (!this.utils.validateData(data, requiredObjects, socket)) return [3, 2];
                        jeData = data.joinEvent;
                        return [4, this.service.getJoinEvents(jeData)];
                    case 1:
                        result = _a.sent();
                        socket.emit('get:joinEvents', result);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    UserController.prototype.add = function (data, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var socketUrl, requiredObjects, eventData, jeData, newEvent, addJoinEvent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socketUrl = 'post:event';
                        requiredObjects = {
                            socketUrl: socketUrl,
                            items: [
                                {
                                    name: 'event',
                                    items: ['name', 'location', 'start', 'end', 'description', 'guestsNumber', 'created', 'state'],
                                },
                                {
                                    name: 'joinEvent',
                                    items: ['idUser', 'idType'],
                                },
                            ],
                        };
                        if (!this.utils.validateData(data, requiredObjects, socket)) return [3, 4];
                        eventData = data.event;
                        jeData = data.joinEvent;
                        return [4, this.service.add(eventData)];
                    case 1:
                        newEvent = _a.sent();
                        if (!(newEvent.statusCode == 200)) return [3, 3];
                        return [4, this.joinEventService.add(jeData, newEvent.value[0].id)];
                    case 2:
                        addJoinEvent = _a.sent();
                        socket.emit(socketUrl, new ResultObject_1.default(200, { id: newEvent.value[0].id }));
                        return [3, 4];
                    case 3:
                        socket.emit(socketUrl, newEvent);
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    UserController.prototype.linkQuestionnaire = function (data, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var socketUrl, requiredObjects, options, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socketUrl = 'post:eventQuestionnaireOption';
                        requiredObjects = {
                            socketUrl: socketUrl,
                            items: [
                                {
                                    name: 'link',
                                    items: ['idEvent', 'idQuestionnaire'],
                                },
                            ],
                        };
                        if (!this.utils.validateData(data, requiredObjects, socket)) return [3, 4];
                        return [4, this.optionService.getIdByIdQuestionnaire(data.link.idQuestionnaire)];
                    case 1:
                        options = _a.sent();
                        console.log('options.statusCode', options.statusCode);
                        if (!(options.statusCode === 200)) return [3, 3];
                        return [4, this.service.linkQuestionnaire(data.link.idEvent, data.link.idQuestionnaire, options.value)];
                    case 2:
                        result = _a.sent();
                        socket.emit(socketUrl, result.value);
                        return [3, 4];
                    case 3:
                        socket.emit(socketUrl, options.value);
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
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
                        if (!this.utils.validation(body, requiredObjects, response)) return [3, 2];
                        eventData = body.event;
                        return [4, this.service.save(eventData)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result.value);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
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
                        if (!this.utils.validation(body, requiredObjects, response)) return [3, 4];
                        eventId = body.event.id;
                        return [4, this.joinEventService.delete(eventId)];
                    case 1:
                        deleteJoinEvent = _a.sent();
                        if (!(deleteJoinEvent.statusCode === 200)) return [3, 3];
                        return [4, this.service.delete(body.id)];
                    case 2:
                        deleteEvent = _a.sent();
                        response.status(deleteEvent.statusCode).send(deleteEvent.value);
                        return [3, 4];
                    case 3:
                        response.status(deleteJoinEvent.statusCode).send(deleteJoinEvent.value);
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=EventController.js.map