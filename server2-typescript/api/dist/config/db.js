"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_OPTIONS = exports.MONGO_URI = void 0;
const { MONGO_ROOTNAME = 'root', MONGO_USERNAME = 'admin', MONGO_PASSWORD = 'secret', MONGO_HOST = 'localhost', MONGO_PORT = 27017, MONGO_DATABASE = 'auth' } = process.env;
exports.MONGO_URI = `mongodb+srv://admin:8TKZZEKCtooCv3okgit@cluster0.1cuub.mongodb.net/auth?retryWrites=true&w=majority`;
exports.MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
//# sourceMappingURL=db.js.map