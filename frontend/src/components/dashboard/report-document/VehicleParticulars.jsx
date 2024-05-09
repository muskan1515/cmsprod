import React from "react";
import { formatDate,changeFormat } from "./functions/VehicleParticularsFunctions";

const VehicleParticulars = ({ allInfo }) => {
  return (
    <div>
      <div className="d-flex gap-5">
        <h6 className="text-dark" style={{ color: "black" }}>
          VEHICLE PARTICULARS :
        </h6>
        <span style={{ marginLeft: "110px" }}>
          {allInfo?.otherInfo[0]?.Remark}
        </span>
      </div>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(a) Registered Number</span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span className="fw-bold text-dark">
              {" "}
              {allInfo?.otherInfo[0]?.RegisteredNumber}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="">
            <span> (b) Registered Owner</span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span> {allInfo?.otherInfo[0]?.RegisteredOwner}</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(c) Date of Registration</span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span>
              {" "}
              {formatDate(allInfo?.otherInfo[0]?.DateOfRegistration)}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(d) Chassis Number </span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span className="fw-bold text-dark">
              {" "}
              {allInfo?.otherInfo[0]?.ChassisNumber}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(e) Engine Number </span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span className="fw-bold text-dark">
              {" "}
              {allInfo?.otherInfo[0]?.EngineNumber}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(f) Make / Variant/ Model /Color </span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start ">
            <span className="">
              {" "}
              {allInfo?.otherInfo[0]?.MakerDesc},
              {allInfo?.otherInfo[0]?.MakerModel}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(g) Type of Body and Class of vehicle</span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span>
              {" "}
              {allInfo?.otherInfo[0]?.VehicleBancsBodyType} (S) -{" "}
              {allInfo?.otherInfo[0]?.ClassOfVehicle}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(h) Pre Accident Condition</span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span> {allInfo?.otherInfo[0]?.PreAccidentCondition}</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="">
            <span> (k) Seating Capacity</span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span> {allInfo?.otherInfo[0]?.SeatingCapacity} Nos.</span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(l) Cubic Capacity </span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span>{allInfo?.otherInfo[0]?.CubicCapacity} CC</span>
            <span style={{ marginLeft: "60px" }}>
              Fuel Used : {allInfo?.otherInfo[0]?.FuelType}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }} className="text-start">
            <span>(m) Tax particulars</span>
          </td>
          <td style={{ width: "5%" }} className="text-start">
            <span>:</span>
          </td>
          <td style={{ width: "45%" }} className="text-start">
            <span> {formatDate(allInfo?.otherInfo[0]?.TaxParticulars)}</span>
          </td>
        </tr>
        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span>(n) Fitness Certificate Number </span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span className="fw-bold text-dark">
                {allInfo?.otherInfo[0]?.FitnessCertificate}{" "}
              </span>
            </td>
          </tr>
        ) : (
          ""
        )}
        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span style={{ marginLeft: "20px" }}>Valid Upto </span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span>
                {" "}
                {allInfo?.otherInfo[0]?.FitnessTo
                  ? changeFormat(allInfo?.otherInfo[0]?.FitnessTo)
                  : "-"}
              </span>
            </td>
          </tr>
        ) : (
          ""
        )}

        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span>(o) Permit Number </span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span> {allInfo?.otherInfo[0]?.PermitNo}</span>
            </td>
          </tr>
        ) : (
          ""
        )}

        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span style={{ marginLeft: "20px" }}>Valid Upto </span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span>
                {" "}
                {allInfo?.otherInfo[0]?.PermitTo
                  ? changeFormat(allInfo?.otherInfo[0]?.PermitTo)
                  : "-"}
              </span>

              <span>{"        "}</span>

              <span>&nbsp;&nbsp;&nbsp;w.e.f&nbsp;&nbsp;&nbsp;</span>

              <span>{"         "}</span>

              <span>
                {" "}
                {allInfo?.otherInfo[0]?.PermitFrom
                  ? changeFormat(allInfo?.otherInfo[0]?.PermitFrom)
                  : "-"}
              </span>
            </td>
          </tr>
        ) : (
          ""
        )}

        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span>(p) Type Of Permit </span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span className="fw-bold text-dark">
                {allInfo?.otherInfo[0]?.TypeOfPermit}{" "}
              </span>
            </td>
          </tr>
        ) : (
          ""
        )}

        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span>(q) Authorization / validity </span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span>{allInfo?.otherInfo[0]?.Authorization}</span>
            </td>
          </tr>
        ) : (
          ""
        )}
        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span> (r) Route / Areas of Operation</span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span> {allInfo?.otherInfo[0]?.AreasOfOperation}</span>
            </td>
          </tr>
        ) : (
          ""
        )}
        {allInfo?.otherInfo[0]?.commercial_status ? (
          <tr>
            <td style={{ width: "36%" }} className="text-start">
              <span> (t) Commercial Remark</span>
            </td>
            <td style={{ width: "7%" }} className="text-start">
              <span>:</span>
            </td>
            <td style={{ width: "55%" }} className="text-start">
              <span> {allInfo?.otherInfo[0]?.Remark}</span>
            </td>
          </tr>
        ) : (
          ""
        )}
      </table>
    </div>
  );
};

export default VehicleParticulars;
