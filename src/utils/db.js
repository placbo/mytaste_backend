// require('dotenv').config();

// const mysql = require('mysql2');

// const dbConfig = {
//   // eslint-disable-next-line no-undef
//   host: process.env.DB_HOST,
//   // eslint-disable-next-line no-undef
//   user: process.env.DB_USER,
//   // eslint-disable-next-line no-undef
//   password: process.env.DB_PASSWORD,
//   // eslint-disable-next-line no-undef
//   database: process.env.DB_DATABASE,
// };

// const pool = mysql.createPool({
//   host: dbConfig.host,
//   user: dbConfig.user,
//   database: dbConfig.database,
//   password: dbConfig.password,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// const db = pool.promise();

// /*
// const query = async (sql, params) => {
//   connection = await mysql.createConnection(dbConfig);
//   const [results] = await connection.execute(sql, params);
//   return results;
// };

// const getConnection = () => {
//   return connection;
// };
// */

// module.exports = {
//   db,
// };
