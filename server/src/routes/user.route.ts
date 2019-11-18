import { TRoutesInput } from "../types/routes";

import UserController from '../controllers/user.controller';
import {IUserInfo} from "../interfaces/user.interface";

function generateAccessToken(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function createUser({ app }: TRoutesInput) {
    app.post('/user/create', async (req, res) => {
        const user = await UserController.CreateUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            accessToken: generateAccessToken(10)
        });

        return res.send({ user });
    })
}

function getUser({ app }: TRoutesInput) {
    app.get('/user', async (req, res) => {
        const user = await UserController.GetUserByAccessToken(req.header('Authorization').split(' ')[1]);

        return res.send({ user });
    });
}

function loginUser({ app }: TRoutesInput) {
    app.post('/user/login', async (req, res) => {
        const user = await UserController.GetUserByEmailAndPassword(req.body.email, req.body.password);

        return res.send({ user });
    })
}

export default ({ app }: TRoutesInput) => {
    createUser({ app });
    getUser({ app });
    loginUser({ app });
}
