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
var EventList_1 = __importDefault(require("../models/EventList"));
var Event_1 = __importDefault(require("../models/Event"));
var UserList_1 = __importDefault(require("../models/UserList"));
var UserSystem_1 = __importDefault(require("../models/UserSystem"));
var MysqlConnection_1 = __importDefault(require("../connection/MysqlConnection"));
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var JoinEventRepository = /** @class */ (function () {
    function JoinEventRepository() {
    }
    //add
    JoinEventRepository.prototype.add = function (je) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_1 = [je.idUser, je.idEvent, je.idType];
                        console.log(data_1);
                        console.log("INSERT INTO organize.joinevent(idUser, idEvent, idType) VALUES(?,?,?);");
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default.mysqlConn.query("INSERT INTO organize.joinevent(idUser, idEvent, idType) VALUES(?,?,?);", data_1, function (err, result) {
                                    if (!err)
                                        resolve(result);
                                    else
                                        reject();
                                });
                            }).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        _a.sent();
                        console.log("success add JoinEvent");
                        return [2 /*return*/, new ResultObject_1.default(200, "join event created")];
                    case 2:
                        ex_1 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_1) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //delete
    JoinEventRepository.prototype.delete = function (idEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var data_2, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_2 = [idEvent];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default.mysqlConn.query("DELETE FROM organize.joinevent WHERE idEvent=?;", data_2, function (err, result) {
                                    if (!err)
                                        resolve(result);
                                    else
                                        reject();
                                });
                            }).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(200, "JoinEvent deleted")];
                    case 2:
                        ex_2 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_2) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //getJoinUsers
    JoinEventRepository.prototype.getJoinUsers = function (joinEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var data_3, rows, userList_1, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_3 = [joinEvent.idEvent, joinEvent.idType];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default
                                    .mysqlConn.
                                    query("SELECT id, username, email FROM organize.usersystem u, joinevent j where u.id = j.idUser and j.idEvent = ? and j.idType = ?;", data_3, function (err, result) {
                                    if (!err)
                                        resolve(result);
                                    else
                                        reject();
                                });
                            }).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        rows = _a.sent();
                        userList_1 = new UserList_1.default();
                        rows.forEach(function (item) {
                            var user = new UserSystem_1.default();
                            Object.assign(user, item);
                            userList_1.add(user);
                        });
                        return [2 /*return*/, new ResultObject_1.default(200, userList_1)];
                    case 2:
                        ex_3 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_3) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //getJoinEvents
    JoinEventRepository.prototype.getJoinEvents = function (joinEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var data_4, rows, eventList_1, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_4 = [joinEvent.idUser, joinEvent.idType];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default
                                    .mysqlConn.
                                    query("SELECT * FROM organize.event e, joinevent j WHERE e.id = j.idEvent AND j.idUser = ? and j.idType = ?;", data_4, function (err, result) {
                                    if (!err)
                                        resolve(result);
                                    else
                                        reject();
                                });
                            }).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        rows = _a.sent();
                        eventList_1 = new EventList_1.default();
                        rows.forEach(function (item) {
                            var event = new Event_1.default();
                            Object.assign(event, item);
                            eventList_1.add(event);
                        });
                        return [2 /*return*/, new ResultObject_1.default(200, eventList_1)];
                    case 2:
                        ex_4 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_4) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return JoinEventRepository;
}());
exports.default = JoinEventRepository;
//# sourceMappingURL=JoinEventRepository copy.js.map