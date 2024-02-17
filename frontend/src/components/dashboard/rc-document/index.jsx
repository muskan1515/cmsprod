// import CopyrightFooter from "../common/footer/CopyrightFooter";
// import Footer from "../common/footer/Footer";
// import Header from "../common/header/DefaultHeader";
// import MobileMenu from "../common/header/MobileMenu";
// import PopupSignInUp from "../common/PopupSignInUp";
import RCData from "./CreatListing";
import { useEffect, useState } from "react";
import axios from "axios";

const Index = ({leadId}) => {
  const [vehicleDetails,setDriverDetails]=useState({});
 
  useEffect(() => {

    const url = window.location.pathname;
    const leadId = url.split("/rc-document/")[1];
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getSpecificVehicleDetails", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          LeadId: leadId,
        },
      })
      .then((res) => {
       
        setDriverDetails(res.data.data.vehicleDetails);
      })
      .catch((err) => {
        toast.error(err);
      });
    },[]);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      {/* <Header /> */}

      {/* <!--  Mobile Menu --> */}
      {/* <MobileMenu /> */}

      {/* <!-- Modal --> */}
      {/* <PopupSignInUp /> */}
      {/* <!-- Our Error Page --> */}
      <section className="" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <ErrorPageContent allInfo={allInfo} /> */}
              <RCData vehicleDetails = {vehicleDetails} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
