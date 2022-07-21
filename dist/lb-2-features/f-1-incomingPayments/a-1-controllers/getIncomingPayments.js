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
exports.getIncomingPayments = void 0;
const incomingPayments_1 = __importDefault(require("../a-2-models/incomingPayments"));
const getIncomingPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = req.query.status;
    try {
        const incomingPayments = yield incomingPayments_1.default.find({ status })
            .exec();
        res.status(200)
            .json(incomingPayments);
    }
    catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: Object.assign({}, e),
            in: 'getIncomingPayments/IncomingPayments.find'
        });
    }
});
exports.getIncomingPayments = getIncomingPayments;
//# sourceMappingURL=getIncomingPayments.js.map