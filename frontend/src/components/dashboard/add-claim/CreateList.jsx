import axios from "axios";
import { useRouter } from "next/router";
import { use, useEffect, useReducer } from "react";
import { useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";

const CreateList = () => {
  const [applicantNumber, setApplicantNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber_01, setPhoneNumber_01] = useState("");
  const router = useRouter();
  //Date
  const todayDate = new Date();
  const formattedTodayDate = todayDate.toISOString().split("T")[0];
  const regionType = JSON.parse(localStorage.getItem("regionType"));

  const [region, setRegion] = useState(regionType);
  const [date, setDate] = useState("");
  const [surveyType, setSurveyType] = useState("");
  const [inspectionType, setInspectionType] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [policyIssuingOffice, setPolicyIssuingOffice] = useState("");
  const [policyStartDate, setPolicyStartDate] = useState(formattedTodayDate);
  const [policyStartEnd, setPolicyStartEnd] = useState("");
  const [claimSurvicingOffice, setClaimSurvicingOffice] = useState("");
  const [insuredName, setInsuredName] = useState("");
  const [insuredMobileNo1, setInsuredMobileNo1] = useState("");
  const [insuredMobileNo2, setInsuredMobileNo2] = useState("");
  const [insuredMailAddress, setInsuredMailAddress] = useState("");
  const [vehicleParticular, setVehicleParticular] = useState("");
  const [placeOfLoss, setPlaceOfLoss] = useState("");
  const [natureOfLoss, setNatureOfLoss] = useState("");
  const [estimatedLoss, setEstimatedLoss] = useState("");
  const [garageName, setGarageName] = useState("");
  const [garageNumber, setGarageNumber] = useState("");
  const [garageMailId, setGarageMailId] = useState("");
  const [claimNumber, setClaimNumber] = useState("");
  const [brokerMailId, setBrokerMailId] = useState("");

  useEffect(() => {
    // Update policyStartEnd when policyStartDate changes
    const oneYearLater = new Date(policyStartDate);
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const formattedOneYearLater = oneYearLater.toISOString().split("T")[0];
    setPolicyStartEnd(formattedOneYearLater);
  }, [policyStartDate]);

  const generateRegion = (region) => {
    const firstThreeLetters = region.slice(0, 3);

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

  const submitHandler = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const payload = {
      SurveyType: surveyType,
      ReferenceNo: generateRegion(region),
      PolicyIssuingOffice: policyIssuingOffice,
      PolicyNumber: policyNumber,
      PolicyPeriodStart: policyStartDate,
      PolicyPeriodEnd: policyStartEnd,
      ClaimServicingOffice: claimSurvicingOffice,
      ClaimNumber: claimNumber,
      AddedBy: userInfo[0].Username,
      Region: region,
      InspectionType: inspectionType,
      IsClaimCompleted: 0,
      IsActive: 1,
      InsuredName: insuredName,
      InsuredMobileNo1: insuredMobileNo1,
      InsuredMailAddress: insuredMailAddress,
      InsuredMobileNo2: insuredMobileNo2,
      InsuredAddress: "",
      RegisteredNumber: vehicleParticular,
      GarageNameAndAddress: garageName,
      GarageContactNo1: garageNumber,
      GarageContactNo2: garageNumber,
      PlaceOfLoss: placeOfLoss,
      NatureOfLoss: natureOfLoss,
      EstimatedLoss: estimatedLoss,
    };
    if (!isValidEmail(payload.InsuredMailAddress)) {
      alert("Please provide a valid email address !!");
      return;
    }

    if (
      !payload.Region ||
      !payload.SurveyType ||
      !payload.InspectionType ||
      !date ||
      !payload.PolicyNumber ||
      !payload.PolicyIssuingOffice ||
      !payload.ClaimNumber ||
      !payload.ClaimServicingOffice ||
      !payload.RegisteredNumber ||
      !payload.InsuredName ||
      !payload.InsuredMailAddress ||
      !payload.InsuredMobileNo1
    ) {
      alert("Fill all the marked fields please");
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
                htmlFor=""
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Region <span class="text-danger">*</span>
              </label>
            </div>
            <div className="col-lg-7">
              {region ? (
                <input
                  type="text"
                  className="form-control"
                  id="region"
                  value={region}
                  // placeholder="Enter Registration No."
                />
              ) : (
                <select
                  className="selectpicker form-select"
                  data-live-search="true"
                  data-width="100%"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option data-tokens="Status1">Select Region</option>
                  <option data-tokens="Status1" value={"Hyderabad"}>
                    Hyderabad
                  </option>
                  <option data-tokens="Status2" value={"Delhi"}>
                    Delhi
                  </option>
                  <option data-tokens="Status3" value={"Chandigarh"}>
                    Chandigarh
                  </option>
                </select>
              )}
            </div>
          </div>
        </div>

        {/* <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Survey Type <span class="text-danger">*</span>
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
                htmlFor=""
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
                maxLength={10}
                className="form-control"
                id="propertyTitle"
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Inspection Type <span class="text-danger">*</span>
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
                <option data-tokens="Status1" value={""}>
                  Select Type
                </option>
                <option data-tokens="Status1" value={"spot"}>
                  Spot
                </option>
                <option data-tokens="Status2" value={"final"}>
                  Final
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Date <span class="text-danger">*</span>
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="date"
                className="form-control"
                id="propertyTitle"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Number <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Issuing Office <span class="text-danger">*</span>
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
                htmlFor=""
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
              <input
                type="date"
                className="form-control"
                id="propertyTitle"
                value={policyStartDate}
                onChange={(e) => setPolicyStartDate(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row mt-1">
            <div className="col-lg-5 my_profile_setting_input form-group">
              <label
                htmlFor=""
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
              <input
                type="date"
                className="form-control"
                id="propertyTitle"
                value={policyStartEnd}
                onChange={(e) => setPolicyStartEnd(e.target.value)}
                // placeholder="Enter Registration No."
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Number <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Survicing Off. <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Name <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mobile No. 1 <span class="text-danger">*</span>
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
                htmlFor=""
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Insured Mail Address <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Vehicle Particulars <span class="text-danger">*</span>
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
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
                id="propertyTitle"
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Region <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Survey Type <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Inspection Type <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Date <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Number <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Policy Issuing Office <span class="text-danger">*</span>
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Number <span class="text-danger">*</span>
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Claim Survicing Off. <span class="text-danger">*</span>
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  // marginTop: "-13px",
                }}
              >
                Vehicle Particulars <span class="text-danger">*</span>
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
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
                htmlFor=""
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
