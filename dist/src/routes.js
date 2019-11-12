"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserSystemController_1 = __importDefault(require("./web/UserSystemController"));
var EventController_1 = __importDefault(require("./web/EventController"));
var JoinEventController_1 = __importDefault(require("./web/JoinEventController"));
var QuestionController_1 = __importDefault(require("./web/QuestionController"));
var QuestionnaireController_1 = __importDefault(require("./web/QuestionnaireController"));
var OptionController_1 = __importDefault(require("./web/OptionController"));
var TimeLimitController_1 = __importDefault(require("./web/TimeLimitController"));
var router = express_1.Router();
var userSystem = new UserSystemController_1.default();
var event = new EventController_1.default();
var joinEvent = new JoinEventController_1.default();
var question = new QuestionController_1.default();
var questionnaire = new QuestionnaireController_1.default();
var option = new OptionController_1.default();
var timeLimit = new TimeLimitController_1.default();
router.route('/users')
    .put(function (req, res) { return userSystem.save(req, res); })
    .delete(function (req, res) { return userSystem.delete(req, res); });
router.route('/events')
    .put(function (req, res) { return event.save(req, res); })
    .delete(function (req, res) { return event.delete(req, res); });
router.route('/events/inviteds')
    .post(function (req, res) { return joinEvent.add(req, res); })
    .put(function (req, res) { return joinEvent.setUserType(req, res); })
    .delete(function (req, res) { return joinEvent.delete(req, res); });
router.route('/questionnaires')
    .get(function (req, res) { return questionnaire.getByIdUser(req, res); })
    .post(function (req, res) { return questionnaire.add(req, res); })
    .put(function (req, res) { return questionnaire.save(req, res); })
    .delete(function (req, res) { return questionnaire.delete(req, res); });
router.route('/options')
    .get(function (req, res) { return option.getByIdUser(req, res); })
    .post(function (req, res) { return option.add(req, res); })
    .put(function (req, res) { return option.save(req, res); })
    .delete(function (req, res) { return option.delete(req, res); });
router.route('/questions')
    .get(function (req, res) { return question.getByIdType(req, res); })
    .post(function (req, res) { return question.add(req, res); })
    .put(function (req, res) { return question.save(req, res); })
    .delete(function (req, res) { return question.delete(req, res); });
router.route('/questions/timelimit')
    .post(function (req, res) { return timeLimit.add(req, res); })
    .put(function (req, res) { return timeLimit.setMaxTime(req, res); })
    .delete(function (req, res) { return timeLimit.delete(req, res); });
router
    .get('/join/users', function (req, res) { return joinEvent.getJoinUsers(req, res); })
    .post('/questionnaires/options', function (req, res) { return option.linkQuestionnaire(req, res); })
    .post('/events/questionnaires', function (req, res) { return event.linkQuestionnaire(req, res); });
exports.default = router;
//# sourceMappingURL=routes.js.map