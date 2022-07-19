import cors from 'cors';
import {Express, Response} from 'express';
import cookieParser from 'cookie-parser';
import {IUser} from '../lb-2-features/f-1-auth/a-2-models/user';
import {DEV_VERSION} from './config';

export const cookieSettings = DEV_VERSION ? {} : {someSite: 'none' as const, secure: true}

export const cookie = (app: Express) => {

    // const whitelist = ['http://localhost:3000', 'http://my-front.com'];
    const corsOptions = {
        credentials: true,
        origin: (
            origin: string | undefined,
            callback: (err: Error | null, allow?: boolean) => void
        ) => {
            // if (whitelist.includes(origin || '')) {
            //     return callback(null, true);
            // }
            // callback(new Error('Not allowed by CORS'));

            console.log('origin: ', origin);
            callback(null, true); //everyone is allowed
        }
    };

    app.use(cors(corsOptions));
    app.use(cookieParser());
};

export const resCookie = (res: Response, user: IUser) => {
    return res.cookie('token', user.token, {
        ...cookieSettings,
        expires: new Date(user.tokenDeathTime || 0)
    })
}