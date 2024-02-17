const db = require("../Config/dbConfig");
const axios = require("axios");

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
    const details=result.data.data.data;

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
      ${leadId}
  );
    `;

    const updateDriverQuery = `
    UPDATE DriverDetails
SET
    LicenseNumber = '${details?.dlno}',
    DriverName = '${details?.name}',
    Pht = '${details?.pht}',
    Photo = '${details?.sign}',
    Vov = '${details?.cov}',
    VaildUpto = CAST('${details?.vaildupto}' AS DATETIME),
    RtoName = '${details?.rtoname}',
    Address = '${details?.address}',
    Mobile = '${details?.mobile}',
    BloodGroup = '${details?.bloodgroup}',
    Gender = '${details?.gender}',
    FatherName = '${details?.fname}',
    DateOfBirth = CAST('${details?.dob}' AS DATETIME),
    DateOfIssue = CAST('${details?.issuedate}' AS DATETIME)
WHERE
    LeadID = ${leadId};`;


  
    db.query(insertDriverDetails, (error, results) => {
      if (error) {
        console.error("Error updating data in driver Details:", error);
        return res
          .status(500)
          .json({ error: "Error updating data in driver Details." });
      }
      db.query(updateDriverQuery, (error, results) => {
        if (error) {
          console.error("Error updating data in driver Details:", error);
          return res
            .status(500)
            .json({ error: "Error updating data in driver Details." });
        }
          res.status(200).json({ message: "Data updated successfully." });
      });
     
    });
    })
    .catch((Err)=>{
      return res.status(500).send("Internal Server Error");
    })
    
    //   error_code: "SPC-200",
    //   message: "success",
    //   status: "Success",
    //   soft_ref_id: "SPRCV24012001234601797EOPBPB6B",
    //   vehicleDetails: {
    //     Validation: null,
    //     Service: null,
    //     UniqueTransID: "A7D9533E200120240123495732",
    //     Data: {
    //       id: "127f8472-8b05-45a6-aa41-368c99c9fcf2",
    //       env: 2,
    //       response_code: "101",
    //       response_msg: "Success",
    //       transaction_status: 0,
    //       result: {
    //         state_cd: "RJ",
    //         rc_regn_no: "RJ13CD0927",
    //         rc_regn_dt: "25-Feb-2020",
    //         rc_chasi_no: "MA3NYFB1SKM612415",
    //         rc_eng_no: "D13A-5883689",
    //         rc_vh_class_desc: "Motor Car(LMV)",
    //         rc_maker_desc: "MARUTI SUZUKI INDIA LTD",
    //         rc_maker_model: "MARUTI VITARA BREZZA ZDI",
    //         rc_manu_month_yr: "12/2019",
    //         rc_gvw: "1680",
    //         rc_cubic_cap: "1248.0",
    //         rc_seat_cap: "5",
    //         rc_owner_name: "MUTNEJA TECH INS SUR & LOSS ASS P L",
    //         rc_permanent_address: "58 , GANDHI NAGAR,, Ganganagar -335001",
    //         rc_fit_upto: "24-Feb-2035",
    //         rc_pasia_model_code: "ma0536",
    //         rc_insurance_comp: "National Insurance Co. Ltd.",
    //         rc_insurance_upto: "23-Feb-2024",
    //         rc_registered_at: "SRI GANGANAGAR DTO, Rajasthan",
    //         rc_blacklist_status: "NA",
    //         rc_status: "ACTIVE",
    //         rc_vehicle_type: "4W",
    //         bancs_model_code: "0928031",
    //         bancs_make_code: "0928",
    //         bancs_Subtype_code: "0928031015",
    //         bancs_Fuel_Type: "Diesel(D)",
    //         bancs_Body_Type: "SALOON",
    //         bancs_Vehicle_class: "22",
    //         bancs_Vehicle_Segment: null,
    //         rc_rto_code: null,
    //       },
    //       request_timestamp: "0001-01-01T00:00:00",
    //       response_timestamp: "0001-01-01T00:00:00",
    //       task_id: "6ccb3019-277f-410c-967b-5554c37bb8fe",
    //     },
    //     StatusCode: "0",
    //     ErrorMessage: "",
    //   },
    // };



  
    // // Extracting relevant information from the response
    // const {
    //   vehicleDetails: {
    //     Data: {
    //       result: {
    //         state_cd,
    //         rc_regn_no,
    //         rc_regn_dt,
    //         rc_chasi_no,
    //         rc_eng_no,
    //         rc_vh_class_desc,
    //         rc_maker_desc,
    //         rc_maker_model,
    //         rc_manu_month_yr,
    //         rc_gvw,
    //         rc_cubic_cap,
    //         rc_seat_cap,
    //         rc_owner_name,
    //         rc_permanent_address,
    //         rc_fit_upto,
    //         rc_pasia_model_code,
    //         rc_insurance_comp,
    //         rc_insurance_upto,
    //         rc_registered_at,
    //         rc_blacklist_status,
    //         rc_status,
    //         rc_vehicle_type,
    //         bancs_model_code,
    //         bancs_make_code,
    //         bancs_Subtype_code,
    //         bancs_Fuel_Type,
    //         bancs_Body_Type,
    //         bancs_Vehicle_class,
    //         bancs_Vehicle_Segment,
    //         rc_rto_code,
    //       },
    //     },
    //   },
    // } = responseData;
  
    // // Creating a new object with extracted information
    // const integratedData = {
    //   state_cd,
    //   rc_regn_no,
    //   rc_regn_dt,
    //   rc_chasi_no,
    //   rc_eng_no,
    //   rc_vh_class_desc,
    //   rc_maker_desc,
    //   rc_maker_model,
    //   rc_manu_month_yr,
    //   rc_gvw,
    //   rc_cubic_cap,
    //   rc_seat_cap,
    //   rc_owner_name,
    //   rc_permanent_address,
    //   rc_fit_upto,
    //   rc_pasia_model_code,
    //   rc_insurance_comp,
    //   rc_insurance_upto,
    //   rc_registered_at,
    //   rc_blacklist_status,
    //   rc_status,
    //   rc_vehicle_type,
    //   bancs_model_code,
    //   bancs_make_code,
    //   bancs_Subtype_code,
    //   bancs_Fuel_Type,
    //   bancs_Body_Type,
    //   bancs_Vehicle_class,
    //   bancs_Vehicle_Segment,
    //   rc_rto_code,
    // };
    // res.json(integratedData);
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
        console.error("Error updating data in driver Details:", error);
        return res
          .status(500)
          .json({ error: "Error updating data in driver Details." });
      }
        res.status(200).json({ message: "Data updated successfully." });
    });
        
  };

  module.exports={getOnlineDriverDetails,updateDriverDetailsOnline}
  