import {Request, Response} from 'express';
import {validateAuth} from '../a-3-helpers/validators';
import {DEV_VERSION} from '../../../lb-1-main/config';
import User, {IUser} from '../a-2-models/user';
import bCrypt from 'bcrypt';
import {generateToken} from '../a-3-helpers/generateToken';
import {getMe} from './getMe';

export const logIn = async (req: Request, res: Response) => {
    const {email, password, rememberMe} = req.body;
    if (validateAuth(req, res, 'logIn')) {
        try {
            const user: IUser | null = await User.findOne({email}).exec();

            if (!user) {
                res.status(400).json({
                    error: 'user not found', email, in: 'logIn',
                });
            } else if (!(await bCrypt.compare(password, user.password))) {
                res.status(400).json({
                    error: 'not correct password', password, in: 'logIn',
                });
            } else {
                const [token, tokenDeathTime] = generateToken(!!rememberMe);

                try {
                    const newUser: IUser | null = await User.findByIdAndUpdate(
                        user._id,
                        {token, tokenDeathTime, rememberMe: !!rememberMe},
                        {new: true}
                    ).exec();

                    if (!newUser) {
                        res.status(500).json({
                            error: 'not updated',
                            in: 'logIn/User.findByIdAndUpdate'
                        });
                    } else {
                        DEV_VERSION && console.log('IUser?: ', {...newUser}); //for dev
                        await getMe(req, res, newUser._doc as IUser);
                    }
                } catch (e: any) {
                    res.status(500).json({
                        error: 'some error: ' + e.message,
                        info: 'Back doesn\'t know what the error is...',
                        errorObject: DEV_VERSION && {...e},
                        in: 'logIn/User.findByIdAndUpdate'
                    });
                }
            }

        } catch (e: any) {
            res.status(500).json({
                error: 'some error: ' + e.message,
                info: 'Back doesn\'t know what the error is...',
                errorObject: DEV_VERSION && {...e},
                in: 'logIn/user.findOne'
            });
        }
    }
};