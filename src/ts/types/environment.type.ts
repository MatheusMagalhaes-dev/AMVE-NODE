export type TEnvironment = {
    ENV: 'development' | 'production' | 'Test' | string;
    PORT: number;
    APP_URL?: string;
    JWT_SECRET?: string;
    BCRYPT_SALT: number;

    DATABASE_USER: string;
    DATABASE_PASS: string;
    DATABASE_HOST: string;
    DATABASE_NAME: string;
};
