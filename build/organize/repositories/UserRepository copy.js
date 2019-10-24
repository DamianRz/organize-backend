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
var MysqlConnection_1 = __importDefault(require("../connection/MysqlConnection"));
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    //get
    UserRepository.prototype.get = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, user, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_1 = [email, password];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default
                                    .mysqlConn.
                                    query("SELECT * FROM organize.usersystem where email=? and password=?", data_1, function (err, result) {
                                    if (!err)
                                        resolve(result);
                                    else
                                        reject();
                                });
                            }).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(200, user[0])];
                    case 2:
                        ex_1 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_1) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //existsEmail
    UserRepository.prototype.existsEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var existsEmail, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default.mysqlConn.query("select email from organize.usersystem where email=?", [email], function (err, result) {
                                    if (!err)
                                        resolve(result);
                                    else
                                        reject(err);
                                });
                            })];
                    case 1:
                        existsEmail = _a.sent();
                        if (existsEmail[0]) {
                            return [2 /*return*/, new ResultObject_1.default(200, true)];
                        }
                        else {
                            return [2 /*return*/, new ResultObject_1.default(200, false)];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_2 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_2) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //add
    UserRepository.prototype.add = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var data_2, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_2 = [user.username, user.password, user.email];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default.mysqlConn.query("insert into organize.usersystem(username, password, email) values(?,?,?);", data_2, function (err, result) {
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
                        return [2 /*return*/, new ResultObject_1.default(200, "user " + user.username + " created")];
                    case 2:
                        ex_3 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_3) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //getIdByEmail
    UserRepository.prototype.getIdByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var id, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default.mysqlConn.query("select id from organize.usersystem where email=?", [email], function (err, result) {
                                    if (!err)
                                        resolve(result);
                                    else
                                        reject(err);
                                });
                            }).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        id = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(200, id[0])];
                    case 2:
                        ex_4 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_4) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //save
    UserRepository.prototype.save = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var data_3, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_3 = [user.username, user.password, user.email, user.id];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default.mysqlConn.query("update organize.usersystem set username=?, password=?, email=? where id=?;", data_3, function (err, result) {
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
                        return [2 /*return*/, new ResultObject_1.default(200, "user " + user.username + " modified")];
                    case 2:
                        ex_5 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_5) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //delete
    UserRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data_4, ex_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data_4 = [id];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                MysqlConnection_1.default.mysqlConn.query("DELETE FROM organize.usersystem where id=?;", data_4, function (err, result) {
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
                        return [2 /*return*/, new ResultObject_1.default(200, "user deleted")];
                    case 2:
                        ex_6 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(500, { "error": String(ex_6) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserRepository;
}());
exports.default = UserRepository;
//# sourceMappingURL=UserRepository copy.js.map