import { useEffect, useState } from "react";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import ChatboxContent from "./ChatboxContent";
import CreateList from "./CreateList";
import Form from "./Form";
import Form_01 from "./Form_01";
<<<<<<< Updated upstream
import Form_02 from "./Form_02";
import toast from "react-hot-toast";
import axios from "axios";
=======
import StatusLog from "./StatusLog";
>>>>>>> Stashed changes
// import FloorPlans from "./FloorPlans";
// import LocationField from "./LocationField";
// import PropertyMediaUploader from "./PropertyMediaUploader";

const Index = ({}) => {
 const url = window.location.href;
 const leadId = url.split('/claim-details?leadId=')[1];
 const [claim,setClaim] = useState({});
 const [InsuredName,setInsuredName] = useState(claim?.InsuredName ? claim.InsuredName : "")
 const [InsuredMailAddress,setInsuredMailAddress] = useState(claim?.InsuredMailAddress ? claim.InsuredMailAddress : "")
 const [InsuredMobileNo1,setInsuredMobileNo1] = useState(claim?.InsuredMobileNo1 ? claim.InsuredMobileNo1 : "")
 const [InsuredMobileNo2,setInsuredMobileNo2] = useState(claim?.InsuredMobileNo2 ? claim.InsuredMobileNo2 : "")
 const [subType,setSubType] = useState("");
 const [requestType,setRequestType] = useState("");



 const [edit,setEdit] = useState(false);

 const editHandler = ()=>{
  setEdit(true);
 }

 const subTypeTypes = [
  {id:1,"type":"Motor","value":"Motor"},
  {id:1,"type":"Non-Motor","value":"Non-Motor"},
  {id:1,"type":"Motor-2W","value":"Motor-2W"},
  {id:1,"type":"Motor-4W","value":"Motor-4W"}
 ]

 const requestTypeTypes = [
  {id:1,"type":"SPOT","value":"SPOT"},
  {id:1,"type":"Final","value":"Final"},
  {id:1,"type":"re-inspection","value":"re-inspection"}
 ]

  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios.get("/api/getSpecificClaim",{
      headers:{
        Authorization:`Bearer ${userInfo[0].Token}`,
        "Content-Type":"application/json"
      },
      params:{
        LeadId:leadId
      }
    })
    .then((res)=>{
      console.log(res.data.data[0][0]);
      setClaim(res.data.data[0][0]);
    })
    .catch((err)=>{
      toast.error(err)
    })
  },[leadId]);
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
                {/* End Dashboard Navigation */}

                <div className="col-lg-12 mb-2">
                  <div className="style2">
                   <button onClick={editHandler}>{edit ? "Save" : "Edit"}</button>
                  </div>
                </div>
                {/* End .col */}

                <div className="row">
                  <div className="col-lg-9">
                    <div className="my_dashboard_review">
                      <div className="row">
                        <div className="col-lg-12">
                          <h4 className="mb10">Case Details</h4>
                        </div>
                        <div
                          className=" bg-dark"
                          style={{
                            width: "100%",
                            height: "3px",
                            color: "blue",
                            border: "1px solid",
                            marginBottom: "5px",
                          }}
                        ></div>
                        <CreateList 
                        claim={claim}
                        InsuredName={InsuredName}
                        setInsuredName={setInsuredName}
                        InsuredMailAddress={InsuredMailAddress}
                        setInsuredMailAddress={setInsuredMailAddress}
                        InsuredMobileNo1={InsuredMobileNo1}
                        setInsuredMobileNo1={setInsuredMobileNo1}
                        InsuredMobileNo2={InsuredMobileNo2}
                        setInsuredMobileNo2={setInsuredMobileNo2}
                        requestTypeTypes={requestTypeTypes}
                        subTypeTypes={subTypeTypes}
                        edit={edit}
                        />
                      </div>
                      <div className="row" style={{}}>
                        <div className="col-lg-12">
                          {/* <h4 className="mb10">Case Details</h4> */}
                        </div>
                        <div
                          className=" bg-dark"
                          style={{
                            width: "100%",
                            height: "3px",
                            color: "blue",
                            border: "1px solid",
                            marginBottom: "5px",
                          }}
                        ></div>
                        <Form claim={claim} edit={edit} />
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          {/* <h4 className="mb10">Case Details</h4> */}
                        </div>
                        <div
                          className=" bg-dark"
                          style={{
                            width: "100%",
                            height: "3px",
                            color: "blue",
                            border: "1px solid",
                            marginBottom: "5px",
                          }}
                        ></div>
                        <Form_01 claim={claim}  edit={edit}/>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                      {/* <h4 className="mb10">Case Details</h4> */}
                    </div>
                    <div
                      className=" bg-dark"
                      style={{
                        width: "100%",
                        height: "3px",
                        color: "blue",
                        border: "1px solid",
                        marginBottom: "5px",
                      }}
                    ></div>
                    <Form_02 claim={claim} edit={edit}/>
                  </div>
                    {/* <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Location</h3>
                      </div>

                      <LocationField />
                    </div>
                  </div> */}
                    {/* <div className="my_dashboard_review mt30">
                      <div className="col-lg-12">
                        <h3 className="mb30">Detailed Information</h3>
                      </div>
                      <DetailedInfo />
                    </div> */}
                    {/* <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Property media</h3>
                    </div>
                    <PropertyMediaUploader />
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Floor Plans</h3>
                      <button className="btn admore_btn mb30">Add More</button>
                    </div>
                    <FloorPlans />
                  </div> */}
                  </div>
                  <div className="col-lg-3">
                    <div className="my_dashboard_review">
                      <div className="row">
                        <div className="row">
                          <div className="col-lg-12">
                            <h4 className="mb10">Status Log</h4>
                          </div>
                          <div
                            className=" bg-dark"
                            style={{
                              width: "100%",
                              height: "3px",
                              color: "blue",
                              border: "1px solid",
                              marginBottom: "5px",
                            }}
                          ></div>
                          <StatusLog />
                          {/* <CreateList /> */}
                        </div>
                        <div className="row mt-4">
                          <div className="col-lg-12">
                            <h4 className="mb10">Comment Box</h4>
                          </div>
                          <div
                            className=" bg-dark"
                            style={{
                              width: "100%",
                              height: "3px",
                              color: "blue",
                              border: "1px solid",
                              marginBottom: "5px",
                            }}
                          ></div>
                          <ChatboxContent />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row mt200">
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
