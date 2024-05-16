import React, { useEffect } from "react";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { totalLossData } from "./functions/totalLossContent";
import { replaceFunction } from "./functions/getTotalLossContentFunctions";
import { getTotalLoss } from "../final-report/getEditorContent/totalLoss";
import { string } from "prop-types";
import axios from "axios";

const TotalLossCalculation = ({ allInfo }) => {
 
  const [allLabour,setallLabour] =useState([]);
  const [allNewParts,setallNewParts] = useState([]);
  const [allDepreciations,setallDepreciations] = useState([]);
  const [currentGst,setcurrentGst] = useState(0);
  const [requiredData,setrequiredData] = useState(totalLossData(allInfo,allLabour,allNewParts,allDepreciations,currentGst));

  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getAllDepreciationList", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setallDepreciations(res.data.data.results);
      })
      .catch((Err) => {
        alert(Err);
      });

      const defaultLabour = allInfo?.labourDetails;
      let requiredGST = 0;
      defaultLabour.map((labour,index)=>{
        if(Number(labour.GSTPercentage) !== 0){
          requiredGST = Number(labour.GSTPercentage);
        }
      })
      const defaultNewParts = allInfo?.newPartsDetails;

      setallLabour(defaultLabour);
      setallNewParts(defaultNewParts);
      setcurrentGst(requiredGST);
  },[]);


  useEffect(()=>{
    const value =totalLossData(allInfo,allLabour,allNewParts,allDepreciations,currentGst);
    setrequiredData(value);
  },[allInfo,allDepreciations,allNewParts,allLabour])
  return (
    requiredData
  );
};

export default TotalLossCalculation;
