const USER_NAME = process.env.MONGO_DB_USER_NAME || 'suan';
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || '7777';
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'cluster0.s4ai6.mongodb.net'; // bd for tests

export const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
export const DEV_VERSION = false;
export const PORT = 8080;

