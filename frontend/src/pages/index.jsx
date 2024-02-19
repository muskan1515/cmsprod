import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Login from "./login";
import {Toaster} from 'react-hot-toast'

const index = () => {
  return (
    <>
    <Toaster/>
    <Seo pageTitle="Dashboard" />
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
