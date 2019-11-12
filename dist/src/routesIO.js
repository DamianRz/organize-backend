"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserSystemController_1 = __importDefault(require("./web/UserSystemController"));
var EventController_1 = __importDefault(require("./web/EventController"));
var JoinEventController_1 = __importDefault(require("./web/JoinEventController"));
var QuestionController_1 = __importDefault(require("./web/QuestionController"));
var QuestionnaireController_1 = __importDefault(require("./web/QuestionnaireController"));
var OptionController_1 = __importDefault(require("./web/OptionController"));
var TimeLimitController_1 = __importDefault(require("./web/TimeLimitController"));
var RoutesIO = (function () {
    function RoutesIO() {
        this.userSystem = new UserSystemController_1.default();
        this.event = new EventController_1.default();
        this.joinEvent = new JoinEventController_1.default();
        this.question = new QuestionController_1.default();
        this.questionnaire = new QuestionnaireController_1.default();
        this.option = new OptionController_1.default();
        this.timeLimit = new TimeLimitController_1.default();
    }
    RoutesIO.prototype.defineRoutes = function (io) {
        var _this = this;
        io.on('connection', function (socket) {
            socket.on('post:signIn', function (data) { _this.userSystem.signIn(data, socket); });
            socket.on('post:signUp', function (data) { _this.userSystem.signUp(data, socket); });
            socket.on('post:event', function (data) { _this.event.add(data, socket); });
            socket.on('post:eventQuestionnaireOption', function (data) { _this.event.linkQuestionnaire(data, socket); });
            socket.on('get:joinEvents', function (data) { _this.joinEvent.getJoinEvents(data, socket); });
            socket.on('get:questionnaireByEventId', function (data) { _this.questionnaire.getByIdEvent(data, socket); });
            socket.on('get:questionnaireByIdUser', function (data) { _this.questionnaire.getByIdUser(data, socket); });
        });
    };
    return RoutesIO;
}());
exports.default = RoutesIO;
//# sourceMappingURL=routesIO.js.map