import axios from "axios";
import { useRouter } from "next/router";
import { use, useEffect, useReducer } from "react";
import { useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateList = () => {
  const [applicantNumber, setApplicantNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber_01, setPhoneNumber_01] = useState("");
  const [phoneNumber_02, setPhoneNumber_02] = useState("");
  const [disable,setDisable]=useState(false);
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
  const [allServicingOffice,setAllServicingOffice]=useState([]);
  const [brokerMailId, setBrokerMailId] = useState("intimationmt@gmail.com");

  const getNextYear = () => {
    if (policyStartDate && !isNaN(new Date(policyStartDate).getTime())) {
      const oneYearLater = new Date(policyStartDate);
      oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
      oneYearLater.setMonth(oneYearLater.getMonth());
      oneYearLater.setDate(oneYearLater.getDate() - 1);
      console.log(oneYearLater);
      return oneYearLater;
    }
    return "";
  };

  function getMonthNumber(monthName) {
    const months = {
        "jan": "01", "feb": "02", "mar": "03", "apr": "04", "may": "05", "jun": "06",
        "jul": "07", "aug": "08", "sep": "09", "oct": "10", "nov": "11", "dec": "12",
        "january": "01", "february": "02", "march": "03", "april": "04", "may": "05", 
        "june": "06", "july": "07", "august": "08", "september": "09", "october": "10", 
        "november": "11", "december": "12"
    };

     const cleanedMonthName = monthName.trim().toLowerCase();
    if (months.hasOwnProperty(cleanedMonthName)) {
        return months[cleanedMonthName];
    } else {
        return monthName;
    }
}

function checkDateFormat(dateString) {
    // Regular expressions to match yyyy-mm-dd and dd-mm-yyyy formats
    const yyyy_mm_dd_regex = /^\d{4}-\d{2}-\d{2}$/;
    const dd_mm_yyyy_regex = /^\d{2}-\d{2}-\d{4}$/;

    if (yyyy_mm_dd_regex.test(dateString)) {
        return true
    } return false
    
}


function isValidDateFormat(dateString) {
  // Create a regex pattern to match the format
  var pattern = /^\w{3} \w{3} \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \([\w\s]+\)$/;

  // Test if the dateString matches the pattern
  return pattern.test(dateString);
}

function convertToYYYYMMDD(dateString) {
  var date = new Date(dateString);
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 to month because months are zero-indexed
  var day = ('0' + date.getDate()).slice(-2);

  // Return the date in yyyy-mm-dd format
  return year + '-' + month + '-' + day;
}

const formatDateFinal = (inputDate2,type) => {
 
  const inputDate = isValidDateFormat(inputDate2) ? convertToYYYYMMDD(inputDate2) : inputDate2;
  console.log("input",inputDate)
    if (!inputDate || inputDate === "") return inputDate; // Check if inputDate is falsy
    if(checkDateFormat(inputDate))
     return inputDate;

    let dateParts = inputDate?.split(/[-/ ]/);
    let year, month, day;

    if (dateParts.length === 3) {
        // Case: dd/mm/yyyy or dd-mm-yyyy
        day = dateParts[0];
        month = getMonthNumber(dateParts[1]);
        year = dateParts[2];
    } else if (dateParts.length === 2 && dateParts[1].length === 4) {
        // Case: jan-yyyy or jan/yyyy
        day = '01'; // Assuming the first day of the month
        month = getMonthNumber(dateParts[0]);
        year = dateParts[1];
    } else if (dateParts.length === 3 && isNaN(dateParts[1])) {
        // Case: dd-jan-yyyy
        day = dateParts[0];
        month = getMonthNumber(dateParts[1]);
        year = dateParts[2];
    } else {
        return inputDate;
    }

    day = day.padStart(2, '0');
    month = month.padStart(2, '0');

    console.log("inputdATE",inputDate,type,`${year}-${month}-${day}`)
    return `${year}-${month}-${day}`;
}

  useEffect(() => {
    setPolicyStartEnd(getNextYear(policyStartDate));
  }, [policyStartDate]);

   const generateRegion = (region) => {
    const firstThreeLetters = (String(region) === "Delhi") ? "DLH" :
        (String(region) === "Jodhpur") ? "JDH" : "CHD";

    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const yy = String(now.getFullYear() % 100).padStart(2, "0"); // Use the last two digits of the year
    const result = `${firstThreeLetters}/${yy}-${mm}`;

      console.log(result);
      return result;
  };

  useEffect(()=>{
    axios.get("/api/getClaimServicingOffice")
    .then((res)=>{
      setAllServicingOffice(res.data.data.results);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])



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
    setDisable(true);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const payload = {
      SurveyType: surveyType ? surveyType : "Motor",
      ReferenceNo: generateRegion(region),
      PolicyIssuingOffice: policyIssuingOffice,
      PolicyNumber: policyNumber,
      PolicyPeriodStart: formatDateFinal(policyStartDate),
      PolicyPeriodEnd: formatDateFinal(policyStartEnd),
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
      toast.error("Policy Number should be filled !!", {
        // position: toast.POSITION.BOTTOM_LEFT,
        className: "toast-loading-message",
      });
    }
    else if (!region) {
      toast.error("Region should be filled!!", {
        // position: toast.POSITION.BOTTOM_LEFT,
        className: "toast-loading-message",
      });
    } else {
      toast.loading("Adding claim!!", {
        // position: toast.POSITION.BOTTOM_LEFT,
        className: "toast-loading-message",
      });
      axios
        .post("/api/addClaim", payload, {
          headers: {
            Authorization: `Bearer ${userInfo[0].Token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          toast.dismiss();
          // toast.success("Successfully added");
          toast.success("Successfully added !", {
            // position: toast.POSITION.BOTTOM_LEFT,
            className: "toast-loading-message",
          });
          // alert("Successfully added");
          router.push("/my-dashboard");
        })
        .catch((err) => {
          toast.dismiss();
          toast.error("Got error while adding claim!");
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

  const handleInputChange_02 = (e) => {
    const inputValue = e.target.value;

    // Allow only numeric input
    const numericValue = inputValue.replace(/\D/g, "");

    // Restrict to 10 digits
    const truncatedValue = numericValue.slice(0, 10);
    if (truncatedValue.length === 10) {
      setGarageNumber(truncatedValue);
    }

    setPhoneNumber_02(truncatedValue);
  };
  return (
    <>
      <Toaster />
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
                type="email"
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
            <select
                type="text"
                className="form-control form-control-add-claim"
                id="propertyTitle"
                value={policyIssuingOffice}
                onChange={(e) => setPolicyIssuingOffice(e.target.value)}
                >
                {allServicingOffice.map((office,index)=>{
                  return <option key={index}>
                    {office.OfficeNameWithCode}
                  </option>
                })}
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
                Policy Period Start
              </label>
            </div>
            <div className="col-lg-7">
              {/* <MyDatePicker /> */}
              <input
                type="date"
                value={
                  policyStartDate && policyStartDate !== "null"
                    ? policyStartDate.substring(0, 10)
                    : ""
                }
                onChange={(e) => setPolicyStartDate(e.target.value)}
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
              {/* <MyDatePicker
                type="date"
                className="form-control"
                id="propertyTitle"
                // selectedDate={policyStartEnd || ''}
                setSelectedDate={setPolicyStartEnd}
                selectedDate={
                  policyStartEnd !== "" && !policyStartEnd
                    ? new Date(policyStartEnd)
                    : null
                }
                onChange={(date) => setPolicyStartEnd(date)}
                // placeholder="Enter Registration No."
              /> */}
              <MyDatePicker
                type="date"
                className="form-control"
                id="propertyTitle"
                // selectedDate={policyStartEnd || ''}
                setSelectedDate={setPolicyStartEnd}
                selectedDate={policyStartEnd}
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
                Claim Servicing Office
              </label>
            </div>
            <div className="col-lg-7">
              <select
                type="text"
                className="form-control form-control-add-claim"
                id="propertyTitle"
                value={claimSurvicingOffice}
                onChange={(e) => setClaimSurvicingOffice(e.target.value)}
                >
                {allServicingOffice.map((office,index)=>{
                  return <option key={index}>
                    {office.OfficeNameWithCode}
                  </option>
                })}
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
                type="email"
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
            <button 
            disabled={disable}
            className="btn float-end btn-color" onClick={submitHandler}>
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
      {/* <ToastContainer /> */}
    </>
  );
};

export default CreateList;
