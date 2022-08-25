/* eslint-disable */
import React from "react";
import ReactCodeInput from "react-verification-code-input";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logoLogin from "../assets/img/logo-login.svg";
import icBack from "../assets/img/ic-back.svg";
// styles
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/mobile.css";

const VerificationCode = (props) => {
  const location = useLocation();
  const phoneNumber = useSelector((state) => state.auth.phone_number);
  const handleVerify = (e) => {
    e.preventDefault();
    if (location.pathname === "/register") {
      props.nextStep();
    }
  };
  console.log(phoneNumber);
  return (
    <>
      <h2 style={{ marginTop: "30px", fontWeight: "bold" }}>
        Verification Code
      </h2>
      <p>
        Enter your 4 digit activation
        <br />
        We have sent an activation code to <span>{phoneNumber}</span>
      </p>

      <form>
        <div className="form-group pt-4 pb-2">
          <div className="d-flex input-otp justify-content-between">
            <input type="text" name="" />
            <input type="text" name="" />
            <input type="text" name="" />
            <input type="text" name="" />
          </div>
          <div className="d-flex justify-content-between pt-4">
            <p>00:00</p>
            <p className="text-end">
              If you didn’t get the code? <a href="">Resend</a>
            </p>
          </div>
        </div>
        <div className="form-group">
          <a
            href="#"
            className="btn btn-secondary-purple d-block"
            style={{ width: "100%" }}
            onClick={handleVerify}
          >
            Verify
          </a>
        </div>
      </form>
    </>
  );
};

export default VerificationCode;
