import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

function ExcelTable({ allRows }) {
  const [isExportClicked, setIsExportClicked] = useState(false);

  function formatDate(dateString) {
    if(dateString === "" || dateString === null){
      return "-"
    }
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    const dateParts = new Date(dateString)
      .toLocaleDateString("en-GB", options)
      .split("/");
    const formattedDate =
      dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2];
    return formattedDate;
  }

  function addCommasToNumber(number) {
    if (Number(number) <= 100 || number === undefined) return number;
    return number.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        formatDate(res.DateOfIntimation),
        formatDate(res.DateOfSurvey),
        addCommasToNumber(res.EstimateAmt),
        addCommasToNumber(res.AssessedAmt),
        0, // TAT
        res.Remarks,
        res.BillNo,
        addCommasToNumber(res.BillTotal),
        formatDate(res.BillDate),
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
                <th>Veh. No.</th>
                <th>Insured</th>
                <th>Insured GST No.</th>
                <th>Survey Type</th>
                <th>Date Of Information</th>
                <th>Date of Survey</th>
                <th>Estimate Amt.</th>
                <th>Assessed Amt.</th>
                <th>Date Of Submit</th>
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
                  <td>{res.RegisteredNumber}</td>
                  <td>{res.InsuredName}</td>
                  <td>{res.GST_No}</td>
                  <td>{res.SurveyType}</td>
                  <td>{formatDate(res.DateOfIntimation)}</td>
                  <td>{formatDate(res.DateOfSurvey)}</td>
                  <td>{res.EstimateAmt}</td>
                  <td>{res.AssessedAmt}</td>
                  <td>{formatDate(res.BillDate)}</td>
                  <td>0</td>
                  <td>{res.Remarks}</td>
                  <td>{res.BillNo}</td>
                  <td>{res.BillTotal}</td>
                  <td>{formatDate(res.BillDate)}</td>
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
