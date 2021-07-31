"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const models_1 = require("../models");
const router = express_1.Router();
router.get('/notifications', middleware_1.auth, middleware_1.catchAsync(async (req, res) => {
    res.json(await models_1.User.findById(req.session.userId));
}));
exports.default = router;
//# sourceMappingURL=notifications.js.map