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
  const mainTokenValue = token.split("&content")[0];

  const {  content } = router.query;

  // Split the content string into an array using a comma as the separator
  const contentArray = content ? content.split(',') : [];

  // console.log(leadId1,token1,contentArray);
  return (
    <>
      <Seo pageTitle="Documents Upload" />
      <Documents leadId={leadId} token={mainTokenValue} content={content}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
