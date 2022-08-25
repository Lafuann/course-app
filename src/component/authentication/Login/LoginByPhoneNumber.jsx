/* eslint-disable */
import React, { useEffect } from "react";
import icEmail from "../../../assets/img/ic-email.svg";
import icGoogle from "../../../assets/img/ic-google.svg";
import { useNavigate } from "react-router-dom";
import FormPhoneNumber from "../../FormPhoneNumber";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../../store/services/AuthService";
import { createBrowserHistory } from "history";
import GoogleLogin from "react-google-login";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";
import { loginWithGoogle } from "../../../store/redux/actions/auth/login";
import Swal from "sweetalert2";

const LoginByPhoneNumber = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const phoneNumber = useSelector((state) => state.login.phone_number);
  const loginGoogleStatus = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login)
  // const phone_country_code = useSelector(
  //   (state) => state.auth.phone_country_code
  // );
  const handleTerms = (e) => {
    e.preventDefault();
    navigate("/terms");
  };
  const handlePrivacy = (e) => {
    e.preventDefault();
    navigate("/privacy");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var phones = phoneNumber.toString();

    AuthService.LoginByPhoneNumber(phones.substr(2), phones.slice(0, 2)).then(
      (res) => {
        const { error } = res;
        if (!error) {
          e.preventDefault();
          props.setisVerifiedOTP(true);
        }
      }
    );

    console.log(phones.substr(2));
    console.log(phones.slice(0, 2));
  };
  const responseGoogle = (response) => {
    if (!response.error) {
      dispatch(loginWithGoogle(response.profileObj.email, response.googleId));
      // AuthService.LoginByGoogle(
      //   response.profileObj.email,
      //   response.googleId
      // ).then((res) => {
      //   const { user } = res;
      //   if (user) {
      //     localStorage.setItem("token", user.api_token);
      //     localStorage.setItem("users", JSON.stringify(user));
      //     navigate("/profile");
      //     history.go(0);
      //   }
      // });
    }
  };

  const handleLoginByEmail = (e) => {
    e.preventDefault();
    props.setIsLoginByEmail(true);
  };

  useEffect(() => {
    if (loginGoogleStatus === "google_success") {
      if(error?.user.data.message === 'Incorrect login.') {
        Swal.fire({
          icon: "error",
          title: "Your Google Account Not Registered Yet!",
          text: "Please Register Your Google Account First!",
        }).then((res) => {
          if(res.isConfirmed){
            navigate("/register");
            history.go(0);
          }else if(res.isDismissed) {
            navigate("/register");
            history.go(0);
          }
        })
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "You are logged in!",
        }).then((res) => {
          if(res.isConfirmed) {
            navigate("/");
            history.go(0);
          } else if(res.isDismissed) {
            navigate("/");
            history.go(0);
          }
        })
      }
    }
  }, [loginGoogleStatus, error]);

  return (
    <>
      <h2 style={{ marginBottom: "40px" }}>Login</h2>
      <form>
        {/* <FormPhoneNumber /> */}
        <div className="form-group">
          {/* <button
            className="btn btn-secondary-purple d-block"
            style={{ width: "100%", marginTop: "50px" }}
            onClick={handleSubmit}
          >
            Login
          </button> */}
          <br />
          <br />
          <br />
          <p
            className="text-center"
            style={{ marginTop: "30px", fontSize: "18px" }}
          >
            Login with
          </p>
          <div className="d-flex" style={{ width: "102%" }}>
            <a
              href="kgu"
              className="btn btn-outline-grey"
              onClick={handleLoginByEmail}
              style={{ marginRight: "20px" }}
            >
              <img src={icEmail} /> Email
            </a>
            <GoogleLogin
              clientId="758398647424-vn2hossvsjkqpddal6htt4j7rdob0g94.apps.googleusercontent.com"
              render={(renderProps) => (
                <a
                  href=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="btn btn-outline-grey"
                >
                  <img src={icGoogle} /> Google
                </a>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <p className="text-center" style={{ marginTop: "40px" }}>
            By tapping "login" you agree to our{" "}
            <a href="" onClick={handleTerms}>
              Terms of service
            </a>{" "}
            &{" "}
            <a href="" onClick={handlePrivacy}>
              Privacy Policy
            </a>
          </p>
          <a
            href=""
            className="btn btn-primary-custom d-block"
            onClick={() => navigate("/register")}
            style={{ marginTop: "33px" }}
          >
            Create an account
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginByPhoneNumber;
