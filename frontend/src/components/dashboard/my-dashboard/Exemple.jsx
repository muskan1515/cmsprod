import Link from "next/link";
import SmartTable from "./SmartTable";

const headCells = [
  {
    id: "serial_num",
    numeric: true,
    label: "S.No.",
    width: 50,
  },
  {
    id: "email",
    numeric: false,
    label: "PB Reference ID",
    width: 100,
  },
  {
    id: "name",
    numeric: false,
    label: "Policy Holder",
    width: 150,
  },
  {
    id: "phone",
    numeric: false,
    label: "Policy No.",
    width: 150,
  },
  {
    id: "subject",
    numeric: false,
    label: "Registration No.",
    width: 150,
  },
  {
    id: "message",
    numeric: false,
    label: "City",
    width: 100,
  },
  {
    id: "message",
    numeric: false,
    label: "State",
    width: 100,
  },
  {
    id: "message",
    numeric: false,
    label: "Assigned Garage",
    width: 100,
  },
  {
    id: "message",
    numeric: false,
    label: "Case Age (Days)",
    width: 150,
  },
  {
    id: "message",
    numeric: false,
    label: "Case Age (Insurer)",
    width: 150,
  },
  {
    id: "message",
    numeric: false,
    label: "Officer",
    width: 100,
  },
  {
    id: "message",
    numeric: false,
    label: "Request Type",
    width: 100,
  },
  {
    id: "serial",
    numeric: false,
    label: "Insurer Claim ID.",
    width: 100,
  },
];

const data = [
  {
    serial_num: "1",
    _id: "6144145976c7fe",
    email: "minageres123@gmail.com",
    name: "Mina",
    phone: <Link href="/claim-details">9617099995114</Link>,
    subject: "test",
    message: "ahlannn",
    date: "2021-09-17 19:10:50",
    serial: "123",
  },
];

export default function Exemple() {
  return <SmartTable title="My Claims" data={data} headCells={headCells} />;
}
