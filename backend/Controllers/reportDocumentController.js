
const db = require("../Config/dbConfig");
const uploadDocument = (req, res) => {
    const {
        garage,
        reportType,
        fileName,
        fileUrl,
        LeadId,
        uploadedBy
    } = req.body;
 

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
          '${fileUrl}',
          '${uploadedBy}',
          '${garage}',
          '${reportType}'
        );
      `;
  
        db.query(insertUploadDetails, (error, results) => {
          if (error) {
            console.error("Error inserting data into Report Document Upload Details:", error);
            return res
              .status(500)
              .json({ error: "Error inserting data into Report Document Upload Details." });
          }
          return res.status(200).json({ message: "Data inserted successfully." });
        });
  
  };

  module.exports={uploadDocument}