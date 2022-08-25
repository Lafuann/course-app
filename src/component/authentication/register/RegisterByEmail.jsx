/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  changeEmail,
  changeFullName,
} from "../../../store/redux/Authentication";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";
import { regisStep1 } from "../../../store/redux/actions/auth/regis";

const RegisterByEmail = (props) => {
  const dispatch = useDispatch();
  const initialErrors = {
    fullName: null,
    email: null,
  };
  const [errors, setErrors] = useState(initialErrors);
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      const titleCase =
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      return titleCase;
    });
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setFullName(toTitleCase(e.target.value));
    }
  };

  const handleNextStep = (e) => {
    if (!fullName && !email) {
      setErrors({
        fullName: "Fullname is Required!",
        email: "Email is Required!",
      });
    } else if (!fullName) {
      setErrors({
        fullName: "Fullname is Required!",
        email: null,
      });
    } else if (!email) {
      setErrors({
        fullName: null,
        email: "Email is Required!",
      });
    } else {
      setErrors(initialErrors);
      e.preventDefault();
      dispatch(regisStep1(fullName, email));
      props.nextStep();
    }
  };

  useEffect(() => {
    const re = /^[a-zA-Z\s]*$/;
    if (re.test(fullName) === false) {
      setErrors({
        ...errors,
        fullName: "Please Input Only Letters!",
      });
    } else {
      setErrors({
        ...errors,
        fullName: null,
      });
    }
  }, [fullName]);

  useEffect(() => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email && regex.test(email) === false) {
      setErrors({
        ...errors,
        email: "Email is Invalid!",
      });
    } else {
      setErrors({
        ...errors,
        email: null,
      });
    }
  }, [email]);

  return (
    <>
      <h2>Personal Information</h2>
      <form className="pt-3">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className={`form-control ${
              errors.fullName === null ? "" : "border-error"
            }`}
            name="fullName"
            placeholder="Enter your Name"
            value={fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className={`form-control ${
              errors.email === null ? "" : "border-error"
            }`}
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group d-flex justify-content-end">
          {errors.fullName === null && errors.email === null ? (
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

export default RegisterByEmail;
