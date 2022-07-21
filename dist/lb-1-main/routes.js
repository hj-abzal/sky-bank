"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const f_1_incomingPayments_1 = __importDefault(require("../lb-2-features/f-1-incomingPayments"));
const routes = (app) => {
    app.use('', f_1_incomingPayments_1.default);
    //default
    app.use((req, res) => {
        console.log('Bad url: ', req.method, req.url);
        res.status(404).json({
            error: 'Bad url',
            method: req.method,
            url: req.url,
            query: req.query,
            body: req.body
        });
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map