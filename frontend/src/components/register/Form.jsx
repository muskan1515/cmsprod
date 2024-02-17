import Link from "next/link";

const Form = () => {
  return (
    <form action="#">
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-thm">
            Login
          </Link>
        </p>
      </div>
      {/* End .heading */}
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group input-group ">
              <input
                type="text"
                className="form-control"
                required
                placeholder="First Name"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="flaticon-user"></i>
                </div>
              </div>
            </div>
            {/* End .form-group */}
          </div>
          <div className="col-lg-6">
            <div className="form-group input-group ">
              <input
                type="text"
                className="form-control"
                required
                placeholder="Last Name"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="flaticon-user"></i>
                </div>
              </div>
            </div>
            {/* End .form-group */}
          </div>
          <div className="col-lg-6">
            <div className="form-group input-group  ">
              <input
                type="email"
                className="form-control"
                required
                placeholder="Email Address"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-envelope-o"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group input-group ">
              <input
                type="text"
                className="form-control"
                required
                placeholder="Team Role"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="flaticon-user"></i>
                </div>
              </div>
            </div>
            {/* End .form-group */}
          </div>
          <div className="col-lg-6">
            <div className="form-group input-group ">
              <input
                type="number"
                className="form-control"
                required
                placeholder="Mobile Number"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="flaticon-user"></i>
                </div>
              </div>
            </div>
            {/* End .form-group */}
          </div>
          <div className="col-lg-6">
            <div className="form-group input-group  ">
              <input
                type="password"
                className="form-control"
                required
                placeholder="Password"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="flaticon-password"></i>
                </div>
              </div>
            </div>
            {/* End .form-group */}
          </div>
          <div className="col-lg-6">
            <div className="form-group input-group  ">
              <input
                type="password"
                className="form-control"
                required
                placeholder="Re-enter password"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="flaticon-password"></i>
                </div>
              </div>
            </div>
            {/* End .form-group */}
          </div>
          <div className="col-lg-12">
            <div className="form-group form-check custom-checkbox mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                required
                id="terms"
              />
              <label
                className="form-check-label form-check-label"
                htmlFor="terms"
              >
                I have read and accept the Terms and Privacy Policy?
              </label>
            </div>
            {/* End .form-group */}
          </div>
          <div className="col-lg-12 text-center">
            <button type="submit" className="btn btn-log w-25 btn-thm">
              Register
            </button>
            {/* login button */}
          </div>
        </div>
      </div>

      {/* <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div> */}
      {/* devider */}

      {/* more signin options */}
    </form>
  );
};

export default Form;
