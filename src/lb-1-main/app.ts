import {Express, NextFunction, Request, Response} from 'express';
import {cookie} from './cookie';
import bodyParser from 'body-parser';

export const appUse = (app: Express) => {
    cookie(app);

    // parse application/json
    app.use(bodyParser.json({limit: '7mb'}));

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({limit: '7mb', extended: true}))

    app.use((req: Request, res: Response, next: NextFunction) => {
        console.log('Time: ', new Date().toString());
        console.log('---', req.method, req.url, 'params:', req.params);
        console.log('query:', req.query);
        console.log('body:', req.body);
        console.log('cookies', req.cookies);
        // console.log("headers:", req.headers);
        // console.log("rawHeaders:", req.rawHeaders);
        next();
    });
};