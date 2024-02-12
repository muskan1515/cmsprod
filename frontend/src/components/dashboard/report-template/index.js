import React, { useEffect, useState } from 'react';
import LinksComponent from './MainRouter';
import axios from 'axios';

const FrameSetComponent = () => {

  const [allInfo,setAllInfo]=useState(null);

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const url = window.location.pathname;
    const leadId = url.split("/report-template/")[1];

    console.log(leadId)
    axios.get("/api/getReportInfo",{
      headers:{
        Authorization:`Bearer ${userData[0].Token}`
      },
      params:{
        LeadId : leadId
      }
    })
    .then((res)=>{
      setAllInfo(res.data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);
  return (
    <div>
        <LinksComponent  allInfo={allInfo}/>
    </div>
  );
};

export default FrameSetComponent;
