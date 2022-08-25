/* eslint-disable */
import React, { useState } from "react";
import "../../../assets/js/scripts";
import logoLogin from "../../../assets/img/logo-login.svg";
import Register from "./Register";
import RegisterByEmail from "./RegisterByEmail";
import icBack from "../../../assets/img/ic-back.svg";
import { useNavigate } from "react-router-dom";
import CreatePassword from "./CreatePassword";
import PhoneNumber from "./PhoneNumber";
import BitMore from "./BitMore";
import { useDispatch, useSelector } from "react-redux";
import { changeRegisStep } from "../../../store/redux/Register";
import {
  registerNextStep,
  registerPrevStep,
} from "../../../store/redux/actions/auth/regis";

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [registerStep, setRegisterStep] = useState(0);
  const registerStep = useSelector((state) => state.regis.step);
  const regisStatus = useSelector((state) => state.regis.status);
  // const registerBy = useSelector((state) => state.register.registerBy);

  const handleNextStep = () => {
    dispatch(registerNextStep(registerStep + 1));
  };

  const handleToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleBack = (e) => {
    e.preventDefault();
    dispatch(registerPrevStep(registerStep - 1));
  };

  return (
    <section className="account-section forgot">
      <div className="container-fluid">
        <div className="row d-flex justify-content-end">
          <div className="col-md-8 pt-4">
            <a href="" className="logo" onClick={handleToHome}>
              <img src={logoLogin} />
            </a>
            <div className="form-account pt-5">
              {registerStep > 0 ? (
                <a
                  href=""
                  style={{
                    display: `${
                      regisStatus === "google_success" && registerStep === 2
                        ? "none"
                        : "block"
                    }`,
                  }}
                  className="link-back"
                  onClick={handleBack}
                >
                  <img src={icBack} /> Back
                </a>
              ) : null}
              {registerStep === 4 ? (
                <BitMore />
              ) : registerStep === 3 ? (
                <PhoneNumber nextStep={handleNextStep} />
              ) : registerStep === 2 ? (
                <CreatePassword nextStep={handleNextStep} />
              ) : registerStep === 1 ? (
                <RegisterByEmail nextStep={handleNextStep} />
              ) : (
                <Register nextStep={handleNextStep} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
