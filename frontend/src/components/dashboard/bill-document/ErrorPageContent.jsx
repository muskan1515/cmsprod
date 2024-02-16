import Link from "next/link";
import Form from "./Form";
import Image from "next/image";

const ErrorPageContent = () => {
  return (
    <div className="">
      {/* Header Content */}
      <div>
        <h3>MUTNEJA Tech</h3>
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
                // paddingRight: "10px",
                paddingLeft: "20px",
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
                  Photos/CD Expenses : 20 Photographs , Charged for 20 @ Rs.
                  10.00
                </span>
                <br />
                <span>Conveyance Expenses : Dushyant Kumar S/o Bhani Ram</span>
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
