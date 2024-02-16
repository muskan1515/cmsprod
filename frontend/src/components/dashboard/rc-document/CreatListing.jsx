import React from "react";
import { Dropdown } from "react-bootstrap";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";
import {
  //   PDFDownloadLink,
  //   BlobProvider,
  //   PDFViewer,
  Page,
  Text,
  View,
  Document as PDFDocument,
} from "@react-pdf/renderer";

const RCData = () => {
  const rcDetails = {
    "Chassis No.": "MA3FHEB1S00C55208",
    "Engine No.": "D13A2989355",
    "Maker Name": "MARUTI SUZUKI INDIA LTD",
    "Model Name": "MARUTI SWIFT VDI",
    "Registration Date": "04-Apr-17",
    "Tax Valid UpTo": "ΝΑ",
    "Vehicle Class": "LMV",
    "Vehicle Description": "Motor Car ( LMV )",
    "Fuel Type": "DIESEL",
    "Emission Norm": "BHARAT STAGE IV",
    Color: "WHITE",
    "Seat Capacity": "5",
    "Standing Capacity": "0",
    Financier: "INDIAN BANK",
    "Insurance Company": "The New India Assurance Company Limited",
    "Insurance Policy No.": "9.8E+19",
    "Insurance Valid UpTo": "30-Mar-24",
    "Fitness Valid UpTo": "03-Apr-32",
    "PUCC No.": "HR05504260000707",
    "PUCC Valid Upto": "26-Dec-23",
    "Registering Authority": "SRI GANGANAGAR DTO, Rajasthan",
  };

  const handleExtract = async (format) => {
    if (format === "Word") {
      // Generate Word document
      const doc = new Document();
      Object.entries(rcDetails).forEach(([key, value]) => {
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
              <Text style={{ fontSize: 16, marginBottom: 10 }}>RC Details</Text>
              {Object.entries(rcDetails).map(([key, value]) => (
                <View
                  key={key}
                  style={{ flexDirection: "row", marginBottom: 5 }}
                >
                  <Text style={{ flex: 1, fontWeight: "bold" }}>{key}:</Text>
                  <Text style={{ flex: 1 }}>{value}</Text>
                </View>
              ))}
            </View>
          </Page>
        </PDFDocument>
      );

      // Convert PDF to Blob and download
      const blob = await new Promise((resolve) => {
        BlobProvider(pdfDoc, resolve);
      });
      saveAs(blob, "RC_Details.pdf");
    }
  };

  return (
    <div style={{ paddingTop: "10px", textAlign: "center" }}>
      <h2 style={{ color: "black", width: "95%", textAlign: "center" }}>
        RC Details
      </h2>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-extract">
            Extract
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleExtract("Word")}>
              Extract to Word
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleExtract("PDF")}>
              Extract to PDF
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
            {Object.entries(rcDetails).map(([key, value]) => (
              <tr key={key} style={{ borderBottom: "1px solid #ddd" }}>
                <td
                  style={{ color: "black", textAlign: "left", padding: "10px" }}
                >
                  {key}
                </td>
                <td
                  style={{ color: "blue", textAlign: "right", padding: "10px" }}
                >
                  {value}
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
