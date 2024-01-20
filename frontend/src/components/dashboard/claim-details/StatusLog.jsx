import axios from "axios";
import { useEffect, useState } from "react";

const StatusLog = ({leadId,status,statusOptions,subStatus}) => {

  const [stat , setStat] = useState(0);
  const [subStage,setSubStage] = useState(0);

  const onSubmitHandler = ()=>{

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const payload = {
      LeadId : Number(leadId),
      Status : stat ? Number(stat) : Number(status[0].Status +1),
      subStage : subStage ?Number(subStage) : Number(3),
      token : Number(userInfo[0].Token)
    };
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
  return (
    <>
      <div className="col-lg-12">
        <div className="row my_profile_setting_input form-group">
          <div className="col-lg-12 mb-2 mt-2">
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              onChange={(e)=>setStat(e.target.value)}
            >
              {statusOptions.map((stat,index)=>{
                return  <option data-tokens="Status1" value={stat.id} disabled={status[0]?.Status >= stat.id ? true : false }>{stat.value}</option>
              })}
            </select>
          </div>
          <div className="col-lg-12">
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              onChange={(e)=>setSubStage(e.target.value)}
            >
            {subStatus.map((stat,index)=>{
              return  <option data-tokens="Status1" value={stat.id} >{stat.value}</option>
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
