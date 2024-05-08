import RCDataLayoutView from "./RCDataLayoutView";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const Index = ({ leadId }) => {
  const [vehicleDetails, setDriverDetails] = useState({});

  const [lastActivityTimestamp, setLastActivityTimestamp] = useState(
    Date.now()
  );

  const router = useRouter();

  useEffect(() => {
    const activityHandler = () => {
      setLastActivityTimestamp(Date.now());
    };
    window.addEventListener("mousemove", activityHandler);
    window.addEventListener("keydown", activityHandler);
    window.addEventListener("click", activityHandler);
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
      if (timeSinceLastActivity > 1200000) {
        localStorage.removeItem("userInfo");
        router.push("/login");
      }
    }, 30000);
    return () => clearInterval(inactivityCheckInterval);
  }, [lastActivityTimestamp]);

  useEffect(() => {
    const url = window.location.pathname;
    const leadId = url.split("/rc-document/")[1];
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    toast.loading("Fetching rc Details!!", {
      className: "toast-loading-message",
    });
    axios
      .get("/api/getSpecificVehicleDetails", {
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
        toast.success("Successfully fetched !", {
          className: "toast-loading-message",
        });

        setDriverDetails(res.data.data.vehicleDetails);
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Got error while fetching details!");
      });
  }, []);
  return (
    <>
      <Toaster />
      <section className="" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <RCDataLayoutView vehicleDetails={vehicleDetails} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
