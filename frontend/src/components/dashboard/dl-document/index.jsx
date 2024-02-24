// import CopyrightFooter from "../common/footer/CopyrightFooter";
// import Footer from "../common/footer/Footer";
// import Header from "../common/header/DefaultHeader";
// import MobileMenu from "../common/header/MobileMenu";
// import PopupSignInUp from "../common/PopupSignInUp";
import DLData from "./CreatListing";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast from 'react-hot-toast'

const Index = () => {
  const router = useRouter();
  const [driverDetails,setDriverDetails]=useState({});
  const [isLoading,setIsLoading]=useState(true)
 
  useEffect(() => {

    const url = window.location.pathname;
    const leadId = url.split("/dl-document/")[1];
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getSpecificDriverDetails", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          LeadId: leadId,
        },
      })
      .then((res) => {
        console.log(res.data.data.driverDetails);
        setDriverDetails(res.data.data.driverDetails);
      })
      .catch((err) => {
        toast.error(err);
      });
      setIsLoading(false)
    },[]);
  return (
    <>
      <section className="" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <ErrorPageContent allInfo={allInfo} /> */}
              {isLoading ? "":<DLData driverDetails={driverDetails} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
