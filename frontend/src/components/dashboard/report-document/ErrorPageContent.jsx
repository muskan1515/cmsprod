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

      <div className="d-flex justify-content-between">
        <div>
          <label htmlFor="">Ref No. :</label>
          <span> MSL/HMH/2024/11/10043</span>
        </div>
        <div>
          <label htmlFor="">Date : </label>
          <span> 08-Jan-24</span>
        </div>
      </div>
      <div className="text-center mt-5">
        <h4>MOTOR FINAL SURVEY REPORT (NON CASH LESS)- (REGULAR)</h4>
      </div>
      <div>
        <p>
          This report is issued by me/us as a licensed Surveyor(s) without
          prejudice in respect of cause, nature and extent of loss/damages and
          subject to the terms and conditions of the insurance policy.
        </p>
      </div>
      <hr style={{ border: "2px solid black" }} />
      <div>
        <h5>INSURANCE PARTICULARS :</h5>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(a) Policy / Cover Note No. : </label>
            <span> 33030331230100004487</span>
          </div>
          <div>
            <label htmlFor="">IDV : -</label>
            <span> F 175,000.00 </span>
          </div>
        </div>
        <div className="d-flex gap-5">
          <div>
            <label htmlFor="">(b) Period of Insurance</label>
            <span> 27-Nov-23 to 26-Nov-24</span>
          </div>
          <div>
            <label htmlFor="">Claim No. : -</label>
            <span> F 175,000.00 </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Endorsement : </label>
            <span> 33030331230100004487</span>
          </div>
          <div>
            <label htmlFor="">Token No. : -</label>
            <span> F 175,000.00 </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Insurers : </label>
            <span>
              {" "}
              The New India Assurance Co. Ltd. 330303- Branch Hanumangarh Sri
              Ganganagar Road, Hanumangarh
            </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(e) Insured : </label>
            <span>
              {" "}
              Ramesh Kumar S/o Dulichand Godara (9950078225) VPO Dabli Kalan,
              Teh. Tibbi, Distt. Hanumangarh Rajasthan 335512
            </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(f) H. P. A. : </label>
            <span> 330300- SGNR</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(g) Appointed By : </label>
            <span> 330300- SGNR</span>
          </div>
        </div>
      </div>
      <hr style={{ border: "2px solid black" }} />
      <div>
        <div className="d-flex gap-5">
          <h5>VEHICLE PARTICULARS :</h5>
          <span>Verified From Original</span>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(a) Registered Number :</label>
            <span> RJ31CA6796</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(b) Registered Owner :</label>
            <span> Ramesh Kumar S/o Dulichand</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Owner Serial No. / Transfer Date :</label>
            <span> 01</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Date of Registration :</label>
            <span> 23-Dec-13</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Chassis Number :</label>
            <span> MALA851DLDM031812K</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(f) Make / Variant/ Model /Color :</label>
            <span> Hyunda/Grand I10 1.1 Gls Magna/2013 - White</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(g) Type of Body and Class of vehicle :</label>
            <span> Car (S) - LMVCAR</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(h) Pre Accident Condition :</label>
            <span> Average</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(k) Seating Capacity :</label>
            <span> 05 Nos.</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(l) Cubic Capacity :</label>
            <span> 1120 CC</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(m) Tax particulars :</label>
            <span> OTT</span>
          </div>
        </div>
      </div>
      <hr style={{ border: "2px solid black" }} />
      <div>
        <div className="d-flex gap-5">
          <h5>DRIVER PARTICULARS :</h5>
          <span>Verified From Original</span>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(a) Name of Driver :</label>
            <span> Ramesh Kumar S/o Duli Chand</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Age :</label>
            <span> 32 Years ( 01-Aug-91 )</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(b) Motor Driver License Number :</label>
            <span> RJ31 20100082557</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Date of Issue :</label>
            <span> 10-Dec-10</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Valid from :</label>
            <span> MALA851DLDM031812K</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Issuing Authority :</label>
            <span> DTO Hanumangarh</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Type of License :</label>
            <span> LMV, MCWG</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(e) Badge Number :</label>
            <span> Average</span>
          </div>
        </div>
      </div>
      <hr style={{ border: "2px solid black" }} />
      <div>
        <div className="d-flex gap-5">
          <h5>ACCIDENT & SURVEY PARTICULARS :</h5>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(a) Date & Time of Accident :</label>
            <span> 28-Nov-23 07:30 AM</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(b) Place of Accident :</label>
            <span> Between Rawatsar To Lakhuwali</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Place of Survey :</label>
            <span> Gurunanak Maruti Garage, Sri Ganganagar</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Date of Allotment of Survey :</label>
            <span> 28-Nov-23 </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(e) Date & Time of Survey :</label>
            <span> 28-Nov-23</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">
              (f) Date of Receipt of Spot Survey Report :
            </label>
            <span> Not Conducted, As stated by the insured.</span>
          </div>
        </div>
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

      <hr style={{ border: "2px solid black" }} />
      <div>
        <h5>CAUSE & NATURE OF ACCIDENT :</h5>
        <span>
          As filled in the claim form and discussion with the Insured that on
          the day and time of accident <b>Ramesh Kumar S/o Duli Chand</b> was
          driving the subject vehicle. &quot;Mein meri gaadi se rawatsar se
          hanumangarh ja rha tha tbhi lakhuwali ke pass saamne se aa rhe truck
          ne over-take kiya to mene meri gaadi apne bchav mein sadak se niche
          utaari to gaadi ka hissa niche lga, jisse gaadi ka tie-member or plate
          tut gyi, causing damages.
        </span>
        <hr style={{ border: "2px solid black" }} />
        <div className=" text-start d-flex gap-5">
          <div>
            <h5 htmlFor="">POLICE ACTION :</h5>
            <span> Not Reported, As stated by the insured.</span>
          </div>
        </div>
        <hr style={{ border: "2px solid black" }} />
        <div className=" text-start d-flex gap-5">
          <div>
            <h5 htmlFor="">DETAILS OF LOAD / PASSENGER :</h5>
            <span> No, As stated by the insured</span>
          </div>
        </div>
        <hr style={{ border: "2px solid black" }} />
        <div className=" text-start d-flex gap-5">
          <div>
            <h5 htmlFor="">THIRD PARTY LOSS/ INJURIES :</h5>
            <span> No, As Stated by the insured.</span>
          </div>
        </div>
        <hr style={{ border: "2px solid black" }} />
      </div>
      <div>
        <h5>PARTICULARS OF LOSS/DAMAGES :</h5>
        <span className="">
          In accordance with the instructions received from
          <b>The New India Assurance Co. Ltd. 330300- SGNR</b> dated{" "}
          <b>28-11-2023</b>I visited{" "}
          <b>Gurunanak Maruti Garage, Sri Ganganagar</b> and inspected the
          subject vehicle, reported to have met with an accident on{" "}
          <b>28-11-2023</b>
          Between Rawatsar To Lakhuwali and snapped the vehicle from different
          angles before and after dismantling. <br />
          <br />
          <span className="">
            Loss was discussed with the repairer and finally settled as under
            subject to policy terms, conditions and approval of the Insurers
            keeping in view the cause & nature of accident and my physical
            inspection before and after dismantling.{" "}
          </span>
        </span>
      </div>
      <br />
      <div className="">
        <span>
          <b>Observation : </b> Subject with good condition overall. No other
          damages except as mentioned above were observed over vehicle. Police
          report of accident not carried out by Insured.
        </span>
      </div>
      <br />
      <div>
        <h4>New Parts :</h4>
        <table border={1}>
          <tr>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "20px" }}
            >
              E. No.
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "20px" }}
            >
              Parts Description
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "20px" }}
            >
              HSN Code
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "20px" }}
            >
              Bill S. No
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "20px" }}
            >
              Remark
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "20px" }}
            >
              Estimated
            </th>
            <th
              colSpan={3}
              style={{
                border: "1px solid black",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Assessed
            </th>
            <th
              rowSpan={2}
              style={{ border: "1px solid black", padding: "20px" }}
            >
              GST
            </th>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "20px" }}>
              Glass/ 2nd Hand/ Repair
            </th>
            <th style={{ border: "1px solid black", padding: "20px" }}>
              Metal (40)
            </th>
            <th style={{ border: "1px solid black", padding: "20px" }}>
              Non Metal
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ErrorPageContent;
