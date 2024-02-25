import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import BillDocument from "../../components/dashboard/bill-document";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { leadId } = router.query;

  return (
    <>
      <Seo pageTitle="Bill Document" />
      <BillDocument leadId={leadId} />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
