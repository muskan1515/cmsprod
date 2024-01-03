import axios from "axios";
import toast from "react-hot-toast";

const CreateList = ({
  claim,
  InsuredName,
  setInsuredName,
  InsuredMailAddress,
  setInsuredMailAddress,
  InsuredMobileNo1,
  setInsuredMobileNo1,
  InsuredMobileNo2,
  setInsuredMobileNo2,
  requestTypeTypes,
  subTypeTypes
  ,
  edit
}) => {

  const formatDate = (val)=>{
    const date = new Date(val);
    const formattedDate = date.toLocaleDateString('en-GB');
    return formattedDate;
  }

  const sendMailHandler = (vehicleNo,PolicyNo,Insured)=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
   
    const payload = {
      vehicleNo: vehicleNo,
      PolicyNo: PolicyNo,
      Insured:Insured,
      toMail:"ivijayrajsingh@gmail.com",
      date:formatDate(new Date())
    };


    toast.loading("Sending Acknowledgment Mail!!");
    axios.post("/api/sendEmail1",payload,{
      headers:{
        Authorization:`Bearer ${userInfo[0].Token}`
      }
    }).then((res)=>{
      toast.dismiss();
      toast.success("Successfully sent the mail!");
    })
    .catch((err)=>{
      toast.dismiss();
      toast.error(err);
    })
  }

  return (
    <>
      <div className="col-lg-6">
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
              Name <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              value={claim.InsuredName}
              disabled={!edit}
              onChange={(e)=>setInsuredName(e.target.value)}
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
        {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
      </div>

      <div className="col-lg-6">
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
              Phone <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            {claim.InsuredMobileNo1 && <input
              type="text"
              className="form-control"
              id="propertyTitle"
              value={claim.InsuredMobileNo1}
              disabled={!edit}
              onChange={(e)=>setInsuredMobNo1(e.target.value)}
              // placeholder="Enter Registration No."
            />}
            {claim.InsuredMobileNo2 && <input
              type="text"
              className="form-control"
              id="propertyTitle"
              value={claim.InsuredMobileNo2}
              onChange={(e)=>setInsuredMobNo2(e.target.value)}
              // placeholder="Enter Registration No."
            />}
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Email <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              value={claim.InsuredMailAddress}
              disabled={!edit}
              onChange={(e)=>setInsuredMailAddress(e.target.value)}
              // placeholder="Enter Registration No."
            />
            {(!InsuredMailAddress) && (
              <button onClick={()=>sendMailHandler(claim.VehicleRegisteredNumber,claim.PolicyNumber,claim.InsuredName)}>Send Mail</button>
            )}
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              LeadID <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              value={claim.LeadId}

              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Registration No. <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              value={claim.ReferenceNo}
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Insurer ClaimID 
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              value={claim.ClaimNumber}
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Status <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              placeholder={"Not Started"}
              disabled={!edit}
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Survey Type <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
           <select disabled={!edit}>
           {subTypeTypes.map((sub,index)=>{
            return <option key={sub.id}  style={{
              // paddingTop: "15px",
              color: "#1560bd",
              fontWeight: "",
              // marginTop: "-13px",
            }} value={sub.value}>{sub.type}</option>
          })}
           </select>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Intimation Date <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              disabled={!edit}
              value={formatDate(claim.ClaimAddedDateTime)}
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Request Type <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
          
          <select disabled={!edit}>
          {requestTypeTypes.map((sub,index)=>{
           return <option key={sub.id}  style={{
             // paddingTop: "15px",
             color: "#1560bd",
             fontWeight: "",
             // marginTop: "-13px",
           }} value={sub.value}>{sub.type}</option>
         })}
          </select>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
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
              Endorsement Doc <span class="req-btn">*</span>
            </label>
          </div>
          <div className="col-lg-7">
            {/*<input
              type="text"
              className="form-control"
              id="propertyTitle"
              // placeholder="Enter Registration No."
            />*/}
          </div>
        </div>
      </div>

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
