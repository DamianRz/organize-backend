"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Uses = /** @class */ (function () {
    function Uses(idEvent, idQuestionnaire, idOption) {
        this._idEvent = idEvent;
        this._idQuestionnaire = idQuestionnaire;
        this._idOption = idOption;
    }
    Object.defineProperty(Uses.prototype, "idEvent", {
        get: function () {
            return this._idEvent;
        },
        set: function (idEvent) {
            this._idEvent = idEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uses.prototype, "idQuestionnaire", {
        get: function () {
            return this._idQuestionnaire;
        },
        set: function (idQuestionnaire) {
            this._idQuestionnaire = idQuestionnaire;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uses.prototype, "idOption", {
        get: function () {
            return this._idOption;
        },
        set: function (idOption) {
            this._idOption = idOption;
        },
        enumerable: true,
        configurable: true
    });
    return Uses;
}());
exports.default = Uses;
//# sourceMappingURL=Uses.js.map