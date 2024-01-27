import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Table from "../../components/dashboard/table";

const index = () => {
  return (
    <>
      <Seo pageTitle="Table" />
      <Table />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
