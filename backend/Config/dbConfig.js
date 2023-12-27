const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'MTTestUser',
    host: 'n1nlmysql43plsk.secureserver.net',
    database: 'MTTestDB',
    password: 'MTTestUserPassword',
  });
  const instance = db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

  module.exports =  db;