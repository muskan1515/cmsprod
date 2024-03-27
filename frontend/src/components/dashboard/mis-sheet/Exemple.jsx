import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    label: "Date Of Intimation",
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
    id: "date_of_submit",
    numeric: false,
    label: "Date Of Submit",
    width: 150,
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
  console.log('allInsurer---',allInsurer)
  const [updatedData, setUpdatedData] = useState([]);
  let tempData = [];
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [finalRegion,setFinalRegion]=useState("");
  const [changeInRegion,setChangeInRegion]=useState(false);
  
  const [InsurerType,setInsurerType]=useState("United India Insurance");
  const [RegionType,setRegionType]=useState("");
  const sortObjectsByOrderIdDescending = (data) => {
    return data.sort((a, b) => b.doi - a.doi);
  };

  const changeHandler = () => {
    setStartDate(start);
    setEndDate(end);
    if(changeInRegion){
      setFinalRegion(RegionType);
      setChangeInRegion(false);
    }
  };

  const reloadHandler = () => {
    setStartDate("");
    setEndDate("");
  };

  const getRegionByReferenceNo=(referenceNo,Region)=>{


    if(RegionType === ""){
      return true;
    }
    const defaultRegion=referenceNo.split("/")[0];
    if(String(defaultRegion) === "DLH" && String(Region) === "Delhi")
     return true;
    if(String(defaultRegion) === "CHD" && String(Region) === "Chandigarh")
     return true;
    if(String(defaultRegion) === "JDH" && String(Region) === "Jodhpur")
     return true;
    return false;
  }

  function addCommasToNumber(number) {
    if (Number(number) <= 100 || number === undefined) return number;
    return number.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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

  const formatDateUpdated = (dateString) => {
    if(dateString === null || dateString === undefined || !dateString || String(dateString) === "undefined"){
      return "-"
    }
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear().toString().slice(-4); // Get last two digits of the year

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  useEffect(() => {
    toast.loading("Fetching the information!!", {
      // position: toast.POSITION.BOTTOM_LEFT,
      className: "toast-loading-message",
    });
    allRows?.map((row, index) => {
      const today = new Date();
      const addedDate = new Date(row.DateOfIntimation);
      const tatInDays = Math.floor((today - addedDate) / (1000 * 60 * 60 * 24));
      
      
      const insurerTypeLowerCase = (InsurerType || '').toLowerCase(); // Lowercase insurer type
      const insuranceCompanyNameAddressLowerCase = (row.InsuranceCompanyNameAddress || '').toLowerCase(); // Lowercase InsuranceCompanyNameAddress

      // Extracting the first two words of insurer type
      const firstTwoWordsOfInsurerType = insurerTypeLowerCase.split(' ').slice(0, 2).join(' ');

      const isShow = (
        // Checking if the first two words of insurer type are present in InsuranceCompanyNameAddress
        insuranceCompanyNameAddressLowerCase.includes(firstTwoWordsOfInsurerType) &&
        getRegionByReferenceNo(row.ReferenceNo,finalRegion)
      );
      if(isShow){
      const updatedRow = {
        sno: index + 1,
        ref_no: row.ReferenceNo,
        policy_no: row.PolicyNumber,
        veh_no: row.RegisteredNumber,
        insured: row.InsuredName,
        insured_gst_no: row.GST_No,
        survey_type:row.SurveyType,
        doi: formatDateUpdated(row.DateOfIntimation),
        date_of_survey: formatDateUpdated(row.DateOfSurvey),
        estimate_amt: addCommasToNumber(row.EstimateAmt),
        assessed_amt: addCommasToNumber(row.AssessedAmt),
        date_of_submit: formatDateUpdated(row.date_of_survey),
        tat: tatInDays,
        remarks: row.Remarks,
        bill_no: row.BillNo,
        bill_total: addCommasToNumber(row.BillTotal),
        bill_date: formatDateUpdated(row.BillDate),
      };
      tempData.push(updatedRow);
    }
    });
    setUpdatedData(tempData);
    toast.dismiss();
    // toast.success("Successfully added");
    toast.success("Fetched  Successfully !", {
      // position: toast.POSITION.BOTTOM_LEFT,
      className: "toast-loading-message",
    });
  }, [allRows,InsurerType,finalRegion]);


  
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
      RegionType={RegionType}
      setRegionType={setRegionType}
      DateType={DateType}
      setDateType={setDateType}
      changeInRegion={changeInRegion}
      setChangeInRegion={setChangeInRegion}
      allInsurer={allInsurer}
      headCells={headCells}
    />
  );
}
