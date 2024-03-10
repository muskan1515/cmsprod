import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect, useState } from "react";

const headCells = [
  {
    id: "sno",
    numeric: false,
    label: "S.No.",
    width: 10,
  },
  {
    id: "ref_no",
    numeric: false,
    label: "Ref No.",
    width: 150,
  },
  {
    id: "policy_no",
    numeric: false,
    label: "Policy No.",
    width: 150,
  },
  {
    id: "claim_no",
    numeric: false,
    label: "Row No.",
    width: 150,
  },
  {
    id: "veh_no",
    numeric: false,
    label: "Veh. No.",
    width: 150,
  },
  {
    id: "insured",
    numeric: false,
    label: "Insured",
    width: 100,
  },
  {
    id: "insured_gst_no",
    numeric: false,
    label: "Insured GST No.",
    width: 180,
  },
  {
    id: "survey_type",
    numeric: false,
    label: "Survey Type",
    width: 150,
  },
  {
    id: "doi",
    numeric: false,
    label: "Date Of Information",
    width: 240,
  },
  {
    id: "date_of_survey",
    numeric: false,
    label: "Date of Survey",
    width: 170,
  },
  {
    id: "estimate_amt",
    numeric: false,
    label: "Estimate Amt.",
    width: 170,
  },
  {
    id: "assessed_amt",
    numeric: false,
    label: "Assessed Amt.",
    width: 160,
  },
  {
    id: "tat",
    numeric: false,
    label: "TAT",
    width: 100,
  },
  {
    id: "remarks",
    numeric: false,
    label: "Remarks",
    width: 100,
  },
  {
    id: "bill_no",
    numeric: false,
    label: "Bill No.",
    width: 100,
  },
  {
    id: "bill_total",
    numeric: false,
    label: "Bill Total",
    width: 140,
  },
  {
    id: "bill_date",
    numeric: false,
    label: "Bill Date",
    width: 150,
  },
];



export default function Exemple({
  allRows,
  setStartDate,
  setEndDate,
  allInsurer,
  startDate,
  DateType,
  setDateType,
  endDate,
}) {
  const [updatedData, setUpdatedData] = useState([]);
  let tempData = [];
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  
  const [InsurerType,setInsurerType]=useState("United India Insurance");
  const sortObjectsByOrderIdDescending = (data) => {
    return data.sort((a, b) => b.doi - a.doi);
  };

  const changeHandler = () => {
    setStartDate(start);
    setEndDate(end);
  };

  const reloadHandler = () => {
    setStartDate("");
    setEndDate("");
  };

  function convertToIST(utcTimestamp) {
    const utcDate = new Date(utcTimestamp);

    // Convert to Indian Standard Time (IST)
    const istDate = new Date(
      utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    // Format IST date and time with hours, minutes, AM/PM
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedISTDateTime = istDate.toLocaleString("en-US", options);

    // Return the formatted IST date and time as a string
    return formattedISTDateTime;
  }

  useEffect(() => {
    allRows?.map((row, index) => {
      
      const isShow = (InsurerType && String(InsurerType) === String(row.InsuranceCompanyNameAddress)) ?
      true : InsurerType==="" || InsurerType === undefined? true : false;
      if(isShow){
      const updatedRow = {
        sno: index + 1,
        ref_no: row.ReferenceNo,
        policy_no: row.PolicyNumber,
        claim_no: row.ClaimNumber,
        veh_no: row.RegisteredNumber,
        insured: row.InsuredName,
        insured_gst_no: row.InsuredGSTNumber,
        doi: convertToIST(row.DateOfIntimation),
        date_of_survey: convertToIST(row.DateOfSurvey),
        estimate_amt: row.EstimateAmt,
        assessed_amt: row.AssessedAmt,
        tat: 0,
        remarks: row.Remarks,
        bill_no: row.BillNo,
        bill_total: row.BillTotal,
        bill_date: convertToIST(row.BillDate),
      };
      tempData.push(updatedRow);
    }
    });
    setUpdatedData(tempData);
  }, [allRows,InsurerType]);
  console.log(updatedData);
  return (
    <SmartTable
      title="MIS Sheet"
      data={sortObjectsByOrderIdDescending(updatedData)}
      changeHandler={changeHandler}
      setStart={setStart}
      setEnd={setEnd}
      start={start}
      reloadHandler={reloadHandler}
      end={end}
      InsurerType={InsurerType}
      setInsurerType={setInsurerType}
      DateType={DateType}
      setDateType={setDateType}
      allInsurer={allInsurer}
      headCells={headCells}
    />
  );
}
