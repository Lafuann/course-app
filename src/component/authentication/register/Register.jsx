/* eslint-disable */
import React, { useEffect, useState } from "react";
import icEmail from "../../../assets/img/ic-email.svg";
import icGoogle from "../../../assets/img/ic-google.svg";
import icArrowGrey from "../../../assets/img/ic-arrow-grey.svg";
import { useNavigate } from "react-router-dom";
// import { createBrowserHistory } from "history";
import GoogleLogin from "react-google-login";
import AuthService from "../../../store/services/AuthService";
import { useDispatch, useSelector } from "react-redux";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";
import {
  regisStep1,
  registerByGoogle,
  registerNextStep,
} from "../../../store/redux/actions/auth/regis";

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const regisStatus = useSelector((state) => state.regis.status);
  const [resGoogle, setResGoogle] = useState({});
  // const history = createBrowserHistory();
  const handleNextStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const responseGoogle = (response) => {
    if (!response.error) {
      dispatch(registerByGoogle(response.profileObj.email, response.googleId));
      setResGoogle(response);
    }
  };

  useEffect(() => {
    if (regisStatus === "google_success") {
      dispatch(
        regisStep1(resGoogle.profileObj.name, resGoogle.profileObj.email)
      );
      dispatch(registerNextStep(2));
    }
  }, [regisStatus]);

  return (
    <>
      <h2>Join GIG University</h2>
      <p>
        Our mission is to become an active digital hub which positively
        channels. Join Us Now!
      </p>

      <form className="pt-3">
        <a
          href=""
          className="btn btn-outline-grey d-block w-100"
          onClick={handleNextStep}
        >
          <img src={icEmail} /> Sign Up with Email{" "}
          <img src={icArrowGrey} className="arrow-grey" />
        </a>
        <GoogleLogin
          clientId="758398647424-vn2hossvsjkqpddal6htt4j7rdob0g94.apps.googleusercontent.com"
          render={(renderProps) => (
            <a
              href=""
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="btn btn-outline-grey d-block w-100"
            >
              <img src={icGoogle} /> Sign Up with Google{" "}
              <img src={icArrowGrey} className="arrow-grey" />
            </a>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,<p className="text-center pt-3 pb-2">Already have an account?</p>
        <a
          href=""
          className="btn btn-outline-secondary-custom d-block"
          onClick={() => navigate("/login")}
        >
          Login
        </a>
      </form>
    </>
  );
};

export default Register;
