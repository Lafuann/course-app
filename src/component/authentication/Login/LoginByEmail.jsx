/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/redux/actions/auth/login";
import { createBrowserHistory } from "history";
import Swal from "sweetalert2";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";

const LoginByEmail = () => {
  const initialErrors = {
    email: null,
    password: null,
  };
  const navigate = useNavigate();
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login.status);
  const loginState = useSelector((state) => state.login);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(initialErrors);
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (loginStatus === "success") {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You are logged in!",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/");
          history.go(0);
        } else if (res.isDismissed) {
          navigate("/");
          history.go(0);
        }
      });
    } else if (loginState.message.data?.error) {
      if (loginState.message.data?.error.email)
        setErrors({
          ...errors,
          email: "Email " + loginState.message.data.error.email,
        });
    } else if (loginStatus === "failed") {
      setErrors({
        ...errors,
        password: loginState.message + " Email or Password is invalid!",
      });
    }
  }, [loginStatus]);

  return (
    <>
      <h2>Login by email</h2>
      <p>Fill the form below to login by email</p>
      {errors.email ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {errors.email}
          <div
            type="button"
            className="btn-close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setErrors(initialErrors)}
          />
        </div>
      ) : (
        errors.password && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {errors.password}
            <di
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setErrors(initialErrors)}
            />
          </div>
        )
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="text"
            className={`form-control ${
              errors.email ? "border border-danger" : ""
            }`}
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <input
              type={showPass ? "text" : "password"}
              className={`form-control ${
                errors.password ? "border border-danger" : "border-end-0"
              }`}
              name="password"
              placeholder="Enter your password"
              value={password}
              aria-label="password"
              onChange={handleChange}
            />
            <div className="input-group-append border-start-0">
              <span className="input-group-text" id="">
                {showPass ? (
                  <i
                    className="fa fa-eye eye cursor-pointer"
                    aria-hidden="true"
                    onClick={() => setShowPass(!showPass)}
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye-slash eye cursor-pointer"
                    aria-hidden="true"
                    onClick={() => setShowPass(!showPass)}
                  ></i>
                )}
              </span>
            </div>
          </div>
          <p className="text-end">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/forgot-password");
              }}
              // onClick={handleCourse}
            >
              Forgot Password?
            </a>
          </p>
        </div>
        <div className="form-group">
          {email && password ? (
            <button
              href="#"
              type="submit"
              className="btn btn-secondary-purple d-block"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Login
            </button>
          ) : (
            <a href="#" id="btn-login" className="btn d-block btn-disabled">
              Login
            </a>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginByEmail;
