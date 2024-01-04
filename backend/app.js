const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require('fs')

const transporter = require("./Config/nodeMailerConfig")

const db = require("./Config/dbConfig");

const session = require('express-session');

const pm2 = require("pm2");

const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const dotenv = require("dotenv").config();

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

app.get('/getSpecificClaim',authenticateUser, (req, res) => {
 
  const LeadId = req.query.LeadId;
  console.log(LeadId);
  const sql = "CALL GetInfoByLeadId(?)";
  db.query(sql,[LeadId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

app.post("/sendEmail/1",authenticateUser,(req,res)=>{
  const {vehicleNo,PolicyNo,Insured,Date,toMail} = req.body;

  const emailContent = `
    Dear Sir/Madam,

    Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,

      We are Appointed for the survey of vehicle no.${vehicleNo}, Insured:${Insured} & Policy No.-${PolicyNo} on ${Date} from the United India 
    Insurance co. Ltd., So we request you please provide the complete contact deatils & mails of Repairer/insured. So that we 
    can procedd further in your case and we also request 
    you to provide the following details as follows:-

    1) Original DL/Rc For verification
    2) Written Statement in Breif
    3) Estimate Copy
    5) Spot Snaps/Video(If Any)
    6) Claim Form filled completely Filled & Duly Signed & mentioning Mobile no.
    7) Discharge Voucher completely Filled & Duly Signed
    8) Satisfaction Voucher completely Filled & Duly Signed(If Cashless)
    9) Current year Policy
    10) Previous Year Policy
    11) Pan Card
    12) Aadhar Card
    13) Cancel Cheque Of Insured with name mentioned on it(If Cashless Provide the Repairer cheque)
    14) PI Report(If Break In the policy)
    15) TP Affidavit on Rs10/- stamp paper
    16) MLC Report(If Any)
    17) Towing Bill/Crane Bill(If Any)

        Please provide the clear copy of all the documents so that the claim processing can be fast

    Note:-  If We Cannot get the response with in 02 days we will inform the insurer that the insured is not interseted in the
            claim. So close the file as"No Claim" in non copperation & non submission of the documents. 

  `;

  const mailOptions = {
    from: 'infosticstech@gmail.com',
    to: toMail,
    subject: 'Survey Request for Vehicle Claim',
    text: emailContent,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });

})

app.post("/sendEmail/2",authenticateUser,(req,res)=>{
  const {vehicleNo,PolicyNo,Insured,Date} = req.body;

  const emailContent = `
    Dear Sir/Madam,

    Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,

      We are Appointed for the survey of vehicle no.${vehicleNo}, Insured:${Insured} & Policy No.-${PolicyNo} on ${Date} and the approval
      is as follows;-
     Parts
     1) Fr Bumper- New Allowed
     2) FR Grill- New Allowed
     3) LH Head LIght- new Allowed
     4) LH Fender0- Repair Allowed
     Labour
     1) Fr Bumper- R/R-150, Painting-2500
     2) LH Head Light- R/R-100
     3) LH Fender- Denting-250, Painting-2200
     
         Further approval will be provided after dismentaling of the vehicle.
     
     Note:- Pleasae consider that the the claim is payable  subject to policy terms & conditions & Cashless facility will be allowed 
            Subject to all the documents get verified from online. It is for your information please.
  `;

  const mailOptions = {
    from: 'infosticstech@gmail.com',
    to: 'ivijayrajsingh@gmail.com',
    subject: 'Survey Request for Vehicle Claim',
    text: emailContent,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });

})

app.post("/sendEmail/3",authenticateUser,(req,res)=>{
  const {date} = req.body;

  const currentDate = new Date();

  const emailContent = `
  Dear Sir/Madam,

  Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,
  
   We have conducted the online survey on ${currentDate} & also mailed you regarding the documents on ${date} and now again we rquest you
  to please provide the follwong documents to procedd further in your case:-
  
  1) What is the Status of the said vheicle
  2) How much time it will take to repair the vehicle
  3) Please provide UR & RI Snaps
  4) Invoice Bill duly signed & stamped of dealer
  5) Payment receipt duly signed & stamped of dealer
  6) Previous Year Policy
  7) Pan Card
  8) Please destorey the items properly in the RI, Otherwise we will treat the part is repaired
     
      Please provide the clear copy of all the documents so that the claim processing can be fast
  
  Note:- If We Cannot get the response with in 01 day we will inform the insurer that the insured is not interseted in the
          claim. So close the file as"No Claim" in non copperation & non submission of the documents. 
  `;

  const mailOptions = {
    from: 'infosticstech@gmail.com',
    to: 'ivijayrajsingh@gmail.com',
    subject: 'Survey Request for Vehicle Claim',
    text: emailContent,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });

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
  const region = req.query.region;
  const sql = "CALL GetPolicyInfoByRegion(?)";
  db.query(sql,[region], (err, result) => {
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

app.post('/addClaim', (req, res) => {
  const {
    SurveyType,
    ReferenceNo,
    PolicyIssuingOffice,
    PolicyNumber,
    PolicyPeriodStart,
    PolicyPeriodEnd,
    ClaimNumber,
    ClaimServicingOffice,
    AddedBy,
    Region,
    InspectionType,
    IsClaimCompleted,
    IsActive,
    InsuredName,
    InsuredMobileNo1,
    InsuredMobileNo2,
    InsuredMailAddress,
    InsuredAddress,
    RegisteredNumber,
    GarageNameAndAddress,
    GarageContactNo1,
    GarageContactNo2,
    PlaceOfLoss,
    NatureOfLoss,
    EstimatedLoss
  } = req.body;
  
  // SQL query to insert data into the respective tables
  const sqlQuery = `
    -- Insert into ClaimDetails table
    INSERT INTO ClaimDetails (
      SurveyType,
      ReferenceNo,
      PolicyIssuingOffice,
      PolicyNumber,
      PolicyPeriodStart,
      PolicyPeriodEnd,
      ClaimNumber,
      ClaimServicingOffice,
      AddedBy,
      Region,
      InspectionType,
      IsClaimCompleted,
      IsActive
    ) VALUES (
      '${SurveyType}',
      '${ReferenceNo}',
      '${PolicyIssuingOffice}',
      '${PolicyNumber}',
      '${PolicyPeriodStart}',
      '${PolicyPeriodEnd}',
      '${ClaimNumber}',
      '${ClaimServicingOffice}',
      '${AddedBy}',
      '${Region}',
      '${InspectionType}',
      '${IsClaimCompleted}',
      '${IsActive}'
    );
  
    -- Insert into InsuredDetails table
    INSERT INTO InsuredDetails (
      InsuredName,
      InsuredMobileNo1,
      InsuredMobileNo2,
      InsuredMailAddress,
      InsuredAddress
    ) VALUES (
      '${InsuredName}',
      '${InsuredMobileNo1}',
      '${InsuredMobileNo2}',
      '${InsuredMailAddress}',
      '${InsuredAddress}'
    );
  
    -- Insert into VehicleDetails table
    INSERT INTO VehicleDetails (
      RegisteredNumber
    ) VALUES (
      '${RegisteredNumber}'
    );
  
    -- Insert into GarageDetails table
    INSERT INTO GarageDetails (
      GarageNameAndAddress,
      GarageContactNo1,
      GarageContactNo2
    ) VALUES (
      '${GarageNameAndAddress}',
      '${GarageContactNo1}',
      '${GarageContactNo2}'
    );
  
    -- Insert into AccidentDetails table
    INSERT INTO AccidentDetails (
      PlaceOfLoss,
      NatureOfLoss,
      EstimatedLoss
    ) VALUES (
      '${PlaceOfLoss}',
      '${NatureOfLoss}',
      '${EstimatedLoss}'
    );
  `;
  
  // Execute the SQL queries using your database connection
  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      return res.status(500).json({ error: 'Error inserting data into the database.' });
    }
  
    res.status(200).json({ message: 'Data inserted successfully.' });
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
    pm2.connect((err) => {
      if (err) {
        console.error(err);
        process.exit(2);
      }
    
      pm2.start({
        script: "./app.js",
        name: "db",
        autorestart: true,
        watch: true, // Enable auto-restart on file changes
        max_memory_restart: '1G', // Adjust as needed based on your server's memory requirements
      }, (err, apps) => {
        pm2.disconnect(); // Disconnect from pm2 once started
        if (err) throw err;
        console.log('Server started successfully using pm2.');
      });

    });
    
  });
