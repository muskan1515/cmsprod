import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const StatusLog = ({leadId,status,statusOptions,subStatus,claim,documents}) => {

  const [stat , setStat] = useState(0);
  const [subStage,setSubStage] = useState(0);
  const [currentStatus,setCurrentStatus]=useState(1);

  console.log("status",documents);

  const [allDocumentLabels,setALlDocumentLabels]=useState([]);

  useEffect(()=>{
    axios.get("/api/getDocumentListLabels", {
      headers: {
        Authorization: `Bearer ${""}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
        console.log("DocumentLabels",res.data.data.results);
        setALlDocumentLabels(res.data.data.results);
    })  
    .catch((err) => {
      console.log(err);
    });
  },[]);
  let data = [
    {
      serial_num: "1",
      doc_name: "Driving licence",
    },
    {
      serial_num: "2",
      doc_name: "Certificate of registration",
    },
    {
      serial_num: "3",
      doc_name: "Repair Estimate",
    },
    {
      serial_num: "4",
      doc_name: "Claim form",
    },
    {
      serial_num: "5",
      doc_name: "Insurance policy",
    },
    {
      serial_num: "6",
      doc_name: "Damage vehicle photographs/video",
    },
    {
      serial_num: "7",
      doc_name: "Aadhar card",
    },
    {
      serial_num: "8",
      doc_name: "Pan card",
    },
    {
      serial_num: "9",
      doc_name: " Cancel cheque",
    },
    {
      serial_num: "10",
      doc_name: " Satisfaction voucher",
    },
    {
      serial_num: "11",
      doc_name: "Discharge voucher",
    },
    {
      serial_num: "12",
      doc_name: "Dismantle photographs",
    },
    {
      serial_num: "13",
      doc_name: "Reinspection photographs",
    },
    {
      serial_num: "14",
      doc_name: "Repair Invoice",
    },
    {
      serial_num: "15",
      doc_name: "Payment/cash receipt",
    },
    {
      serial_num: "16",
      doc_name: "Images",
    },
    {
      serial_num: "17",
      doc_name: "Videos",
    },
  ];

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

  const getValueFromDocName=(docName)=>{
    let value = 0;
    allDocumentLabels.map((temp,index)=>{
      if(String(temp.DocumentName) === String(docName)){
        value = temp.id;
      }
    })

    return value;
  }

  const getUpperBound = ()=>{
    if(String(stat)=== "1")
      return 5;
    if(String(stat)=== "2")
      return 5;
    if(String(stat)=== "3")
      return 5;
    if(String(stat)=== "4")
      return 5;
    if(String(stat)=== "5")
      return 5;
  }


  //function to update the status on documents validation
  const checkIsValidated = ()=>{
      let arr = new Array(allDocumentLabels.length + 1).fill(0);
      documents?.map((doc,index)=>{
        const value = getValueFromDocName(doc.docName);
        arr[value] = value;
      })

      const upperValue = getUpperBound();
      arr[0]=1;

      let canUpdateStatus = true;
      arr.map((value,index)=>{
       if( index <=5  && value === 0){
          canUpdateStatus = false;
       }
      })

      
      console.log(upperValue,arr,canUpdateStatus);
      return canUpdateStatus;

      
  }
  const onSubmitHandler = ()=>{

    const canUpdate = checkIsValidated();
 
    if(!canUpdate && stat>1){
      toast.error("Cannot update Status as documents are filled !");
    }
    else{
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const payload = {
      LeadId : Number(leadId),
      Status :  (stat) ,
      subStage : subStage ?Number(subStage) : Number(3),
      token : Number(userInfo[0].Token)
    };

    toast.loading("updatign the status!!", {
      // position: toast.POSITION.BOTTOM_LEFT,
      className: "toast-loading-message",
    });
    axios.put("/api/updateStatus",payload,{
      headers:{
        Authorization:`Bearer ${userInfo[0].Token}`,
        "Content-Type":"application/json"
      }
    }).then((res)=>{
      toast.dismiss();
          // toast.success("Successfully added");
          toast.success("Successfully updated !", {
            // position: toast.POSITION.BOTTOM_LEFT,
            className: "toast-loading-message",
          });
      window.location.reload();
    }).catch((err)=>{
      toast.dismiss();
          toast.error("Got error while updating status!");
    });
  }
  }
  const getCurrentStatus=()=>{
    let status = "";
    statusOptions.map((stat,index)=>{
      if(stat.id === currentStatus)
       status = stat;
    });
    return status;
  }
  console.log(stat);
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
