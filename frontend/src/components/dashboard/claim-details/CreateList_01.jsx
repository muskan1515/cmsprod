import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const CreateList_01 = ({
  claim,
  InsuredName,
  RegisteredNumber,
  subType,
  InsuredMobileNo1,
  ClaimNumber,
  InsuredMailAddress,
  requestType

}) => {

  const formatDate = (val) => {
    const date = new Date(val);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };
  
  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="row">
            <table className="m-1" style={{ border: "1px solid grey" }}>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      Name
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      {claim.InsuredName}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Phone
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      {claim.InsuredMobileNo1}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-2 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Email
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-10 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      {claim.InsuredMailAddress}
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-7 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Registration No.
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                     {claim.VehicleRegisteredNumber}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Insurer ClaimID
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      {claim.ClaimNumber}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Status
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      Not Started
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      Survey Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      {subType}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Intimation Date
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      {formatDate(claim.ClaimAddedDateTime)}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Request Type
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      SPOT
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-8 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      Endorsement Doc.
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    ></label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                      }}
                    >
                      SPOC Name
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      Estimate Amount
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-start"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      SPOC Name
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                      Estimate Amount
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

export default CreateList_01;
