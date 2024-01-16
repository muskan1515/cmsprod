import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import Activities from "./Activities";
import AllStatistics from "./AllStatistics";
import StatisticsChart from "./StatisticsChart";
// import Sidebar from "../../common/header/dashboard/SideBar";
import Exemple from "./Exemple";
import CreateList from "./CreateList";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import Pagination from "./Pagination";
import { useRouter } from "next/router";

const Index = () => {
  const [start, setStart] = useState(0);

  const [end, setEnd] = useState(4);
  const [properties, setProperties] = useState([]);
  const [allClaims, setAllClaims] = useState([]);
  const [type, setType] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const [filterClaims, setFilterClaims] = useState([]);
  const [majorSearch, setMajorSearch] = useState("");

  const [isRegionChange, setIsRegionChange] = useState(false);

  useEffect(() => {
    let filterClaim;
    if (type === 1) {
      filterClaim = allClaims.filter((claim, index) =>
        claim?.PolicyNo?.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (type === 2) {
      filterClaim = allClaims.filter((claim, index) =>
        claim?.RegistrationNo?.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      filterClaim = allClaims.filter((claim, index) =>
        claim?.ReferenceID?.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilterClaims(filterClaim);
  }, [searchInput]);

  useEffect(() => {
    let filterClaim;

    filterClaim = allClaims.filter(
      (claim, index) =>
        claim?.PolicyNo?.toLowerCase().includes(majorSearch.toLowerCase()) ||
        claim?.PolicyHolder?.toLowerCase().includes(
          majorSearch.toLowerCase()
        ) ||
        claim?.ReferenceID?.toLowerCase().includes(majorSearch.toLowerCase()) ||
        claim?.RegistrationNo?.toLowerCase().includes(
          majorSearch.toLowerCase()
        ) ||
        claim?.AssignedGarage?.toLowerCase().includes(majorSearch.toLowerCase())
    );

    // console.log("claims",filterClaim);
    setFilterClaims(filterClaim);
  }, [majorSearch]);

  useEffect(() => {
    let filterClaim;
    const region = JSON.parse(localStorage.getItem("regionType"));

    if (region) {
      filterClaim = allClaims.filter((claim, index) => {
        const regiontest = claim?.reference_id?.split("/")[0];
        if (region.toLowerCase().includes(regiontest?.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });

      setFilterClaims(filterClaim);
    }
  }, [isRegionChange]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      router.push("/login");
    }
    // console.log(userInfo[0].Token)
    axios
      .get("/api/getAllClaims", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.data[0]);
        setAllClaims(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header setIsRegionChange={setIsRegionChange} isDashboard={true} />

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

              <div
                className="row mt-2"
                style={{ justifyContent: "space-between" }}
              >
                <AllStatistics />
              </div>
              {/* End .row Dashboard top statistics */}
              <div
                className=" bg-dark"
                style={{
                  width: "101%",
                  height: "3px",
                  color: "blue",
                  border: "1px solid",
                  marginBottom: "5px",
                  marginLeft: "-12px",
                }}
              ></div>
              <div className="row">
                <CreateList setSearchInput={setSearchInput} setType={setType} />
              </div>
              <div
                className="bg-dark"
                style={{
                  width: "101%",
                  height: "3px",
                  color: "blue",
                  border: "1px solid blue",
                  marginLeft: "-12px",
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
                <Exemple
                  claims={
                    searchInput || majorSearch || isRegionChange
                      ? filterClaims
                      : allClaims
                  }
                  setMajorSearch={setMajorSearch}
                />
                {/* <div className="col-xl-5">
                  <div className="recent_job_activity">
                    <h4 className="title mb-4">Recent Activities</h4>
                    <Activities />
                  </div>
                </div> */}
              </div>
              {/* End .row  */}

              <div className="row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination
                      setStart={setStart}
                      setEnd={setEnd}
                      properties={allClaims}
                    />
                  </div>
                </div>
              </div>

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

export default Index;
