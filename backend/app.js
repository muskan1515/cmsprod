const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: 'your_mysql_host',
//   user: 'your_mysql_user',
//   password: 'your_mysql_password',
//   database: 'your_database_name',
// });

const db = mysql.createConnection({
  user: 'vijay0207',
  host: '100.26.46.58',
  database: 'claims',
  password: 'Whyuwant@2827',
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware for user authentication
const authenticateUser = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).send('Unauthorized: Missing credentials');
  }

  const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (result.length === 0) {
      return res.status(401).send('Unauthorized: Invalid credentials');
    }

    // User authenticated
    next();
  });
};

app.use(authenticateUser);

// Create
app.post('/claim-details', authenticateUser, (req, res) => {
  const sql = 'INSERT INTO claim_details SET ?';
  db.query(sql, req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(`Claim Details added with ID: ${result.insertId}`);
  });
});

app.post('/vehicle-details', authenticateUser, (req, res) => {
  const sql = 'INSERT INTO vehicle_details SET ?';
  db.query(sql, req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(`Vehicle Details added with ID: ${result.insertId}`);
  });
});

app.post('/driver-details', authenticateUser, (req, res) => {
  const sql = 'INSERT INTO driver_details SET ?';
  db.query(sql, req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(`Driver Details added with ID: ${result.insertId}`);
  });
});

// Read
app.get('/claim-details/:claimNo', authenticateUser, (req, res) => {
  const sql = 'SELECT * FROM claim_details WHERE claim_no = ?';
  db.query(sql, [req.params.claimNo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

app.get('/vehicle-details/:claimNo', authenticateUser, (req, res) => {
  const sql = 'SELECT * FROM vehicle_details WHERE claim_no = ?';
  db.query(sql, [req.params.claimNo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

app.get('/driver-details/:claimNo', authenticateUser, (req, res) => {
  const sql = 'SELECT * FROM driver_details WHERE claim_no = ?';
  db.query(sql, [req.params.claimNo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

// Update
app.put('/claim-details/:claimNo', authenticateUser, (req, res) => {
  const sql = 'UPDATE claim_details SET ? WHERE claim_no = ?';
  db.query(sql, [req.body, req.params.claimNo], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send('Claim Details updated');
  });
});

app.put('/vehicle-details/:claimNo', authenticateUser, (req, res) => {
  const sql = 'UPDATE vehicle_details SET ? WHERE claim_no = ?';
  db.query(sql, [req.body, req.params.claimNo], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send('Vehicle Details updated');
  });
});

app.put('/driver-details/:claimNo', authenticateUser, (req, res) => {
  const sql = 'UPDATE driver_details SET ? WHERE claim_no = ?';
  db.query(sql, [req.body, req.params.claimNo], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send('Driver Details updated');
  });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });