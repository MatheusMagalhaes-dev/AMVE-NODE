import dotenv from 'dotenv';

import type { TEnvironment } from "../ts";

dotenv.config();

export const environment: TEnvironment = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: Number(process.env.PORT) || 3000,
    APP_URL: process.env.APP_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    BCRYPT_SALT: Number(process.env.BCRYPT_SALT) || 10,

    DATABASE_USER: process.env.DATABASE_USER || '',
    DATABASE_PASS: process.env.DATABASE_PASS || '',
    DATABASE_HOST: process.env.DATABASE_HOST || '',
    DATABASE_NAME: process.env.DATABASE_NAME || '',
};