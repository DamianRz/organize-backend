"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var Notification = (function () {
    function Notification() {
    }
    Notification.header = function (text) {
        console.log(this.getDate() + "INFO: " + chalk_1.default.white.bgGreen(text));
    };
    Notification.info = function (text) {
        console.log(this.getDate() + "INFO: " + chalk_1.default.cyan(text));
    };
    Notification.success = function (text) {
        console.log(this.getDate() + "INFO: " + chalk_1.default.green(text));
    };
    Notification.warn = function (text) {
        console.log(this.getDate() + "WARNING: " + chalk_1.default.yellow(text));
    };
    Notification.error = function (text) {
        console.log(this.getDate() + "SEVERE: " + chalk_1.default.red(text));
    };
    Notification.fatal = function (text) {
        console.log(this.getDate() + "SEVERE: " + chalk_1.default.white.bgRed(text));
    };
    Notification.getDate = function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return ("[ " +
            date.toISOString().substring(0, 10) +
            hours +
            ":" +
            minutes +
            ":" +
            seconds +
            " ] ");
    };
    return Notification;
}());
exports.default = Notification;
//# sourceMappingURL=Logger.js.map