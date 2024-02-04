import axios from "axios";
import { useEffect, useState } from "react";

const LabourForm = ({
  currentGst,
  setTotalAssessed,
  totalAssessed,
  totalEstimate,
  taxAmount,
  setTaxAmount,
  overallMetalDep,
  setCurrentGST,
  totalAgeOfvehicle,
  toggleEstimate,
  setToggleEstimate,
  toggleLabor,
  setToggleLabor,
  setReload
 }) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12 mb-2 mt-2">
            <div className="row mt-1">
              <div className="col-lg-8">
                <input
                  className="form-check-input m-1"
                  type="checkbox"
                  value=""
                  onChange={()=>{
                    setToggleEstimate(toggleEstimate+1);
                    setReload(true);
                  }}
                  id="remeberMe"
                />
                Estimate W/o Tax :{totalEstimate}
                (Assessed) : {totalAssessed}
              </div>
              {/* <div className="col-lg-6">
                <select
                  className="selectpicker form-select p-1"
                  style={{ fontSize: "smaller" }}
                  data-live-search="true"
                  data-width="100%"
                >
                  <option data-tokens="Status1" value={"Regular"}>
                    Regular
                  </option>
                  <option data-tokens="Status2" value={"Add on Policy"}>
                    Add on Policy
                  </option>
                </select>
              </div> */}
              <div className="col-lg-8">
                <input
                  className="form-check-input m-1"
                  type="checkbox"
                  value=""
                  id="remeberMe"
                />
                Labour W/O Paint :{" "}
              </div>
              <div className="col-lg-8">
                <input
                  className="form-check-input m-1"
                  type="checkbox"
                  value=""
                  id="remeberMe"
                />
                Paint :{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-4 my_profile_setting_input form-group text-end">
                <label
                  htmlFor=""
                  className="text-color mt-2"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Cabin :
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
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 my_profile_setting_input form-group text-end mt-1 mb-0">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Load Body
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
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12 my_profile_setting_input form-group text-end mt-1 mb-0">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Towing Charge
                </label>
              </div>
              <div className="col-lg-12">
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
            <div className="row">
              <div className="col-lg-12 my_profile_setting_input form-group text-end mt-1 mb-0">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Taxable Amount
                </label>
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                  value={totalAssessed}

                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="col-lg-12 my_profile_setting_input form-group text-end mt-1 mb-0">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    GST @
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={currentGst}
                    onChange={(e)=>{
                      setCurrentGST(e.target.value);
                      setReload(true);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="col-lg-12 my_profile_setting_input form-group text-end mt-1 mb-0">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Tax Amount
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={taxAmount}

                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="col-lg-12 my_profile_setting_input form-group text-end mt-1 mb-0">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Other Remark
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="col-lg-12 my_profile_setting_input form-group text-end mt-1 mb-0">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Amount 
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={totalAssessed}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12 my_profile_setting_input form-group text-end text-end mt-1 mb-0">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Total Amount
                </label>
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control form-control-table"
                  id="propertyTitle"
                  value={totalAssessed+taxAmount}
                  // placeholder="Enter Registration No."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-2">
                      <div className="row mt-1">
                        <div className="col-lg-8 my_profile_setting_input form-group text-end">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#2e008b",
                              fontWeight: "",
                              // marginTop: "-13px",
                              fontSize: "14px",
                            }}
                          >
                            Age of Vehicle(months)
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={totalAgeOfvehicle}
                            // readOnly={!isEditMode}
                            // onChange={(e) => setLicenseType(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 ">
                      <div className="row mt-1">
                        <div className="col-lg-8 my_profile_setting_input form-group text-end">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#2e008b",
                              fontWeight: "",
                              // marginTop: "-13px",
                              fontSize: "14px",
                            }}
                          >
                            Depreciation on metal(%)
                          </label>
                        </div>
                        <div className="col-lg-4">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={overallMetalDep}
                            // readOnly={!isEditMode}
                            // onChange={(e) => setLicenseType(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          {/* <div className="col-lg-12 text-center mt-2">
            <div className="my_profile_setting_input">
              <button className="btn btn-color w-100">Update Status</button>
            </div>
          </div> */}
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default LabourForm;
