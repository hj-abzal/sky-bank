import {Request, Response} from 'express';

export const emailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;

export const validateEmail = (email: string): boolean => emailRegExp.test(email);
export const validatePassword = (password: string): boolean => password.length > 7;

export const validateAuth = (req: Request, res: Response, inInfo: string): boolean => {
    const isEmailValid = validateEmail(req.body.email);
    const isPasswordValid = validatePassword(req.body.password);

    if (!isEmailValid || !isPasswordValid) {
        res.status(400).json({
            error: 'not valid email/password',
            in: inInfo,
            isEmailValid,
            isPasswordValid,
            emailRegExp: '',
            passwordRegExp: 'Password must me more than 7 characters...'
        })
        return false;
    } else return true;
};