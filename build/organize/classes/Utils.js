"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.validation = function (body, objects, response) {
        var requiredItem = undefined;
        var requiredObject = undefined;
        if (JSON.stringify(body) != "{}") {
            objects.forEach(function (object) {
                if (body[object.name]) {
                    object.items.forEach(function (item) {
                        if (body[object.name][item] == undefined) {
                            requiredItem = item + " is required in " + object.name + " object";
                        }
                    });
                }
                else {
                    requiredObject = "object " + object.name + " is required in the json body";
                }
            });
            if (requiredObject == undefined) {
                if (requiredItem == undefined) {
                    return true;
                }
                else {
                    response.status(400).send({ "error": requiredItem });
                    return false;
                }
            }
            else {
                response.status(400).send({ "error": requiredObject });
                return false;
            }
        }
        else {
            response.status(400).send({ "error": "null body" });
            return false;
        }
    };
    return Utils;
}());
exports.default = Utils;
//# sourceMappingURL=Utils.js.map