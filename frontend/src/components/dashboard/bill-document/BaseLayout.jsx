import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  roundOff,
  formatDate,
  numberToWords,
  calculateTheTotalBillWithoutGST,
  addCommasToNumber,
  calculateTotalAssessed,
  calculateCGST,
  calculateIGST,
  calculateSGST,
  grandTotalWithGST
} from "./functions";
import LayoutView from "./LayoutView";
const BaseLayout = ({ feeReport, allOffices }) => {
  const pdfRef = useRef();

  const [Assessed, setAssessed] = useState(0);
  const [Estimate, setEstimate] = useState(0);

  const [selectedServicingOffice, setSelectedServicingOffice] = useState([]);

  useEffect(() => {
    const name =
      String(feeReport?.feeDetails?.BillTo) === "Insurer"
        ? feeReport?.claimDetails?.PolicyIssuingOffice
        : feeReport?.claimDetails?.ClaimServicingOffice;

    let requiredOffice = {};

    allOffices.map((office, index) => {
      const stateCodeString = String(office.OfficeName).toLowerCase();
      const nameString = String(name).toLowerCase().split(" - ")[0];

      if (stateCodeString.includes(nameString)) {
        requiredOffice = office;
      }
    });

    setSelectedServicingOffice(requiredOffice);
  }, [allOffices, feeReport]);

  useEffect(() => {
    calculateTotalAssessed(feeReport, setAssessed, setEstimate);
  }, [feeReport]);

  return (
    <LayoutView
      feeReport={feeReport}
      pdfRef={pdfRef}
      selectedServicingOffice={selectedServicingOffice}
      formatDate={formatDate}
      addCommasToNumber={addCommasToNumber}
      roundOff={roundOff}
      Estimate={Estimate}
      Assessed={Assessed}
      calculateTheTotalBillWithoutGST={calculateTheTotalBillWithoutGST}
      calculateCGST={calculateCGST}
      calculateSGST={calculateSGST}
      calculateIGST={calculateIGST}
      grandTotalWithGST={grandTotalWithGST}
      numberToWords={numberToWords}
    />
  );
};

export default BaseLayout;
