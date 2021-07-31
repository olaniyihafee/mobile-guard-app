"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.register = exports.login = exports.home = exports.groups = exports.notifications = exports.you = void 0;
var you_1 = require("./you");
Object.defineProperty(exports, "you", { enumerable: true, get: function () { return __importDefault(you_1).default; } });
var notifications_1 = require("./notifications");
Object.defineProperty(exports, "notifications", { enumerable: true, get: function () { return __importDefault(notifications_1).default; } });
var groups_1 = require("./groups");
Object.defineProperty(exports, "groups", { enumerable: true, get: function () { return __importDefault(groups_1).default; } });
var home_1 = require("./home");
Object.defineProperty(exports, "home", { enumerable: true, get: function () { return __importDefault(home_1).default; } });
var login_1 = require("./login");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return __importDefault(login_1).default; } });
var register_1 = require("./register");
Object.defineProperty(exports, "register", { enumerable: true, get: function () { return __importDefault(register_1).default; } });
var test_1 = require("./test");
Object.defineProperty(exports, "test", { enumerable: true, get: function () { return __importDefault(test_1).default; } });
//# sourceMappingURL=index.js.map