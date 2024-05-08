import React, { useEffect } from "react";
import { useState } from "react";

import {
  calculateLabourDepreciations,
  calculateTotalPaintingEstimate,
  getFirstPaintingPos,
  calculateTotalPaintingAssessed,
  calculateGSTNoGSTLabour,
  addCommasToNumber,
  getTotalLabourEstimate,
  getTotalLabourAssessedSum,
  getTotalLabourAssessedGSTValuess,
  roundOff,
} from "./functions/LabourRepairsDetailsFunctions";

const LabourRepairsDetails = ({ allInfo }) => {
  const [allGST, setGST] = useState([]);
  const [noGST, setNoGST] = useState([]);

  useEffect(() => {
    let array = [],
      array2 = [];
    const labours = allInfo?.labourDetails;
    labours?.map((part, index) => {
      if (Number(part.JobType) === 0) {
        const newRow = {
          ...part,
          pos: index + 1,
        };
        array.push(newRow);
      } else {
        const newRow = {
          ...part,
          pos: index + 1,
        };
        array2.push(newRow);
      }
    });
    setNoGST(array);
    setGST(array2);
  }, [allInfo]);

  return (
    <div className="" style={{ marginTop: "" }}>
      <h5 className="text-dark">LABOUR & REPAIRS :</h5>
      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid black", padding: "10px" }}>S.No</th>
          <th style={{ border: "1px solid black", padding: "10px" }}>SAC</th>
          <th style={{ border: "1px solid black", padding: "10px" }}>
            Bill S.No.
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Labour Description
          </th>
          <th style={{ border: "1px solid black", padding: "10px" }}>
            Estimated
          </th>
          <th style={{ border: "1px solid black", padding: "10px" }}>
            Assessed
          </th>
        </tr>

        {calculateGSTNoGSTLabour(allInfo).nonPainting > 0 && (
          <>
            {noGST?.map((labour, index) => {
              return labour.LabourIsActive === 1 &&
                String(labour.JobType) === "0" ? (
                <tr>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {labour.pos}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {labour.SAC}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {labour.BillSr}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {labour.Description}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {roundOff(labour.Estimate)}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {roundOff(labour.Assessed)}
                  </td>
                </tr>
              ) : null;
            })}
          </>
        )}

        {calculateGSTNoGSTLabour(allInfo).Painting > 0 && (
          <>
            <tr>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {getFirstPaintingPos(allInfo)}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}></td>
              <td style={{ border: "1px solid black", padding: "5px" }}></td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                100% Painting for :
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {roundOff(calculateTotalPaintingEstimate(allInfo))}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {roundOff(calculateTotalPaintingAssessed(allInfo))}
              </td>
            </tr>
            {allGST?.map((labour, index) => {
              return labour.LabourIsActive === 1 && labour.JobType === 1 ? (
                <tr>
                  <td
                    style={{ border: "1px solid black", padding: "5px" }}
                  ></td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {labour.SAC}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {labour.BillSr}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <label>
                      {labour.Description} {"    "}
                    </label>
                    <label>
                      {labour.Estimate} {"-"} {labour.Assessed}
                    </label>
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ---
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ---
                  </td>
                </tr>
              ) : null;
            })}
          </>
        )}

        <tr>
          <td
            rowSpan={4}
            style={{ border: "1px solid black", padding: "5px" }}
          ></td>
          <td
            colSpan={3}
            style={{
              borderTop: "1px solid black",
              padding: "10px",
              textAlign: "end",
              fontWeight: "bold",
            }}
          >
            Sub Total Labour Charges : ₹ <br />
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(roundOff(getTotalLabourEstimate(allInfo)))}
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(roundOff(getTotalLabourAssessedSum(allInfo)))}
          </td>
        </tr>
        <tr>
          <td
            rowSpan={3}
            style={{ borderBottom: "1px solid black", padding: "5px" }}
          ></td>
          <td
            colSpan={2}
            style={{
              padding: "10px",
              textAlign: "end",
              fontWeight: "bold",
            }}
          >
            Less:Depreciations : <br />
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>0</td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {String(allInfo?.otherInfo[0]?.PolicyType) === "Regular"
              ? addCommasToNumber(
                  roundOff(calculateLabourDepreciations(allInfo))
                )
              : 0}
          </td>
        </tr>
        <tr>
          <td
            rowSpan={3}
            style={{ borderBottom: "1px solid black", padding: "5px" }}
          ></td>
          <td
            colSpan={1}
            style={{
              padding: "10px",
              fontWeight: "bold",
              textAlign: "end",
            }}
          >
            Add : GST on ₹{" "}
            {addCommasToNumber(
              roundOff(
                getTotalLabourAssessedSum(allInfo) -
                  (String(allInfo?.otherInfo[0]?.PolicyType) === "Regular"
                    ? calculateLabourDepreciations(allInfo)
                    : 0)
              )
            )}{" "}
            @ 18.00% : <br />
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>0</td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(
              roundOff(getTotalLabourAssessedGSTValuess(allInfo))
            )}
          </td>
        </tr>
        <tr>
          <td
            colSpan={1}
            style={{
              borderBottom: "1px solid black",
              padding: "10px",
              textAlign: "end",
              fontWeight: "bold",
            }}
          >
            Total Labour Charges : ₹
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(Math.round(getTotalLabourEstimate(allInfo)))}
          </td>
          <td style={{ border: "1px solid black", padding: "5px" }}>
            {addCommasToNumber(
              Math.round(
                getTotalLabourAssessedSum(allInfo) -
                  (String(allInfo?.otherInfo[0]?.PolicyType) === "Regular"
                    ? calculateLabourDepreciations(allInfo)
                    : 0) +
                  getTotalLabourAssessedGSTValuess(allInfo)
              )
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LabourRepairsDetails;
