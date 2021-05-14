"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.notFound = exports.catchAsync = void 0;
const catchAsync = (handler) => (req, res, next) => handler(req, res, next);
exports.catchAsync = catchAsync;
const notFound = (req, res, next) => res.json({ message: 'Not Found' });
exports.notFound = notFound;
const serverError = (err, req, res, next) => {
    if (!err.status) {
        console.error(err.stack);
    }
    res.status(err.status || 500)
        .json({ message: err.message || 'Internal Server Error' });
};
exports.serverError = serverError;
//# sourceMappingURL=error.js.map