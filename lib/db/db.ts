// db.ts
import { createConnection, Connection } from 'mysql2/promise';

let connection: Connection | null = null;

export const connectDB = async () => {
  connection = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });
};

export const getConnection = () => {
  if (!connection) {
    throw new Error('Database connection not established.');
  }
  return connection;
};
