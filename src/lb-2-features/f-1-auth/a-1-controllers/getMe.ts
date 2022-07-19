import {Request, Response} from 'express';
import {IUser} from '../a-2-models/user';
import {resCookie} from '../../../lb-1-main/cookie';

export const getMe = async (req: Request, res: Response, user: IUser) => {
    const body: any = {...user};

    delete body.password;
    delete body.resetPasswordToken;
    delete body.resetPasswordTokenDeathTime;

    resCookie(res, user).status(200).json({...body});
};