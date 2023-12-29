import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
// import HomeMain from "../components/home";
import MyDashboard from "../components/dashboard/my-dashboard";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-1" />
      {/* <HomeMain /> */}
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
