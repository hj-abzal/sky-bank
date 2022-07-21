import {Request, Response} from 'express';
import IncomingPayment from '../a-2-models/incomingPayments';

export const updateIncomingPayment = async (req: Request, res: Response) => {
    const {_id, status} = req.body;
    try {
        const updatedIncomingPayment = await IncomingPayment.findByIdAndUpdate(
            _id,
            {
                status,
            },
            {new: true}
        ).exec();
        res.status(200).json({updatedIncomingPayment});

    } catch (e: any) {
        res.status(500).json({
            info: 'Back doesn\'t know what the error is...'
        });
    }
};