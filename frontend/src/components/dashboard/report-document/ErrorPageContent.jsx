import Link from "next/link";
import Form from "./Form";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";


const ErrorPageContent = ({ allInfo }) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  const calculateGlassDept = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (String(part.NewPartsTypeOfMaterial === "Glass")) {
      return Depreciation;
    }
    return 0;
  };

  const calculateMetalDept = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (String(part.NewPartsTypeOfMaterial === "Metal")) {
      return Depreciation;
    }
    return 0;
  };

  const calculateNonMetalDept = (part) => {
    const assessed = Number(part.NewPartsAssessed) * Number(part.QA);
    const Depreciation =
      (assessed * Number(part.NewPartsDepreciationPct)) / 100;
    if (
      String(
        part.NewPartsTypeOfMaterial !== "Glass" ||
          String(part.NewPartsTypeOfMaterial === "Metal")
      )
    ) {
      return Depreciation;
    }
    return 0;
  };

  return (
    <div className="">
      {/* Header Content */}
      <div>
        <h3>MUTNEJA Tech</h3>{" "}
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
                <Dropdown.Item onClick={() => handleExtract("PDF")}>
                  Extract to PDF
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
        <p>Email: {allInfo?.otherInfo[0]?.BrokerMailAddress}</p>
        <p>Lic No. IRDA/CORP/SLA-200018 DOE 07.02.2025</p>
      </div>
      <hr style={{ border: "2px solid black" }} />
      {/* Header Content */}

      <div className="d-flex justify-content-between">
        <div>
          <label htmlFor="">Ref No. :</label>
          <span> {allInfo?.otherInfo[0]?.ReferenceNo}</span>
        </div>
        <div>
          <label htmlFor="">Date : </label>
          <span> {formatDate(allInfo?.otherInfo[0]?.AddedDateTime)}</span>
        </div>
      </div>
      <div className="text-center mt-5">
        <h4>
          {allInfo?.otherInfo[0].SurveyType} FINAL{" "}
          {allInfo?.otherInfo[0]?.InspectionType} REPORT (
          {allInfo?.otherInfo[0]?.SettlementType})- (
          {allInfo?.otherInfo[0]?.PolicyType})
        </h4>
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
            <span> {allInfo?.otherInfo[0]?.PolicyNumber}</span>
          </div>
          <div>
            <label htmlFor="">IDV : -</label>
            <span> F {allInfo?.otherInfo[0]?.IDV}</span>
          </div>
        </div>
        <div className="d-flex gap-5">
          <div>
            <label htmlFor="">(b) Period of Insurance</label>
            <span>
              {" "}
              {formatDate(allInfo?.otherInfo[0]?.PolicyPeriodStart)} to{" "}
              {formatDate(allInfo?.otherInfo[0]?.PolicyPeriodEnd)}
            </span>
          </div>
          <div>
            <label htmlFor="">Claim No. : -</label>
            <span> {allInfo?.otherInfo[0].ClaimNumber} </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Endorsement : </label>
            <span> 33030331230100004487</span>
          </div>
          <div>
            <label htmlFor="">Token No. : -</label>
            <span> {allInfo?.otherInfo[0].Token}</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Insurers : </label>
            <span> {allInfo?.otherInfo[0]?.InsuranceCompanyNameAddress}</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(e) Insured : </label>
            <span>
              {" "}
              {allInfo?.otherInfo[0]?.InsuredName}{" "}
              {allInfo?.otherInfo[0]?.InsuredMobileNo1}{" "}
              {allInfo?.otherInfo[0]?.InsuredAddress}
            </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(f) H. P. A. : </label>
            <span> {allInfo?.otherInfo[0]?.HPA} - SGNR</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(g) Appointed By : </label>
            <span> {allInfo?.otherInfo[0]?.VehicleInsuranceCompany}</span>
          </div>
        </div>
      </div>
      <hr style={{ border: "2px solid black" }} />
      <div>
        <div className="d-flex gap-5">
          <h5>VEHICLE PARTICULARS :</h5>
          <span>{allInfo?.otherInfo[0]?.Remark}</span>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(a) Registered Number :</label>
            <span> {allInfo?.otherInfo[0]?.RegisteredNumber}</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(b) Registered Owner :</label>
            <span> {allInfo?.otherInfo[0]?.RegisteredOwner}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Owner Serial No. / Transfer Date :</label>
            <span> {formatDate(allInfo?.otherInfo[0]?.TransferDate)}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Date of Registration :</label>
            <span>
              {" "}
              {formatDate(allInfo?.otherInfo[0]?.DateOfRegistration)}
            </span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Chassis Number :</label>
            <span> {allInfo?.otherInfo[0]?.ChassisNumber}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(f) Make / Variant/ Model /Color :</label>
            <span> {allInfo?.otherInfo[0]?.MakeVariantModelColor}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(g) Type of Body and Class of vehicle :</label>
            <span>
              {" "}
              {allInfo?.otherInfo[0]?.TypeOfBody} (S) -{" "}
              {allInfo?.otherInfo[0]?.ClassOfVehicle}
            </span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(h) Pre Accident Condition :</label>
            <span> {allInfo?.otherInfo[0]?.PreAccidentCondition}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(k) Seating Capacity :</label>
            <span> {allInfo?.otherInfo[0]?.SeatingCapacity} Nos.</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(l) Cubic Capacity :</label>
            <span>{allInfo?.otherInfo[0]?.CubicCapacity} CC</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(m) Tax particulars :</label>
            <span> {allInfo?.otherInfo[0]?.TaxParticulars}</span>
          </div>
        </div>
      </div>
      <hr style={{ border: "2px solid black" }} />
      <div>
        <div className="d-flex gap-5">
          <h5>DRIVER PARTICULARS :</h5>
          <span>{allInfo?.otherInfo[0]?.Remark}</span>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(a) Name of Driver :</label>
            <span> {allInfo?.otherInfo[0]?.DriverName}</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Age :</label>
            <span>
              {" "}
              {allInfo?.otherInfo[0]?.Age} Years ({" "}
              {allInfo?.otherInfo[0]?.DateOfBirth
                ? formatDate(allInfo?.otherInfo[0]?.DateOfBirth)
                : ""}
              )
            </span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(b) Motor Driver License Number :</label>
            <span>{allInfo?.otherInfo[0].LicenseNumber} </span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Date of Issue :</label>
            <span> {formatDate(allInfo?.otherInfo[0]?.DateOfIssue)}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">Valid from :</label>
            <span> {formatDate(allInfo?.otherInfo[0]?.ValidFrom)}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Issuing Authority :</label>
            <span> {allInfo?.otherInfo[0]?.IssuingAuthority}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Type of License :</label>
            <span>{allInfo?.otherInfo[0]?.LicenseType}</span>
          </div>
        </div>

        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(e) Badge Number :</label>
            <span> {allInfo?.otherInfo[0]?.BadgeNumber}</span>
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
            <span>
              {" "}
              {formatDateTime(allInfo?.otherInfo[0]?.TimeOfAccident)}
            </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(b) Place of Accident :</label>
            <span> {allInfo?.otherInfo[0]?.PlaceOfLoss}</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(c) Place of Survey :</label>
            <span>{allInfo?.otherInfo[0]?.PlaceOfSurvey}</span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(d) Date of Allotment of Survey :</label>
            <span>
              {" "}
              {formatDate(allInfo?.otherInfo[0]?.SurveyAllotmentDate)}
            </span>
          </div>
        </div>
        <div className=" text-start d-flex gap-5">
          <div>
            <label htmlFor="">(e) Date & Time of Survey :</label>
            <span>
              {" "}
              {formatDate(allInfo?.otherInfo[0]?.SurveyConductedDate)}
            </span>
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
          the day and time of accident{" "}
          <b>{allInfo?.otherInfo[0]?.InsuredName}</b> was driving the subject
          vehicle. &quot; {allInfo?.otherInfo[0]?.CauseOfAccident} , causing
          damages.
        </span>
        <hr style={{ border: "2px solid black" }} />
        <div className=" text-start d-flex gap-5">
          <div>
            <h5 htmlFor="">POLICE ACTION :</h5>
            <span> {allInfo?.otherInfo[0]?.PoliceAction}</span>
          </div>
        </div>
        <hr style={{ border: "2px solid black" }} />
        <div className=" text-start d-flex gap-5">
          <div>
            <h5 htmlFor="">DETAILS OF LOAD / PASSENGER :</h5>
            <span> {allInfo?.otherInfo[0]?.DetailsOfLoads}</span>
          </div>
        </div>
        <hr style={{ border: "2px solid black" }} />
        <div className=" text-start d-flex gap-5">
          <div>
            <h5 htmlFor="">THIRD PARTY LOSS/ INJURIES :</h5>
            <span> {allInfo?.otherInfo[0]?.ThirdPartyLoss}</span>
          </div>
        </div>
        <hr style={{ border: "2px solid black" }} />
      </div>
      <div>
        <h5>PARTICULARS OF LOSS/DAMAGES :</h5>
        <span className="">
          In accordance with the instructions received from
          <b>
            {allInfo?.otherInfo[0]?.InsuranceCompanyNameAddress}{" "}
            {allInfo?.otherInfo[0]?.HPA}- SGNR
          </b>{" "}
          dated <b>{formatDate(allInfo?.otherInfo[0]?.AddedDateTime)}</b>I
          visited <b>{allInfo?.otherInfo[0]?.InsuredName}</b> and inspected the
          subject vehicle, reported to have met with an accident on{" "}
          <b>{formatDate(allInfo?.otherInfo[0]?.AddedDateTime)}</b>
          Between {allInfo?.otherInfo[0]?.PlaceOfLoss} and snapped the vehicle
          from different angles before and after dismantling. <br />
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
              Metal (40)
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Non Metal
            </th>
          </tr>
          <tr>
            <th colSpan={2}>Parts with 28.00 % GST</th>
            <th style={{ border: "1px solid black", padding: "10px" }}></th>
            <th style={{ border: "1px solid black", padding: "10px" }}></th>
            <th style={{ border: "1px solid black", padding: "10px" }}></th>
            <th style={{ border: "1px solid black", padding: "10px" }}></th>
            <th style={{ border: "1px solid black", padding: "10px" }}></th>
            <th style={{ border: "1px solid black", padding: "10px" }}></th>
            <th style={{ border: "1px solid black", padding: "10px" }}></th>
          </tr>

          {allInfo?.newPartsDetails.map((part, index) => {
            return part.NewPartsIsActive === 1 ? (
              <tr>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {part.NewPartsReportID}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {" "}
                  {part.NewPartsItemName}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}></td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {part.NewPartsBillSr}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {part.NewPartsRemark}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {part.NewPartsEstimate}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {calculateGlassDept(part)}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {calculateMetalDept(part)}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {calculateNonMetalDept(part)}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {" "}
                  {part.NewPartsGSTPct}.00
                </td>
              </tr>
            ) : null;
          })}
          {/*<tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              Carriar assy-front end modul
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>671-1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Damaged
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              28.00
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              Carriar assy-front end modul
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>671-1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Damaged
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              28.00
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              Carriar assy-front end modul
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>671-1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Damaged
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              28.00
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              Carriar assy-front end modul
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>671-1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Damaged
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              6419.54
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {" "}
              28.00
            </td>
          </tr>
          <tr>
            <td
              rowSpan={3}
              style={{ border: "1px solid black", padding: "5px" }}
            ></td>
            <td
              colSpan={5}
              rowSpan={3}
              className="text-end"
              style={{ border: "1px solid black", padding: "5px" }}
            >
              Total :<br />
              GST @ 28.00 % :<br />
              Sub Total :
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
        </tr>*/}
          <tr>
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
          </tr>
          <tr>
            <td
              colSpan={5}
              rowSpan={6}
              style={{ border: "1px solid black", padding: "5px" }}
              className="text-end"
            >
              Total : <br />
              Less: Depreciation : <br />
              Total : <br />
              Add : Applicable GST : <br />
              Net Total F :
              <br />
              Grand Total F : <br />
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td
              rowSpan={5}
              style={{ border: "1px solid black", padding: "5px" }}
            ></td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>98977</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>000</td>
            <td
              colSpan={3}
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              000
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div>
        <h4>LABOUR & REPAIRS :</h4>
        <table border={1}>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>S.No</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>SAC</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Bill S.No.
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Labour Description
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Estimated
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Assessed
            </th>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              radiator khulayi fitting
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>700</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>300</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Ac Condenser Opening Fitting & Ac Charge (Condenser 2000.00 300.00
              Opening Fitting)
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>700</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>300</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Tie- Member Opening Fitting
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>700</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>300</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Bumper Opening Fitting
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>700</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>300</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}></td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Head Light Opening Fitting (Not Allowed)
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>700</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>300</td>
          </tr>
          <tr>
            <td
              rowSpan={3}
              style={{ border: "1px solid black", padding: "5px" }}
            ></td>
            <td
              colSpan={3}
              rowSpan={3}
              style={{
                border: "1px solid black",
                padding: "10px",
                textAlign: "end",
              }}
            >
              Sub Total Labour Charges : F <br />
              Add : GST on F 0.00 @ 18.00% : <br />
              Total Labour Charges : F
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>897</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>8768</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>897</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>8768</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>897</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>8768</td>
          </tr>
        </table>
      </div>
      <div>
        <h4>SUMMARY OF ASSESSMENT</h4>
        <table border={1}>
          <tr>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              PARTICULARS
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              ORIGINAL ESTIMATE
            </th>
            <th
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                paddingLeft: "20px",
              }}
            >
              ASSESSED FOR
            </th>
          </tr>
          <tr>
            <td style={{ paddingRight: "30px", paddingLeft: "20px" }}>
              Total Labour Charges
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>87678</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              876868
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: "30px", paddingLeft: "20px" }}>
              Total Cost of Parts
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>87678</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              876868
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              rowSpan={6}
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "end",
              }}
            >
              Total : <br />
              Less : Excess <br />
              Total : <br />
              Less : Salvage
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>767t</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>35454</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>35454</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>35454</td>
          </tr>
          <tr>
            <td>35454</td>
          </tr>
        </table>
      </div>
      <div>
        <h4>GST Summary Tax Wise</h4>
        <table>
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
          <tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              1
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              28.00
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              98867
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              765
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              876
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              0000
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              87689
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
                textAlign: "center",
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
              98867
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              765
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              876
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              0000
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              87689
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
              87686
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
      <div className="mt-2">
        <table>
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
          <tr>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              1
            </td>
            <td
              colSpan={2}
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              28.00
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              98867
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              765
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              876
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              0000
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              87689
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
                textAlign: "center",
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
              98867
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              765
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              876
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              0000
            </td>
            <td
              style={{
                border: "1px solid black",
                paddingRight: "5px",
              }}
            >
              87689
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
              87686
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
            F 5,658.00 <br /> (RUPEES FIVE THOUSAND SIX HUNDRED FIFTY-EIGHT
            ONLY){" "}
          </b>{" "}
          The assessment of loss, as detailed above, is subject to the terms and
          conditions of the policy of insurance.
        </span>
      </div>
      <div>
        <h4>Notes :</h4>
        <ul>
          <li>
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
          </li>
        </ul>

        <span>
          Thanking you and assuring you of my best services at all times,
        </span>
        <br />
        <br />
        <span>
          Enclosures : Bank Pass-Book, Repair Invoice, Estimate of repairs,
          Claim form, Satisfaction Certificate, Motor Loss Voucher, Consent
          Letter, DL, RC, Policy, Photographs, [12 Nos.],Survey fee bill.
        </span>
      </div>
      <hr style={{ border: "2px solid black" }} />
    </div>
  );
};

export default ErrorPageContent;
