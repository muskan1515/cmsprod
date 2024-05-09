import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import RcDocument from "../../components/dashboard/rc-document";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    const { leadId } = router.query;
  return (
    <>
      <Seo pageTitle="RC Document" />
      <RcDocument leadId={leadId} />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
