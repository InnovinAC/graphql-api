import dotenv from "dotenv";
dotenv.config({quiet: true});

export const config: Readonly<Record<string, string>> = Object.freeze({
    MONGODB_URI: process.env.MONGODB_URI!,
    PORT: process.env.PORT!,
    DB_NAME: process.env.DB_NAME!,
})
