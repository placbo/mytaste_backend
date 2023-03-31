import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || '',
};

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  database: dbConfig.database,
  password: dbConfig.password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const db = pool.promise();
