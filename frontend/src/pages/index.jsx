import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
// import HomeMain from "../components/home";
import MyDashboard from "../components/dashboard/my-dashboard";
import { Toaster } from "react-hot-toast";

const index = () => {
  return (
    <>
    <Toaster/>
      <Seo pageTitle="Home-1" />
      {/* <HomeMain /> */}
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
