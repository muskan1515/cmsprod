import axios from "axios";
import { useRouter } from "next/router";
import { use, useEffect, useReducer } from "react";
import { useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";

const CreateList = () => {
  const [applicantNumber, setApplicantNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber_01, setPhoneNumber_01] = useState("");
  // const [garageMailAddress,setGarageMailAddress]=useState("");
  const router = useRouter();
  //Date
  const todayDate = new Date();
  const formattedTodayDate = todayDate.toISOString().split("T")[0];
  const regionType = JSON.parse(localStorage.getItem("regionType"));

  const [region, setRegion] = useState(regionType);
  const [date, setDate] = useState(formattedTodayDate);
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
  const [garageMailId, setGarageMailId] = useState("");
  const [claimNumber, setClaimNumber] = useState("");
  const [brokerMailId, setBrokerMailId] = useState("intimationmt@gmail.com");

  const [BrokerMailAddress, setBrokerMailAddress] = useState("");

  useEffect(() => {
    // Update policyStartEnd when policyStartDate changes
    if (policyStartDate && !isNaN(new Date(policyStartDate).getTime())) {
      const oneYearLater = new Date(policyStartDate);
      oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
      oneYearLater.setDate(oneYearLater.getDate() - 1);

      const formattedOneYearLater = oneYearLater.toISOString().split("T")[0];
      setPolicyStartEnd(formattedOneYearLater);
    }
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
      GarageMailAddress: garageMailId,
      BrokerMailAddress: brokerMailId,
      GarageNameAndAddress: garageName,
      GarageContactNo1: garageNumber,
      GarageContactNo2: garageNumber,
      PlaceOfLoss: placeOfLoss,
      NatureOfLoss: natureOfLoss,
      EstimatedLoss: estimatedLoss,
    };

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
        <div className="col-lg-6" style={{ borderRight: "1px solid grey" }}>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-1 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Bill#
                </label>
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
                {/* <select
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
                </select> */}
              </div>
              <div className="col-lg-1 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Date
                </label>
              </div>
              <div className="col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  id="broker_mail_id"
                />
                {/* <select
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
                </select> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
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
                  Insurer
                </label>
              </div>
              <div className="col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
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
                  Branch
                </label>
              </div>
              <div className="col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
                {/* <select
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
                </select> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
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
                  Others
                </label>
              </div>
              <div className="col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                />

                {/* <MyDatePicker /> */}
              </div>
            </div>
          </div>
          <h4>Details</h4>
          <hr />
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-3 my_profile_setting_input form-group text-end">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontSize: "14px",
                  }}
                >
                  Estimate Amt.
                </label>
              </div>
              <div className="col-lg-3">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-3 my_profile_setting_input form-group text-end">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontSize: "14px",
                  }}
                >
                  KM Rate
                </label>
              </div>
              <div className="col-lg-3">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
                {/* <select
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
                </select> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-3 my_profile_setting_input form-group text-end">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontSize: "14px",
                  }}
                >
                  Assessed Amt.
                </label>
              </div>
              <div className="col-lg-3">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-3 my_profile_setting_input form-group text-end">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontSize: "14px",
                  }}
                >
                  Photo's Rate
                </label>
              </div>
              <div className="col-lg-3">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
                {/* <select
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
                </select> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-3 my_profile_setting_input form-group text-end">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontSize: "14px",
                    // marginTop: "-13px",
                  }}
                >
                  Fee Based on
                </label>
              </div>
              <div className="col-lg-9">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-3 text-end my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontSize: "14px",
                    // marginTop: "-13px",
                  }}
                >
                  Remark
                </label>
              </div>
              <div className="col-lg-7">
                <textarea name="" id="" cols="50" rows="3"></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <table style={{ border: "1px solid black" }}>
              <tr>
                <th style={{ border: "1px solid black" }}></th>
                <th style={{ border: "1px solid black" }}>
                  <div className="col-lg-12 text-center">Report</div>
                </th>
                <th style={{ border: "1px solid black" }}>
                  <div className="col-lg-12 text-center">Name</div>
                </th>
                <th style={{ border: "1px solid black" }}>
                  <div className="col-lg-12 text-center">Reg.No.</div>
                </th>
                <th style={{ border: "1px solid black" }}>
                  <div className="col-lg-12 text-center">S.No.</div>
                </th>
              </tr>
              <tr>
                <td>
                  <div className="col-lg-12 text-center">
                    <input type="checkbox" className="" id="broker_mail_id" />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <h5>[Final]</h5>
            <hr />
          </div>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-4">
                <input type="checkbox" className="" id="broker_mail_id" />
              </div>
              <div className="col-lg-3 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Professional Fees
                </label>
              </div>
              <div className="col-lg-5">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Total KM
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Visits
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Conveyance
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Photos
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Chrg.
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Photos/CD
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-2 text-end my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      // paddingTop: "15px",
                      color: "#2e008b",
                      fontSize: "14px",
                      // marginTop: "-13px",
                    }}
                  >
                    Remark
                  </label>
                </div>
                <div className="col-lg-9">
                  <textarea name="" id="" cols="60" rows="2"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h5>[ReInspection]</h5>
            <hr />
          </div>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-4">
                <input type="checkbox" className="" id="broker_mail_id" />
              </div>
              <div className="col-lg-3 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Professional Fees
                </label>
              </div>
              <div className="col-lg-5">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Total KM
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Visits
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Conveyance
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Photos
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Chrg.
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Photos/CD
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-2 text-end my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      // paddingTop: "15px",
                      color: "#2e008b",
                      fontSize: "14px",
                      // marginTop: "-13px",
                    }}
                  >
                    Remark
                  </label>
                </div>
                <div className="col-lg-9">
                  <textarea name="" id="" cols="60" rows="2"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h5>[Spot]</h5>
            <hr />
          </div>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-4">
                <input type="checkbox" className="" id="broker_mail_id" />
              </div>
              <div className="col-lg-3 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Professional Fees
                </label>
              </div>
              <div className="col-lg-5">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Total KM
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Visits
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Conveyance
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Photos
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Chrg.
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Photos/CD
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-2 text-end my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      // paddingTop: "15px",
                      color: "#2e008b",
                      fontSize: "14px",
                      // marginTop: "-13px",
                    }}
                  >
                    Remark
                  </label>
                </div>
                <div className="col-lg-9">
                  <textarea name="" id="" cols="60" rows="2"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-5">
                {/* <input type="checkbox" className="" id="broker_mail_id" /> */}
              </div>
              <div className="col-lg-3 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Other Total
                </label>
                <input type="checkbox" className="m-2" id="broker_mail_id" />
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-3"></div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  C GST @ :
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-1">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  %
                </label>
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-3"></div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  C GST @ :
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-1">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  %
                </label>
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-3"></div>
              <div className="col-lg-2 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  C GST @ :
                </label>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
              <div className="col-lg-1">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  %
                </label>
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-4">
                <input type="checkbox" className="" id="broker_mail_id" />
                <label
                  htmlFor=""
                  className="text-color m-2"
                  style={{
                    color: "#2e008b",
                    fontWeight: "bold",
                  }}
                >
                  Cash Recieved
                </label>
              </div>
              <div className="col-lg-3 my_profile_setting_input form-group text-end">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Net Payable :
                </label>
              </div>
              <div className="col-lg-5">
                <input
                  type="text"
                  className="form-control"
                  id="broker_mail_id"
                />
              </div>
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
    </>
  );
};

export default CreateList;
