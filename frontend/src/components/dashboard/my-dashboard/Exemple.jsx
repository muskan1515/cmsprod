import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect, useState } from "react";

const headCells = [
  {
    id: "reference_id",
    numeric: false,
    label: "PB Reference ID",
    width: 100,
  },
  {
    id: "policy_holder",
    numeric: false,
    label: "Policy Holder",
    width: 150,
  },
  {
    id: "policy_no",
    numeric: false,
    label: "Policy No.",
    width: 150,
  },
  {
    id: "registration_no",
    numeric: false,
    label: "Registration No.",
    width: 150,
  },
  {
    id: "city",
    numeric: false,
    label: "City",
    width: 100,
  },
  {
    id: "state",
    numeric: false,
    label: "State",
    width: 100,
  },
  {
    id: "assigned_garage",
    numeric: false,
    label: "Assigned Garage",
    width: 100,
  },
  {
    id: "case_age",
    numeric: false,
    label: "Case Age (Days)",
    width: 150,
  },
  {
    id: "case_age_insured",
    numeric: false,
    label: "Case Age (Insurer)",
    width: 150,
  },
  {
    id: "officer",
    numeric: false,
    label: "Officer",
    width: 100,
  },
  {
    id: "request_type",
    numeric: false,
    label: "Request Type",
    width: 100,
  },
  {
    id: "claim_id",
    numeric: false,
    label: "Insurer Claim ID.",
    width: 100,
  },
];

const data = [
  {
    _id: "6144145976c7fe",
    email: "minageres123@gmail.com",
    name: "Mina",
    phone: <Link href="/claim-details">9617099995114</Link>,
    subject: "test",
    message: "ahlannn",
    date: "2021-09-17 19:10:50",
    serial: "123",
  },
  //   {
  //     _id: "6143989f9d87cc",
  //     email: "as@a.com",
  //     name: "as",
  //     phone: "+9617646699991",
  //     subject: "as",
  //     message: "as",
  //     date: "2021-09-16 22:18:31",
  //   },
  //   {
  //     _id: "614397edc9177d8c8",
  //     email: "amine@amine.com",
  //     name: "amine",
  //     phone: "+334343439393993",
  //     subject: "1234",
  //     message: "3434",
  //     date: "2021-09-16 22:15:57",
  //   },
  //   {
  //     _id: "6143be67dfca4985c",
  //     email: "dominique.amine@gmail.com",
  //     name: "Dominique",
  //     phone: "+96189904686",
  //     subject: "Dev ",
  //     message: "Ohmaga",
  //     date: "2021-09-16 21:33:04",
  //   },
  //   {
  //     _id: "61141e57a7dbd8a189e",
  //     email: "amineamine19961996@gmail.com",
  //     name: "amine amine",
  //     phone: "+96176776341",
  //     subject: "qw",
  //     message: "qw",
  //     date: "2021-08-11 22:00:39",
  //   },
];

export default function Exemple({claims}) {

  const [updatedData,setUpdatedData]=useState([]);
  let tempData = [];
  useEffect(()=>{
    claims?.map((claim, index) => {
     
      const tempGarage = claim?.AssignedGarage?.split(',').map(item => item.trim());
      // console.log(tempGarage);
      const updatedRow = {
        reference_id:claim.ReferenceID,
        policy_holder:claim.PolicyHolder,
        policy_no:<a href={`/claim-details?leadId=${claim.LeadID}`}>{claim.PolicyNo}</a>,
        registration_no:claim.RegistrationNo,
        city : tempGarage ? tempGarage[1] : "NA",
        state : tempGarage ? tempGarage[2] : "NA",
        assigned_garage: tempGarage ?tempGarage[0] : "NA",
        case_age :"Not assigned Yet",
        case_age_insured:"Not assigned Yet",
        officer:"Not assigned Yet",
        request_type:"Not assigned Yet",
        claim_id:"Not assigned Yet",

      };
      tempData.push(updatedRow);
    });
    setUpdatedData(tempData);
  

  },[claims]);
  console.log(updatedData);
  return <SmartTable title="My Claims" data={updatedData} headCells={headCells} />;
}
