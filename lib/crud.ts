import { Connection } from 'mysql2/promise';


export const getAllData = async (db: Connection) => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

const insertData = async (db: Connection, data: any) => {
  const [result] = await db.query('INSERT INTO users SET ?', [data]);
  return result;
};

const updateData = async (db: Connection, id: number, data: any) => {
  const [result] = await db.query('UPDATE users SET ? WHERE id = ?', [data, id]);
  return result;
};

const deleteData = async (db: Connection, id: number) => {
  const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return result;
};

//export default getAllData;
//export { getAllData, insertData, updateData, deleteData };
