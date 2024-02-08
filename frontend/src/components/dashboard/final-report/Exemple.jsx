import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect, useState } from "react";
// import Select from "react-select";
import axios, { all } from "axios";
import { calculateDepreciationsPercenatge, getMonthsDifference } from "./functions";

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
    id: "dep",
    numeric: false,
    label: "Dep%",
    width: 50,
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
  DateOfRegistration,
  setOverallMetailDep,
  setTotalAgeOfVehicle,
  includeDepreciation,
  allDepreciations,
  setAllDepreciations,
  ClaimAddedDateTime,
  LeadId,
  PolicyStartDate,
  VehicleAddedDate,

  setMetalSalvageValue,

  ageOfVehicleTotal,
   metaldepPct,
    totalPartsEstimate,
    totalLabrorEstimate,
    totalPartsAssessed,
    totalLabrorAssessed,

    setTotalPartsEstimate,
    setTotalLabrorEstimate,
    setTotalLabrorAssessed,
    setTotalPartsAssessed
}) {
  const [updatedCode, setUpdatedCode] = useState([]);

  const [totalEstimate, setTotalEstimate] = useState(0);
  const [totalAssessed, setTotaAssessed] = useState(0);
  const [totalDifference, setTotalDifference] = useState(0);
  const [currentPolicy,setCurrentPolicy]=useState("Regular");
  const [toggleGST,setToggleGST]=useState(2);
  const [preRender,setPreRender]=useState(true);

  const [metalDep,setMetalDep]=useState(0);
  // const []
  const [change, setChange] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [openSave, setOpenSave] = useState(false);
  const [description, setDescription] = useState("Regular");
  const [sac, setSac] = useState(0);
  const [estimate, setEstimate] = useState(0);
  const [assessed, setAssessed] = useState(0);
  const [depreciation,setDepreciation]=useState(0);
  const [type, setType] = useState("");
  const [currentType,setCurrentType]=useState("Both");
  const [remark, setRemark] = useState("");
  const [gst, setGst] = useState(0);
  const [change2, setChange2] = useState(false);

  
  
  const [allRows, setAllRows] = useState([]);
  const [newParts,setNewParts]=useState([]);

  const [changeParts,setChangeParts]=useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getAllDepreciationList", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setAllDepreciations(res.data.data.results);
      })
      .catch((Err) => {
        alert(Err);
      });

      const LeadID = window.location.pathname.split("/final-report/")[1];
  
      axios.get("/api/getNewParts",{
        headers:{
          Authorization:`Bearer ${userInfo[0].Token}`,
          "Content-Type":"application/json"
        },
        params:{
          LeadId : LeadID
        }
      })
      .then((res)=>{
        console.log(res);
        
        // setNewParts(res.data.userData);
        let newPart = res.data.userData;
        let temp_row =[];
        

        let total_assessed=0,total_estimate=0,total_metal=0;
        newPart.map((part,index)=>{
          if(String(part.LeadID) === String(LeadID)){
            console.log(part)
            const overall = Number(part.Assessed)*(Number(part.QA));
            const overall_e = Number(part.Estimate)*(Number(part.QE));
            const GSTT_e=((overall_e * Number(part.GSTPct))/100);
            const GSTT=((overall * Number(part.GSTPct))/100);
          const temp = {
            _id:index+1,
            description:part.ItemName,
            dep:part.DepreciationPct,
            sac:part.HSNCode,
            remark:part.Remark,
            estimate:part.Estimate,
            assessed:part.Assessed,
            qa:part.QA,
            qe:part.QE,
            bill_sr:part.BillSr,
            gst:part.GSTPct,
            type:part.TypeOfMaterial,
            total:(overall + GSTT),
            sno:part.ReportID
          };
          total_assessed = total_assessed + (overall + GSTT);

          total_metal = total_metal + (part.TypeOfMaterial === "Metal" ?  ((Number(part.Assessed ) * (Number(part.QA)) * (Number(part.DepreciationPct)))/100): 0)
          total_estimate = total_estimate + (overall_e + GSTT_e);
          temp_row.push(temp)
        }
        });
        console.log(temp_row);
        setAllRows(temp_row);
        setMetalSalvageValue(total_metal)
        setTotaAssessed(total_assessed);
        setTotalPartsAssessed(total_estimate);
        setTotalPartsEstimate(total_estimate);
        setTotalEstimate(total_estimate);
        setChangeParts(true);
      })
      .catch((Err)=>{
        alert(Err)
      })
  }, []);

  


  // useEffect(()=>{
  //   let temp_row =[];
  //   newParts.map((part,index)=>{
  //     const temp = {
  //       description:part.ItemName,
  //       dep:part.DepreciationPct,
  //       sac:part.HSNCode,
  //       remark:part.Remark,
  //       estimate:part.Estimate,
  //       assessed:part.Assessed,
  //       qa:part.QA,
  //       qe:part.QE,
  //       bill_sr:part.BillSr,
  //       gst:part.GSTPct,
  //       type:part.TypeOfMaterial,
  //       total:part.WithoutTax,
  //       sno:part.ReportID
  //     };
  //     temp_row.push(temp)
  //   });
  //   setAllRows(temp_row);
  // },[changeParts]);




  const [edit, setEdit] = useState(false);


  useEffect(() => {
    setChange2(false);
    setTotaAssessed(calculateTotalAssessed);
    setTotalEstimate(calculateTotalEstimated);
    setTotalDifference(totalEstimate - totalAssessed);
  }, [change2,currentType]);
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

  console.log(policyType);

  useEffect(()=>{
    calculateTotalAssessed();
    calculateTotalEstimated();
    handleTotalChange();

  },[policyType]);

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
      qa: "01",
      bill_sr: "", // Assuming bill_sr increments with each new row
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

  const calculateVehicleAge = ()=>{
    if(! claim.vehicleDetails?.DateOfRegistration || !claim.claimDetails?.AddedDateTime){
      return "0";
    }
    const a = getMonthsDifference(claim.vehicleDetails?.DateOfRegistration);
    const b= getMonthsDifference(claim.claimDetails?.AddedDateTime);
    setTotalAgeOfVehicle(a+b);
    return `${a }`;
  }

  const calculatePolicyAge = ()=>{
    const end = getMonthsDifference(claim?.claimDetails?.PolicyPeriodEnd);
    const start= getMonthsDifference(claim.claimDetails?.PolicyPeriodStart);

    if(end >=0){
      return "Already Ended";
    }
    else
     return start;
  }

  const calculateDepreciationOnMetal = ()=>{
    const a= calculateDepreciationsPercenatge(allDepreciations,"Metal",claim.vehicleDetails?.DateOfRegistration);
    setOverallMetailDep(a);
    console.log(a);
    return a;
  }


  const handleRemoveRow = (index) => {

    // console.log(allRows);

    let updatedRowsss = [];
    allRows.filter((row, i)=>{
      if(String(i+1) === String(index)){
        console.log("row",row)
        
      }
      else{
        updatedRowsss.push(row);
      }
    });
    

    console.log(updatedRowsss);
    setAllRows(updatedRowsss);
    setChange(true);   
  };

  const editHandler = () => {
    setEdit(true);
    console.log(allRows);
  };

  const updateHandler = () => {
    setEdit(false);
  };

  const handleChange = (index, val, field) => {
    setChange2(true);
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

    const overall = Number(assessed) * Number(currentField.qa);
    const subtract =0;
    const total_without = overall - subtract;
    const total =
      total_without +( toggleGST%2 !== 0 ? (total_without * Number(currentField.gst)) / 100 : 0);
      console.log(total,total_without,overall,subtract);

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
      qe: currentField.qe,
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

  const calculateTotalAssessed = () => {
    let without_gst = 0,with_gst = 0;
    allRows.map((row, index) => {
      let current_total = Number(row.assessed) * Number(row.qa);
      const subtract =
      0;
        without_gst = without_gst  + (current_total -subtract) ;
        with_gst = with_gst  + (   current_total +  ((current_total-subtract) * Number(row.gst)) /100);
    });
    if(String(currentType) === "Assessed" || String(currentType) === "Both"){
      setTotalPartsAssessed(with_gst);
      return with_gst;
    }

    setTotalPartsAssessed(without_gst);
    return without_gst;
  };

  const calculateTotalEstimated = () => {
    let without_gst = 0,with_gst = 0;
    allRows.map((row, index) => {
      let current_total = Number(row.estimate) * Number(row.qe);
      const subtract =0;
        without_gst = without_gst  + (current_total -subtract) ;
        with_gst = with_gst  + ( current_total+ ((current_total-subtract) * Number(row.gst)) /100);
    });
    if((String(currentType) === "Estimate") || String(currentType) === "Both"){
      setTotalPartsEstimate(with_gst);
      return with_gst;
    }
    setTotalPartsEstimate(without_gst);
    return without_gst;
  };


  const onSaveHandler = ()=>{

    const LeadID = window.location.pathname.split("/final-report/")[1];
    // console.log(LeadID)

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    const payload={
      allRows : JSON.stringify(allRows)
    };

    axios.put("/api/updateNewParts",payload,{
      headers:{
        Authorization:`Bearer ${userInfo[0].Token}`,
        "Content-Type":"application/json"
      },
      params:{
        LeadId : LeadID
      }
    })
    .then((res)=>{
      alert("Successfully updated!!");
      window.location.reload();
    })
    .catch((Err)=>{
      alert(Err)
    })
  }

  const changeTotalAccordingToPolicyType = (policy) => {

    setPreRender(true);
    setToggleGST(2);

    const isIncludeGSTInAssessed = policy === "Assessed" || policy === "Both" ? true : false;
    const isIncludeGSTInEstimate = policy === "Estimate" || policy === "Both" ? true : false;

    let total_estimate =0;
    let total_metal_sum=0;
    let total_assessed=0;
    let updatedOne = [];
    allRows.map((row, index) => {

    const updatedRow = row;

    //for estimate calculate
    const overall_estimate = Number(row.estimate) * Number(row.qe);
    total_estimate = total_estimate + overall_estimate + (isIncludeGSTInEstimate ? (overall_estimate * Number(row.gst)) / 100 : 0);

    //total assessed calculate
    const overall_assessed = Number(row.assessed) * Number(row.qa);
    const subtract_dep =   0;
    const subtarct_final =  overall_assessed - subtract_dep;
    
    total_estimate = total_estimate + subtarct_final  + (isIncludeGSTInAssessed ? (overall_assessed * Number(row.gst)) / 100 : 0);


    

    //total calculation for every row
    const overall = Number(row.assessed) * Number(row.qa);
    const subtract_before =
     0;
    const subtract = overall - subtract_before;
    const total =subtarct_final  + (isIncludeGSTInAssessed ? (overall_assessed * Number(row.gst)) / 100 : 0);
    updatedRow.total = total;
    updatedOne.push(updatedRow)
    });
    setAllRows(updatedOne);
    setTotaAssessed(total_assessed);
    setTotalPartsAssessed(total_assessed);
    setTotalPartsEstimate(total_estimate);
    setTotalEstimate(total_estimate);
    // setToggleGST(toggleGST+1);
    setChange(true)
    setCurrentType(policy);
    setChange2(true);
    setChange(true);

  };

  // const handleToggleGSTHandler = () => {

  //   console.log(currentType,toggleGST);

  //   setPreRender(false);

    
  //   const isIncludeGSTInAssessed = (toggleGST+1)%2 === 0 && currentType === "Assessed"  ? true : false;
  //   const isIncludeGSTInEstimate = (toggleGST+1)%2 === 0 && currentType === "Estimate"  ? true : false;

  //   let total_estimate =0;
  //   let total_assessed=0;
  //   let updatedOne = [];
  //   allRows.map((row, index) => {

  //   const updatedRow = row;

  //   //for estimate calculate
  //   const overall_estimate = Number(row.estimate) * Number(row.qe);
  //   total_estimate = total_estimate + overall_estimate + (isIncludeGSTInEstimate ? (overall_estimate * Number(row.gst)) / 100 : 0);

  //   //total assessed calculate
  //   const overall_assessed = Number(row.assessed) * Number(row.qa);
  //   const subtract_dep = 0;
  //   const subtarct_final =  overall_assessed - subtract_dep;
  //   total_assessed = total_assessed + subtarct_final  + (isIncludeGSTInAssessed ? (subtarct_final * Number(row.gst)) / 100 : 0);
    
  //   //total calculation for every row
  //   const total =
  //   (Number(row.assessed)*Number(row.qa)) + (isIncludeGSTInAssessed ? (subtarct_final * Number(row.gst)) / 100 : 0);
  //   updatedRow.total = total;
  //   updatedOne.push(updatedRow)
  //   });
  //   setAllRows(updatedOne);
  //   setTotaAssessed(total_assessed);
  //   setTotalEstimate(total_estimate);
  //   setToggleGST(toggleGST+1);
  //   setChange(true)
  // };

  const handleTotalChange = () => {
    let updatedOne=[];
    allRows.map((row, index) => {

      const updatedRow = row;
  
      //total assessed calculate
      const overall_assessed = Number(row.assessed) * Number(row.qa);
      const subtract_dep = 0;
      const subtarct_final =  overall_assessed - subtract_dep;
      
      //total calculation for every row
      const total =
      subtarct_final ;
      updatedRow.total = total;
      updatedOne.push(updatedRow)
      });

      console.log("updted",updatedOne);
      setAllRows(updatedOne);
      setToggleGST(toggleGST+1);
      setChange(true)
  };

  // DepreciationPct = '${row.dep}',
  //   ItemName = '${row.description}',
  //   HSNCode='${row.sac}',
  //   Remark='${row.remark}',
  //   Estimate = '${row.estimate}',
  //   Assessed = '${row.assessed}',
  //   QA='${row.qa}',
  //   QE = '${row.qe}',
  //   BillSr = '${row.Bill_sr}',
  //   GSTPct='${row.gst}',
  //   TypeOfMaterial='${row.type}',
  //   WithoutTax='${row.total}'
  //   WHERE ReportID = ${row.sno};

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
    // console.log(currentField.total,subtract);
    const total_without = overall - subtract;
    const total =
    (Number(currentField.assessed) * Number(qa)) +( currentType === "Assessed"  ? (total_without * Number(currentField.gst)) / 100 : 0);

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
      qa: qa,
      bill_sr: currentField.bill_sr, // Assuming bill_sr increments with each new row
      gst: currentField.gst,
      total: total,
      type: currentField.type,
    };

    oldRow[index] = newOutput;
    setChange(true);
    setAllRows(oldRow);
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

  const handleTypeChange = (index, val, field) => {
    setChange2(true);
    let oldRow = allRows;
    const currentField = allRows[index];
    const len = val.length;

    const dep = calculateDepreciationsPercenatge(
      allDepreciations,
      val,
      DateOfRegistration
    );

    setMetalDep(dep);

    console.log(dep,val, DateOfRegistration);
    const type =
      String(field) === "type" 
        ? String(currentField.type) === val
          ? val.slice(-1, 1)
          : val
        : currentField.type;
        

    const overall = Number(currentField.assessed) * Number(currentField.qa);
    const subtract =
     0;
    const total_without = overall - subtract;
    const total = (Number(currentField.assessed) * Number(currentField.qa)) + (currentType === "Assessed"  ? (total_without * Number(gst)) / 100 : 0);



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
      type: type,
    };


    let total_metal=0;
    allRows.map((row,idx)=>{
      if(String(idx)===String(index)){
        if(val === "Metal"){
          total_metal = total_metal + (Number(currentField.assessed)*Number(currentField.qa)) * (Number(dep))/100;
        }
      }
      else{
        if(val === "Metal"){
          total_metal = total_metal + (Number(row.assessed)*Number(row.qa)) * (Number(row.dep))/100;
        }
      }
    })

    oldRow[index] = newOutput;
    setAllRows(oldRow);
   
    setMetalSalvageValue(total_metal);
    calculateTotalAssessed();
    calculateTotalEstimated();
    setChange(true);
    
    // console.log(oldRow);
  };



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

    const isIncludeGSTInAssessed =  String(currentType) === "Assessed"  ? true : false;
    
    //total assessed calculate
    const overall_assessed = Number(currentField.assessed) * Number(currentField.qa);
    const subtract_dep = (String(policyType) === "" || String(policyType) === "Regular") ? ((overall_assessed * Number(currentField.dep))/100): 0;
    const subtarct_final =  overall_assessed - subtract_dep;
    // console.log(overall_assessed-(String(policyType) === "" || String(policyType) === "Regular") ? ((overall_assessed * Number(currentField.dep))/100): 0);
   const total =
    (Number(currentField.assessed) * Number(currentField.qa)) + (isIncludeGSTInAssessed ? (subtarct_final * Number(gst)) / 100 : 0);
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

  console.log(toggleGST,currentType,"type");

  const gstToggleHandler = ()=>{
    setToggleGST( toggleGST+1);
    setChange(true)
  };

  useEffect(() => {
    let temp = [];
   
    const getData = () => {
      allRows.map((row, index) => {
        // console.log(row);
        const newRow = {
          _id: index + 1, // You may use a more robust ID generation logic
          row: (
            <button
              className="flaticon-minus"
              onClick={() => handleRemoveRow(index)}
            ></button>
          ),
          sno: index + 1,
          dep: (
            <input
              className="form-control form-control-table p-1"
              type="text"
              value={`${row.dep}%`}
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
              type="number"
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
              type="number"
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
          assessed: (
            <input
              className="form-control form-control-table"
              type="number"
              value={row.assessed}
              onChange={(e) => handleChange(index, e.target.value, "assessed")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          estimate: (
            <input
              className="form-control form-control-table"
              type="number"
              value={row.estimate}
              disabled={!edit}
              onChange={(e) => handleChange(index, e.target.value, "estimate")}
              required
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),

          qe: (
            <input
              className="form-control form-control-table"
              type="number"
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
              type="number"
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
              type="number"
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
              type="number"
              value={row.gst}
              onChange={(e) => handleGSTChange(index, e.target.value, "gst")}
              required
              disabled={!edit}
              id="terms"
              style={{ border: "1px solid black" }}
            />
          ),
          total: (
            <input
              className="form-control form-control-table"
              type="number"
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
              {allDepreciations.map((dep, index) => {
                return index > 0 &&
                  allDepreciations[index]?.PartType ===
                    allDepreciations[index - 1]?.PartType ? null : (
                  <option data-tokens="Status1" value={dep.PartType}>
                    {dep.PartType}
                  </option>
                );
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
  }, [change, edit,policyType,setAllRows,changeParts]);


  return (
    <SmartTable
      title=""
      ToggleGST={toggleGST}
      data={updatedCode}
      headCells={headCells}
      dep={metalDep}
      handleAddRow={handleAddRow}
      handleRemoveRow={handleRemoveRow}
      editHandler={editHandler}
      updateHandler={onSaveHandler}
      estimate={totalAssessed}
      vehicleAge = {calculateVehicleAge}
      gstToggleHandler={""}
      calculatePolicyAge={calculatePolicyAge}
      assessed={totalEstimate}
      preRender={preRender}
      difference={totalEstimate - totalAssessed}
      calculateDepreciationOnMetal={calculateDepreciationOnMetal}
      edit={edit}
      changeTotalAccordingToPolicyType={changeTotalAccordingToPolicyType}
    />
  );
}
