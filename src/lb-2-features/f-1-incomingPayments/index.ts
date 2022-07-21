import {Router} from 'express';
import {getIncomingPayments} from './a-1-controllers/getIncomingPayments';
import {createIncomingPayments} from './a-1-controllers/createIncomingPayments';
import {updateIncomingPayment} from './a-1-controllers/updateIncomingPayment';

const incomingPayments = Router();
incomingPayments.get('/companies/:id/incoming-payments', getIncomingPayments); //for dev
incomingPayments.post('/companies/:id/incoming-payments', createIncomingPayments);
incomingPayments.put('/companies/:id/incoming-payments', updateIncomingPayment);



export default incomingPayments;