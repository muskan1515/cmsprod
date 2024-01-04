const mysql = require('mysql2');
const dotenv = require('dotenv').config();

let db;

function handleDisconnect() {
  db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
    } else {
      console.log('Connected to MySQL');
    }
  });

  db.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed. Reconnecting...');
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

// Initial connection
handleDisconnect();

module.exports = db;
