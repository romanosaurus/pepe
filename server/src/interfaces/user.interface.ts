import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    accessToken: string;
}

export interface ICreateUser {
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
    password: IUser['password'];
    accessToken: IUser['accessToken'];
}

export interface IUserInfo
{
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
    accessToken: IUser['accessToken'];
}
