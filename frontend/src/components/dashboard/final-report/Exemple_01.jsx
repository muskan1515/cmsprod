import Link from "next/link";
import SmartTable_01 from "./SmartTable_01";
import { useEffect, useState } from "react";

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
    width: 100,
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
    id: "gst",
    numeric: false,
    label: "GST%",
    width: 100,
  },
  {
    id: "action",
    numeric: false,
    label: "Action",
    width: 100,
  },
];

const data = [
  {
    _id: "6144145976c7fe",
    sno: "1",
    dep: "0",
    description: (
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
    sac: (
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
      <div className="row">
        <div className="col-lg-12 text-center">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            required
            id="terms"
            style={{ border: "1px solid black" }}
          />
        </div>
      </div>
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
    action: <span className="flaticon-edit"></span>,
  },
];

export default function Exemple_01() {
  const [updatedCode,setUpdatedCode]=useState([]);
  const [change,setChange]=useState(false);
  const [editIndex,setEditIndex] = useState(-1);
  const [openSave,setOpenSave]=useState(false);
  const [allRows,setAllRows] = useState([
    {
      _id: 1,
      sno: 1,
      dep: "0",
      description:"",
      sac:"",
      remark: "",
      estimate:0,
      assessed: 0,
      qe_qa: "01-02",
      bill_sr: 1,
      gst:0,
      total:0,
      type: ""
    },
  ]);

  const openEditHandler = (idx)=>{
    console.log(idx);

    setEditIndex(idx);
    setOpenSave(true);
  }

  const saveHandler = ()=>{
    setOpenSave(false);
  }
  const handleAddRow = () => {
    console.log("inside");
    // Assuming a new row has a specific structure, adjust this as needed
    const newRow = {
      _id: allRows.length, // You may use a more robust ID generation logic
      sno: allRows.length,
      dep: "", // Add default values or leave empty as needed
      description:"",
      sac:"",
      remark: "",
      estimate:0,
      assessed:0,
      qe_qa: "01-02",
      bill_sr:allRows.length, // Assuming bill_sr increments with each new row
      gst:0,
      total:0,
      type: "",
     
    };

    const old = allRows;
    old.push(newRow);
    console.log(old)

    setChange(true)
    setAllRows(old);
  };

  const handleChange = (index,val,field)=>{
    let oldRow = allRows;
    allRows[index].field = val;
    console.log(oldRow);
  }
  useEffect(()=>{
    let temp = [];
    const getData = ()=>{
      allRows.map((row,index)=>{
        const newRow = {
          _id: index+1, // You may use a more robust ID generation logic
          sno:  index+1,
          dep: row.dep, // Add default values or leave empty as needed
          description: (
            <select
              style={{ marginTop: "-5px" }}
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              value={row.description}
              disabled={editIndex === index ? false : true} 
              onChange={(e)=>handleChange(index,index,e.target.value,"description")}
            >
              <option data-tokens="Status1" value={"Regular"}>Regular</option>
              <option data-tokens="Status2" value={"Add on Policy"}>Add on Policy</option>
              <option data-tokens="Status3" value={"Add on Policy(Not Effective)"}>Add on Policy(Not Effective)</option>
            </select>
          ),
          sac: (
            <input
              className="form-control"
              type="text"
              value={row.sac}
              onChange={(e)=>handleChange(index,e.target.value,"sac")}
              required
              disabled={editIndex === index ? false : true} 
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          remark: (
            <input
              className="form-control"
              type="text"
              value={row.remark}
              onChange={(e)=>handleChange(index,e.target.value,"remark")}
              required
              disabled={editIndex === index ? false : true} 
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          estimate: (
            <input
              className="form-control"
              type="text"
              value={row.estimate}
              disabled={editIndex === index ? false : true} 
              onChange={(e)=>handleChange(index,e.target.value,"estimate")}
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
              onChange={(e)=>handleChange(index,e.target.value,"assessed")}
              required
              disabled={editIndex === index ? false : true} 
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          qe_qa: "01-02",
          bill_sr: index+1, // Assuming bill_sr increments with each new row
          gst: (
            <div className="row">
              <div className="col-lg-12 text-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={row.gst}
                  onChange={(e)=>handleChange(index,e.target.value,"gst")}
                  required
                  disabled={editIndex === index ? false : true} 
                  id="terms"
                  style={{ border: "1px solid black" }}
                />
              </div>
            </div>
          ),
          total: (
            <input
              className="form-control"
              type="text"
              value={row.gst}
              onChange={(e)=>handleChange(index,e.target.value,"gst")}
              required
              disabled={editIndex === index ? false : true} 
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          type:  (<input
          className="form-check-input"
          type="checkbox"
          value={row.type}
          onChange={(e)=>handleChange(index,e.target.value,"type")}
          required
          disabled={editIndex === index ? false : true} 
          id="terms"
          style={{ border: "1px solid black" }}
        />
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
          action: <>{(editIndex === index) && openSave ? <button onClick={()=>saveHandler()}>Save</button>: editIndex === index && !openSave ? <span className="flaticon-edit" onClick={()=>openEditHandler()}></span> :<span className="flaticon-edit" onClick={()=>openEditHandler()}></span>}</>,
        };
        temp.push(newRow);
      })
    }
    getData();
    setUpdatedCode(temp);
    setChange(false);
   
  },[change]);


  console.log(updatedCode);

  return <SmartTable_01 title="" data={updatedCode} headCells={headCells} handleAddRow={handleAddRow} />;
}
