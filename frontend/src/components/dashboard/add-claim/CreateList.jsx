import axios from "axios";
import { useRouter } from "next/router";
import { use, useEffect, useReducer } from "react";
import { useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CreateList = () => {
  const [applicantNumber, setApplicantNumber] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [phoneNumber_01, setPhoneNumber_01] = useState(null);
  // const [garageMailAddress,setGarageMailAddress]=useState();
  const router = useRouter();
  //Date
  const todayDate = new Date();
  const formattedTodayDate = todayDate.toISOString().split("T")[0];
  const regionType = JSON.parse(localStorage.getItem("regionType"));

  const [region, setRegion] = useState(regionType);
  const [date, setDate] = useState(formattedTodayDate);
  const [surveyType, setSurveyType] = useState("Motor");
  const [inspectionType, setInspectionType] = useState("Final");
  const [policyNumber, setPolicyNumber] = useState(null);
  const [policyIssuingOffice, setPolicyIssuingOffice] = useState(null);
  const [policyStartDate, setPolicyStartDate] = useState(null);
  const [policyStartEnd, setPolicyStartEnd] = useState(null);
  const [claimSurvicingOffice, setClaimSurvicingOffice] = useState(null);
  const [insuredName, setInsuredName] = useState(null);
  const [insuredMobileNo1, setInsuredMobileNo1] = useState(null);
  const [insuredMobileNo2, setInsuredMobileNo2] = useState(null);
  const [insuredMailAddress, setInsuredMailAddress] = useState(null);
  const [vehicleParticular, setVehicleParticular] = useState(null);
  const [placeOfLoss, setPlaceOfLoss] = useState(null);
  const [natureOfLoss, setNatureOfLoss] = useState(null);
  const [estimatedLoss, setEstimatedLoss] = useState(null);
  const [garageName, setGarageName] = useState(null);
  const [garageNumber, setGarageNumber] = useState(null);
  const [garageMailId, setGarageMailId] = useState(null);
  const [claimNumber, setClaimNumber] = useState(null);
  const [brokerMailId, setBrokerMailId] = useState("intimationmt@gmail.com");

  const [BrokerMailAddress, setBrokerMailAddress] = useState(null);

  useEffect(() => {
    // Update policyStartEnd when policyStartDate changes
    if (policyStartDate && !isNaN(new Date(policyStartDate).getTime())) {
      const oneYearLater = new Date(policyStartDate);
      oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
      oneYearLater.setDate(oneYearLater.getDate() - 1);

      const formattedOneYearLater = oneYearLater.toLocaleDateString("en-US");
      console.log("policyStartDate", policyStartDate);
      console.log("formattedOneYearLater", formattedOneYearLater);

      setPolicyStartEnd(formattedOneYearLater);
    }
  }, [policyStartDate]);

  const generateRegion = (region) => {
    const firstThreeLetters = region?.slice(0, 3);

    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    const result = `${firstThreeLetters}/${mm}/${dd}${hh}${min}${ss}`;

    console.log(result);
    return result;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  const submitHandler = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const payload = {
      SurveyType: surveyType ? surveyType : "Motor",
      ReferenceNo: generateRegion(region),
      PolicyIssuingOffice: policyIssuingOffice,
      PolicyNumber: policyNumber ,
      PolicyPeriodStart: policyStartDate,
      PolicyPeriodEnd: policyStartEnd,
      ClaimServicingOffice: claimSurvicingOffice,
      ClaimNumber: claimNumber,
      AddedBy: userInfo[0].Username,
      Region: region,
      InspectionType: inspectionType ? inspectionType : "Final",
      IsClaimCompleted: 0,
      IsActive: 1,
      InsuredName: insuredName,
      InsuredMobileNo1: insuredMobileNo1,
      InsuredMailAddress: insuredMailAddress,
      InsuredMobileNo2: insuredMobileNo2,
      InsuredAddress: "",
      RegisteredNumber: vehicleParticular,
      GarageMailAddress: garageMailId,
      BrokerMailAddress: brokerMailId,
      GarageNameAndAddress: garageName,
      GarageContactNo1: garageNumber,
      GarageContactNo2: garageNumber,
      PlaceOfLoss: placeOfLoss,
      NatureOfLoss: natureOfLoss,
      EstimatedLoss: estimatedLoss,
    };

    if (!payload.PolicyNumber) {
      alert("Policy Number should be filled!!");
    }
    if (!region) {
      alert("Region should be filled!!");
    } else {
      axios
        .post("/api/addClaim", payload, {
          headers: {
            Authorization: `Bearer ${userInfo[0].Token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          alert("Successfully added");
          router.push("/my-dashboard");
        })
        .catch((err) => {
          alert("Error");
        });
    }
  };

  const handleInputChange_01 = (e) => {
    const inputValue = e.target.value;

    // Allow only numeric input
    const numericValue = inputValue.replace(/\D/g, "");

    // Restrict to 10 digits
    const truncatedValue = numericValue.slice(0, 10);
    if (truncatedValue.length === 10) {
      setInsuredMobileNo2(truncatedValue);
    }

    setPhoneNumber_01(truncatedValue);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Allow only numeric input
    const numericValue = inputValue.replace(/\D/g, "");

    // Restrict to 10 digits
    const truncatedValue = numericValue.slice(0, 10);
    if (truncatedValue.length === 10) {
      setInsuredMobileNo1(truncatedValue);
    }

    setPhoneNumber(truncatedValue);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="row mt-1 mb-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Region
              </label>
            </div>
            <div className="col-lg-7">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option data-tokens="Status1">Select Region</option>
                <option data-tokens="Status1" value={"Chandigarh"}>
                  Chandigarh
                </option>
                <option data-tokens="Status2" value={"Delhi"}>
                  Delhi
                </option>
                <option data-tokens="Status3" value={"Jodhpur"}>
                  Jodhpur
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Survey Type 
              </label>
            </div>
            <div className="col-lg-7">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                value={surveyType}
                onChange={(e) => setSurveyType(e.target.value)}
              >
                <option data-tokens="Status1" value={""}>
                  Select Type
                </option>
                <option data-tokens="Status1" value={"Motor"}>
                  Motor
                </option>
                <option data-tokens="Status2" value={"Non-Motor"}>
                  Non-Motor
                </option>
                <option data-tokens="Status3" value={"Motor-2W"}>
                  Motor-2W
                </option>
                <option data-tokens="Status3" value={"Motor-4W"}>
                  Motor-4W
                </option>
              </select>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Broker Mail Id
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="broker_mail_id"
                value={brokerMailId}
                onChange={(e) => setBrokerMailId(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Inspection Type
              </label>
            </div>
            <div className="col-lg-7">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                value={inspectionType}
                onChange={(e) => setInspectionType(e.target.value)}
              >
              <option data-tokens="Status2" value={"Final"}>
                Final
              </option>
                <option data-tokens="Status1" value={"spot"}>
                  Spot
                </option>
               
                <option data-tokens="Status3" value={"re-inspection"}>
                  Pre-inspection
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Date
              </label>
            </div>
            <div className="col-lg-7">
              <MyDatePicker
                type="date"
                className="form-control"
                id="propertyTitle"
                selectedDate={date}
                setSelectedDate={(e) => setDate(e.target.value)}
                // placeholder="Enter Registration No."
              />

              {/* <MyDatePicker /> */}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Number
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Issuing Office
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={policyIssuingOffice}
                onChange={(e) => setPolicyIssuingOffice(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Period Start
              </label>
            </div>
            <div className="col-lg-7">
              {/* <MyDatePicker /> */}
              <MyDatePicker
                type="date"
                className="form-control"
                id="propertyTitle"
                selectedDate={policyStartDate}
                setSelectedDate={setPolicyStartDate}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Period End
              </label>
            </div>
            <div className="col-lg-7">
              {console.log("policyStartEnd", policyStartEnd)}
              {/* <MyDatePicker
                type="date"
                className="form-control"
                id="propertyTitle"
                // selectedDate={policyStartEnd || ''}
                setSelectedDate={setPolicyStartEnd}
                selectedDate={
                  policyStartEnd !== null && !policyStartEnd
                    ? new Date(policyStartEnd)
                    : ""
                }
                // placeholder="Enter Registration No."
              /> */}
              <DatePicker
                className="form-control"
                id="propertyTitle"
                selected={
                  policyStartEnd !== null &&
                  !isNaN(new Date(policyStartEnd))
                    ? new Date(policyStartEnd)
                    : null
                }
                onChange={(date) => setPolicyStartEnd(date)}
              />
              {/* <MyDatePicker
                value={policyStartEnd}
                onChange={(e) => setPolicyStartEnd(e.target.value)}
              /> */}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Number
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={claimNumber}
                onChange={(e) => setClaimNumber(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Survicing Off.
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={claimSurvicingOffice}
                onChange={(e) => setClaimSurvicingOffice(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Name
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={insuredName}
                onChange={(e) => setInsuredName(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mobile No. 1
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                maxLength={10}
                className="form-control"
                id="formGroupExampleInput3"
                // onChange={(e) => setApplicantNumber(e.target.value)}
                value={phoneNumber}
                onChange={handleInputChange}
                pattern="[0-9]*"
                title="Please enter only 10 digits"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mobile No. 2
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                maxLength={10}
                className="form-control"
                id="propertyTitle"
                value={phoneNumber_01}
                onChange={handleInputChange_01}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mail Address
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="email"
                className="form-control"
                id="propertyTitle"
                value={insuredMailAddress}
                onChange={(e) => setInsuredMailAddress(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Vehicle Particulars
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={vehicleParticular}
                onChange={(e) => setVehicleParticular(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Place of Loss
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={placeOfLoss}
                onChange={(e) => setPlaceOfLoss(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Nature of Loss
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={natureOfLoss}
                onChange={(e) => setNatureOfLoss(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Estimated Loss
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={estimatedLoss}
                onChange={(e) => setEstimatedLoss(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Garage Mail id
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="garageMailId"
                value={garageMailId}
                onChange={(e) => setGarageMailId(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Garage Name & Add.
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={garageName}
                onChange={(e) => setGarageName(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Garage Contact No.
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                maxLength={10}
                className="form-control"
                id="propertyTitle"
                value={garageNumber}
                onChange={(e) => setGarageNumber(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="my_profile_setting_input">
            <button className="btn float-end btn-color" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-4">
          <div className="row mt-1 mb-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Region 
              </label>
            </div>
            <div className="col-lg-7">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
              >
                <option data-tokens="Status1">Select Region</option>
                <option data-tokens="Status1">Hyderabad</option>
                <option data-tokens="Status2">Delhi</option>
                <option data-tokens="Status3">Chandigarh</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Survey Type 
              </label>
            </div>
            <div className="col-lg-7">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
              >
                <option data-tokens="Status1">1</option>
                <option data-tokens="Status2">2</option>
                <option data-tokens="Status3">3</option>
              </select>
            </div>
          </div>
         
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Inspection Type 
              </label>
            </div>
            <div className="col-lg-7">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
              >
                <option data-tokens="Status1">1</option>
                <option data-tokens="Status2">2</option>
                <option data-tokens="Status3">3</option>
              </select>
            </div>
          </div>
          
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Date 
              </label>
            </div>
            <div className="col-lg-7">
              
              <MyDatePicker />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Number 
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Issuing Office 
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Period Start
              </label>
            </div>
            <div className="col-lg-7">
              <MyDatePicker />
           
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Period End
              </label>
            </div>
            <div className="col-lg-7">
            
              <MyDatePicker />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Number 
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Survicing Off. 
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Name
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mobile No. 1
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                maxLength={10}
                className="form-control"
                id="formGroupExampleInput3"
                // onChange={(e) => setApplicantNumber(e.target.value)}
                onChange={(e) => setApplicantNumber(e.target.value)}
                pattern="[0-9]*"
                title="Please enter only 10 digits"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mobile No. 2
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mail Address
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Vehicle Particulars 
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Place of Loss
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Nature of Loss
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Estimated Loss
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Garage Name & Add.
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Garage Contact No.
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="text-center">
          <div className="my_profile_setting_input">
            <button className="btn btn-color fw-bold w-25">Submit</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CreateList;
