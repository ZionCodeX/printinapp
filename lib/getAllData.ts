// read.ts
import pool from '@/lib/db/mysqlx';


const getAllData = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM your_table_name');
    return rows;
  } finally {
    connection.release();
  }
};

export default getAllData;
