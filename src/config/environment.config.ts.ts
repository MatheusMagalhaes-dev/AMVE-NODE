import dotenv from 'dotenv';

import type { TEnvironment } from '@ts';

dotenv.config();

export const environment: TEnvironment = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: Number(process.env.PORT) || 3000,
    APP_URL: process.env.APP_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    
}