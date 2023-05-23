export type TEnvironment = {
  ENV: "development" | "production" | "Test" | string;
  PORT: number;
  APP_URL?: string;
  DATABASE_URL: string;
  JWT_SECRET?: string;
};
