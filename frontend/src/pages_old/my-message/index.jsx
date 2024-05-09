import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
// import MyMessage from "../../components/dashboard/my-message";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Message" />
      
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
