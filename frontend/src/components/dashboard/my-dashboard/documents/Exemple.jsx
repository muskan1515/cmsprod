import Link from "next/link";
import SmartTable from "./SmartTable";

const headCells = [
  {
    id: "sno",
    numeric: false,
    label: "#",
    width: 10,
  },
  {
    id: "dep",
    numeric: false,
    label: "Dep%",
    width: 10,
  },
  {
    id: "item_name",
    numeric: false,
    label: "Item Name",
    width: 150,
  },
  {
    id: "hsh_code",
    numeric: false,
    label: "HSH Code",
    width: 100,
  },
  {
    id: "remark",
    numeric: false,
    label: "Remark",
    width: 100,
  },
  {
    id: "estimate",
    numeric: false,
    label: "Estimate",
    width: 100,
  },
  {
    id: "assessed",
    numeric: false,
    label: "Assessed",
    width: 100,
  },
  {
    id: "qe_qa",
    numeric: false,
    label: "QE-QA",
    width: 100,
  },
  {
    id: "bill_sr",
    numeric: false,
    label: "Bill Sr.",
    width: 100,
  },
  {
    id: "gst",
    numeric: false,
    label: "GST%",
    width: 100,
  },
  {
    id: "total",
    numeric: false,
    label: "Total",
    width: 100,
  },
  {
    id: "type",
    numeric: false,
    label: "Type",
    width: 100,
  },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "Request Type",
  //   width: 100,
  // },
  // {
  //   id: "serial",
  //   numeric: false,
  //   label: "Insurer Claim ID.",
  //   width: 100,
  // },
];

const data = [
  {
    _id: "6144145976c7fe",
    sno: "1",
    dep: "0",
    item_name: (
      <select
        style={{ marginTop: "-5px" }}
        className="selectpicker form-select"
        data-live-search="true"
        data-width="100%"
      >
        <option data-tokens="Status1">Regular</option>
        <option data-tokens="Status2">Add on Policy</option>
        <option data-tokens="Status3">Add on Policy(Not Effective)</option>
      </select>
    ),
    hsh_code: (
      <input
        className="form-control"
        type="text"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
    remark: (
      <select
        style={{ marginTop: "-5px" }}
        className="selectpicker form-select"
        data-live-search="true"
        data-width="100%"
      >
        <option data-tokens="Status1">Regular</option>
        <option data-tokens="Status2">Add on Policy</option>
        <option data-tokens="Status3">Add on Policy(Not Effective)</option>
      </select>
    ),
    estimate: (
      <input
        className="form-control"
        type="text"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
    assessed: (
      <input
        className="form-control"
        type="text"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
    qe_qa: "01-02",
    bill_sr: "1",
    gst: (
      <input
        className="form-control"
        type="text"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
    total: (
      <input
        className="form-control"
        type="text"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
    type: "Plastic",
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
];

export default function Exemple() {
  return <SmartTable title="" data={data} headCells={headCells} />;
}