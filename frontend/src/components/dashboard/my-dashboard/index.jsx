import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import Activities from "./Activities";
import AllStatistics from "./AllStatistics";
import StatisticsChart from "./StatisticsChart";
// import Sidebar from "../../common/header/dashboard/SideBar";
import Exemple from "./Exemple";
import CreateList from "./CreateList";

const index = () => {
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
          <SidebarMenu />
          {/* <Sidebar /> */}
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
                    <h2 className="breadcrumb_title">Howdy, Hasan</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div> */}
              </div>
              {/* End .row */}

              <div className="row" style={{ justifyContent: "space-between" }}>
                <AllStatistics />
              </div>
              {/* End .row Dashboard top statistics */}
              <div
                className=" bg-dark"
                style={{
                  width: "100%",
                  height: "3px",
                  color: "blue",
                  border: "1px solid",
                  marginBottom:"5px"
                }}
              ></div>
              <div className="row">
                <CreateList />
              </div>
              <div
                className="bg-dark"
                style={{
                  width: "100%",
                  height: "4px",
                  color: "blue",
                  border: "1px solid blue",
                }}
              ></div>
              <div className="row">
                {/* <div className="col-xl-7">
                  <div className="application_statics">
                    <h4 className="mb-4">View Statistics</h4>
                    <StatisticsChart />
                  </div>
                </div> */}
                {/* End statistics chart */}
                <Exemple />
                {/* <div className="col-xl-5">
                  <div className="recent_job_activity">
                    <h4 className="title mb-4">Recent Activities</h4>
                    <Activities />
                  </div>
                </div> */}
              </div>
              {/* End .row  */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    {/* <p>© 2020 Find House. Made with love.</p> */}
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

export default index;
