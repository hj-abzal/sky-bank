import {Request, Response} from 'express';
import {status400, status500} from '../a-3-helpers/errorStatuses';
import User, {IUser} from '../a-2-models/user';
import {resCookie} from '../../../lb-1-main/cookie';

export const updateUser = async (req: Request, res: Response, user: IUser) => {
    const {name, avatar} = req.body;

    if (!name && !avatar) {
        status400(
            res,
            'no name and avatar in body',
            user,
            'updateUser'
        );
    } else {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                user._id,
                {
                    name: name || user.name,
                    avatar: avatar || user.avatar
                },
                {new: true}
            ).exec();

            if (!updatedUser) status500(res, 'not updated?', user, 'updateUser');
            else {
                const body: any = {...updatedUser._doc};

                delete body.password;
                delete body.resetPasswordToken;
                delete body.resetPasswordTokenDeathTime;

                resCookie(res, user).status(200).json({
                    updatedUser: body,
                    token: user.token,
                    tokenDeathTime: user.tokenDeathTime
                });
            }
        } catch (e: any) {
            status500(res, e, user, 'updateUser/User.findByIdAndUpdate');
        }
    }
};