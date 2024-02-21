
const db = require("../Config/dbConfig");
const axios = require('axios');

const generateUniqueToken = require("../Config/generateToken");

const addClaim =  (req, res) => {
    const {
      SurveyType,
      ReferenceNo,
      PolicyIssuingOffice,
      PolicyNumber,
      PolicyPeriodStart,
      PolicyPeriodEnd,
      ClaimNumber,
      BrokerMailAddress,
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
      GarageMailAddress,
      RegisteredNumber,
      GarageNameAndAddress,
      GarageContactNo1,
      GarageContactNo2,
      PlaceOfLoss,
      NatureOfLoss,
      EstimatedLoss,
    } = req.body;

   
    const authorizationHeader = req.headers.authorization;
  
    const token = authorizationHeader.substring("Bearer ".length);
  
    const generatedToken = generateUniqueToken();
    const insertClaimDetails = `
      INSERT INTO ClaimDetails (
        SurveyType,
        ReferenceNo,
        PolicyNumber,
        PolicyPeriodStart,
        PolicyPeriodEnd,
        ClaimNumber,
        ClaimServicingOffice,
        AddedBy,
        Region,
        InspectionType,
        IsClaimCompleted,
        BrokerMailAddress,
        Token,
        IsActive
      ) VALUES (
        '${SurveyType}',
        '${ReferenceNo}',
        '${PolicyNumber}',
        '${PolicyPeriodStart}',
        '${PolicyPeriodEnd}',
        ${ClaimNumber},
        '${ClaimServicingOffice}',
        '${(AddedBy)}',
        '${Region}',
        '${InspectionType}',
        ${parseInt(IsClaimCompleted)},
        '${BrokerMailAddress}',
        '${generatedToken}',
        ${parseInt(IsActive)}
      );
    `;
  
    db.query(insertClaimDetails, (error, results) => {
      if (error) {
        console.error("Error inserting data into ClaimDetails:", error);
        return res
          .status(500)
          .json({ error: "Error inserting data into ClaimDetails." });
      }
  
      db.query(
        "SELECT LeadId FROM ClaimDetails ORDER BY LeadId DESC LIMIT 1",
        (error, results) => {
          if (error) {
            console.error("Error inserting data into ClaimDetails:", error);
            return res
              .status(500)
              .json({ error: "Error inserting data into ClaimDetails." });
          }
          console.log(results);
          const addLeadId = results[0].LeadId;
  
          const insertVehicleDetails = `
      INSERT INTO VehicleDetails (
        RegisteredNumber,
        LeadId 
      ) VALUES (
        '${RegisteredNumber}',
        ${parseInt(results[0].LeadId)}
      );
    `;
  
          const statusDetails = `
      INSERT INTO ClaimStatus (
        Status,
        SubStatus,
        LeadId 
      ) VALUES (
        ${1},
        ${2},
        ${parseInt(results[0].LeadId)}
      );
    `;
  
          const insertGarageDetails = `
      INSERT INTO GarageDetails (
        GarageNameAndAddress,
        GarageContactNo1,
        GarageContactNo2,
        GarageMailAddress,
        LeadId 
      ) VALUES (
        '${GarageNameAndAddress}',
       '${GarageContactNo1}',
        '${GarageContactNo2}',
        '${GarageMailAddress}',
        ${parseInt(results[0].LeadId)}
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
        '${(EstimatedLoss)}',
        ${parseInt(results[0].LeadId)}
      );
    `;
  
          const insertDriverDetails = `
      INSERT INTO DriverDetails (
        LeadId
      ) VALUES (
        ${parseInt(results[0].LeadId)}
      );
    `;
  
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
        ${parseInt(results[0].LeadId)}
      );
    `;

    const insertCommercialDetails = `
    INSERT INTO CommercialVehicleDetails (
      LeadId
    ) VALUES (
      ${parseInt(results[0].LeadId)}
    );
  `;


//   const insertSummaryDetails = `
//   INSERT INTO CommercialVehicleDetails (
//     LeadId
//   ) VALUES (
//     ${parseInt(results[0].LeadId)}
//   );
// `;

   
          // Execute the SQL queries individually
  
          db.query(insertVehicleDetails, (error, results) => {
            if (error) {
              console.error("Error inserting data into VehicleDetails:", error);
              return res
                .status(500)
                .json({ error: "Error inserting data into VehicleDetails." });
            }
  
            db.query(insertGarageDetails, (error, results) => {
              if (error) {
                console.error("Error inserting data into GarageDetails:", error);
                return res
                  .status(500)
                  .json({ error: "Error inserting data into GarageDetails." });
              }
  
              db.query(insertAccidentDetails, (error, results) => {
                if (error) {
                  console.error(
                    "Error inserting data into AccidentDetails:",
                    error
                  );
                  return res.status(500).json({
                    error: "Error inserting data into AccidentDetails.",
                  });
                }

                db.query(insertCommercialDetails, (error, results) => {
                  if (error) {
                    console.error(
                      "Error inserting data into CommercialDetails:",
                      error
                    );
                    return res.status(500).json({
                      error: "Error inserting data into AccidentDetails.",
                    });
                  }
                });
  
                db.query(insertInsuredDetails, (error, results) => {
                  if (error) {
                    console.error(
                      "Error inserting data into InsuredDetails:",
                      error
                    );
                    return res.status(500).json({
                      error: "Error inserting data into InsuredDetails.",
                    });
                  }

                  db.query(statusDetails, (error, results) => {
                    db.query(insertDriverDetails, (error, results) => {
                      if (error) {
                        console.error(
                          "Error inserting data into DriverDetails:",
                          error
                        );
                        return res.status(500).json({
                          error: "Error inserting data into InsuredDetails.",
                        });
                      }

                      // db.query(insertSummaryDetails, (error, results) => {
                      //   if (error) {
                      //     console.error(
                      //       "Error inserting data into DriverDetails:",
                      //       error
                      //     );
                      //     return res.status(500).json({
                      //       error: "Error inserting data into InsuredDetails.",
                      //     });
                      //   }
                      // });
    
                      if(InsuredMailAddress !== null ){
                      axios
                        .post(
                          `${process.env.BACKEND_DOMAIN}/email/sendEmail/1`,
                          {
                            vehicleNo: RegisteredNumber,
                            PolicyNo: PolicyNumber,
                            Insured: InsuredName,
                            toMail: InsuredMailAddress,
                            Date: new Date(),
                            leadId: addLeadId,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                              "Content-Type": "application/json",
                            },
                          }
                        )
                        .then((ressss) => {
                          console.log(ressss);
                        })
                        .catch((Er) => {
                          return res.status(500).json({
                            error:
                              "Error sending email into Acknowldegment Mail.",
                          });
                        });
                      }
                        if (GarageMailAddress !== null) {
                          axios
                            .post(
                              `${process.env.BACKEND_DOMAIN}/email/sendEmail/1`,
                              {
                                vehicleNo: RegisteredNumber,
                                PolicyNo: PolicyNumber,
                                Insured: InsuredName,
                                toMail: GarageMailAddress,
                                Date: new Date(),
                                leadId:addLeadId
                              },
                              {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                  "Content-Type": "application/json",
                                },
                              }
                            )
                            .then((ressss) => {
                             console.log(ressss);
                            })
                            .catch((Er) => {
                              return res.status(500).json({
                                error: "Error sending email into Garage Mail.",
                              });
                            });
                        }
                        if (BrokerMailAddress !== null) {
                          axios
                            .post(
                              `${process.env.BACKEND_DOMAIN}/email/sendEmail/1`,
                              {
                                vehicleNo: RegisteredNumber,
                                PolicyNo: PolicyNumber,
                                Insured: InsuredName,
                                toMail: GarageMailAddress,
                                Date: new Date(),
                                leadId:addLeadId
                              },
                              {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                  "Content-Type": "application/json",
                                },
                              }
                            )
                            .then((ressss) => {
                              console.log(ressss);
                            })
                            .catch((Er) => {
                              return res.status(500).json({
                                error:
                                  "Error sending email into Broker Mail.",
                              });
                            });

                          
                        }
  
                      //garage
                      return res.status(200).json({
                        message: "Data inserted successfully.",
                      });
                      //broker
                    });
                  });
                });
              });
            });
          });
        }
      );
    });
  };
  

const getSpecificClaim = async (req, res) => {
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
      const claimDetails = await executeQuery(
        "SELECT * FROM ClaimDetails WHERE LeadID=?",
        [leadId]
      );
      const insuredDetails = await executeQuery(
        "SELECT * FROM InsuredDetails WHERE LeadID=?",
        [leadId]
      );
      const accidentDetails = await executeQuery(
        "SELECT * FROM AccidentDetails WHERE LeadID=?",
        [leadId]
      );
      const driverDetails = await executeQuery(
        `SELECT 
        LicenseNumber,
        DriverName,
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
        FROM DriverDetails WHERE LeadID=?`,
        [leadId]
      );
      const vehicleOnlineDetails = await executeQuery(
        `SELECT RegisteredNumber,
        TypeOfBody,
        DateOfRegistration,
        EngineNumber,
        ChassisNumber,
        FuelType,
        MakerDesc,
        MakerModel,
        CubicCapacity,
        SeatingCapacity,
        FitUpto,
        PasiaModelCode,
        VehicleType,
        BancsModelCode,
        BancsMakeCode,
        BancsSubtypeCode,
        BancsBodyType,
        BancsVehicleClass,
        BancsVehicleSegment,
        RcRtoCode,
        VehicleRcStatus,
        VehicleBlackListStatus,
        VehicleRegistedAt,
        ManufactureMonthYear,
        PermanentAddress,
        ClassOfVehicle,
        RegisteredOwner,
        VehicleInsuranceUpto,
        PucValidUntil,
        PucNumber,
        VehicleInsuranceCompany,
        MakeVariantModelColor,
        TaxParticulars,
        LeadId
         FROM VehicleDetailsOnline WHERE LeadId=?`,
        [leadId]
      );
      const driverOnlineDetails = await executeQuery(
        `SELECT 
        LicenseNumber,
        DriverName,
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
        FROM DriverDetailsOnline WHERE LeadID=?`,
        [leadId]
      );
      const vehicleDetails = await executeQuery(
        `SELECT  
        RegisteredNumber,
        TypeOfBody,
        DateOfRegistration,
        EngineNumber,
        ChassisNumber,
        FuelType,
        MakerDesc,
        MakerModel,
        CubicCapacity,
        SeatingCapacity,
        FitUpto,
        PasiaModelCode,
        VehicleType,
        BancsModelCode,
        BancsMakeCode,
        BancsSubtypeCode,
        BancsBodyType,
        BancsVehicleClass,
        BancsVehicleSegment,
        RcRtoCode,
        VehicleRcStatus,
        VehicleBlackListStatus,
        VehicleRegistedAt,
        ManufactureMonthYear,
        PermanentAddress,
        ClassOfVehicle,
        RegisteredOwner,
        VehicleInsuranceUpto,
        PucValidUntil,
        PucNumber,
        VehicleInsuranceCompany,
        MakeVariantModelColor,
        TaxParticulars,
        LeadID
        FROM VehicleDetails WHERE LeadID=?`,
        [leadId]
      );
      const garageDetails = await executeQuery(
        "SELECT * FROM GarageDetails WHERE LeadID=?",
        [leadId]
      );
      const summaryDetails = await executeQuery(
        "SELECT * FROM SummaryReport WHERE LeadId=?",
        [leadId]
      );
      const claimStatus = await executeQuery(
        "SELECT * FROM ClaimStatus WHERE LeadID=?",
        [leadId]
      );
  
      const commercialVehicleDetails = await executeQuery(
        "SELECT * FROM CommercialVehicleDetails WHERE LeadID=?",
        [leadId]
      );
  
      const combinedResult = {
        claimDetails,
        insuredDetails,
        accidentDetails : accidentDetails,
        driverDetails,
        vehicleDetails,
        garageDetails:garageDetails,
        claimStatus,
        vehicleOnlineDetails,
        driverOnlineDetails,
        commercialVehicleDetails,
        summaryDetails
      };
  
      // console.log(combinedResult)
  
      res.json(combinedResult);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
 };


 const updateClaim = async(req, res) => {
  
  const {
    InsuredName,
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
    CubicCapacity,
    InsuranceCompanyNameAddress,
    InsuredAddedBy,
    VehicleMakeVariantModelColor,
    VehicleTypeOfBody,
    VehicleRegisteredNumber,
    VehicleDateOfRegistration,
    VehiclePucNumber,
    VehicleRegisteredOwner,
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
    VehicleClassDescription,
    MakerDesc,
    MakerModel,
    ManufactureMonth,
    VehicleGvw,
    VehicleCubicCap,
    VehicleSeatingCapacity,
    VehiclePermanentAddress,
    FitUpto,
    PasiaModelCode,
    RcInsuranceComp,
    RcInsuranceUpto,
    RcRegisteredAt,
    RcBlacklistStatus,
    RcVehicleType,
    BancsModelCode,
    BancsMakeCode,
    BancsSubtypeCode,
    BancsBodyType,
    BancsVehicleClass,
    BancsVehicleSegment,
    RcRtoCode,
    VehicleRcStatus,
    VehicleBlackListStatus,
    VehicleRegistedAt,
    VehicleInsuranceCompany,
    ManufactureMonthYear,
    PermanentAddress,
    ClassOfVehicle,
    insuredAddedBy,
    SeatingCapacity,
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
    IsDriverDetailsFetched,
    IsRcDetailsFetched,
    DateOfBirth,
    DateOfIssue,

    LeadId,
  } = req.body;


    const updateClaimDetails = `
    UPDATE ClaimDetails
    SET
    PolicyIssuingOffice = ${PolicyIssuingOffice ? `'${PolicyIssuingOffice}'` : null},
    Region = '${ClaimRegion}',
    ClaimServicingOffice = ${ClaimServicingOffice ? `'${ClaimServicingOffice}'` : null},
    InspectionType = '${InspectionType}',
    SurveyType = '${SurveyType}',
    PolicyPeriodStart = ${PolicyPeriodStart ? `'${PolicyPeriodStart}'` : null},
    PolicyPeriodEnd = ${PolicyPeriodEnd ? `'${PolicyPeriodEnd}'` : null},
    IsDriverDetailsFetched = ${IsDriverDetailsFetched ? IsDriverDetailsFetched : null},
    IsRcDetailsFetched = ${IsRcDetailsFetched ? IsRcDetailsFetched : null},
    InsuranceCompanyNameAddress = ${InsuranceCompanyNameAddress ? `'${InsuranceCompanyNameAddress}'` : null}
    WHERE LeadId = ${LeadId};
  `;
  
  // Update DriverDetails
  const updateDriverDetails = `
    UPDATE DriverDetails
    SET
    IssuingAuthority = ${IssuingAuthority ? `'${IssuingAuthority}'` : null},
    LicenseNumber = '${LicenseNumber}',
    LicenseType = '${LicenseType}',
    DriverName = '${DriverName}',
    AddedDate = ${DriverAddedDate ? `'${DriverAddedDate}'` : null},
    Pht = ${Pht ? `'${Pht}'` : null},
    Photo = ${Photo ? `'${Photo}'` : null},
    Vov = ${Vov ? `'${Vov}'` : null},
    VaildUpto = ${ValidUpto ? `'${ValidUpto}'` : null},
    RtoName = ${RtoName ? `'${RtoName}'` : null},
    Address = ${Address ? `'${Address}'` : null},
    Mobile = ${Mobile ? `'${Mobile}'` : null},
    BloodGroup = ${BloodGroup ? `'${BloodGroup}'` : null},
    Gender = ${Gender ? `'${Gender}'` : null},
    FatherName = ${FatherName ? `'${FatherName}'` : null},
    DateOfBirth = ${DateOfBirth ? `'${DateOfBirth}'` : null},
    DateOfIssue = ${DateOfIssue ? `'${DateOfIssue}'` : null},
    TypeOfVerification = '${DriverTypeOfVerification}'
    WHERE LeadID = ${LeadId};
  `;
  
  // Update VehicleDetails
  const updateVehicleDetails = `
  UPDATE VehicleDetails
  SET 
    RegisteredNumber = ${VehicleRegisteredNumber ? `'${VehicleRegisteredNumber}'` : null},
    MakeVariantModelColor = ${VehicleMakeVariantModelColor ? `'${VehicleMakeVariantModelColor}'` : null},
    TypeOfBody = ${VehicleTypeOfBody ? `'${VehicleTypeOfBody}'` : null},
    DateOfRegistration = ${VehicleDateOfRegistration ? `'${VehicleDateOfRegistration}'` : null},
    PucNumber = ${VehiclePucNumber ? `'${VehiclePucNumber}'` : null},
    TransferDate = ${VehicleTransferDate ? `'${VehicleTransferDate}'` : null},
    EngineNumber = ${VehicleEngineNumber ? `'${VehicleEngineNumber}'` : null},
    AddedBy = ${VehicleAddedBy ? `'${VehicleAddedBy}'` : null},
    ChassisNumber = ${VehicleChassisNumber ? `'${VehicleChassisNumber}'` : null},
    FuelType = ${VehicleFuelType ? `'${VehicleFuelType}'` : null},
    MakerDesc = ${MakerDesc ? `'${MakerDesc}'` : null},
    MakerModel = ${MakerModel ? `'${MakerModel}'` : null},
    CubicCapacity = ${CubicCapacity ? `'${CubicCapacity}'` : null},
    FitUpto = ${FitUpto ? `'${FitUpto}'` : null},
    PasiaModelCode = ${PasiaModelCode ? `'${PasiaModelCode}'` : null},
    VehicleType = ${RcVehicleType ? `'${RcVehicleType}'` : null},
    BancsModelCode = ${BancsModelCode ? `'${BancsModelCode}'` : null},
    BancsMakeCode = ${BancsMakeCode ? `'${BancsMakeCode}'` : null},
    BancsSubtypeCode = ${BancsSubtypeCode ? `'${BancsSubtypeCode}'` : null},
    BancsBodyType = ${BancsBodyType ? `'${BancsBodyType}'` : null},
    BancsVehicleClass = ${BancsVehicleClass ? `'${BancsVehicleClass}'` : null},
    BancsVehicleSegment = ${BancsVehicleSegment ? `'${BancsVehicleSegment}'` : null},
    RcRtoCode = ${RcRtoCode ? `'${RcRtoCode}'` : null},
    VehicleRcStatus = ${VehicleRcStatus ? `'${VehicleRcStatus}'` : null},
    VehicleBlackListStatus = ${VehicleBlackListStatus ? `'${VehicleBlackListStatus}'` : null},
    VehicleRegistedAt = ${VehicleRegistedAt ? `'${VehicleRegistedAt}'` : null},
    VehicleInsuranceCompany = ${VehicleInsuranceCompany ? `'${VehicleInsuranceCompany}'` : null},
    ManufactureMonthYear = ${ManufactureMonthYear ? `'${ManufactureMonthYear}'` : null},
    PermanentAddress = ${PermanentAddress ? `'${PermanentAddress}'` : null},
    ClassOfVehicle = ${ClassOfVehicle ? `'${ClassOfVehicle}'` : null},
    RegisteredOwner = ${VehicleRegisteredOwner ? `'${VehicleRegisteredOwner}'` : null},
    SeatingCapacity = ${SeatingCapacity ? `'${SeatingCapacity}'` : null},
    VehicleInsuranceUpto = ${RcInsuranceUpto ? `'${RcInsuranceUpto}'` : null}
  WHERE LeadId = ${LeadId};
`;
  
  // Update GarageDetails
  const updateGarageDetails = `
    UPDATE GarageDetails
    SET
    GarageNameAndAddress = ${GarageNameAndAddress ? `'${GarageNameAndAddress}'` : null},
    GarageContactNo1 = ${GarageContactNo1 ? `'${GarageContactNo1}'` : null},
    GarageContactNo2 = ${GarageContactNo2 ? `'${GarageContactNo2}'` : "''"},
    AddedBy = ${GarageAddedBy ? `'${GarageAddedBy}'` : null}
    WHERE LeadId = ${LeadId};
  `;
  
  // Update InsuredDetails
  const updateInsuredDetails = `
    UPDATE InsuredDetails
    SET
    InsuredName = ${InsuredName ? `'${InsuredName}'` : null},
    InsuredMobileNo1 = ${InsuredMobileNo1 ? `'${InsuredMobileNo1}'` : null},
    InsuredMobileNo2 = ${InsuredMobileNo2 ? `'${InsuredMobileNo2}'` : null},
    InsuredMailAddress = '${InsuredMailAddress}',
    AddedBy = ${insuredAddedBy ? `'${insuredAddedBy}'` : null}
    WHERE LeadId = ${LeadId};
  `;
  
    db.query(updateClaimDetails, (error, results) => {
      if (error) {
        console.error("Error updating data in ClaimDetails:", error);
        return res
          .status(500)
          .json({ error: "Error updating data in ClaimDetails." });
      }
  
      db.query(updateDriverDetails, (error, results) => {
        if (error) {
          console.error("Error updating data in ClaimDetails:", error);
          return res
            .status(500)
            .json({ error: "Error updating data in ClaimDetails." });
        }
  
        db.query(updateVehicleDetails, (error, results) => {
          if (error) {
            console.error("Error updating data in VehicleDetails:", error);
            return res
              .status(500)
              .json({ error: "Error updating data in VehicleDetails." });
          }
  
          db.query(updateGarageDetails, (error, results) => {
            if (error) {
              console.error("Error updating data in GarageDetails:", error);
              return res
                .status(500)
                .json({ error: "Error updating data in GarageDetails." });
            }
  
            db.query(updateInsuredDetails, (error, results) => {
              if (error) {
                console.error("Error updating data in InsuredDetails:", error);
                return res
                  .status(500)
                  .json({ error: "Error updating data in InsuredDetails." });
              }
  
              res.status(200).json({ message: "Data updated successfully." });
            });
          });
        });
      });
    });
  };


  const getAllClaims = (req, res) => {
    const region = req.query.region;
    const sql = "CALL GetPolicyInfoByRegion(?)";
    db.query(sql, [region], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.send(result);
    });
  };

  const getClaimDetails = (req, res) => {
    const { token, leadId } = req.body;
    const sql = "SELECT Token FROM ClaimDetails WHERE LeadId =?";
    db.query(sql, [leadId], (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      if (result2[0]?.Token === token) {
        // console.log(result2[0].Token === token);
        res.status(200).send("Successfully found!!");
      } else {
        res.status(403).send("Forbidden Access!");
      }
    });
  };

  const updateDriverDetails=(req,res)=>{

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
    const updateDriverDetails = `
    UPDATE DriverDetails
    SET
    IssuingAuthority = ${IssuingAuthority ? `'${(IssuingAuthority)}'` : null},
    LicenseNumber = '${LicenseNumber}',
    LicenseType = '${LicenseType}',
    DriverName = '${DriverName}',
    AddedDate = ${DriverAddedDate ? `'${DriverAddedDate}'` : null},
    Vov = ${Vov ? `'${Vov}'` : null},
    VaildUpto = ${ValidUpto ? `'${(ValidUpto)}'` : null},
    RtoName = ${RtoName ? `'${RtoName}'` : null},
    Address = ${Address ? `'${Address}'` : null},
    Mobile = ${Mobile ?`'${(Mobile)}'` : null},
    BloodGroup = ${BloodGroup ? `'${BloodGroup}'` : null},
    Gender = ${Gender ? `'${Gender}'` : null},
    FatherName = ${FatherName ? `'${FatherName}'` : null},
    DateOfBirth = ${DateOfBirth ? `'${(DateOfBirth)}'` : null},
    DateOfIssue = ${DateOfIssue ? `'${(DateOfIssue)}'` : null},
    TypeOfVerification = '${DriverTypeOfVerification}'
    WHERE LeadID = ${LeadId};
  `;

  console.log(updateDriverDetails)

  db.query(updateDriverDetails, (error, results) => {
    if (error) {
      console.log(error)
      console.error("Error updating data in ClaimDetails:", error);
      return res
        .status(500)
        .json({ error: "Error updating data in ClaimDetails." });
    }
    res.status(200).json({ message: "Data updated successfully." });
  });
  
  }

  const updateClaimDetails = (req,res)=>{
    const {
      InsuredName,
      InsuredMailAddress,
      InsuredMobileNo1,
      InsuredMobileNo2,
      PolicyIssuingOffice,
      ClaimRegion,
      ClaimServicingOffice,
      InspectionType,
      SurveyType,
      PolicyPeriodStart,
      PolicyPeriodEnd,
      InsuranceCompanyNameAddress,
      insuredAddedBy,
      IsDriverDetailsFetched,
      IsRcDetailsFetched,
  
      LeadId,
    } = req.body;

    const updateClaimDetails = `
    UPDATE ClaimDetails
    SET
    PolicyIssuingOffice = ${PolicyIssuingOffice ? `'${PolicyIssuingOffice}'` : null},
    Region = '${ClaimRegion}',
    ClaimServicingOffice = ${ClaimServicingOffice ? `'${ClaimServicingOffice}'` : null},
    InspectionType = '${InspectionType}',
    SurveyType = '${SurveyType}',
    PolicyPeriodStart = ${PolicyPeriodStart ? `'${PolicyPeriodStart}'` : null},
    PolicyPeriodEnd = ${PolicyPeriodEnd ? `'${PolicyPeriodEnd}'` : null},
    IsDriverDetailsFetched = ${IsDriverDetailsFetched ? IsDriverDetailsFetched : null},
    IsRcDetailsFetched = ${IsRcDetailsFetched ? IsRcDetailsFetched : null},
    InsuranceCompanyNameAddress = ${InsuranceCompanyNameAddress ? `'${InsuranceCompanyNameAddress}'` : null}
    WHERE LeadId = ${LeadId};
  `;


  const updateInsuredDetails = `
    UPDATE InsuredDetails
    SET
    InsuredName = ${InsuredName ? `'${InsuredName}'` : null},
    InsuredMobileNo1 = ${InsuredMobileNo1 ? `'${InsuredMobileNo1}'` : null},
    InsuredMobileNo2 = ${InsuredMobileNo2 ? `'${InsuredMobileNo2}'` : null},
    InsuredMailAddress = '${InsuredMailAddress}',
    AddedBy = ${insuredAddedBy ? `'${insuredAddedBy}'` : null}
    WHERE LeadId = ${LeadId};
  `;

   db.query(updateClaimDetails, (error, results) => {
    if (error) {
      console.error("Error updating data in ClaimDetails:", error);
      return res
        .status(500)
        .json({ error: "Error updating data in ClaimDetails." });
    }
    db.query(updateInsuredDetails, (error, results) => {
      if (error) {
        console.error("Error updating data in ClaimDetails:", error);
        return res
          .status(500)
          .json({ error: "Error updating data in ClaimDetails." });
      }
      res.status(200).json({ message: "Data updated successfully." });
    });
  });

  }

  const updateVehicleDetails=(req,res)=>{
    const {
      VehicleMakeVariantModelColor,
      VehicleTypeOfBody,
      VehicleRegisteredNumber,
      CubicCapacity,
      VehicleDateOfRegistration,
      VehiclePucNumber,
      VehicleRegisteredOwner,
      VehicleTransferDate,
      VehicleEngineNumber,
      VehicleAddedBy,
      VehicleChassisNumber,
      VehicleFuelType,
      MakerDesc,
      MakerModel,
      VehicleCubicCap,
      FitUpto,
      PasiaModelCode,
      RcInsuranceUpto,
      RcVehicleType,
      BancsModelCode,
      BancsMakeCode,
      BancsSubtypeCode,
      BancsBodyType,
      BancsVehicleClass,
      BancsVehicleSegment,
      RcRtoCode,
      VehicleRcStatus,
      VehicleBlackListStatus,
      VehicleRegistedAt,
      VehicleInsuranceCompany,
      ManufactureMonthYear,
      PermanentAddress,
      ClassOfVehicle,
      SeatingCapacity,
      LeadId,
    } = req.body;

   // Update VehicleDetails
   const updateVehicleDetails = `
   UPDATE VehicleDetails
   SET 
     RegisteredNumber = ${VehicleRegisteredNumber ? `'${VehicleRegisteredNumber}'` : null},
     MakeVariantModelColor = ${VehicleMakeVariantModelColor ? `'${VehicleMakeVariantModelColor}'` : null},
     TypeOfBody = ${VehicleTypeOfBody ? `'${VehicleTypeOfBody}'` : null},
     DateOfRegistration = ${VehicleDateOfRegistration ? `'${VehicleDateOfRegistration}'` : null},
     PucNumber = ${VehiclePucNumber ? `'${VehiclePucNumber}'` : null},
     TransferDate = ${VehicleTransferDate ? `'${VehicleTransferDate}'` : null},
     EngineNumber = ${VehicleEngineNumber ? `'${VehicleEngineNumber}'` : null},
     AddedBy = ${VehicleAddedBy ? `'${VehicleAddedBy}'` : null},
     ChassisNumber = ${VehicleChassisNumber ? `'${VehicleChassisNumber}'` : null},
     FuelType = ${VehicleFuelType ? `'${VehicleFuelType}'` : null},
     MakerDesc = ${MakerDesc ? `'${MakerDesc}'` : null},
     MakerModel = ${MakerModel ? `'${MakerModel}'` : null},
     CubicCapacity = ${CubicCapacity ? `${parseInt(CubicCapacity)}` : null},
     FitUpto = ${FitUpto ? `'${FitUpto}'` : null},
     PasiaModelCode = ${PasiaModelCode ? `'${PasiaModelCode}'` : null},
     VehicleType = ${RcVehicleType ? `'${RcVehicleType}'` : null},
     BancsModelCode = ${BancsModelCode ? `'${BancsModelCode}'` : null},
     BancsMakeCode = ${BancsMakeCode ? `'${BancsMakeCode}'` : null},
     BancsSubtypeCode = ${BancsSubtypeCode ? `'${BancsSubtypeCode}'` : null},
     BancsBodyType = ${BancsBodyType ? `'${BancsBodyType}'` : null},
     BancsVehicleClass = ${BancsVehicleClass ? `'${BancsVehicleClass}'` : null},
     BancsVehicleSegment = ${BancsVehicleSegment ? `'${BancsVehicleSegment}'` : null},
     RcRtoCode = ${RcRtoCode ? `'${RcRtoCode}'` : null},
     VehicleRcStatus = ${VehicleRcStatus ? `'${VehicleRcStatus}'` : null},
     VehicleBlackListStatus = ${VehicleBlackListStatus ? `'${VehicleBlackListStatus}'` : null},
     VehicleRegistedAt = ${VehicleRegistedAt ? `'${VehicleRegistedAt}'` : null},
     VehicleInsuranceCompany = ${VehicleInsuranceCompany ? `'${VehicleInsuranceCompany}'` : null},
     ManufactureMonthYear = ${ManufactureMonthYear ? `'${ManufactureMonthYear}'` : null},
     PermanentAddress = ${PermanentAddress ? `'${PermanentAddress}'` : null},
     ClassOfVehicle = ${ClassOfVehicle ? `'${ClassOfVehicle}'` : null},
     RegisteredOwner = ${VehicleRegisteredOwner ? `'${VehicleRegisteredOwner}'` : null},
     SeatingCapacity = ${SeatingCapacity ? `'${SeatingCapacity}'` : null},
     VehicleInsuranceUpto = ${RcInsuranceUpto ? `'${RcInsuranceUpto}'` : null}
   WHERE LeadId = ${LeadId};
 `;

 console.log(updateVehicleDetails);

  db.query(updateVehicleDetails, (error, results) => {
    if (error) {
      console.error("Error updating data in ClaimDetails:", error);
      return res
        .status(500)
        .json({ error: "Error updating data in ClaimDetails." });
    }
    res.status(200).json({ message: "Data updated successfully." });
  });
  
  }

  const garageDetails = (req,res)=>{

    const {
      GarageNameAndAddress,
      GarageAddedBy,
      GarageContactNo1,
      GarageContactNo2,
      LeadId,
    } = req.body;

    const updateGarageDetails = `
    UPDATE GarageDetails
    SET
    GarageNameAndAddress = ${GarageNameAndAddress ? `'${GarageNameAndAddress}'` : null},
    GarageContactNo1 = ${GarageContactNo1 ? `'${GarageContactNo1}'` : null},
    GarageContactNo2 = ${GarageContactNo2 ? `'${GarageContactNo2}'` : "''"},
    AddedBy = ${GarageAddedBy ? `'${GarageAddedBy}'` : null}
    WHERE LeadId = ${LeadId};
  `;

    db.query(updateGarageDetails, (error, results) => {
      if (error) {
        console.error("Error updating data in ClaimDetails:", error);
        return res
          .status(500)
          .json({ error: "Error updating data in ClaimDetails." });
      }
      res.status(200).json({ message: "Data updated successfully." });
    });
  }


module.exports={addClaim,
                getSpecificClaim,
                updateClaim,
                getAllClaims,
                getClaimDetails,
              updateClaimDetails,
              updateDriverDetails,
              updateVehicleDetails,
              garageDetails
            }
