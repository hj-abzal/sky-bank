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
exports.createIncomingPayments = void 0;
const config_1 = require("../../../lb-1-main/config");
const incomingPayments_1 = __importDefault(require("../a-2-models/incomingPayments"));
const createIncomingPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newIncomingPayment = yield incomingPayments_1.default.create(req.body);
        res.status(201).json(newIncomingPayment);
    }
    catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: config_1.DEV_VERSION && Object.assign({}, e),
            in: 'createIncomingPayments'
        });
    }
});
exports.createIncomingPayments = createIncomingPayments;
//# sourceMappingURL=createIncomingPayments.js.map