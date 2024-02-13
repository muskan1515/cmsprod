import Link from "next/link";
import Form from "./Form";
import Image from "next/image";

const ErrorPageContent = () => {
  return (
    <div className="">
      <h3>MUTNEJA Tech</h3>
      <p>Insurance Surveyors and Loss Assessors Pvt. Ltd.</p>
      <p>
        Mobile : 9910995122(DLH
        NCR),9468881222(GURUGRAM),9414088243,6378710966,7597233966(RAJASTHAN)
      </p>
      <p>Email: Info@mutnejatech.co.in</p>
      <p>Lic No. IRDA/CORP/SLA-200018 DOE 07.02.2025</p>
      <hr style={{ border: "2px solid black" }} />
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
    </div>
  );
};

export default ErrorPageContent;
