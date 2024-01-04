const StatusLog = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row my_profile_setting_input form-group">
          <div className="col-lg-12 mb-2 mt-2">
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
            >
              <option data-tokens="Status1">Select</option>
              <option data-tokens="Status2">2</option>
              <option data-tokens="Status3">3</option>
            </select>
          </div>
          <div className="col-lg-12">
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
            >
              <option data-tokens="Status1">Select</option>
              <option data-tokens="Status2">2</option>
              <option data-tokens="Status3">3</option>
            </select>
          </div>
          <div className="col-lg-12 text-center mt-2">
            <div className="my_profile_setting_input">
              <button className="btn btn-color w-100">Update Search</button>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default StatusLog;
