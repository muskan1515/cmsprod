import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ClaimDetails from "../../components/dashboard/claim-details";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { leadId } = router.query;
  console.log(router.query)
  console.log(leadId);
  return (
    <>
      <Seo pageTitle="Claim Details" />
      <ClaimDetails leadId={leadId} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
