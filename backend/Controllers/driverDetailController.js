const db = require("../Config/dbConfig");
const axios = require("axios");
const convertObjectToString = require("../Config/getObjectToString");
const { formatDate } = require("../Config/getFormattedDate");
const { breakString } = require("../Config/splitBase");

const getSpecificDriverDetails = async (req, res) => {
  const leadId = req.query.LeadId;


  const executeQuery = (query, values) => {
    return new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]);
        }
      });
    });
  };

  try {
    const driverDetails = await executeQuery(
      "SELECT * FROM DriverDetails WHERE LeadId=?",
      [leadId]
    );
    
    const combinedResult = {
      
      driverDetails,
    };

    res.json(combinedResult);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

function removeBase64Prefix(encodedImage) {
  // Check if the provided string starts with ":image/png;base64,"
  const prefix = ":image/png;base64,";
  if (encodedImage.startsWith(prefix)) {
    // If yes, remove the prefix and return the remaining base64-encoded content
    return encodedImage.slice(prefix.length);
  } else {
    // If no prefix found, return the original string
    return encodedImage;
  }
}


 const getOnlineDriverDetails = (req, res) => {

  const dl_number=req.query.dl_number;
  const leadId = req.query.leadId;

  axios.get("https://api.apiseva.co.in/api/verification_pv2/dl_verify_v2",{
      params:{
        apikey:process.env.API_KEY_VEHICLE_DETAIL,
        agent_code:process.env.AGENT_CODE,
        client_order_id:process.env.CLIENT_ORDER_ID,
        dl_number:dl_number
      }
    })
    .then((result)=>{

    const details=result?.data?.data?.data;
    const formattedDateOfbirth = formatDate(details?.dob);
    const formattedDateOfIssue = formatDate(details?.issuedate);
    const formattedValidupto = formatDate(details?.vaildupto);

    const formattedPhoto = breakString(details?.pht);
    const formattedSign = breakString(details?.sign)
    
    const stringformat = convertObjectToString(details);

    

    if(!details){
      return res.status(500).send("Internal Server Error");
    }

    const insertDriverDetails = `
    INSERT INTO DriverDetailsOnline (
      LicenseNumber,
      DriverName,
      Pht,
      Photo,
      LicenseType,
      ValidUpto,
      RtoName,
      Address,
      Mobile,
      BloodGroup,
      Gender,
      FatherName,
      DateOfBirth,
      DateOfIssue,
      ApiResponse,
      LeadID
  )
  VALUES (
      '${details?.dlno}',
      '${details?.name}',
      '${formattedSign}',
      '${formattedPhoto}',
      '${details?.cov}',
      '${formattedValidupto}',
      '${details?.rtoname}',
      '${details?.address}',
      '${details?.mobile}',
      '${details?.bloodgroup}',
      '${details?.gender}',
      '${details?.fname}',
      '${formattedDateOfbirth}',
     '${formattedDateOfIssue}',
      '${stringformat}',
      '${leadId}'
  );
    `;

    

    const updateDriverQuery = `
    UPDATE DriverDetails
SET
    LicenseNumber = '${details?.dlno}',
    DriverName = '${details?.name}',
    Pht = '${formattedSign}',
    Photo = '${formattedPhoto}',
    LicenseType = '${details?.cov}',
    ValidUpto = '${formattedValidupto}',
    RtoName = '${details?.rtoname}',
    Address = '${details?.address}',
    Mobile = '${details?.mobile}',
    BloodGroup = '${details?.bloodgroup}',
    Gender = '${details?.gender}',
    FatherName = '${details?.fname}',
    DateOfBirth = '${formattedDateOfbirth}',
    DateOfIssue = '${formattedDateOfIssue}',
    Remark='${'Verified from Online'}'
WHERE
    LeadID = ${leadId};`;


    console.log(insertDriverDetails,updateDriverQuery)
    db.query("DELETE FROM DriverDetailsOnline WHERE LeadID=?",[leadId],(error, results) => {
      if (error) {
        console.error("Error updating data in driver Details:", error);
        return res
          .status(500)
          .json({ error: "Error updating data in driver Details." });
      }

    db.query(insertDriverDetails, (error, results) => {
      if (error) {
        console.log( error);
        return res
          .status(500)
          .json({ error: "Error updating data in driver Details." });
      }
      db.query(updateDriverQuery, (error, results) => {
        if (error) {
          console.log( error);
          return res
            .status(500)
            .json({ error: "Error updating data in driver Details." });
        }
          res.status(200).json({ message: "Data updated successfully." });
      });
     
    });
  });
    })
    .catch((Err)=>{
      console.log(Err)
      return res.status(500).send("Record Not Found!");
    })
  
  };

  const updateDriverDetailsOnline = async(req, res) => {
    const {
      IssuingAuthority,
      LicenseNumber,
      LicenseType,
      DriverName,
      DriverAddedDate,
      DriverTypeOfVerification,
      
      FatherName,
      Gender,
      BloodGroup,
      Mobile,
      Address,
      RtoName,
      ValidUpto,
      Vov,
      Photo,
      Pht,
      DateOfBirth,
      DateOfIssue,

      LeadId,
    } = req.body;
  
  
    // Update ClaimDetails
    const insertDriverDetails = `
    INSERT INTO DriverDetailsOnline (
      LicenseNumber,
      DriverName,
      Pht,
      Photo,
      Vov,
      VaildUpto,
      RtoName,
      Address,
      Mobile,
      BloodGroup,
      Gender,
      FatherName,
      DateOfBirth,
      DateOfIssue,
      LeadID
  )
  VALUES (
      '${details?.dlno}',
      '${details?.name}',
      '${details?.pht}',
      '${details?.sign}',
      '${details?.cov}',
      CAST('${details?.vaildupto}' AS DATETIME),
      '${details?.rtoname}',
      '${details?.address}',
      '${details?.mobile}',
      '${details?.bloodgroup}',
      '${details?.gender}',
      '${details?.fname}',
      CAST('${details?.dob}' AS DATETIME),
      CAST('${details?.issuedate}' AS DATETIME),
      ${LeadId}
  );
    `;
  
  
    db.query(insertDriverDetails, (error, results) => {
      if (error) {
        console.log(error);
        console.error("Error updating data in driver Details:", error);
        return res
          .status(500)
          .json({ error: "Error updating data in driver Details." });
      }
        res.status(200).json({ message: "Data updated successfully." });
    });
        
  };

  module.exports={getOnlineDriverDetails,updateDriverDetailsOnline,getSpecificDriverDetails}
  
