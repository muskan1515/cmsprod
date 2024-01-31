const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require('fs')

const transporter = require("./Config/nodeMailerConfig")

const db = require("./Config/dbConfig");

const session = require('express-session');

const pm2 = require("pm2")

const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const contentFunc = require("./Config/getEmailContent");
const emailHandler = require('./Config/getEmailContent');
const { default: axios } = require('axios');
const generateUniqueToken = require('./Config/generateToken');
const upload = require('./Middleware/fileHalper');
const uploadToS3 = require('./Middleware/awsUpload');
const uploadToAWS = require('./Middleware/awsUpload');
const uploadToAWSVideo = require("./Middleware/awsUploadVideo");
const uploadToAWSChunk = require('./Middleware/awsUpload_Chunk');
const dotenv = require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const port = 3006;
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

app.post("/uploadMedia", (req, res) => {
  const { file ,name } = req.body;

  const extension = name.split(".")[1];
  if(extension === "jpg"){
  
  uploadToAWS(file, name)
      .then((Location) => {
          return res.status(200).json({ Location });
      })
      .catch((err) => {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
      });
    }
    else{
      uploadToAWSVideo(file, name)
      .then((Location) => {
          return res.status(200).json({ Location });
      })
      .catch((err) => {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
      });
    }
});

app.get("/getUploadDocuments",authenticateUser,(req,res)=>{
  const LeadId = req.query.leadId;
  const sql ="SELECT * FROM ReportDocuments WHERE LeadId =?";
  db.query(sql, [LeadId],(error, results) => {
    if (error) {
      console.error('Error inserting data into VehicleDetails:', error);
      return res.status(500).json({ error: 'Error inserting data into VehicleDetails.' });
    }

    return res.status(200).json({ results });
  })
})


app.post("/uploadClaimMedia", (req, res) => {
  
    const {garage,fileUrl,fileName,reportType,LeadId,isLastChunk,uploadedBy,file}=req.body;
    
    uploadToAWS(file, fileName)
      .then((Location) => {

        const insertUploadDetails = `
        INSERT INTO ReportDocuments (
          LeadId,
          FileName,
          FilePath,
          UploadedBy,
          GarageName,
          ReportType
        ) VALUES (
          '${LeadId}',
          '${fileName}',
          '${Location}',
          '${uploadedBy}',
          '${garage}',
          '${reportType}'
        );
      `;

      // Execute the SQL queries individually
      
    
        db.query(insertUploadDetails, (error, results) => {
          if (error) {
            console.error('Error inserting data into VehicleDetails:', error);
            return res.status(500).json({ error: 'Error inserting data into VehicleDetails.' });
          }
    
          return res.status(200).json({ Location });
        })
      })
      .catch((err) => {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
      });
    

 
});


app.post('/uploadDocument', (req, res) => {

  const {data,leadId} = req.body;

  const array = data;

  const currentLeadId = (data[0].leadId);
  
  array.map((data,index)=>{

    let photo1="",photo2="",photo3="",photo4="",photo5="",photo6="";
    let photoAtt1="",photoAtt2="",photoAtt3="",photoAtt4="",photoAtt5="",photoAtt6="";
    let photo1Timestamp="",photo2Timestamp="",photo3Timestamp="",photo4Timestamp="",photo5Timestamp="",photo6Timestamp="";
    let photo1Latitude="",photo2Latitude="",photo3Latitude="",photo4Latitude="",photo5Latitude="",photo6Latitude="";
    let photo1Longitude="",photo2Longitude="",photo3Longitude="",photo4Longitude="",photo5Longitude="",photo6Longitude="";
    

    if(data.data[0][0]){
      photo1=data.data[0][0].url;
      photoAtt1 = data.data[0][0].name;
      photo1Timestamp=data.data[0][0].time;
      photo1Latitude=data.data[0][0].location.split(",")[0];
      photo1Longitude=data.data[0][0].location.split(",")[1];
    }

    if(data.data[1]?.length > 0){
      photo2=data.data[1][0].url;
      photoAtt2 = data.data[1][0].name;
      photo2Timestamp=data.data[1][0].time;
      photo2Latitude=data.data[1][0].location.split(",")[0];
      photo2Longitude=data.data[1][0].location.split(",")[1];
    }
    if(data.data[2]?.length > 0){
      photo3=data.data[2][0].url;
      photoAtt3 = data.data[2][0].name;
      photo3Timestamp=data.data[2][0].time;
      photo3Latitude=data.data[2][0].location.split(",")[0];
      photo3Longitude=data.data[2][0].location.split(",")[1];
    }
    if(data.data[3]?.length > 0){
      photo4=data.data[3][0].url;
      photoAtt4 = data.data[3][0].name;
      photo4Timestamp=data.data[3][0].time;
      photo4Latitude=data.data[3][0].location.split(",")[0];
      photo4Longitude=data.data[3][0].location.split(",")[1];
    }
    if(data.data[4]?.length > 0){
      photo5=data.data[4][0].url;
      photoAtt5= data.data[4][0].name;
      photo5Timestamp=data.data[4][0].time;
      photo5Latitude=data.data[4][0].location.split(",")[0];
      photo5Longitude=data.data[4][0].location.split(",")[1];
    }
    if(data.data[5]?.length > 0){
      photo6=data.data[5][0].url;
      photoAtt6 = data.data[5][0].name;
      photo6Timestamp=data.data[5][0].time;
      photo6Latitude=data.data[5][0].location.split(",")[0];
      photo6Longitude=data.data[5][0].location.split(",")[1];
    }
   
    const insertUploadDetails = `
    INSERT INTO DocumentList (
      LeadId,
      DocumentName,
      Photo1,
      Photo2,
      Photo3,
      Photo4,
      Photo5,
      Photo6,
      Attribute1,
      Attribute2,
      Attribute3,
      Attribute4,
      Attribute5,
      Attribute6,
      Photo1Latitude,
      Photo2Latitude,
      Photo3Latitude,
      Photo4Latitude,
      Photo5Latitude,
      Photo6Latitude,
      Photo1Longitude,
      Photo2Longitude,
      Photo3Longitude,
      Photo4Longitude,
      Photo5Longitude,
      Photo6Longitude,
      Photo1Timestamp,
      Photo2Timestamp,
      Photo3Timestamp,
      Photo4Timestamp,
      Photo5Timestamp,
      Photo6Timestamp
    ) VALUES (
      '${data.leadId}',
      '${data.docName}',
      '${photo1}',
      '${photo2}',
      '${photo3}',
      '${photo4}',
      '${photo5}',
      '${photo6}',
      '${photoAtt1}',
      '${photoAtt2}',
      '${photoAtt3}',
      '${photoAtt4}',
      '${photoAtt5}',
      '${photoAtt6}',
      '${photo1Timestamp}',
      '${photo2Timestamp}',
      '${photo3Timestamp}',
      '${photo4Timestamp}',
      '${photo5Timestamp}',
      '${photo6Timestamp}',
      '${photo1Latitude}',
      '${photo2Latitude}',
      '${photo3Latitude}',
      '${photo4Latitude}',
      '${photo5Latitude}',
      '${photo6Latitude}',
      '${photo1Longitude}',
      '${photo2Longitude}',
      '${photo3Longitude}',
      '${photo4Longitude}',
      '${photo5Longitude}',
      '${photo6Longitude}'
    );
  `;

  // console.log(insertUploadDetails);


  
    db.query(insertUploadDetails, (error, results) => {
      if (error) {
        console.error('Error inserting data into Upload Details:', error);
        return res.status(500).json({ error: 'Error inserting data into DocumentDetails.' });
      }
      
    });

   
  })

  const claimToken = generateUniqueToken();


  const insertTokeDteials = `
  UPDATE ClaimDetails
  SET Token='${claimToken}'
  WHERE LeadId = ${currentLeadId};
  `
  
  db.query(insertTokeDteials, (error, results) => {
    if (error) {
      console.error('Error inserting data into CL Details:', error);
      return res.status(500).json({ error: 'Error.' });
    }
    return res.status(200).json({ message: 'Data inserted successfully.' });
    
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

app.get('/getDocuments', (req, res) => {
 
  const LeadId = req.query.LeadId;
  console.log("get",LeadId);
  const sql = 'SELECT * FROM DocumentList WHERE LeadId =?';
  db.query(sql,[LeadId], (err, result) => {
    if (err) {
      // console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

// app.get('/getSpecificClaim',authenticateUser, (req, res) => {
 
//   const LeadId = req.query.LeadId;
//   console.log(LeadId);
//   const sql = "CALL GetInfoByLeadId(?)";
//   db.query(sql,[LeadId], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     res.send(result);
//   });
// });
app.get('/getSpecificClaim', authenticateUser, async (req, res) => {
  try {
    const leadId = req.query.LeadId;
    // const region = req.query.Region || null;

    
    // Execute stored procedures for each table
    const claimDetails = await executeStoredProc('GetClaimDetailsByLeadId', [leadId]);
    const insuredDetails = await executeStoredProc('GetInsuredDetailsByLeadId', [leadId]);
    const accidentDetails = await executeStoredProc('GetAccidentDetailsByLeadId', [leadId]);
    const driverDetails = await executeStoredProc('GetDriverDetailsByLeadId', [leadId]);
    const vehicleDetails = await executeStoredProc('GetVehicleDetailsByLeadId', [leadId]);
    const garageDetails = await executeStoredProc('GetGarageDetailsByLeadId', [leadId]);
    const claimStatus = await executeStoredProc('GetClaimStatusByLeadId', [leadId]);

    // Combine the results into a single variable or structure as needed
    const combinedResult = {
      claimDetails: claimDetails[0],
      insuredDetails: insuredDetails[0],
      accidentDetails: accidentDetails[0],
      driverDetails: driverDetails[0],
      vehicleDetails: vehicleDetails[0],
      garageDetails: garageDetails[0],
      claimStatus: claimStatus[0]
    };

    // Send the combined result to the client
    res.send(combinedResult);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Function to execute stored procedures
function executeStoredProc(procName, params) {
  return new Promise((resolve, reject) => {
    const sql = `CALL ${procName}(?)`;
    db.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]); // Assuming stored procedures return an array with the first element as the result
      }
    });
  });
}


app.post("/getClaimDetails",(req,res)=>{
  const {token,leadId} = req.body;
  const sql = "SELECT Token FROM ClaimDetails WHERE LeadId =?";
    db.query(sql,[leadId], (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      if(result2[0]?.Token === token){
        // console.log(result2[0].Token === token);
        res.status(200).send('Successfully found!!');
      }
      else{
        res.status(403).send('Forbidden Access!');
      }

});
});


app.post("/sendEmail/1",authenticateUser,(req,res)=>{
  const {vehicleNo,PolicyNo,Insured,Date,leadId,toMail} = req.body;

  const sql = "SELECT * FROM ClaimStatus WHERE LeadId =?";
  db.query(sql,[leadId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const content = emailHandler(result[0].Status);

        const generatedToken = generateUniqueToken();
        const insertClaimDetails = `
        UPDATE ClaimDetails
        SET
        Token = '${generatedToken}'
        WHERE LeadId = ${leadId};
      `;
        db.query(insertClaimDetails, (err, result2) => {
          if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
          }
       
  
      
    
  const emailContent = `
    Dear Sir/Madam,

    Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,

      We are Appointed for the survey of vehicle no.${vehicleNo}, Insured:${Insured} & Policy No.-${PolicyNo} on ${Date} from the United India 
    Insurance co. Ltd., So we request you please provide the complete contact deatils & mails of Repairer/insured. So that we 
    can procedd further in your case and we also request 
    you to provide the following details as follows:-

    ${content}

        Please provide the clear copy of all the documents so that the claim processing can be fast or
      <p><a href=https://claims-app-phi.vercel.app/documents/${leadId}?token=${generatedToken}&content=${''} target="_blank">Click me</a> to fill the documents information .</p>

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
    });
});

})


app.post("/sendCustomEmail",authenticateUser,(req,res)=>{
  const {vehicleNo,PolicyNo,Insured,Date,content,content2,leadId,toMail,fromEmail,subject,body} = req.body;

  const sql = "SELECT Token FROM ClaimDetails WHERE LeadId =?";
  db.query(sql,[leadId], (err, result2) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
  const emailContent = `
    ${body}

    ${content}

        Please provide the clear copy of all the documents so that the claim processing can be fast or
      <p><a href=https://claims-app-phi.vercel.app/documents/${leadId}?token=${result2[0].Token}&content=${encodeURIComponent(content2)} target="_blank">Click me</a> to fill the documents information .</p>

    Note:-  If We Cannot get the response with in 02 days we will inform the insurer that the insured is not interseted in the
            claim. So close the file as"No Claim" in non copperation & non submission of the documents. 

  `;


  const mailOptions = {
    from: fromEmail,
    to: toMail,
    subject: subject,
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
});
});

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

app.get('/getStatus', (req, res) => {
  const leadId = req.query.LeadId;
  const sql = "SELECT * FROM ClaimStatus";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

app.put('/updateStatus/:leadId',authenticateUser, (req, res) => {
  const { LeadId,Status,subStage} = req.body;
  const sql = 'SELECT * FROM DocumentList WHERE LeadId =?';
  db.query(sql,[LeadId], (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
  
   if(result.length > 0){
    
    const statusDetails = `
    INSERT INTO ClaimStatus (
      Status,
      SubStatus,
      LeadId 
    ) VALUES (
      '${Status}',
      '${subStage}',
      '${parseInt(LeadId)}'
    );
  `;

  db.query(statusDetails, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
   }
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

  const authorizationHeader = req.headers.authorization;

  const token = authorizationHeader.substring('Bearer '.length);

  const generatedToken = generateUniqueToken();
  const insertClaimDetails = `
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
      Token,
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
      '${parseInt(AddedBy)}',
      '${Region}',
      '${InspectionType}',
      '${parseInt(IsClaimCompleted)}',
      '${generatedToken}',
      '${parseInt(IsActive)}'
    );
  `;

  db.query(insertClaimDetails, (error, results) => {
    if (error) {
      console.error('Error inserting data into ClaimDetails:', error);
      return res.status(500).json({ error: 'Error inserting data into ClaimDetails.' });
    }

    db.query("SELECT LeadId FROM ClaimDetails ORDER BY LeadId DESC LIMIT 1", (error, results) => {
    if (error) {
      console.error('Error inserting data into ClaimDetails:', error);
      return res.status(500).json({ error: 'Error inserting data into ClaimDetails.' });
    }
    console.log(results);
    const addLeadId = results[0].LeadId;
    
  
  const insertVehicleDetails = `
    INSERT INTO VehicleDetails (
      RegisteredNumber,
      LeadId 
    ) VALUES (
      '${RegisteredNumber}',
      '${parseInt(results[0].LeadId)}'
    );
  `;

  const statusDetails = `
    INSERT INTO ClaimStatus (
      Status,
      SubStatus,
      LeadId 
    ) VALUES (
      '${1}',
      '${2}',
      '${parseInt(results[0].LeadId)}'
    );
  `;


  const insertGarageDetails = `
    INSERT INTO GarageDetails (
      GarageNameAndAddress,
      GarageContactNo1,
      GarageContactNo2,
      LeadId 
    ) VALUES (
      '${GarageNameAndAddress}',
      '${GarageContactNo1}',
      '${GarageContactNo2}',
      '${parseInt(results[0].LeadId)}'
    );
  `;

  const insertAccidentDetails = `
    INSERT INTO AccidentDetails (
      PlaceOfLoss,
      NatureOfLoss,
      EstimatedLoss,
      LeadId
    ) VALUES (
      '${PlaceOfLoss}',
      '${NatureOfLoss}',
      '${EstimatedLoss}',
      '${parseInt(results[0].LeadId)}'
    );
  `;

  const insertDriverDetails = `
    INSERT INTO DriverDetails (
      LeadId
    ) VALUES (
      '${parseInt(results[0].LeadId)}'
    );
  `;


  // const updateDriverDetails = `
  //   UPDATE DriverDetails
  //   SET
  //   IssuingAuthority = '${IssuingAuthority}',
  //   LicenseNumber = '${LicenseNumber}',
  //   LicenseType = '${LicenseType}',
  //   DriverName = '${DriverName}',
  //   AddedDate = '${DriverAddedDate}',
  //   TypeOfVerification = '${DriverTypeOfVerification}'
  //     WHERE LeadId = ${LeadId};
  // `;

  const insertInsuredDetails = `
    INSERT INTO InsuredDetails (
      InsuredName,
      InsuredMobileNo1,
      InsuredMobileNo2,
      InsuredMailAddress,
      LeadId
    ) VALUES (
      '${InsuredName}',
      '${InsuredMobileNo1}',
      '${InsuredMobileNo2}',
      '${InsuredMailAddress}',
      '${parseInt(results[0].LeadId)}'
    );
  `;

  // Execute the SQL queries individually
  

    db.query(insertVehicleDetails, (error, results) => {
      if (error) {
        console.error('Error inserting data into VehicleDetails:', error);
        return res.status(500).json({ error: 'Error inserting data into VehicleDetails.' });
      }

      db.query(insertGarageDetails, (error, results) => {
        if (error) {
          console.error('Error inserting data into GarageDetails:', error);
          return res.status(500).json({ error: 'Error inserting data into GarageDetails.' });
        }

        db.query(insertAccidentDetails, (error, results) => {
          if (error) {
            console.error('Error inserting data into AccidentDetails:', error);
            return res.status(500).json({ error: 'Error inserting data into AccidentDetails.' });
          }

          db.query(insertInsuredDetails, (error, results) => {
            if (error) {
              console.error('Error inserting data into InsuredDetails:', error);
              return res.status(500).json({ error: 'Error inserting data into InsuredDetails.' });
            } 
            db.query(statusDetails, (error, results) => {
            db.query(insertDriverDetails, (error, results) => {
              if (error) {
                console.error('Error inserting data into DriverDetails:', error);
                return res.status(500).json({ error: 'Error inserting data into InsuredDetails.' });
              }

              axios.post(`${process.env.BACKEND_DOMAIN}/sendEmail/1`,{
                vehicleNo : RegisteredNumber,
                PolicyNo : ReferenceNo,
                Insured : InsuredName,
                toMail:InsuredMailAddress,
                Date: new Date(),
                leadId:addLeadId
              },
              {
                headers:{
                  Authorization:`Bearer ${token}`,
                  "Content-Type":"application/json"
                }
              }
              ).then((ressss)=>{
                return res.status(200).json({ message: 'Data inserted successfully.' });
              })
              .catch((Er)=>{
               console.log(Er);
              })
  });
          }
            );

          });
        });
      });
    });
  });
  });
});

// app.put('/updateStatus/:leadId',authenticateUser, (req, res) => {
//   const leadId = req.params.leadId;
  
//   const {   
//       Status ,
//       subStage
// } = req.body;
 
//   // Update InsuredDetails
//   const statusDetails = `
//     UPDATE ClaimStatus
//     SET
//       Status = '${Status}',
//       SubStatus = '${subStage}'
//     WHERE LeadId = ${leadId};
//   `;

//           // db.query(statusDetails, (error, results) => {
//           //   if (error) {
//           //     console.error('Error updating data in InsuredDetails:', error);
//           //     return res.status(500).json({ error: 'Error updating data in InsuredDetails.' });
//           //   }

//           //   res.status(200).json({ message: 'Data updated successfully.' });
//           // });
        
// });



app.put('/updateClaim/:leadId',authenticateUser, (req, res) => {
  const leadId = req.params.leadId;
  
  const {   InsuredName ,
      InsuredMailAddress,
      InsuredMobileNo1,
      InsuredMobileNo2,
      ClaimNumber,
      PolicyIssuingOffice,
      ClaimRegion,
      ClaimServicingOffice,
      InspectionType,
      SurveyType,
      PolicyPeriodStart,
      PolicyPeriodEnd,
      InsuranceCompanyNameAddress,
      InsuredAddedBy,
      VehicleMakeVariantModelColor,
      VehicleTypeOfBody ,
      VehicleRegisteredNumber ,
      VehicleDateOfRegistration ,
      VehiclePucNumber,
      VehicleTransferDate,
      VehicleEngineNumber,
      VehicleAddedBy,
      IssuingAuthority,
      LicenseNumber,
      LicenseType,
      VehicleChassisNumber,
      VehicleFuelType,
      DriverName,
      DriverAddedDate,
      DriverTypeOfVerification,
      GarageNameAndAddress,
      GarageAddedBy,
      GarageContactNo1,
      GarageContactNo2,
      LeadId
} = req.body;


  const updateClaimDetails = `
  UPDATE ClaimDetails
  SET
  PolicyIssuingOffice = '${PolicyIssuingOffice}',
  Region = '${ClaimRegion}',
  ClaimServicingOffice = '${ClaimServicingOffice}',
  InspectionType = '${InspectionType}',
  SurveyType = '${SurveyType}',
  PolicyPeriodStart = '${PolicyPeriodStart}',
  PolicyPeriodEnd = '${PolicyPeriodEnd}',
  InsuranceCompanyNameAddress = '${InsuranceCompanyNameAddress}'
    WHERE LeadId = ${LeadId};
  `;

  // Update ClaimDetails
  const updateDriverDetails = `
    UPDATE DriverDetails
    SET
    IssuingAuthority = '${IssuingAuthority}',
    LicenseNumber = '${LicenseNumber}',
    LicenseType = '${LicenseType}',
    DriverName = '${DriverName}',
    AddedDate = '${DriverAddedDate}',
    TypeOfVerification = '${DriverTypeOfVerification}'
      WHERE LeadId = ${LeadId};
  `;

  // Update VehicleDetails
  const updateVehicleDetails = `
    UPDATE VehicleDetails
    SET RegisteredNumber = '${VehicleRegisteredNumber}',
    MakeVariantModelColor='${VehicleMakeVariantModelColor}',
    TypeOfBody='${VehicleTypeOfBody}',
    DateOfRegistration='${VehicleDateOfRegistration}',
    PucNumber='${VehiclePucNumber}',
    TransferDate='${VehicleTransferDate}',
    EngineNumber='${VehicleEngineNumber}',
    AddedBy='${VehicleAddedBy}',
    ChassisNumber='${VehicleChassisNumber}',
    FuelType='${VehicleFuelType}'
    WHERE LeadId = ${LeadId};
  `;

  // Update GarageDetails
  const updateGarageDetails = `
    UPDATE GarageDetails
    SET
      GarageNameAndAddress = '${GarageNameAndAddress}',
      GarageContactNo1 = '${GarageContactNo1}',
      GarageContactNo2 = '${GarageContactNo2 || ''}',
      AddedBy = '${GarageAddedBy}'
      WHERE LeadId = ${LeadId};
  `;

 
  // Update InsuredDetails
  const updateInsuredDetails = `
    UPDATE InsuredDetails
    SET
      InsuredName = '${InsuredName}',
      InsuredMobileNo1 = '${InsuredMobileNo1}',
      InsuredMobileNo2 = '${InsuredMobileNo2}',
      InsuredMailAddress = '${InsuredMailAddress}'
    WHERE LeadId = ${LeadId};
  `;

  db.query(updateClaimDetails, (error, results) => {
    if (error) {
      console.error('Error updating data in ClaimDetails:', error);
      return res.status(500).json({ error: 'Error updating data in ClaimDetails.' });
    }

  db.query(updateDriverDetails, (error, results) => {
    if (error) {
      console.error('Error updating data in ClaimDetails:', error);
      return res.status(500).json({ error: 'Error updating data in ClaimDetails.' });
    }

    db.query(updateVehicleDetails, (error, results) => {
      if (error) {
        console.error('Error updating data in VehicleDetails:', error);
        return res.status(500).json({ error: 'Error updating data in VehicleDetails.' });
      }

      db.query(updateGarageDetails, (error, results) => {
        if (error) {
          console.error('Error updating data in GarageDetails:', error);
          return res.status(500).json({ error: 'Error updating data in GarageDetails.' });
        }

          db.query(updateInsuredDetails, (error, results) => {
            if (error) {
              console.error('Error updating data in InsuredDetails:', error);
              return res.status(500).json({ error: 'Error updating data in InsuredDetails.' });
            }

            res.status(200).json({ message: 'Data updated successfully.' });
          });
        
      });
    });
    });
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

app.get('/getOnlineVehicleData', authenticateUser, (req, res) => {
  const responseData = {
    "error_code": "SPC-200",
    "message": "success",
    "status": "Success",
    "soft_ref_id": "SPRCV24012001234601797EOPBPB6B",
    "vehicleDetails": {
      "Validation": null,
      "Service": null,
      "UniqueTransID": "A7D9533E200120240123495732",
      "Data": {
        "id": "127f8472-8b05-45a6-aa41-368c99c9fcf2",
        "env": 2,
        "response_code": "101",
        "response_msg": "Success",
        "transaction_status": 0,
        "result": {
          "state_cd": "RJ",
          "rc_regn_no": "RJ13CD0927",
          "rc_regn_dt": "25-Feb-2020",
          "rc_chasi_no": "MA3NYFB1SKM612415",
          "rc_eng_no": "D13A-5883689",
          "rc_vh_class_desc": "Motor Car(LMV)",
          "rc_maker_desc": "MARUTI SUZUKI INDIA LTD",
          "rc_maker_model": "MARUTI VITARA BREZZA ZDI",
          "rc_manu_month_yr": "12/2019",
          "rc_gvw": "1680",
          "rc_cubic_cap": "1248.0",
          "rc_seat_cap": "5",
          "rc_owner_name": "MUTNEJA TECH INS SUR & LOSS ASS P L",
          "rc_permanent_address": "58 , GANDHI NAGAR,, Ganganagar -335001",
          "rc_fit_upto": "24-Feb-2035",
          "rc_pasia_model_code": "ma0536",
          "rc_insurance_comp": "National Insurance Co. Ltd.",
          "rc_insurance_upto": "23-Feb-2024",
          "rc_registered_at": "SRI GANGANAGAR DTO, Rajasthan",
          "rc_blacklist_status": "NA",
          "rc_status": "ACTIVE",
          "rc_vehicle_type": "4W",
          "bancs_model_code": "0928031",
          "bancs_make_code": "0928",
          "bancs_Subtype_code": "0928031015",
          "bancs_Fuel_Type": "Diesel(D)",
          "bancs_Body_Type": "SALOON",
          "bancs_Vehicle_class": "22",
          "bancs_Vehicle_Segment": null,
          "rc_rto_code": null
        },
        "request_timestamp": "0001-01-01T00:00:00",
        "response_timestamp": "0001-01-01T00:00:00",
        "task_id": "6ccb3019-277f-410c-967b-5554c37bb8fe"
      },
      "StatusCode": "0",
      "ErrorMessage": ""
    }
  };

  // Extracting relevant information from the response
  const {
    vehicleDetails: {
      Data: {
        result: {
          state_cd,
          rc_regn_no,
          rc_regn_dt,
          rc_chasi_no,
          rc_eng_no,
          rc_vh_class_desc,
          rc_maker_desc,
          rc_maker_model,
          rc_manu_month_yr,
          rc_gvw,
          rc_cubic_cap,
          rc_seat_cap,
          rc_owner_name,
          rc_permanent_address,
          rc_fit_upto,
          rc_pasia_model_code,
          rc_insurance_comp,
          rc_insurance_upto,
          rc_registered_at,
          rc_blacklist_status,
          rc_status,
          rc_vehicle_type,
          bancs_model_code,
          bancs_make_code,
          bancs_Subtype_code,
          bancs_Fuel_Type,
          bancs_Body_Type,
          bancs_Vehicle_class,
          bancs_Vehicle_Segment,
          rc_rto_code
        },
      },
    },
  } = responseData;

  // Creating a new object with extracted information
  const integratedData = {
    state_cd,
    rc_regn_no,
    rc_regn_dt,
    rc_chasi_no,
    rc_eng_no,
    rc_vh_class_desc,
    rc_maker_desc,
    rc_maker_model,
    rc_manu_month_yr,
    rc_gvw,
    rc_cubic_cap,
    rc_seat_cap,
    rc_owner_name,
    rc_permanent_address,
    rc_fit_upto,
    rc_pasia_model_code,
    rc_insurance_comp,
    rc_insurance_upto,
    rc_registered_at,
    rc_blacklist_status,
    rc_status,
    rc_vehicle_type,
    bancs_model_code,
    bancs_make_code,
    bancs_Subtype_code,
    bancs_Fuel_Type,
    bancs_Body_Type,
    bancs_Vehicle_class,
    bancs_Vehicle_Segment,
    rc_rto_code
  };
  res.json(integratedData);
});

app.listen(port, () => {

  
    console.log(`Server running on http://localhost:${port}`);
    // pm2.connect((err) => {
    //   if (err) {
    //     console.error(err);
    //     process.exit(2);
    //   }
    
    //   pm2.start({
    //     script: "./app.js",
    //     name: "db",
    //     autorestart: true,
    //     watch: true, // Enable auto-restart on file changes
    //     max_memory_restart: '1G', // Adjust as needed based on your server's memory requirements
    //   }, (err, apps) => {
    //     pm2.disconnect(); // Disconnect from pm2 once started
    //     if (err) throw err;
    //     console.log('Server started successfully using pm2.');
    //   });

    // });
    
  });
