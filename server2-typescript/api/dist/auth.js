"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.logIn = exports.isLoggedIn = void 0;
const config_1 = require("./config");
const isLoggedIn = (req) => !!req.session.userId;
exports.isLoggedIn = isLoggedIn;
const logIn = (req, userId) => {
    req.session.userId = userId;
    req.session.createdAt = Date.now();
};
exports.logIn = logIn;
const logOut = (req, res) => new Promise((resolve, reject) => {
    req.session.destroy((err) => {
        if (err)
            reject(err);
        res.clearCookie(config_1.SESSION_NAME);
        resolve();
    });
});
exports.logOut = logOut;
//# sourceMappingURL=auth.js.map