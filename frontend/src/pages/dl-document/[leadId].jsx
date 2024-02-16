import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import DlDocument from "../../components/dashboard/dl-document";
import { useRouter } from "next/router";


const Index = () => {
  const router = useRouter();
  const { leadId } = router.query;

  return (
    <>
      <Seo pageTitle="DL Details" />
      <DlDocument leadId={leadId} />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
