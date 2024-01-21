import { useEffect, useState } from "react";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import Exemple from "./Exemple";
import axios from "axios";
import toast from "react-hot-toast";

const Index = () => {
  const url = window.location.href;
  const leadId = url.split("http://localhost:3000/documents/")[1];
  const [status , setStatus]=useState([]);
  const [document,setDocument]=useState([]);
  const [uploadedData,setUpdatedData] = useState([]);
  
  const types = [
    {name : "Driving licence"},
    {name : "Certificate of registration"},
    {name : "Repair Estimate"},
    {name : "Claim form"},
    {name : "Insurance policy"},
    {name : "Damage vehicle photographs/video"},
    {name : "Aadhar card"},
    {name : "Pan card"},
    {name : "Cancel cheque"},
    {name : "Satisfaction voucher"},
    {name : "Discharge voucher"},
    {name : "Dismantle photographs"},
    {name : "Reinspection photographs"},
    {name : "Repair Invoice"},
    {name : "Payment/cash receipt"},
  ]


  useEffect(()=>{

    
    const unserInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
    .get("/api/getStatus", {
      headers: {
        Authorization: `Bearer ${unserInfo[0].Token}`,
        "Content-Type": "application/json",
      },
      params:{
        leadId:""
      }
    })
    .then((res) => {
      const temp = res.data.data;
      console.log(temp);
     const updatedStatus = temp.filter((data,index)=>{
      if(String(data.LeadId) ===  leadId){
        return true;
      }
      else{
        return false;
      }
      
     })

     const statlen = updatedStatus.length;

     setStatus(updatedStatus[statlen-1]);
    })
    .catch((err) => {
      console.log(err);
    });


    axios
    .get("/api/getDocumentList", {
      headers: {
        Authorization: `Bearer ${unserInfo[0].Token}`,
        "Content-Type": "application/json",
      },
      params:{
        leadId:leadId
      }
    })
    .then((res) => {
      const temp = res.data.data;
      console.log(temp);
     const updatedStatus = temp.filter((data,index)=>{
      if(String(data.LeadId) ===  leadId){
        return true;
      }
      else{
        return false;
      }
      
     })
     setDocument(updatedStatus);
    })
    .catch((err) => {
      console.log(err);
    });

  
  },[])

  
  const onSubmitHandler = ()=>{

    let data = [];
    for(let i =0;i<15;i= i+1){
        const temp = types[i].name;
        const tempArray = [];
        uploadedData.map((data,index)=>{
            if(data.docName === temp){
              tempArray.push(data.data);
            }
        });

        if(tempArray.length > 0){
        data.push({
          leadId : leadId,
          docName : temp,
          data : tempArray
        })
      }
    }
    
    
    const unserInfo = JSON.parse(localStorage.getItem("userInfo"));
   
    const payload = JSON.stringify({data :  data});
    console.log(data);
``
    
    toast.loading("Uploading!")
    axios.post("/api/uploadDocument",payload,{
      headers: {
      'Authorization':`Bearer ${unserInfo[0].Token}`,
      'Content-Type': 'application/json',
    },
  })
  .then((res)=>{
    alert("Successfully uploaded!!!");
  })
  .catch((err)=>{
    alert(err);
  })

 
  }

  console.log(leadId);
  
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Our Error Page --> */}
      <section className="our-error bgc-f7 mt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              {/* <ErrorPageContent /> */}
              <Exemple  
              setUpdatedData={setUpdatedData} 
              uploadedData={uploadedData} 
              leadId={leadId} 
              status={status}
              document={document}/>
              <button className="btn btn-color" onClick={onSubmitHandler}>Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      {/* <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer Bottom Area --> */}
      <div className="footer_middle_area">
        <div className="container">
          <CopyrightFooter />
        </div>
      </div>
    </>
  );
};

export default Index;
