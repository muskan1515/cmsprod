import Link from "next/link";
import SmartTable_01 from "./SmartTable_01";
import { useEffect, useState } from "react";
import { all } from "axios";

const headCells = [
  {
    id: "sno",
    numeric: false,
    label: "#",
    width: 10,
  },
  {
    id: "bill_sr",
    numeric: false,
    label: "Bill Sr.",
    width: 50,
  },
  {
    id: "description",
    numeric: false,
    label: "Description",
    width: 150,
  },
  {
    id: "sac",
    numeric: false,
    label: "SAC",
    width: 50,
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
    id: "gst",
    numeric: false,
    label: "GST%",
    width: 50,
  },

  // {
  //   id: "total",
  //   numeric: false,
  //   label: "Total Value",
  //   width: 100,
  // },
  // {
  //   id: "type",
  //   numeric: false,
  //   label: "Type",
  //   width: 100,
  // },
];

export default function Exemple_01() {
  const [updatedCode, setUpdatedCode] = useState([]);

  // const []
  const [change, setChange] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [openSave, setOpenSave] = useState(false);
  const [description, setDescription] = useState("Regular");
  const [sac, setSac] = useState(0);
  const [estimate, setEstimate] = useState(0);
  const [assessed, setAssessed] = useState(0);
  const [type, setType] = useState("");
  const [remark, setRemark] = useState("");
  const [gst, setGst] = useState(0);

  const [edit, setEdit] = useState(false);

  const [allRows, setAllRows] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      _id: index + 1,
      sno: index + 1,
      dep: "", // Add default values or leave empty as needed
      description: "",
      sac: "",
      remark: "",
      estimate: "",
      assessed: "",
      qe_qa: "01-02",
      bill_sr: index + 123, // Assuming bill_sr increments with each new row
      gst: 0,
      total: 0,
      type: "",
    }))
  );

  const openEditHandler = (idx) => {
    // console.log(idx);

    const tempIdx = allRows[idx];
    setSac(tempIdx.sac);
    setDescription(tempIdx.description);
    setAssessed(tempIdx.assessed);
    setEstimate(tempIdx.estimate);
    setGst(tempIdx.gst);
    setEditIndex(idx);
    setChange(true);
    setOpenSave(true);
  };

  const totalValue = () => {
    return gst + assessed;
  };

  console.log(editIndex, openSave);

  const saveHandler = () => {
    setSac("");
    setDescription("");
    setAssessed(0);
    setEstimate(0);
    setGst(0);
    setEditIndex(-1);
    setChange(true);
    setOpenSave(false);
  };
  const handleAddRow = () => {
    console.log("inside");
    // Assuming a new row has a specific structure, adjust this as needed
    const newRow = {
      _id: allRows.length, // You may use a more robust ID generation logic
      sno: allRows.length,
      dep: "", // Add default values or leave empty as needed
      description: "",
      sac: "",
      remark: "",
      estimate: "",
      assessed: "",
      qe_qa: "01-02",
      bill_sr: allRows.length, // Assuming bill_sr increments with each new row
      gst: 0,
      total: 0,
      type: "",
    };

    const old = allRows;
    old.push(newRow);
    console.log(old);

    setChange(true);
    setAllRows(old);
  };

  const editHandler = () => {
    setEdit(true);
  };

  const updateHandler = () => {
    setEdit(false);
  };

  const handleChange = (index, val, field) => {
    console.log(index, val, field);

    let oldRow = allRows;
    const currentField = allRows[index];
    const len = val.length;

    const dep =
      String(field) === "dep"
        ? String(currentField.dep) === val
          ? val.slice(-1, 1)
          : val
        : currentField.dep;
    const description =
      String(field) === "description"
        ? String(currentField.description) === val
          ? val.slice(-1, 1)
          : val
        : currentField.description;
    const sac =
      String(field) === "sac"
        ? String(currentField.sac) === val
          ? val.slice(-1, 1)
          : val
        : currentField.sac;
    const remark =
      String(field) === "remark"
        ? String(currentField.remark) === val
          ? val.slice(-1, 1)
          : val
        : currentField.remark;

    const estimate =
      String(field) === "estimate"
        ? String(currentField.estimate) === val
          ? val.slice(-1, 1)
          : val
        : currentField.estimate;
    const assessed =
      String(field) === "assessed"
        ? String(currentField.assessed) === val
          ? val.slice(-1, 1)
          : val
        : currentField.assessed;

    const gst =
      String(field) === "gst"
        ? String(currentField.gst) === val
          ? val.slice(-1, 1)
          : val
        : currentField.gst;
    const type =
      String(field) === "type"
        ? String(currentField.type) === val
          ? val.slice(-1, 1)
          : val
        : currentField.type;

    const total = estimate;

    const newOutput = {
      _id: currentField._id, // You may use a more robust ID generation logic
      sno: currentField.sno,
      dep: dep, // Add default values or lea ve empty as needed
      description: description,
      sac: sac,
      remark: remark,
      estimate: estimate,
      assessed: assessed,
      qe_qa: currentField.qe_qa,
      bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
      gst: gst,
      total: total,
      type: type,
    };

    oldRow[index] = newOutput;
    setAllRows(oldRow);
    // console.log(allRows[index].field);
    setChange(true);
    // console.log(oldRow);
  };
  useEffect(() => {
    let temp = [];
    const getData = () => {
      allRows.map((row, index) => {
        const newRow = {
          _id: index + 1, // You may use a more robust ID generation logic
          sno: index + 1,
          dep: row.dep, // Add default values or leave empty as needed
          description: (
            <select
              style={{ marginTop: "-5px" }}
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              value={row.description}
              disabled={!edit}
              onChange={(e) =>
                handleChange(index, e.target.value, "description")
              }
            >
              <option data-tokens="Status1" value={"Regular"}>
                Regular
              </option>
              <option data-tokens="Status2" value={"Add on Policy"}>
                Add on Policy
              </option>
              <option
                data-tokens="Status3"
                value={"Add on Policy(Not Effective)"}
              >
                Add on Policy(Not Effective)
              </option>
            </select>
          ),
          sac: (
            <input
              className="form-control"
              type="text"
              value={row.sac}
              onChange={(e) => handleChange(index, e.target.value, "sac")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          remark: (
            <input
              className="form-control"
              type="text"
              value={row.remark}
              onChange={(e) => handleChange(index, e.target.value, "remark")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          estimate: (
            <input
              className="form-control"
              type="text"
              value={row.estimate}
              disabled={!edit}
              onChange={(e) => handleChange(index, e.target.value, "estimate")}
              required
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          assessed: (
            <input
              className="form-control"
              type="text"
              value={row.assessed}
              onChange={(e) => handleChange(index, e.target.value, "assessed")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          qe_qa: "01-02",
          bill_sr: index + 1, // Assuming bill_sr increments with each new row
          gst: (
            <div className="col-lg-12 text-center">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="remeberMe"
              />
            </div>
          ),
          total: (
            <input
              className="form-control"
              type="text"
              value={totalValue()}
              // onChange={(e)=>handleChange(index,e.target.value,"gst")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          type: (
            <select
              style={{ marginTop: "-5px" }}
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              value={row.type}
              disabled={!edit}
              onChange={(e) => handleChange(index, e.target.value, "type")}
            >
              <option data-tokens="Status1" value={"Plastic"}>
                Plastic
              </option>
              <option data-tokens="Status2" value={"Glass"}>
                Glass
              </option>
              <option data-tokens="Status3" value={"Metal"}>
                Metal
              </option>
              <option data-tokens="Status3" value={"Rubber"}>
                Rubber
              </option>
            </select>
          ),
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
        };
        temp.push(newRow);
      });
    };
    getData();
    setUpdatedCode(temp);
    setChange(false);
  }, [change, edit]);

  console.log(updatedCode);

  return (
    <SmartTable_01
      title=""
      data={updatedCode}
      headCells={headCells}
      handleAddRow={handleAddRow}
      editHandler={editHandler}
      updateHandler={updateHandler}
      edit={edit}
    />
  );
}
