/* eslint-disable */
import React from "react";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";

const ResetPassword = () => {
  return (
    <>
      <h2>Change Password</h2>
      <p>Please fill out the form below to set your new password.</p>
      <form>
        <div className="form-group">
          <label>New Password</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control border-end-0"
              placeholder="Enter your password"
              aria-label="Username"
              aria-describedby=""
            />
            <div className="input-group-append border-start-0">
              <span className="input-group-text" id="">
                <i className="fa fa-eye-slash eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="password-checker">
            <div className="row">
              <div className="col-4">
                <div className="item active">
                  <span className="icon"></span>
                  <span className="text">Uppercase</span>
                </div>
              </div>
              <div className="col-4">
                <div className="item active">
                  <span className="icon"></span>
                  <span className="text">Min. 8 Characters</span>
                </div>
              </div>
              <div className="col-4">
                <div className="item">
                  <span className="icon"></span>
                  <span className="text">Special Characters</span>
                </div>
              </div>
              <div className="col-4">
                <div className="item">
                  <span className="icon"></span>
                  <span className="text">Lowercase</span>
                </div>
              </div>
              <div className="col-4">
                <div className="item">
                  <span className="icon"></span>
                  <span className="text">Number</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Confirmation New Password</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control border-end-0"
              placeholder="Enter your password"
              aria-label="Username"
              aria-describedby=""
            />
            <div className="input-group-append border-start-0">
              <span className="input-group-text" id="">
                <i className="fa fa-eye-slash eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <a href="#" className="btn btn-secondary-purple btn-pass">
            Change Password
          </a>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
