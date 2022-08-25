/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../../../store/redux/Authentication";
import { regisStep2 } from "../../../store/redux/actions/auth/regis";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";

const CreatePassword = (props) => {
  const initialErrors = {
    password: null,
    confirmPass: null,
  };
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  function passwordValidation() {
    if (password != confirmPass) {
      return true;
    }
  }

  const handleNextStep = (e) => {
    if (!password && !confirmPass) {
      setErrors({
        password: "Password is Required!",
        confirmPass: "Confirm Password is Required!",
      });
    } else if (!password) {
      setErrors({
        password: "Password is Required!",
        confirmPass: null,
      });
    } else if (!confirmPass) {
      setErrors({
        password: null,
        confirmPass: "Confirm Password is Required!",
      });
    } else {
      setErrors(initialErrors);
      if (!passwordValidation()) {
        e.preventDefault();
        dispatch(regisStep2(password));
        props.nextStep();
      } else {
        setErrors({
          ...errors,

          confirmPass: "Password is doesn't match!",
        });
      }
    }
  };

  useEffect(() => {
    if (password.length === 0) {
      setErrors({
        ...errors,
        password: null,
      });
    } else if (password.length <= 7) {
      setErrors({
        ...errors,
        password: "Password must be 8 characters long!",
      });
    } else {
      setErrors({
        ...errors,
        password: null,
      });
    }
  }, [password]);

  useEffect(() => {
    if (confirmPass.length === 0) {
      setErrors({ ...errors, confirmPass: null });
    } else if (!passwordValidation()) {
      setErrors({ ...errors, confirmPass: null });
    }
  }, [confirmPass]);

  return (
    <>
      <h2>Create Password</h2>
      <form className="pt-3">
        <div className="form-group input-wrapper">
          <label>Password</label>
          <input
            type={showPass ? "text" : "password"}
            className={`form-control ${
              errors.password === null ? "" : "border-error"
            }`}
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
          {errors.password ? (
            showPass ? (
              <i
                id="true"
                className="toggle-password eye-btn fa fa-fw fa-eye"
                onClick={() => setShowPass(!showPass)}
                style={{ top: "72px" }}
              ></i>
            ) : (
              <i
                className="toggle-password eye-btn fa fa-fw fa-eye-slash"
                onClick={() => setShowPass(!showPass)}
                style={{ top: "72px" }}
              ></i>
            )
          ) : showPass ? (
            <i
              className="toggle-password eye-btn fa fa-fw fa-eye"
              onClick={() => setShowPass(!showPass)}
            ></i>
          ) : (
            <i
              className="toggle-password eye-btn fa fa-fw fa-eye-slash"
              onClick={() => setShowPass(!showPass)}
            ></i>
          )}
          <small>Password must be 8 character long</small>
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>

        <div className="form-group input-wrapper">
          <label>Confirm Password</label>
          <input
            type={showConfirm ? "text" : "password"}
            className={`form-control ${
              errors.confirmPass ? "border-error" : ""
            }`}
            value={confirmPass}
            onChange={handleChangeConfirmPass}
            placeholder="Enter your password"
          />
          {errors.confirmPass ? (
            showConfirm ? (
              <i
                className="toggle-password eye-btn fa fa-fw fa-eye"
                onClick={() => setShowConfirm(!showConfirm)}
                style={{ top: "72px" }}
              ></i>
            ) : (
              <i
                className="toggle-password eye-btn fa fa-fw fa-eye-slash"
                onClick={() => setShowConfirm(!showConfirm)}
                style={{ top: "72px" }}
              ></i>
            )
          ) : showConfirm ? (
            <i
              className="toggle-password eye-btn fa fa-fw fa-eye"
              onClick={() => setShowConfirm(!showConfirm)}
            ></i>
          ) : (
            <i
              className="toggle-password eye-btn fa fa-fw fa-eye-slash"
              onClick={() => setShowConfirm(!showConfirm)}
            ></i>
          )}
          <small>Password must be 8 character long</small>
          {errors.confirmPass && (
            <p className="text-danger">{errors.confirmPass}</p>
          )}
        </div>
        <div className="form-group d-flex justify-content-end">
          {errors.password === null && errors.confirmPass === null ? (
            <a
              href="#"
              className="btn btn-secondary-purple"
              style={{ paddingLeft: "40px", paddingRight: "40px" }}
              onClick={handleNextStep}
            >
              Next
            </a>
          ) : (
            <button
              href="#"
              className="btn btn-secondary-purple"
              style={{ paddingLeft: "40px", paddingRight: "40px" }}
              disabled
            >
              Next
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default CreatePassword;
