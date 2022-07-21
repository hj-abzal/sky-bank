import {Request, Response} from 'express';
import IncomingPayment from '../a-2-models/incomingPayments';

export const getIncomingPayments = async (req: Request, res: Response) => {
    const status = req.query.status
    try {
        const incomingPayments = await IncomingPayment.find({status})
            .exec();

        res.status(200)
            .json(incomingPayments);
    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: {...e},
            in: 'getIncomingPayments/IncomingPayments.find'
        });
    }
};