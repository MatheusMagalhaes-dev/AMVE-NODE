import { TTimestamps } from "../types";

export interface IUser extends TTimestamps {
    name: string;
    email: string;
    password: string;
}