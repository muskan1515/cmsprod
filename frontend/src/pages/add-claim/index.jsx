import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import AddClaim from "../../components/dashboard/my-dashboard/add-claim";

const index = () => {
  return (
    <>
      <Seo pageTitle="Add Claim" />
      <AddClaim />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
