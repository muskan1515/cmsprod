// import CopyrightFooter from "../common/footer/CopyrightFooter";
// import Footer from "../common/footer/Footer";
// import Header from "../common/header/DefaultHeader";
// import MobileMenu from "../common/header/MobileMenu";
// import PopupSignInUp from "../common/PopupSignInUp";
import { useEffect, useState } from "react";
import ErrorPageContent from "./ErrorPageContent";
import axios from "axios";

const Index = () => {
  const [allInfo, setAllInfo] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const url = window.location.pathname;
    const leadId = url.split("/report-document/")[1];

    console.log(leadId);
    axios
      .get("/api/getReportInfo", {
        headers: {
          Authorization: `Bearer ${userData[0].Token}`,
        },
        params: {
          LeadId: leadId,
        },
      })
      .then((res) => {
        setAllInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              <ErrorPageContent allInfo ={allInfo}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
