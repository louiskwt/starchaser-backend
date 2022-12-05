import * as dotenv from "dotenv";

dotenv.config();

export const PORT = Number(process.env.PORT) || 5000;

export const DB_URL: string = process.env.DB_URL || "";
