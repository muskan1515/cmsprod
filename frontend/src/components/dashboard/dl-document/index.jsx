// import CopyrightFooter from "../common/footer/CopyrightFooter";
// import Footer from "../common/footer/Footer";
// import Header from "../common/header/DefaultHeader";
// import MobileMenu from "../common/header/MobileMenu";
// import PopupSignInUp from "../common/PopupSignInUp";
import DLData from "./CreatListing";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { leadId } = router.query;
 
  return (
    <>
      <section className="" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <ErrorPageContent allInfo={allInfo} /> */}
              <DLData leadId={leadId} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
