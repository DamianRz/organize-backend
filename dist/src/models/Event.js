"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = (function () {
    function Event() {
        this._id = -1;
        this._name = "";
        this._location = "";
        this._start = "";
        this._end = "";
        this._description = "";
        this._guestsNumber = 0;
        this._created = "";
        this._state = 0;
    }
    Object.defineProperty(Event.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (location) {
            this._location = location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (start) {
            this._start = start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "end", {
        get: function () {
            return this._end;
        },
        set: function (end) {
            this._end = end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "guestsNumber", {
        get: function () {
            return this._guestsNumber;
        },
        set: function (guestsNumber) {
            this._guestsNumber = guestsNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "created", {
        get: function () {
            return this._created;
        },
        set: function (created) {
            this._created = created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    return Event;
}());
exports.default = Event;
//# sourceMappingURL=Event.js.map