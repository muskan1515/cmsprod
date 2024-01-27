// import axios from "axios";
// import { useRef, useState } from "react";
// import { useReducer } from "react";
import { FaEye } from "react-icons/fa";
// import { encryptionData } from "../../../utils/dataEncryption";
import { useRouter } from "next/router";
import Exemple from "./Exemple_01";
// import toast from "react-hot-toast";

const UploadReort = (edit) => {
  const router = useRouter();

  const editHandler = () => {
    setEdit(true);
  };

  //   const togglePasswordVisibility = () => {
  //     setPasswordVisible(!passwordVisible);
  //   };

  //   const togglePasswordVisibility_01 = () => {
  //     setPasswordVisible_01(!passwordVisible_01);
  //   };

  return (
    <>
      <div className=" faq_according row">
        {/* <h4 className="mb-3">Vehicle Details</h4> */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="btn accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={{ padding: "10px 10px 0 25px" }}
              >
                <h4 className="">Upload Report</h4>
                <div className="col-lg-1 m-1">
                 {/* <button
                    className="btn-thm mb-1"
                    style={{ marginTop: "-10px" }}
                    onClick={editHandler}
                  >
                    {edit ? "Save" : <span className="flaticon-edit"></span>}
  </button>*/}
                </div>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Select Gaarge <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <select
                          className="selectpicker form-select"
                          data-live-search="true"
                          data-width="100%"
                        >
                          <option data-tokens="Status1">Select</option>
                          <option data-tokens="Status1">
                            Megapower Car Services
                          </option>
                          {/* <option data-tokens="Status2">Delhi</option>
                          <option data-tokens="Status3">Chandigarh</option> */}
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            cursor: "pointer",
                            fontWeight: "",
                          }}
                        >
                          Simple Preliminary Report{" "}
                          <span className="flaticon-pdf"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Report Type <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <select
                          className="selectpicker form-select"
                          data-live-search="true"
                          data-width="100%"
                        >
                          <option data-tokens="Status1">Select</option>
                          <option data-tokens="Status1">
                            Megapower Car Services
                          </option>
                          {/* <option data-tokens="Status2">Delhi</option>
                          <option data-tokens="Status3">Chandigarh</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          File Name <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
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
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Attach File <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="file"
                          className="form-control"
                          id="propertyTitle"
                          // placeholder="Enter Registration No."
                        />
                      </div>
                      <div className="col-lg-4 text-end">
                        <button className="btn btn-color mt-0 ">Upload</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <Exemple />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default UploadReort;
