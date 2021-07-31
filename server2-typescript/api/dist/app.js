"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const routes_1 = require("./routes");
const createApp = (store) => {
    const app = express_1.default();
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use(express_session_1.default({
        ...config_1.SESSION_OPTIONS,
        store
    }));
    app.use(middleware_1.catchAsync(middleware_1.active));
    app.use(routes_1.you);
    app.use(routes_1.notifications);
    app.use(routes_1.groups);
    app.use(routes_1.home);
    app.use(routes_1.login);
    app.use(routes_1.register);
    app.use(routes_1.test);
    app.use(middleware_1.notFound);
    app.use(middleware_1.serverError);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map