import { useState } from "react";

const CreateList = ({ setSearchInput, setType, 
  changeHandler,
  setStart,
  setEnd,
  allInsurer,
  reloadHandler,
  InsurerType,
  setInsurerType,
  DateType,
  setDateType,
start,
end }) => {
  const [currentType, setCurrentType] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (value, type) => {
    setCurrentType(type);
    setSearchValue(value);
  };


  console.log("InsurenceType",setInsurerType)

  const searchHandler = ({
   
  }) => {
    setType(currentType);
    setSearchInput(searchValue);
  };

  console.log(InsurerType,setInsurerType)
  return (
    <>
      <div className="col-lg-12">
        <div
          className="row my_profile_setting_input form-group"
          // style={{ marginLeft: "-25px" }}
        >
          {/* <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              placeholder="Enter Policy No."
              onChange={(e) => handleInputChange(e.target.value, 1)}
            />
          </div>
          <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              placeholder="Enter Registration No."
              onChange={(e) => handleInputChange(e.target.value, 1)}
            />
          </div> */}
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-4 text-end">
                <label htmlFor="" className="mt-2">
                  Insurer Name
                </label>
              </div>
              <div className="col-lg-8">
                <select
                  style={{ padding: "2px", marginTop: "3px" }}
                  className="selectpicker form-select"
                  data-live-search="true"
                  data-width="100%"
                  value={InsurerType}
                  onChange={(e) => setInsurerType(e.target.value)}
                >
                {allInsurer.map((insurer,index)=>{
                  return  <option key={index} data-tokens="Status1" value={insurer.name}>{insurer.name}</option>
                })}
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-4 text-end">
                <label htmlFor="" className="mt-2">
                  Type Of Date
                </label>
              </div>
              <div className="col-lg-8">
                <select
                  style={{ padding: "2px", marginTop: "3px" }}
                  className="selectpicker form-select"
                  data-live-search="true"
                  data-width="100%"
                  value={DateType}
                  onChange={(e) => setDateType(e.target.value)}
                >
                <option value={""}></option>
                <option value={"intimation"}>Date Of Intimation </option>
                <option value={"submit"}> Date Of Submit</option>
                
                
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-3 text-end">
                <label htmlFor="" className="mt-2">
                  From
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="date"
                  className="form-control"
                  id="propertyTitle"
                  value={start}
                  onChange={(e)=>setStart(e.target.value)}
                  placeholder="Enter Reference No."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-3 text-end">
                <label htmlFor="" className="mt-2">
                  To
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="date"
                  className="form-control"
                  id="propertyTitle"
                  value={end}
                  onChange={(e)=>setEnd(e.target.value)}
                  placeholder="Enter Reference No."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1">
            <div className="my_profile_setting_input">
              <button
                className="btn float-end btn-color mt-0"
                onClick={reloadHandler}
              >
                Reload
              </button>
            </div>
          </div>
          <div className="col-lg-1">
            <div className="my_profile_setting_input">
              <button
                className="btn float-end btn-color mt-0"
                onClick={changeHandler}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default CreateList;
