import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import BillDocument from "../../components/dashboard/bill-document";

const index = () => {
  return (
    <>
      <Seo pageTitle="Bill Document" />
      <BillDocument />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
