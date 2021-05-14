"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const models_1 = require("../models");
const validation_1 = require("../validation");
const errors_1 = require("../errors");
const auth_1 = require("../auth");
const router = express_1.Router();
router.post('/login', middleware_1.guest, middleware_1.catchAsync(async (req, res) => {
    await validation_1.validate(validation_1.loginSchema, req.body);
    const { appelation, email, password } = req.body;
    const user = await models_1.User.findOne({ email });
    if (!user || !(await user.matchesPassword(password))) {
        throw new errors_1.Unauthorized('Incorrect email or password');
    }
    auth_1.logIn(req, user.id);
    res.json({ message: 'OK' });
}));
router.post('/logout', middleware_1.auth, middleware_1.catchAsync(async (req, res) => {
    await auth_1.logOut(req, res);
    res.json({ message: 'OK' });
}));
exports.default = router;
//# sourceMappingURL=login.js.map