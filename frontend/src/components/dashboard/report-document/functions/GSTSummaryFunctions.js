const calculateGSTWholeSectionVauesWithGST2 = (allInfo) => {
    let total = 0;
    allInfo?.GSTSummaryNewParts?.map((part, index) => {
        total += Number(part.TotalAssessed)
    });

    return total;
  };

  const calculateGSTWholeSectionGST2 = (allInfo) => {
    let total = 0;
    allInfo?.GSTSummaryNewParts?.map((part, index) => {
        total += Number(Number(part.CGST) + Number(part.SGST))
    });

    return total;
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

  const getTotalDepreciationValueOnly = (allInfo,type, other) => {
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

  const getTotalDepreciation = (allInfo,type, other) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const Depreciation =
        (assessed * Number(part.NewPartsDepreciationPct)) / 100;

      if (
        String(part.NewPartsTypeOfMaterial) === String(type) &&
        String(allInfo?.otherInfo[0]?.PolicyType) === "Regular" &&
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
        String(allInfo?.otherInfo[0]?.PolicyType) === "Regular" &&
        part.NewPartsIsActive
      ) {
        total = total + Depreciation;
      }


    });
    return total;
  };

  const getTotalNonMetaDepreciationValueOnly = (allInfo) => {
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

  const calculateTypeNewPartsGST = (allInfo,type) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    
      const Depreciation =
      String(allInfo?.otherInfo[0]?.PolicyType) === "Regular" ?
      (assessed * Number(part.NewPartsDepreciationPct)) / 100 : 0;
   
      const gst = ((assessed - Depreciation) * Number(part.NewPartsGSTPct)) / 100;

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
      
      const Depreciation =
      String(allInfo?.otherInfo[0]?.PolicyType) === "Regular" ?
      (assessed * Number(part.NewPartsDepreciationPct)) / 100 : 0;
   
      const gst = ((assessed - Depreciation) * Number(part.NewPartsGSTPct)) / 100;

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

  const getTotalEvaluationOfAssessedForNewParts = (allInfo) => {
    const glassValue =
      calculateTypeNewPartsGST(allInfo,"Glass") +
      getTotalGlassAssessed(allInfo) -
      getTotalDepreciation(allInfo,"Glass", false);
    const metalValue =
      calculateTypeNewPartsGST(allInfo,"Metal") +
      getTotalMetalAssessed(allInfo) -
      getTotalDepreciation(allInfo,"Metal", false);
    const nonMetalValue =
      calculateOtherTypeNewPartsGST(allInfo) +
      getTotalOtherMetalAssesses(allInfo) -
      getTotalNonMetaDepreciation(allInfo);

    return glassValue + metalValue + nonMetalValue;
  };

  
  const getTotalLabourAssessedGST2 = (allInfo) => {
    let total = 0;
    allInfo?.GSTSummaryLabour?.map((part, index) => {
        total += Number(Number(part.CGST) + Number(part.SGST))
    });

    return total;
  };

  const getTotalLabourAssessedGSTValuess = (allInfo) => {
    let total = 0;
    allInfo?.labourDetails?.map((part, index) => {
      const dep =
        String(part.JobType) === "1" && String(allInfo?.otherInfo[0]?.PolicyType) === "Regular"
          ? Number(Number(part.Assessed) * Number(12.5)) / 100
          : 0;
      const assessed = Number(part.Assessed) - dep;

      const assessedvalue = assessed * Number(part.GSTPercentage);
      const gst = Number(assessedvalue) / 100;
      if (part.LabourIsActive) {
        total = total + ( + gst);
      }
    });
    return total;
  };

  const calculateLabourDepreciations = (allInfo) => {
    let totalDep = 0;
    allInfo?.labourDetails?.map((labour, index) => {
      if (String(labour.JobType) === "1" && labour.LabourIsActive ) {
        const dep = Number(Number(labour.Assessed) * (12.5)) / 100;
        totalDep = (Number(totalDep) + Number(dep));
      }
    });
    return String(allInfo?.otherInfo[0]?.PolicyType) === "Regular" ? totalDep: 0;
  };

  function convertToProperHTML(htmlString) {
    // Create a new DOMParser
    const parser = new DOMParser();

    // Parse the HTML string
    const doc = parser.parseFromString(htmlString, "text/html");

    // Extract the text content from the parsed document
    let plainText = doc.body.textContent || "";

    // Add line breaks after every period (.)
    plainText = plainText.replace(/\./g, "\n");

    return plainText;
  }

  const addVariables = (allInfo,string) => {
    string = string?.replace(
      "**CASSISNUMBER**",
      `<strong>${allInfo?.otherInfo[0]?.ChassisNumber}</strong>`
    );
    string = string?.replace(
      "**POLICYNUMBER**",
      `<strong>${allInfo?.otherInfo[0]?.PolicyNumber}</strong>`
    );
    string = string?.replace(".", "\n");

    return string;
  };

  
  const getTotalLabourAssessedGST = (allInfo) => {
    const currentLabourGST = allInfo?.labourDetails[0].GSTPercentage;
    const overAllValueWithoutGST = getTotalLabourAssessed() - calculateLabourDepreciations(allInfo);
    const gstValue = (Number(overAllValueWithoutGST) * Number(currentLabourGST)) / 100;
    return gstValue
  };


  const getTotalLabourAssessed = (allInfo) => {
    let total = 0;
    allInfo?.labourDetails?.map((part, index) => {
      const dep =
        String(part.JobType) === "1" && String(allInfo?.otherInfo[0]?.PolicyType) === "Regular"
          ? Number(Number(part.Assessed) * Number(12.5)) / 100
          : 0;
      const assessed = Number(part.Assessed) - dep;

      const assessedvalue = assessed * Number(part.GSTPercentage);
      const gst = Number(assessedvalue) / 100;
      if (part.LabourIsActive) {
        total = total + (assessed + gst);
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
      const assessed = Number(part.Assessed) ;

      const assessedvalue = assessed * Number(part.GSTPercentage);
      const gst = Number(assessedvalue) / 100;
      if (part.LabourIsActive) {
        total = total + (assessed );
      }
    });
    return total;
  };

  const getTotalLabourAssessed2 = (allInfo) => {
    let total = 0;
    allInfo?.GSTSummaryLabour?.map((part, index) => {
        total += Number(part.TotalAssessed)
    });

    return total;
  };

  const getSummaryTotalWithLessSalvage = (allInfo,lessExcess,lessSalvage) => {
    return (
      ((getTotalLabourAssessedSum(allInfo) - calculateLabourDepreciations(allInfo))+ getTotalLabourAssessedGSTValuess(allInfo))  +
      getTotalEvaluationOfAssessedForNewParts(allInfo) -
      lessExcess -
      lessSalvage 
    );
  };

  const roundOff = (number) => {
    return Math.round(number * 100) / 100;
  };

  module.exports={
    calculateGSTWholeSectionVauesWithGST2,
    calculateGSTWholeSectionGST2,
    getTotalGlassAssessed,
    getTotalMetalAssessed,
    addCommasToNumber,
    getTotalOtherMetalAssesses,
    getTotalDepreciationValueOnly,
    getTotalDepreciation,
    getTotalNonMetaDepreciation,
    getTotalNonMetaDepreciationValueOnly,
    calculateTypeNewPartsGST,
    calculateOtherTypeNewPartsGST,
    getTotalEvaluationOfAssessedForNewParts,
    getTotalLabourAssessedGST2,
    getTotalLabourAssessedGSTValuess,
    calculateLabourDepreciations,
    convertToProperHTML,
    addVariables,
    getTotalLabourAssessedGST,
    getTotalLabourAssessed,
    getTotalLabourAssessedSum,
    getTotalLabourAssessed2,
    getSummaryTotalWithLessSalvage,
    roundOff
  }





