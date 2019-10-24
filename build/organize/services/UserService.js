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
var User_1 = __importDefault(require("../models/User"));
var UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
var ResultObject_1 = __importDefault(require("../models/ResultObject"));
var UserService = /** @class */ (function () {
    function UserService() {
        this.userRepository = new UserRepository_1.default();
    }
    //signIn
    UserService.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.get(email, password)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //signUp
    UserService.prototype.signUp = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var user, existsEmail, addNewUser, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        user = new User_1.default(userData.username, userData.email, userData.password);
                        return [4 /*yield*/, this.userRepository.existsEmail(user.email)];
                    case 1:
                        existsEmail = _a.sent();
                        if (!(existsEmail.statusCode == 200)) return [3 /*break*/, 8];
                        if (!!existsEmail.value) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.userRepository.add(user)];
                    case 2:
                        addNewUser = _a.sent();
                        if (!(addNewUser.statusCode == 200)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.userRepository.getIdByEmail(user.email)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, addNewUser];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, new ResultObject_1.default(403, { "error": "email exists" })];
                    case 7: return [3 /*break*/, 9];
                    case 8: return [2 /*return*/, existsEmail];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        ex_1 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(400, { "error": String(ex_1) })];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    //save
    UserService.prototype.save = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var user, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user = new User_1.default(userData.username, userData.password, userData.email);
                        user.id = userData.id;
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        ex_2 = _a.sent();
                        return [2 /*return*/, new ResultObject_1.default(400, { "error": String(ex_2) })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //delete
    UserService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.delete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=UserService.js.map