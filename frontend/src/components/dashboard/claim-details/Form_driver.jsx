import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const Form_driver = ({
  claim,
  DriverName,
  setDriverName,
  DriverAddedDate,
  setDriverAddedDate,
  Verification,
  setVerification,
  LicenseNumber,
  setLicenseNumber,
  setLicenseType,
  LicenseType,
  IssuingAuthority,
  setIssuingAuthority,

  onSaveHandler,

  FatherName,
  setFatherName,
  Gender,
  setGender,
  BloodGroup,
  setBloodGroup,
  setAddress,
  Address,
  setRtoName,
  RtoName,
  Mobile,
  setMobile,
  ValidUpto,
  setValidUpto,
  Vov,
  setVov,
  setPht,
  Pht,
  Photo,
  setPhoto,
  DateOfBirth,
  setDateOfBirth,
  setDateOfIssue,
  DateOfIssue,
  setIsDriverDetailsFetched,

}) => {
  const formatDate = (val) => {
    const date = new Date(val);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };

  const statusOptions = [
    {
      id: 1,
      value: "Claim Appointment",
    },
    {
      id: 2,
      value: "Estimate Approval Pending",
    },
    {
      id: 3,
      value: "Vehicle Under repair",
    },
    {
      id: 4,
      value: "Invoice Approval Pending",
    },
    {
      id: 5,
      value: "Surveyor Report Pending",
    },
    {
      id: 6,
      value: "Hard Copies Pending",
    },
    {
      id: 7,
      value: "Soft Copy Completed",
    },
    {
      id: 8,
      value: "Payment Pending",
    },
    {
      id: 9,
      value: "Settled Cases",
    },
    {
      id: 10,
      value: "Withdrawl/Rejected",
    },
    {
      id: 11,
      value: "More Info Required",
    },
    {
      id: 12,
      value: "My Claims",
    },
  ];

  const checkStatus = (val) => {
    let status = "";
    statusOptions.map((stat, index) => {
      if (String(stat.id) === String(val)) status = stat.value;
    });
    return status;
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
                      className="col-lg-6 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Name
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
                      {DriverName}
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
                      Added Date
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
                      {DriverAddedDate}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-7 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Type of Verification
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {Verification}
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
                      DL No.
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-6 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >{LicenseNumber}</label>
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
                      Father Name
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
                      {FatherName}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-7 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Gender
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {Gender}
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
                      {IssuingAuthority}
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
                      {claim?.driverDetails?.LicenseNumber}
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
                      {LicenseType}
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
                      Blood Group
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
                      {BloodGroup}
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
                      Mobile
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
                      {Mobile}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-7 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Address
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {Address}
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
                      Date Of Birth
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
                      {DateOfBirth}
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
                      RTO Name
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
                      {RtoName}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-7 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Issued Date
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {DateOfIssue}
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
                      Valid Upto
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
                      {ValidUpto}
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
                      Cov
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
                      {Vov}
                    </label>
                  </div>
                </td>
                <td style={{ border: "1px solid grey", padding: "3px" }}>
                  <div className="row">
                    <label
                      htmlFor=""
                      className="col-lg-7 text-color"
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Photo
                    </label>
                    <label
                      htmlFor=""
                      className="col-lg-5 text-color text-end"
                      style={{
                        color: "#1560bd",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >{Photo}</label>
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
                      Modified Date
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
                      {claim?.driverDetails?.ModifiedDate
                        ? formatDate(claim?.driverDetails?.ModifiedDate)
                        : ""}
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
                      Insurer ClaimID
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
                      {claim?.claimDetails?.ClaimNumber}
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
                      Status
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
                      {checkStatus(claim?.claimStatus?.Status)}
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

export default Form_driver;
