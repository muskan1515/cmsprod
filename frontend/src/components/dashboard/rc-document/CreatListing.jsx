import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document as PDFDocument,
  StyleSheet,
} from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

import axios from "axios";

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  boldText: {
    flex: 1,
    fontWeight: "bold",
  },
  normalText: {
    flex: 1,
  },
});

const RCData = ({ vehicleDetails }) => {
  

  console.log( vehicleDetails);


  let rcDetails = {
    "Chassis No.": "MA3FHEB1S00C55208",
    "Engine No.": "D13A2989355",
    "Maker Name": "MARUTI SUZUKI INDIA LTD",
    "Model Name": "MARUTI SWIFT VDI",
    "Registration Date": "04-Apr-17",
    "Odometer Reading": "ΝΑ",
    "Vehicle Type": "LMV",
    "Type Of Body": "Motor Car ( LMV )",
    "Fuel Type": "DIESEL",
    "Tax Particulars": "BHARAT STAGE IV",
    "Color": "WHITE",
    "Class Of Vehicle":"",
    "Seat Capacity": "5",
    "Cubic Capacity": "0",
    "Registered Owner": "INDIAN BANK",
    "Insurance Company": "The New India Assurance Company Limited",
    "Manufacture Month Year": "9.8E+19",
    "Insurance Valid UpTo": "30-Mar-24",
    "Vehicle Rc Status": "03-Apr-32",
    "PUCC No.": "HR05504260000707",
    "PUCC Valid Upto": "26-Dec-23",
    "Registering Authority": "SRI GANGANAGAR DTO, Rajasthan",
  };

  const [rcDetailData,setRcDetailData]=useState(rcDetails);

  useEffect(()=>{
    let rcDetailsUpdated = {
      "Chassis No.": vehicleDetails?.ChassisNumber !== "undefined" ? vehicleDetails?.ChassisNumber : "N.A.",
      "Engine No.": vehicleDetails?.EngineNumber !== "undefined" ? vehicleDetails?.EngineNumber : "N.A.",
      "Maker Name": vehicleDetails?.MakerDesc !== "undefined" ? vehicleDetails?.MakerDesc : "N.A.",
      "Model Name": vehicleDetails?.MakerModel !== "undefined" ? vehicleDetails?.MakerModel : "N.A.",
      "Registration Date": vehicleDetails?.DateOfRegistration !== "undefined" ? vehicleDetails?.DateOfRegistration : "N.A.",
      "Odometer Reading": vehicleDetails?.OdometerReading !== "undefined" ? vehicleDetails?.OdometerReading : "N.A.",
      "Vehicle Type": vehicleDetails?.VehicleType !== "undefined" ? vehicleDetails?.VehicleType : "N.A.",
      "Type Of Body": vehicleDetails?.TypeOfBody !== "undefined" ? vehicleDetails?.TypeOfBody : "N.A.",
      "Fuel Type": vehicleDetails?.FuelType !== "undefined" ? vehicleDetails?.FuelType : "N.A.",
      "Tax Particulars": vehicleDetails?.TaxParticulars !== "undefined" ? vehicleDetails?.TaxParticulars : "N.A.",
      "Color": vehicleDetails?.MakeVariantModelColor !== "undefined" ? vehicleDetails?.MakeVariantModelColor : "N.A.",
      
      "Class Of Vehicle": vehicleDetails?.ClassOfVehicle !== "undefined" ? vehicleDetails?.ClassOfVehicle : "N.A.",
      "Seat Capacity": vehicleDetails?.SeatingCapacity !== "undefined" ? vehicleDetails?.SeatingCapacity : "N.A.",
      "Cubic Capacity": vehicleDetails?.CubicCapacity !== "undefined" ? vehicleDetails?.CubicCapacity : "N.A.",
      "Registered Owner": vehicleDetails?.RegisteredOwner !== "undefined" ? vehicleDetails?.RegisteredOwner : "N.A.",
      "Insurance Company": vehicleDetails?.VehicleInsuranceCompany !== "undefined" ? vehicleDetails?.VehicleInsuranceCompany : "N.A.",
      "Manufacture Month Year": vehicleDetails?.ManufactureMonthYear !== "undefined" ? vehicleDetails?.ManufactureMonthYear : "N.A.",
      "Insurance Valid UpTo": vehicleDetails?.VehicleInsuranceUpto !== "undefined" ? vehicleDetails?.VehicleInsuranceUpto : "N.A.",
      "Vehicle Rc Status": vehicleDetails?.VehicleRcStatus !== "undefined" ? vehicleDetails?.VehicleRcStatus : "N.A.",
      "PUCC No.": vehicleDetails?.PucNumber !== "undefined" ? vehicleDetails?.PucNumber : "N.A.",
      "PUCC Valid Upto": vehicleDetails?.PucValidUntil !== "undefined" ? vehicleDetails?.PucValidUntil : "N.A.",
      "Registering Authority": vehicleDetails?.VehicleRegistedAt !== "undefined" ? vehicleDetails?.VehicleRegistedAt : "N.A.",
    };

  setRcDetailData(rcDetailsUpdated);

  },[vehicleDetails]);

  const handleExtract = async (format) => {
    if (format === "Word") {
      // Generate Word document
      const doc = new Document();
      Object.entries(vehicleDetails).forEach(([key, value]) => {
        doc.addParagraph(new Paragraph(`${key}: ${value}`));
      });
      Packer.toBlob(doc).then((blob) => {
        // Download Word document
        saveAs(blob, "RC_Details.docx");
      });
    } else if (format === "PDF") {
      // Generate PDF document
      const pdfDoc = (
        <PDFDocument>
          <Page size="A4">
            <View style={{ padding: 20 }}>
              <Text style={styles.title}>RC Details</Text>
              {Object.entries(vehicleDetails).map(([key, value]) => (
                <View key={key} style={styles.row}>
                  <Text style={styles.boldText}>{key}:</Text>
                  <Text style={styles.normalText}>{value}</Text>
                </View>
              ))}
            </View>
          </Page>
        </PDFDocument>
      );

      // Convert PDF to Blob and download
      const blob = await pdfToBlob(pdfDoc);
      saveAs(blob, "RC_Details.pdf");
    }
  };

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current; 

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
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
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div style={{ paddingTop: "10px", textAlign: "center" }} ref={pdfRef}>
      <h2 style={{ color: "black", width: "95%", textAlign: "center" }}>
        RC Details
      </h2>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        {/* <div className="row text-center mt-5">
          <button className="btn btn-primary" onClick={downloadPDF}>
            Download PDF
          </button>
        </div> */}

        {/*<Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-extract">
            Extract
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleExtract("Word")}>
              Extract to Word
            </Dropdown.Item>
            <Dropdown.Item>
              <button className="btn" onClick={downloadPDF}>
                Extract PDF
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>*/}
      </div>
      <div style={{ width: "30%", margin: "0 auto" }}>
        <table
          className="table table-striped"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th
                style={{
                  color: "black",
                  textAlign: "left",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Attribute
              </th>
              <th
                style={{
                  color: "black",
                  textAlign: "right",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicleDetails && Object.entries(rcDetailData).map(([key, value]) => (
              <tr key={key} style={{ borderBottom: "1px solid #ddd" }}>
                <td
                  style={{ color: "black", textAlign: "left", padding: "10px" }}
                >
                  {key}
                </td>
                <td
                  style={{ color: "blue", textAlign: "right", padding: "10px" }}
                >
                  {value !== undefined && value !== null && value !== "" && value !== 'undefined' ? value : "NA"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RCData;
