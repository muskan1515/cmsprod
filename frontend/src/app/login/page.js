"use client";
import React, { useState } from "react";
import "./page.css";
import Link from "next/link";

const Login = () => {
  const [formSignInLeft, setFormSignInLeft] = useState(false);
  const [formSignUpLeft, setFormSignUpLeft] = useState(false);
  const [frameLong, setFrameLong] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [signinActive, setSigninActive] = useState(false);
  const [forgotLeft, setForgotLeft] = useState(false);
  const [navUp, setNavUp] = useState(false);
  const [formSignupDown, setFormSignupDown] = useState(false);
  const [successLeft, setSuccessLeft] = useState(false);
  const [frameShort, setFrameShort] = useState(false);
  const [btnAnimateGrow, setBtnAnimateGrow] = useState(false);
  const [welcomeLeft, setWelcomeLeft] = useState(false);
  const [coverPhotoDown, setCoverPhotoDown] = useState(false);
  const [profilePhotoDown, setProfilePhotoDown] = useState(false);
  const [btnGoBackUp, setBtnGoBackUp] = useState(false);
  const [forgotFade, setForgotFade] = useState(false);

  const handleClick = () => {
    setFormSignInLeft(!formSignInLeft);
    setFormSignUpLeft(!formSignUpLeft);
    setFrameLong(!frameLong);
    setSignupActive(!signupActive);
    setSigninActive(!signinActive);
    setForgotLeft(!forgotLeft);
    // Add additional state updates as needed
  };

  const handleSignupClick = () => {
    setNavUp(!navUp);
    setFormSignupDown(!formSignupDown);
    setSuccessLeft(!successLeft);
    setFrameShort(!frameShort);
    // Add additional state updates as needed
  };

  const handleSigninClick = () => {
    setBtnAnimateGrow(!btnAnimateGrow);
    setWelcomeLeft(!welcomeLeft);
    setCoverPhotoDown(!coverPhotoDown);
    setFrameShort(!frameShort);
    setProfilePhotoDown(!profilePhotoDown);
    setBtnGoBackUp(!btnGoBackUp);
    setForgotFade(!forgotFade);
    // Add additional state updates as needed
  };

  return (
    <div>
      <div className="container">
        <div className="frame">
          <div className="nav text-center">
            <ul className="links">
              <li className="signin-active" onClick={handleSigninClick}>
                <a className="btn">Sign in</a>
              </li>
              {/* <li className="signup-inactive" onClick={handleSignupClick}>
                <a className="btn">Sign up </a>
              </li> */}
            </ul>
          </div>
          <div>
            <form className="form-signin" action="" method="post" name="form">
              <label htmlFor="username">Mobile Number</label>
              <input
                className="form-styling"
                type="text"
                name="username"
                placeholder=""
              />
              <label htmlFor="password">Otp</label>
              <input
                className="form-styling"
                type="text"
                name="password"
                placeholder=""
              />
              <div className="text-end label">
                {" "}
                <Link href="#">Resend OTP</Link>
              </div>
              {/* <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                <span className="ui"></span>Keep me signed in
              </label> */}
              <button className="btn-animate">
              <Link href="#" className="text-light">Sign in</Link>
              </button>
            </form>

            {/* <form className="form-signup" action="" method="post" name="form">
              <label htmlFor="fullname">Full name</label>
              <input
                className="form-styling"
                type="text"
                name="fullname"
                placeholder=""
              />
              <label htmlFor="email">Email</label>
              <input
                className="form-styling"
                type="text"
                name="email"
                placeholder=""
              />
              <label htmlFor="password">Password</label>
              <input
                className="form-styling"
                type="text"
                name="password"
                placeholder=""
              />
              <label htmlFor="confirmpassword">Confirm password</label>
              <input
                className="form-styling"
                type="text"
                name="confirmpassword"
                placeholder=""
              />
              <a ng-click="checked = !checked" className="btn-signup">
                Sign Up
              </a>
            </form>

            <div className="success">
              <div className="successtext">
                <p>
                  {" "}
                  Thanks for signing up! Check your email for confirmation.
                </p>
              </div>
            </div> */}
          </div>

          <div className="forgot">
            <a href="#">Forgot your password?</a>
          </div>

          <div>
            <div className="cover-photo"></div>
            <div className="profile-photo"></div>
            <h1 className="welcome">Welcome, Chris</h1>
            <a className="btn-goback" value="Refresh" onClick="history.go()">
              Go back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
