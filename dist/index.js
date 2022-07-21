"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./lb-1-main/config");
const app_1 = require("./lb-1-main/app");
const routes_1 = require("./lb-1-main/routes");
const app = (0, express_1.default)();
(0, app_1.appUse)(app);
(0, routes_1.routes)(app);
const server = http_1.default.createServer(app);
mongoose_1.default.connect(config_1.MongoDBUris)
    .then(() => {
    console.log('MongoDB is connected successfully!');
    const port = process.env.PORT || config_1.PORT;
    server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Server listening on port: ' + port);
    }));
})
    .catch(e => console.log('Connection error: ' + Object.assign({}, e)));
process.on('unhandledRejection', (reason, promise) => {
    console.log('UnhandledRejection: ', reason, promise);
});
//# sourceMappingURL=index.js.map