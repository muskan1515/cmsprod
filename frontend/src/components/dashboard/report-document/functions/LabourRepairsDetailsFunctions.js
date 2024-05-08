const calculateLabourDepreciations = (allInfo) => {
  let totalDep = 0;
  allInfo?.labourDetails?.map((labour, index) => {
    if (String(labour.JobType) === "1" && labour.LabourIsActive) {
      const dep = Number(Number(labour.Assessed) * 12.5) / 100;
      totalDep = Number(totalDep) + Number(dep);
    }
  });
  return totalDep;
};

const calculateTotalPaintingEstimate = (allInfo) => {
  let total = 0;
  allInfo?.labourDetails?.map((labour, index) => {
    const estimate = Number(labour.Estimate);
    if (String(labour.JobType) === "1" && labour.LabourIsActive) {
      total = total + estimate;
    }
  });
  return total;
};

const getFirstPaintingPos = (allInfo) => {
  let pos = 0;
  let found = false;
  allInfo?.labourDetails?.map((labour, index) => {
    const assessed = Number(labour.Assessed);
    if (String(labour.JobType) === "1" && labour.LabourIsActive && !found) {
      pos = index + 1;
      found = true;
    }
  });
  return pos;
};

const calculateTotalPaintingAssessed = (allInfo) => {
  let total = 0;
  allInfo?.labourDetails?.map((labour, index) => {
    const assessed = Number(labour.Assessed);
    if (String(labour.JobType) === "1" && labour?.LabourIsActive) {
      total = total + assessed;
    }
  });
  return total;
};

const calculateGSTNoGSTLabour = (allInfo) => {
  let nonPainting = 0,
    Painting = 0;
  allInfo?.labourDetails?.map((labour, index) => {
    if (String(labour.JobType) === "1" && labour.LabourIsActive) {
      Painting += 1;
    } else {
      nonPainting += 1;
    }
  });

  return { nonPainting, Painting };
};

const getTotalGlassAssessed = (allInfo) => {
  let total = 0;
  allInfo?.newPartsDetails.map((part, index) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);

    if (
      String(part.NewPartsTypeOfMaterial) === "Glass" &&
      part.NewPartsIsActive
    ) {
      total = total + assessed;
    }
  });
  return total;
};

const getTotalMetalAssessed = (allInfo) => {
  let total = 0;
  allInfo?.newPartsDetails.map((part, index) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (
      String(part.NewPartsTypeOfMaterial) === "Metal" &&
      part.NewPartsIsActive
    ) {
      total = total + assessed;
    }
  });
  return total;
};

function addCommasToNumber(number) {
  if (Number(number) <= 100 || number === undefined) return number;
  return number.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const getTotalOtherMetalAssesses = (allInfo) => {
  let total = 0;
  allInfo?.newPartsDetails.map((part, index) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);

    if (
      String(part.NewPartsTypeOfMaterial) !== "Glass" &&
      String(part.NewPartsTypeOfMaterial) !== "Metal" &&
      part.NewPartsIsActive
    ) {
      total = total + assessed;
    }
  });
  return total;
};

const getTotalDepreciation = (allInfo, type, other) => {
  let total = 0;
  allInfo?.newPartsDetails?.map((part, index) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;

    if (
      String(part.NewPartsTypeOfMaterial) === String(type) &&
      part.NewPartsIsActive
    ) {
      total = total + Depreciation;
    }
  });
  return total;
};

const getTotalNonMetaDepreciation = (allInfo) => {
  let total = 0;
  allInfo?.newPartsDetails?.map((part, index) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (
      String(part.NewPartsTypeOfMaterial) !== "Glass" &&
      String(part.NewPartsTypeOfMaterial) !== "Metal" &&
      part.NewPartsIsActive
    ) {
      total = total + Depreciation;
    }
  });
  return total;
};

const calculateTypeNewPartsGST = (allInfo, type) => {
  let total = 0;
  allInfo?.newPartsDetails?.map((part, index) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const gst = (assessed * Number(part.NewPartsGSTPct)) / 100;

    if (
      String(part.NewPartsTypeOfMaterial) === String(type) &&
      part.NewPartsIsActive
    ) {
      total = total + gst;
    }
  });
  return total;
};

const calculateOtherTypeNewPartsGST = (allInfo) => {
  let total = 0;
  allInfo?.newPartsDetails?.map((part, index) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const gst = (assessed * Number(part.NewPartsGSTPct)) / 100;

    if (
      String(part.NewPartsTypeOfMaterial) !== "Glass" &&
      String(part.NewPartsTypeOfMaterial) !== "Metal" &&
      part.NewPartsIsActive
    ) {
      total = total + gst;
    }
  });
  return total;
};

const getTotalLabourEstimate = (allInfo) => {
  let total = 0;
  allInfo?.labourDetails?.map((part, index) => {
    const estimate = Number(part.Estimate);

    if (part.LabourIsActive) {
      total = total + estimate;
    }
  });
  return total;
};

const getTotalLabourAssessedSum = (allInfo) => {
  let total = 0;
  allInfo?.labourDetails?.map((part, index) => {
    const dep =
      String(part.JobType) === "1"
        ? Number(Number(part.Assessed) * Number(12.5)) / 100
        : 0;
    const assessed = Number(part.Assessed);

    const assessedvalue = assessed * Number(part.GSTPercentage);
    const gst = Number(assessedvalue) / 100;
    if (part.LabourIsActive) {
      total = total + assessed;
    }
  });
  return total;
};

const getTotalLabourAssessedGSTValuess = (allInfo) => {
  let total = 0;
  allInfo?.labourDetails?.map((part, index) => {
    const dep =
      String(part.JobType) === "1" &&
      String(allInfo?.otherInfo[0]?.PolicyType) === "Regular"
        ? Number(Number(part.Assessed) * Number(12.5)) / 100
        : 0;
    const assessed = Number(part.Assessed) - dep;

    const assessedvalue = assessed * Number(part.GSTPercentage);
    const gst = Number(assessedvalue) / 100;
    if (part.LabourIsActive) {
      total = total + +gst;
    }
  });
  return total;
};

const roundOff = (number) => {
  return Math.round(number * 100) / 100;
};

module.exports = {
  calculateLabourDepreciations,
  calculateTotalPaintingEstimate,
  getFirstPaintingPos,
  calculateTotalPaintingAssessed,
  calculateGSTNoGSTLabour,
  getTotalGlassAssessed,
  getTotalMetalAssessed,
  addCommasToNumber,
  getTotalOtherMetalAssesses,
  getTotalDepreciation,
  getTotalNonMetaDepreciation,
  calculateTypeNewPartsGST,
  calculateOtherTypeNewPartsGST,
  getTotalLabourEstimate,
  getTotalLabourAssessedSum,
  getTotalLabourAssessedGSTValuess,
  roundOff,
};
