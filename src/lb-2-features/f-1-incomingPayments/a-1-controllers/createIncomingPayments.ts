import {Request, Response} from 'express';
import {DEV_VERSION} from '../../../lb-1-main/config';
import IncomingPayment, {IIncomingPayment} from '../a-2-models/incomingPayments';

export const createIncomingPayments = async (req: Request, res: Response) => {
    try {
        const newIncomingPayment: IIncomingPayment = await IncomingPayment.create(req.body);
        res.status(201).json(newIncomingPayment);
    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: DEV_VERSION && {...e},
            in: 'createIncomingPayments'
        });
    }
};


