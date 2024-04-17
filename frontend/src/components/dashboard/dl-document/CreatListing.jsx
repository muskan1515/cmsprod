import React, { useEffect, useState } from "react";
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
import axios from "axios";
import html2canvas from "html2canvas";
import Image from "next/image";
import jsPDF from "jspdf";
import { useRef } from "react";
import toast from "react-hot-toast";

const RCData = ({ DriverDetails }) => {
  

  const [sign,setSign] = useState("")
  const [photo, setPhoto] = useState("")

  const rcDetails = {
    "Driver Name": "N.A.",
    "Father Name": "N.A",
    Age: "N.A.",
    Address: "N.A.",
    Mobile: "N.A.",
    "Date Of Birth": "N.A.",
    "Blood Group": "N.A.",
    Gender: "N.A.",
    "Issuing Authority": "N.A.",
    "License Number": "N.A.",
    "License Type": "N.A.",
    "Badge Number":"N.A.",
    "Rto Name":"N.A.",
    "Cov":"N.A.",
    "Issued Date": "N.A.",
    "Vaild Upto":"N.A."
  };

  const [rcDetailData,setRcDetailData]=useState({})

  useEffect(() => {
    const addDefaultValue = (value) => (value !== undefined ? value : "N.A.");

    setPhoto(`data:image/png;base64,${DriverDetails?.Photo}`);
    setSign(`data:image/png;base64,${DriverDetails?.Pht}`);
const rcDetailsUpdated = {
  "Driver Name": addDefaultValue(DriverDetails?.DriverName),
  "Father Name": addDefaultValue(DriverDetails?.FatherName),
  "Address": addDefaultValue(DriverDetails?.Address),
  "Mobile": addDefaultValue(DriverDetails?.Mobile),
  "Date Of Birth": addDefaultValue(DriverDetails?.DateOfBirth),
  "Blood Group": addDefaultValue(DriverDetails?.BloodGroup),
  "Gender": addDefaultValue(DriverDetails?.Gender),
  "Issuing Authority": addDefaultValue(DriverDetails?.RtoName),
  "License Number": addDefaultValue(DriverDetails?.LicenseNumber),
  "License Type": addDefaultValue(DriverDetails?.LicenseType),
  "Badge Number": addDefaultValue(DriverDetails?.BadgeNumber),
  "Issued Date": addDefaultValue(DriverDetails?.DateOfIssue),
  "Vaild Upto": addDefaultValue(DriverDetails?.ValidUpto)
    };

    setRcDetailData(rcDetailsUpdated);
  
  },[DriverDetails]);
  const handleExtract=()=>{
    toast.loading("Downloading the word document")
    const content = document.getElementById('dl-content').innerHTML;
    const blob = new Blob(['<!DOCTYPE html><html><head><title>Document</title></head><body>' + content + '</body></html>'], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.doc';
    toast.dismiss();
    toast.success("Successfully downloaded!!");
    link.click();
  }

  
  

  const pdfRef = useRef();

  const downloadPDF = () => {

    toast.loading("Downloading the word document")
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
    toast.dismiss();
      toast.success("Successfully downloaded!!");
  };

  return (
    <div style={{ paddingTop: "10px", textAlign: "center" }} ref={pdfRef}>
      <h2 style={{ color: "black", width: "95%", textAlign: "center" }}>
        DL Details
      </h2>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        {/* <div className="row text-center mt-5">
          <button className="btn btn-primary" onClick={downloadPDF}>
            Download PDF
          </button>
        </div> */}

        <Dropdown>
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
       </Dropdown>
      </div>
      <div>
      
      </div>
      <div style={{ width: "30%", margin: "0 auto" }}>
        <table
        id="dl-content"
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
            { rcDetailData ? Object.entries(rcDetailData)?.map(([key, value]) => (
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
            )):""}
           
           <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"2%"}}>
           <Image style={{fontSize:"12px"}}  width={200} height={200} src={photo} alt={`${(DriverDetails?.DriverName).split(" ")[0]}_photo`}/>
           <Image style={{fontSize:"12px",marginTop:"20%",marginLeft:"6%"}} width={300} height={100} src={sign} alt={`${(DriverDetails?.DriverName).split(" ")[0]}_sign`}/>
           </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RCData;
