"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DEV_VERSION = exports.MongoDBUris = void 0;
const USER_NAME = process.env.MONGO_DB_USER_NAME || 'suan';
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || '7777';
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'cluster0.s4ai6.mongodb.net'; // bd for tests
exports.MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
exports.DEV_VERSION = false;
exports.PORT = 7542;
//# sourceMappingURL=config.js.map