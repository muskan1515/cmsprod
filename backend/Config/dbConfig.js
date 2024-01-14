const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const util = require('util')
// const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
  connectTimeout: 10000, 
  user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    
})

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }

  if (connection) connection.release()

  return
})

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query)

module.exports = pool
// let db;

// function handleDisconnect() {
//   db = mysql.createConnection({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//   });

//   db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//       setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
//     } else {
//       console.log('Connected to MySQL');
//     }
//   });

//   db.on('error', (err) => {
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       console.error('Database connection was closed. Reconnecting...');
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   });
// }

// // Initial connection
// handleDisconnect();

// module.exports = db;
