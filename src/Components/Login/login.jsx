import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);

  const navigate = useNavigate();


  //   console.log("email input value ==>", email);
  //   console.log("password input value ===>", password);
  //   console.log("check input field ===>", checked)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is handle submit function");
    let pyaload = {
      email,
      password,
    };

    const loginCall = await axios.post(
      "http://localhost:8081/admin/loginAdmin",
      pyaload
    );
    console.log("loginCall", loginCall);

    
	const { accessToken } = loginCall.data;  // get the token from api response and store in a variable
	console.log("this is access token", accessToken);

	if (loginCall.data.success == true) {       // if api data response is true(the response api)? then set the token 
		localStorage.setItem("accessToken",accessToken);    // Remember we set token in key with value
        navigate("/")
 		  
	}else if(loginCall.data.success == false){   // if api response is false (remove the token)
		 localStorage.removeItem("accessToken");   // we remove item 
		 navigate("/login")
	}
  };
     
 useEffect(()=>{
	if(!localStorage.getItem("accessToken")){
		navigate("/login");
	  }else{
		navigate("/");
	  }
 },[]);

  return (
    <>
      <div id="intro" className="bg-image shadow-2-strong">
        <div className="mask d-flex align-items-center main-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-md-8">
                <form
                  className="bg-white  rounded-5 shadow-5-strong p-5"
                  onSubmit={handleSubmit}
                >
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="formEmail">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="formEmail"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="forPassword">
                      Password
                    </label>
                    <input
                      type="password"
                      id="forPassword"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* <!-- 2 column grid layout for inline styling --> */}
                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                      {/* <!-- Checkbox --> */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="forChecbox"
                          defaultChecked
                          value={checked}
                          onChange={() => setChecked(!checked)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="forChecbox"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="col text-center">
                      {/* <!-- Simple link --> */}
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    className="btn btn-primary btn-block Login-button"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

 