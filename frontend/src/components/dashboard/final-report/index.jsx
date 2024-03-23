import { useEffect, useState } from "react";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import PropertyVideo from "./PropertyVideo";
import axios from "axios";
import ReportFinal from "../report-template/MainRouter";
import { useRouter } from "next/router";

const Index = ({ SomeComponent, leadId }) => {
  const [lastActivityTimestamp, setLastActivityTimestamp] = useState(
    Date.now()
  );

  const router = useRouter();

  useEffect(() => {
    
    const activityHandler = () => {
      setLastActivityTimestamp(Date.now());
    };

    // Attach event listeners for user activity
    window.addEventListener("mousemove", activityHandler);
    window.addEventListener("keydown", activityHandler);
    window.addEventListener("click", activityHandler);

    // Cleanup event listeners when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", activityHandler);
      window.removeEventListener("keydown", activityHandler);
      window.removeEventListener("click", activityHandler);
    };
  }, []);

  useEffect(() => {
    let userData = {};
    userData = JSON.parse(localStorage.getItem("userInfo"));
    if (!userData) {
      router.push("/login");
    }
    const inactivityCheckInterval = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastActivity = currentTime - lastActivityTimestamp;
      if (timeSinceLastActivity > 600000) {
        localStorage.removeItem("userInfo");
        router.push("/login");
      }
    }, 60000);
    return () => clearInterval(inactivityCheckInterval);
  }, [lastActivityTimestamp]);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu leadId={leadId}/>
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                {/* <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Message</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div> */}
              </div>
              {/* End .row */}
              <div className="shop_single_tab_content style2">
                <PropertyVideo SomeComponent={SomeComponent} leadId={leadId} />
              </div>

              {/* <ChatBox /> */}
              {/* End message box */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>
                      {" "}
                      &copy; {new Date().getFullYear()} Infostics. Made with
                      love.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
