"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    var method = req.method, originalUrl = req.originalUrl, rawHeaders = req.rawHeaders;
    if (method === 'DELETE') {
        console.log("\x1b[31m", "http://".concat(rawHeaders[1], " ").concat(method, " ").concat(originalUrl));
    }
    else {
        console.log("\x1b[33m", "http://".concat(rawHeaders[1], " ").concat(method, " ").concat(originalUrl));
    }
    next();
}
exports.default = default_1;
