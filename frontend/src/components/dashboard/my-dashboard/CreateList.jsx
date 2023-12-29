const CreateList = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row my_profile_setting_input form-group" >
          <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              placeholder="Enter Policy No."
            />
          </div>
          <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              placeholder="Enter Registration No."
            />
          </div>
          <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              id="propertyTitle"
              placeholder="Enter PB Reference ID"
            />
          </div>
          <div className="col-lg-2">
            <input
              type="date"
              className="form-control"
              id="propertyTitle"
              placeholder="Enter Reference No."
            />
          </div>
          <div className="col-lg-1">
            <div className="my_profile_setting_input">
              <button className="btn btn2 float-end bg-info">Search</button>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      
    </>
  );
};

export default CreateList;
