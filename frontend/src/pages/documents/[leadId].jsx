import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Documents from "../../components/dashboard/documents";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  // const { leadId } = router.query;
  const url = window.location.href;
  const mainReq = url.split("/documents/")[1];
  const token = mainReq.split("?token=")[1];
  const leadId = mainReq.split("?token=")[0];

  return (
    <>
      <Seo pageTitle="Documents Upload" />
      <Documents leadId={leadId} token={token} />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
