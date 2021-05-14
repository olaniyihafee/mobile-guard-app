"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const errors_1 = require("../errors");
const validate = async (schema, payload) => {
    try {
        await schema.validateAsync(payload, { abortEarly: false });
    }
    catch (e) {
        throw new errors_1.BadRequest(e);
    }
};
exports.validate = validate;
//# sourceMappingURL=joi.js.map