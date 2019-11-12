"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoutesIO = (function () {
    function RoutesIO() {
    }
    RoutesIO.defineRoutes = function (io) {
        io.on('connection', function (socket) {
            socket.emit('welcome', 'welcome to socket.io');
        });
    };
    return RoutesIO;
}());
exports.default = RoutesIO;
//# sourceMappingURL=routerIO.js.map