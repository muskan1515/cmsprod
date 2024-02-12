
const db = require("../Config/dbConfig");

const updateFinalReport = (req,res)=>{

    const {
      policyType ,
      TypeOfDate,
      IDV  ,
      PolicyPeriodStart,
      PolicyPeriodEnd ,
      HPA ,
      ClaimServicingOffice,
      OwnerSRST,
      VehicleMakeVariantModelColor,
      DateOfIssue,
      MailRecieveDate,
      ValidFrom,
      VehicleType,
      ValidUntilNtv,
      ValidUntilTv,
      phoneNumber,
      AntiTheft,
      RegLadenWt,
      RemarkIfRLW,
      Pin,
      DateOfRegistration,
      PlaceOfSurvey,
      UnladenWT,
      RemarkIfULW,
      VehicleRemark,
      InsuranceCompanyNameAddress,
      InsuredAddress,InsuredMailAddress,
      InsuredMobileNo1,
      InsuredMobileNo2,
      InsuredName,
      requestType,
      ClaimNumber,
      EngineType,
      DateRegistration,
      PUCNumber,
      TransferDate,
      AddedBy,
      Verification,
      GarageAddedBy,
      GarageContactNo1,
      GarageContactNo2,
      GarageNameAndAddress,
      ClaimAddedDateTime,
      PolicyIssuingOffice,
      PolicyNumber,
      DriverName,
      DriverAddedDate,
      IssuingAuthority,
      LicenseNumber,
      LicenseType,
      BadgeNumber,
      driverRemark,
      VehicleRegisteredNumber,
      RegisteredOwner,
      VehicleChassisNumber,
      EngineNumber,
      VehicleTypeOfBody,
      VehicleCubicCapacity,
      VehicleClassOfVehicle,
      VehicleFuelType,
      VehicleOdometerReading,
      VehiclePreAccidentCondition,
      VehicleModel,
      VehicleTaxParticulars,
      VehicleSeatingCapacity,
      AccidentAddedDateTime,
  
      PlaceOfLoss,
      SurveyAllotmentDate,
      SurveyConductedDate,
  
      FitnessCertificate,
      FitnessFrom,
      FitnessTo,
      PermitTo,
      PermitNo,
      PermitFrom,
      TypeOfPermit,
      Authorization,
      AreasOfoperation,
      commercialRemark,
  
      DetailsOfLoads,
      CauseOfAccident,
      PoliceAction,
      ThirdPartyLoss,
      Assessment,
      leadId
    } = req.body;
  
  
    const updateDriverDetails = `
      UPDATE DriverDetails
      SET
      AddedDate = '${DriverAddedDate}',
      DriverName = '${DriverName}',
      LicenseNumber='${LicenseNumber}',
      LicenseType='${LicenseType}',
      IssuingAuthority = '${IssuingAuthority}',
      DateOfIssue = '${DateOfIssue}',
      ValidFrom='${ValidFrom}',
      ValidUntilNtv = '${ValidUntilNtv}',
      ValidUntilTv = '${ValidUntilTv}',
      BadgeNumber='${BadgeNumber}',
      Remark='${driverRemark}'
      WHERE LeadID = ${leadId};
    `;
  
    const updateClaimDetails = `
    UPDATE ClaimDetails
          SET
          InsuranceCompanyNameAddress = '${InsuranceCompanyNameAddress}',
          SurveyType = '${""}',
          PolicyIssuingOffice='${PolicyIssuingOffice}',
          PolicyNumber = '${PolicyNumber}',
          PolicyPeriodStart='${PolicyPeriodStart}',
          PolicyPeriodEnd = '${PolicyPeriodEnd}',
          ClaimNumber = '${ClaimNumber}',
          ClaimServicingOffice='${ClaimServicingOffice}',
          InspectionType = '${""}',
          PolicyType='${policyType}',
          IDV='${IDV}',
          MailRecieveDate='${MailRecieveDate}',
          HPA='${HPA}'
          WHERE LeadID = ${leadId};
    `;
  
    const updateVehicleDetails = `
    UPDATE VehicleDetails
          SET
          TypeOfVerification = '${Verification}',
          RegisteredNumber = '${VehicleRegisteredNumber}',
          RegisteredOwner='${RegisteredOwner}',
          TransferDate = '${TransferDate}',
          DateOfRegistration = '${DateRegistration}',
          MakeVariantModelColor = '${VehicleMakeVariantModelColor}',
          EngineNumber='${EngineNumber}',
          ChassisNumber = '${VehicleChassisNumber}',
          TypeOfBody = '${VehicleTypeOfBody}',
          ClassOfVehicle = '${VehicleClassOfVehicle}',
          PreAccidentCondition='${VehiclePreAccidentCondition}',
          SeatingCapacity = '${VehicleSeatingCapacity}',
          CubicCapacity = '${VehicleCubicCapacity}',
          FuelType = '${VehicleFuelType}',
          TaxParticulars='${VehicleTaxParticulars}',
          OdometerReading = '${VehicleOdometerReading}',
          PucNumber='${PUCNumber}',
          OwnerSrDate='${OwnerSRST}',
          RegLadenWt='${parseInt(RegLadenWt)}',
          RemarkIfRLW='${RemarkIfRLW}',
          UnladenWT='${parseInt(UnladenWT)}',
          RemarkIfULW='${RemarkIfULW}',
          Remark='${VehicleRemark}',
          VehicleType='${VehicleType}',
          AntiTheft='${AntiTheft}',
          TypeOfDate='${TypeOfDate}'
          WHERE LeadID = ${leadId};
    `;
  
    const updateGarageDetails = `
    UPDATE GarageDetails
          SET
          GarageNameAndAddress = '${GarageNameAndAddress}',
          GarageContactNo1 = '${GarageContactNo1}',
          GarageContactNo2='${GarageContactNo2}',
          AddedBy='${GarageAddedBy}'
          WHERE LeadID = ${leadId};
    `;
  
    const updateInsuredDetails = `
    UPDATE InsuredDetails
          SET
          InsuredName = '${InsuredName}',
          InsuredMobileNo1 = '${InsuredMobileNo1}',
          InsuredMobileNo2='${InsuredMobileNo2}',
          InsuredMailAddress = '${InsuredMailAddress}',
          InsuredAddress = '${InsuredAddress}'
          WHERE LeadID = ${leadId};
    `;
  
    const updateAccidentDetails = `
    UPDATE AccidentDetails
          SET
          PlaceOfLoss = '${PlaceOfLoss}',
          SurveyAllotmentDate = '${SurveyAllotmentDate}',
          SurveyConductedDate='${SurveyConductedDate}',
          Pin='${Pin}',
          PlaceOfSurvey='${PlaceOfSurvey}',
          DetailsOfLoads='${DetailsOfLoads}',
          CauseOfAccident='${CauseOfAccident}',
          PoliceAction='${PoliceAction}',
          ThirdPartyLoss='${ThirdPartyLoss}',
          Assessment='${Assessment}',
          AddedDateTime='${AccidentAddedDateTime}'
          WHERE LeadID = ${leadId};
    `;
  
    const insertIntoCommercialVehicleDetails = `
    INSERT INTO CommercialVehicleDetails (
      FitnessCertificate,
        FitnessFrom,
        FitnessTo,
        PermitTo,
        PermitNo,
        PermitFrom,
      TypeOfPermit,
      Authorization,
      AreasOfoperation,
      Remark,
      LeadID 
    ) VALUES (
      '${FitnessCertificate}',
      '${FitnessFrom}',
      '${FitnessTo}',
      '${PermitTo}',
      '${PermitNo}',
      '${PermitFrom}',
      '${TypeOfPermit}',
      '${Authorization}',
      '${AreasOfoperation}',
      '${commercialRemark}',
      '${parseInt(leadId)}'
    );
    `;
  
  
    const updateCommercialVehicleDetails = `
    UPDATE CommercialVehicleDetails
          SET
          FitnessCertificate = '${FitnessCertificate}',
          FitnessFrom = '${FitnessFrom}',
          FitnessTo='${FitnessTo}',
          PermitTo='${PermitTo}',
          PermitNo='${PermitNo}',
          PermitFrom='${PermitFrom}',
          TypeOfPermit='${TypeOfPermit}',
          Authorization='${Authorization}',
          AreasOfoperation='${AreasOfoperation}',
          Remark='${commercialRemark}'
          WHERE LeadID = ${leadId};
    `;
  
  
    // console.log(updateCommercialVehicleDetails,insertIntoCommercialVehicleDetails);
    // return ;
    db.query(updateClaimDetails, (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
    });
    db.query(updateAccidentDetails, (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(result2);
    });
    db.query(updateDriverDetails, (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(result2);
    });
    db.query(updateGarageDetails, (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(result2);
    });
  
    db.query(updateInsuredDetails, (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(result2);
    });
    db.query(updateVehicleDetails, (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(result2);
    });
  
    db.query("SELECT * FROM CommercialVehicleDetails WHERE LeadID=?",[leadId], (err, result2) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(result2?.length);
        const query = result2?.length ? updateCommercialVehicleDetails : insertIntoCommercialVehicleDetails;
        console.log("commercial vehicle",query);
      db.query(query, (err, result2) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }
        console.log(result2);
      });
    
    });
  
  
    
  
  
    res.status(200).send("Successfully Updated!!");
  };

  module.exports={updateFinalReport}
  