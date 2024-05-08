import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

function ExportToExcel({ 
  RegionType,
  setRegionType, 
  allRows 
}) {
  const [isExportClicked, setIsExportClicked] = useState(false);
  const [dataRows,setDataRows]=useState([]);

  useEffect(()=>{
    let data = [];
    allRows.map((row,index)=>{
      const isChandigarh = String(row.ReferenceNo).includes("CHD") && String(RegionType) === "Chandigarh";
      const isDelhi = String(row.ReferenceNo).includes("DLH") && String(RegionType) === "Delhi";
      const isJodhpur = String(row.ReferenceNo).includes("JDH") && String(RegionType) === "Jodhpur";

      if(String(RegionType) === "All" || isChandigarh || isDelhi ||isJodhpur){
        data.push(row)
      }
      
    })
    setDataRows(data);
    console.log("dataa",data,RegionType)
  },[allRows,RegionType])

  function formatDate(dateString) {
    if(dateString === "" || dateString === null  || dateString === "undefined"){
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
        "Veh. No.",
        "Insured",
        "Insurer GST No.",
        "Survey Type",
        "Date Of Intimation",
        "Date of Survey",
        "Estimate Amt.",
        "Assessed Amt.",
        "Date Of Submit",
        "TAT",
        "Remarks",
        "Bill No.",
        "Bill Total",
        "Bill Date",
      ],
      ...dataRows.map((res, index) => [
        index + 1,
        res.ReferenceNo,
        res.PolicyNumber,
        res.RegisteredNumber,
        res.InsuredName,
        res.GST_No,
        res.SurveyType,
        formatDate(res.DateOfIntimation),
        formatDate(res.DateOfSurvey),
        addCommasToNumber(res.EstimateAmt),
        addCommasToNumber(res.AssessedAmt),
        formatDate(res.BillDate),
        res.TAT, // TAT
        res.Remarks,
        res.BillNo !== "undefined" ? res.BillNo : "-",
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
              {console.log("exportTAT",row.TAT)}
              <tr>
                <th>S.No.</th>
                <th>Ref No.</th>
                <th>Policy No.</th>
                <th>Veh. No.</th>
                <th>Insured</th>
                <th>Insurer GST No.</th>
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
              {dataRows.map((res, index) => (
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
                  <td>{res.TAT}</td>
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

export default ExportToExcel;
