import Link from "next/link";
import Form from "./Form";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const ErrorPageContent = () => {
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
    <div className="" ref={pdfRef}>
      {/* Header Content */}
      <div>
        <h3>MUTNEJA Tech</h3>
        <span>
          {" "}
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
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
        </span>
        <p>Insurance Surveyors and Loss Assessors Pvt. Ltd.</p>
        <p>
          Mobile : 9910995122(DLH
          NCR),9468881222(GURUGRAM),9414088243,6378710966,7597233966(RAJASTHAN)
        </p>
        <p>Email: Info@mutnejatech.co.in</p>
        <p>Lic No. IRDA/CORP/SLA-200018 DOE 07.02.2025</p>
      </div>
      <hr style={{ border: "2px solid black" }} />
      {/* Header Content */}

      <div>
        <h4 className="text-center text-decoration-underline">Tax Invoice</h4>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8">
              <h5>To,</h5>
              <span>The Oriental Insurance Co. Ltd.</span>
              <br />
              <span>242596- Udaipur</span>
              <br />
              <span>
                Shree Krishna Plaza, 100 Ft. Road, Shobhagpura, Udaipur
              </span>
              <br />
              <span style={{ marginRight: "100px" }}>
                GSTIN: 08AAACT0627R3ZX
              </span>
              <span>State Code : Rajasthan (00)</span>
            </div>
            <div className="col-lg-4">
              <span>Bill No. : MTL-02-24-01425</span>
              <br />
              <span>Date : 12/02/2024</span>
              <br />
              <span>Code : GH000057355</span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-7">
              <span>Report Ref No : MSL/GNR/2024/01/10263</span>
              <br />
              <span>Vehicle No : PB22W0041</span>
              <br />
              <span>Insured Name : Dushyant Kumar S/o Bhani Ram</span>
              <br />
              <span>Date Of Accident : 20-Jan-24</span>
              <br />
              <span>Policy/cover note no : 242596/31/2024/TMP/85856</span>
              <br />
              <span>Claim No : -</span>
            </div>
            <div className="col-lg-5">
              <span className="mt-5">Assessed : 987878</span>
              <br />
              <span>Estimate : 24256</span>
              <br />
              <span>IDV : 987987</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table style={{ width: "100%" }}>
          <tr style={{ border: "1px solid black" }}>
            <th
              style={{
                border: "1px solid black",
                textAlign: "center",
                // paddingRight: "10px",
                // paddingLeft: "20px",
              }}
            >
              S No.
            </th>
            <th
              style={{
                // border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              Particulars
            </th>
            <th
              style={{
                textAlign: "center",
                // border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              HSN/SAC
            </th>
            <th
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              Amount
            </th>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              1
            </td>
            <td>
              <div>
                <h4 className="text-decoration-underline mt-2">Final</h4>
                <span>Professional Fee : Estimate Amount F 144,473.00</span>
                <br />
                <span>
                  Photos/CD Expenses : <br /> 20 Photographs , Charged for 20 @
                  Rs. 10.00
                </span>
                <br />
                <span>Conveyance Expenses : </span>
              </div>
            </td>
            <td
              style={
                {
                  // border: "1px solid black",
                  // paddingRight: "30px",
                  // paddingLeft: "20px",
                }
              }
            >
              <span>
                <h5 className="mt-3">47773</h5>
              </span>
              <br />
              <br />
              <span>473.00</span>
              <br />
              <span>300.00</span>
              <br />
              <span>500.00</span>
            </td>
            <td
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              876.00
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            ></td>
            <td
              colSpan={2}
              style={{
                border: "1px solid black",
                textAlign: "end",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              {" "}
              <span>Sub Total : F</span>
              <br />
              <span>C GST @ 9.00 %</span>
              <br />
              <span>S GST @ 9.00 % </span>
            </td>
            <td
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              <span>3500.00</span> <br /> <hr />
              <span>315.00</span>
              <br />
              <span>315.00</span>
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            ></td>
            <td
              colSpan={2}
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              <div className="d-flex justify-content-between">
                <span>ADVANCE RECEIPT</span>
                <span>Grand Total : </span>
              </div>
            </td>
            <td
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              <span>4130.00</span>
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            ></td>
            <td
              colSpan={2}
              style={{
                border: "1px solid black",
                textAlign: "end",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              <span>Round off : F</span>
            </td>
            <td
              style={{
                border: "1px solid black",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              <span>4130.00</span>
            </td>
          </tr>
          <tr>
            <td
              colSpan={4}
              style={{
                border: "1px solid black",
                textAlign: "center",
                // paddingRight: "30px",
                // paddingLeft: "20px",
              }}
            >
              <span>In words : Rs. Four Thousand One Hundred Thirty Only</span>
            </td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td></td>
            <td>
              <span>GSTIN: 08AAJCM8228Q1ZM State : (08)</span>
              <br />
              <span>PAN. : AAJCM8228Q</span>
              <br />
              <span>Bank Name : INDIAN BANK</span>
              <br />
              <span>A/c No. : CA 6360774855</span>
              <br />
              <span>MICR No : 335019002</span>
              <br />
              <span>IFS Code : IDIB000G067</span>
            </td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td></td>
            <td colSpan={2} style={{ textAlign: "end" }}>
              <span style={{ textAlign: "center" }}>For Mutneja Tech </span>{" "}
              <br /> Insurance Surveyors & Loss assessors Pvt. Ltd.
            </td>
          </tr>
        </table>
      </div>

      {/* footer content */}
      <hr style={{ border: "2px solid black" }} />
      <div>
        <h5 className="text-center">
          H.O. Address : 58-Gandhi Nagar,Near Bal Niketan School ,Sri
          Ganganagar(Raj.)-335001
        </h5>
        <h5 className="text-center">
          Ofce: B-43,NFL Society,Sector-PI,Gr Noida-201310./E-201,MAPSKO
          Mountville,Sector-79,Gurugram(Hr)
        </h5>
      </div>
      {/* footer content */}
    </div>
  );
};

export default ErrorPageContent;
