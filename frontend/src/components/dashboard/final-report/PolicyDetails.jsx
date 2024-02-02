import { useEffect, useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";
import toast from "react-hot-toast";
import axios from "axios";

const PolicyDetails = ({
  setIsStatusModal,
  setPolicyType,
  policyType,
  isEditMode,
  setIsEditMode,
  phoneNumber,
  setPhoneNumber,
  applicantNumber,
  setApplicantNumber,

  ReferenceNo,
  setReferenceNo,
  InsuredMailAddress,
  setInsuredMailAddress,
  requestType,
  setRequestType,
  ClaimNumber,
  EngineType,
  setEngineType,
  DateRegistration,
  setDateRegistration,
  PUCNumber,
  setPUCNumber,
  TransferDate,
  setTransferDate,
  AddedBy,
  setAddedBy,
  Verification,
  setVerification,

  GarageNameAndAddress,
  setGarageNameAndAddress,
  GarageContactNo,
  setGarageContactNo1,
  GarageContactNo2,
  setGarageContactNo2,
  GarageAddedBy,
  setGarageAddedBy,

  ClaimAddedDateTime,
  setClaimAddedDateTime,
  ClaimIsActive,
  setClaimIsActive,
  PolicyIssuingOffice,
  setPolicyIssuingOffice,

  PolicyNumber,
  setPolicyNumber,
  InsuranceCompanyNameAddress,
  setInsuranceCompanyNameAddress,
  InsuredAddress,
  setInsuredAddress,
  InsuredName,
  setInsuredName,
  InsuredMobileNo1,
  setInsuredMobileNo1,
  InsuredMobileNo2,
  setInsuredMobileNo2,
  ClaimRegion,
  setClaimRegion,

  DriverName,
  setDriverName,
  DriverAddedDate,
  setDriverAddedDate,
  IssuingAuthority,
  setIssuingAuthority,
  LicenseNumber,
  setLicenseNumber,
  LicenseType,
  setLicenseType,
  BadgeNumber,

  VehicleRegisteredNumber,
  setVehicleRegisteredNumber,
  RegisteredOwner,
  setRegisteredOwner,
  VehicleChassisNumber,
  setVehicleChassisNumber,
  EngineNumber,
  setEngineNumber,
  VehicleTypeOfBody,
  setVehicleTypeOfBody,
  VehicleCubicCapacity,
  setVehicleCubicCapacity,
  VehicleClassOfVehicle,
  setVehicleClassOfVehicle,
  VehicleFuelType,
  setVehicleFuelType,
  VehicleOdometerReading,
  setVehicleOdometerReading,
  VehiclePreAccidentCondition,
  setVehiclePreAccidentCondition,

  VehicleModel,
  setVehicleModel,
  VehicleTaxParticulars,
  setVehicleTaxParticulars,
  VehicleSeatingCapacity,
  setVehicleSeatingCapacity,
}) => {
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

  //Update Document
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleUpdateClick = () => {
    const payload = {
      // Insured Details
      InsuredMailAddress,
      InsuredMobileNo1,
      InsuredMobileNo2,
      ClaimNumber,
      EngineType,
      DateRegistration,
      TransferDate,
      AddedBy,
      Verification,
      GarageNameAndAddress,
      GarageContactNo1,
      GarageContactNo2,
      GarageAddedBy,
      ClaimAddedDateTime,
      ClaimIsActive,

      // Policy Detail
      ReferenceNo,
      PolicyNumber,
      PolicyIssuingOffice,
      InsuranceCompanyNameAddress,
      ClaimRegion,
      InsuredName,
      InsuredAddress,
      PolicyType,

      // Drivers Details
      DriverName,
      DriverAddedDate,
      IssuingAuthority,
      LicenseNumber,
      LicenseType,
      BadgeNumber,

      // Vehicle Details
      VehicleRegisteredNumber,
      RegisteredOwner,
      VehicleChassisNumber,
      EngineNumber,
      VehicleModel,
      VehicleTypeOfBody,
      VehicleCubicCapacity,
      VehicleClassOfVehicle,
      VehicleFuelType,
      VehicleOdometerReading,
      VehiclePreAccidentCondition,
      VehicleTaxParticulars,
      PUCNumber,
      VehicleSeatingCapacity,

      LeadId,
    };
    console.log("payload", payload);
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      axios.put(`/api/updateClaimDetails`, payload, {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
      });
      setIsEditMode(false);
    } catch (error) {
      console.log("Error in Updating Claim: ", error);
    }
  };

  return (
    <>
      <div className="row">
        {/* <hr /> */}
        <div className="col-lg-3">
          <div className="row mt-1 mb-1">
            <div className="col-lg-6 text-end my_profile_setting_input form-group">
              <label
                htmlFor=""
                className="text-color"
                style={{
                  color: "#2e008b",
                  fontWeight: "",
                  marginTop: "5px",
                }}
              >
                Reference No. #
              </label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                value={ReferenceNo}
                readOnly={!isEditMode}
                onChange={(e) => setReferenceNo(e.target.value)}
                // placeholder="Enter Registration No."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="row mt-1">
            <div className="col-lg-4 text-end my_profile_setting_input form-group">
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
            <span
              className="col-lg-1 flaticon-calendar text-dark fs-6"
              style={{ marginLeft: "-20px" }}
            ></span>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="row">
            <div className="col-lg-3 text-end my_profile_setting_input form-group">
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
                Vehicle
              </label>
            </div>
            <div className="col-lg-7">
              <select
                // style={{ marginTop: "5px" }}
                style={{ padding: "2px", marginTop: "3px" }}
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
              >
                <option data-tokens="Status1">Select</option>
                <option data-tokens="Status2">Swift</option>
                <option data-tokens="Status3">Honda</option>
                <option data-tokens="Status4">Maruti Sukuzi</option>
              </select>
            </div>
          </div>
          {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
        </div>
        <div className="col-lg-4 text-end">
          {isEditMode ? (
            <button className="btn btn-color m-1" onClick={handleUpdateClick}>
              Update
            </button>
          ) : (
            <button className="btn btn-color m-1" onClick={handleEditClick}>
              Update
            </button>
          )}
          <button className="btn btn-color m-1" onClick={handleEditClick}>
            Add
          </button>
          {/* <button className="btn btn-color m-1" onClick={handleEditClick}>
            Modify
          </button> */}
        </div>
        <hr />
      </div>

      <div className="row">
        <div className="col-lg-8" style={{ borderRight: "1px solid grey" }}>
          <h4 className="text-dark" style={{ fontSize: "17px" }}>
            Policy Details :
          </h4>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-7">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group text-end text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Policy#
                      </label>
                    </div>
                    <div className="col-lg-8" style={{ marginLeft: "" }}>
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        value={PolicyNumber}
                        readOnly={!isEditMode}
                        onChange={(e) => setPolicyNumber(e.target.value)}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                  {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
                </div>

                <div className="col-lg-5">
                  <div className="row mt-1">
                    <div className="col-lg-4 text-end my_profile_setting_input form-group">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "15px",
                        }}
                      >
                        Insured <span class="text-danger">*</span> :
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly={!isEditMode}
                        value={InsuredName}
                        onChange={(e) => setInsuredName(e.target.value)}
                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row mt-1">
                    <div className="col-lg-7 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        I.D.V.
                      </label>
                    </div>
                    <div className="col-lg-5">
                      <input
                        type="number"
                        className="form-control"
                        id="propertyTitle"
                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row mt-1">
                    <div className="col-lg-2 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "15px",
                        }}
                      >
                        Type
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <select
                        style={{ padding: "2px" }}
                        className="selectpicker form-select"
                        data-live-search="true"
                        data-width="100%"
                        value={policyType}
                        onChange={(e) => setPolicyType(e.target.value)}
                      >
                        <option data-tokens="Status1">Regular</option>
                        <option data-tokens="Status2">Add on Policy</option>
                        <option data-tokens="Status3">
                          Add on Policy(Not Effective)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row mt-1">
                    <div className="col-lg-4 text-end my_profile_setting_input form-group">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "15px",
                        }}
                      >
                        Address <span class="text-danger">*</span> :
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        id="InsuredAddress"
                        value={InsuredAddress}
                        onChange={(e) => setInsuredAddress(e.target.value)}
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row mt-1">
                    <div className="col-lg-7 form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "bold",
                          paddingRight: "-10px",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Insurance From
                      </label>
                    </div>
                    <div className="col-lg-5">
                      <MyDatePicker />
                      {/* <span className="flaticon-calendar text-dark"></span> */}
                      {/* <input
                        type="date"
                        className="form-control"
                        id="propertyTitle"
                      /> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row mt-1">
                    <div className="col-lg-2 my_profile_setting_input form-group text-end">
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
                        To
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <MyDatePicker />
                    </div>
                    {/* <span
                      className="col-lg-1 flaticon-calendar text-dark fs-4"
                      style={{ marginLeft: "-30px" }}
                    ></span> */}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="row mt-1">
                    <div className="col-lg-4 text-end my_profile_setting_input form-group">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "15px",
                        }}
                      >
                        H.P.A.<span class="text-danger">*</span> :
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        value={InsuredMobileNo1}
                        readOnly={!isEditMode}
                        onChange={(e) => setInsuredMobileNo1(e.target.value)}
                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize:"15px"
                        }}
                      >
                        Insurance <span class="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        value={InsuredMobileNo1}
                        readOnly={!isEditMode}
                        onChange={(e) => setInsuredMobileNo1(e.target.value)}
                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "15px",
                        }}
                      >
                        Insurers <span class="text-danger">*</span> :
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        value={InsuranceCompanyNameAddress}
                        readOnly={!isEditMode}
                        onChange={(e) =>
                          setInsuranceCompanyNameAddress(e.target.value)
                        }

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row mt-1">
                    <div className="col-lg-4 text-end my_profile_setting_input form-group text-end">
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
                        Claim # :
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        value={ClaimIsActive}
                        readOnly={!isEditMode}
                        onChange={(e) => setClaimIsActive(e.target.value)}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-4 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Insurance Office :
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-end">
                  <div className="form-group form-check custom-checkbox">
                    <label
                      className="form-check-label"
                      htmlFor="terms"
                      style={{
                        color: "#2e008b",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      Total Loss
                    </label>
                    <input
                      className="m-2"
                      type="checkbox"
                      value=""
                      id="terms"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group form-check custom-checkbox">
                    <label
                      className="form-check-label"
                      htmlFor="terms"
                      style={{
                        color: "#2e008b",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      IMT 23
                    </label>
                    <input
                      className="m-2"
                      type="checkbox"
                      value=""
                      id="terms"
                      style={{ border: "1px solid black" }}
                    />
                  </div>
                </div>
                <div className="col-lg-7 mt-0">
                  <div className="row" style={{ paddingRight: "0px" }}>
                    <div className="col-lg-4 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Appointing Office :
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        value={PolicyIssuingOffice}
                        onChange={(e) => setPolicyIssuingOffice(e.target.value)}
                        readOnly={!isEditMode}
                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div
              className="col-lg-12"
              style={{ borderRight: "1px solid grey" }}
            >
              <h4 className="text-dark" style={{ fontSize: "17px" }}>
                Vehicle Details :
              </h4>
              <hr />
              <div className="row">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row mt-1">
                        <div className="col-lg-4 my_profile_setting_input form-group text-end text-end">
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
                            Registration#
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={VehicleRegisteredNumber}
                            readOnly={!isEditMode}
                            onChange={(e) =>
                              setVehicleRegisteredNumber(e.target.value)
                            }

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row mt-1">
                        <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                            Registered Owner
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            readOnly={!isEditMode}
                            value={RegisteredOwner}
                            onChange={(e) => setRegisteredOwner(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row mt-1">
                        <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                            Owner SR / TR
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            readOnly={!isEditMode}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row mt-1">
                        <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                            Date of :
                          </label>
                        </div>
                        <div className="col-lg-4">
                          <select
                            style={{ padding: "2px" }}
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
                          <MyDatePicker />
                          {/* <span className="flaticon-calendar text-dark"></span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row mt-1">
                        <div className="col-lg-5 my_profile_setting_input form-group text-end">
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
                            Chasis#
                          </label>
                        </div>
                        <div
                          className="col-lg-6"
                          style={{ marginLeft: "10px" }}
                        >
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={VehicleChassisNumber}
                            readOnly={!isEditMode}
                            onChange={(e) =>
                              setVehicleChassisNumber(e.target.value)
                            }

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="m-1">
                        <label
                          className=""
                          htmlFor="terms"
                          style={{
                            color: "#2e008b",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          phy check
                        </label>
                        <input
                          className="form-check-input m-1"
                          type="checkbox"
                          value=""
                          id="terms"
                          style={{ border: "1px solid black" }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="row mt-1">
                        <div className="col-lg-5 my_profile_setting_input form-group text-end">
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
                            Engine#
                          </label>
                        </div>
                        <div
                          className="col-lg-6"
                          style={{ marginLeft: "10px" }}
                        >
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={EngineNumber}
                            readOnly={!isEditMode}
                            onChange={(e) => setEngineNumber(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="m-1">
                        <label
                          className=""
                          htmlFor="terms"
                          style={{
                            color: "#2e008b",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          phy check
                        </label>
                        <input
                          className="form-check-input m-1"
                          type="checkbox"
                          value=""
                          id="terms"
                          style={{ border: "1px solid black" }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row mt-1">
                        <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                            Make/Variant
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={VehicleModel}
                            readOnly={!isEditMode}
                            onChange={(e) => setVehicleModel(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="row mt-1">
                        <div className="col-lg-6 my_profile_setting_input form-group text-end">
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
                            Type of Body
                          </label>
                        </div>
                        <div
                          className="col-lg-5"
                          style={{ marginLeft: "20px" }}
                        >
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={VehicleTypeOfBody}
                            readOnly={!isEditMode}
                            onChange={(e) =>
                              setVehicleTypeOfBody(e.target.value)
                            }

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="row mt-1">
                        <div className="col-lg-3 text-end my_profile_setting_input form-group">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              paddingTop: "5px",
                              color: "#2e008b",
                              fontWeight: "",
                              // marginTop: "-13px",
                              fontSize: "14px",
                            }}
                          >
                            Color
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            id="color"
                            // value={VehicleModel}
                            readOnly={!isEditMode}
                            // onChange={(e) => setVehicleTypeOfBody(e.target.value)}

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row mt-1">
                        <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                            Cubic Capacity
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={VehicleCubicCapacity}
                            readOnly={!isEditMode}
                            onChange={(e) =>
                              setVehicleCubicCapacity(e.target.value)
                            }

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row mt-1">
                        <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                            Remark
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            readOnly={!isEditMode}
                            value={VehicleTaxParticulars}
                            onChange={(e) =>
                              setVehicleTaxParticulars(e.target.value)
                            }

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "15px",
                        }}
                      >
                        Anti Theft
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        // value={VehicleCubicCapacity}
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "15px",
                        }}
                      >
                        PUC Details
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        value={PUCNumber}
                        readOnly={!isEditMode}
                        onChange={(e) => setPUCNumber(e.target.value)}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div> */}

                    {/* <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-4 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "15px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize:"15px"
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
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div> */}
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Reg Laden Wt(Kgs)
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
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Remark(if RLW N.A)
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          readOnly={!isEditMode}

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Unladen WT(Kgs)
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          readOnly={!isEditMode}

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Remark(if ULW N.A)
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          readOnly={!isEditMode}

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Seating Capacity
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          value={VehicleSeatingCapacity}
                          readOnly={!isEditMode}
                          onChange={(e) =>
                            setVehicleSeatingCapacity(e.target.value)
                          }
                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    {/* <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group text-end">
                    <label
                      htmlFor=""
                      className="text-color"
                      style={{
                        // paddingTop: "15px",
                        color: "#2e008b",
                        fontWeight: "",
                        // marginTop: "-13px",
                        fontSize:"14px"
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
                      readOnly={!isEditMode}
                      value={VehicleClassOfVehicle}
                      // placeholder="Enter Registration No."
                    />
                  </div>
                </div> */}
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Class of Vehicle
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          value={VehicleClassOfVehicle}
                          readOnly={!isEditMode}
                          onChange={(e) =>
                            setVehicleClassOfVehicle(e.target.value)
                          }

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Fuel Used
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          value={VehicleFuelType}
                          readOnly={!isEditMode}
                          onChange={(e) => setVehicleFuelType(e.target.value)}

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Odometer Reading
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="number"
                          className="form-control"
                          id="propertyTitle"
                          readOnly={!isEditMode}
                          value={VehicleOdometerReading}
                          onChange={(e) =>
                            setVehicleOdometerReading(e.target.value)
                          }

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Pre Accident Condition
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          readOnly={!isEditMode}
                          value={VehiclePreAccidentCondition}
                          onChange={(e) =>
                            setVehiclePreAccidentCondition(e.target.value)
                          }

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row mt-1">
                      <div className="col-lg-7 my_profile_setting_input form-group text-end">
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
                          Tax Particulars
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          readOnly={!isEditMode}
                          value={VehicleTaxParticulars}
                          onChange={(e) =>
                            setVehicleTaxParticulars(e.target.value)
                          }

                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-12">
                <div className="row mt-1">
                  <div className="col-lg-4 my_profile_setting_input form-group text-end">
                    <label
                      htmlFor=""
                      className="text-color"
                      style={{
                        // paddingTop: "15px",
                        color: "#2e008b",
                        fontWeight: "",
                        // marginTop: "-13px",
                        fontSize:"14px"
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
                      readOnly={!isEditMode}
                      value={VehicleTaxParticulars}
                      onChange={(e) => setVehicleTaxParticulars(e.target.value)}

                      // placeholder="Enter Registration No."
                    />
                  </div>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h4 className="text-dark" style={{ fontSize: "17px" }}>
            Driver & Licence Details :
          </h4>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                    Driver Name
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    readOnly={!isEditMode}
                    value={DriverName}
                    onChange={(e) => setDriverName(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                    Driver Lic. No.
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={LicenseNumber}
                    readOnly={!isEditMode}
                    onChange={(e) => setLicenseNumber(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row mt-1">
                <div className="col-lg-6 my_profile_setting_input form-group text-end text-end">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      paddingTop: "5px",
                      color: "#2e008b",
                      fontWeight: "",
                      fontSize: "14px",
                      // marginTop: "-13px",
                    }}
                  >
                    Issue Date
                  </label>
                </div>
                <div className="col-lg-6">
                  {/* <input
                  type="date"
                  className="form-control"
                  id="propertyTitle"
                  /> */}
                  <MyDatePicker />
                  {/* <span className="flaticon-calendar text-dark"></span> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row mt-1">
                <div className="col-lg-2 text-end my_profile_setting_input form-group text-end">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      paddingTop: "5px",
                      color: "#2e008b",
                      fontWeight: "",
                      fontSize: "14px",
                      // marginTop: "-13px",
                    }}
                  >
                    To
                  </label>
                </div>
                <div className="col-lg-10">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                  {/* <span className="flaticon-calendar text-dark"></span> */}
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row mt-1">
                <div className="col-lg-6 my_profile_setting_input form-group text-end text-end">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      paddingTop: "5px",
                      color: "#2e008b",
                      fontWeight: "",
                      fontSize: "14px",
                      // marginTop: "-13px",
                    }}
                  >
                    Valid From
                  </label>
                </div>
                <div className="col-lg-6">
                  {/* <input
                  type="date"
                  className="form-control"
                  id="propertyTitle"
                  /> */}
                  <MyDatePicker />
                  {/* <span className="flaticon-calendar text-dark"></span> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row mt-1">
                <div className="col-lg-2 text-end my_profile_setting_input form-group text-end">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      paddingTop: "5px",
                      color: "#2e008b",
                      fontWeight: "",
                      fontSize: "14px",
                      // marginTop: "-13px",
                    }}
                  >
                    To
                  </label>
                </div>
                <div className="col-lg-10">
                  {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                  <MyDatePicker />
                  {/* <span className="flaticon-calendar text-dark"></span> */}
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
                      fontSize: "14px",
                    }}
                  >
                    Issuing Authority
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={IssuingAuthority}
                    readOnly={!isEditMode}
                    onChange={(e) => setIssuingAuthority(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                    License Type
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={LicenseType}
                    readOnly={!isEditMode}
                    onChange={(e) => setLicenseType(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                    Badge#
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    readOnly={!isEditMode}
                    value={BadgeNumber}
                    onChange={(e) => setBadgeNumber(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row mt-1">
                <div className="col-lg-4 my_profile_setting_input form-group text-end">
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
                    Remark
                  </label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    readOnly={!isEditMode}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <h4 className="text-dark" style={{ fontSize: "17px" }}>
                Commercial Vehicle Details :
              </h4>
              <hr />
              <div className="row">
                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-5 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Fitness Certificate
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        style={{ marginLeft: "-10px" }}
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="row mt-1">
                    <div className="col-lg-7 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Fitness From
                      </label>
                    </div>
                    <div className="col-lg-5">
                      {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                      <MyDatePicker />
                      {/* <span className="flaticon-calendar text-dark"></span> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="row mt-1">
                    <div className="col-lg-2 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          fontSize: "14px",
                          // marginTop: "-13px",
                        }}
                      >
                        To
                      </label>
                    </div>
                    <div className="col-lg-10">
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
                    <div className="col-lg-5 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          fontSize: "14px",
                          // marginTop: "-13px",
                        }}
                      >
                        {" "}
                        Permit#
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        style={{ marginLeft: "-10px" }}
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="row mt-1">
                    <div className="col-lg-7 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          // paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Permit From
                      </label>
                    </div>
                    <div className="col-lg-5">
                      {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                      <MyDatePicker />
                      {/* <span className="flaticon-calendar text-dark"></span> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="row mt-1">
                    <div className="col-lg-2 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          fontSize: "14px",
                          // marginTop: "-13px",
                        }}
                      >
                        To
                      </label>
                    </div>
                    <div className="col-lg-10">
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
                    <div className="col-lg-5 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Type of Permit
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        style={{ marginLeft: "-10px" }}
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-5 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Authorization
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        style={{ marginLeft: "-10px" }}
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row mt-1">
                    <div className="col-lg-5 my_profile_setting_input form-group text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          paddingTop: "5px",
                          color: "#2e008b",
                          fontWeight: "",
                          // marginTop: "-13px",
                          fontSize: "14px",
                        }}
                      >
                        Area of Operation
                      </label>
                    </div>
                    <div className="col-lg-7">
                      <input
                        style={{ marginLeft: "-10px" }}
                        type="text"
                        className="form-control"
                        id="propertyTitle"
                        readOnly={!isEditMode}

                        // placeholder="Enter Registration No."
                      />
                    </div>
                  </div>
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
