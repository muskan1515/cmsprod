// import axios from "axios";
// import { useRef, useState } from "react";
// import { useReducer } from "react";
import { FaEye } from "react-icons/fa";
// import { encryptionData } from "../../../utils/dataEncryption";
import { useRouter } from "next/router";
import Form_vehicle from "./Form_vehicle";
import { useEffect, useState } from "react";
import axios from "axios";
// import toast from "react-hot-toast";

const Form = ({
  claim,
  edit,
  editHandler,
  VehicleModel,
  setVehicleModel,
  VehicleRegisteredNumber,
  setVehicleRegisteredNumber,
  setEngineType,
  EngineType,
  VehicleRegisteredOwner,
  setVehicleRegisteredOwner,
  DateRegistration,
  setDateRegistration,
  PUCNumber,
  setPUCNumber,
  TransferDate,
  setTransferDate,
  EngineNumber,
  setEngineNumber,
  AddedBy,
  setAddedBy,
  IssuingAuthority,
  setIssuingAuthority,
  LicenseNumber,
  setLicenseNumber,
  LicenseType,
  setLicenseType,
  VehicleChassisNumber,
  setVehicleChassisNumber,
  VehicleFuelType,
  setVehicleFuelType,
  onSaveHandler,
  //New Fields
  setVehicleClassDescription,
  setMakerDesc,
  setMakerModel,
  setManufactureMonthYear,
  setVehicleGvw,
  setCubicCapacity,
  setVehicleSeatingCapacity,
  setVehiclePermanentAddress,
  setFitUpto,
  setPasiaModelCode,
  setRcInsuranceComp,
  setRcInsuranceUpto,
  setRcVehicleType,
  setBancsModelCode,
  setBancsMakeCode,
  setBancsSubtypeCode,
  setBancsBodyType,
  setBancsVehicleClass,
  setBancsVehicleSegment,
  setRcRtoCode,
  setVehicleBlackListStatus,
  setVehicleRegistedAt,
  setVehicleRcStatus,

  VehicleClassDescription,
  MakerDesc,
  MakerModel,
  ManufactureMonthYear,
  VehicleGvw,
  CubicCapacity,
  VehicleSeatingCapacity,
  VehiclePermanentAddress,
  FitUpto,
  PasiaModelCode,
  RcInsuranceComp,
  RcInsuranceUpto,
  RcRegisteredAt,
  RcVehicleType,

  //--
  BancsModelCode,
  BancsMakeCode,
  BancsSubtypeCode,
  BancsBodyType,
  BancsVehicleClass,
  BancsVehicleSegment,
  RcRtoCode,
  BancsFuelType,
  VehicleType,
  VehicleBlackListStatus,
  VehicleRegistedAt,
  VehicleInsuranceUpto,
  VehicleInsuranceCompany,
  VehicleRcStatus,

  setBancsFuelType,
  setVehicleInsuranceCompany,
  PermanentAddress,
  setPermanentAddress,
  ClassOfVehicle,
  setClassOfVehicle

}) => {
  const router = useRouter();
  const [editCase_01, setEditCase_01] = useState(false);
  const [editVechile, setEditVechile] = useState(false);
  const [details, setDetails] = useState();
  //   const togglePasswordVisibility = () => {
  //     setPasswordVisible(!passwordVisible);
  //   };

  //   const togglePasswordVisibility_01 = () => {
  //     setPasswordVisible_01(!passwordVisible_01);
  //   };

  console.log("CAPP",CubicCapacity);





  const formatDate = (val) => {
    const date = new Date(val);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };

  const handleFetchData = async (req, res) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      router.push("/login");
    }
    try {
      const response = axios
        .get("/api/getOnlineVehicleData", {
          headers: {
            Authorization: `Bearer ${userInfo[0].Token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setDetails(res.data.data);
          console.log("datata", res.data.data);
        })
        .catch((err) => {
          console.log("err", err);
        });

      // setEditCase_01(true);
      console.log("data", data);
    } catch (error) {
      console.log("Error from Fetch Details-> ", error);
    }
  };
  setVehicleModel(details?.rc_maker_model),
    setVehicleRegisteredOwner(details?.rc_owner_name),
    setDateRegistration(details?.rc_regn_dt),
    setVehicleChassisNumber(details?.rc_chasi_no),
    //New Fields
    setVehicleClassDescription(details?.rc_vh_class_desc), //is it same as ClassOfVehicle ?
    setMakerDesc(details?.rc_maker_desc),
    setMakerModel(details?.rc_maker_model);
    setManufactureMonthYear(details?.rc_manu_month_yr);
  setVehicleGvw(details?.rc_gvw);
  setCubicCapacity(details?.rc_cubic_cap);
  setVehicleSeatingCapacity(details?.rc_seat_cap);
  setVehiclePermanentAddress(details?.rc_permanent_address);
  setFitUpto(details?.rc_fit_upto);
  setPasiaModelCode(details?.rc_pasia_model_code);
  setRcInsuranceComp(details?.rc_insurance_comp);
  setRcInsuranceUpto(details?.rc_insurance_upto);
  setRcVehicleType(details?.rc_vehicle_type);
  setBancsModelCode(details?.bancs_model_code);
  setBancsMakeCode(details?.bancs_make_code);
  setBancsSubtypeCode(details?.bancs_Subtype_code);
  setBancsBodyType(details?.bancs_Body_Type);
  setBancsVehicleClass(details?.bancs_Vehicle_class);
  setBancsVehicleSegment(details?.bancs_Vehicle_Segment);
  setRcRtoCode(details?.rc_rto_code);
  // setBancsFuelType(details?.bancs_Fuel_Type);
  setEngineNumber(details?.rc_eng_no),
    setLicenseNumber(details?.rc_regn_no),
    setVehicleFuelType(details?.bancs_Fuel_Type),
    setVehicleRcStatus(details?.rc_status);
  setVehicleBlackListStatus(details?.rc_blacklist_status);
  setVehicleRegistedAt(details?.rc_registered_at);
  setVehicleInsuranceCompany(details?.rc_insurance_comp);
  setPUCNumber,
    setTransferDate,
    setEngineType,
    setAddedBy,
    setLicenseType,
    setIssuingAuthority;
  //permanenet Address
  return (
    <>
      <div className=" faq_according row">
        {/* <h4 className="mb-3">Vehicle Details</h4> */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="btn accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ padding: "10px 10px 0 25px" }}
              >
                <h4 className="">Vehicle Details</h4>
              </button>
            </h2>
            {/* <div
              className=" bg-dark"
              style={{
                width: "100%",
                height: "3px",
                color: "blue",
                border: "1px solid",
                marginBottom: "5px",
              }}
            ></div> */}
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="row">
                  <div className="col-lg-1 text-end">
                    {editCase_01 ? (
                      <button
                        className="btn-thm"
                        style={{}}
                        onClick={() => onSaveHandler(setEditCase_01)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn-thm"
                        style={{}}
                        onClick={() => setEditCase_01(true)}
                      >
                        <span
                          className="flaticon-edit"
                          style={{ fontSize: "14px" }}
                        ></span>
                      </button>
                    )}
                  </div>
                  {editCase_01 && (
                  <div className="col-lg-2 text-start">
                    <button
                      className="btn-thm"
                      onClick={handleFetchData}
                      style={{}}
                    >
                      Fetch Details
                    </button>
                  </div>)}
                </div>

                {editCase_01 ? (
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
                            Vehicle Model <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={!MakerModel? claim?.vehicleDetails?.MakerModel : MakerModel}
                            onChange={(e) => setMakerModel(e.target.value)}
                            disabled={false}
                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>

                    {/*<div className="col-lg-6">
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
                          Registered Number <span class="req-btn">*</span>
                        </label>
                      </div>
                      <div className="col-lg-7">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          value={RegisteredNumber ? RegisteredNumber : claim?.vehicleDetails?.VehicleRegisteredNumber}
                          
                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                        </div>*/}

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
                            Registered Owner <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleRegisteredOwner
                                ? VehicleRegisteredOwner
                                : claim?.vehicleDetails?.VehicleRegisteredNumber
                            }
                            onChange={(e) => setVehicleRegisteredOwner(e.target.value)}

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
                            Date of Registration <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={formatDate(
                              DateRegistration
                                ? DateRegistration
                                : claim?.vehicleDetails
                                    ?.VehicleDateOfRegistration
                            )}
                            onChange={(e) =>
                              setDateRegistration(e.target.value)
                            }

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
                            PUC Number <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              PUCNumber
                                ? PUCNumber
                                : claim?.vehicleDetails?.VehiclePucNumber
                            }
                            onChange={(e) => setPUCNumber(e.target.value)}
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
                            Transfer Date <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={formatDate(
                              TransferDate
                                ? TransferDate
                                : claim?.vehicleDetails?.VehicleTransferDate
                            )}
                            onChange={(e) => setTransferDate(e.target.value)}

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
                            Engine Number <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              EngineNumber
                                ? EngineNumber
                                : claim?.vehicleDetails?.VehicleEngineNumber
                            }
                            onChange={(e) => setEngineNumber(e.target.value)}

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
                            Added By <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              AddedBy
                                ? AddedBy
                                : claim?.vehicleDetails?.VehicleAddedBy
                            }
                            onChange={(e) => setAddedBy(e.target.value)}

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
                            Issuing Authority <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              IssuingAuthority
                                ? IssuingAuthority
                                : claim?.driverDetails?.IssuingAuthority
                            }
                            onChange={(e) =>
                              setIssuingAuthority(e.target.value)
                            }

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
                            License Number <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              LicenseNumber
                                ? LicenseNumber
                                : claim?.driverDetails?.LicenseNumber
                            }
                            onChange={(e) => setLicenseNumber(e.target.value)}

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
                            License Type <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              LicenseType
                                ? LicenseType
                                : claim?.driverDetails?.LicenseType
                            }
                            onChange={(e) => setLicenseType(e.target.value)}

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
                            Chassis Number<span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleChassisNumber
                                ? VehicleChassisNumber
                                : claim?.vehicleDetails?.VehicleChassisNumber
                            }
                            onChange={(e) =>
                              setVehicleChassisNumber(e.target.value)
                            }

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
                            Fuel Type <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleFuelType
                                ? VehicleFuelType
                                : claim?.vehicleDetails?.VehicleFuelType
                            }
                            onChange={(e) => setVehicleFuelType(e.target.value)}

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
                            Registerd Number <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleRegisteredNumber
                                ? VehicleRegisteredNumber
                                : claim?.vehicleDetails?.VehicleRegisteredNumber
                            }
                            onChange={(e) =>
                              setVehicleRegisteredNumber(e.target.value)
                            }

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
                            Rc Rto Code <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              RcRtoCode
                                ? RcRtoCode
                                : claim?.vehicleDetails?.RcRtoCode
                            }
                            onChange={(e) =>
                              setRcRtoCode(e.target.value)
                            }

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
                            Bancs Vehicle Segment <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              BancsVehicleSegment
                                ? BancsVehicleSegment
                                : claim?.vehicleDetails?.BancsVehicleSegment
                            }
                            onChange={(e) =>
                              setBancsVehicleSegment(e.target.value)
                            }

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
                            Bancs Vehicle Class <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              BancsVehicleClass
                                ? BancsVehicleClass
                                : claim?.vehicleDetails?.BancsVehicleClass
                            }
                            onChange={(e) =>
                              setBancsVehicleClass(e.target.value)
                            }

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
                            Bancs Body Type <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              BancsBodyType
                                ? BancsBodyType
                                : claim?.vehicleDetails?.BancsBodyType
                            }
                            onChange={(e) =>
                              setBancsBodyType(e.target.value)
                            }

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
                            Bancs Fuel Type <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleFuelType
                                ? VehicleFuelType
                                : claim?.vehicleDetails?.VehicleFuelType
                            }
                            onChange={(e) =>
                              setVehicleFuelType(e.target.value)
                            }

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
                            Bancs Subtype Code <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              BancsSubtypeCode
                                ? BancsSubtypeCode
                                : claim?.vehicleDetails?.BancsSubtypeCode
                            }
                            onChange={(e) =>
                              setBancsSubtypeCode(e.target.value)
                            }

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
                            Bancs Make Code <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              BancsMakeCode
                                ? BancsMakeCode
                                : claim?.vehicleDetails?.BancsMakeCode
                            }
                            onChange={(e) =>
                              setBancsMakeCode(e.target.value)
                            }

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
                            Bancs Model Code <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              BancsModelCode
                                ? BancsModelCode
                                : claim?.vehicleDetails?.BancsModelCode
                            }
                            onChange={(e) =>
                              setBancsModelCode(e.target.value)
                            }

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
                            Vehicle Type <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              RcVehicleType
                                ? RcVehicleType
                                : claim?.vehicleDetails?.VehicleType
                            }
                            onChange={(e) =>
                              setRcVehicleType(e.target.value)
                            }

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
                            Vehicle Rc Status <span class="req-btn">*</span>
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleRcStatus
                                ? VehicleRcStatus
                                : claim?.vehicleDetails?.VehicleRcStatus
                            }
                            onChange={(e) =>
                              setVehicleRcStatus(e.target.value)
                            }

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
                            Vehicle Black ListStatus{" "}
                            <span class="req-btn">*</span>
                          </label>
                        </div>

                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleBlackListStatus
                                ? VehicleBlackListStatus
                                : claim?.vehicleDetails?.VehicleBlackListStatus
                            }
                            onChange={(e) =>
                              setVehicleBlackListStatus(e.target.value)
                            }

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
                            Vehicle Registed At <span class="req-btn">*</span>
                          </label>
                        </div>

                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleRegistedAt
                                ? VehicleRegistedAt
                                : claim?.vehicleDetails?.VehicleRegistedAt
                            }
                            onChange={(e) =>
                              setVehicleRegistedAt(e.target.value)
                            }

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
                            Vehicle Insurance Upto{" "}
                            <span class="req-btn">*</span>
                          </label>
                        </div>

                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleInsuranceUpto
                                ? VehicleInsuranceUpto
                                : claim?.vehicleDetails?.VehicleInsuranceUpto
                            }
                            onChange={(e) =>
                              setVehicleInsuranceUpto(e.target.value)
                            }

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
                            Vehicle Insurance Company{" "}
                            <span class="req-btn">*</span>
                          </label>
                        </div>

                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={
                              VehicleInsuranceCompany
                                ? VehicleInsuranceCompany
                                : claim?.vehicleDetails?.VehicleInsuranceCompany
                            }
                            onChange={(e) =>
                              setVehicleInsuranceCompany(e.target.value)
                            }

                            // placeholder="Enter Registration No."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <Form_vehicle
                      claim={claim}
                      VehicleModel={VehicleModel}
                      setVehicleModel={setVehicleModel}
                      VehicleRegisteredNumber={VehicleRegisteredNumber}
                      setVehicleRegisteredNumber={setVehicleRegisteredNumber}
                      setEngineType={setEngineType}
                      EngineType={EngineType}
                      VehicleRegisteredOwner={VehicleRegisteredOwner}
                      setVehicleRegisteredOwner={setVehicleRegisteredOwner}
                      DateRegistration={DateRegistration}
                      setDateRegistration={setDateRegistration}
                      PUCNumber={PUCNumber}
                      setPUCNumber={setPUCNumber}
                      TransferDate={TransferDate}
                      setTransferDate={setTransferDate}
                      EngineNumber={EngineNumber}
                      setEngineNumber={setEngineNumber}
                      AddedBy={AddedBy}
                      setAddedBy={setAddedBy}
                      IssuingAuthority={IssuingAuthority}
                      setIssuingAuthority={setIssuingAuthority}
                      LicenseNumber={LicenseNumber}
                      setLicenseNumber={setLicenseNumber}
                      LicenseType={LicenseType}
                      setLicenseType={setLicenseType}
                      VehicleChassisNumber={VehicleChassisNumber}
                      setVehicleChassisNumber={setVehicleChassisNumber}
                      VehicleFuelType={VehicleFuelType}
                      setVehicleFuelType={setVehicleFuelType}
                      // New Fields
                      setVehicleClassDescription={setVehicleClassDescription}
                      setMakerDesc={setMakerDesc}
                      setMakerModel={setMakerModel}
                      setManufactureMonthYear={setManufactureMonthYear}
                      setVehicleGvw={setVehicleGvw}
                      setCubicCapacity={setCubicCapacity}
                      setVehicleSeatingCapacity={setVehicleSeatingCapacity}
                      setVehiclePermanentAddress={setVehiclePermanentAddress}
                      setFitUpto={setFitUpto}
                      setPasiaModelCode={setPasiaModelCode}
                      setRcInsuranceComp={setRcInsuranceComp}
                      setRcInsuranceUpto={setRcInsuranceUpto}
                      setRcVehicleType={setRcVehicleType}
                      setBancsModelCode={setBancsModelCode}
                      setBancsMakeCode={setBancsMakeCode}
                      setBancsSubtypeCode={setBancsSubtypeCode}
                      setBancsBodyType={setBancsBodyType}
                      setBancsVehicleClass={setBancsVehicleClass}
                      setBancsVehicleSegment={setBancsVehicleSegment}
                      setRcRtoCode={setRcRtoCode}
                      VehicleClassDescription={VehicleClassDescription}
                      MakerDesc={MakerDesc}
                      MakerModel={MakerModel}
                      ManufactureMonthYear={ManufactureMonthYear}
                      VehicleGvw={VehicleGvw}
                      CubicCapacity={CubicCapacity}
                      VehicleSeatingCapacity={VehicleSeatingCapacity}
                      VehiclePermanentAddress={VehiclePermanentAddress}
                      FitUpto={FitUpto}
                      PasiaModelCode={PasiaModelCode}
                      RcInsuranceComp={RcInsuranceComp}
                      RcInsuranceUpto={RcInsuranceUpto}
                      RcRegisteredAt={RcRegisteredAt}
                      RcVehicleType={RcVehicleType}
                      BancsModelCode={BancsModelCode}
                      BancsMakeCode={BancsMakeCode}
                      BancsSubtypeCode={BancsSubtypeCode}
                      BancsBodyType={BancsBodyType}
                      BancsVehicleClass={BancsVehicleClass}
                      BancsVehicleSegment={BancsVehicleSegment}
                      RcRtoCode={RcRtoCode}
                      PermanentAddress={PermanentAddress}
                      setPermanentAddress={setPermanentAddress}
                      setVehicleRegistedAt={setVehicleRegistedAt}
                      VehicleRegistedAt={VehicleRegistedAt}
                      ClassOfVehicle={ClassOfVehicle}
                      setClassOfVehicle={setClassOfVehicle}

                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default Form;
