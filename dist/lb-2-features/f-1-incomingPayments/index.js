"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getIncomingPayments_1 = require("./a-1-controllers/getIncomingPayments");
const createIncomingPayments_1 = require("./a-1-controllers/createIncomingPayments");
const updateIncomingPayment_1 = require("./a-1-controllers/updateIncomingPayment");
const incomingPayments = (0, express_1.Router)();
incomingPayments.get('/companies/:id/incoming-payments', getIncomingPayments_1.getIncomingPayments); //for dev
incomingPayments.post('/companies/:id/incoming-payments', createIncomingPayments_1.createIncomingPayments);
incomingPayments.put('/companies/:id/incoming-payments', updateIncomingPayment_1.updateIncomingPayment);
exports.default = incomingPayments;
//# sourceMappingURL=index.js.map