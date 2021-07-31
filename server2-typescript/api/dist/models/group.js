"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const mongoose_1 = require("mongoose");
const groupSchema = new mongoose_1.Schema({
    name: String,
    groupPicture: String,
    groupPictureThumbnail: String,
    about: String,
    adminEmail: String,
    membersEmails: [String],
    membersCount: Number,
    posts: [String],
    dateCreated: Number,
}, {
    timestamps: true
});
exports.Group = mongoose_1.model('Group', groupSchema);
//# sourceMappingURL=group.js.map