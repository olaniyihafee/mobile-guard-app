"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const config_1 = require("../config");
const email = joi_1.default.string().email().min(8).max(254).lowercase().trim().required();
const name = joi_1.default.string().min(3).max(128).trim().required();
const password = joi_1.default.string().min(8).max(config_1.BCRYPT_MAX_BYTES, 'utf8')
    .regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
    .message('"{#label}" must contain one uppercase letter, one lowercase letter, and one digit')
    .required();
const passwordConfirmation = joi_1.default.valid(joi_1.default.ref('password')).required();
exports.registerSchema = joi_1.default.object({
    email,
    name,
    password,
    passwordConfirmation
});
exports.loginSchema = joi_1.default.object({
    email,
    password
});
//# sourceMappingURL=auth.js.map