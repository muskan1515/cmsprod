import { useEffect, useState } from "react";
import ErrorPageContent from "./ErrorPageContent";
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

const Index = () => {
  const [feeReport, setFeeReport] = useState({});
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
    const inactivityCheckInterval = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastActivity = currentTime - lastActivityTimestamp;
      if (timeSinceLastActivity > 100000) {
        localStorage.removeItem("userInfo");
        router.push("/login");
      }
    }, 60000);
    return () => clearInterval(inactivityCheckInterval);
  }, [lastActivityTimestamp]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const url = window.location.pathname;
    const leadId = url.split("/bill-document/")[1];
    toast.loading("Fetching details!!!");
    axios
      .get("/api/getFeeReport", {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
        params: {
          LeadId: leadId,
        },
      })
      .then((res) => {
        toast.dismiss();
        setFeeReport(res.data.data);
        toast.success("Successfully Fetched !", {
          // position: toast.POSITION.BOTTOM_LEFT,
          className: "toast-loading-message",
        });
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Got error while fetching the bill information!");
      });
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white"></header>
        <main className="flex-grow p-4">
          {" "}
          <div className="col-lg-12">
            <ErrorPageContent feeReport={feeReport} />
          </div>
        </main>
        <footer className="bg-gray-800 text-white">
          <div
            style={{
              border: "1px solid black",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div className="">
            <div className="d-flex gap-3 align-item-center">
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <h5 className="text-dark" style={{ fontSize: "12px" }}>
                  H.O. Address : 58-Gandhi Nagar,Near Bal Niketan School ,Sri
                  Ganganagar(Raj.)-335001
                </h5>
                {/* <h5
                  className="text-center text-dark"
                  style={{ fontSize: "12px" }}
                >
                  Ofce: B-43,NFL Society,Sector-PI,Gr Noida-201310./E-201,MAPSKO
                  Mountville,Sector-79,Gurugram(Hr)
                </h5> */}
              </div>
              <div className="" style={{ marginTop: "" }}>
                <div className="text-end">
                  <Image
                    width={201}
                    height={54}
                    priority
                    className="w50"
                    src="/assets/images/stamp.jpg"
                    alt="1.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Print-specific styles */}
        <style>
          {`
          @media print {
            footer {
              position: fixed;
              bottom: 0;
              width: 100%;
              background-color: #333; /* Customize as needed */
              color: white; /* Customize as needed */
            }
          }
        `}
        </style>
      </div>
      {/* <section className="" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ErrorPageContent feeReport={feeReport} />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Index;
