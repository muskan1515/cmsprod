import { useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "draft-js";
import { Editor } from "primereact/editor";

const Summary = ({ 
  isEditMode ,
  metaldepPct,
  ageOfVehicleTotal,
  totalPartsEstimate,
  totalLabrorEstimate,
  totalPartsAssessed,
  totalLabrorAssessed,
  setLessImposed,
  lessImposed,
  setLessExcess,
  lessExcess,
  other,
  setOther,
  metalSalvageValue,

  calculateDepreciationOnMetal
  ,calculateVehicleAge

}) => {
  const [applicantNumber, setApplicantNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

  const returnTotal = ()=>{
    const a = (Number(totalLabrorAssessed) + Number(totalPartsAssessed)) + (Number(lessExcess) - Number(lessImposed) + Number(other) );
    const b = (((Number(totalLabrorAssessed + totalPartsAssessed)) *( Number(metalSalvageValue)))/100);


    return (a-b) > 1 ? (a-b) : 0; 
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

 

    // Allow only numeric input
    const numericValue = inputValue.replace(/\D/g, "");

    // Restrict to 10 digits
    const truncatedValue = numericValue.slice(0, 10);
    if (truncatedValue.length === 10) {
      setApplicantNumber(truncatedValue);
    }

    setPhoneNumber(truncatedValue);
  };

  // const Editor = SomeComponent.Editor;
  const [editorContent, setEditorContent] = useState("");

  const formatText = (command) => {
    if (typeof window !== "undefined") {
      const selectedText = window.getSelection().toString();

      const selection = window.getSelection();
      if (selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);

      // Create a span element
      const span = document.createElement("span");

      switch (command) {
        case "bold":
          span.style.fontWeight = "bold";
          break;
        case "italic":
          span.style.fontStyle = "italic";
          break;
        case "justifyCenter":
          span.style.textAlign = "center";
          break;
        case "justifyRight":
          span.style.textAlign = "right";
          break;
        case "justifyLeft":
          span.style.textAlign = "left";
          break;
        default:
          break;
      }

      // Surround the selected content with the created span element
      range.surroundContents(span);
    }
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="row mt-3">
        <div className="col-lg-2" style={{ borderRight: "1px solid black" }}>
          <div className="row">
            <div className="col-lg-12">
              <h4>Original Estimate :</h4>
              {/* <hr /> */}
            </div>
            <div className="col-lg-12">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Total Labour
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={totalLabrorEstimate}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Total Cost of Parts
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                  value={totalPartsEstimate}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Total Estimate
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={totalPartsEstimate + totalLabrorEstimate}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
             {/*} <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Estimate Date
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
                  </div>*/}
            </div>
          </div>
          <hr />
        </div>
        <div className="col-lg-5" style={{ borderRight: "1px solid black" }}>
          <div className="row">
            <div className="col-lg-12">
              <h4>Assessed Value :</h4>
              {/* <hr /> */}
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Total Labour
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={totalLabrorAssessed}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Total Cost of Parts
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={totalPartsAssessed}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-lg-12">
                <div className="row mt-1 mb-1">
                  <div className="col-lg-12 my_profile_setting_input form-group">
                    <label
                      htmlFor=""
                      className="text-color mb-0"
                      style={{
                        color: "#2e008b",
                        fontSize: "14px",
                      }}
                    >
                      Total
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="propertyTitle"
                      value={totalLabrorAssessed + totalPartsAssessed}
                      // placeholder="Enter Registration No."
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row mt-1 mb-1">
                  <div className="col-lg-12 my_profile_setting_input form-group">
                    <label
                      htmlFor=""
                      className="text-color mb-0"
                      style={{
                        color: "#2e008b",
                        fontWeight: "",
                      }}
                    >
                      Less Excess
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="propertyTitle"
                      value={lessExcess}
                      onChange={(e)=>setLessExcess(e.target.value)}
                      // placeholder="Enter Registration No."
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row mt-1 mb-1">
                  <div className="col-lg-12 my_profile_setting_input form-group">
                    <label
                      htmlFor=""
                      className="text-color mb-0"
                      style={{
                        color: "#2e008b",
                        fontWeight: "",
                      }}
                    >
                      Less Imposed
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="propertyTitle"
                      value={lessImposed}
                      onChange={(e)=>setLessImposed(e.target.value)}
                      // placeholder="Enter Registration No."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Other
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Other
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={other}
                      onChange={(e)=>setOther(e.target.value)}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8"></div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Grand Total
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={(Number(totalLabrorAssessed) + Number(totalPartsAssessed)) - (Number(lessExcess) + Number(lessImposed) + Number(other) )}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h5>Savage & Depreciation Details</h5>
              {/* <hr /> */}
            </div>
            <div className="col-lg-3">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                      fontSize: "14px",
                    }}
                  >
                    Metal %
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={metalSalvageValue}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                      fontSize: "14px",
                    }}
                  >
                    Expected Salvage
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={((Number(totalLabrorAssessed + totalPartsAssessed)) *( Number(metalSalvageValue)))/100}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                      fontSize: "14px",
                    }}
                  >
                    Remark on Salvage
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                    placeholder="This is a metal salvage depreciation %"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <hr />
            {/* <hr /> */}
          </div>
          <div className="row">
            <div className="col-lg-8 text-end">
              <label
                htmlFor=""
                className="text-color mb-0"
                style={{
                  paddingTop: "10px",
                  color: "#2e008b",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Depreciation on Parts
              </label>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group"></div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={((Number(totalLabrorAssessed + totalPartsAssessed)) *( Number(metalSalvageValue)))/100}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 text-end">
              <label
                htmlFor=""
                className="text-color mb-0"
                style={{
                  paddingTop: "10px",
                  color: "#2e008b",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Net Assessed Amount
              </label>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group"></div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={returnTotal()}
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row">
            <div className="col-lg-6">
              <h4>Notes :</h4>
              {/* <hr /> */}
            </div>
            <div className="col-lg-6 text-end" style={{ marginTop: "-20px" }}>
              <button className="btn btn-color m-1">Cancel</button>
              {isEditMode ? (
                <button className="btn btn-color m-1">Update</button>
              ) : (
                <button className="btn btn-color m-1">Update</button>
              )}
              {/* <button className="btn btn-color m-1">Add</button> */}
              {/* <button className="btn btn-color m-1" onClick={handleEditClick}>
            Modify
          </button> */}
            </div>
            <div className="col-lg-12">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group"></div>
                <div className="col-lg-12">
                  <div className="">
                    <Editor style={{ height: "100px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <h5>Enclosure Remarks & Other Details </h5>
              {/* <hr /> */}
            </div>
            <div className="col-lg-12">
              <div className="row mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group"></div>
                <div className="col-lg-12">
                  <textarea name="" id="" cols="50" rows="3"></textarea>
                  {/* <div className="card">
                    <Editor />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <h5>Note Of Self : </h5>
              {/* <hr /> */}
            </div>
            <div className="col-lg-12">
              <div className="row mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group"></div>
                <div className="col-lg-12">
                  <textarea name="" id="" cols="50" rows="3"></textarea>
                  {/* <div className="card">
                    <Editor />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Repair Auto Date
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Repair Completion Date
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Party Agreed
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Reason thereof Delay
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Any Further Conversation
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Repairin Photo Date
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Reinspection Date
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Salve Destroy
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Bill No.
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Bill Date
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-1 mb-1">
                <div className="col-lg-12 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mb-0"
                    style={{
                      color: "#2e008b",
                      fontSize: "14px",
                    }}
                  >
                    Bill Amount
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
        <div className="col-lg-12 mt-5">
          <div className="row mt-1">
            <div className="col-lg-5"></div>
            <div className="col-lg-2">
              {/*<div className="row mt-1">
                <div className="col-lg-7 my_profile_setting_input form-group text-end">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      // paddingTop: "15px",
                      color: "#2e008b",
                      fontWeight: "",
                      // marginTop: "-13px",
                      fontSize: "12px",
                    }}
                  >
                    Age of Vehicle
                  </label>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    
                    // value={props.assessed}
                    // readOnly={!isEditMode}
                    // onChange={(e) => setLicenseType(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
                  </div>*/}
            </div>
            <div className="col-lg-2">
              <div className="row mt-1">
                <div className="col-lg-7 my_profile_setting_input form-group text-end">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      // paddingTop: "15px",
                      color: "#2e008b",
                      fontWeight: "",
                      // marginTop: "-13px",
                      fontSize: "12px",
                    }}
                  >
                    Age of Policy
                  </label>
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={calculateVehicleAge()}
                    // value={props.assessed}
                    // readOnly={!isEditMode}
                    // onChange={(e) => setLicenseType(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="row mt-1">
                <div className="col-lg-7 my_profile_setting_input form-group text-end">
                  <label
                    htmlFor=""
                    className="text-color"
                    style={{
                      // paddingTop: "15px",
                      color: "#2e008b",
                      fontWeight: "",
                      // marginTop: "-13px",
                      fontSize: "12px",
                    }}
                  >
                    Depreciation on metal(%)
                  </label>
                </div>
                <div className="col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyTitle"
                    value={calculateDepreciationOnMetal()}
                    // value={props.difference}
                    // readOnly={!isEditMode}
                    // onChange={(e) => setLicenseType(e.target.value)}

                    // placeholder="Enter Registration No."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
