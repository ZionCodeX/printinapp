// db.ts
import { createPool, Pool, PoolOptions } from 'mysql2/promise';

const dbConfig: PoolOptions = {
    host: '45.84.205.0',
    user: 'u324293482_printin',
    password: '@@Project2020',
    database: 'u324293482_printin',
    connectionLimit: 10,
};

const pool: Pool = createPool(dbConfig);

export default pool;



