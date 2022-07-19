import {v1} from 'uuid';

export const generateToken = (rememberMe: boolean): [string, number] => {
    const token = v1();
    const tokenDeathTime = rememberMe
    ? Date.now() + (1000 * 60 * 60 * 24 * 7) //7days
    : Date.now() + (1000 * 60 * 60 * 3) //3hours
    return [token, tokenDeathTime];
}
