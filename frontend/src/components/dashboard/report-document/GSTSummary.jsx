import React, { useEffect } from "react";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { numberToWords } from "number-to-words";

const GSTSummary = ({ allInfo }) => {
  const pdfRef = useRef();

  const [allGST, setGST] = useState([]);

  const [noGST, setNoGST] = useState([]);

  const [allGSTType, setAllGSTType] = useState([]);

  useEffect(() => {
    let array = [];
    const newParts = allInfo?.newPartsDetails;
    newParts?.map((part, index) => {
      let indexValue = -1;
      array?.map((temp, idx) => {
        if (String(temp.field) === String(part.NewPartsGSTPct)) {
          indexValue = idx;
        }
      });

      if (indexValue === -1) {
        const newField = {
          field: part.NewPartsGSTPct,
          value: 1,
        };
        array.push(newField);
      }
    });

    array.sort((a, b) => parseFloat(a.field) - parseFloat(b.field));
    console.log("array", array);
    setAllGSTType(array);
  }, [allInfo]);

  useEffect(() => {
    let array = [],
      array2 = [];
    const labours = allInfo?.labourDetails;
    labours?.map((part, index) => {
      if (Number(part.IsGSTIncluded) % 2 === 0) {
        const newRow = {
          ...part,
          pos: index + 1,
        };
        array.push(newRow);
      } else {
        const newRow = {
          ...part,
          pos: index + 1,
        };
        array2.push(newRow);
      }
    });
    setNoGST(array);
    setGST(array2);
  }, [allInfo]);

  const sortFunction = (array, type) => {
    const updatedArray = array.sort(
      (a, b) => parseFloat(a.SNO) - parseFloat(b.SNO)
    );
    let newRevisedArray = [];
    updatedArray.map((row, index) => {
      if (String(row.NewPartsGSTPct) === String(type)) {
        const newRow = {
          ...row,
          pos: index + 1,
        };
        newRevisedArray.push(newRow);
      }
    });
    return newRevisedArray;
  };

  const calculateGSTSectionVauesWithGST = (gstPct) => {
    let total = 0;

    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const dep = (assessed * Number(part?.NewPartsDepreciationPct)) / 100;

      if (
        String(part?.NewPartsIsActive) === "1" &&
        String(part?.NewPartsGSTPct) === String(gstPct)
      ) {
        console.log("partss", gstPct, part);
        total = total + (assessed - dep);
      }
    });

    return total;
  };

  const calculateGSTWholeSectionVauesWithGST2 = () => {
    let total = 0;
    allInfo?.GSTSummaryNewParts?.map((part, index) => {
        total += Number(part.TotalAssessed)
    });

    return total;
  };

  const calculateGSTSectionGST = (gstPct) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const dep = (assessed * Number(part?.NewPartsDepreciationPct)) / 100;
      const gst = ((assessed - dep) * Number(part?.NewPartsGSTPct)) / 100;

      if (
        String(part?.NewPartsIsActive) === "1" &&
        String(part?.NewPartsGSTPct) === String(gstPct)
      ) {
        total += gst;
        console.log("total", total);
      }
    });

    return total;
  };

  const calculateGSTWholeSectionGST2 = () => {
    let total = 0;
    allInfo?.GSTSummaryNewParts?.map((part, index) => {
        total += Number(Number(part.CGST) + Number(part.SGST))
    });

    return total;
  };

  const calculateGSTSectionVauesWithGSTlabour = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const dep = (assessed * Number(part?.NewPartsDepreciationPct)) / 100;
    const gst = (assessed * Number(part?.NewPartsGSTPct)) / 100;

    if (String(part?.NewPartsIsActive) === "1") {
      return assessed - dep;
    }
    return 0;
  };

  const calculateGSTWholeSectionVauesWithGSTLabour = () => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const dep = (assessed * Number(part?.NewPartsDepreciationPct)) / 100;
      const gst = ((assessed - dep) * Number(part?.NewPartsGSTPct)) / 100;

      if (String(part?.NewPartsIsActive) === "1") {
        total = total + assessed;
      }
    });

    return total;
  };

  const calculateGSTSectionGSTLabour = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const dep = (assessed * Number(part?.NewPartsDepreciationPct)) / 100;
    const gst = ((assessed - dep) * Number(part?.NewPartsGSTPct)) / 100;

    if (String(part?.NewPartsIsActive) === "1") {
      return gst;
    }
    return 0;
  };

  const calculateGSTWholeSectionGSTLabour = () => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const dep = (assessed * Number(part?.NewPartsDepreciationPct)) / 100;
      const gst = ((assessed - dep) * Number(part?.NewPartsGSTPct)) / 100;

      if (String(part?.NewPartsIsActive) === "1") {
        total = total + gst;
      }
    });

    return total;
  };

  const downloadPDF = () => {
    const input = pdfRef.current;
    const pdf = new jsPDF("p", "mm", "a4", true);

    const generatePage = (pageNumber) => {
      return new Promise((resolve) => {
        html2canvas(input, {
          useCORS: true,
          scale: 2,
          logging: true,
          allowTaint: true,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 30;

          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );

          if (pageNumber < totalPages) {
            pdf.addPage(); // Add a new page for the next iteration
            resolve();
          } else {
            resolve(); // Resolve when all pages are generated
          }
        });
      });
    };

    const totalPages = 3;

    let currentPage = 1;

    const generateAllPages = () => {
      if (currentPage <= totalPages) {
        generatePage(currentPage).then(() => {
          currentPage++;
          generateAllPages(); // Recursively generate the next page
        });
      } else {
        pdf.save("invoice.pdf");
      }
    };

    generateAllPages();
  };

  //   const input = pdfRef.current;

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4", true);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     const imgWidth = canvas.width;
  //     const imgHeight = canvas.height;
  //     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  //     const imgX = (pdfWidth - imgWidth * ratio) / 2;
  //     const imgY = 30;

  //     pdf.addImage(
  //       imgData,
  //       "PNG",
  //       imgX,
  //       imgY,
  //       imgWidth * ratio,
  //       imgHeight * ratio
  //     );
  //     pdf.save("invoice.pdf");
  //   });
  // };

  const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    const dateParts = new Date(dateString)
      .toLocaleDateString("en-GB", options)
      .split("/");
    const formattedDate =
      dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2];
    return formattedDate;
  };

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  //*******************functions******************************//

  const calculateGlassDept = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (
      String(part.NewPartsTypeOfMaterial === "Glass") &&
      part.NewPartsIsActive
    ) {
      return assessed;
    }
    return 0;
  };

  const calculateMetalDept = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (
      String(part.NewPartsTypeOfMaterial === "Metal") &&
      part.NewPartsIsActive
    ) {
      return assessed;
    }
    return 0;
  };

  const calculateNonMetalDept = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (
      String(
        part.NewPartsTypeOfMaterial !== "Glass" &&
          String(
            part.NewPartsTypeOfMaterial !== "Metal" && part.NewPartsIsActive
          )
      )
    ) {
      return assessed;
    }
    return 0;
  };

  const getTotalEstimate = () => {
    let total = 0;
    allInfo?.newPartsDetails.map((part, index) => {
      const assessed = Number(part.NewPartsEstimate) * Number(part.QE);
      total = total + part.NewPartsIsActive ? assessed : 0;
    });
    return total;
  };

  const getTotalGlassAssessed = () => {
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
  const getTotalMetalAssessed = () => {
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

  function convertToReadable(timeStr) {
    try {
      // Split the time string into hours and minutes
      const [hours, minutes] = timeStr.split(":");

      // Convert hours and minutes to numbers
      const hour = parseInt(hours, 10);
      const minute = parseInt(minutes, 10);

      // Format the time in readable format
      const formattedHour = (hour % 12 || 12).toString().padStart(2, "0"); // Convert to 12-hour format
      const period = hour < 12 ? "AM" : "PM";
      const readableTime = `${formattedHour}:${minutes} ${period}`; // Example: 09:49 AM
      return readableTime;
    } catch (error) {
      return "Invalid time format. Please provide time in HH:MM format.";
    }
  }

  function addCommasToNumber(number) {
    if (Number(number) <= 100 || number === undefined) return number;
    return number.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function convertToBulletPointsAndParseHTML(text) {
    // Convert HTML tags to plain text
    const plainText = text.replace(/<[^>]*>?/gm, "");

    // Split the text into sentences
    const sentences = plainText
      .split(/\d+\./)
      .filter((sentence) => sentence.trim() !== "");

    // Convert sentences into bullet points
    const bulletPoints = sentences.map(
      (sentence) => `<li>${sentence.trim()}</li>`
    );

    // Join bullet points into an unordered list
    const bulletList = `<ul>${bulletPoints.join("")}</ul>`;

    return bulletList;
  }

  const getTotalOtherMetalAssesses = () => {
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


  const getTotalDepreciationValueOnly = (type, other) => {
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


  const getTotalDepreciation = (type, other) => {
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

  const getTotalNonMetaDepreciation = () => {
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

  const getTotalNonMetaDepreciationValueOnly = () => {
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

 const calculateTypeNewPartsGST = (type) => {
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

  const calculateOtherTypeNewPartsGST = () => {
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

  const calculateEstimateNewPartsGST = (type) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsEstimate) * Number(part.QE);
      const gst = (assessed * Number(part.NewPartsGSTPct)) / 100;

      total = total + part.NewPartsIsActive ? gst : 0;
    });
    return total;
  };

  const getTotalEvaluationOfAssessedForNewParts = () => {
    const glassValue =
      calculateTypeNewPartsGST("Glass") +
      getTotalGlassAssessed() -
      getTotalDepreciation("Glass", false);
    const metalValue =
      calculateTypeNewPartsGST("Metal") +
      getTotalMetalAssessed() -
      getTotalDepreciation("Metal", false);
    const nonMetalValue =
      calculateOtherTypeNewPartsGST() +
      getTotalOtherMetalAssesses() -
      getTotalNonMetaDepreciation();

    return glassValue + metalValue + nonMetalValue;
  };

  ///******************Labour *********************888*/

  const getTotalLabourEstimate = () => {
    let total = 0;
    allInfo?.labourDetails?.map((part, index) => {
      const estimate = Number(part.Estimate);

      if (part.LabourIsActive) {
        total = total + estimate;
      }
    });
    return total;
  };

  const getTotalLabourAssessed2 = () => {
    let total = 0;
    allInfo?.GSTSummaryLabour?.map((part, index) => {
        total += Number(part.TotalAssessed)
    });

    return total;
  };

  const getTotalLabourEstimateGST2 = () => {
    let total = 0;
    allInfo?.labourDetails?.map((part, index) => {
      const estimate = Number(part.Estimate);

      const gst = (estimate * Number(part.GSTPercentage)) / 100;
      if (part.LabourIsActive) {
        total = total + gst;
      }
    });
    return total;
  };

  const getTotalLabourAssessedGST2 = () => {
    let total = 0;
    allInfo?.GSTSummaryLabour?.map((part, index) => {
        total += Number(Number(part.CGST) + Number(part.SGST))
    });

    return total;
  };

  //*************SUMMARY**************** *//

  const lessExcess = Number(allInfo?.summaryReport[0]?.LessExcess) || 0;
  const lessSalvage = Number(allInfo?.summaryReport[0]?.ExpectedSalvage) || 0;

  const getSummaryTotalWithLessExcess = () => {
    return (
      getTotalLabourAssessed() +
      getTotalLabourAssessedGST() +
      getTotalEvaluationOfAssessedForNewParts() +
      lessExcess
    );
  };


  
  const getTotalLabourAssessedGSTValuess = () => {
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

  
  const calculateLabourDepreciations = () => {
    let totalDep = 0;
    allInfo?.labourDetails?.map((labour, index) => {
      if (String(labour.JobType) === "1" && labour.LabourIsActive ) {
        const dep = Number(Number(labour.Assessed) * (12.5)) / 100;
        totalDep = (Number(totalDep) + Number(dep));
      }
    });
    return String(allInfo?.otherInfo[0]?.PolicyType) === "Regular" ? totalDep: 0;
  };

  const calculateTotalPaintingEstimate = () => {
    let total = 0;
    allInfo?.labourDetails?.map((labour, index) => {
      const estimate = Number(labour.Estimate);
      if (String(labour.JobType) === "1" && labour.LabourIsActive ) {
        total = total + estimate;
      }
    });
    return total;
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

  const addVariables = (string) => {
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

  const getTotalLabourAssessedGST = () => {
    const currentLabourGST = allInfo?.labourDetails[0].GSTPercentage;
    const overAllValueWithoutGST = getTotalLabourAssessed() - calculateLabourDepreciations();
    const gstValue = (Number(overAllValueWithoutGST) * Number(currentLabourGST)) / 100;
    return gstValue
  };


  const getTotalLabourAssessed = () => {
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

  const getTotalLabourAssessedSum = () => {
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


  const getSummaryTotalWithLessSalvage = () => {
    return (
      ((getTotalLabourAssessedSum() - calculateLabourDepreciations())+ getTotalLabourAssessedGSTValuess())  +
      getTotalEvaluationOfAssessedForNewParts() -
      lessExcess -
      lessSalvage 
    );
  };

  //********Value********* */

  const newPartsGST = () => {
    let gst = 0;
    allInfo?.newPartsDetails.map((part, index) => {
      gst = part.NewPartsGSTPct;
    });
    return gst;
  };

  const labourGST = () => {
    let gst = 0;
    allInfo?.labourDetails.map((part, index) => {
      gst = part.GSTPercentage;
    });
    return gst;
  };

  const roundOff = (number) => {
    return Math.round(number * 100) / 100;
  };

  function calculateAge() {
    const birthDate = allInfo?.otherInfo[0]?.DateOfBirth;
    if (!birthDate) {
      return "Invalid date";
    }

    // Split the birthDate string into day, month, and year components
    var dateComponents = birthDate?.split("/");
    var birthDay = parseInt(dateComponents[0]);
    var birthMonth = parseInt(dateComponents[1]);
    var birthYear = parseInt(dateComponents[2]);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in years and months
    var yearsDiff = currentDate.getFullYear() - birthYear;
    var monthsDiff = currentDate.getMonth() - (birthMonth - 1);

    // Adjust years and months if the current month is before the birth month
    if (
      monthsDiff < 0 ||
      (monthsDiff === 0 && currentDate.getDate() < birthDay)
    ) {
      yearsDiff--;
      monthsDiff += 12;
    }

    // Construct the age string
    var ageString = yearsDiff + " years ";
    if (monthsDiff > 0) {
      ageString += monthsDiff + " months";
    }
    return ageString;
  }

  // function numberToWords(number) {
  //   const units = [
  //     "",
  //     "one",
  //     "two",
  //     "three",
  //     "four",
  //     "five",
  //     "six",
  //     "seven",
  //     "eight",
  //     "nine",
  //   ];
  //   const teens = [
  //     "",
  //     "eleven",
  //     "twelve",
  //     "thirteen",
  //     "fourteen",
  //     "fifteen",
  //     "sixteen",
  //     "seventeen",
  //     "eighteen",
  //     "nineteen",
  //   ];
  //   const tens = [
  //     "",
  //     "ten",
  //     "twenty",
  //     "thirty",
  //     "forty",
  //     "fifty",
  //     "sixty",
  //     "seventy",
  //     "eighty",
  //     "ninety",
  //   ];

  //   const convertLessThanThousand = (num) => {
  //     if (num === 0) {
  //       return "";
  //     }

  //     let result = "";

  //     if (num >= 100) {
  //       result += units[Math.floor(num / 100)] + " hundred ";
  //       num %= 100;
  //     }

  //     if (num >= 11 && num <= 19) {
  //       result += teens[num - 11];
  //     } else {
  //       result += tens[Math.floor(num / 10)];
  //       num %= 10;

  //       if (num > 0) {
  //         result += " " + units[num];
  //       }
  //     }

  //     return result;
  //   };

  //   const convert = (num) => {
  //     if (num === 0) {
  //       return "zero";
  //     }

  //     let result = "";

  //     if (num >= 1e9) {
  //       result += convertLessThanThousand(Math.floor(num / 1e9)) + " billion ";
  //       num %= 1e9;
  //     }

  //     if (num >= 1e6) {
  //       result += convertLessThanThousand(Math.floor(num / 1e6)) + " million ";
  //       num %= 1e6;
  //     }

  //     if (num >= 1e3) {
  //       result += convertLessThanThousand(Math.floor(num / 1e3)) + " thousand ";
  //       num %= 1e3;
  //     }

  //     result += convertLessThanThousand(num);

  //     return result.trim();
  //   };

  //   const roundedNumber = roundOff(number);

  //   const wholePart = Math.floor(roundedNumber);
  //   const decimalPart = Math.round((roundedNumber - wholePart) * 100);

  //   const wordsWholePart = convert(wholePart);
  //   const wordsDecimalPart = convert(decimalPart);

  //   const wordss =
  //     wordsWholePart + " Rupees and " + wordsDecimalPart + " paisa";
  //   return wordss.toUpperCase();
  // }
  const [splitText, setSplitText] = useState([]);

  const text = convertToProperHTML(
    addVariables(allInfo?.summaryReport[0]?.SummaryNotes)
  );
  // Using useState to store the split text

  useEffect(() => {
    const regex = /\s(?=\d{2}\s)/g; // Lookahead regex to split where there's a number (two digits) followed by a space
    const splitParts = text.split(regex).map((part) => part.trim()); // Splitting and trimming the parts
    setSplitText(splitParts);
  }, [text]);
  return (
    <>
      <div className="" style={{ marginTop: "10px" }}>
        {allInfo?.otherInfo[0]?.PolicyType !== "Regular" && (
          <h5 className="text-dark" style={{ color: "black" }}>
            Depreciations(
            {addCommasToNumber(
              roundOff(
                getTotalDepreciationValueOnly("Glass", false) +
                  getTotalDepreciationValueOnly("Metal", false) +
                  getTotalNonMetaDepreciationValueOnly() +
                  calculateLabourDepreciations()
              )
            )}
            ) is not deducted being{" "}
            <span style={{ fontWeight: "bold" }}>NIL DEPRECIATION</span> policy.
          </h5>
        )}
        <h5 className="text-dark" style={{ color: "black" }}>
          GST Summary Tax Wise (New Parts)
        </h5>
        <table style={{ width: "100%" }}>
          <tr>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Sr.No.
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Tax Percentage
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Actual Allowed
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              C GST
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              S GST
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              I GST
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Total
            </th>
          </tr>

          {allInfo?.GSTSummaryNewParts.map((field, index) => {
            return (
              true && (
                <>
                  <>
                    <tr>
                      <td
                        style={{
                          border: "1px solid black",
                          paddingRight: "5px",
                        }}
                      >
                        {index + 1}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          paddingRight: "5px",
                        }}
                      >
                        {field.GSTPct} %
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          paddingRight: "5px",
                        }}
                      >
                        {field.TotalAssessed}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          paddingRight: "5px",
                        }}
                      >
                        {field.CGST}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          paddingRight: "5px",
                        }}
                      >
                        {field.SGST}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          paddingRight: "5px",
                        }}
                      >
                        ----
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          paddingRight: "5px",
                        }}
                      >
                        {field.GrandTotalAssessed}
                      </td>
                    </tr>
                  </>
                </>
              )
            );
          })}

          <tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Grand Total
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber(
                calculateGSTWholeSectionVauesWithGST2()
              )}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber((calculateGSTWholeSectionGST2() / 2).toFixed(2))}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber((calculateGSTWholeSectionGST2() / 2).toFixed(2))}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              ---
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber(
                Math.round(
                  calculateGSTWholeSectionVauesWithGST2() +
                    calculateGSTWholeSectionGST2()
                )
              )}
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
                fontWeight: "bold",
              }}
            >
              Total Tax
            </td>
            <td
              colSpan={3}
              style={{
                border: "1px solid black",
                paddingRight: "5px",
                textAlign: "center",
              }}
            >
              {addCommasToNumber(roundOff(calculateGSTWholeSectionGST2()))}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
          </tr>
        </table>
      </div>
      <div className="mt-2 mb-5">
        <h5 className="text-dark" style={{ color: "black" }}>
          GST Summary Tax Wise (labour)
        </h5>
        <table style={{ width: "100%" }}>
          <tr>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Sr.No.
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Service Acc. Code
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              GST %
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Actual Allowed
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              C GST
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              S GST
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              I GST
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Total
            </th>
          </tr>
          {allInfo?.GSTSummaryLabour?.map((parts,index)=>{
            return true ?  
            <><tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {index + 1}
            </td>
            <td
              colSpan={2}
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {parts.GSTPercentage} %
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
             {parts.TotalAssessed} 
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {parts.CGST}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {parts.SGST}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {"  "}---
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {parts.GrandTotalAssessed}
            </td>
          </tr>
          </> : null
          })}
         
          <tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
            <td
              colSpan={2}
              style={{
                border: "1px solid black",
                paddingRight: "5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Grand Total
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber(Math.round(getTotalLabourAssessed2()))}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber(getTotalLabourAssessedGST2() / 2)}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber(getTotalLabourAssessedGST2() / 2)}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {"  "}---
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              {addCommasToNumber(
                Math.round(getTotalLabourAssessedGST2() + getTotalLabourAssessed2())
              )}
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
            <td
              colSpan={2}
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
                fontWeight: "bold",
              }}
            >
              Total Tax
            </td>
            <td
              colSpan={3}
              style={{
                border: "1px solid black",
                paddingRight: "5px",
                textAlign: "center",
              }}
            >
              {addCommasToNumber(roundOff(getTotalLabourAssessedGST2()))}
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            ></td>
          </tr>
        </table>
      </div>
      <div>
        <span>
          Based on details provided above, the liability under the subject
          policy of insurance works out to{" "}
          <b>
            ₹ {addCommasToNumber(Math.round(getSummaryTotalWithLessSalvage()))}{" "}
            <br /> ({numberToWords.toWords((Math.round(getSummaryTotalWithLessSalvage()))).toUpperCase()}){" "}
          </b>{" "}
          {/* {console.log('---1374----',numberToWords(Math.round(getSummaryTotalWithLessSalvage())))} */}
          The assessment of loss, as detailed above, is subject to the terms and
          conditions of the policy of insurance.
        </span>
      </div>
      <div>
        <h5 className="text-dark" style={{ color: "black" }}>
          Notes :
        </h5>
        <ul>
          <div>
            {splitText.map((part, index) => (
              <li key={index}>{part.replace(/\n/g, "")}</li>
            ))}
          </div>

          {/* <li>
            {convertToProperHTML(
              addVariables(allInfo?.summaryReport[0]?.SummaryNotes)
            )}
          </li> */}

          {/*<li>
            <h4>1. Vehicle Re-inspected by me & photogarphs of same .</h4>
          </li>
          <li>
            <h4>
              2. Parts & Labour allowed as per local market but note more than
              to authorize dealer.
            </h4>
          </li>
          <li>
            <h4>3 Bills of repairs/replacement checked by me & enclosed. </h4>
          </li>
          <li>
            <h4>
              4. The loss or damage or liability has arisen proximately caused
              by Insured peril{" "}
            </h4>
          </li>
          <li>
            <h4>
              5. None of the exclusions under Ins. policy has caused loss or
              damage or liability.
            </h4>
            </li>*/}
        </ul>

        <span className="text-dark">
          Thanking you and assuring you of my best services at all times,
        </span>
        <br />
        <br />
        <div
          className="d-flex justify-content-between"
          style={{ marginBottom: "" }}
        >
          <div>
            <span>
              Enclosures :{" "}
              {allInfo?.summaryReport[0]?.Endurance !== "undefined"
                ? allInfo?.summaryReport[0]?.Endurance
                : "--"}
            </span>
          </div>
          <div className="text-end">
            <Image
              width={261}
              height={89}
              priority
              className="w50"
              src="/assets/images/stamp.jpg"
              alt="1.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GSTSummary;
