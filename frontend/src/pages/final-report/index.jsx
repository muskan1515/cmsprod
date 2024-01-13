import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import FinalReport from "../../components/dashboard/final-report";
const index = () => {
  return (
    <>
      <Seo pageTitle="Final Report" />
      <FinalReport />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
