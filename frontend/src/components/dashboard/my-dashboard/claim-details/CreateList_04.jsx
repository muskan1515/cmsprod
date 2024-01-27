import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const CreateList_04 = ({
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
                      className="col-lg-4 text-color"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",
                        marginRight: "50px",
                      }}
                    >
                      Driver Name
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
                      {claim?.DriverName}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                        marginRight: "50px",
                      }}
                    >
                      Driver Date of Birth
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
                      {formatDate(claim.DateOfBirth)}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-2 text-color"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                        marginRight: "50px",
                      }}
                    >
                      Type of Verification
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
                      {claim.DriverTypeOfVerification}
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
                        fontSize:"15px",
                        fontWeight:"bold",

                        marginRight: "50px",
                      }}
                    >
                      Date of issue
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize:"15px",
                        fontWeight:"bold",
                      }}
                    >
                     {formatDate(claim.DateOfIssue)}
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
                        fontSize:"15px",
                        fontWeight:"bold",

                        marginRight: "50px",
                      }}
                    >
                     Added Date
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
                      {formatDate(claim.DriverAddedDate)}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-4 text-color"
                      style={{
                        color: "black",
                        fontSize:"15px",
                        fontWeight:"bold",

                        marginRight: "50px",
                      }}
                    >
                      Modified Date
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
                     {formatDate(claim?.DriverModifiedDate)}
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

export default CreateList_04;
