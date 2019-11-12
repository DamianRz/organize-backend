"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorsList = (function () {
    function ErrorsList() {
        this.clientError = {
            objectRequired: 'el objeto es requerido',
            itemRequired: 'el item es requerido',
            nullBody: 'el cuerpo del mensaje es nulo',
            emailExists: 'Ya existe una cuenta con este email',
        };
        this.serverError = {};
    }
    return ErrorsList;
}());
exports.default = ErrorsList;
//# sourceMappingURL=ErrorsList.js.map