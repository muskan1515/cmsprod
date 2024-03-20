import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

function ExcelTable({ allRows }) {
  const [isExportClicked, setIsExportClicked] = useState(false);

  function convertToIST(utcTimestamp) {
    const utcDate = new Date(utcTimestamp);
    const istDate = new Date(
      utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedISTDateTime = istDate.toLocaleString("en-US", options);
    return formattedISTDateTime;
  }

  function exportToExcel() {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "S.No.",
        "Ref No.",
        "Policy No.",
        "Row No.",
        "Veh. No.",
        "Insured",
        "Insured GST No.",
        "Survey Type",
        "Date Of Information",
        "Date of Survey",
        "Estimate Amt.",
        "Assessed Amt.",
        "TAT",
        "Remarks",
        "Bill No.",
        "Bill Total",
        "Bill Date",
      ],
      ...allRows.map((res, index) => [
        index + 1,
        res.ReferenceNo,
        res.PolicyNumber,
        res.ClaimNumber,
        res.RegisteredNumber,
        res.Insured,
        res.InsuredGSTNumber,
        res.SurveyType,
        convertToIST(res.DateOfInformation),
        convertToIST(res.DateOfSurvey),
        res.EstimateAmt,
        res.AssessedAmt,
        0, // TAT
        res.Remarks,
        res.BillNo,
        res.BillTotal,
        convertToIST(res.BillDate),
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "table.xls");
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-lg-12 text-end">
          <button
            className="download-table-xls-button btn btn-primary mb-1"
            onClick={exportToExcel}
          >
            Export to Excel
          </button>
        </div>
        {isExportClicked && (
          <table className="table" id="table-to-xls">
            <thead className="thead-dark">
              <tr>
                <th>S.No.</th>
                <th>Ref No.</th>
                <th>Policy No.</th>
                <th>Row No.</th>
                <th>Veh. No.</th>
                <th>Insured</th>
                <th>Insured GST No.</th>
                <th>Survey Type</th>
                <th>Date Of Information</th>
                <th>Date of Survey</th>
                <th>Estimate Amt.</th>
                <th>Assessed Amt.</th>
                <th>TAT</th>
                <th>Remarks</th>
                <th>Bill No.</th>
                <th>Bill Total</th>
                <th>Bill Date</th>
              </tr>
            </thead>
            <tbody>
              {allRows.map((res, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{res.ReferenceNo}</td>
                  <td>{res.PolicyNumber}</td>
                  <td>{res.ClaimNumber}</td>
                  <td>{res.RegisteredNumber}</td>
                  <td>{res.Insured}</td>
                  <td>{res.InsuredGSTNumber}</td>
                  <td>{res.SurveyType}</td>
                  <td>{convertToIST(res.DateOfInformation)}</td>
                  <td>{convertToIST(res.DateOfSurvey)}</td>
                  <td>{res.EstimateAmt}</td>
                  <td>{res.AssessedAmt}</td>
                  <td>0</td>
                  <td>{res.Remarks}</td>
                  <td>{res.BillNo}</td>
                  <td>{res.BillTotal}</td>
                  <td>{convertToIST(res.BillDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ExcelTable;
