"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = require("../validation");
const models_1 = require("../models");
const auth_1 = require("../auth");
const middleware_1 = require("../middleware");
const errors_1 = require("../errors");
const router = express_1.Router();
router.post('/register/personal_registration', middleware_1.guest, middleware_1.uploadFiles, middleware_1.catchAsync(async (req, res) => {
    console.log(req);
    await validation_1.validate(validation_1.registerSchema, req.body);
    console.log('HIT');
    const { email, name, password } = req.body;
    const { id } = req.file;
    const profilePicture = id;
    console.log(req.body);
    console.log(id);
    const found = await models_1.User.exists({ email });
    if (found) {
        throw new errors_1.BadRequest('Invalid email');
    }
    const user = await models_1.User.create({
        email, name, password, profilePicture
    });
    auth_1.logIn(req, user.id);
    console.log(user.id);
    res.json({ message: 'OK' });
}));
exports.default = router;
//# sourceMappingURL=register.js.map