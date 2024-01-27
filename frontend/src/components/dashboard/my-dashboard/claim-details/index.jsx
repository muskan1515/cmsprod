import Header from "../../common/header/dashboard/Header_01";
import { useEffect, useState } from "react";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import ChatboxContent from "./ChatboxContent";
// import CreateList from "./CreateList";
import Form from "./Form";
import Form_01 from "./Form_01";
import Form_02 from "./Form_02";
import toast from "react-hot-toast";
import axios from "axios";
import StatusLog from "./StatusLog";
import Exemple from "./Exemple";
import UploadReort from "./UploadReport";
import PaymentDetails from "./PaymentDetails";
import GarageDetails from "./GarageDetails";
import CreateList from "./CreateList";
import CreateList_01 from "./CreateList_01";
import Video from "./Video";
import EstimateList from "./EstimateList";
import CreateList_02 from "./CreateList_02";
import CreateList_03 from "./CreateList_03";
import CreateList_04 from "./CreateList_04";
// import FloorPlans from "./FloorPlans";
// import LocationField from "./LocationField";
// import PropertyMediaUploader from "./PropertyMediaUploader";

const Index = ({}) => {
  const url = window.location.href;
  const leadId = url.split("/claim-details?leadId=")[1];
  const [claim, setClaim] = useState({});

  const [videosList,setVideosList]=useState([]);
  const [InsuredName, setInsuredName] = useState(
    claim?.insuredDetails?.InsuredName ? claim?.insuredDetails?.InsuredName : ""
  );
  const [InsuredMailAddress, setInsuredMailAddress] = useState(
    claim?.insuredDetails?.InsuredMailAddress
      ? claim?.insuredDetails?.InsuredMailAddress
      : ""
  );
  const [InsuredMobileNo1, setInsuredMobileNo1] = useState(
    claim?.insuredDetails?.InsuredMobileNo1
      ? claim?.insuredDetails?.InsuredMobileNo1
      : ""
  );
  const [InsuredMobileNo2, setInsuredMobileNo2] = useState(
    claim?.insuredDetails?.InsuredMobileNo2
      ? claim?.insuredDetails?.InsuredMobileNo2
      : ""
  );
  const [subType, setSubType] = useState("Motor");
  const [requestType, setRequestType] = useState("Spot");

  const [documents, setDocuments] = useState([]);

  const [ClaimNumber, setClaimNumber] = useState(
    claim?.claimDetails?.ClaimNumber ? claim?.ClaimNumber?.ClaimNumber : ""
  );

  const [VehicleModel, setVehicleModel] = useState(
    claim.vehicleDetails?.VehicleMakeVariantModelColor
      ? `${claim.vehicleDetails?.VehicleMakeVariantModelColor},${claim.vehicleDetails?.VehicleTypeOfBody}`
      : ""
  );

  const [EngineType, setEngineType] = useState(
    claim?.vehicleDetails?.VehicleModeOfCheck
      ? claim?.vehicleDetails?.VehicleModeOfCheck
      : ""
  );
  const [RegisteredOwner, setRegisteredOwner] = useState(
    claim?.vehicleDetails?.VehicleRegisteredOwner
      ? claim?.vehicleDetails?.VehicleRegisteredOwner
      : ""
  );
  const [DateRegistration, setDateRegistration] = useState(
    claim?.claimDetails?.ReferenceNo ? claim?.claimDetails?.ReferenceNo : ""
  );
  const [PUCNumber, setPUCNumber] = useState(
    claim?.vehicleDetails?.VehiclePucNumber
      ? claim?.vehicleDetails?.VehiclePucNumber
      : null
  );
  const [TransferDate, setTransferDate] = useState(
    claim?.vehicleDetails?.VehicleTransferDate
      ? claim?.vehicleDetails?.VehicleTransferDate
      : null
  );
  const [EngineNumber, setEngineNumber] = useState(
    claim?.vehicleDetails?.VehicleEngineNumber
      ? claim?.vehicleDetails?.VehicleEngineNumber
      : null
  );
  const [AddedBy, setAddedBy] = useState(
    claim?.vehicleDetails?.VehicleAddedBy
      ? claim?.vehicleDetails?.VehicleAddedBy
      : null
  );
  const [IssuingAuthority, setIssuingAuthority] = useState(
    claim?.vehicleDetails?.IssuingAuthority
      ? claim?.vehicleDetails?.IssuingAuthority
      : null
  );
  const [LicenseNumber, setLicenseNumber] = useState(
    claim?.vehicleDetails?.LicenseNumber
      ? claim?.vehicleDetails?.LicenseNumber
      : " "
  );
  const [LicenseType, setLicenseType] = useState(
    claim?.vehicleDetails?.LicenseType
      ? claim?.vehicleDetails?.LicenseType
      : " "
  );
  const [VehicleChassisNumber, setVehicleChassisNumber] = useState(
    claim?.vehicleDetails?.VehicleChassisNumber
      ? claim?.vehicleDetails?.VehicleChassisNumber
      : " "
  );
  const [VehicleFuelType, setVehicleFuelType] = useState(
    claim?.vehicleDetails?.VehicleFuelType
      ? claim?.vehicleDetails?.VehicleFuelType
      : " "
  );

  const [DriverName, setDriverName] = useState(
    claim?.driverDetails?.DriverName ? claim?.driverDetails?.DriverName : ""
  );
  const [DriverAddedDate, setDriverAddedDate] = useState(
    claim?.driverDetails?.DriverAddedDate
      ? claim?.driverDetails?.DriverAddedDate
      : ""
  );
  const [Verification, setVerification] = useState(
    claim?.driverDetails?.DriverTypeOfVerification
      ? claim?.driverDetails?.DriverTypeOfVerification
      : ""
  );

  const [status, setStatus] = useState(
    claim?.claimStatus?.ClaimStatus ? claim?.claimStatus?.ClaimStatus : ""
  );

  const [GarageNameAndAddress, setGarageNameAndAddress] = useState(
    claim?.garageDetails?.GarageNameAndAddress
      ? claim?.garageDetails?.GarageNameAndAddress
      : ""
  );
  const [GarageContactNo1, setGarageContactNo1] = useState(
    claim?.garageDetails?.GarageContactNo1
      ? claim?.garageDetails?.GarageContactNo1
      : ""
  );
  const [GarageContactNo2, setGarageContactNo2] = useState(
    claim?.garageDetails?.GarageContactNo2
      ? claim?.garageDetails?.GarageContactNo2
      : ""
  );
  const [GarageAddedBy, setGarageAddedBy] = useState(
    claim?.garageDetails?.GarageAddedBy
      ? claim?.garageDetails?.GarageAddedBy
      : ""
  );

  const [editCase, setEditCase] = useState(false);
  const [editCase_01, setEditCase_01] = useState(false);
  const [editCase_02, setEditCase_02] = useState(false);
  const [editVechile, setEditVehichle] = useState(false);
  const [edit, setEdit] = useState(false);

  const statusOptions = [
    {
      id: 1,
      value: "Claim Appointment",
    },
    {
      id: 2,
      value: "Estimate Approval Pending",
    },
    {
      id: 3,
      value: "Vehicle Under repair",
    },
    {
      id: 4,
      value: "Invoice Approval Pending",
    },
    {
      id: 5,
      value: "Surveyor Report Pending",
    },
    {
      id: 6,
      value: "Hard Copies Pending",
    },
    {
      id: 7,
      value: "Soft Copy Completed",
    },
    {
      id: 8,
      value: "Payment Pending",
    },
    {
      id: 9,
      value: "Settled Cases",
    },
    {
      id: 10,
      value: "Withdrawl/Rejected",
    },
    {
      id: 11,
      value: "More Info Required",
    },
    {
      id: 12,
      value: "My Claims",
    },
  ];

  const subStatus = [
    {
      id: 1,
      value: "Withdrawl/Reject",
    },
    {
      id: 2,
      value: "More Info Required",
    },
    {
      id: 3,
      value: "More forward!",
    },
  ];

  const generateRegion = (region) => {
    const firstThreeLetters = region?.slice(0, 3);

    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const dd = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    const result = `${firstThreeLetters}/${mm}/${dd}${hh}${min}${ss}`;

    console.log(result);
    return result;
  };

  const [RegisteredNumber, setRegisteredNumber] = useState(
    claim?.VehicleRegisteredNumber ? claim?.VehicleRegisteredNumber : ""
  );

  const onSaveHandler = (func) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const vehicleParts = VehicleModel?.split(",");

    const region = JSON.parse(localStorage.getItem("regionType"));

    const payload = {
      InsuredName: InsuredName
        ? InsuredName
        : claim.insuredDetails?.InsuredName,
      InsuredMailAddress: InsuredMailAddress
        ? InsuredMailAddress
        : claim.insuredDetails?.InsuredMailAddress,
      InsuredMobileNo1: InsuredMobileNo1
        ? InsuredMobileNo1
        : claim.insuredDetails?.InsuredMobileNo1,
      InsuredMobileNo2: InsuredMobileNo2
        ? InsuredMobileNo2
        : claim.insuredDetails?.InsuredMobileNo2,
      ClaimNumber: ClaimNumber ? ClaimNumber : claim.claimDetails?.ClaimNumber,
      VehicleMakeVariantModelColor: vehicleParts[0]
        ? vehicleParts[0]
        : claim.vehicleDetails?.VehicleMakeVariantModelColor,
      VehicleTypeOfBody: vehicleParts[1]
        ? vehicleParts[1]
        : claim.vehicleDetails?.VehicleTypeOfBody,
      VehicleRegisteredNumber: claim?.claimDetails?.ReferenceNo
        ? claim?.claimDetails?.ReferenceNo
        : generateRegion(claim?.ClaimRegion),
      VehicleDateOfRegistration: DateRegistration
        ? DateRegistration
        : claim.vehicleDetails?.VehicleDateOfRegistration,
      VehiclePucNumber: PUCNumber
        ? PUCNumber
        : claim.vehicleDetails?.VehiclePucNumber,
      VehicleTransferDate: TransferDate
        ? TransferDate
        : claim.vehicleDetails?.VehicleTransferDate,
      VehicleEngineNumber: EngineNumber
        ? EngineNumber
        : claim.vehicleDetails?.VehicleEngineNumber,
      VehicleAddedBy: AddedBy ? AddedBy : claim.vehicleDetails?.VehicleAddedBy,
      IssuingAuthority: IssuingAuthority
        ? IssuingAuthority
        : claim.driverDetails?.IssuingAuthority,
      LicenseNumber: LicenseNumber
        ? LicenseNumber
        : claim.driverDetails?.LicenseNumber,
      LicenseType: LicenseType ? LicenseType : claim.driverDetails?.LicenseType,
      VehicleChassisNumber: VehicleChassisNumber
        ? VehicleChassisNumber
        : claim.vehicleDetails?.VehicleChassisNumber,
      VehicleFuelType: VehicleFuelType
        ? VehicleFuelType
        : claim.vehicleDetails?.VehicleFuelType,
      DriverName: DriverName ? DriverName : claim.driverDetails?.DriverName,
      DriverAddedDate: DriverAddedDate
        ? DriverAddedDate
        : claim.driverDetails?.DriverAddedDate,
      DriverTypeOfVerification: Verification
        ? Verification
        : claim.driverDetails?.DriverTypeOfVerification,
      GarageNameAndAddress: GarageNameAndAddress
        ? GarageNameAndAddress
        : claim.garageDetails?.GarageNameAndAddress,
      GarageAddedBy: GarageAddedBy
        ? GarageAddedBy
        : claim.garageDetails?.GarageAddedBy,
      GarageContactNo1: GarageContactNo1
        ? GarageContactNo1
        : claim.garageDetails?.GarageContactNo1,
      GarageContactNo2: GarageContactNo2
        ? GarageContactNo2
        : claim.garageDetails?.GarageContactNo2,
      LeadId: claim.claimDetails?.LeadId,
      token: userInfo[0].Token,
    };

    if (
      // !payload.InsuredName |
      !payload.InsuredMailAddress
      // !payload.InsuredMobileNo1 ||
      // !payload.InsuredMobileNo2 ||
      // !payload.ClaimNumber ||
      // !payload.VehicleMakeVariantModelColor ||
      // !payload.VehicleTypeOfBody ||
      // !payload.VehicleRegisteredNumber ||
      // !payload.VehicleDateOfRegistration ||
      // !payload.VehiclePucNumber ||
      // !payload.VehicleTransferDate ||
      // !payload.VehicleEngineNumber ||
      // !payload.VehicleAddedBy ||
      // !payload.IssuingAuthority ||
      // !payload.LicenseNumber ||
      // !payload.LicenseType ||
      // !payload.VehicleChassisNumber ||
      // !payload.VehicleFuelType ||
      // !payload.DriverAddedDate ||
      // !payload.DriverName ||
      // !payload.DriverTypeOfVerification ||
      // !payload.GarageAddedBy ||
      // !payload.GarageNameAndAddress ||
      // !payload.GarageContactNo1 ||
      // !payload.GarageContactNo2
    ) {
      alert("Please fill the mail address , it is a must required field!");
    } else {
      axios
        .put("/api/updateClaimDetails", payload, {
          headers: {
            Authorization: `Bearer ${userInfo[0].Token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          alert("Successfully Updated the Information !!");
        })
        .catch((err) => {
          console.log(err);
          alert("Caught into Error ! Try Again.");
        });
      if (func) {
        func(false);
      } else {
        setEditCase((prop) => !prop);
      }
    }

    // setEditCase((prop) => !prop);
    window.location.reload();
  };

  const editHandler = (value) => {
    if (value === 1) {
      setEditCase((prop) => !prop);
    } else if (value === 2) {
      setEditCase_01((prop) => !prop);
    } else if (value === 3) {
      setEditCase_02((prop) => !prop);
    }
  };

  const subTypeTypes = [
    { id: 1, type: "Motor", value: "Motor" },
    { id: 1, type: "Non-Motor", value: "Non-Motor" },
    { id: 1, type: "Motor-2W", value: "Motor-2W" },
    { id: 1, type: "Motor-4W", value: "Motor-4W" },
  ];

  const requestTypeTypes = [
    { id: 1, type: "SPOT", value: "SPOT" },
    { id: 1, type: "Final", value: "Final" },
    { id: 1, type: "re-inspection", value: "re-inspection" },
  ];

  const [isStatusModal, setIsStatusModal] = useState(false);

  const handleStatusUpdateHandler = () => {};

  const closeStatusUpdateHandler = () => {
    setIsStatusModal(false);
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getSpecificClaim", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          LeadId: leadId,
        },
      })
      .then((res) => {
        // console.log(res.data.data[0][0]);
        console.log(res);
        setClaim(res.data.data);
      })
      .catch((err) => {
        toast.error(err);
      });

    axios
      .get("/api/getDocumentList", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          leadId: leadId,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        const tempList = res.data.data;
        let requiredVideos = [];
        tempList.map((list, index) => {
          if (
            list.Attribute1.toLowerCase().includes(".mp4") ||
            list.Attribute1.toLowerCase().includes(".mp3")
          ) {
            requiredVideos.push({
              name: list.Attribute1,
              url: list.Photo1,
            });
          }
          if (
            list.Attribute2.toLowerCase().includes(".mp4") ||
            list.Attribute2.toLowerCase().includes(".mp3")
          ) {
            requiredVideos.push({
              name: list.Attribute2,
              url: list.Photo2,
            });
          }
          if (
            list.Attribute3.toLowerCase().includes(".mp4") ||
            list.Attribute3.toLowerCase().includes(".mp3")
          ) {
            requiredVideos.push({
              name: list.Attribute3,
              url: list.Photo3,
            });
          }
          if (
            list.Attribute4.toLowerCase().includes(".mp4") ||
            list.Attribute4.toLowerCase().includes(".mp3")
          ) {
            requiredVideos.push({
              name: list.Attribute4,
              url: list.Photo4,
            });
          }
          if (
            list.Attribute5.toLowerCase().includes(".mp4") ||
            list.Attribute5.toLowerCase().includes(".mp3")
          ) {
            requiredVideos.push({
              name: list.Attribute5,
              url: list.Photo5,
            });
          }
          if (
            list.Attribute6.toLowerCase().includes(".mp4") ||
            list.Attribute6.toLowerCase().includes(".mp3")
          ) {
            requiredVideos.push({
              name: list.Attribute6,
              url: list.Photo6,
            });
          }
          
        });
        setVideosList(requiredVideos);
        setDocuments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/getStatus", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          leadId: leadId,
        },
      })
      .then((res) => {
        const temp = res.data.data;
        let selectiveStat = [];
        temp.map((stat, index) => {
          if (String(stat.LeadId) === String(leadId)) {
            selectiveStat.push(stat);
          }
        });
        setStatus(selectiveStat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [leadId]);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header region={claim ? claim?.claimDetails?.ClaimRegion : "N.A."} />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu
            leadId={leadId}
            email={claim.insuredDetails?.InsuredMailAddress}
            policyNo={claim.claimDetails?.ClaimNumber}
            vehicleNo={claim.vehicleDetails?.VehicleEngineNumber}
            Insured={claim.insuredDetails?.InsuredName}
          />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section
        className="our-dashbord dashbord bgc-f7 pb50"
        style={{ marginRight: "-10px" }}
      >
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

                {/* <div className="col-lg-12 mb-2">
                  <div className="style2">
                    <button className="btn btn-color" onClick={editHandler}>
                      {edit ? "Save" : "Edit"}
                    </button>
                  </div>
                </div> */}
                {/* End .col */}

                {claim.length === 0 ? (
                  <div className="row">
                    <div
                      className="smartTable-noDataFound col-12"
                      style={{ marginTop: "110px", marginBottom: "40px" }}
                    >
                      <div className="ring">
                        Loading
                        <span className="load"></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="">
                        <div className="my_dashboard_review mb-2">
                          <div className="col-lg-12">
                            <div className="row">
                              <h4 className="">
                                CASE DETAILS
                                {editCase ? (
                                  <button
                                    className="btn-thm m-1"
                                    style={{}}
                                    onClick={() => onSaveHandler()}
                                  >
                                    Save
                                  </button>
                                ) : (
                                  <button
                                    className="btn-thm m-1"
                                    style={{}}
                                    onClick={() => editHandler(1)}
                                  >
                                    <span
                                      className="flaticon-edit"
                                      style={{ fontSize: "14px" }}
                                    ></span>
                                  </button>
                                )}
                              </h4>
                            </div>
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
                          {!editCase ? (
                            <div className="col-lg-12">
                              <CreateList_02
                                claim={claim}
                                InsuredName={InsuredName}
                                RegisteredNumber={RegisteredNumber}
                                subType={subType}
                                InsuredMobileNo1={InsuredMobileNo1}
                                ClaimNumber={ClaimNumber}
                                InsuredMailAddress={InsuredMailAddress}
                                requestType={requestType}
                              />
                            </div>
                          ) : (
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
                              setRequestType={setRequestType}
                              requestType={requestType}
                              setSubType={setSubType}
                              subType={subType}
                              ClaimNumber={ClaimNumber}
                              setClaimNumber={setClaimNumber}
                              edit={editCase}
                              setIsStatusModal={setIsStatusModal}
                            />
                          )}
                        </div>
                        <div
                          className="row mt-2 mb-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          <div className="col-lg-12">
                            <Video videos={videosList} />
                          </div>
                        </div>
                        {/* <div className="my_dashboard_review mb-2">
                        <div className="col-lg-12">
                          <div className="row">
                            <h4 className="">
                              Vehicle Details
                              {editCase_01 ? (
                                <button
                                  className="btn-thm m-1"
                                  style={{}}
                                  onClick={() => onSaveHandler()}
                                >
                                  Save
                                </button>
                              ) : (
                                <button
                                  className="btn-thm m-1"
                                  style={{}}
                                  onClick={() => editHandler(2)}
                                >
                                  <span
                                    className="flaticon-edit"
                                    style={{ fontSize: "14px" }}
                                  ></span>
                                </button>
                              )}
                            </h4>
                          </div>
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
                        {!editCase_01 ? (
                          <div className="col-lg-12">
                            <CreateList_02
                              claim={claim}
                              InsuredName={InsuredName}
                              RegisteredNumber={RegisteredNumber}
                              subType={subType}
                              InsuredMobileNo1={InsuredMobileNo1}
                              ClaimNumber={ClaimNumber}
                              InsuredMailAddress={InsuredMailAddress}
                              requestType={requestType}
                            />
                          </div>
                        ) : (
                          <Form
                            claim={claim}
                            edit={editCase_01}
                            editHandler={editHandler}
                            VehicleModel={VehicleModel}
                            setVehicleModel={setVehicleModel}
                            RegisteredNumber={RegisteredNumber}
                            setRegisteredNumber={setRegisteredNumber}
                            setEngineType={setEngineType}
                            EngineType={EngineType}
                            RegisteredOwner={RegisteredOwner}
                            setRegisteredOwner={setRegisteredOwner}
                            DateRegistration={DateRegistration}
                            setDateRegistration={setDateRegistration}
                            PUCNumber={PUCNumber}
                            setPUCNumber={setPUCNumber}
                            TransferDate={TransferDate}
                            setTransferDate={setTransferDate}
                            EngineNumber={EngineNumber}
                            setEngineNumber={setEngineNumber}
                            AddedBy={AddedBy}
                            setAddedBy={setAddedBy}
                            IssuingAuthority={IssuingAuthority}
                            setIssuingAuthority={setIssuingAuthority}
                            LicenseNumber={LicenseNumber}
                            setLicenseNumber={setLicenseNumber}
                            LicenseType={LicenseType}
                            setLicenseType={setLicenseType}
                            VehicleChassisNumber={VehicleChassisNumber}
                            setVehicleChassisNumber={setVehicleChassisNumber}
                            VehicleFuelType={VehicleFuelType}
                            setVehicleFuelType={setVehicleFuelType}
                          />
                        )}
                      </div> */}
                        <div
                          className="row mt-2 mb-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          <div className="col-lg-12">
                            {/* <h4 className="mb10">Case Details</h4> */}

                            {/* <div
                          className=" bg-dark"
                          style={{
                            width: "100%",
                            height: "3px",
                            color: "blue",
                            border: "1px solid",
                            marginBottom: "5px",
                          }}
                        ></div> */}
                            <Form
                              onSaveHandler={onSaveHandler}
                              claim={claim}
                              edit={editCase_01}
                              editHandler={editHandler}
                              VehicleModel={VehicleModel}
                              setVehicleModel={setVehicleModel}
                              RegisteredNumber={RegisteredNumber}
                              setRegisteredNumber={setRegisteredNumber}
                              setEngineType={setEngineType}
                              EngineType={EngineType}
                              RegisteredOwner={RegisteredOwner}
                              setRegisteredOwner={setRegisteredOwner}
                              DateRegistration={DateRegistration}
                              setDateRegistration={setDateRegistration}
                              PUCNumber={PUCNumber}
                              setPUCNumber={setPUCNumber}
                              TransferDate={TransferDate}
                              setTransferDate={setTransferDate}
                              EngineNumber={EngineNumber}
                              setEngineNumber={setEngineNumber}
                              AddedBy={AddedBy}
                              setAddedBy={setAddedBy}
                              IssuingAuthority={IssuingAuthority}
                              setIssuingAuthority={setIssuingAuthority}
                              LicenseNumber={LicenseNumber}
                              setLicenseNumber={setLicenseNumber}
                              LicenseType={LicenseType}
                              setLicenseType={setLicenseType}
                              VehicleChassisNumber={VehicleChassisNumber}
                              setVehicleChassisNumber={setVehicleChassisNumber}
                              VehicleFuelType={VehicleFuelType}
                              setVehicleFuelType={setVehicleFuelType}
                            />
                          </div>
                        </div>
                        <div
                          className="row mt-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          <div className="col-lg-12">
                            {/* <h4 className="mb10">Case Details</h4> */}

                            {/* <div
                          className=" bg-dark"
                          style={{
                            width: "100%",
                            height: "3px",
                            color: "blue",
                            border: "1px solid",
                            mar`ginBottom: "5px",
                          }}
                        ></div> */}
                            <Form_01
                              onSaveHandler={onSaveHandler}
                              claim={claim}
                              edit={editCase_02}
                              editHandler={editHandler}
                              DriverName={DriverName}
                              setDriverName={setDriverName}
                              DriverAddedDate={DriverAddedDate}
                              setDriverAddedDate={setDriverAddedDate}
                              Verification={Verification}
                              setVerification={setVerification}
                            />
                          </div>
                        </div>

                        <div
                          className="row mb-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          {/* {editCase && */}
                          <div className="col-lg-12">
                            {/* <h4 className="mb10">Case Details</h4> */}

                            {/* <div
                          className=" bg-dark"
                          style={{
                            width: "100%",
                            height: "3px",
                            color: "blue",
                            border: "1px solid",
                            marginBottom: "5px",
                          }}
                        ></div> */}
                            <Form_02
                              onSaveHandler={onSaveHandler}
                              claim={claim}
                              editHandler={editHandler}
                              GarageNameAndAddress={GarageNameAndAddress}
                              setGarageNameAndAddress={setGarageNameAndAddress}
                              GarageContactNo1={GarageContactNo1}
                              setGarageContactNo1={setGarageContactNo1}
                              GarageContactNo2={GarageContactNo2}
                              setGarageContactNo2={setGarageContactNo2}
                              GarageAddedBy={GarageAddedBy}
                              setGarageAddedBy={setGarageAddedBy}
                            />
                          </div>
                        </div>

                        <div
                          className="row mb-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          <div className="col-lg-12">
                            <EstimateList />
                          </div>
                        </div>

                        <div
                          className="row mb-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          <div className="col-lg-12 text-center">
                            {/* <ErrorPageContent /> */}
                            <Exemple documents={documents} />
                          </div>
                        </div>
                        <div
                          className="row mb-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          <div className="col-lg-12 text-center">
                            {/* <ErrorPageContent /> */}
                            <UploadReort />
                          </div>
                        </div>
                        <div
                          className="row mb-2"
                          style={{ marginLeft: "-15px" }}
                        >
                          <div className="col-lg-12 text-center">
                            {/* <ErrorPageContent /> */}
                            <PaymentDetails />
                          </div>
                        </div>
                        {/* <div className="row mb-2" style={{ marginLeft: "-15px" }}>
                        <div className="col-lg-12 text-center">
                          <ErrorPageContent />
                          <GarageDetails />
                        </div>
                      </div> */}
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="">
                        <div className="row" style={{ marginLeft: "0px" }}>
                          <div className="row mb-2 my_dashboard_review">
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
                            <StatusLog
                              leadId={leadId}
                              status={status}
                              statusOptions={statusOptions}
                              subStatus={subStatus}
                              claim={claim}
                            />
                            {/* <CreateList /> */}
                          </div>
                          {/* <hr /> */}
                          <div className="row mt-2 mb-2 my_dashboard_review">
                            <div className="col-lg-12">
                              <h4 className="mb10">Comment Log</h4>
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
                          {/* <hr /> */}
                          <div className="row mt-2 my_dashboard_review">
                            <div className="col-lg-12">
                              <h4 className="mb10">Previous Year Policy</h4>
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
                          </div>

                          {isStatusModal && (
                            <div className="modal">
                              <div className="modal-content">
                                <h3 className="text-center">
                                  Broker Status Update
                                </h3>
                                <hr />
                                <div className="d-flex justify-content-center">
                                  <select
                                    className="form-select"
                                    data-live-search="true"
                                    data-width="100%"
                                    // value={buildinRef}
                                    // onChange={(e) => setBuildinRef(e.target.value)}
                                    // onChange={(e) => setBuildinRef(e.target.value)}
                                    // disabled={isDisable}
                                    style={{
                                      paddingTop: "10px",
                                      paddingBottom: "10px",
                                      backgroundColor: "#E8F0FE",
                                      width: "300px",
                                    }}
                                  >
                                    {/* {BrokerStatus.map((item, index) => {
                          return (
                            <option key={item.id} value={item.value}>
                              {item.type}
                            </option>
                          );
                        })} */}
                                  </select>
                                </div>
                                <hr />
                                {/* <p>Are you sure you want to delete the property: {property.area}?</p> */}
                                <div className="text-center" style={{}}>
                                  <button
                                    className="btn w-25 btn-color"
                                    onClick={closeStatusUpdateHandler}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    className="btn btn-color w-25"
                                    style={{ marginLeft: "12px" }}
                                    onClick={handleStatusUpdateHandler}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
