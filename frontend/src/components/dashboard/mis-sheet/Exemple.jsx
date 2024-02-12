import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect, useState } from "react";

const headCells = [
  {
    id: "sno",
    numeric: false,
    label: "Sr.No",
    width: 50,
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
    label: "Claim No.",
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
    width: 100,
  },
  {
    id: "survey_type",
    numeric: false,
    label: "Survey Type",
    width: 100,
  },
  {
    id: "doi",
    numeric: false,
    label: "Date Of Information",
    width: 150,
  },
  {
    id: "date_of_survey",
    numeric: false,
    label: "Date of Survey",
    width: 150,
  },
  {
    id: "estimate_amt",
    numeric: false,
    label: "Estimate Amt.",
    width: 100,
  },
  {
    id: "assessed_amt",
    numeric: false,
    label: "Assessed Amt.",
    width: 100,
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
    width: 100,
  },
  {
    id: "bill_date",
    numeric: false,
    label: "Bill Date",
    width: 100,
  },
  {
    id: "s_feed",
    numeric: false,
    label: "S Feed",
    width: 100,
  },
];

const data = [
  {
    _id: "6144145976c7fe",
    sno: "1",
    ref_no: "65465",
    policy_no: <Link href="/claim-details">9617099995114</Link>,
    claim_no:"7675756",
    veh_no: "65756",
    insured: "ahlannn",
    insured_gst_no: "2765675",
    survey_type: "123",
    doi: "12/11/1111",
    date_of_survey: "11/22/1111",
    estimate_amt: "76567",
    assessed_amt: "765",
    tat: "ahlannn",
    remarks: "trtee",
    bill_no: "123",
    bill_total: "123",
    bill_date: "12/09/2023",
    s_feed: "Mina",
  },
  {
    _id: "6144145976c7fe",
    sno: "1",
    ref_no: "65465",
    policy_no: <Link href="/claim-details">9617099995114</Link>,
    claim_no:"7675756",
    veh_no: "65756",
    insured: "ahlannn",
    insured_gst_no: "2765675",
    survey_type: "123",
    doi: "12/11/1111",
    date_of_survey: "11/22/1111",
    estimate_amt: "76567",
    assessed_amt: "765",
    tat: "ahlannn",
    remarks: "trtee",
    bill_no: "123",
    bill_total: "123",
    bill_date: "12/09/2023",
    s_feed: "Mina",
  },
  {
    _id: "6144145976c7fe",
    sno: "1",
    ref_no: "65465",
    policy_no: <Link href="/claim-details">9617099995114</Link>,
    claim_no:"7675756",
    veh_no: "65756",
    insured: "ahlannn",
    insured_gst_no: "2765675",
    survey_type: "123",
    doi: "12/11/1111",
    date_of_survey: "11/22/1111",
    estimate_amt: "76567",
    assessed_amt: "765",
    tat: "ahlannn",
    remarks: "trtee",
    bill_no: "123",
    bill_total: "123",
    bill_date: "12/09/2023",
    s_feed: "Mina",
  },
  {
    _id: "6144145976c7fe",
    sno: "1",
    ref_no: "65465",
    policy_no: <Link href="/claim-details">9617099995114</Link>,
    veh_no: "65756",
    claim_no:"7675756",
    insured: "ahlannn",
    insured_gst_no: "2765675",
    survey_type: "123",
    doi: "12/11/1111",
    date_of_survey: "11/22/1111",
    estimate_amt: "76567",
    assessed_amt: "765",
    tat: "ahlannn",
    remarks: "trtee",
    bill_no: "123",
    bill_total: "123",
    bill_date: "12/09/2023",
    s_feed: "Mina",
  },
  {
    _id: "6144145976c7fe",
    sno: "1",
    ref_no: "65465",
    policy_no: <Link href="/claim-details">9617099995114</Link>,
    claim_no:"7675756",
    veh_no: "65756",
    insured: "ahlannn",
    insured_gst_no: "2765675",
    survey_type: "123",
    doi: "12/11/1111",
    date_of_survey: "11/22/1111",
    estimate_amt: "76567",
    assessed_amt: "765",
    tat: "ahlannn",
    remarks: "trtee",
    bill_no: "123",
    bill_total: "123",
    bill_date: "12/09/2023",
    s_feed: "Mina",
  },
];

export default function Exemple({}) {
  // const [updatedData,setUpdatedData]=useState([]);
  // let tempData = [];
  // useEffect(()=>{
  //   claims?.map((claim, index) => {

  //     const tempGarage = claim?.AssignedGarage?.split(',').map(item => item.trim());
  //     // console.log(tempGarage);
  //     const updatedRow = {
  //       reference_id:claim.ReferenceID,
  //       policy_holder:claim.PolicyHolder,
  //       policy_no:<a href={`/claim-details?leadId=${claim.LeadID}`}>{claim.PolicyNo}</a>,
  //       registration_no:claim.RegistrationNo,
  //       city : tempGarage ? tempGarage[1] : "NA",
  //       state : tempGarage ? tempGarage[2] : "NA",
  //       assigned_garage: tempGarage ?tempGarage[0] : "NA",
  //       case_age :"Not assigned Yet",
  //       case_age_insured:"Not assigned Yet",
  //       officer:"Not assigned Yet",
  //       request_type:"Not assigned Yet",
  //       claim_id:"Not assigned Yet",

  //     };
  //     tempData.push(updatedRow);
  //   });
  //   setUpdatedData(tempData);

  // },[claims]);
  // console.log(updatedData);
  return <SmartTable title="MIS Sheet" data={data} headCells={headCells} />;
}
