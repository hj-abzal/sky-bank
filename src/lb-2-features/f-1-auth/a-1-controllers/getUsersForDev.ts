import {Request, Response} from 'express';
import {DEV_VERSION} from '../../../lb-1-main/config';
import Users from '../a-2-models/user';
import {cookieSettings} from '../../../lb-1-main/cookie';

export const getUsersForDev = async (req: Request, res: Response) => {
    if (DEV_VERSION) {
        try {
            const users = await Users.find({isAdmin: false})
                .select('_id email rememberMe isAdmin name created updated')
                .exec();

            res.status(200)
                .json({users, warnings: 'This endpoint is for only for development needs!!!'});
        } catch (e: any) {
            res.status(500).json({
                error: 'some error: ' + e.message,
                info: 'Back doesn\'t know what the error is...',
                errorObject: {...e},
                in: 'getUsersForDev/Users.find'
            });
        }
    } else {
        res.cookie('fdfsdfsd',' user.token', {
            ...cookieSettings,
            expires: new Date( 0)
        })
        res.send({fd: 'kfls'})
        // res.status(200).json({e: 'wtf?'})
        // res.status(401).json({error: 'endpoint is closed', in: 'getUsersForDev'});
    }
};