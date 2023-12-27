const express = require('express');
// const { Pool } = require('pg');

// Replace these values with your PostgreSQL database credentials


const mysql = require('mysql2');


  const bodyParser = require('body-parser');

  
  const app = express();
  const port = 3000;
  
  // Middleware to parse JSON in request body
  app.use(bodyParser.json());
  
  // Database connection
  const dbConfig = {
    user: 'vijay0207',
    host: '100.26.46.58',
    database: 'claims',
    password: 'Whyuwant@2827',
  };
  const connection = mysql.createConnection(dbConfig);
  
  // Login route
  app.post('/login', (req, res) => {
    const { username, password_hash } = req.body;
    console.log(req.body)
    // Query to check login credentials in the database
    const query = 'SELECT * FROM login WHERE username = ? AND password_hash = ?';
    const values = [username, password_hash];
  
    // Execute the query
    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Database error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
  
      // Check if the user exists
      if (results.length > 0) {
        // User found, respond with success message
        res.json({ message: 'Successfully logged in' });
      } else {
        // User not found, respond with an error message
        res.status(404).json({ message: 'User not found' });
      }
    });
  });
  
  app
  .listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });