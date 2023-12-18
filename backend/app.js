const express = require('express');
// const { Pool } = require('pg');

// Replace these values with your PostgreSQL database credentials


const mysql = require('mysql2');

// Replace these values with your MySQL database credentials
// const dbConfig = {
//   host: 'your_host',
//   user: 'your_user',
//   password: 'your_password',
//   database: 'your_database',
// };
const dbConfig = {
    user: 'vijay0207',
    host: '100.26.46.58',
    database: 'claims',
    password: 'Whyuwant@2827',
  };
const connection = mysql.createConnection(dbConfig);

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL server');

  // Fetch details from the user_information table
  connection.query('SELECT * FROM login', (queryErr, results) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
    } else {
      // Print the fetched details
      console.log('Fetched details:', results);
    }

    // Close the MySQL connection
    connection.end();
  });
});
