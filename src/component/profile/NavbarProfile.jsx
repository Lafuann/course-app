/* eslint-disable */
import React, { useState, useEffect } from "react";
import activity from "../../assets/img/icon/activity.svg";
import transaction from "../../assets/img/icon/transaction.svg";
import cv from "../../assets/img/icon/cv.svg";
import edit from "../../assets/img/icon/edit.svg";
import pass from "../../assets/img/icon/pass.svg";
import locWhite from "../../assets/img/icon/loc white.svg";
import profile from "../../assets/img/profile.png";
import { useNavigate, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import { logout, resetStatus } from "../../store/redux/actions/auth/login";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/css/main.css";
import "../../assets/css/mobile.css";
import "../../assets/css/custom-by-dev.css";
import { getUser } from "../../store/redux/actions/profile/user";
import Swal from "sweetalert2";

const NavbarProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutStatus = useSelector((state) => state.login.status);
  const dataUser = useSelector((state) => state.user.user.data);
  const location = useLocation();
  const [user, setUser] = useState([]);
  const authToken = localStorage.getItem("token");

  const history = createBrowserHistory();
  const handleProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
    history.go(0);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/profile/edit");
    history.go(0);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    navigate("/profile/changepassword");
  };

  const handleCV = (e) => {
    e.preventDefault();
    navigate("/profile/cv");
    history.go(0);
  };

  const handleTransaction = () => {
    navigate("/profile/transaction");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (logoutStatus === "logged out") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You are logged out!",
      }).then((res) => {
        if (res.isConfirmed) {
          dispatch(resetStatus());
        } else if (res.isDismissed) {
          dispatch(resetStatus());
        }
      });
      localStorage.clear();
    } else if (logoutStatus === "success logout") {
      navigate("/");
      history.go(0);
    }
  }, [logoutStatus]);

  useEffect(() => {
    if (authToken) {
      dispatch(getUser());
    }
  }, []);

  useEffect(() => {
    if (dataUser) {
      setUser(dataUser.user);
    }
  }, [dataUser]);

  return (
    <div className="card card-profile">
      <div className="card-header header-card-profile">
        <div className="img-profile">
          <img
            alt="pict"
            src={user?.photo?.thumb.url ? user.photo.thumb.url : profile}
          />
        </div>
        <div className="text-profile">
          <h5>{user.full_name}</h5>
          <p>{user.job}</p>
          <p>
            <span>
              <img alt="pict" src={locWhite} />
            </span>
            {user.city}
          </p>
        </div>
      </div>
      <div className="card-body body-profile-menu">
        <div className="profile-menu">
          <a
            onClick={handleProfile}
            className={`cursor-pointer ${
              location.pathname === "/profile"
                ? "active"
                : location.pathname === "/profile/detailcourse"
                ? "active"
                : location.pathname === "/payment"
                ? "active"
                : ""
            }`}
          >
            <p>
              <span>
                <img src={activity} />
              </span>
              My Courses
            </p>
          </a>
          <a
            onClick={handleTransaction}
            className={`cursor-pointer ${
              location.pathname === "/profile/transaction" ? "active" : ""
            }`}
          >
            <p>
              <span>
                <img src={transaction} />
              </span>
              My Transactions
            </p>
          </a>
          {/* <a
            onClick={handleCV}
            className={`cursor-pointer ${
              location.pathname === "/profile/cv" ? "active" : ""
            }`}
          >
            <p>
              <span>
                <img src={cv} />
              </span>
              My Curriculum Vitae
            </p>
          </a> */}
          <a
            onClick={handleEdit}
            className={`cursor-pointer ${
              location.pathname === "/profile/edit" ? "active" : ""
            }`}
          >
            <p>
              <span>
                <img src={edit} />
              </span>
              Edit Profile
            </p>
          </a>
          <a
            onClick={handleChangePassword}
            className={`cursor-pointer ${
              location.pathname === "/profile/changepassword" ? "active" : ""
            }`}
          >
            <p>
              <span>
                <img src={pass} />
              </span>
              Change Password
            </p>
          </a>
          <button
            type="button"
            className="btn btn-outline-green"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
