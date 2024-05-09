import React from "react";

import {
  changeFormat,
  calculateAge
} from "./functions/DriverParticularsFunction";
const DriverParticulars = ({ allInfo }) => {
  return (
    <div>
      <div className="d-flex gap-5">
        <h6 className="text-dark" style={{ color: "black" }}>
          DRIVER PARTICULARS :
        </h6>
        <span style={{ marginLeft: "119px" }}>
          {allInfo?.otherInfo[0]?.Remark}
        </span>
      </div>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ width: "36%" }} className="text-start">
            <span>(a) Name of Driver </span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span className="fw-bold text-dark">
              {" "}
              {allInfo?.otherInfo[0]?.DriverName}
              {String(allInfo?.otherInfo[0]?.Gender) === "Female"
                ? ` D/o ${allInfo?.otherInfo[0]?.FatherName}`
                : ` S/o ${allInfo?.otherInfo[0]?.FatherName}`}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "36%" }} className="">
            <span style={{ marginLeft: "20px" }}> Age</span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span>
              {" "}
              {allInfo?.otherInfo[0]?.DateOfBirth !== null
                ? calculateAge(allInfo)
                : "-"}{" "}
              old ({" "}
              {allInfo?.otherInfo[0]?.DateOfBirth
                ? changeFormat(allInfo?.otherInfo[0]?.DateOfBirth)
                : ""}
              )
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "36%" }} className="text-start">
            <span>(b) Motor Driver License Number </span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span className="fw-bold text-dark">
              {allInfo?.otherInfo[0]?.LicenseNumber}{" "}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "36%" }} className="text-start">
            <span style={{ marginLeft: "20px" }}>Date of Issue </span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span>
              {" "}
              {allInfo?.otherInfo[0]?.DateOfIssue
                ? changeFormat(allInfo?.otherInfo[0]?.DateOfIssue)
                : "-"}
            </span>
            <span style={{ marginLeft: "60px" }}>
              Valid upto (NTV) :{" "}
              {allInfo?.otherInfo[0]?.ValidUpto
                ? changeFormat(allInfo?.otherInfo[0]?.ValidUpto)
                : "-"}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "36%" }} className="text-start">
            <span style={{ marginLeft: "20px" }}>Valid from </span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span>
              {" "}
              {allInfo?.otherInfo[0]?.ValidFrom !== "undefined"
                ? changeFormat(allInfo?.otherInfo[0]?.ValidFrom)
                : "-"}
            </span>
            <span style={{ marginLeft: "118px" }}>
              Valid upto (TV) :{" "}
              {allInfo?.otherInfo[0]?.ValidFrom !== "undefined"
                ? changeFormat(allInfo?.otherInfo[0]?.ValidUntilTv)
                : "-"}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "36%" }} className="text-start">
            <span>(c) Issuing Authority </span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span> {allInfo?.otherInfo[0]?.IssuingAuthority}</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "36%" }} className="text-start">
            <span>(d) Type of License </span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span>{allInfo?.otherInfo[0]?.LicenseType}</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "36%" }} className="text-start">
            <span> (e) Badge Number</span>
          </td>
          <td style={{ width: "7%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "55%" }} className="text-start">
            <span> {allInfo?.otherInfo[0]?.BadgeNumber}</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DriverParticulars;
