import axios from "axios";
import { useEffect, useState } from "react";

const StatusLog = ({leadId,status,statusOptions,subStatus,claim}) => {

  const [stat , setStat] = useState(0);
  const [subStage,setSubStage] = useState(0);
  const [currentStatus,setCurrentStatus]=useState(1);

  useEffect(()=>{
    let stat2 = {};
    if(status.length <= 0){

    }
    else{

    status?.map((stat,index)=>{
      if(String(stat.LeadId) === String(leadId)){
        stat2=stat;
      }
    });
  }

    setCurrentStatus(stat2?.Status);

  },[status.length]);
  const onSubmitHandler = ()=>{

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const payload = {
      LeadId : Number(leadId),
      Status :  Number(stat) ,
      subStage : subStage ?Number(subStage) : Number(3),
      token : Number(userInfo[0].Token)
    };

    console.log(payload);
    axios.put("/api/updateStatus",payload,{
      headers:{
        Authorization:`Bearer ${userInfo[0].Token}`,
        "Content-Type":"application/json"
      }
    }).then((res)=>{
      alert("Successfully Updated!!");
      window.location.reload();
    }).catch((err)=>{
      alert(err);
    });
  }
  const getCurrentStatus=()=>{
    let status = "";
    statusOptions.map((stat,index)=>{
      if(stat.id === currentStatus)
       status = stat;
    });
    return status;
  }
  console.log(status);
  return (
    <>
      <div className="col-lg-12">
        <div className="row my_profile_setting_input form-group">
          <div className="col-lg-12 mb-2 mt-2">
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              value={stat ? stat : currentStatus}
              onChange={(e)=>setStat(e.target.value)}
            >
              {statusOptions.map((stat,index)=>{
                return ( stat.id === currentStatus+1 || stat.id === currentStatus -1 || stat.id === currentStatus) ?  <option key={index} data-tokens="Status1" value={stat.id} >{stat.value}</option>
                  :  null

              })}
            </select>
          </div>
        
          <div className="col-lg-12 text-center mt-2">
            <div className="my_profile_setting_input">
              <button className="btn btn-color w-100" onClick={onSubmitHandler}>Update Status</button>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default StatusLog;
