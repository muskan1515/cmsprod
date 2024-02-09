import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MisSheet from "../../components/dashboard/mis-sheet";

const index = () => {
  return (
    <>
      <Seo pageTitle="MIS Sheet" />
      <MisSheet />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });