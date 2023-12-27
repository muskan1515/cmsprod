import SmartTable from "./SmartTable";

const headCells = [
  {
    id: "email",
    numeric: false,
    label: "PB Reference ID",
    width: 200,
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
    width: 250,
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
    width: 150,
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
    width: 200,
  },
  {
    id: "message",
    numeric: false,
    label: "Officer",
    width: 150,
  },
  {
    id: "message",
    numeric: false,
    label: "Request Type",
    width: 150,
  },
  {
    id: "serial",
    numeric: false,
    label: "Insurer Claim ID.",
    width: 150,
  },
];

const data = [
  {
    _id: "6144145976c7fe",
    email: "minageres123@gmail.com",
    name: "Mina",
    phone: "+9617099995114",
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

export default function Exemple() {
  return <SmartTable title="My Claims" data={data} headCells={headCells} />;
}
