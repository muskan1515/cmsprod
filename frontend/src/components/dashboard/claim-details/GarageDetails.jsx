// import axios from "axios";
// import { useRef, useState } from "react";
// import { useReducer } from "react";
import { FaEye } from "react-icons/fa";
// import { encryptionData } from "../../../utils/dataEncryption";
import { useRouter } from "next/router";
import Exemple from "./Exemple_01";
// import toast from "react-hot-toast";

const GarageDetails = (edit) => {
  const router = useRouter();

  const editHandler = () => {
    setEdit(true);
  };

  //   const togglePasswordVisibility = () => {
  //     setPasswordVisible(!passwordVisible);
  //   };

  //   const togglePasswordVisibility_01 = () => {
  //     setPasswordVisible_01(!passwordVisible_01);
  //   };

  return (
    <>
      <div className=" faq_according row">
        {/* <h4 className="mb-3">Vehicle Details</h4> */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                class="btn accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
                style={{ padding: "10px 10px 0 25px" }}
              >
                <h4 className="">Garage Details</h4>
                <div className="col-lg-1 m-1">
                  <button
                    className="btn-thm mb-1"
                    style={{ marginTop: "-10px" }}
                    onClick={editHandler}
                  >
                    {edit ? "Save" : <span className="flaticon-edit"></span>}
                  </button>
                </div>
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="row">
                  <div className="col-lg-12 text-start mb-2">
                    <label className="">
                      Megapower Car Services, Bypass Road Kunjwani, Jammu
                    </label>
                  </div>
                  <table className="m-1" style={{ border: "1px solid grey" }}>
                    <tr>
                      <td style={{ border: "1px solid grey", padding: "5px" }}>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginRight: "50px",
                          }}
                        >
                          SPOC Name
                        </label>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "bold",
                          }}
                        >
                          Estimate Amount
                        </label>
                      </td>
                      <td style={{ border: "1px solid grey" }}>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                            marginRight: "50px",
                          }}
                        >
                          SPOC Email
                        </label>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Estimate Amount
                        </label>
                      </td>
                      <td style={{ border: "1px solid grey" }}>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                            marginRight: "50px",
                          }}
                        >
                          SPOC Mobile
                        </label>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Estimate Amount
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid grey", padding: "5px" }}>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginRight: "50px",
                          }}
                        >
                          Action
                        </label>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "bold",
                          }}
                        >
                          Estimate Amount
                        </label>
                      </td>
                      <td style={{ border: "1px solid grey" }}>
                        <div className="col-lg-12">
                          <label
                            htmlFor=""
                            className="text-color text-start"
                            style={{
                              color: "#1560bd",
                              fontWeight: "",
                              marginRight: "50px",
                            }}
                          >
                            Date
                          </label>
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              color: "#1560bd",
                              fontWeight: "",
                            }}
                          >
                            Estimate Amount
                          </label>
                        </div>
                      </td>
                      <td style={{ border: "1px solid grey" }}>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                            marginRight: "50px",
                          }}
                        >
                          Towing Required
                        </label>
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Estimate Amount
                        </label>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default GarageDetails;
