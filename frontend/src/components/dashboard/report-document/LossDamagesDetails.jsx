import React, { useEffect } from "react";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { array } from "prop-types";

const LossDamagesDetails = ({ allInfo }) => {
  const pdfRef = useRef();
  let count = 1;

  const [allGSTType, setAllGSTType] = useState([]);

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


  const calculateMetalDepreciationWithoutValue = () => {
   let depPct = 0;
    allInfo?.newPartsDetails?.map((part,index)=>{
   if (
      String(part.NewPartsTypeOfMaterial) === "Metal" &&
      part.NewPartsIsActive
    ) {
      depPct =  Number(part.NewPartsDepreciationPct);
    }
  })
    return depPct;
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

  const getTotalEstimate = (type) => {
    let total = 0;
    let typeTotalValue = 0;
    allInfo?.newPartsDetails.map((part, index) => {
      const assessed = Number(part.NewPartsEstimate) * Number(part.QE);
      total = total + part.NewPartsIsActive ? assessed : 0;
      typeTotalValue =
        typeTotalValue +
        (part.NewPartsIsActive && String(part.NewPartsGSTPct) === String(type)
          ? assessed
          : 0);
    });

    console.log("type", type, total, typeTotalValue);
    if (!type) {
      return total;
    } else {
      return typeTotalValue;
    }
  };

  //calculate New Parts overall calculation with all type gst values
  const getOverallTotalEstimate = () => {
    let total = 0;
    allInfo?.newPartsDetails.map((part, index) => {
      const assessed = Number(part.NewPartsEstimate) * Number(part.QE);
      total = total + (part.NewPartsIsActive ? assessed : 0);
    });
    return total;
  };

  //calculate New Parts overall calculation with all type gst values
  const getOverallTotalEstimateGST = () => {
    let total = 0;
    allGSTType.map((gst, index) => {
      total = total + calculateEstimateNewPartsGST(gst.field);
    });
    return total;
  };

  //calculate New Parts overall calculation with all type gst values
  const getOverallTotalEstimateNewParts = () => {
    let total = 0;
    allGSTType.map((gst, index) => {
      total = total + getTotalEstimate(gst.field);
    });
    return total;
  };

  const getTotalGlassAssessed = (type) => {
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

  const getTotalGlassAssessedWithGSTType = (type) => {
    let total = 0;
    allInfo?.newPartsDetails.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);

      if (
        String(part.NewPartsTypeOfMaterial) === "Glass" &&
        part.NewPartsIsActive &&
        String(part.NewPartsGSTPct) === String(type)
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

  const getTotalMetalAssessedWithGST = (type) => {
    let total = 0;
    allInfo?.newPartsDetails.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const Depreciation =
        (assessed * Number(part.NewPartsDepreciationPct)) / 100;
      if (
        String(part.NewPartsTypeOfMaterial) === "Metal" &&
        part.NewPartsIsActive &&
        String(part.NewPartsGSTPct) === String(type)
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

  const getTotalOtherMetalAssessesWithGST = (type) => {
    let total = 0;
    allInfo?.newPartsDetails.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);

      if (
        String(part.NewPartsTypeOfMaterial) !== "Glass" &&
        String(part.NewPartsTypeOfMaterial) !== "Metal" &&
        part.NewPartsIsActive &&
        String(part.NewPartsGSTPct) === String(type)
      ) {
        total = total + assessed;
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
        part.NewPartsIsActive
      ) {
        total = total + Depreciation;
      }
    });
    return total;
  };

  const getTotalDepreciationWithGSTType = (type, other, gstType) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const Depreciation =
        (assessed * Number(part.NewPartsDepreciationPct)) / 100;

      if (
        String(part.NewPartsTypeOfMaterial) === String(type) &&
        part.NewPartsIsActive &&
        String(part.NewPartsGSTPct) === String(gstType)
      ) {
        total = total + Depreciation;
      }
    });
    return total;
  };

  const getTotalNonMetaDepreciation = (type) => {
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

  const getTotalNonMetaDepreciationWithGST = (type) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const Depreciation =
        (assessed * Number(part.NewPartsDepreciationPct)) / 100;
      if (
        String(part.NewPartsTypeOfMaterial) !== "Glass" &&
        String(part.NewPartsTypeOfMaterial) !== "Metal" &&
        part.NewPartsIsActive &&
        String(part.NewPartsGSTPct) === String(type)
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

  const calculateTypeNewPartsGSTType = (type, gstType) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const gst = (assessed * Number(part.NewPartsGSTPct)) / 100;

      if (
        String(part.NewPartsTypeOfMaterial) === String(type) &&
        part.NewPartsIsActive &&
        String(part.NewPartsGSTPct) === String(gstType)
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

  const calculateOtherTypeNewPartsGSTType = (type) => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
      const gst = (assessed * Number(part.NewPartsGSTPct)) / 100;

      if (
        String(part.NewPartsTypeOfMaterial) !== "Glass" &&
        String(part.NewPartsTypeOfMaterial) !== "Metal" &&
        part.NewPartsIsActive &&
        String(part.NewPartsGSTPct) === String(type)
      ) {
        total = total + gst;
      }
    });
    return total;
  };

  const calculateEstimateNewPartsGST = (type) => {
    let total = 0;

    let typeTotalValue = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const assessed = Number(part.NewPartsEstimate) * Number(part.QE);
      const gst = (assessed * Number(part.NewPartsGSTPct)) / 100;

      total = total + part.NewPartsIsActive ? gst : 0;
      typeTotalValue =
        typeTotalValue +
        (part.NewPartsIsActive && String(part.NewPartsGSTPct) === String(type)
          ? gst
          : 0);
    });

    console.log("type", type, total, typeTotalValue);
    if (!type) {
      return total;
    } else {
      return typeTotalValue;
    }
  };

  const getTotalEvaluationOfEstimateForNewParts = () => {
    let total = 0;
    allInfo?.newPartsDetails?.map((part, index) => {
      const estimate = Number(part.NewPartsEstimate) * Number(part.QE);
      total += estimate;
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

  const getTotalLabourAssessed = () => {
    let total = 0;
    allInfo?.labourDetails?.map((part, index) => {
      const assessed = Number(part.Assessed);

      if (part.LabourIsActive) {
        total = total + assessed;
      }
    });
    return total;
  };

  const getTotalLabourEstimateGST = () => {
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

  const getTotalLabourAssessedGST = () => {
    let total = 0;
    allInfo?.labourDetails?.map((part, index) => {
      const assessed = Number(part.Assessed);

      const gst = (assessed * Number(part.GSTPercentage)) / 100;
      if (part.LabourIsActive) {
        total = total + gst;
      }
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

  function convertToProperHTML(htmlString) {
    // Create a new DOMParser
    const parser = new DOMParser();

    // Parse the HTML string
    const doc = parser.parseFromString(htmlString, "text/html");

    // Extract the text content from the parsed document
    const plainText = doc.body.textContent || "";

    return plainText;
  }

  const getSummaryTotalWithLessSalvage = () => {
    return (
      getTotalLabourAssessed() +
      getTotalLabourAssessedGST() +
      getTotalEvaluationOfAssessedForNewParts() +
      lessExcess +
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

  //Sort function
  const sortFunction = (array,type) => {
    
    const updatedArray =  array.sort((a, b) => parseFloat(a.SNO) - parseFloat(b.SNO));
    let newRevisedArray = [];
    updatedArray.map((row,index)=>{
      if(String(row.NewPartsGSTPct) === String(type)){
        const newRow ={
          ...row,
          pos : index +1
        }
        newRevisedArray.push(newRow)
      }
    })
    return newRevisedArray;
  };

  function numberToWords(number) {
    const units = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const teens = [
      "",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    const convertLessThanThousand = (num) => {
      if (num === 0) {
        return "";
      }

      let result = "";

      if (num >= 100) {
        result += units[Math.floor(num / 100)] + " hundred ";
        num %= 100;
      }

      if (num >= 11 && num <= 19) {
        result += teens[num - 11];
      } else {
        result += tens[Math.floor(num / 10)];
        num %= 10;

        if (num > 0) {
          result += " " + units[num];
        }
      }

      return result;
    };

    const convert = (num) => {
      if (num === 0) {
        return "zero";
      }

      let result = "";

      if (num >= 1e9) {
        result += convertLessThanThousand(Math.floor(num / 1e9)) + " billion ";
        num %= 1e9;
      }

      if (num >= 1e6) {
        result += convertLessThanThousand(Math.floor(num / 1e6)) + " million ";
        num %= 1e6;
      }

      if (num >= 1e3) {
        result += convertLessThanThousand(Math.floor(num / 1e3)) + " thousand ";
        num %= 1e3;
      }

      result += convertLessThanThousand(num);

      return result.trim();
    };

    const roundedNumber = roundOff(number);

    const wholePart = Math.floor(roundedNumber);
    const decimalPart = Math.round((roundedNumber - wholePart) * 100);

    const wordsWholePart = convert(wholePart);
    const wordsDecimalPart = convert(decimalPart);

    return wordsWholePart + " Rupees and " + wordsDecimalPart + " paisa";
  }

  //*************************** */

  return (
    <div>
      <div>
        <h5 className="text-dark">PARTICULARS OF LOSS/DAMAGES :</h5>
        <span className="">
          In accordance with the instructions received from{" "}
          <b>
            {allInfo?.otherInfo[0]?.InsuranceCompanyNameAddress}{" "}
            {allInfo?.otherInfo[0]?.ClaimServicingOffice}
          </b>{" "}
          dated <b>{formatDate(allInfo?.otherInfo[0]?.AddedDateTime)}</b> I
          visited <b>{allInfo?.otherInfo[0]?.GarageNameAndAddress}</b> and
          inspected the subject vehicle, reported to have met with an accident
          on <b>{formatDate(allInfo?.otherInfo[0]?.AddedDateTime)}</b> Between{" "}
          {allInfo?.otherInfo[0]?.PlaceOfLoss} and snapped the vehicle from
          different angles before and after dismantling. <br />
          <br />
          <span className="">
            Loss was discussed with the repairer and finally settled as under
            subject to policy terms, conditions and approval of the Insurers
            keeping in view the cause & nature of accident and my physical
            inspection before and after dismantling.{" "}
          </span>
        </span>
      </div>
      <hr />
      <div className="">
        <span>
          <b>Observation : </b> Subject with good condition overall. No other
          damages except as mentioned above were observed over vehicle. Police
          report of accident not carried out by Insured.
        </span>
      </div>
      <br />
      <div className="">
        <h5 className="text-dark">NEW PARTS :</h5>
        <table border={1} style={{ width: "100%" }}>
          <tr>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              E. No.
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              Parts Description
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              HSN Code
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              Bill S. No
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              Remark
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              Estimated
            </th>
            <th
              colSpan={3}
              style={{
                border: "1px solid black",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Assessed
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              GST
            </th>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Glass/ 2nd Hand/ Repair
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Metal ({calculateMetalDepreciationWithoutValue()}%)
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Non Metal
            </th>
          </tr>
          {allGSTType?.map((field, index) => {
            return (
              <>
                <tr>
                  <th colSpan={2}>Parts with {field.field} % GST</th>
                  <th
                    style={{ border: "1px solid black", padding: "10px" }}
                  ></th>
                  <th
                    style={{ border: "1px solid black", padding: "10px" }}
                  ></th>
                  <th
                    style={{ border: "1px solid black", padding: "10px" }}
                  ></th>
                  <th
                    style={{ border: "1px solid black", padding: "10px" }}
                  ></th>
                  <th
                    style={{ border: "1px solid black", padding: "10px" }}
                  ></th>
                  <th
                    style={{ border: "1px solid black", padding: "10px" }}
                  ></th>
                  <th
                    style={{ border: "1px solid black", padding: "10px" }}
                  ></th>
                </tr>
            
                {sortFunction(allInfo?.newPartsDetails,field.field).map((part, index) => {
                  return part.NewPartsIsActive === 1 &&
                    String(part.NewPartsGSTPct) === String(field.field) ? (
                    <tr key={index}>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {part.pos}
                      </td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {part.NewPartsItemName}
                      </td>
                      <td
                        style={{ border: "1px solid black", padding: "5px" }}
                      ></td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {part.NewPartsBillSr}
                      </td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {part.NewPartsRemark}
                      </td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {roundOff(part.NewPartsEstimate)}
                      </td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {String(part.NewPartsTypeOfMaterial) === "Glass"
                          ? roundOff(calculateGlassDept(part))
                          : 0}
                      </td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {String(part.NewPartsTypeOfMaterial) === "Metal"
                          ? roundOff(calculateMetalDept(part))
                          : 0}
                      </td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {String(part.NewPartsTypeOfMaterial) !== "Metal" &&
                        String(part.NewPartsTypeOfMaterial) !== "Glass"
                          ? roundOff(calculateNonMetalDept(part))
                          : 0}
                      </td>
                      <td style={{ border: "1px solid black", padding: "5px" }}>
                        {" "}
                        {roundOff(part.NewPartsGSTPct)}.00
                      </td>
                    </tr>
                  ) : null;
                })}
                <tr>
                  <td
                    colSpan={5}
                    style={{ border: "none", padding: "5px" }}
                    className="text-end"
                  >
                    <span className="mt-0">Sub Total : </span>
                    <br />
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(roundOff(getTotalEstimate(field.field)))}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        getTotalGlassAssessedWithGSTType(field.field) -
                          getTotalDepreciationWithGSTType(
                            "Glass",
                            false,
                            field.field
                          )
                      )
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        getTotalMetalAssessedWithGST(field.field) -
                          getTotalDepreciationWithGSTType(
                            "Metal",
                            false,
                            field.field
                          )
                      )
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        getTotalOtherMetalAssessesWithGST(field.field) -
                          getTotalNonMetaDepreciationWithGST(field.field)
                      )
                    )}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ border: "none", padding: "5px" }}
                    className="text-end"
                  >
                    <span className="mt-0">Gst @ {field.field} % : </span>
                    <br />
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(calculateEstimateNewPartsGST(field.field))
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        calculateTypeNewPartsGSTType("Glass", field.field)
                      )
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        calculateTypeNewPartsGSTType("Metal", field.field)
                      )
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(calculateOtherTypeNewPartsGSTType(field.field))
                    )}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    // rowSpan={6}
                    style={{ borderBottom: "1px solid black", padding: "5px" }}
                    className="text-end"
                  >
                    <span className="mt-0"> Total : </span>
                    <br />
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        getTotalEstimate(field.field) +
                          calculateEstimateNewPartsGST(field.field)
                      )
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        calculateTypeNewPartsGSTType("Glass", field.field) +
                          getTotalGlassAssessedWithGSTType(field.field) -
                          getTotalDepreciationWithGSTType(
                            "Glass",
                            false,
                            field,
                            field
                          )
                      )
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        calculateTypeNewPartsGSTType("Metal", field.field) +
                          getTotalMetalAssessedWithGST(field.field) -
                          getTotalDepreciationWithGSTType(
                            "Metal",
                            false,
                            field.field
                          )
                      )
                    )}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {addCommasToNumber(
                      roundOff(
                        calculateOtherTypeNewPartsGSTType(field.field) +
                          getTotalOtherMetalAssessesWithGST(field.field) -
                          getTotalNonMetaDepreciationWithGST(field.field)
                      )
                    )}
                  </td>
                </tr>
              </>
            );
          })}

          {/* <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
          </tr> */}
          <tr>
            <td
              colSpan={5}
              style={{ borderTop: "1px solid black", padding: "5px" }}
              className="text-end"
            >
              <span className="mt-0">Total : </span>
              <br />
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(getOverallTotalEstimate()))}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(getTotalGlassAssessed()))}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(getTotalMetalAssessed()))}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(getTotalOtherMetalAssesses()))}
            </td>
            <td
              rowSpan={5}
              style={{ border: "1px solid black", padding: "5px" }}
            ></td>
          </tr>
          <tr>
            <td
              colSpan={5}
              style={{ border: "none", padding: "5px" }}
              className="text-end"
            >
              <span className="mt-0">Less: Depreciation : </span>
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>----</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(getTotalDepreciation("Glass", false))
              )}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(getTotalDepreciation("Metal", false))
              )}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(getTotalNonMetaDepreciation()))}
            </td>
          </tr>
          <tr>
            <td
              colSpan={5}
              style={{ border: "none", padding: "5px" }}
              className="text-end"
            >
              <span className="mt-0">Total : </span>
              <br />
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(getOverallTotalEstimate(0)))}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  getTotalGlassAssessed() - getTotalDepreciation("Glass", false)
                )
              )}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  getTotalMetalAssessed() - getTotalDepreciation("Metal", false)
                )
              )}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  getTotalOtherMetalAssesses() - getTotalNonMetaDepreciation()
                )
              )}
            </td>
          </tr>
          <tr>
            <td
              colSpan={5}
              style={{ border: "none", padding: "5px" }}
              className="text-end"
            >
              <span className="mt-0">Add : Applicable GST : </span>
              <br />
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(getOverallTotalEstimateGST(0)))}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(calculateTypeNewPartsGST("Glass")))}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(calculateTypeNewPartsGST("Metal")))}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(roundOff(calculateOtherTypeNewPartsGST()))}
            </td>
          </tr>
          <tr>
            <td
              colSpan={5}
              // rowSpan={6}
              style={{ border: "none", padding: "5px" }}
              className="text-end"
            >
              <span className="mt-0">Net Total F : </span>
              <br />
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  getOverallTotalEstimateNewParts(0) +
                    getOverallTotalEstimateGST(0)
                )
              )}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  calculateTypeNewPartsGST("Glass") +
                    getTotalGlassAssessed() -
                    getTotalDepreciation("Glass", false)
                )
              )}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  calculateTypeNewPartsGST("Metal") +
                    getTotalMetalAssessed() -
                    getTotalDepreciation("Metal", false)
                )
              )}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  calculateOtherTypeNewPartsGST() +
                    getTotalOtherMetalAssesses() -
                    getTotalNonMetaDepreciation()
                )
              )}
            </td>
          </tr>
          <tr>
            <td
              colSpan={5}
              // rowSpan={6}
              style={{ border: "none", padding: "5px" }}
              className="text-end"
            >
              <span className="mt-0">Grand Total F : </span>
              <br />
              {/* Less: Depreciation : <br />
              Total : <br />
              Add : Applicable GST : <br />
              Net Total F :
              <br />
              Grand Total F : <br /> */}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addCommasToNumber(
                roundOff(
                  getOverallTotalEstimateNewParts(0) +
                    getOverallTotalEstimateGST(0)
                )
              )}
            </td>
            <td
              colSpan={3}
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              {addCommasToNumber(
                roundOff(getTotalEvaluationOfAssessedForNewParts())
              )}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default LossDamagesDetails;
