// import axios from "axios";
// import { useRef, useState } from "react";
// import { useReducer } from "react";
import { FaEye } from "react-icons/fa";
// import { encryptionData } from "../../../utils/dataEncryption";
import { useRouter } from "next/router";
import Exemple from "./Exemple_01";
import Image from "next/image";
// import toast from "react-hot-toast";

const Video = (edit) => {
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
                <h4 className="">Videos</h4>
                <div className="col-lg-1 m-1">
                  {/*<button
                    className="btn-thm mb-1"
                    style={{ marginTop: "-10px" }}
                    onClick={editHandler}
                  >
                    {edit ? "Save" : <span className="flaticon-edit"></span>}
  </button>*/}
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
                  <div className="col-lg-4 text-start mb-2">
                    <table className="m-1" style={{ border: "1px solid grey" }}>
                      <tr>
                        <th
                          style={{ border: "1px solid grey", padding: "15px" }}
                        >
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-lg-12 text-color text-start"
                              style={{
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Created By
                            </label>
                          </div>
                        </th>
                        <th
                          style={{ border: "1px solid grey", padding: "15px" }}
                        >
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-lg-12 text-color text-start"
                              style={{
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Video Date
                            </label>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid grey", padding: "5px" }}
                        >
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-lg-12 text-color text-start"
                              style={{
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Name
                            </label>
                          </div>
                        </td>
                        <td
                          style={{ border: "1px solid grey", padding: "5px" }}
                        >
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-lg-12 text-color text-start"
                              style={{
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Name
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid grey", padding: "5px" }}
                        >
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-lg-12 text-color text-start"
                              style={{
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Name
                            </label>
                          </div>
                        </td>
                        <td
                          style={{ border: "1px solid grey", padding: "5px" }}
                        >
                          <div className="row">
                            <label
                              htmlFor=""
                              className="col-lg-12 text-color text-start"
                              style={{
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Name
                            </label>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-lg-7">
                    <div className="row">
                      <div className="container" style={{}}>
                        {" "}
                        <div className="property_video">
                          <div className="thumb">
                            <Image
                              width={492}
                              height={190}
                              className="pro_img  w100 w-100 cover"
                              src="/assets/images/background/7.jpg"
                              alt="7.jpg"
                            />
                            <div className="overlay_icon">
                              <div
                                onClick={() => setOpen(true)}
                                role="button"
                                className="video_popup_btn red popup-youtube"
                              >
                                <span className="flaticon-play"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <button className="btn btn-thm m-1">Capture</button>
                        <button className="btn btn-thm m-1">
                          Enable Screenshot
                        </button>
                        <button className="btn btn-thm">
                          Generate Pdf
                        </button>
                      </div>
                    </div>
                  </div>
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

export default Video;
