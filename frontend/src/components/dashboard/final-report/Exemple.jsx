import Link from "next/link";
import SmartTable_01 from "./SmartTable_01";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import { calculateDepreciationsPercenatge } from "./functions";

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
    id: "qe",
    numeric: false,
    label: "QE",
    width: 100,
  },
  {
    id: "qa",
    numeric: false,
    label: "QA",
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
  //   id: "action",
  //   numeric: false,
  //   label: "Action",
  //   width: 100,
  // },
];


export default function Exemple_01({
  policyType, 
  claim,
  includeDepreciation,
  ClaimAddedDateTime,
  PolicyStartDate,
  VehicleAddedDate}) {
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

  const [allDepreciations,setAllDepreciations]=useState([]);

  useEffect(()=>{

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios.get("/api/getAllDepreciationList",{
      headers:{
        Authorization:`Bearer ${userInfo[0].Token}`,
        "Content-Type":"application/json"
      }
    })
    .then((res)=>{
      setAllDepreciations(res.data.data.results);
    })
    .catch((Err)=>{
      alert(Err);
    })
  },[]);

  
  const [edit, setEdit] = useState(false);

  const [allRows, setAllRows] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      _id: index + 1,
      sno: index + 1,
      dep: 0, // Add default values or leave empty as needed
      description: "",
      sac: "",
      remark: "",
      estimate: "",
      assessed: "",
      qe: "01",
      qa:"01",
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
      dep: 0, // Add default values or leave empty as needed
      description: "",
      sac: "",
      remark: "",
      estimate: "",
      assessed: "",
      qe: "01",
      qa:"01",
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
        const bill_sr =
        String(field) === "bill_sr"
          ? String(currentField.bill_sr) === val
            ? val.slice(-1, 1)
            : val
          : currentField.bill_sr;
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

    const total = Number(assessed) * Number(currentField.qa);

    console.log(total,assessed,qa)
    const newOutput = {
      _id: currentField._id, // You may use a more robust ID generation logic
      sno: currentField.sno,
      dep: dep, // Add default values or lea ve empty as needed
      description: description,
      sac: sac,
      remark: remark,
      estimate: estimate,
      assessed: assessed,
      qa: currentField.qa,
      qe:currentField.qe,
      bill_sr: bill_sr, // Assuming bill_sr increments with each new row
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


  const handleQeQaChange=(index, val, field) => {
    
    let oldRow = allRows;
    const currentField = allRows[index];
    const len = val.length;

    const qe =
    String(field) === "qe"
      ? String(currentField.type) === val
      ? val.slice(-1, 1)
      : val
    : currentField.qe;
      const qa =
      String(field) === "qa"
        ?String(currentField.type) === val
        ? val.slice(-1, 1)
        : val
      : currentField.qa;

  
    
    const total = String(type) === "qe" ? (Number(currentField.assessed) * Number(val)) : currentField.total;

   

    const newOutput = {
      _id: currentField._id, // You may use a more robust ID generation logic
      sno: currentField.sno,
      dep: currentField.dep, // Add default values or lea ve empty as needed
      description: currentField.description,
      sac: currentField.sac,
      remark: currentField.remark,
      estimate: currentField.estimate,
      assessed: currentField.assessed,
      qe: qe,
      qa:qa,
      bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
      gst: currentField.gst,
      total: total,
      type: currentField.type,
    };

    oldRow[index] = newOutput;
    setAllRows(oldRow);
    // console.log(allRows[index].field);
    setChange(true);
    // console.log(oldRow);
  };

  // const handleGstChange=(index, val, field) => {
    
  //   let oldRow = allRows;
  //   const currentField = allRows[index];
  //   const len = val.length;

  //   const gst =
  //   String(field) === "gst"
  //     ? String(currentField.type) === val
  //     ? val.slice(-1, 1)
  //     : val
  //   : currentField.gst;
    
    
  //   const assessed_amount = (Number(currentField.assessed) * Number(val));
  //   const total =  (assessed_amount + (Number(gst) * assessed_amount)/100) ;

    

  //   const newOutput = {
  //     _id: currentField._id, // You may use a more robust ID generation logic
  //     sno: currentField.sno,
  //     dep: currentField.dep, // Add default values or lea ve empty as needed
  //     description: currentField.description,
  //     sac: currentField.sac,
  //     remark: currentField.remark,
  //     estimate: currentField.estimate,
  //     assessed: currentField.assessed,
  //     qe: currentField.qe,
  //     qa:currentField.qa,
  //     bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
  //     gst: gst,
  //     total: total,
  //     type: currentField.type,
  //   };

  //   oldRow[index] = newOutput;
  //   setAllRows(oldRow);
  //   // console.log(allRows[index].field);
  //   setChange(true);
  //   // console.log(oldRow);
  // };

  const handleTypeChange=(index, val, field) => {
    
    let oldRow = allRows;
    const currentField = allRows[index];
    const len = val.length;


    const dep =
      calculateDepreciationsPercenatge(allDepreciations,val,claim.vehicleDetails?.VehicleAddedDate);
    
    const type =
      String(field) === "type"
        ? String(currentField.type) === val
          ? val.slice(-1, 1)
          : val
        : currentField.type;

      
    console.log(dep)
    

    const newOutput = {
      _id: currentField._id, // You may use a more robust ID generation logic
      sno: currentField.sno,
      dep: dep, // Add default values or lea ve empty as needed
      description: currentField.description,
      sac: currentField.sac,
      remark: currentField.remark,
      estimate: currentField.estimate,
      assessed: currentField.assessed,
      qe_qa: currentField.qe_qa,
      bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
      gst: currentField.gst,
      total: currentField.total,
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
          dep: (
            <input
              className="form-control form-control-table"
              type="text"
              value={`${row.dep }%`}
             
              required
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ), // Add default values or leave empty as needed
          item_name: (
            <select
              // style={{ marginTop: "-5px" }}
              className="selectpicker form-select p-1"
              style={{ fontSize: "smaller" }}
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
          hsh_code: (
            <input
              className="form-control form-control-table"
              type="text"
              value={row.sac}
              onChange={(e) => handleChange(index, e.target.value, "sac")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          sac: (
            <input
              className="form-control form-control-table"
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
              className="form-control form-control-table"
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
              className="form-control form-control-table"
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
              className="form-control form-control-table"
              type="text"
              value={row.assessed}
              onChange={(e) => handleChange(index, e.target.value, "assessed")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          qe: (
            <input
              className="form-control form-control-table"
              type="text"
              value={row.qe}
              onChange={(e) => handleQeQaChange(index, e.target.value, "qe")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          qa: (
            <input
              className="form-control form-control-table"
              type="text"
              value={row.qa}
              onChange={(e) => handleQeQaChange(index, e.target.value, "qa")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          bill_sr: (
            <input
              className="form-control form-control-table"
              type="text"
              value={row.bill_sr}
              onChange={(e) => handleChange(index, e.target.value, "bill_sr")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ), // Assuming bill_sr increments with each new row
          gst: (
            <input
              className="form-control form-control-table"
              type="text"
              value={row.gst}
              onChange={(e) => handleChange(index, e.target.value, "gst")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          total: (
            <input
              className="form-control form-control-table"
              type="text"
              value={row.total}
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
              onChange={(e) => handleTypeChange(index, e.target.value, "type")}
            >

            {allDepreciations.map((dep,index)=>{
              return  index>0 && allDepreciations[index]?.PartType === allDepreciations[index-1]?.PartType ? null :  <option data-tokens="Status1" value={dep.PartType}>
              {dep.PartType}
              </option>
            })}
             
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

  console.log(allDepreciations);

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
