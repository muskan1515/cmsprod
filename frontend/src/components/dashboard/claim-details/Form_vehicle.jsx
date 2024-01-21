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
  setVehicleFuelType
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
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginRight: "50px",
                      }}
                    >
                      Vehicle Model
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      { !VehicleModel
                        ? `${claim?.vehicleDetails?.VehicleMakeVariantModelColor},${claim?.vehicleDetails?.VehicleTypeOfBody}`
                        : VehicleModel}
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      Engine Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      EngineNumber
                        ? EngineNumber
                        : claim?.vehicleDetails?.VehicleEngineNumber
                    }
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      Registered Owner{" "}
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      RegisteredOwner
                        ? RegisteredOwner
                        : claim?.vehicleDetails?.VehicleRegisteredOwner
                    }
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      Date of Registration
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
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
                      className="col-lg-5 text-color"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      PUC Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      PUCNumber ? PUCNumber : claim?.vehicleDetails?.VehiclePucNumber
                    }
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      Transfer Date
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
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
                      className="col-lg-5 text-color"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginRight: "50px",
                      }}
                    >
                      Engine Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      EngineNumber
                        ? EngineNumber
                        : claim?.vehicleDetails?.VehicleEngineNumber
                    }
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      Added By
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {AddedBy ? AddedBy : claim?.vehicleDetails?.VehicleAddedBy}
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      Issuing Authority
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      IssuingAuthority
                        ? IssuingAuthority
                        : claim?.driverDetails?.IssuingAuthority
                    }
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      License Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >{
                      LicenseNumber
                        ? LicenseNumber
                        : claim?.driverDetails?.LicenseNumber
                    }</label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      License Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      LicenseType ? LicenseType : claim?.driverDetails?.LicenseType
                    }
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginRight: "50px",
                      }}
                    >
                      Chassis Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      VehicleChassisNumber
                        ? VehicleChassisNumber
                        : claim?.vehicleDetails?.VehicleChassisNumber
                    }
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
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      Fuel Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >{
                      VehicleFuelType
                        ? VehicleFuelType
                        : claim?.vehicleDetails?.VehicleFuelType
                    }</label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",

                        marginRight: "50px",
                      }}
                    >
                      License Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      LicenseType ? LicenseType : claim?.driverDetails?.LicenseType
                    }
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginRight: "50px",
                      }}
                    >
                      Chassis Number
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                    {
                      VehicleChassisNumber
                        ? VehicleChassisNumber
                        : claim?.vehicleDetails?.VehicleChassisNumber
                    }
                    </label>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_vehicle;
