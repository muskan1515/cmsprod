import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import RcDocument from "../../components/dashboard/rc-document";

//* hello*//

const index = () => {
  return (

    <>

      <Seo pageTitle="RC Document" />
      <RcDocument />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
