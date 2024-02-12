import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MySavedSearch from "../../components/dashboard/report-template/index";

const index = () => {
  return (
    <>
      <Seo pageTitle="Final report" />
      <MySavedSearch />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
