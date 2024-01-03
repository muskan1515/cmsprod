import axios from "axios";
import { useRouter } from "next/router";
import { use, useReducer, useState } from "react";

const CreateList = () => {
  const [applicantNumber, setApplicantNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter();

  const [region,setRegion] = useState("");
  const [date,setDate]=useState("");
  const [surveyType,setSurveyType]=useState("");
  const [inspectionType,setInspectionType] = useState("");
  const [policyNumber,setPolicyNumber] = useState("");
  const [policyIssuingOffice,setPolicyIssuingOffice] = useState("");
  const [policyStartDate,setPolicyStartDate] = useState("");
  const [policyStartEnd,setPolicyStartEnd] = useState("");
  const [claimSurvicingOffice,setClaimSurvicingOffice] = useState("");
  const [insuredName,setInsuredName]=useState("");
  const [insuredMobileNo1,setInsuredMobileNo1] = useState("");
  const [insuredMobileNo2,setInsuredMobileNo2] = useState("");
  const [insuredMailAddress,setInsuredMailAddress] = useState("");
  const [vehicleParticular,setVehicleParticular] = useState("");
  const [placeOfLoss,setPlaceOfLoss] = useState("");
  const [natureOfLoss,setNatureOfLoss] = useState("");
  const [estimatedLoss,setEstimatedLoss] = useState("");
  const [garageName,setGarageName] = useState("");
  const [garageNumber,setGarageNumber] = useState("");
  const [claimNumber,setClaimNumber]=useState("");

  const generateRegion = (region)=>{
    const firstThreeLetters = region.slice(0, 3);

  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const result = `${firstThreeLetters}/${mm}/${dd}${hh}${min}${ss}`;

  console.log(result);
  return result;
  }
  
  const submitHandler = ()=>{

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    const payload = {
      SurveyType:surveyType,
      ReferenceNo : generateRegion(region),
      PolicyIssuingOffice:policyIssuingOffice,
      PolicyNumber:policyNumber,
      PolicyPeriodStart:policyStartDate,
      PolicyPeriodEnd:policyStartEnd,
      ClaimServicingOffice:claimSurvicingOffice,
      ClaimNumber:claimNumber,
      AddedBy:userInfo[0].Username,
      Region:region,
      InspectionType:inspectionType,
      IsClaimCompleted:0,
      IsActive:1,
      InsuredName:insuredName,
      InsuredMobileNo1:insuredMobileNo1,
      InsuredMailAddress:insuredMailAddress,
      InsuredMobileNo2:insuredMobileNo2,
      InsuredAddress:"",
      RegisteredNumber :vehicleParticular,
      GarageNameAndAddress:garageName,
      GarageContactNo1:garageNumber,
      GarageContactNo2:garageNumber,
      PlaceOfLoss:placeOfLoss,
      NatureOfLoss:natureOfLoss,
      EstimatedLoss:estimatedLoss
    };

    if(!payload.Region || !payload.SurveyType || !payload.InspectionType || !date
      || !payload.PolicyNumber || !payload.PolicyIssuingOffice || !payload.ClaimNumber || !payload.ClaimServicingOffice
      || !payload.RegisteredNumber ){
        alert("Fill all the marked fields please");
      }
      else{
        axios.post("/api/addClaim",payload,{headers:{
          Authorization:`Bearer ${userInfo[0].Token}`,
          "Content-Type":"application/json"
        }})
        .then((res)=>{
          alert("Successfully added");
          router.push("/my-dashboard");
        })
        .catch((err)=>{
          alert("Error");
        });
      }
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Allow only numeric input
    const numericValue = inputValue.replace(/\D/g, "");

    // Restrict to 10 digits
    const truncatedValue = numericValue.slice(0, 10);
    if (truncatedValue.length === 10) {
      setApplicantNumber(truncatedValue);
    }

    setPhoneNumber(truncatedValue);
  };
  return (
    <>
      <div className="col-lg-4">
        <div className="row mt-1 mb-1">
          <div className="col-lg-5 my_profile_setting_input form-group">
            <label
              htmlFor=""
              className="text-color"
              style={{
                color: "#1560bd",
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
              value={region}
              onChange={(e)=>setRegion(e.target.value)}
            >
              <option data-tokens="Status1">Select Region</option>
              <option data-tokens="Status1" value={"Hyderabad"}>Hyderabad</option>
              <option data-tokens="Status2" value={"Delhi"}>Delhi</option>
              <option data-tokens="Status3" value={"Chandigarh"}>Chandigarh</option>
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
                color: "#1560bd",
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
              onChange={(e)=>setSurveyType(e.target.value)}
            >
              <option data-tokens="Status1" value={"Motor"}>Motor</option>
              <option data-tokens="Status2" value={"Non-Motor"}>Non-Motor</option>
              <option data-tokens="Status3" value={"Motor-2W"}>Motor-2W</option>
              <option data-tokens="Status3" value={"Motor-4W"}>Motor-4W</option>
            </select>
          </div>
        </div>
        {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
      </div>

      <div className="col-lg-4">
        <div className="row mt-1">
          <div className="col-lg-5 my_profile_setting_input form-group">
            <label
              htmlFor=""
              className="text-color"
              style={{
                // paddingTop: "15px",
                color: "#1560bd",
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
              onChange={(e)=>setInspectionType(e.target.value)}
            >
              <option data-tokens="Status1" value={"spot"}>Spot</option>
              <option data-tokens="Status2" value={"final"}>final</option>
              <option data-tokens="Status3" value={"re-inspection"}>re-inspection</option>
            </select>
          </div>
        </div>
        {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
      </div>

      <div className="col-lg-4">
        <div className="row mt-1">
          <div className="col-lg-5 my_profile_setting_input form-group">
            <label
              htmlFor=""
              className="text-color"
              style={{
                // paddingTop: "15px",
                color: "#1560bd",
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
              onChange={(e)=>setDate(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setPolicyNumber(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setPolicyIssuingOffice(e.target.value)}
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
                color: "#1560bd",
                fontWeight: "",
                // marginTop: "-13px",
              }}
            >
              Policy Period Start
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="date"
              className="form-control"
              id="propertyTitle"
              value={policyStartDate}
              onChange={(e)=>setPolicyStartDate(e.target.value)}
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
                color: "#1560bd",
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
              value={setPolicyStartEnd}
              onChange={(e)=>setPolicyStartEnd(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setClaimNumber(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setClaimSurvicingOffice(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setInsuredName(e.target.value)}
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
                color: "#1560bd",
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
              value={insuredMobileNo1}
              onChange={(e)=>setInsuredMobileNo1(e.target.value)}
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
                color: "#1560bd",
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
              value={insuredMobileNo2}
              onChange={(e)=>setInsuredMobileNo2(e.target.value)}
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
                color: "#1560bd",
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
              value={insuredMailAddress}
              onChange={(e)=>setInsuredMailAddress(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setVehicleParticular(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setPlaceOfLoss(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setNatureOfLoss(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setEstimatedLoss(e.target.value)}
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
                color: "#1560bd",
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
              onChange={(e)=>setGarageName(e.target.value)}
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
                color: "#1560bd",
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
              value={garageNumber}
              onChange={(e)=>setGarageNumber(e.target.value)}
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="my_profile_setting_input">
          <button className="btn float-end btn-color" onClick={submitHandler}>Submit</button>
        </div>
      </div>

      {/* <div className="col-lg-4">
        <div className="row mt-1">
          <div className="col-lg-4 my_profile_setting_input form-group">
            <label
              htmlFor=""
              className="text-color"
              style={{
                // paddingTop: "15px",
                color: "#1560bd",
                fontWeight: "",
                // marginTop: "-13px",
              }}
            >
              Endo. Doc <span class="text-danger">*</span>
            </label>
          </div>
          <div className="col-lg-8">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div> */}

      {/* <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Description</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
          ></textarea>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Type</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">Type1</option>
            <option data-tokens="Type2">Type2</option>
            <option data-tokens="Type3">Type3</option>
            <option data-tokens="Type4">Type4</option>
            <option data-tokens="Type5">Type5</option>
          </select>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">Status1</option>
            <option data-tokens="Status2">Status2</option>
            <option data-tokens="Status3">Status3</option>
            <option data-tokens="Status4">Status4</option>
            <option data-tokens="Status5">Status5</option>
          </select>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExamplePrice"
          />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleArea">Area</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleArea"
          />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Rooms</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Other</option>
          </select>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div> */}
    </>
  );
};

export default CreateList;
