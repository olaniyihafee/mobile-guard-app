"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = express_1.Router();
router.get('/', middleware_1.auth, middleware_1.catchAsync(async (req, res) => {
    res.send({ message: "ok" });
}));
exports.default = router;
//# sourceMappingURL=test.js.map