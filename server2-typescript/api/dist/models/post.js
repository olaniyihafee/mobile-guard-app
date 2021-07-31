"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    byemail: String,
    about: String,
    images: String,
    video: String,
    comments: [String],
}, {
    timestamps: true
});
exports.Post = mongoose_1.model('Post', postSchema);
//# sourceMappingURL=post.js.map