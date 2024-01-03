import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ClaimDetails from "../../components/dashboard/claim-details";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  return (
    <>
      <Seo pageTitle="Claim Details" />
      <ClaimDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
