import RCBaseLayout from "./RCBaseLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const Index = () => {
  const router = useRouter();
  const [driverDetails, setDriverDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [lastActivityTimestamp, setLastActivityTimestamp] = useState(
    Date.now()
  );

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
    let userData = {};
    userData = JSON.parse(localStorage.getItem("userInfo"));
    if (!userData) {
      router.push("/login");
    }
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
    const leadId = url.split("/dl-document/")[1];
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    toast.loading("Fetching dl Details!!", {
      className: "toast-loading-message",
    });
    axios
      .get("/api/getSpecificDriverDetails", {
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
        setDriverDetails(res.data.data.driverDetails);
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Got error while fetching details!");
      });
    setIsLoading(false);
  }, []);
  return (
    <>
      <section className="" style={{ paddingTop: "10px" }}>
        <Toaster />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <RCBaseLayout DriverDetails={driverDetails} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
