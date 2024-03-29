import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();
let connectionString;

if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.TEST_DB_URL;
}
if (process.env.NODE_ENV === 'development') {
  connectionString = process.env.DEV_DB_URL;
}
if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.DATABASE_URL;
}
// Instantiate pool
const pool = new Pool({
  connectionString,
});

class Db {
  /**
   * query() queries database
   *
   * @param {string} queryString
   * @param {*} params
   */
  static async query(queryString, params) {
    return new Promise((resolve, reject) => {
      pool
        .query(queryString, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}


export default Db;
