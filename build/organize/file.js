"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.route('/users')
    .post(function (req, res) { return res.send('hola'); })
    .delete(function (req, res) { return res.send('hola'); });
exports.default = router;
//# sourceMappingURL=file.js.map