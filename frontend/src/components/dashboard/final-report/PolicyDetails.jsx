import { useEffect, useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";
import axios from "axios";

const PolicyDetails = ({ setIsStatusModal }) => {
  const [applicantNumber, setApplicantNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [claim, setClaim] = useState({});

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getSpecificClaim", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          LeadId: "1",
        },
      })
      .then((res) => {
        console.log(res.data.data[0][0]);
        setClaim(res.data.data[0][0]);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

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

  const openStatusUpdateHandler = () => {
    setIsStatusModal(true);
  };
  return (
    <>
      <div className="row">
        {/* <hr /> */}
        <div className="col-lg-4">
          <div className="row mt-1 mb-1">
            <div className="col-lg-4 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                  marginTop: "5px",
                }}
              >
                Reference No. # <span class="text-danger">*</span>
              </label>
            </div>
            <div className="col-lg-7">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={claim.ReferenceNo ? claim.ReferenceNo : ""}
                readOnly
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="row mt-1">
            <div className="col-lg-3 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  marginTop: "5px",
                }}
              >
                Date <span class="text-danger">*</span>
              </label>
            </div>
            <div className="col-lg-7">
              {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
              <MyDatePicker />
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="row">
            <div className="col-lg-3 my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color"
                style={{
                  // paddingTop: "15px",
                  color: "#2e008b",
                  fontWeight: "",
                  marginTop: "10px",
                }}
              >
                Vehicle
              </label>
            </div>
            <div className="col-lg-7">
              <select
                style={{ marginTop: "5px" }}
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
          {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
        </div>
        <hr />
      </div>

      <div className="row">
        <div className="col-lg-8" style={{ borderRight: "1px solid grey" }}>
          <h4 className="text-dark" style={{ fontSize: "21px" }}>
            Policy Details :
          </h4>
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Policy <span class="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        value={claim.PolicyNumber ? claim.PolicyNumber : ""}
                        readOnly

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                  {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
                </div>

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Insured <span class="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly
                        value={claim.InsuredName ? claim.InsuredName : ""}
                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                  {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
                </div>

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                      {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                      <MyDatePicker />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        I.D.V.<span class="text-danger">*</span>
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

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Type <span class="text-danger">*</span>
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

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Insurance From
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <MyDatePicker />
                      {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Insurance To
                      </label>
                    </div>
                    <div className="col-lg-7">
                      {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                      <MyDatePicker />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {" "}
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Address <span class="text-danger">*</span>
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Insurers <span class="text-danger">*</span>
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        H.P.A.
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Insured Office
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Claim
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Appointing Office
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
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h4 className="text-dark" style={{ fontSize: "21px" }}>
            Driver & Licence Details :
          </h4>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Driver Name
                  </label>
                </div>
                <div className="col-lg-7">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    readOnly
                    value={claim.InsuredName ? claim.InsuredName : ""}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Driver Lic. No.
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Issue Date <span class="text-danger">*</span>
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Up to<span class="text-danger">*</span>
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Valid From
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Renewal
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Issuing Authority
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    License Type
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Badge
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Remark
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
        </div>
      </div>

      <hr style={{ color: "#2e008b", height: "1px" }} />
      <div className="row">
        <div className="col-lg-8" style={{ borderRight: "1px solid grey" }}>
          <h4 className="text-dark" style={{ fontSize: "21px" }}>
            Vehicle Details :
          </h4>
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Registration <span class="text-danger">*</span>
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Registered Owner
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Owner Serial No.
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-3 my_profile_setting_input form-group">
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
                        Date of :
                      </label>
                    </div>
                    <div className="col-lg-4">
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
                    <div className="col-lg-4">
                      {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                      <MyDatePicker />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Chasis
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

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Engine
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

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Make/Variant/Mod
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

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Type of Body
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Color
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Cubic Capacity
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
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group">
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
                        Remark
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
            </div>
            <div className="col-lg-6">
              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Reg Laden
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Remark
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Unladen
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Remark
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Seating Capacity
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Class Of Vehicle
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Fuel Used
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Odometer Reading
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Pre Accident Condition
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

              <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
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
                      Tax Particulars
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
          </div>
        </div>
        <div className="col-lg-4">
          <h4 className="text-dark" style={{ fontSize: "21px" }}>
            Commercial Vehicle Details :
          </h4>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Fitness Cert.
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Fitness From
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    To
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    {" "}
                    Permit Issued By
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Permit From
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    To
                  </label>
                </div>
                <div className="col-lg-7">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Type of Permit
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Authorization
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

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
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
                    Route / Area of Operation
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
        </div>
      </div>
      <hr style={{ color: "#2e008b", height: "1px" }} />
    </>
  );
};

export default PolicyDetails;
