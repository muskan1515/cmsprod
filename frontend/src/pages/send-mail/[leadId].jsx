import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Documents from "../../components/dashboard/send-mail";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { leadId, email, policyNo , vehicleNo,Insured,Region,BrokerMailAddress,GarageMailAddress } = router.query;

  console.log(leadId,email,policyNo);
  // console.log(leadId);
  return (
    <>
      <Seo pageTitle="Send Mail" />
      <Documents leadId={leadId} email={email} 
      policyNo={policyNo} 
      GarageMailAddress={GarageMailAddress}
      BrokerMailAddress={BrokerMailAddress}
      vehicleNo={vehicleNo} 
      Insured={Insured} 
      Region={Region}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
