"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.active = exports.auth = exports.guest = void 0;
const auth_1 = require("../auth");
const errors_1 = require("../errors");
const config_1 = require("../config");
const error_1 = require("./error");
const guest = (req, res, next) => {
    if (auth_1.isLoggedIn(req)) {
        return next(new errors_1.BadRequest('You are already logged in'));
    }
    next();
};
exports.guest = guest;
const auth = (req, res, next) => {
    if (!auth_1.isLoggedIn(req)) {
        return next(new errors_1.Unauthorized('You must be loggedin'));
    }
};
exports.auth = auth;
exports.active = error_1.catchAsync(async (req, res, next) => {
    if (auth_1.isLoggedIn(req)) {
        const now = Date.now();
        const { createdAt } = req.session;
        if (now > createdAt + config_1.SESSION_ABSOLUTE_TIMEOUT) {
            await auth_1.logOut(req, res);
            return next(new errors_1.Unauthorized('Session expired'));
        }
    }
    next();
});
//# sourceMappingURL=auth.js.map