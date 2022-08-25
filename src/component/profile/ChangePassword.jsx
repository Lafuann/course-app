/* eslint-disable */
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import NavbarProfile from "./NavbarProfile";
import Header from "../header";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/mobile.css";
import "../../assets/css/profile.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  clearMessage,
} from "../../store/redux/actions/profile/user";

const ChangePassword = () => {
  const initialErrors = {
    recent: null,
    new: null,
    confirm: null,
  };
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [errors, setErrors] = useState(initialErrors);
  const [showRecentPass, setshowRecentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [user, setUser] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [show, setShow] = useState({ visible: false, message: "" });

  useEffect(async () => {
    const dataUser = JSON.parse(localStorage.getItem("users"));
    if (dataUser) {
      setUser(dataUser);
    }
  }, []);

  // validation
  useEffect(() => {
    if (oldPassword) {
      setErrors({
        ...errors,
        recent: null,
      });
    }
  }, [oldPassword]);

  useEffect(() => {
    if (newPassword.length === 0) {
      setErrors({ ...errors, new: null });
    } else if (newPassword.length < 8) {
      setErrors({
        ...errors,
        new: "Password must be 8 character long!",
      });
    } else if (newPassword) {
      setErrors({
        ...errors,
        new: null,
      });
    }
  }, [newPassword]);

  useEffect(() => {
    if (passwordConfirm) {
      setErrors({
        ...errors,
        confirm: null,
      });
    }
  }, [passwordConfirm]);
  // end

  const handleChangeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPassword && !newPassword && !passwordConfirm) {
      setErrors({
        recent: "Please input your recent password!",
        new: "Please input your new password!",
        confirm: "Confirm Password is Required!",
      });
    } else if (!oldPassword) {
      setErrors({
        ...errors,
        recent: "Please input your recent password!",
      });
    } else if (!newPassword) {
      setErrors({
        ...errors,
        new: "Please input your new password!",
      });
    } else if (!passwordConfirm) {
      setErrors({
        ...errors,
        confirm: "Confirm Password is Required!",
      });
    } else if (passwordConfirm !== newPassword) {
      setErrors({
        ...errors,
        confirm: "Password is doesn't match!",
      });
    } else {
      dispatch(changePassword(oldPassword, newPassword, passwordConfirm));
    }
  };

  useEffect(() => {
    if (userState?.message === "Please retry again") {
      setShow({ visible: true, message: userState.message });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (userState.status === "success_change") {
      setShow({ visible: true, message: "" });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setOldPassword("");
      setNewPassword("");
      setPasswordConfirm("");
    }
  }, [userState]);

  // useEffect(() => {
  //   if (show === true) {
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 5000);
  //   }
  // }, [show]);

  return (
    <>
      <div className="menu-top sticky-on-top">
        <Header />
      </div>

      {/* profile section */}
      <section className="profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card card-profile">
                <NavbarProfile />
              </div>
            </div>
            <div className="col-md-9">
              <div className="section-analistics">
                <h3>Change Password</h3>
                <div className="card card-edit-prof">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        {show.visible === true && show.message === "" ? (
                          <div className="alert alert-success alert-dismissible fade show">
                            <strong>Success!</strong>{" "}
                            {userState
                              ? `${userState.message}.`
                              : "Your Password has been changed."}
                            <a
                              className="btn-close"
                              onClick={(e) => {
                                e.preventDefault();
                                setShow(false);
                                dispatch(clearMessage());
                              }}
                              aria-label="Close"
                            ></a>
                          </div>
                        ) : show.visible === true &&
                          show.message === "Please retry again" ? (
                          <div className="alert alert-danger alert-dismissible fade show">
                            <strong>Failed!</strong>{" "}
                            {userState
                              ? `${userState.message}.`
                              : "Your Password has been changed."}
                            <a
                              className="btn-close"
                              onClick={(e) => {
                                e.preventDefault();
                                setShow(false);
                                dispatch(clearMessage());
                              }}
                              aria-label="Close"
                            ></a>
                          </div>
                        ) : null}
                        <form
                          className="edit-profil-form"
                          onSubmit={handleSubmit}
                        >
                          <div className="form-group input-wrapper">
                            <label className="control-label" htmlFor="password">
                              Recent Password
                            </label>
                            <input
                              type={showRecentPass ? "text" : "password"}
                              id="password"
                              className={`form-control ${
                                errors.recent ? "border-error" : ""
                              }`}
                              placeholder="Enter your recent password"
                              onChange={handleChangeOldPassword}
                              value={oldPassword}
                            />
                            {showRecentPass ? (
                              <i
                                style={{
                                  bottom: `${errors.recent ? "41px" : "16px"}`,
                                }}
                                className="toggle-password eye-btn fa fa-fw fa-eye"
                                onClick={() =>
                                  setshowRecentPass(!showRecentPass)
                                }
                              ></i>
                            ) : (
                              <i
                                style={{
                                  bottom: `${errors.recent ? "41px" : "16px"}`,
                                }}
                                className="toggle-password eye-btn fa fa-fw fa-eye-slash"
                                onClick={() =>
                                  setshowRecentPass(!showRecentPass)
                                }
                              ></i>
                            )}
                            {errors.recent && (
                              <p className="text-danger">{errors.recent}</p>
                            )}
                          </div>
                          <div className="mb-3 input-wrapper">
                            <label className="control-label" htmlFor="password">
                              New Password
                            </label>
                            <input
                              type={showNewPass ? "text" : "password"}
                              id="password"
                              className={`form-control ${
                                errors.new !== null ? "border-error" : ""
                              }`}
                              placeholder="Enter your recent password"
                              onChange={handleChangeNewPassword}
                              value={newPassword}
                            />

                            {showNewPass ? (
                              <i
                                style={{
                                  bottom: `${errors.new ? "66px" : "42px"}`,
                                }}
                                className="toggle-password eye-btn fa fa-fw fa-eye"
                                onClick={() => setShowNewPass(!showNewPass)}
                              ></i>
                            ) : (
                              <i
                                style={{
                                  bottom: `${errors.new ? "66px" : "42px"}`,
                                }}
                                className="toggle-password eye-btn fa fa-fw fa-eye-slash"
                                onClick={() => setShowNewPass(!showNewPass)}
                              ></i>
                            )}
                            <div id="emailHelp" className="form-text">
                              Password must be 8 character long
                            </div>
                            {errors.new !== null && (
                              <p className="text-danger">{errors.new}</p>
                            )}
                          </div>
                          <div className="mb-3 input-wrapper">
                            <label className="control-label" htmlFor="password">
                              Confirm New Password
                            </label>
                            <input
                              type={showConfirmPass ? "text" : "password"}
                              id="password"
                              className={`form-control ${
                                errors.confirm ? "border-error" : ""
                              }`}
                              placeholder="Enter your recent password"
                              onChange={handleChangePasswordConfirm}
                              value={passwordConfirm}
                            />
                            {showConfirmPass ? (
                              <i
                                style={{
                                  bottom: `${errors.confirm ? "65px" : "41px"}`,
                                }}
                                className="toggle-password eye-btn fa fa-fw fa-eye"
                                onClick={() =>
                                  setShowConfirmPass(!showConfirmPass)
                                }
                              ></i>
                            ) : (
                              <i
                                style={{
                                  bottom: `${errors.confirm ? "65px" : "41px"}`,
                                }}
                                className="toggle-password eye-btn fa fa-fw fa-eye-slash"
                                onClick={() =>
                                  setShowConfirmPass(!showConfirmPass)
                                }
                              ></i>
                            )}
                            <div id="emailHelp" className="form-text">
                              Password must be 8 character long
                            </div>
                            {errors.confirm && (
                              <p className="text-danger">{errors.confirm}</p>
                            )}
                          </div>
                          <div className="mt-5 text-end">
                            <button
                              type="submit"
                              className="profile btn btn-secondary-purple"
                              onClick={handleSubmit}
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
      <a href="#" id="scroll">
        <img src={require("../../assets/img/back-to-top.png")} alt="" />
      </a>
    </>
  );
};

export default ChangePassword;
