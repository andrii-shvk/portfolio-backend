import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const client = new Pool({
    ssl: {
        rejectUnauthorized: false,
    },
    host: process.env.DB_HOST,
    port: Number(process.env.DB_CLIENTPORT), // tunnel
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

export { client };
