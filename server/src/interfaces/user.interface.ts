import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    accessToken: string;
}

export interface ICreateUser extends IUserInfo {
    password: IUser['password'];
}

export interface IUserInfo
{
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
    accessToken: IUser['accessToken'];
}
