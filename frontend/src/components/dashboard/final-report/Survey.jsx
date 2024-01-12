import { useState } from "react";
import MyDatePicker from "../../common/MyDatePicker";

const Servey = () => {
  const [applicantNumber, setApplicantNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const [editorContent, setEditorContent] = useState("");

  const formatText = (command) => {
    const selectedText = window.getSelection().toString();

    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
  
    // Create a span element
    const span = document.createElement('span');
  
    switch (command) {
      case 'bold':
        span.style.fontWeight = 'bold';
        break;
      case 'italic':
        span.style.fontStyle = 'italic';
        break;
      case 'justifyCenter':
        span.style.textAlign = 'center';
        break;
      case 'justifyRight':
        span.style.textAlign = 'right';
        break;
      case 'justifyLeft':
        span.style.textAlign = 'left';
        break;
      default:
        break;
    }
  
    // Surround the selected content with the created span element
    range.surroundContents(span);
  
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-6" style={{ borderRight: "1px solid black" }}>
          <div className="col-lg-12">
            <h4>Account Details :</h4>
            <hr />
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-4 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontWeight: "",
                    // marginTop: "-13px",
                  }}
                >
                  Date of Accident <span class="text-danger">*</span>
                </label>
              </div>
              <div className="col-lg-7">
                {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                <MyDatePicker />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1 mb-1">
              <div className="col-lg-4 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    color: "#2e008b",
                    fontWeight: "",
                  }}
                >
                  Time of Accident <span class="text-danger">*</span>
                </label>
              </div>
              <div className="col-lg-7">
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
            <div className="row">
              <div className="col-lg-4 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontWeight: "",
                    // marginTop: "-13px",
                  }}
                >
                  Place of Accident <span class="text-danger">*</span>
                </label>
              </div>
              <div className="col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                  // placeholder="Enter Registration No."
                />
              </div>
            </div>
            {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontWeight: "",
                    // marginTop: "-13px",
                  }}
                >
                  Place of Survey <span class="text-danger">*</span>
                </label>
              </div>
              <div className="col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                  // placeholder="Enter Registration No."
                />
              </div>
            </div>
            {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
          </div>
          <hr />

          <div className="col-lg-12">
            <h4>Survey Details :</h4>
            <hr />
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-4 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontWeight: "",
                    // marginTop: "-13px",
                  }}
                >
                  Allotment Date <span class="text-danger">*</span>
                </label>
              </div>
              <div className="col-lg-7">
                {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                <MyDatePicker />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-1">
              <div className="col-lg-4 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontWeight: "",
                    // marginTop: "-13px",
                  }}
                >
                  Inspection <span class="text-danger">*</span>
                </label>
              </div>
              <div className="col-lg-7">
                {/* <input
              type="date"
              className="form-control"
              id="propertyTitle"
            /> */}
                <MyDatePicker />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 my_profile_setting_input form-group">
                <label
                  htmlFor=""
                  className="text-color"
                  style={{
                    // paddingTop: "15px",
                    color: "#2e008b",
                    fontWeight: "",
                    // marginTop: "-13px",
                  }}
                >
                  Spot Survey Recieved
                </label>
              </div>
              <div className="col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                  // placeholder="Enter Registration No."
                />
              </div>
            </div>
            {/* <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div> */}
          </div>
          <div className="col-lg-12 mt-3">
            <h4>Cause & Nature of Accident :</h4>
            <hr />
          </div>
          <div className="col-lg-12">
            <div>
              <textarea
                value={editorContent}
                onChange={(e) => setEditorContent(e.target.value)}
                style={{ width: "100%", height: "150px" }}
              />
              <br />
              <button onClick={() => formatText("bold")}>Bold</button>
              <button onClick={() => formatText("italic")}>Italic</button>
              <button onClick={() => formatText("justifyCenter")}>
                Align Center
              </button>
              <button onClick={() => formatText("justifyRight")}>
                Align Right
              </button>
              <button onClick={() => formatText("justifyLeft")}>
                Align Left
              </button>
            </div>
            {/* <textarea
              className="form-control"
              placeholder="Enter text here..."
              cols="20"
              rows="4"
              wrap="hard"
              required
            /> */}
          </div>
          <div className="col-lg-12 mb-3 mt-2">
            <h4>Police Action :</h4>
            <hr />
          </div>
          <div className="col-lg-12 mb-2">
            <textarea
              className="form-control"
              placeholder="Enter text here..."
              cols="20"
              rows="2"
              wrap="hard"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="col-lg-12">
            <h4>Details of Loads / Passenger :</h4>
            <hr />
          </div>
          <div className="col-lg-12">
            <textarea
              className="form-control"
              placeholder="Enter text here..."
              cols="20"
              rows="4"
              wrap="hard"
              required
            />
          </div>
          <div className="col-lg-12 mt-3">
            <h4>Third Party Loss / Injuries :</h4>
            <hr />
          </div>
          <div className="col-lg-12">
            <textarea
              className="form-control"
              placeholder="Enter text here..."
              cols="20"
              rows="4"
              wrap="hard"
              required
            />
          </div>
          <div className="col-lg-12 mt-3">
            <h4>Assesment :</h4>
            <hr />
          </div>
          <div className="col-lg-12 mb-2">
            <textarea
              className="form-control"
              placeholder="Enter text here..."
              cols="20"
              rows="6"
              wrap="hard"
              required
            />
          </div>
        </div>

        <hr />
      </div>
      {/* <div className="row">
        <div className="text-center">
          <div className="my_profile_setting_input">
            <button className="btn btn-color fw-bold w-25">Submit</button>
          </div>
        </div>
      </div> */}

      {/* <div className="col-lg-4">
        <div className="row mt-1">
          <div className="col-lg-4 my_profile_setting_input form-group">
            <label
              htmlFor=""
              className="text-color"
              style={{
                // paddingTop: "15px",
                color: "#2e008b",
                fontWeight: "",
                // marginTop: "-13px",
              }}
            >
              Endo. Doc <span class="text-danger">*</span>
            </label>
          </div>
          <div className="col-lg-8">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              // placeholder="Enter Registration No."
            />
          </div>
        </div>
      </div> */}

      {/* <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Description</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
          ></textarea>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Type</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">Type1</option>
            <option data-tokens="Type2">Type2</option>
            <option data-tokens="Type3">Type3</option>
            <option data-tokens="Type4">Type4</option>
            <option data-tokens="Type5">Type5</option>
          </select>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">Status1</option>
            <option data-tokens="Status2">Status2</option>
            <option data-tokens="Status3">Status3</option>
            <option data-tokens="Status4">Status4</option>
            <option data-tokens="Status5">Status5</option>
          </select>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExamplePrice"
          />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleArea">Area</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleArea"
          />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Rooms</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Other</option>
          </select>
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div> */}
    </>
  );
};

export default Servey;
