import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalVideo from "react-modal-video";
import PolicyDetails from "./PolicyDetails";
import Servey from "./Survey";
import Exemple from "./Exemple";
import Exemple_01 from "./Exemple_01";
import Summary from "./Summary";
import Table from "./Table";
import EditableTable from "./Editable";
import LabourForm from "./LabourForm";
import { calculateDepreciationsPercenatge, getMonthsDifference } from "./functions";

const materials = [
  { qty: "12", desc: "12", price: "12" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
  { qty: "", desc: "", price: "" },
];

const PropertyVideo = ({ SomeComponent, leadId }) => {
  const [isOpen, setOpen] = useState(false);

  const [policyType, setPolicyType] = useState("Regular");
  const [includeDepreciation, setIncludeDepreciation] = useState(true);

  const [claim, setClaim] = useState([]);
  const [applicantNumber, setApplicantNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const [currentGst, setCurrentGst] = useState(0);

  const [overallMetalDep, setOverallMetailDep] = useState(0);
  const [totalAgeOfvehicle, setTotalAgeOfVehicle] = useState(0);

  const [totalAssessed, setTotalAssessed] = useState(0);
  const [totalEstimate, setTotalEstimate] = useState(0);

  const [taxAmount, setTaxAmount] = useState(0);

  const [allDepreciations, setAllDepreciations] = useState([]);

  const [reload,setReload]=useState(false);

  const [AddedDateTime,setAddedDateTime]=useState("");
  const [PlaceOfLoss,setPlaceOfLoss]=useState("");
  
  const [cabin,setCabin]=useState(0);
  const [loadBody,setLoadBody]=useState(0);
  const [towingCharges,setTowingCharges]=useState(0);

  const [laborWOPaint,setLaborWOPaint]=useState(0);

  const [ageOfVehicle,setAgeOfVehicle]=useState(0);
  const [depMetal,setDepMetal]=useState(0);


  const [PolicyPeriodEnd,setPolicyPeriodEnd]=useState("");
  const [PolicyPeriodStart,setPolicyPeriodStart]=useState("");

  const [HPA,setHPA]=useState("");
  const [InsuranceCompanyNameAddress,setInsuranceCompanyNameAddress]=useState(""
  )



  const [allRows, setAllRows] = useState(
    Array.from({ length: 2 }, (_, index) => ({
      _id: index + 1,
      sno: index + 1,
      description: "",
      sac: "",
      estimate: "",
      assessed: "",
      bill_sr: "", // Assuming bill_sr increments with each new row
      gst: 0,
    }))
  );

  const [toggleEstimate, setToggleEstimate] = useState(0);
  const [toggleLabor, setToggleLabor] = useState(0);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getSpecificClaim", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          LeadId: leadId,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setClaim(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const calculateGSTValue = (original,gstValue,gst)=>{
    if(gst % 2 !== 0){
      return (Number(original) * Number(gstValue))/100;
    }
    return 0;
  }

  const calculateTaxValue = (original,gstValue,gst)=>{
    console.log(gst);
    if(gst % 2 !== 0){
      return (Number(original) * Number(gstValue))/100;
    }
    return 0;
  };

  useEffect(() => {
    let total_estimate = 0,
      total_assessed = 0,
      total_paint =0,
      total_tax = 0;
    allRows.map((row, index) => {
      const current_row_estimate =
        Number(row?.estimate) +
        calculateGSTValue(row?.estimate, currentGst, toggleEstimate +1 );
      total_estimate = total_estimate + current_row_estimate;
    })
    allRows.map((row,index)=>{ 
      console.log("assessed",row);
      const current_row_assessed = Number(row?.assessed) + calculateGSTValue(row?.assessed,currentGst,row?.gst);
      const current_row_assessed_tax = calculateTaxValue(row?.assessed,currentGst,row.gst);
      total_assessed = total_assessed + current_row_assessed;
      total_tax = total_tax + current_row_assessed_tax;
      total_paint = total_paint +( (Number(row?.assessed)*13)/100);
    });
    setTotalAssessed(total_assessed);
    setTotalLabrorAssessed(total_assessed);
    setTotalLabrorEstimate(total_estimate);
    setTotalEstimate(total_estimate);
    setTaxAmount(total_tax);
    setLaborWOPaint(total_paint);
    setReload(false);
  }, [toggleEstimate, currentGst, reload, allRows,toggleEstimate]);


  useEffect(()=>{

    calculateVehicleAge();
    calculateDepreciationOnMetal();
  },[claim]);

 

  const [subType, setSubType] = useState("Motor");

  const [ReferenceNo, setReferenceNo] = useState("");
  const [InsuredMailAddress, setInsuredMailAddress] = useState("");
  const [requestType, setRequestType] = useState("Spot");
  const [ClaimNumber, setClaimNumber] = useState("");
  const [EngineType, setEngineType] = useState("");
  const [DateRegistration, setDateRegistration] = useState("");
  const [PUCNumber, setPUCNumber] = useState("");
  const [TransferDate, setTransferDate] = useState("");
  const [AddedBy, setAddedBy] = useState("");
  const [Verification, setVerification] = useState("");
  const [GarageNameAndAddress, setGarageNameAndAddress] = useState("");
  const [GarageContactNo1, setGarageContactNo1] = useState("");
  const [GarageContactNo2, setGarageContactNo2] = useState("");
  const [GarageAddedBy, setGarageAddedBy] = useState("");
  const [ClaimAddedDateTime, setClaimAddedDateTime] = useState("");
  const [ClaimIsActive, setClaimIsActive] = useState("");
  
  const [PolicyNumber, setPolicyNumber] = useState("");
 
  const [InsuredAddress, setInsuredAddress] = useState("");
  const [InsuredName, setInsuredName] = useState("");
  const [InsuredMobileNo1, setInsuredMobileNo1] = useState("");
  const [InsuredMobileNo2, setInsuredMobileNo2] = useState("");
  const [ClaimRegion, setClaimRegion] = useState("");
  //Drivers Details
  const [DriverName, setDriverName] = useState("");
  const [DriverAddedDate, setDriverAddedDate] = useState("");
  const [IssuingAuthority, setIssuingAuthority] = useState("");
  const [LicenseNumber, setLicenseNumber] = useState("");
  const [LicenseType, setLicenseType] = useState("");
  const [BadgeNumber, setBadgeNumber] = useState("");
  //Vehicle Details
  const [ValidUntilNtv,setValidUntilNtv]=useState("");
  const [ValidUntilTv,setValidUntilTv]=useState("");
  const [ValidFrom,setValidFrom]=useState("");

  const [DateOfIssue,setDateOfIssue]=useState("");

  const [VehicleRemark,setVehicleRemark] = useState("");
  const [RegLadenWt,setRegLadenWt] = useState("");
  const [RemarkIfRLW,setRemarkIfRLW]=useState("");
  const [UnladenWT,setUnladenWT]=useState("");
  const [RemarkIfULW,setRemarkIfULW]=useState("");

  const [Pin,setPin]=useState("");
  const [PlaceOfSurvey,setPlaceOfSurvey]=useState("");

 
  const [AccidentAddedDateTime,setAccidentAddedDateTime]=useState("");

  const [SurveyAllotmentDate,setSurveyAllotmentDate]=useState("");
  const [SurveyConductedDate,setSurveyConductedDate]=useState("")
  const [driverRemark,setDriverRemark]=useState("");
  const [VehicleRegisteredNumber, setVehicleRegisteredNumber] = useState("");
  const [RegisteredOwner, setRegisteredOwner] = useState("");
  const [VehicleChassisNumber, setVehicleChassisNumber] = useState("");
  const [EngineNumber, setEngineNumber] = useState("");
  const [VehicleTypeOfBody, setVehicleTypeOfBody] = useState("");
  const [VehicleCubicCapacity, setVehicleCubicCapacity] = useState("");
  const [VehicleClassOfVehicle, setVehicleClassOfVehicle] = useState("");
  const [VehicleFuelType, setVehicleFuelType] = useState("");
  const [VehicleOdometerReading, setVehicleOdometerReading] = useState("");
  const [VehiclePreAccidentCondition, setVehiclePreAccidentCondition] =
    useState("");
  const [VehicleModel, setVehicleModel] = useState("");
  const [VehicleTaxParticulars, setVehicleTaxParticulars] = useState("");
  const [VehicleSeatingCapacity, setVehicleSeatingCapacity] = useState();
  // const [PolicyType, setPolicyType] = useState();

  const [VehicleEngineNumber,setVehicleEngineNumber]=useState("");
  const [VehicleDateOfRegistration,setVehicleDateOfRegistration]=useState("");
  const [OwnerSRST,setOwnerSRST]=useState("");

  const [VehicleColor,setVehicleColor]=useState("");
  const [VehicleMakeVariantModelColor,setVehicleMakeVariantModelColor]=useState("");
  const [PolicyIssuingOffice,setPolicyIssuingOffice]=useState("");
  const [ClaimServicingOffice,setClaimServicingOffice]=useState("");
  const [IDV,setIDV]=useState("");
  const [AntiTheft,setAntiTheft]=useState("");

  const [VehicleType,setVehicleType] = useState("");

  //commercial vehicle details
  const [FitnessCertificate,setFitnessCertificate]=useState("");
  const [FitnessFrom,setFitnessFrom]=useState("");
  const [FitnessTo,setFitnessTo]=useState("");
  const [PermitNo,setPermitNo]=useState("");
  const [PermitFrom,setPermitFrom]=useState("");
  const [PermitTo,setPermitTo]=useState("");
  const [TypeOfPermit,setTypeOfPermit]=useState("");
  const [Authorization,setAuthorization]=useState("");
  const [AreasOfoperation,setAreasOfoperation]=useState("");
  const [commercialRemark,setcommercialRemark]=useState("");

  const [MailRecieveDate,setMailRecieveDate]=useState("");

  const [DateOfRegistration,setDateOfRegistration]=useState("");

  //SURVEY DETAILS
  const [DetailsOfLoads,setDetailsOfLoads]=useState("");
  const [CauseOfAccident,setCauseOfAccident]=useState("");
  const [PoliceAction,setPoliceAction]=useState("");
  const [ThirdPartyLoss,setThirdPartyLoss]=useState("");
  const [Assessment,setAssessment]=useState("");

  //RC
  const [RCOwner,setRCOwner]=useState("");
  const [RCSDW,setRCSDW]=useState("");
  const [RCMakerName,setRCMakerName]=useState("");
  const [RCModelName,setRCModelName]=useState("");
  const [RCTaxValidUpto,setRCTaxValidUpto]=useState("");
  const [RCVehicleDescription,setRCVehicleDescription]=useState("");
  const [EmissionNorm,setEmissionNorm]=useState("");
  const [StandingCapacity,setStandingCapacity]=useState("");
  const [Financier,setFinancier]=useState("");
  const [InsuranceValidUpto,setInsuranceValidUpto]=useState("");
  const [PUCCNumber,setPUCCNumber]=useState("");
  const [PUCCValidUpto,setPUCCValidUpto]=useState("");
  const [RegisteringAuthority,setRegisteringAuthority]=useState("");

  const [TypeOfDate,setTypeOfDate]=useState("");

  const [metaldepPct,setmetaldepPct]=useState(0);
  const [ageOfVehicleTotal,setAgeOfvehicleTotal]=useState(0);
  const [totalPartsEstimate,setTotalPartsEstimate]=useState(0);
  const [totalLabrorEstimate,setTotalLabrorEstimate]=useState(0);
  
  const [totalPartsAssessed,setTotalPartsAssessed]=useState(0);
  const [totalLabrorAssessed,setTotalLabrorAssessed]=useState(0);

  
  const [lessExcess,setLessExcess]=useState(0);
  const [lessImposed,setLessImposed]=useState(0);
  const [other,setOther]=useState(0);
  const [metalSalvageValue,setMetalSalvageValue]=useState(0);

 

 useEffect(() => {
    setInsuredMailAddress(claim?.insuredDetails?.InsuredMailAddress || "");
    setInsuredMobileNo1(claim?.insuredDetails?.InsuredMobileNo1 || "");
    setInsuredMobileNo2(claim?.insuredDetails?.BadgeNumberInsuredMobileNo2 || "");
    setClaimNumber(claim?.claimDetails?.ClaimNumber || "");
    setEngineType(claim?.vehicleDetails?.ModeOfCheck || "");
    setDateRegistration(claim?.vehicleDetails?.DateOfRegistration || "");
    setTransferDate(claim?.vehicleDetails?.TransferDate || "");
    setAddedBy(claim?.vehicleDetails?.VehicleAddedBy || "");
    setVerification(claim?.driverDetails?.DriverTypeOfVerification || "");
    setGarageNameAndAddress(claim?.garageDetails?.GarageNameAndAddress || "");
    setGarageContactNo1(claim?.garageDetails?.GarageContactNo1 || "");
    setGarageContactNo2(claim?.garageDetails?.GarageContactNo2 || "");
    setGarageAddedBy(claim?.garageDetails?.GarageAddedBy || "");
    setClaimAddedDateTime(claim?.claimDetails?.AddedDateTime || "");
    setClaimIsActive(claim?.claimDetails?.IsActive?.data[0] || "");
    // Policy Detail
    setReferenceNo(claim?.claimDetails?.ReferenceNo || "");
    setPolicyNumber(claim?.claimDetails?.PolicyNumber || "");
    setPolicyIssuingOffice(claim?.claimDetails?.PolicyIssuingOffice || "");
    setInsuranceCompanyNameAddress(
      claim?.claimDetails?.InsuranceCompanyNameAddress
    );

    setDateOfRegistration(claim?.vehicleDetails?.DateOfRegistration || "");
    setMailRecieveDate(claim?.claimDetails?.MailRecieveDate || "");
    setOwnerSRST(claim?.vehicleDetails?.OwnerSrDate || "");
    setClaimRegion(claim?.claimDetails?.ClaimRegion || "");
    setInsuredName(claim?.insuredDetails?.InsuredName || "");
    setInsuredAddress(claim?.insuredDetails?.InsuredAddress || "");
    setPolicyType(claim?.insuredDetails?.PolicyType || "");
    setVehicleType(claim?.vehicleDetails?.VehicleType);
    console.log("reference no", VehicleSeatingCapacity);



    setAccidentAddedDateTime(claim?.accidentDetails?.AddedDateTime||"");
    setPlaceOfLoss(claim?.accidentDetails?.PlaceOfLoss||"");
    setSurveyAllotmentDate(claim?.accidentDetails?.SurveyAllotmentDate||"");
    setSurveyConductedDate(claim?.accidentDetails?.SurveyConductedDate||"");
    //Drivers Details
    setDriverName(claim?.driverDetails?.DriverName || "");
    setDriverAddedDate(claim?.driverDetails?.DriverAddedDate || "");
    setIssuingAuthority(claim?.driverDetails?.IssuingAuthority || "");
    setLicenseNumber(claim?.driverDetails?.LicenseNumber || "");
    setLicenseType(claim?.driverDetails?.LicenseType || "");
    setBadgeNumber(claim?.driverDetails?.BadgeNumber || "");

    //Vehicle Detais
    setVehicleRegisteredNumber(
      claim?.vehicleDetails?.RegisteredNumber || ""
    );
      setVehicleEngineNumber(claim?.vehicleDetails?.EngineNumber||"");
      setAntiTheft(claim?.vehicleDetails?.AntiTheft || "");
    setVehicleDateOfRegistration(claim?.claimDetails?.DateOfRegistration || "");
    setInsuranceCompanyNameAddress(
      claim?.claimDetails?.InsuranceCompanyNameAddress || "United India Insurance Company Limited");
      setPolicyPeriodEnd(claim?.claimDetails?.PolicyPeriodEnd || "");
      setPolicyPeriodStart(claim?.claimDetails?.PolicyPeriodEnd || "");
    setVehicleMakeVariantModelColor(claim?.vehicleDetails?.MakeVariantModelColor?.split(",")[0]
 || "" );
 setVehicleColor(claim?.vehicleDetails?.MakeVariantModelColor?.split(",")[1]||"");
    setRegisteredOwner(claim?.vehicleDetails?.RegisteredOwner || "");
    setVehicleChassisNumber(claim?.vehicleDetails?.ChassisNumber || "");
    setEngineNumber(claim?.vehicleDetails?.EngineNumber || "");
    setVehicleModel(
      claim?.VehicleMakeVariantModelColor
        ? `${claim?.VehicleMakeVariantModelColor}`
        : ""
    );
    const temp = claim?.vehicleDetails?.TypeOfDate ? "Registration" : "Purchase";
    setTypeOfDate(temp );
    setVehicleTypeOfBody(claim?.vehicleDetails?.TypeOfBody || "");
    setVehicleCubicCapacity(claim?.vehicleDetails?.CubicCapacity);
    setVehicleClassOfVehicle(claim?.vehicleDetails?.ClassOfVehicle);
    setVehicleFuelType(claim?.vehicleDetails?.FuelType || "");
    setVehicleOdometerReading(
      claim?.vehicleDetails?.OdometerReading || ""
    );
    setDateOfIssue(claim?.driverDetails?.DateOfIssue || "");
    setVehiclePreAccidentCondition(
      claim?.vehicleDetails?.PreAccidentCondition || ""
    );
    setSurveyAllotmentDate(claim?.accidentDetails?.SurveyAllotmentDate||"");
    setSurveyConductedDate(claim?.accidentDetails?.SurveyConductedDate || "");
    setVehicleTaxParticulars(
      claim?.vehicleDetails?.TaxParticulars || ""
    );
    setPUCNumber(claim?.vehicleDetails?.PucNumber || "");
    setVehicleSeatingCapacity(
      claim?.vehicleDetails?.SeatingCapacity || 0
    );
    setClaimServicingOffice(claim?.claimDetails?.ClaimServicingOffice || "");

    setIDV(claim?.claimDetails?.IDV || "");
    setHPA(claim?.claimDetails?.HPA || "");
    setVehicleRemark(claim?.vehicleDetails?.Remark || "");
    setRegLadenWt(claim?.vehicleDetails?.RegLadenWt || "");
    setRemarkIfRLW(claim?.vehicleDetails?.RemarkIfRLW || "");
    setUnladenWT(claim?.vehicleDetails?.UnladenWT || "");
    setRemarkIfULW(claim?.vehicleDetails?.RemarkIfULW || "");

    setPin(claim?.accidentDetails?.Pin || "");
    setPlaceOfSurvey(claim?.accidentDetails?.PlaceOfSurvey || "");
    setDetailsOfLoads(claim?.driverDetails?.DetailsOfLoads||"");
    setCauseOfAccident(claim?.driverDetails?.CauseOfAccident ||"");
    setPoliceAction(claim?.driverDetails?.PoliceAction || ""); 
    setThirdPartyLoss(claim?.driverDetails?.ThirdPartyLoss || "");
    setAssessment(claim?.driverDetails?.Assessment||"");

    setValidUntilNtv(claim?.driverDetails?.ValidUntilNtv || "") ;
    setValidUntilTv(claim?.driverDetails?.ValidUntilTv || "");
    setValidFrom(claim?.driverDetails?.ValidFrom || "");
    setDateOfIssue(claim?.driverDetails?.DateOfIssue || "");

    //commercial
    setFitnessCertificate(claim?.commercialVehicleDetails?.FitnessCertificate || "");
    setFitnessFrom(claim?.commercialVehicleDetails?.FitnessFrom || "");
    setFitnessTo(claim?.commercialVehicleDetails?.FitnessTo || "");
    setPermitNo(claim?.commercialVehicleDetails?.PermitNo || "");
    setPermitFrom(claim?.commercialVehicleDetails?.PermitFrom || "");
    setPermitTo(claim?.commercialVehicleDetails?.PermitTo||"");
    setTypeOfPermit(claim?.commercialVehicleDetails?.TypeOfPermit || "");
    setAuthorization(claim?.commercialVehicleDetails?.Authorization || "");
    setAreasOfoperation(claim?.commercialVehicleDetails?.AreasOfOperation || "");
    setcommercialRemark(claim?.commercialVehicleDetails?.Remark || "");

  }, [claim]);

  const calculateVehicleAge = ()=>{
    if(! claim.vehicleDetails?.DateOfRegistration || !claim.claimDetails?.AddedDateTime){
      return "0";
    }
    const a = getMonthsDifference(claim.vehicleDetails?.DateOfRegistration);
    const b= getMonthsDifference(claim.claimDetails?.AddedDateTime);
 
   setAgeOfvehicleTotal(a);
    return `${a }`;
    
  }

  const calculateDepreciationOnMetal = ()=>{
    const a= calculateDepreciationsPercenatge(allDepreciations,"Metal",claim.vehicleDetails?.DateOfRegistration);
   
    setmetaldepPct(a);
    console.log(a);
    return a;
  }

  const saveHandler = ()=>{

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const payload={
      policyType,
      IDV : IDV ? IDV : claim?.claimDetails?.IDV ,
      PolicyPeriodStart : PolicyPeriodStart ? PolicyPeriodStart : claim?.claimDetails?.PolicyPeriodStart,
      PolicyPeriodEnd : PolicyPeriodEnd ? PolicyPeriodEnd : claim?.claimDetails?.PolicyPeriodEnd,
      HPA : HPA ? HPA : claim.claimDetails?.HPA,
      ClaimServicingOffice,
      OwnerSRST,
      VehicleMakeVariantModelColor : VehicleMakeVariantModelColor + ","+VehicleColor,
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
      TypeOfDate :TypeOfDate === "Registration" ? 1 : 0,
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
    };

<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
    axios.put("/api/updateFinalReport",payload,{
      headers:{
        Authorization:`Bearer ${userInfo[0].Token}`,
        "Content-Type":"application/json"
      },
      params:{
        leadId:leadId
      }
    })
    .then((res)=>{
      alert("Successfully updated!");
      window.location.reload();
    })
    .catch((Err)=>{
      alert(Err);
    })
  }


  useEffect(() => {
    if (String(policyType) === "Add on Policy") {
      setIncludeDepreciation(false);
    } else {
      setIncludeDepreciation(true);
    }
  }, [policyType]);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
        allow="picture-in-picture"
      />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#descriptions"
            role="tab"
          >
            Policy & Vehicle
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            data-bs-toggle="tab"
            href="#description"
            role="tab"
          >
            Survey
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            data-bs-toggle="tab"
            href="#newparts"
            role="tab"
          >
            New Parts
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#labour"
            role="tab"
          >
            Labour
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#summary"
            role="tab"
          >
            Summary & Notes
          </a>
        </li>
        <li className="nav-item" style={{ marginLeft: "360px" }}>
          <a href={`/claim-details?leadId=${claim.LeadID}`}>{claim.PolicyNo}</a>
        </li>
      </ul>
      {/* End .nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="descriptions"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <PolicyDetails

              TypeOfDate={TypeOfDate}
              setTypeOfDate={setTypeOfDate}
                setPolicyType={setPolicyType}
                policyType={policyType}
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}

                IDV={IDV}
                setIDV={setIDV}
                PolicyPeriodEnd={PolicyPeriodEnd}
                setPolicyPeriodEnd={setPolicyPeriodEnd}
                setPolicyPeriodStart={setPolicyPeriodStart}
                PolicyPeriodStart={PolicyPeriodStart}

                MailRecieveDate={MailRecieveDate}
                setMailRecieveDate={setMailRecieveDate}

                OwnerSRST={OwnerSRST}
                setOwnerSRST={setOwnerSRST}
                AntiTheft={AntiTheft}
                setAntiTheft={setAntiTheft}
                RegLadenWt={RegLadenWt}
                setRegLadenWt={setRegLadenWt}
                RemarkIfRLW={RemarkIfRLW}
                setRemarkIfRLW={setRemarkIfRLW}
                RemarkIfULW={RemarkIfULW}
                setRemarkIfULW={setRemarkIfULW}
                UnladenWT={UnladenWT}
                setUnladenWT={setUnladenWT}
                VehicleType={VehicleType}
                setVehicleType={setVehicleType}
                VehicleRemark={VehicleRemark}
                setVehicleRemark={setVehicleRemark}
                driverRemark={driverRemark}
                setDriverRemark={setDriverRemark}
                FitnessCertificate={FitnessCertificate}
                setFitnessCertificate={setFitnessCertificate}
                FitnessFrom={FitnessFrom}
                setFitnessFrom={setFitnessFrom}
                setFitnessTo={setFitnessTo}
                FitnessTo={FitnessTo}
                PermitNo={PermitNo}
                setPermitNo={setPermitNo}
                PermitFrom={PermitFrom}
                setPermitFrom={setPermitFrom}
                PermitTo={PermitTo}
                setPermitTo={setPermitTo}
                TypeOfPermit={TypeOfPermit}
                setTypeOfPermit={setTypeOfPermit}
                Authorization={Authorization}
                setAuthorization={setAuthorization}
                AreasOfoperation={AreasOfoperation}
                setAreasOfoperation={setAreasOfoperation}
                setcommercialRemark={setcommercialRemark}
                commercialRemark={commercialRemark}

                HPA={HPA}
                setClaimNumber={setClaimNumber}
                setHPA={setHPA}
                ClaimServicingOffice={ClaimServicingOffice}
                setClaimServicingOffice={setClaimServicingOffice}
                
                VehicleMakeVariantModelColor={VehicleMakeVariantModelColor}
                setVehicleMakeVariantModelColor={setVehicleMakeVariantModelColor}
                VehicleColor={VehicleColor}
                DateOfIssue={DateOfIssue}
                setDateOfIssue={setDateOfIssue}
                setVehicleColor={setVehicleColor}
                ValidUntilNtv={ValidUntilNtv}
                setValidUntilNtv={setValidUntilNtv}
                ValidFrom={ValidFrom}
                setValidFrom={setValidFrom}
                ValidUntilTv={ValidUntilTv}
                setValidUntilTv={setValidUntilTv}
                DateOfRegistration={DateOfRegistration}
                setDateOfRegistration={setDateOfRegistration}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                applicantNumber={applicantNumber}
                setApplicantNumber={setApplicantNumber}
                ReferenceNo={ReferenceNo}
                setReferenceNo={setReferenceNo}
                InsuredMailAddress={InsuredMailAddress}
                setInsuredMailAddress={setInsuredMailAddress}
                requestType={requestType}
                setRequestType={setRequestType}
                ClaimNumber={ClaimNumber}
                EngineType={EngineType}
                setEngineType={setEngineType}
                DateRegistration={DateRegistration}
                setDateRegistration={setDateRegistration}
                PUCNumber={PUCNumber}
                setPUCNumber={setPUCNumber}
                TransferDate={TransferDate}
                setTransferDate={setTransferDate}
                AddedBy={AddedBy}
                setAddedBy={setAddedBy}
                Verification={Verification}
                setVerification={setVerification}
                GarageNameAndAddress={GarageNameAndAddress}
                setGarageNameAndAddress={setGarageNameAndAddress}
                GarageContactNo={GarageContactNo1}
                setGarageContactNo1={setGarageContactNo1}
                GarageContactNo2={GarageContactNo2}
                setGarageContactNo2={setGarageContactNo2}
                GarageAddedBy={GarageAddedBy}
                setGarageAddedBy={setGarageAddedBy}
                ClaimAddedDateTime={ClaimAddedDateTime}
                setClaimAddedDateTime={setClaimAddedDateTime}
                ClaimIsActive={ClaimIsActive}
                setClaimIsActive={setClaimIsActive}
                PolicyIssuingOffice={PolicyIssuingOffice}
                setPolicyIssuingOffice={setPolicyIssuingOffice}
                PolicyNumber={PolicyNumber}
                setPolicyNumber={setPolicyNumber}
                InsuranceCompanyNameAddress={InsuranceCompanyNameAddress}
                setInsuranceCompanyNameAddress={setInsuranceCompanyNameAddress}
                InsuredAddress={InsuredAddress}
                setInsuredAddress={setInsuredAddress}
                InsuredName={InsuredName}
                setInsuredName={setInsuredName}
                InsuredMobileNo1={InsuredMobileNo1}
                setInsuredMobileNo1={setInsuredMobileNo1}
                InsuredMobileNo2={InsuredMobileNo2}
                setInsuredMobileNo2={setInsuredMobileNo2}
                ClaimRegion={ClaimRegion}
                setClaimRegion={setClaimRegion}
                DriverName={DriverName}
                setDriverName={setDriverName}
                DriverAddedDate={DriverAddedDate}
                setDriverAddedDate={setDriverAddedDate}
                IssuingAuthority={IssuingAuthority}
                setIssuingAuthority={setIssuingAuthority}
                LicenseNumber={LicenseNumber}
                setLicenseNumber={setLicenseNumber}
                LicenseType={LicenseType}
                setLicenseType={setLicenseType}
                BadgeNumber={BadgeNumber}
                setBadgeNumber={setBadgeNumber}
                VehicleRegisteredNumber={VehicleRegisteredNumber}
                setVehicleRegisteredNumber={setVehicleRegisteredNumber}
                RegisteredOwner={RegisteredOwner}
                setRegisteredOwner={setRegisteredOwner}
                VehicleChassisNumber={VehicleChassisNumber}
                setVehicleChassisNumber={setVehicleChassisNumber}
                EngineNumber={EngineNumber}
                setEngineNumber={setEngineNumber}
                VehicleTypeOfBody={VehicleTypeOfBody}
                setVehicleTypeOfBody={setVehicleTypeOfBody}
                VehicleCubicCapacity={VehicleCubicCapacity}
                setVehicleCubicCapacity={setVehicleCubicCapacity}
                VehicleClassOfVehicle={VehicleClassOfVehicle}
                setVehicleClassOfVehicle={setVehicleClassOfVehicle}
                VehicleFuelType={VehicleFuelType}
                setVehicleFuelType={setVehicleFuelType}
                VehicleOdometerReading={VehicleOdometerReading}
                setVehicleOdometerReading={setVehicleOdometerReading}
                VehiclePreAccidentCondition={VehiclePreAccidentCondition}
                setVehiclePreAccidentCondition={setVehiclePreAccidentCondition}
                VehicleModel={VehicleModel}
                setVehicleModel={setVehicleModel}
                VehicleTaxParticulars={VehicleTaxParticulars}
                setVehicleTaxParticulars={setVehicleTaxParticulars}
                VehicleSeatingCapacity={VehicleSeatingCapacity}
                setVehicleSeatingCapacity={setVehicleSeatingCapacity}
                handleUpdateClick={saveHandler}

                RCOwner={RCOwner}
                setRCOwner={setRCOwner}
                RCSDW={RCSDW}
                setRCSDW={setRCSDW}
                RCMakerName={RCMakerName}
                setRCMakerName={setRCMakerName}
                RCModelName={RCModelName}
                setRCModelName={setRCModelName}
                RCTaxValidUpto={RCTaxValidUpto}
                setRCTaxValidUpto={setRCTaxValidUpto}
                RCVehicleDescription={RCVehicleDescription}
                setRCVehicleDescription={setRCVehicleDescription}
                EmissionNorm={EmissionNorm}
                setEmissionNorm={setEmissionNorm}
                StandingCapacity={StandingCapacity}
                setStandingCapacity={setStandingCapacity}
                Financier={Financier}
                setFinancier={setFinancier}
                InsuranceValidUpto={InsuranceValidUpto}
                setInsuranceValidUpto={setInsuranceValidUpto}
                PUCCNumber={PUCCNumber}
                setPUCCNumber={setPUCCNumber}
                PUCCValidUpto={PUCCValidUpto}
                setPUCCValidUpto={setPUCCValidUpto}
                RegisteringAuthority={RegisteringAuthority}
                setRegisteringAuthority={setRegisteringAuthority}
              />
              {/* <Image
                width={692}
                height={390}
                className="pro_img  w100 w-100 cover"
                src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={() => setOpen(true)}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="tab-pane fade show " id="description" role="tabpanel">
          <div className="property_video">
            <div className="thumb">
              <Servey
                SomeComponent={SomeComponent}
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}
                allDepreciations={allDepreciations}
                phoneNumber={phoneNumber}
                calculateDepreciationOnMetal={calculateDepreciationOnMetal}
                calculateVehicleAge={calculateVehicleAge}
                setPhoneNumber={setPhoneNumber}
                applicantNumber={applicantNumber}
                setApplicantNumber={setApplicantNumber}
                ReferenceNo={ReferenceNo}
                setReferenceNo={setReferenceNo}
                InsuredMailAddress={InsuredMailAddress}
                setInsuredMailAddress={setInsuredMailAddress}
                requestType={requestType}
                setRequestType={setRequestType}
                ClaimNumber={ClaimNumber}
                EngineType={EngineType}
                setEngineType={setEngineType}
                DateRegistration={DateRegistration}
                setDateRegistration={setDateRegistration}
                PUCNumber={PUCNumber}
                setPUCNumber={setPUCNumber}
                TransferDate={TransferDate}
                setTransferDate={setTransferDate}
                AddedBy={AddedBy}
                setAddedBy={setAddedBy}
                Verification={Verification}
                setVerification={setVerification}
                GarageNameAndAddress={GarageNameAndAddress}
                setGarageNameAndAddress={setGarageNameAndAddress}
                GarageContactNo={GarageContactNo1}
                setGarageContactNo1={setGarageContactNo1}
                GarageContactNo2={GarageContactNo2}
                setGarageContactNo2={setGarageContactNo2}
                GarageAddedBy={GarageAddedBy}
                setGarageAddedBy={setGarageAddedBy}
                ClaimAddedDateTime={ClaimAddedDateTime}
                setClaimAddedDateTime={setClaimAddedDateTime}
                ClaimIsActive={ClaimIsActive}
                setClaimIsActive={setClaimIsActive}
                PolicyIssuingOffice={PolicyIssuingOffice}
                setPolicyIssuingOffice={setPolicyIssuingOffice}
                PolicyNumber={PolicyNumber}
                setPolicyNumber={setPolicyNumber}
                InsuranceCompanyNameAddress={InsuranceCompanyNameAddress}
                setInsuranceCompanyNameAddress={setInsuranceCompanyNameAddress}
                InsuredAddress={InsuredAddress}
                setInsuredAddress={setInsuredAddress}
                InsuredName={InsuredName}
                setInsuredName={setInsuredName}
                InsuredMobileNo1={InsuredMobileNo1}
                setInsuredMobileNo1={setInsuredMobileNo1}
                InsuredMobileNo2={InsuredMobileNo2}
                setInsuredMobileNo2={setInsuredMobileNo2}
                ClaimRegion={ClaimRegion}
                setClaimRegion={setClaimRegion}
                DriverName={DriverName}
                setDriverName={setDriverName}
                DriverAddedDate={DriverAddedDate}
                setDriverAddedDate={setDriverAddedDate}
                IssuingAuthority={IssuingAuthority}
                setIssuingAuthority={setIssuingAuthority}
                LicenseNumber={LicenseNumber}
                setLicenseNumber={setLicenseNumber}
                LicenseType={LicenseType}
                setLicenseType={setLicenseType}
                BadgeNumber={BadgeNumber}
                VehicleRegisteredNumber={VehicleRegisteredNumber}
                setVehicleRegisteredNumber={setVehicleRegisteredNumber}
                RegisteredOwner={RegisteredOwner}
                setRegisteredOwner={setRegisteredOwner}
                VehicleChassisNumber={VehicleChassisNumber}
                setVehicleChassisNumber={setVehicleChassisNumber}
                EngineNumber={EngineNumber}
                setEngineNumber={setEngineNumber}
                VehicleTypeOfBody={VehicleTypeOfBody}
                setVehicleTypeOfBody={setVehicleTypeOfBody}
                VehicleCubicCapacity={VehicleCubicCapacity}
                setVehicleCubicCapacity={setVehicleCubicCapacity}
                VehicleClassOfVehicle={VehicleClassOfVehicle}
                setVehicleClassOfVehicle={setVehicleClassOfVehicle}
                VehicleFuelType={VehicleFuelType}
                setVehicleFuelType={setVehicleFuelType}
                VehicleOdometerReading={VehicleOdometerReading}
                setVehicleOdometerReading={setVehicleOdometerReading}
                VehiclePreAccidentCondition={VehiclePreAccidentCondition}
                setVehiclePreAccidentCondition={setVehiclePreAccidentCondition}
                VehicleModel={VehicleModel}
                setVehicleModel={setVehicleModel}
                VehicleTaxParticulars={VehicleTaxParticulars}
                setVehicleTaxParticulars={setVehicleTaxParticulars}
                VehicleSeatingCapacity={VehicleSeatingCapacity}
                setVehicleSeatingCapacity={setVehicleSeatingCapacity}

                AccidentAddedDateTime={AccidentAddedDateTime}
                setAccidentAddedDateTime={setAccidentAddedDateTime}
                setPlaceOfLoss={setPlaceOfLoss}
                PlaceOfLoss={PlaceOfLoss}
                SurveyAllotmentDate={SurveyAllotmentDate}
                setSurveyAllotmentDate={setSurveyAllotmentDate}
                setSurveyConductedDate={setSurveyConductedDate}
                SurveyConductedDate={SurveyConductedDate}

                Pin={Pin}
                setPin={setPin}
                PlaceOfSurvey={PlaceOfSurvey}
                setPlaceOfSurvey={setPlaceOfSurvey}
                DetailsOfLoads={DetailsOfLoads}
                setDetailsOfLoads={setDetailsOfLoads}
                CauseOfAccident={CauseOfAccident}
                setCauseOfAccident={setCauseOfAccident}
                PoliceAction={PoliceAction}
                setPoliceAction={setPoliceAction}
                ThirdPartyLoss={ThirdPartyLoss}
                setThirdPartyLoss={setThirdPartyLoss}
                Assessment={Assessment}
                setAssessment={setAssessment}
                SaveHandler={saveHandler}

                claim={claim}
              />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="newparts"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              {/* <EditableTable /> */}
              {/* <Table data={materials} /> */}
              <div className="row">
                <Exemple
                LeadId={leadId}
                  claim={claim}
                  DateOfRegistration={DateRegistration}
                  policyType={policyType}
                  includeDepreciation={includeDepreciation}
                  allDepreciations={allDepreciations}
                  setAllDepreciations={setAllDepreciations}
                  ClaimAddedDateTime={ClaimAddedDateTime}
                  PolicyStartDate={claim.claimDetails?.PolicyPeriodStart}
                  VehicleAddedDate={
                    claim.vehicleDetails?.VehicleDateOfRegistration
                  }
                  setOverallMetailDep={setOverallMetailDep}
                  setTotalAgeOfVehicle={setTotalAgeOfVehicle}

                  ageOfVehicleTotal={ageOfVehicleTotal}
                  metaldepPct={metaldepPct}
                totalPartsEstimate={totalPartsEstimate}
                totalLabrorEstimate={totalLabrorEstimate}
                totalPartsAssessed={totalPartsAssessed}
                totalLabrorAssessed={totalLabrorAssessed}

                setTotalPartsEstimate={setTotalPartsEstimate}
                setTotalLabrorEstimate={setTotalLabrorEstimate}
                setTotalPartsAssessed={setTotalPartsAssessed}
                setTotalLabrorAssessed={setTotalLabrorAssessed}
                setMetalSalvageValue={setMetalSalvageValue}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="labour"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              {/* <LabourSection /> */}
              <div className="row">
                <div
                  className="col-lg-9"
                  style={{ borderRight: "1px solid black" }}
                >
                  <Exemple_01
                  claim={claim}
                    currentGst={currentGst}
                    setTotalAssessed={setTotalAssessed}
                    totalAssessed={totalAssessed}
                    setTotalEstimate={setTotalEstimate}
                    totalEstimate={totalEstimate}
                    taxAmount={taxAmount}
                    setTaxAmount={setTaxAmount}
                    toggleEstimate={toggleEstimate}
                    setToggleEstimate={setToggleEstimate}
                    toggleLabor={toggleLabor}
                    setToggleLabor={setToggleLabor}
                    allRows={allRows}
                    setAllRows={setAllRows}
                    setReload={setReload}
                    setCurrentGST={setCurrentGst}

                    ageOfVehicleTotal={ageOfVehicleTotal}
                    metaldepPct={metaldepPct}
                  totalPartsEstimate={totalPartsEstimate}
                  totalLabrorEstimate={totalLabrorEstimate}
                  totalPartsAssessed={totalPartsAssessed}
                  totalLabrorAssessed={totalLabrorAssessed}

                  setTotalPartsEstimate={setTotalPartsEstimate}
                  setTotalLabrorEstimate={setTotalLabrorEstimate}
                  setTotalPartsAssessed={setTotalPartsAssessed}
                  setTotalLabrorAssessed={setTotalLabrorAssessed}
                  />
                </div>
                <div className="col-lg-3">
                  <LabourForm 
                  currentGst={currentGst}
                  setCurrentGST={setCurrentGst}
                  setTotalAssessed={setTotalAssessed}
                  totalAssessed={totalAssessed}
                  totalEstimate={totalEstimate}
                  allDepreciations={allDepreciations}
                  setAllDepreciations={setAllDepreciations}
                  taxAmount={taxAmount}
                  setTaxAmount={setTaxAmount}
                  toggleEstimate={toggleEstimate}
                  setToggleEstimate={setToggleEstimate}
                  toggleLabor={toggleLabor}
                  setToggleLabor={setToggleLabor}
                  setReload={setReload}
                  laborWOPaint={laborWOPaint}
                  towingCharges={towingCharges}
                  setTowingCharges={setTowingCharges}
                  loadBody={loadBody}
                  setLoadBody={setLoadBody}
                  cabin={cabin}
                  setCabin={setCabin}
                  claim={claim}
                  depMetal={depMetal}
                  ageOfVehicle={ageOfVehicle}

                  metaldepPct={metaldepPct}
                  setmetaldepPct={setmetaldepPct}
                  ageOfVehicleTotal={ageOfVehicleTotal}
                  setAgeOfvehicleTotal={setAgeOfvehicleTotal}
                  />
                </div>
                <div className="col-lg-12 mt-5">
                  <div className="row mt-1">
                    <div className="col-lg-5">
                      <button className="btn btn-color m-1">Cancel</button>
                      {isEditMode ? (
                        <button className="btn btn-color m-1">Update</button>
                      ) : (
                        <button className="btn btn-color m-1">Save</button>
                      )}
                    </div>
                    <div className="col-lg-2">
                      <div className="row mt-1">
                        <div className="col-lg-7 my_profile_setting_input form-group text-end">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#2e008b",
                              fontWeight: "",
                              // marginTop: "-13px",
                              fontSize: "12px",
                            }}
                          >
                            Age of Vehicle
                          </label>
                        </div>
                        <div className="col-lg-5">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            // value={props.assessed}
                            // readOnly={!isEditMode}
                            // onChange={(e) => setLicenseType(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="row mt-1">
                        <div className="col-lg-7 my_profile_setting_input form-group text-end">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#2e008b",
                              fontWeight: "",
                              // marginTop: "-13px",
                              fontSize: "12px",
                            }}
                          >
                            Age of Policy
                          </label>
                        </div>
                        <div className="col-lg-5">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            // value={props.assessed}
                            // readOnly={!isEditMode}
                            // onChange={(e) => setLicenseType(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 ">
                      <div className="row mt-1">
                        <div className="col-lg-7 my_profile_setting_input form-group text-end">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#2e008b",
                              fontWeight: "",
                              // marginTop: "-13px",
                              fontSize: "12px",
                            }}
                          >
                            Depreciation on metal(%)
                          </label>
                        </div>
                        <div className="col-lg-4">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            // value={props.difference}
                            // readOnly={!isEditMode}
                            // onChange={(e) => setLicenseType(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="summary"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Summary 
              metaldepPct={metaldepPct}
                  ageOfVehicleTotal={ageOfVehicleTotal}
                  totalPartsEstimate={totalPartsEstimate}
                  totalLabrorEstimate={totalLabrorEstimate}
                  totalPartsAssessed={totalPartsAssessed}
                  totalLabrorAssessed={totalLabrorAssessed}

                  lessExcess={lessExcess}
                  setLessExcess={setLessExcess}
                  lessImposed={lessImposed}
                  setLessImposed={setLessImposed}
                  other={other}
                  setOther={setOther}
                  metalSalvageValue={metalSalvageValue}
              />
            </div>
          </div>
        </div>
        {/* <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="table"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Table data={materials} />
            </div>
          </div>
        </div> */}
      </div>
      {/* End .tab-conten */}
    </>
  );
};

export default PropertyVideo;
