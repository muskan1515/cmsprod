const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'vijay0207',
    host: '100.26.46.58',
    database: 'claims',
    password: 'Whyuwant@2827',
  });
  const instance = db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

  module.exports =  db;