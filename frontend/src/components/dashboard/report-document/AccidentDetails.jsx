import React from "react";
import { addVariables } from "./ContentFile";

const AccidentDetails = ({ allInfo }) => {
  function removeHtmlTags(html) {
    return html?.replace(/<(\/?[^>]+)>/g, function (match, p1) {
      return p1?.startsWith("/") ? "</b>" : "<b>";
    });
  }

  return (
    <div>
      <h6 className="text-dark">CAUSE & NATURE OF ACCIDENT :</h6>
      <span
        dangerouslySetInnerHTML={{
          __html: removeHtmlTags(
            addVariables(allInfo?.otherInfo[0]?.CauseOfAccident, allInfo)
          ),
        }}
      ></span>
      <div
        style={{
          border: "1px solid black",
          marginBottom: "5px",
          marginTop: "5px",
        }}
      ></div>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ width: "36%" }}>
            <span htmlFor="" className="text-dark fw-bold">
              POLICE ACTION
            </span>
          </td>
          <td>
            <span>:</span>
          </td>
          <td>
            <span> {allInfo?.otherInfo[0]?.PoliceAction}</span>
          </td>
        </tr>
      </table>
      <div
        style={{
          border: "1px solid black",
          marginBottom: "5px",
          marginTop: "5px",
        }}
      ></div>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ width: "36%" }}>
            <span htmlFor="" className="text-dark fw-bold">
              DETAILS OF LOAD / PASSENGER
            </span>
          </td>
          <td>
            <span>:</span>
          </td>
          <td>
            <span> {allInfo?.otherInfo[0]?.DetailsOfLoads}</span>
          </td>
        </tr>
      </table>
      <div
        style={{
          border: "1px solid black",
          marginBottom: "5px",
          marginTop: "5px",
        }}
      ></div>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ width: "36%" }}>
            <span htmlFor="" className="text-dark fw-bold">
              THIRD PARTY LOSS/ INJURIES
            </span>
          </td>
          <td>
            <span>:</span>
          </td>
          <td>
            <span> {allInfo?.otherInfo[0]?.ThirdPartyLoss}</span>
          </td>
        </tr>
      </table>
      <div
        style={{
          border: "1px solid black",
          marginBottom: "5px",
          marginTop: "5px",
        }}
      ></div>
    </div>
  );
};

export default AccidentDetails;
