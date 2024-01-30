import { useEffect, useState } from "react";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu_01";
import Exemple from "./Exemple";
import DocumentUpload from "./DocumentUpload"
import axios from "axios";
import toast from "react-hot-toast";

const Index = ({ leadId, token, content }) => {
  const [check, setCheck] = useState(false);
  const [leadToken, setLeadToken] = useState(token ? token : "");

  const [status, setStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState([]);
  const [uploadedData, setUpdatedData] = useState([]);

  const [isNotValidLink, setIsNotValidLink] = useState(true);

  const types = [
    { name: "Driving licence" },
    { name: "Certificate of registration" },
    { name: "Repair Estimate" },
    { name: "Claim form" },
    { name: "Insurance policy" },
    { name: "Damage vehicle photographs/video" },
    { name: "Aadhar card" },
    { name: "Pan card" },
    { name: "Cancel cheque" },
    { name: "Satisfaction voucher" },
    { name: "Discharge voucher" },
    { name: "Dismantle photographs" },
    { name: "Reinspection photographs" },
    { name: "Repair Invoice" },
    { name: "Payment/cash receipt" },
  ];

  useEffect(() => {
    const unserInfo = JSON.parse(localStorage.getItem("userInfo"));
    axios
      .get("/api/getStatus", {
        headers: {
          Authorization: `Bearer ${unserInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          leadId: "",
        },
      })
      .then((res) => {
        const temp = res.data.data;
        console.log(temp);
        const updatedStatus = temp.filter((data, index) => {
          if (String(data.LeadId) === leadId) {
            return true;
          } else {
            return false;
          }
        });

        const statlen = updatedStatus.length;

        setStatus(updatedStatus[statlen - 1]);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/getDocumentList", {
        headers: {
          Authorization: `Bearer ${unserInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          leadId: leadId,
        },
      })
      .then((res) => {
        const temp = res.data.data;
        console.log(temp);
        const updatedStatus = temp.filter((data, index) => {
          if (String(data.LeadId) === leadId) {
            return true;
          } else {
            return false;
          }
        });

        setDocument(updatedStatus);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsLoading(false);

    setCheck(true);
  }, []);

  useEffect(() => {
    const unserInfo = JSON.parse(localStorage.getItem("userInfo"));

    const payload = {
      token: token,
      leadId: leadId,
    };

    console.log(payload);
    axios
      .post("/api/getClaimDetails", payload, {
        headers: {
          Authorization: `Bearer ${unserInfo[0].Token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setIsNotValidLink(false);
        // alert("Successfully found!!");
      })
      .catch((Err) => {
        // alert(Err)
      });
    setCheck(false);
  }, [check]);

  const onSubmitHandler = () => {
    let data = [];
    for (let i = 0; i < 15; i = i + 1) {
      const temp = types[i].name;
      const tempArray = [];
      uploadedData.map((data, index) => {
        if (data.docName === temp) {
          tempArray.push(data.data);
        }
      });

      if (tempArray.length > 0) {
        data.push({
          leadId: leadId,
          docName: temp,
          data: tempArray,
        });
      }
    }

    // console.log(!((String(status?.Status) === "1"  && Number(data.length) + Number(document.length) == 5) || (content && content.length !== data.length)))
    if (
      !(
        (String(status?.Status) === "1" &&
          Number(data.length) + Number(document.length) == 10) ||
        (content && content.length !== data.length)
      )
    ) {
      alert("Please upload all the required data !!!");
    } else {
      const unserInfo = JSON.parse(localStorage.getItem("userInfo"));
      
      
      const payload = JSON.stringify({ data: data });

      toast.loading("Uploading!");
      axios.post("/api/uploadDocument", payload, {
          headers: {
            Authorization: `Bearer ${unserInfo[0].Token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          alert("Successfully updated!!");
          window.location.reload();
        })
        .catch((err) => {
          // isNotValidLink(true);
        });
    }
  };

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {isLoading ? (
        <section className="our-error bgc-f7 mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="ring">
                  Loading
                  <span className="load"></span>
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
      ) : isNotValidLink ? (
        <section className="our-error bgc-f7 mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p style={{ color: "black" }}>
                  The page cannot be accessed with the provided link.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="our-error bgc-f7 mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <DocumentUpload
                  setUpdatedData={setUpdatedData}
                  uploadedData={uploadedData}
                  leadId={leadId}
                  status={status}
                  content={content}
                  document={document}
                />
                <button className="btn btn-color" onClick={onSubmitHandler}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* <!-- Our Footer --> */}
      {/* <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer Bottom Area --> */}
      <div className="footer_middle_area">
        <div className="container">
          <CopyrightFooter />
        </div>
      </div>
    </>
  );
};

export default Index;

