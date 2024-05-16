import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect, useState } from "react";
// import Select from "react-select";
import axios, { all } from "axios";
import {
  calculateDepreciationsPercenatge,
  getMonthsDifference,
  getDescriptionData,
  focusInputs,
} from "./functions";
import { getExpandedData } from "./extractFunction";
import { allDefaultDamagesRows } from "./utils/getDamagesRows";

const headCells = [
  {
    id: "row",
    numeric: false,
    label: "",
    width: 10,
  },
  {
    id: "sno",
    numeric: false,
    label: "#",
    width: 10,
  },
  {
    id: "heading",
    numeric: false,
    label: "Headings",
    width: 250,
  },
  {
    id: "description",
    numeric: false,
    label: "Description",
    width: 120,
  },
  {
    id: "dropdown",
    numeric: false,
    label: "",
    width: 120,
  },
];

export default function Exemple_01({
  policyType,
  claim,
  disable,
  settotalMetalRows,
  setallNewParts,
  allNewParts,
  DateOfRegistration,
  setOverallMetailDep,
  setTotalAgeOfVehicle,
  includeDepreciation,
  allDepreciations,
  setAllDepreciations,
  ClaimAddedDateTime,
  LeadId,
  AccidentAddedDateTime,
  PolicyStartDate,
  VehicleAddedDate,

  setMetalSalvageValue,
  DateRegistration,
  ageOfVehicleTotal,
  metaldepPct,
  totalPartsEstimate,
  totalLabrorEstimate,
  totalPartsAssessed,
  totalLabrorAssessed,

  setTotalPartsEstimate,
  setTotalLabrorEstimate,
  setTotalLabrorAssessed,
  setTotalPartsAssessed,
}) {
  const [updatedCode, setUpdatedCode] = useState([]);

  const [totalEstimate, setTotalEstimate] = useState(0);
  const [totalAssessed, setTotaAssessed] = useState(0);
  const [totalDifference, setTotalDifference] = useState(0);
  const [currentPolicy, setCurrentPolicy] = useState("Regular");
  const [toggleGST, setToggleGST] = useState(2);
  const [preRender, setPreRender] = useState(true);

  const generateSnoId = () => {
    const now = new Date();
    const yyyy = String(now.getFullYear());
    const mm = String(now.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    const ms = String(now.getMilliseconds()).padStart(2, "0");
    const result = `${yyyy}${mm}${dd}${hh}${min}${ss}${ms}`;
    return result;
  };

  const [metalDep, setMetalDep] = useState(0);
  // const []
  const [change, setChange] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [openSave, setOpenSave] = useState(false);
  const [description, setDescription] = useState("Regular");
  const [sac, setSac] = useState(0);
  const [estimate, setEstimate] = useState(0);
  const [assessed, setAssessed] = useState(0);
  const [depreciation, setDepreciation] = useState(0);
  const [type, setType] = useState("");
  const [currentType, setCurrentType] = useState("Both");
  const [remark, setRemark] = useState("");
  const [updatedSNO, setUpdatedSNO] = useState(0);
  const [gst, setGst] = useState(0);
  const [change2, setChange2] = useState(false);

  const [allRows, setAllRows] = useState(allDefaultDamagesRows);
  const [newParts, setNewParts] = useState([]);

  const [allRemarks, setAllRemarks] = useState([
    "Not allowed",
    "Intact",
    " Repair allowed",
    "IMT23",
    "Not correlate",
    "Not relevant",
    "Damaged",
    "Broken",
    "As per PI",
    "Burnt",
    "Not payable",
  ]);

  const [changeParts, setChangeParts] = useState(false);

  const roundOff = (value) => {
    const roundedValue = parseFloat(value).toFixed(2);
    return roundedValue;
  };
  useEffect(() => {
    setallNewParts(allRows);
  }, [allRows]);

  function sortArrayOfObjects(array) {
    // Ensure the input is an array
    if (!Array.isArray(array)) {
      console.error("Input is not an array.");
      return [];
    }

    // Sort the array based on the PartType property
    const sortedArray = array.slice().sort((a, b) => {
      const partTypeA = a.PartType.toLowerCase();
      const partTypeB = b.PartType.toLowerCase();

      if (partTypeA < partTypeB) return -1;
      if (partTypeA > partTypeB) return 1;
      return 0;
    });

    return sortedArray;
  }

  useEffect(() => {
    let tempDep = sortArrayOfObjects(allDepreciations);
    // setAllDepreciations(tempDep)
  }, [allDepreciations]);

  useEffect(() => {
    changeTotalAccordingToPolicyType(currentType);
  }, [currentType]);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setChange2(false);
    setTotaAssessed(calculateTotalAssessed);
    setTotalEstimate(calculateTotalEstimated);
    setTotalDifference(totalEstimate - totalAssessed);
  }, [change2, currentType]);
  const openEditHandler = (idx) => {
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

  useEffect(() => {
    calculateTotalAssessed();
    calculateTotalEstimated();
    handleTotalChange();
  }, [policyType]);

  const totalValue = () => {
    return gst + assessed;
  };

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

  let tempValue = 0;

  const handleAddRow = () => {
    let newSNO = Number(updatedSNO) + 1;
    setUpdatedSNO(newSNO);
    // Assuming a new row has a specific structure, adjust this as needed
    const newRow = {
      _id: allRows.length, // You may use a more robust ID generation logic
      sno: allRows.length,
      heading: "",
      description: "",
      isSelected: false,
      isActive: true,
    };

    const old = allRows;
    old.push(newRow);

    setChange(true);
    setAllRows(old);
  };

  const calculateVehicleAge = () => {
    if (
      !claim.vehicleDetails?.DateOfRegistration ||
      !claim.claimDetails?.AddedDateTime
    ) {
      return "0";
    }
    const a = getMonthsDifference(DateRegistration);

    const b = getMonthsDifference(AccidentAddedDateTime);

    return `${a - b}`;
  };

  const calculatePolicyAge = () => {
    const end = getMonthsDifference(claim?.claimDetails?.PolicyPeriodEnd);
    const start = getMonthsDifference(claim.claimDetails?.PolicyPeriodStart);

    if (end >= 0) {
      return "Already Ended";
    } else return start;
  };

  const sortNewParts = () => {
    let sortedArray = allRows;
    sortedArray.sort((a, b) => a.sno - b.sno);
    return sortedArray;
  };

  const calculateDepreciationOnMetal = () => {
    const a = calculateDepreciationsPercenatge(
      allDepreciations,
      "Metal",
      claim.vehicleDetails?.DateOfRegistration
    );
    setOverallMetailDep(a);
    return a;
  };

  const handleRemoveRow = (index) => {
    let updatedRowsss = [];
    allRows.filter((row, i) => {
      const active = String(row.sno) === String(index) ? 0 : row.isActive;
      const newRow = {
        sno: row.sno,
        heading: row.heading,
        description: row.description,
        isSelected: false,
        isActive: Number(active),
      };

      updatedRowsss.push(newRow);
    });

    setAllRows(updatedRowsss);
    setChange(true);
  };

  const editHandler = () => {
    setEdit(true);
  };

  const updateHandler = () => {
    setEdit(false);
  };

  const handleDescriptionChange = (index, value, field) => {
    let updatedRows = [];
    allRows.map((row, idx) => {
      if (String(index) === String(idx)) {
        const expadedData = getExpandedData(row, value, field);
        const newRow = { ...expadedData };
        updatedRows.push(newRow);
      } else {
        updatedRows.push(row);
      }
    });
    setAllRows(updatedRows);
  };

  const calculateTotalAssessed = () => {
    let without_gst = 0,
      with_gst = 0;
    allRows.map((row, index) => {
      if (row.isActive === 1) {
        let current_total = Number(row.assessed) * Number(row.qa);
        const subtract = 0;
        without_gst = without_gst + (current_total - subtract);
        with_gst =
          with_gst +
          (current_total +
            ((current_total - subtract) * Number(row.gst)) / 100);
      }
    });
    if (String(currentType) === "Assessed" || String(currentType) === "Both") {
      setTotalPartsAssessed(with_gst);
      return with_gst;
    }

    setTotalPartsAssessed(without_gst);
    return without_gst;
  };

  const calculateTotalEstimated = () => {
    let without_gst = 0,
      with_gst = 0;
    allRows.map((row, index) => {
      if (row.isActive === 1) {
        let current_total = Number(row.estimate) * Number(row.qe);
        const subtract = 0;
        without_gst = without_gst + (current_total - subtract);
        with_gst =
          with_gst +
          (current_total +
            ((current_total - subtract) * Number(row.gst)) / 100);
      }
    });
    if (String(currentType) === "Estimate" || String(currentType) === "Both") {
      setTotalPartsEstimate(with_gst);
      return with_gst;
    }
    setTotalPartsEstimate(without_gst);
    return without_gst;
  };

  const onSaveHandler = () => {
    const LeadID = window.location.pathname.split("/final-report/")[1];
    // console.log(LeadID)

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    let tempRows = [];
    allRows.map((row, index) => {
      const r = {
        sno: row.sno,
        dep: row.dep, // Add default values or lea ve empty as needed
        description: row.description,
        sac: row.sac,
        remark: row.remark,
        estimate: row.estimate,
        assessed: row.assessed,
        qa: row.qa,
        qe: row.qe,
        bill_sr: row.bill_sr, // Assuming bill_sr increments with each new row
        gst: row.gst,
        total:
          String(currentType) === "Both"
            ? 1
            : String(currentType) === "Estimate"
            ? 2
            : 3,
        isActive: row.isActive,
        type: row.type,
      };
      tempRows.push(r);
    });

    const payload = {
      allRows: JSON.stringify(tempRows),
    };

    axios
      .put("/api/updateNewParts", payload, {
        headers: {
          Authorization: `Bearer ${userInfo[0]?.Token}`,
          "Content-Type": "application/json",
        },
        params: {
          LeadId: LeadID,
        },
      })
      .then((res) => {
        alert("Successfully updated!!");
        window.location.reload();
      })
      .catch((Err) => {
        alert(Err);
      });
  };

  const changeTotalAccordingToPolicyType = (policy) => {
    setCurrentType(policy);

    setPreRender(true);
    setToggleGST(2);

    const isIncludeGSTInAssessed =
      String(policy) === "Assessed" || String(policy) === "Both";
    const isIncludeGSTInEstimate =
      String(policy) === "Estimate" || String(policy) === "Both" ? true : false;

    let total_estimate = 0;
    let total_metal_sum = 0;
    let total_assessed = 0;
    let updatedOne = [];
    allRows.map((row, index) => {
      const updatedRow = row;

      //for estimate calculate
      const overall_estimate = Number(row.estimate) * Number(row.qe);
      total_estimate =
        total_estimate +
        overall_estimate +
        (isIncludeGSTInEstimate
          ? (overall_estimate * Number(row.gst)) / 100
          : 0);

      //total assessed calculate
      const overall_assessed = Number(row.assessed) * Number(row.qa);
      const subtract_dep = 0;
      const subtarct_final = overall_assessed - subtract_dep;

      total_estimate =
        total_estimate +
        subtarct_final +
        (isIncludeGSTInAssessed
          ? (overall_assessed * Number(row.gst)) / 100
          : 0);

      //total calculation for every row
      const overall = Number(row.assessed) * Number(row.qa);
      const subtract_before = 0;
      const subtract = overall - subtract_before;
      const gst = (overall * Number(row.gst)) / 100;
      const totalVal =
        String(policy) === "Both" || String(policy) === "Assessed"
          ? overall + gst
          : overall;
      updatedRow.total = totalVal;
      updatedOne.push(updatedRow);
    });
    setAllRows(updatedOne);
    setTotaAssessed(total_assessed);
    setTotalPartsAssessed(total_assessed);
    setTotalPartsEstimate(total_estimate);
    setTotalEstimate(total_estimate);
    // setToggleGST(toggleGST+1);
    setChange(true);
    setChange2(true);
    setChange(true);
  };

  const handleTotalChange = () => {
    let updatedOne = [];
    allRows.map((row, index) => {
      const updatedRow = row;

      //total assessed calculate
      const overall_assessed = Number(row.assessed) * Number(row.qa);
      const subtract_dep = 0;
      const subtarct_final = overall_assessed - subtract_dep;

      //total calculation for every row
      const total = subtarct_final;
      updatedRow.total = total;
      updatedOne.push(updatedRow);
    });

    setAllRows(updatedOne);
    setToggleGST(toggleGST + 1);
    setChange(true);
  };

  const handleQeQaChange = (index, val, field) => {
    setChange2(true);
    let oldRow = allRows;
    const currentField = allRows[index];
    const len = val.length;

    const qe =
      String(field) === "qe"
        ? String(currentField.qe) === val
          ? val.slice(-1, 1)
          : val
        : currentField.qe;
    const qa =
      String(field) === "qa"
        ? String(currentField.qa) === val
          ? val.slice(-1, 1)
          : val
        : currentField.qa;

    const overall = Number(currentField.assessed) * Number(qa);
    const subtract =
      String(policyType) === "" || String(policyType) === "Regular"
        ? (overall * Number(currentField.dep)) / 100
        : 0;

    const total_without = overall - subtract;
    const total =
      Number(currentField.assessed) * Number(qa) +
      (currentType === "Assessed" || String(currentType) === "Both"
        ? (total_without * Number(currentField.gst)) / 100
        : 0);

    const newOutput = {
      _id: currentField._id,
      sno: currentField.sno,
      dep: currentField.dep,
      description: currentField.description,
      sac: currentField.sac,
      remark: currentField.remark,
      estimate: currentField.estimate,
      assessed: currentField.assessed,
      qe: qe,
      qa: qa,
      bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
      gst: currentField.gst,
      total: total,
      isActive: currentField.isActive,
      type: currentField.type,
    };

    oldRow[index] = newOutput;
    setChange(true);
    setAllRows(oldRow);
  };

  const handleTypeChange = (index, val, field) => {
    setChange2(true);

    let oldRow = allRows;
    const currentField = allRows[index];
    const len = val.length;

    const dep =
      claim?.vehicleDetails?.DateOfRegistration ||
      claim?.vehicleDetails?.DateOfRegistration !== "undeifned"
        ? calculateDepreciationsPercenatge(
            allDepreciations,
            val,
            DateOfRegistration
          )
        : 0;

    setMetalDep(dep);

    //calculate totlRows
    let totalMetalRows = 0;
    allRows.map((row, idx) => {
      if (
        (row.type === "Metal" && idx !== index) ||
        (val === "Metal" && idx === index)
      ) {
        const value = Number(row.assessed) * Number(row.qa);
        const gst = (Number(value) * Number(row.gst)) / 100;

        const totalRowMetalValue = value + gst;
        totalMetalRows = totalMetalRows + totalRowMetalValue;
      }
    });

    settotalMetalRows(totalMetalRows);

    //***** *//

    const type =
      String(field) === "type"
        ? String(currentField.type) === val
          ? val.slice(-1, 1)
          : val
        : currentField.type;

    const overall = Number(currentField.assessed) * Number(currentField.qa);
    const subtract = 0;
    const total_without = overall - subtract;
    const total =
      Number(currentField.assessed) * Number(currentField.qa) +
      String(
        currentType === "Assessed" || String(currentType) === "Both"
          ? (total_without * Number(gst)) / 100
          : 0
      );

    const newOutput = {
      _id: currentField._id, // You may use a more robust ID generation logic
      row: currentField.row,
      sno: currentField.sno,
      dep: dep, // Add default values or lea ve empty as needed
      description: currentField.description,
      sac: currentField.sac,
      remark: currentField.remark,
      estimate: currentField.estimate,
      assessed: currentField.assessed,
      qa: currentField.qa,
      qe: currentField.qe,
      bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
      gst: currentField.gst,
      total: total,
      isActive: currentField.isActive,
      type: type,
    };

    let total_metal = 0;
    allRows.map((row, idx) => {
      if (String(idx) === String(index)) {
        if (val === "Metal") {
          total_metal =
            total_metal +
            (Number(currentField.assessed) *
              Number(currentField.qa) *
              Number(dep)) /
              100;
        }
      } else {
        if (val === "Metal") {
          total_metal =
            total_metal +
            (Number(row.assessed) * Number(row.qa) * Number(row.dep)) / 100;
        }
      }
    });

    oldRow[index] = newOutput;
    setAllRows(oldRow);

    setMetalSalvageValue(total_metal);
    calculateTotalAssessed();
    calculateTotalEstimated();
    setChange(true);

    // console.log(oldRow);
  };

  const [hide, setHide] = useState(false);

  const handleGSTChange = (index, val, field) => {
    setChange2(true);
    let oldRow = allRows;
    const currentField = allRows[index];
    const len = val.length;

    const gst =
      String(field) === "gst"
        ? String(currentField.gst) === val
          ? val.slice(-1, 1)
          : val
        : currentField.gst;

    const isIncludeGSTInAssessed =
      String(currentType) === "Assessed" || String(currentType) === "Both"
        ? true
        : false;

    //total assessed calculate
    const overall_assessed =
      Number(currentField.assessed) * Number(currentField.qa);
    const subtract_dep =
      String(policyType) === "" || String(policyType) === "Regular"
        ? (overall_assessed * Number(currentField.dep)) / 100
        : 0;
    const subtarct_final = overall_assessed - subtract_dep;
    // console.log(overall_assessed-(String(policyType) === "" || String(policyType) === "Regular") ? ((overall_assessed * Number(currentField.dep))/100): 0);
    const total =
      Number(currentField.assessed) * Number(currentField.qa) +
      (isIncludeGSTInAssessed ? (subtarct_final * Number(gst)) / 100 : 0);
    // console.log(total,subtarct_final,(String(policyType) === "" || String(policyType) === "Regular") ? ((overall_assessed * Number(currentField.dep))/100): 0,isIncludeGSTInAssessed,overall_assessed,currentField.dep,policyType,"total");

    const newOutput = {
      _id: currentField._id, // You may use a more robust ID generation logic
      row: currentField.row,
      sno: currentField.sno,
      dep: currentField.dep, // Add default values or lea ve empty as needed
      description: currentField.description,
      sac: currentField.sac,
      remark: currentField.remark,
      estimate: currentField.estimate,
      assessed: currentField.assessed,
      qa: currentField.qa,
      qe: currentField.qe,
      bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
      gst: gst,
      total: total,
      isActive: currentField.isActive,
      type: currentField.type,
    };

    oldRow[index] = newOutput;
    setAllRows(oldRow);
    calculateTotalAssessed();
    calculateTotalEstimated();
    // console.log(allRows[index].field);
    setChange(true);
    // console.log(oldRow);
  };

  const calculateTotal = (id) => {
    let row = {};
    allRows.map((tempRow, index) => {
      if (String(tempRow.sno) === String(id)) {
        row = tempRow;
      }
    });

    const overall = Number(row?.assessed) * Number(row?.qe);
    const gst =
      String(currentType) === "Both" || String(currentType) === "Assessed"
        ? (overall * Number(18.5)) / 100
        : 0;
    return overall + gst;
  };

  console.log(toggleGST, currentType, "type");

  const gstToggleHandler = () => {
    setToggleGST(toggleGST + 1);
    setChange(true);
  };

  const calculateRowTotal = (sno) => {
    let requiredRow = {};
    allRows.map((row, index) => {
      if (String(row.sno) === String(sno)) {
        requiredRow = row;
      }
    });

    const overall_Value = Number(requiredRow.assessed) * Number(requiredRow.qa);
    const gstValue = (overall_Value * Number(requiredRow.gst)) / 100;

    if (
      String(currentType) === "" ||
      String(currentType) === "Both" ||
      String(currentType) === "Assessed"
    ) {
      return overall_Value + gstValue;
    }
    return overall_Value;
  };

  const focusInputsHandler = (sno)=>{
    let updatedRows = [];
    allRows.map((row, index) => {
      let updatedRow = {};
      if (String(row.sno) === String(sno)) {
        updatedRow = {
          ...row,
          isSelected : true,
        };
      } else {
        updatedRow = {
          ...row,
          isSelected : false
        };
      }
      updatedRows.push(updatedRow);
    });
    setAllRows(updatedRows);
  }

  const onFeildChangeHandler = (value, id, field) => {
    let updatedRows = [];
    allRows.map((row, index) => {
      let updatedRow = {};
      const desp = getDescriptionData(row, field, value);

      if (String(row.sno) === String(id)) {
        updatedRow = {
          ...row,
          heading: String(field) === "heading" ? value : row.heading,
          description: desp,
        };
      } else {
        updatedRow = {
          ...row,
        };
      }
      updatedRows.push(updatedRow);
    });
    setAllRows(updatedRows);
  };
  useEffect(() => {
    let temp = [];

    let count = 1;

    const getData = () => {
      allRows.map((row, index) => {
        // console.log(row);
        if (Number(row.isActive) === 1) {
          const newRow = {
            
            _id: index + 1,
            row: (
              <button
                className="flaticon-minus"
                onClick={() => handleRemoveRow(row.sno)}
              ></button>
            ),
            sno: count,
            heading: (
              <input
                className={row.isSelected ? "form-control form-control-table p-1 focused" : "form-control  form-control-table p-1"}
                type="text"
                value={`${row.heading}`}
                onFocus={() => focusInputsHandler(row.sno)}
                onChange={(e) =>
                  onFeildChangeHandler(e.target.value, row.sno, "heading")
                }
                required
                id="terms"
                style={{ border: "1px solid black" }}
              />
            ),
            description: (
              <input
              className={row.isSelected ? "form-control form-control-table p-1 focused" : "form-control  form-control-table p-1"}
              type="text"
              onFocus={() => focusInputsHandler(row.sno)}
                value={`${row.description}`}
                onChange={(e) =>
                  onFeildChangeHandler(e.target.value, row.sno, "description")
                }
                required
                id="terms"
                style={{ border: "1px solid black" }}
              />
            ),
            dropdown: 
            (
              row.isSelected ?
              
              <select
                style={{ marginTop: "-5px" }}
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                onChange={(e) =>
                  onFeildChangeHandler(e.target.value, row.sno, "dropdown")
                }
              >
                <option data-tokens="Status1" value={" As per PI"}>
                  As per PI
                </option>
                <option data-tokens="Status2" value={"Burnt"}>
                  Burnt
                </option>
                <option data-tokens="Status1" value={"Broken"}>
                  Broken
                </option>
                <option data-tokens="Status2" value={"Damaged"}>
                  Damaged
                </option>
                <option data-tokens="Status1" value={"IMT23"}>
                  IMT23
                </option>

                <option data-tokens="Status1" value={"Intact"}>
                  Intact
                </option>
                <option data-tokens="Status1" value={"Regular"}>
                  Not allowed
                </option>
                <option data-tokens="Status1" value={"Not correlate"}>
                  Not correlate
                </option>
                <option data-tokens="Status3" value={"Not payable"}>
                  Not payable
                </option>
                <option data-tokens="Status2" value={"Not relevant"}>
                  Not relevant
                </option>

                <option data-tokens="Status2" value={"Repair allowed"}>
                  Repair allowed
                </option>
              </select>  : ""
            )
            
          };
          temp.push(newRow);
          count = count + 1;
        }
      });
    };
    getData();

    setUpdatedCode(temp);

    setChange(false);
  }, [change, edit, policyType, allRows, changeParts]);

  return (
    <SmartTable
      title=""
      disable={disable}
      ToggleGST={toggleGST}
      data={updatedCode}
      headCells={headCells}
      dep={metalDep}
      handleAddRow={handleAddRow}
      handleRemoveRow={handleRemoveRow}
      editHandler={editHandler}
      updateHandler={onSaveHandler}
      currentType={currentType}
      estimate={totalAssessed}
      vehicleAge={calculateVehicleAge}
      gstToggleHandler={""}
      calculatePolicyAge={calculatePolicyAge}
      assessed={totalEstimate}
      preRender={preRender}
      difference={totalEstimate - totalAssessed}
      calculateDepreciationOnMetal={calculateDepreciationOnMetal}
      edit={edit}
      claim={claim}
      setHide={setHide}
      hide={hide}
      setEdit={setEdit}
      setCurrentType={setCurrentType}
      changeTotalAccordingToPolicyType={changeTotalAccordingToPolicyType}
    />
  );
}
