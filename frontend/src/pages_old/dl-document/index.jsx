import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import DlDocument from "../../components/dashboard/dl-document";

const index = () => {
  return (
    <>
      <Seo pageTitle="DL Document" />
      <DlDocument />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
