import { IUser, ICreateUser, IUserInfo } from "../interfaces/user.interface";
import User from "../models/user.model";

async function CreateUser({ email, firstName, lastName, password, accessToken} : ICreateUser): Promise<IUserInfo> {
    return User.create({ email, firstName, lastName, password, accessToken })
        .then((data: ICreateUser) => {
            let response : IUserInfo = {
                email: data.email,
                lastName: data.lastName,
                firstName: data.firstName,
                accessToken: data.accessToken
            };
            return response;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function GetUserByAccessToken(accessToken: string): Promise<IUser[]> {
    return User.find({ accessToken: accessToken })
        .then((data: IUser[]) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function GetUserByEmailAndPassword(email: string, password: string): Promise<IUserInfo> {
    console.log(email);
    return User.find({ email: email, password: password })
        .then((data: IUser[]) => {
            console.log(data);
            let response : IUserInfo = {
                email: data[0].email,
                lastName: data[0].lastName,
                firstName: data[0].firstName,
                accessToken: data[0].accessToken
            };
            return response;
        })
        .catch((error: Error) => {
            throw error;
        })
}

export default { CreateUser, GetUserByAccessToken, GetUserByEmailAndPassword };
