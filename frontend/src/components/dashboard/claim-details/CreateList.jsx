import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

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
  subTypeTypes,
  edit,
  setIsStatusModal,
}) => {
  const formatDate = (val) => {
    const date = new Date(val);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };

  const sendMailHandler = (vehicleNo, PolicyNo, Insured) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const payload = {
      vehicleNo: vehicleNo,
      PolicyNo: PolicyNo,
      Insured: Insured,
      toMail: "ivijayrajsingh@gmail.com",
      date: formatDate(new Date()),
    };

    toast.loading("Sending Acknowledgment Mail!!");
    axios
      .post("/api/sendEmail1", payload, {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
        },
      })
      .then((res) => {
        toast.dismiss();
        toast.success("Successfully sent the mail!");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err);
      });
  };
  const openStatusUpdateHandler = () => {
    setIsStatusModal(true);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
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
                Name <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={claim.InsuredName}
                // placeholder="Enter Registration No."
              />
              {/* <button
                href="#"
                className="btn btn-color w-50"
                style={{ marginLeft: "12px" }}
                onClick={() => openStatusUpdateHandler}
                title="Update Status"
              >
                <Link href="#">
                  <span className="flaticon-edit text-light"></span>
                </Link>
              </button>*/}
            </div>
          </div>
          {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
        </div>

        <div className="col-lg-6">
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
                Phone <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-7">
              {claim.InsuredMobileNo1 && (
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                  value={claim.InsuredMobileNo1}
                  // placeholder="Enter Registration No."
                />
              )}
              {claim.InsuredMobileNo2 && (
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                  value={claim.InsuredMobileNo2}
                  // placeholder="Enter Registration No."
                />
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
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
                Email <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={claim.InsuredMailAddress}
                // placeholder="Enter Registration No."
              />
            </div>
            {/* <div className="col-lg-1">
              {!InsuredMailAddress && (
                <button
                  title="Send Mails"
                  className="btn btn-color flaticon-envelope w60"
                  // style={{ marginTop: "-1px" }}
                  onClick={() =>
                    sendMailHandler(
                      claim.VehicleRegisteredNumber,
                      claim.PolicyNumber,
                      claim.InsuredName
                    )
                  }
                ></button>
              )}
            </div> */}
          </div>
        </div>

        <div className="col-lg-6">
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
                Registration No. <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-6">
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
                Status <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={"Not Started"}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
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
                Survey Type <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-7">
              <select disabled={!edit}>
                {subTypeTypes.map((sub, index) => {
                  return (
                    <option
                      key={sub.id}
                      style={{
                        // paddingTop: "15px",
                        color: "#1560bd",
                        fontWeight: "",
                        // marginTop: "-13px",
                      }}
                      value={sub.value}
                    >
                      {sub.type}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
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
                Intimation Date <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={formatDate(claim.ClaimAddedDateTime)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
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
                Request Type <span class="req-btn">*</span>
              </label>
            </div>
            <div className="col-lg-7">
              <select disabled={!edit}>
                {requestTypeTypes.map((sub, index) => {
                  return (
                    <option
                      key={sub.id}
                      style={{
                        // paddingTop: "15px",
                        color: "#1560bd",
                        fontWeight: "",
                        // marginTop: "-13px",
                      }}
                      value={sub.value}
                    >
                      {sub.type}
                    </option>
                  );
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
      </div>
      {/* <div className="col-lg-12">
        <div className="row">
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
                  Phone <span class="req-btn">*</span>
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
                  LeadID <span class="req-btn">*</span>
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
                  Sub Status <span class="req-btn">*</span>
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
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
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
                  Endorsement Doc <span class="req-btn">*</span>
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
      </div> */}
    </>
  );
};

export default CreateList;
