import {Express, Request, Response} from 'express';
import incomingPayments from '../lb-2-features/f-1-incomingPayments';

export const routes = (app: Express) => {
    app.use('', incomingPayments);

    //default
    app.use((req: Request, res: Response) => {
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