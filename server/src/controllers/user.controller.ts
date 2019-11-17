import { IUser, ICreateUser, IUserInfo } from "../interfaces/user.interface";
import User from "../models/user.model";

async function CreateUser({ email, firstName, lastName, password, accessToken} : ICreateUser): Promise<IUserInfo> {
    return User.create({ email, firstName, lastName, password, accessToken })
        .then((data: IUserInfo) => {
            return data;
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

export default { CreateUser, GetUserByAccessToken };
