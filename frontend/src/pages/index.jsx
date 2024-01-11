import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
// import HomeMain from "../components/home";
import Login from "../components/login";
import { Toaster } from "react-hot-toast";

const index = () => {
  return (
    <>
    <Toaster/>
      <Seo pageTitle="Home-1" />
      {/* <HomeMain /> */}
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
