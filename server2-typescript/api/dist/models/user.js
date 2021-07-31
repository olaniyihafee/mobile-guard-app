"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const config_1 = require("../config");
const userSchema = new mongoose_1.Schema({
    appelation: String,
    email: String,
    name: String,
    password: String,
    profilePicture: String,
    posts: [String],
}, {
    timestamps: true
});
userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcryptjs_1.hash(this.password, config_1.BCRYPT_WORK_FACTOR);
    }
});
userSchema.methods.matchesPassword = function (password) {
    return bcryptjs_1.compare(password, this.password);
};
userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest }, options) => rest
});
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.js.map