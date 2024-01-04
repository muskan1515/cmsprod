import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";



const Form = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const router = useRouter();

  const submitHandler = (event)=>{

    event.preventDefault();
    
    const payload = {
      username : username,
      password : password
    };

    toast.loading("Logging!!!");
    axios.post("/api/login",payload)
    .then((res)=>{
      toast.dismiss();
      localStorage.setItem("userInfo",JSON.stringify(res.data.userData.data));
      toast.success("Successfully logged in!");
      router.push("/my-dashboard");
    })
    .catch((err)=>{
      toast.dismiss();
      toast.error(err);
    })
  }

  return (
    <form action="#">
      <div className="heading text-center">
        <h3>Login to your account</h3>
        {/* <p className="text-center">
          Dont have an account?{" "}
          <Link href="/register" className="text-thm">
            Sign Up!
          </Link>
        </p> */}
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          onChange={(e)=>setUsername(e.target.value)}
          placeholder="User Name Or Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          required
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="remeberMe"
        />
        <label
          className="form-check-label form-check-label"
          htmlFor="remeberMe"
        >
          Remember me
        </label>

        <a className="btn-fpswd float-end" href="#">
          Forgot password?
        </a>
      </div>
      {/* End .form-group */}

<<<<<<< Updated upstream
      <button type="submit" className="btn btn-log w-100 btn-thm" onClick={(e)=>submitHandler(e)}>
=======
      <button type="submit" className="btn btn-color w-100">
>>>>>>> Stashed changes
        Log In
      </button>
      {/* login button */}

      {/* <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div> */}
      {/* devider */}

      {/* <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
      </div> */}
      {/* more signin options */}
    </form>
  );
};

export default Form;
