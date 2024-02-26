import { useEffect , useState } from "react";
import ErrorPageContent from "./ErrorPageContent";
import toast from "react-hot-toast";
import axios from "axios";

const Index = () => {
  const [feeReport,setFeeReport]=useState({});
  useEffect(()=>{
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const url = window.location.pathname;
    const leadId=url.split("/bill-document/")[1];
    toast.loading("Fetching details!!!");
    axios
    .get("/api/getFeeReport", {
      headers: {
        Authorization: `Bearer ${userInfo[0].Token}`,
        "Content-Type": "application/json",
      },
      params: {
        LeadId: leadId,
      },
    })
    .then((res) => {
      toast.dismiss()
      setFeeReport(res.data.data);
      toast.success("Successfully Fetched !!")
    })
    .catch((err) => {
      toast.dismiss()
      toast.error(err);
    });

  },[]);
  return (
    <>
     
      <section className="" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ErrorPageContent  feeReport={feeReport}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
