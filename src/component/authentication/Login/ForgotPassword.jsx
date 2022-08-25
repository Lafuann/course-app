/* eslint-disable */
import React, { useEffect } from "react";
import icBack from "../../../assets/img/ic-back.svg";
import logoLogin from "../../../assets/img/logo-login.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ResetPassword from "./ResetPassword";
import AuthService, { login } from "../../../store/services/AuthService";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../store/redux/actions/auth/login";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login);
  const [isChangePassword, setIsChangePassword] = useState(true);
  const state = useSelector(state => state.state)
  const [email, setEmail] = useState();
  const toChangePassword = (e) => {
    e.preventDefault();
    setIsChangePassword(true);
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (isChangePassword) {
      setIsChangePassword(false);
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = (e) => {
    dispatch(forgotPassword(email));
    
  };

  useEffect(() => {
    if (loginStatus.status === "success_forgot") {
      Swal.fire({
        icon: "success",
        text:loginStatus.message,
      }).then((res) => {
        if(res.isConfirmed) {
          navigate("/profile", { replace: "/login", replace: "/" });
          history.go(0);
        } else if (res.isDismissed) {
          navigate("/profile", { replace: "/login", replace: "/" });
          history.go(0);
        }
      })
    } else if (loginStatus.status === "failed_forgot") {
      Swal.fire(loginStatus.message);
    }
  }, [loginStatus]);

  return (
    <section className="account-section forgot">
      <div className="container-fluid">
        <div className="row d-flex justify-content-end">
          <div className="col-lg-9 pt-4">
            <a
              href=""
              className="logo "
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img src={logoLogin} />
            </a>
            <div className="form-account pt-5 mx-auto w-80">
              {/* <a href="" className="link-back" onClick={handleBack}>
                <img src={icBack} /> Back
              </a> */}
              {!isChangePassword ? (
                <ResetPassword />
              ) : (
                <>
                  <h2>Reset Password</h2>
                  <p>
                    We need your email to send you link to reset your password
                  </p>

                  <form>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-group mt-5">
                      {email ? (
                        <a
                          href="#"
                          className="btn btn-secondary-purple btn-pass"
                          onClick={handleSubmit}
                        >
                          Reset Password
                        </a>
                      ) : (
                        <button
                          disabled
                          className="btn btn-secondary-purple btn-pass"
                        >
                          Reset Password
                        </button>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
