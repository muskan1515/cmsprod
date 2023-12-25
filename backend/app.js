const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require('fs')

const db = require("./Config/dbConfig");

const session = require('express-session');

const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const app = express();

app.use(express.json());
const port = 3009;
app.use(session({
  secret: 'your-secret-key', // Replace with a secret key for session management
  resave: false,
  saveUninitialized: true,
}));



const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

// Load the credentials from your client_secret.json file obtained from the Google Cloud Console
const credentials = JSON.parse(fs.readFileSync('./OAuthCredentials..json'));

// Create an OAuth2 client
const oAuth2Client = new OAuth2Client(
  credentials.web.client_id,
  credentials.web.client_secret,
  credentials.web.redirect_uris[0]
);

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

const checkAuth = (req, res, next) => {
  if (!req.session.tokens) {
    return res.redirect(authUrl);
  }

  oAuth2Client.setCredentials(req.session.tokens);
  next();
};

// Middleware to set up the Gmail API client
const setupGmailClient = (req, res, next) => {
  req.gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  next();
};


// Set up the Express.js routes



// const db = mysql.createConnection({
//   host: 'your_mysql_host',
//   user: 'your_mysql_user',
//   password: 'your_mysql_password',
//   database: 'your_database_name',
// });

// const db = mysql.createConnection({
//   user: 'vijay0207',
//   host: '100.26.46.58',
//   database: 'claims',
//   password: 'Whyuwant@2827',
// });
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });


// Middleware for user authentication
function authenticateUser(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).send('Unauthorized: Missing or invalid Bearer token');
  }

  const token = authorizationHeader.substring('Bearer '.length);

  const sql = 'SELECT * FROM Login WHERE Token = ?';
  db.query(sql, [token], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (result.length === 0) {
      return res.status(401).send('Unauthorized: Invalid token');
    }

    // If the token is valid, add user information to the request for later use
    req.user = {
      username: result[0].username,
      // Add any other relevant user information
    };

    // Proceed to the next middleware or route
    next();
  });
}


function parseInsuranceEmail(content) {
  const regex = /Name of the Insured : (.+?)\s+Policy Number : (.+?)\s+Date of Loss : (.+?)\s+Claim No : (.+?)\s+Vehicle Particulars : (.+?)\s+/;
  const matches = content.match(regex);

  if (!matches) {
    return null; // Return null if the regex doesn't match the content structure
  }

  const [, insuredName, policyNumber, dateOfLoss, claimNumber, vehicleParticulars] = matches;

  console.log( {
    InsuredName: insuredName.trim(),
    PolicyNumber: policyNumber.trim(),
    DateOfLoss: dateOfLoss.trim(),
    ClaimNumber: claimNumber.trim(),
    VehicleParticulars: vehicleParticulars.trim(),
  });
  return {
    InsuredName: insuredName.trim(),
    PolicyNumber: policyNumber.trim(),
    DateOfLoss: dateOfLoss.trim(),
    ClaimNumber: claimNumber.trim(),
    VehicleParticulars: vehicleParticulars.trim(),
  };
}



app.get('/auth', (req, res) => {
  res.redirect(authUrl);
});

// OAuth callback endpoint
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;

  const { tokens } = await oAuth2Client.getToken(code);
  // Save tokens to the session (you can use a database in a production environment)
  req.session.tokens = tokens;

  res.redirect('/read-emails');
});
app.get('/read-emails', checkAuth, setupGmailClient, async (req, res) => {
  try {
    const fromEmail = "ivijayrajsingh@gmail.com";
    const twentyMinutesAgo = new Date();
    twentyMinutesAgo.setMinutes(twentyMinutesAgo.getMinutes() - 20);

    // Format the date in the required format for the Gmail API (YYYY/MM/DD)
    const formattedDate = twentyMinutesAgo.toISOString().slice(0, 10).replace(/-/g, '/');

    // Use the Gmail API to list messages matching the specified from email, label, and time frame
    const response = await req.gmail.users.messages.list({
      userId: 'me',
      q: `from:${fromEmail} after:${formattedDate}`,
      labelIds: ['INBOX'],
    });

    const messages = response.data.messages || [];
    if (messages.length === 0) {
      return res.json({ messages: [] });
    }

    // Retrieve the content of all matching messages as key-value pairs
    const emailContents = await Promise.all(
      messages.map(async (message) => {
        const messageId = message.id;
        const email = await req.gmail.users.messages.get({
          userId: 'me',
          id: messageId,
        });

        // Find the part that represents the text content (you may need to adjust this based on your specific use case)
        const textPart = email.data.payload.parts.find(part => part.mimeType === 'text/plain' || part.mimeType === 'text/html');

        if (textPart) {
          // Decode the content (it may be base64 encoded)
          const decodedContent = Buffer.from(textPart.body.data, 'base64').toString('utf-8');

          // Extract the Reference Number, Department, Date
          const referenceNumberMatch = decodedContent.match(/\*Reference Number:\* (.+?)\r\n/);
          const referenceNumber = referenceNumberMatch ? referenceNumberMatch[1].trim() : 'Reference Number not found';

          const departmentMatch = decodedContent.match(/\*Department:\* (.+?)\r\n/);
          const department = departmentMatch ? departmentMatch[1].trim() : 'Department not found';

          const dateMatch = decodedContent.match(/\*Date:\* (.+?)\r\n/);
          const date = dateMatch ? dateMatch[1].trim() : 'Date not found';

          // Remove everything above "Name of the Insured"
          const startIndex = decodedContent.indexOf('Name of the Insured');
          const trimmedContent = startIndex !== -1 ? decodedContent.substring(startIndex) : decodedContent;

          console.log(trimmedContent);
          return { [messageId]: { content: trimmedContent, referenceNumber, department, date } };
        } else {
          return { [messageId]: 'No text/plain or text/html part found.' };
        }
      })
    );

    const emailContentsObject = Object.assign({}, ...emailContents); // Combine key-value pairs into an object

    res.json({ emailContents: emailContentsObject });
  } catch (error) {
    console.error('Error fetching emails:', error);
    res.status(500).send('Error fetching emails');
  }
});

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

app.post("/login",(req,res)=>{
  const { username, password } = req.body;

  // console.log(username,password);
  if (!username || !password) {
    return res.status(401).send('Unauthorized: Missing credentials');
  }

  const sql = 'SELECT * FROM Login WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (result.length === 0) {
      return res.status(401).send('Unauthorized: Invalid credentials');
    }
    else{
      return res.send({msg:"Successfully Logged In!",data : result})
    }
  })

})

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

app.get('/getAllClaims',authenticateUser, (req, res) => {
  const sql = 'SELECT * FROM ClaimDetails';
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(username,password);

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const sql = 'SELECT * FROM Login WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (result.length === 1) {
      // Authentication successful
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Authentication failed
      return res.status(401).json({ error: 'Invalid credentials' });
    }
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