import { FaEye } from "react-icons/fa";
import { useRouter } from "next/router";
import AccidentViewForm from "./AccidentViewForm";
import { useEffect, useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../../common/Loader";
import TimePicker from "../../common/TimePicker";

const AccidentEditableForm = ({
  claim,
  edit,
  onSaveHandler,
  disable,
  PlaceOfLoss,
  setPlaceOfLoss,
  PlaceOfSurvey,
  setPlaceOfSurvey,
  TimeOfAccident,
  setTimeOfAccident,
  DateOfAccident,
  setDateOfAccident,
  Pin,
  setPin
}) => {
  const router = useRouter();
  const [editCase_03, setEditCase_03] = useState(false);
  const [isUpdateVehicleLoading, setisUpdateVehicleLoading] = useState(false);

  const closeFunction = () => {
    setEditCase_03(false);
    setisUpdateVehicleLoading(false);
  };

  const formatDate = (val) => {
    const date = new Date(val);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  function localDate(dateString) {
    if (dateString && dateString !== "null") {
      return new Date(dateString).toLocaleDateString("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Kolkata",
      });
    } else {
      return "";
    }
  }

  const setDate = (newDate,settingFunc)=>{
    const dateObj = new Date(newDate);
    const yyyy = dateObj.getFullYear();
    const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
    const dd = String(dateObj.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    settingFunc(formattedDate);
    }

  return (
    <>
      <div className="faq_according row mt-2">
        {/* <h4 className="mb-3">Vehicle Details</h4> */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
                style={{ padding: "10px 10px 0 25px" }}
              >
                <h4 className="">Accident Details</h4>
                <div className="col-lg-1 m-1"></div>
              </button>
            </h2>
            <div
              id="collapseTen"
              class="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bgc-f6">
                <div className="row">
                  <div className="col-lg-2">
                    {editCase_03 ? (
                      <>
                        <button
                          className="btn-thm m-1"
                          style={{}}
                          disabled={disable}
                          onClick={() => {
                            setisUpdateVehicleLoading(true);
                            onSaveHandler(5, closeFunction, closeFunction);
                          }}
                        >
                          Save
                        </button>{" "}
                        <button
                          onClick={() => setEditCase_03(false)}
                          className="btn-thm flaticon-close"
                          style={{ fontSize: "14px" }}
                        ></button>
                      </>
                    ) : (
                      claim?.claimDetails?.PolicyNumber && (
                        <button
                          className="btn-thm"
                          style={{}}
                          onClick={() => setEditCase_03(true)}
                        >
                          <span
                            className="flaticon-edit"
                            style={{ fontSize: "14px" }}
                          ></span>
                        </button>
                      )
                    )}
                  </div>
                  <div className="col-lg-2 text-start">
                    {/* <button className="btn-thm" style={{}}>
                      Fetch Details
                    </button> */}
                  </div>
                </div>
                {isUpdateVehicleLoading ? (
                  <Loader />
                ) : editCase_03 ? (
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row mt-1">
                        <div className="col-lg-5 my_profile_setting_input form-group">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#1560bd",
                              fontWeight: "",
                              // marginTop: "-13px",
                            }}
                          >
                            Date Of Accident
                          </label>
                        </div>
                        <div className="col-lg-7">
                        <DatePicker
                          className="form-control"
                          id="propertyTitle"
                          dateFormat="dd/MM/yyyy"
                          selected={
                            DateOfAccident !== null && !isNaN(new Date(DateOfAccident))
                              ? new Date(DateOfAccident)
                              : ""
                          }
                          onChange={(date) => setDate(date,setDateOfAccident)}
                        />
                        </div>
                      </div>
                      
                    </div>

                    <div className="col-lg-6">
                      <div className="row mt-1">
                        <div className="col-lg-5 my_profile_setting_input form-group">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#1560bd",
                              fontWeight: "",
                              // marginTop: "-13px",
                            }}
                          >
                           Time Of Accident
                          </label>
                        </div>
                        <div className="col-lg-7">
                        <TimePicker
                          selectedTime={TimeOfAccident ? TimeOfAccident : ""}
                          setSelectedTime={setTimeOfAccident}
                        />
                        </div>
                      </div>
                    </div>

                     <div className="col-lg-6">
                      <div className="row mt-1">
                        <div className="col-lg-5 my_profile_setting_input form-group">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#1560bd",
                              fontWeight: "",
                              // marginTop: "-13px",
                            }}
                          >
                            Place Of Accident
                          </label>
                        </div>
                        <div className="col-lg-7">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          value={PlaceOfLoss ? PlaceOfLoss : ""}
                          onChange={(e) => setPlaceOfLoss(e.target.value)}
                          // placeholder="Enter Registration No."
                        />
                        </div>
                      </div>
                        </div>

                     <div className="col-lg-6">
                      <div className="row mt-1">
                        <div className="col-lg-5 my_profile_setting_input form-group">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#1560bd",
                              fontWeight: "",
                              // marginTop: "-13px",
                            }}
                          >
                            Pin Code
                          </label>
                        </div>
                        <div className="col-lg-7">
                          <input
                            type="text"
                            className="form-control"
                            id="propertyTitle"
                            value={Pin}
                            onChange={(e) => setPin(e.target.value)}
  
                          />
                        </div>
                      </div>
                      </div>

                     <div className="col-lg-6">
                      <div className="row mt-1">
                        <div className="col-lg-5 my_profile_setting_input form-group">
                          <label
                            htmlFor=""
                            className="text-color"
                            style={{
                              // paddingTop: "15px",
                              color: "#1560bd",
                              fontWeight: "",
                              // marginTop: "-13px",
                            }}
                          >
                           Place Of Survey
                          </label>
                        </div>
                        <div className="col-lg-7">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          value={PlaceOfSurvey ? PlaceOfSurvey : ""}
                          onChange={(e) => setPlaceOfSurvey(e.target.value)}
                          // placeholder="Enter Registration No."
                        />
                        </div>
                      </div>
                          </div>
                  </div>
                ) : (
                  <div className="row">
                    <AccidentViewForm
                      claim={claim}
                      
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default AccidentEditableForm;
