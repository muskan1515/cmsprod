import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const Form_vehicle = ({
  claim,
  VehicleModel,
  setVehicleModel,
  RegisteredNumber,
  setRegisteredNumber,
  setEngineType,
  EngineType,
  RegisteredOwner,
  setRegisteredOwner,
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
  
  VehicleClassDescription,
  MakerDesc,
  MakerModel,
  ManufactureMonth,
  VehicleGvw,
  VehicleCubicCap,
  VehicleSeatCap,
  VehiclePermanentAddress,
  fitUpto,
  RcPasiaModelCode,
  RcInsuranceComp,
  RcInsuranceUpto,
  RcRegisteredAt,
  RcBlacklistStatus,
  RcStatus,
  RcVehicleType,
  BancsModelCode,
  BancsMakeCode,
  BancsSubtypeCode,
  BancsBodyType,
  BancsVehicleClass,
  BancsVehicleSegment,
  RcRtoCode,
}) => {
  const formatDate = (val) => {
    const date = new Date(val);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };

  return (
    <>
      <div className="col-lg-12 m-2">
        <div className="row">
          <div className="row">
            <table className="m-1" style={{ border: "1px solid grey" }}>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <div className="col-lg-6">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          color: "black",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        Vehicle Model
                      </label>
                    </div>
                    <div className="col-lg-6 text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          color: "#1560bd",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        {!VehicleModel
                          ? `${claim?.vehicleDetails?.VehicleMakeVariantModelColor},${claim?.vehicleDetails?.VehicleTypeOfBody}`
                          : VehicleModel}
                      </label>
                    </div>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <div className="col-lg-6">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          color: "black",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        Engine Type
                      </label>
                    </div>
                    <div className="col-lg-6  text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          color: "#1560bd",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        {EngineNumber
                          ? EngineNumber
                          : claim?.vehicleDetails?.VehicleEngineNumber}
                      </label>
                    </div>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <div className="col-lg-6">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          color: "black",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        Registered Owner{" "}
                      </label>
                    </div>
                    <div className="col-lg-6  text-end">
                      <label
                        htmlFor=""
                        className="text-color"
                        style={{
                          color: "#1560bd",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        {RegisteredOwner
                          ? RegisteredOwner
                          : claim?.vehicleDetails?.VehicleRegisteredOwner}
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Date of Registration
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {formatDate(
                        DateRegistration
                          ? DateRegistration
                          : claim?.vehicleDetails?.VehicleDateOfRegistration
                      )}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      PUC Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {PUCNumber
                        ? PUCNumber
                        : claim?.vehicleDetails?.VehiclePucNumber}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Transfer Date
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {formatDate(
                        TransferDate
                          ? TransferDate
                          : claim?.vehicleDetails?.VehicleTransferDate
                      )}
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Engine Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {EngineNumber
                        ? EngineNumber
                        : claim?.vehicleDetails?.VehicleEngineNumber}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Added By
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {AddedBy
                        ? AddedBy
                        : claim?.vehicleDetails?.VehicleAddedBy}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Issuing Authority
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {IssuingAuthority
                        ? IssuingAuthority
                        : claim?.driverDetails?.IssuingAuthority}
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      License Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {LicenseNumber
                        ? LicenseNumber
                        : claim?.driverDetails?.LicenseNumber}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      License Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {LicenseType
                        ? LicenseType
                        : claim?.driverDetails?.LicenseType}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Chassis Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {VehicleChassisNumber
                        ? VehicleChassisNumber
                        : claim?.vehicleDetails?.VehicleChassisNumber}
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Vehicle No.
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {VehicleFuelType
                        ? VehicleFuelType
                        : claim?.vehicleDetails?.VehicleFuelType}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Registerd No.
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {RegisteredNumber
                        ? RegisteredNumber
                        : claim?.vehicleDetails?.RegisteredNumber}
                    </label>
                  </div>
                </td>
                {/* <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      License Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {LicenseType
                        ? LicenseType
                        : claim?.driverDetails?.LicenseType}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Chassis Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {VehicleChassisNumber
                        ? VehicleChassisNumber
                        : claim?.vehicleDetails?.VehicleChassisNumber}
                    </label>
                  </div>
                </td> */}
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_vehicle;
