import axios from "axios";
import { useRouter } from "next/router";
import { use, useReducer } from "react";
import { useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "draft-js";
import MyDatePicker from "../../common/MyDatePicker";
// import Editor from "./Editor";

const CreateList = () => {
  const [applicantNumber, setApplicantNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber_01, setPhoneNumber_01] = useState("");
  const router = useRouter();

  const regionType = JSON.parse(localStorage.getItem("regionType"));

  const [region, setRegion] = useState(regionType);
  const [date, setDate] = useState("");
  const [surveyType, setSurveyType] = useState("");
  const [inspectionType, setInspectionType] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [policyIssuingOffice, setPolicyIssuingOffice] = useState("");
  const [policyStartDate, setPolicyStartDate] = useState("");
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
  const [claimNumber, setClaimNumber] = useState("");

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

    if (
      !payload.Region ||
      !payload.SurveyType ||
      !payload.InspectionType ||
      !date ||
      !payload.PolicyNumber ||
      !payload.PolicyIssuingOffice ||
      !payload.ClaimNumber ||
      !payload.ClaimServicingOffice ||
      !payload.RegisteredNumber
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

  const [selectedOption, setSelectedOption] = useState("");

  const check = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedOption(e.target.value);

    const otherDiv = document.getElementById("other-div");
    const otherDiv_01 = document.getElementById("other-div_01");
    const otherDiv_02 = document.getElementById("other-div_02");

    if (selectedIndex === 1) {
      otherDiv.style.display = "block";
      otherDiv_02.style.display = "none";
    }
    if (selectedIndex === 2) {
      otherDiv_01.style.display = "block";
      otherDiv.style.display = "none";
      otherDiv_02.style.display = "none";
    }
    if (selectedIndex === 3) {
      otherDiv_02.style.display = "block";
      otherDiv.style.display = "none";
    } else {
      otherDiv.style.display = "block";
      otherDiv_01.style.display = "none";
      otherDiv_02.style.display = "none";
    }
  };

  const [selectedOption_02, setSelectedOption_02] = useState("");

  const check_02 = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedOption_02(e.target.value);

    const otherDiv = document.getElementById("other-div_02");

    if (selectedIndex === 4) {
      otherDiv.style.display = "block";
    } else {
      otherDiv.style.display = "none";
    }
  };

  const [selectedOption_03, setSelectedOption_03] = useState("");

  const check_03 = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedOption_03(e.target.value);

    const otherDiv = document.getElementById("other-div_03");

    if (selectedIndex === 1) {
      otherDiv.style.display = "block";
    } else {
      otherDiv.style.display = "none";
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="row mt-3 mb-1">
            <div className="col-lg-4 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color mt-1"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Type of Email :
              </label>
            </div>
            <div className="col-lg-7">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                value={selectedOption}
                onChange={check}
              >
                <option data-tokens="" value="0">
                  Select Email
                </option>
                <option data-tokens="Status1" value="1">
                  Mail-1
                </option>
                <option data-tokens="Status2" value="2">
                  Mail-2
                </option>
                <option data-tokens="Status3" value="3">
                  Mail-3
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row mt-3 mb-1">
            <div className="col-lg-4 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color mt-1"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Email Address :
              </label>
            </div>
            <div className="col-lg-7">
              <input
                required
                type="text"
                className="form-control"
                id="otherInput"
                name="otherInput"
                placeholder="Email Address"
                // style={otherPurpose ? viewStyle : hiddenStyle}
                // onChange={(e) => setOtherPurposeValue(e.target.value)}
                // maxLength={30}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row mt-3 mb-1">
            <div className="col-lg-4 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color mt-1"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Policy No. :
              </label>
            </div>
            <div className="col-lg-7">
              <input
                required
                type="text"
                className="form-control"
                id="otherInput"
                name="otherInput"
                placeholder="div2"
                // style={otherPurpose ? viewStyle : hiddenStyle}
                // onChange={(e) => setOtherPurposeValue(e.target.value)}
                // maxLength={30}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row mt-3 mb-1">
            <div className="col-lg-4 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color mt-2"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                }}
              >
                Date :
              </label>
            </div>
            <div className="col-lg-7">
              <input
                required
                type="date"
                className="form-control"
                id="otherInput"
                name="otherInput"
                placeholder="div2"
                // style={otherPurpose ? viewStyle : hiddenStyle}
                // onChange={(e) => setOtherPurposeValue(e.target.value)}
                // maxLength={30}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-3 mt-2">
          <button className="btn btn-color">Submit</button>
        </div>
        {/* <div className="row" style={{ display: "" }}>
          <div className="col-lg-1"></div>
          <div className="col-lg-8" style={{ marginLeft: "40px" }}>
            <div id="other-div">
              <textarea
                className="form-control"
                placeholder=""
                cols="15"
                rows="4"
                wrap="hard"
                required
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CreateList;
