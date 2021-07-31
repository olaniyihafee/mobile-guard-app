"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_OPTIONS = exports.MONGO_URI = void 0;
const { MONGO_ROOTNAME = 'root', MONGO_USERNAME = 'admin', MONGO_PASSWORD = 'secret', MONGO_HOST = 'localhost', MONGO_PORT = 27017, MONGO_DATABASE = 'auth' } = process.env;
const mongo_uri_from_heroku = process.env.MONGODB_URI;
exports.MONGO_URI = `mongodb://localhost:27017/juniper?authSource=jumong`;
exports.MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
//# sourceMappingURL=db.js.map