/* eslint-disable */
import React, { useState, useEffect } from "react";
import logoLogin from "../../../assets/img/logo-login.svg";
import icBack from "../../../assets/img/ic-back.svg";
import LoginByPhoneNumber from "./LoginByPhoneNumber";
import VerificationCode from "../../VerificationCode";
import LoginByEmail from "./LoginByEmail";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";

// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";

const Login = () => {
  const [isVerifiedOTP, setisVerifiedOTP] = useState(false);
  const [isLoginByEmail, setIsLoginByEmail] = useState(false);
  const navigate = useNavigate();

  const handleToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleBack = (e) => {
    e.preventDefault();
    setisVerifiedOTP(false);
    setIsLoginByEmail(false);
  };

  useEffect(() => {
    const history = createBrowserHistory();
    history.push("/login");
  });

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-end">
        <div className="col-md-8 pt-4">
          <a href="" className="logo" onClick={handleToHome}>
            <img src={logoLogin} />
          </a>
          <div className="form-account pt-5">
            {isVerifiedOTP || isLoginByEmail ? (
              <a href="" className="link-back" onClick={handleBack}>
                <img src={icBack} /> Back
              </a>
            ) : null}
            {isLoginByEmail ? (
              <LoginByEmail />
            ) : isVerifiedOTP ? (
              <VerificationCode />
            ) : (
              <LoginByPhoneNumber
                isVerifiedOTP={isVerifiedOTP}
                setisVerifiedOTP={setisVerifiedOTP}
                setIsLoginByEmail={setIsLoginByEmail}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
