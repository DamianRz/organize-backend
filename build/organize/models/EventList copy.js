"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventList = /** @class */ (function () {
    function EventList() {
        this._events = [];
    }
    EventList.prototype.get = function (index) {
        return this._events[index];
    };
    EventList.prototype.set = function (index, event) {
        this._events[index] = event;
    };
    EventList.prototype.add = function (event) {
        this._events.push(event);
    };
    EventList.prototype.length = function () {
        return this._events.length;
    };
    return EventList;
}());
exports.default = EventList;
//# sourceMappingURL=EventList copy.js.map