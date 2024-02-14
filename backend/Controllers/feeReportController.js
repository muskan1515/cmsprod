 
const db = require("../Config/dbConfig");

 
 const upload = (req, res) => {
    const {
  LeadId,
  Type,
  ProfessionalFees,
  TotalKM,
  Visits,
  Conveyance,
  Photos,
  Charge,
  Photos_cd,
  Cgst,
  Igst,
  Sgst,
  Total,
  ModeOfpayement,
  BillID,
  FeebasedOn,
  Remrk,
  KmRate,
  PhotsRate,
  EstimateAmt,
  AssessedAmt,
  InsuranceCompanyName,
  Branch,
  BillTo,
  Others,
  BillDate
    } = req.body;

  

    const insertQuery = `
    INSERT INTO BillReportFees(
      LeadId,
      Type,
      ProfessionalFees,
      TotalKM,
      Visits,
      Conveyance,
      Photos,
      Charge,
      Photos_cd,
      Cgst,
      Igst,
      Sgst,
      Total,
      BillID,
      FeebasedOn,
      Remrk,
      KmRate,
      PhotsRate,
      EstimateAmt,
      AssessedAmt,
      InsuranceCompanyName,
      Branch,
      BillTo,
      Others,
      BillDate
    ) VALUES (
      '${LeadId}',
      '${Type}',
      '${ProfessionalFees}',
      '${TotalKM}',
      '${Visits}',
      '${Conveyance}',
      '${Photos}',
      '${Charge}',
      '${Photos_cd}',
      '${Cgst}',
      '${Igst}',
      '${Sgst}',
      '${Total}',
      '${BillID}',
      '${FeebasedOn}',
      '${Remrk}',
      '${KmRate}',
      '${PhotsRate}',
      '${EstimateAmt}',
      '${AssessedAmt}',
      '${InsuranceCompanyName}',
      '${Branch}',
      '${BillTo}',
      '${Others}',
      '${BillDate}'
    );
    `;


    db.query(insertQuery,  (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
  
        return res.status(200).json({ message: "Successfully uploaded the fee report! ",result });
      
    });
  };

  module.exports={upload};