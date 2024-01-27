import { useState } from "react";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import PropertyVideo from "./PropertyVideo";

const Index = ({SomeComponent}) => {
  const [isEditModal,setIsEditModal] = useState(false);
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


                {isEditModal && (
                  <div className="modal">
                    <div className="modal-content">
                      <h3 className="text-center">Quote Confirmation</h3>
                      <h5 className="text-center">
                        Are you sure you want to quote this property over this
                        amount : ?
                      </h5>
                      {/* <p>Are you sure you want to delete the property: {property.area}?</p> */}
                      <div className="text-center" style={{}}>
                        <button
                          className="btn w-35 btn-thm3 m-2"
                          onClick={()=>("")}
                        >
                          Submit
                        </button>
                        <button
                          className="btn w-35 btn-white"
                          onClick={()=>setIsEditModal(true)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              
              </div>
              {/* End .row */}
              <div className="shop_single_tab_content style2 mt30">
                <PropertyVideo  SomeComponent={SomeComponent} setIsEditModal={setIsEditModal}/>
              </div>

              {/* <ChatBox /> */}
              {/* End message box */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
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
