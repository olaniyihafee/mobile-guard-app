"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = void 0;
const multer = require("multer");
const multer_gridfs_storage_1 = __importDefault(require("multer-gridfs-storage"));
var storage = new multer_gridfs_storage_1.default({
    url: "mongodb://localhost:27017/juniper",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-bezkoder-${file.originalname}`;
            return filename;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-bezkoder-${file.originalname}`
        };
    }
});
exports.uploadFiles = multer({ storage: storage }).single("multi-files");
//# sourceMappingURL=upload.js.map