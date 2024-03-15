// import CopyrightFooter from "../common/footer/CopyrightFooter";
// import Footer from "../common/footer/Footer";
// import Header from "../common/header/DefaultHeader";
// import MobileMenu from "../common/header/MobileMenu";
// import PopupSignInUp from "../common/PopupSignInUp";
import { useEffect, useState } from "react";
import ErrorPageContent from "./ErrorPageContent";
import axios from "axios";
import Image from "next/image";
import { useRef } from "react";
import PrintComponent from "./PrintComponent";
import toast from "react-hot-toast";

const Index = () => {
  const [allInfo, setAllInfo] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const url = window.location.pathname;
    const leadId = url.split("/report-document/")[1];

    console.log(leadId);
    toast.loading("Loading the report!!", {
      // position: toast.POSITION.BOTTOM_LEFT,
      className: "toast-loading-message",
    });
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
        toast.dismiss();
        // toast.success("Successfully added");
        toast.success("Successfully loaded !", {
          // position: toast.POSITION.BOTTOM_LEFT,
          className: "toast-loading-message",
        });
        setAllInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss();
        toast.error("Got error while loading report!");
      });
  }, []);
  return (
    <>
      <div>
        <PrintComponent>
          <div>
            {
              <section className="" style={{ paddingTop: "10px" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <ErrorPageContent allInfo={allInfo} />
                    </div>
                  </div>
                </div>
              </section>
            }
          </div>
        </PrintComponent>
      </div>
    </>
  );
};

export default Index;
