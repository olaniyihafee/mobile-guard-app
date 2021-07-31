"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationGroup = void 0;
const mongoose_1 = require("mongoose");
const locationGroupSchema = new mongoose_1.Schema({
    location: String,
    membersEmail: String,
    agentsEmail: String,
}, {
    timestamps: true
});
exports.LocationGroup = mongoose_1.model('LocationGroup', locationGroupSchema);
//# sourceMappingURL=locationGroup.js.map