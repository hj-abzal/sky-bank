import {Request, Response} from 'express';
import User, {IUser} from '../a-2-models/user';
import {DEV_VERSION} from '../../../lb-1-main/config';
import {generateToken} from './generateToken';

export const findUserByToken = (
    controller: (req: Request, res: Response, user: IUser) => void,
    inTry: string
) => async (req: Request, res: Response) => {
    const token = req.cookies.token || req.body.token || req.query.token;

    try {
        const user: IUser | null = await User.findOne({token}).exec();
        if (!user || !user.tokenDeathTime || user.tokenDeathTime < new Date().getTime()) {
            res.status(401).json({
                error: 'You are not authorized',
                inTry: inTry + '/findUserByToken/User.findOne'
            });
        } else {
            const [token, tokenDeathTime] = generateToken(user.rememberMe);

            try {
                const newUser: IUser | null = await User.findByIdAndUpdate(
                    user._id,
                    {token, tokenDeathTime},
                    {new: true}
                ).exec();

                if (!newUser) {
                    res.status(500).json({
                        error: 'not updated?',
                        in: inTry + '/User.findByIdAndUpdate'
                    });
                } else {
                    controller(req, res, newUser._doc as IUser);
                }
            } catch (e: any) {
                res.status(500).json({
                    error: 'some error: ' + e.message,
                    info: 'Back doesn\'t know what the error is...',
                    errorObject: DEV_VERSION && {...e},
                    in: inTry + '/User.findByIdAndUpdate'
                });
            }
        }
    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what error is...',
            errorObject: DEV_VERSION && {...e},
            in: inTry + '/findUserByToken/User.findOne'
        });
    }
};