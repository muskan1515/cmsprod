
const db = require("../Config/dbConfig");
const generateUniqueToken = require("../Config/generateToken");
const uploadToAWS = require("../Middleware/awsUpload");
const uploadToAWSVideo = require("../Middleware/awsUploadVideo");

const getReportDocument = (req, res) => {
    const LeadId = req.query.leadId;
    const sql = "SELECT * FROM ReportDocuments WHERE LeadId =?";
    db.query(sql, [LeadId], (error, results) => {
      if (error) {
        console.error("Error while fetching the report documents:", error);
        return res
          .status(500)
          .json({ error: "Error inserting data into VehicleDetails." });
      }
  
      return res.status(200).json({ results });
    });
  };

const getDocuments = (req, res) => {
    const LeadId = req.query.LeadId;
    console.log("get", LeadId);
    const sql = "SELECT * FROM DocumentList WHERE LeadId =?";
    db.query(sql, [LeadId], (err, result) => {
      if (err) {
        // console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.send(result);
    });
  };

 const uploadClaimMedia = (req, res) => {
    const {
      garage,
      fileUrl,
      fileName,
      reportType,
      LeadId,
      isLastChunk,
      uploadedBy,
      file,
    } = req.body;
  
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
            console.error("Error inserting data into VehicleDetails:", error);
            return res
              .status(500)
              .json({ error: "Error inserting data into VehicleDetails." });
          }
  
          return res.status(200).json({ Location });
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  };

 const uploadDocument = (req, res) => {
    const { data, leadId } = req.body;
  console.log('data',data);
    const array = data;
  
    const currentLeadId = data[0].leadId;
  
    array.map((row, index) => {
    
      const currentData = row.data;
      currentData.map((file,idx)=>{
      const Photo1 = file.url;
      const Attribute1 = file.name;
      const leadID = row.leadId;
      const docName = row.docName;
      const Location = file.Location;
      const photo1Timestamp=file.Timestamp;
      const Photo1Latitude=Location?.split(",")[0];
      const Photo1Longitude=Location?.split(",")[1];

        
      const insertUploadDetails = `
      INSERT INTO DocumentList (
        LeadId,
        DocumentName,
        Photo1,
        Attribute1,
        Photo1Latitude,
        Photo1Longitude,
        Photo1Timestamp
      ) VALUES (
        '${leadID}',
        '${docName}',
        '${Photo1}',
        '${Attribute1}',
        '${Photo1Latitude}',
        '${Photo1Longitude}',
        '${photo1Timestamp}'
      );
    `;

    console.log(insertUploadDetails)
      db.query(insertUploadDetails, (error, results) => {
        if (error) {
          console.error("Error inserting data into Upload Details:", error);
          return res
            .status(500)
            .json({ error: "Error inserting data into DocumentDetails." });
        }
      });
      })
    });
  
    const claimToken = generateUniqueToken();
  
    const insertTokeDteials = `
    UPDATE ClaimDetails
    SET Token='${claimToken}'
    WHERE LeadId = ${currentLeadId};
    `;
  
    db.query(insertTokeDteials, (error, results) => {
      if (error) {
        console.error("Error inserting data into CL Details:", error);
        return res.status(500).json({ error: "Error." });
      }
      return res.status(200).json({ message: "Data inserted successfully." });
    });
  };


 const uploadMedia = async(req, res) => {
  try {
    const {file,name}=req.body;
    const filesData = file;
    const nameInfo = name;

  
    const results = [];
  

    for (let i = 0; i < filesData.length; i++) {
      const fileData = filesData[i]; // Use a different name for the loop iteration
      const fileName = nameInfo[i];

      // Check if the file data starts with "data:image/"
      if (fileData.startsWith("data:image/") || fileData.startsWith("'data:application/pdf")) {
        const data = await uploadToAWS(fileData, fileName);
        results.push(data);
      } else if (fileData.startsWith("data:video/")) {
        const prefixToRemove = "data:video/webm;base64,";
        const dataWithoutPrefix = fileData.substring(prefixToRemove.length);
      
        const data = await uploadToAWSVideo(dataWithoutPrefix, fileName);
        // const data = await uploadToAWSVideo(fileData, fileName);
        // console.log('BLOBB',fileData);
        results.push(data);
      } else {
        console.log(`Unsupported file format for ${fileName}`);
        // Optionally handle the error or skip the file
        continue;
      }
    }
    console.log("result",results);
    return res.status(200).json({ data: results });
  } catch (error) {
    console.log("Error log", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
  
  };

  const verifyReportUpload = (req, res) => {
    const { userName, reportId } = req.body;
    const updateVerifyReport = `
    UPDATE ReportDocuments
          SET
          VerifiedBy = '${userName}',
          IsVerified = '${1}'
          WHERE ReportId = ${reportId};
    `;
    db.query(updateVerifyReport, (err, result2) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("Internal Server Error while updating the verified status");
        return;
      }
      // console.log(result2[0].Token === token);
      res.status(200).send("Successfully Updated!!");
    });
  };

  module.exports={
    getReportDocument,
    getDocuments,
    uploadClaimMedia,
    uploadDocument,
    uploadMedia,
    verifyReportUpload
};