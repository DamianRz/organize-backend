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
var UserSystem_1 = __importDefault(require("../models/UserSystem"));
var UserSystemRepository_1 = __importDefault(require("../repositories/UserSystemRepository"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var ErrorsList_1 = __importDefault(require("../errors/ErrorsList"));
var UserSystemService = (function () {
    function UserSystemService() {
        this.repository = new UserSystemRepository_1.default();
        this.errorsList = new ErrorsList_1.default();
    }
    UserSystemService.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var existsUser, comparePassword, getToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.repository.get(email)];
                    case 1:
                        existsUser = _a.sent();
                        if (!(existsUser.statusCode === 200)) return [3, 8];
                        if (!existsUser.value[0]) return [3, 6];
                        return [4, bcryptjs_1.default.compare(password, existsUser.value[0].password)];
                    case 2:
                        comparePassword = _a.sent();
                        if (!comparePassword) return [3, 4];
                        return [4, this.generateToken({ id: existsUser.value[0].id, username: existsUser.value[0].username })];
                    case 3:
                        getToken = _a.sent();
                        console.log(existsUser.value[0].username);
                        return [2, new ResultObject_1.default(200, { id: existsUser.value[0].id, username: existsUser.value[0].username, token: getToken.value })];
                    case 4: return [2, new ResultObject_1.default(401, 'incorrect password')];
                    case 5: return [2, existsUser];
                    case 6: return [2, new ResultObject_1.default(401, 'user do not exists')];
                    case 7: return [3, 9];
                    case 8:
                        console.log('get user by email error');
                        return [2, existsUser];
                    case 9: return [2];
                }
            });
        });
    };
    UserSystemService.prototype.signUp = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var userSystem, salt, hashPassword, existsEmail, addNewUserSystem, getNewUserId, getToken, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 15, , 16]);
                        userSystem = new UserSystem_1.default();
                        userSystem.username = userData.username;
                        userSystem.email = userData.email;
                        return [4, bcryptjs_1.default.genSalt(10)];
                    case 1:
                        salt = _a.sent();
                        return [4, bcryptjs_1.default.hash(userData.password, salt)];
                    case 2:
                        hashPassword = _a.sent();
                        userSystem.password = hashPassword;
                        return [4, this.repository.existsEmail(userSystem.email)];
                    case 3:
                        existsEmail = _a.sent();
                        if (!(existsEmail.statusCode === 200)) return [3, 13];
                        if (!!existsEmail.value) return [3, 11];
                        return [4, this.repository.add(userSystem)];
                    case 4:
                        addNewUserSystem = _a.sent();
                        if (!(addNewUserSystem.statusCode === 200)) return [3, 9];
                        return [4, this.repository.getIdByEmail(userSystem.email)];
                    case 5:
                        getNewUserId = _a.sent();
                        if (!(getNewUserId.statusCode === 200)) return [3, 7];
                        return [4, this.generateToken({ id: getNewUserId.value[0].id })];
                    case 6:
                        getToken = _a.sent();
                        return [2, new ResultObject_1.default(200, { id: getNewUserId.value[0].id, token: getToken.value })];
                    case 7: return [2, getNewUserId];
                    case 8: return [3, 10];
                    case 9: return [2, addNewUserSystem];
                    case 10: return [3, 12];
                    case 11: return [2, new ResultObject_1.default(403, { error: this.errorsList.clientError.emailExists })];
                    case 12: return [3, 14];
                    case 13: return [2, existsEmail];
                    case 14: return [3, 16];
                    case 15:
                        ex_1 = _a.sent();
                        return [2, new ResultObject_1.default(400, { error: String(ex_1) })];
                    case 16: return [2];
                }
            });
        });
    };
    UserSystemService.prototype.save = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var userSystem, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userSystem = new UserSystem_1.default();
                        userSystem.id = userData.id;
                        userSystem.username = userData.username;
                        userSystem.email = userData.email;
                        userSystem.password = userData.password;
                        return [4, this.repository.save(userSystem)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        ex_2 = _a.sent();
                        return [2, new ResultObject_1.default(400, { error: String(ex_2) })];
                    case 3: return [2];
                }
            });
        });
    };
    UserSystemService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.repository.delete(id)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    UserSystemService.prototype.generateToken = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var secret, jwt, token;
            return __generator(this, function (_a) {
                secret = process.env.SECRET || 'secret';
                jwt = require('jsonwebtoken');
                try {
                    token = jwt.sign({ data: data }, secret, { expiresIn: 60 * 60 });
                    return [2, { statusCode: 200, value: token }];
                }
                catch (error) {
                    return [2, { statusCode: 403, value: error }];
                }
                return [2];
            });
        });
    };
    return UserSystemService;
}());
exports.default = UserSystemService;
//# sourceMappingURL=UserSystemService.js.map