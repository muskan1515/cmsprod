import React, { useEffect, useState } from "react";
import {
  addCommasToNumber,
  getTotalEvaluationOfAssessedForNewParts,
  getTotalLabourEstimate,
  getTotalLabourAssessedGSTValuess,
  calculateLabourDepreciations,
  getSummaryTotalWithLessExcess,
  getSummaryTotalWithLessSalvage,
  getOverallTotalEstimateNewParts,
  roundOff,
  getTotalLabourAssessedSum,
} from './functions/SummaryOfAssessmentFunctions';
const SummaryOfAssessment = ({ allInfo }) => {
  const [allGSTType, setAllGSTType] = useState([]);

  const lessExcess = Number(allInfo?.summaryReport[0]?.LessExcess) || 0;
  const lessSalvage = Number(allInfo?.summaryReport[0]?.ExpectedSalvage) || 0;

  useEffect(() => {
    let array = [];
    const newParts = allInfo?.newPartsDetails;
    newParts?.map((part, index) => {
      let indexValue = -1;
      array?.map((temp, idx) => {
        if (String(temp.field) === String(part.NewPartsGSTPct)) {
          indexValue = idx;
        }
      });

      if (indexValue === -1) {
        const newField = {
          field: part.NewPartsGSTPct,
          value: 1,
        };
        array.push(newField);
      }
    });

    array.sort((a, b) => parseFloat(a.field) - parseFloat(b.field));
    setAllGSTType(array);
  }, [allInfo]);

  return (
    <div className="" style={{ marginTop: "20px" }}>
      <h5 className="text-dark">SUMMARY OF ASSESSMENT</h5>
      <table border={1} style={{ width: "100%" }}>
        <tr>
          <th
            style={{
              border: "1px solid black",
              paddingRight: "30px",
              paddingLeft: "20px",
            }}
          >
            PARTICULARS
          </th>
          <th
            style={{
              border: "1px solid black",
              paddingRight: "30px",
              paddingLeft: "20px",
            }}
          >
            ORIGINAL ESTIMATE
          </th>
          <th
            style={{
              border: "1px solid black",
              paddingRight: "30px",
              paddingLeft: "20px",
            }}
          >
            ASSESSED FOR
          </th>
        </tr>
        <tr>
          <td
            style={{
              paddingRight: "30px",
              paddingLeft: "20px",
              fontWeight: "bold",
            }}
          >
            Total Labour Charges
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(roundOff(getTotalLabourEstimate(allInfo)))}
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(
              Math.round(
                getTotalLabourAssessedSum(allInfo) -
                  calculateLabourDepreciations(allInfo) +
                  getTotalLabourAssessedGSTValuess(allInfo)
              )
            )}
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingRight: "30px",
              paddingLeft: "20px",
              fontWeight: "bold",
            }}
          >
            Total Cost of Parts
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(roundOff(getOverallTotalEstimateNewParts(allInfo,0)))}
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(
              roundOff(getTotalEvaluationOfAssessedForNewParts(allInfo))
            )}
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            // rowSpan={6}
            style={{
              borderTop: "1px solid black",
              padding: "5px",
              textAlign: "end",
            }}
          >
            <span style={{ fontWeight: "bold" }}> Total : ₹</span>
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(
              roundOff(
                getTotalLabourAssessedSum(allInfo) -
                  calculateLabourDepreciations(allInfo) +
                  getTotalLabourAssessedGSTValuess(allInfo) +
                  getTotalEvaluationOfAssessedForNewParts(allInfo)
              )
            )}
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            // rowSpan={6}
            style={{
              border: "none",
              padding: "5px",
              textAlign: "end",
              fontWeight: "bold",
            }}
          >
            Less : Excess : ₹<br />
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(roundOff(lessExcess))}
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            // rowSpan={6}
            style={{
              border: "none",
              padding: "5px",
              textAlign: "end",
              fontWeight: "bold",
            }}
          >
            <span style={{ fontWeight: "bold" }}> Total : ₹</span>
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(roundOff(getSummaryTotalWithLessExcess(allInfo,lessExcess)))}
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            // rowSpan={6}
            style={{
              border: "none",
              padding: "5px",
              textAlign: "end",
              fontWeight: "bold",
            }}
          >
            Less : Salvage : ₹
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(roundOff(lessSalvage))}
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            // rowSpan={6}
            style={{
              borderBottom: "1px solid black",
              padding: "5px",
              textAlign: "end",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Net Assessed Amount ₹</span>
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(Math.round(getSummaryTotalWithLessSalvage(allInfo,lessExcess,lessSalvage)))}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SummaryOfAssessment;
