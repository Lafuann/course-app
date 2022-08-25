/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import logoLogin from "../assets/img/logo-login.svg";
import IcSearch from "../assets/img/icon/search.svg";
import activity from "../assets/img/icon/activity.svg";
import transaction from "../assets/img/icon/transaction.svg";
// import cv from "../assets/img/icon/cv.svg";
import edit from "../assets/img/icon/edit.svg";
import pass from "../assets/img/icon/pass.svg";
import profile from "../assets/img/profile.png";
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/mobile.css";
import scrollToTop from "../utils/scrollToTop";
import { useSelector, useDispatch } from "react-redux";
import { logout, resetStatus } from "../store/redux/actions/auth/login";
import { getUser } from "../store/redux/actions/profile/user";
import { getAllCourse } from "../store/redux/actions/learning/course";
import { getAllCategory } from "../store/redux/actions/learning/category";
import { searchCourse } from "../store/redux/actions/learning/course";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const logoutStatus = useSelector((state) => state.login.status);
  const dataUser = useSelector((state) => state.user.user.data);
  const [user, setUser] = useState();
  const [auth, setAuth] = useState();
  const history = createBrowserHistory();
  const [search, setSearch] = useState("");
  const authToken = localStorage.getItem("token");
  const getCategory = useSelector((state) => state.category.category);
  const [categories, setCategories] = useState([]);
  const courseStatus = useSelector((state) => state.course.status);

  const handleHome = () => {
    navigate("/");
    history.go(0);
  };

  const handleToLogin = () => {
    navigate("/login");
  };

  const handleToRegister = () => {
    navigate("/register");
  };

  const handleCourse = (course) => {
    navigate("/education", { state: { course_name: course } });
  };

  const handleProfile = (e) => {
    navigate("/profile");
    history.go(0)
  };

  const handleFaq = () => {
    navigate("/faq");
  };

  const handleEdit = () => {
    navigate("/profile/edit");
    history.go(0);
  };

  const handleChangePassword = () => {
    navigate("/profile/changepassword");
    history.go(0)
  };

  const handleTransaction = () => {
    navigate("/profile/transaction");
    history.go(0)
  };

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (authToken) {
      dispatch(getUser());
    }
  }, []);

  useEffect(() => {
    if (authToken) {
      setAuth(authToken);
    } else if (!authToken) {
      setAuth(null);
    }
  }, [authToken]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSubmitSearchCourse = (e) => {
    e.preventDefault();
    dispatch(searchCourse(search));
    setSearch("");
  };

  useEffect(() => {
    if (courseStatus === "search success") {
      navigate("/course-list");
    }
  }, [courseStatus]);

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
    if (dataUser) {
      setUser(dataUser.user);
    }
  }, [dataUser]);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  useEffect(() => {
    if (getCategory.status === 200) {
      setCategories(getCategory.data.data);
    }
  }, [getCategory]);

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid ">
        <a className="navbar-brand cursor-pointer">
          <img src={logoLogin} onClick={handleHome} />
          <img src={logoLogin} onClick={handleHome} />
        </a>

        {/* <!-- Search for Mobile --> */}
        <form
          className="col-12 col-lg-auto mb-3 mb-lg-0 mx-lg-3 for-mobile"
          onSubmit={handleSubmitSearchCourse}
        >
          <span className="form-control-feedback">
            <img src={IcSearch} />
          </span>
          <input
            type="search"
            className="form-control search-style"
            placeholder="What you want to learn?"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse has-search navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav navbar-custom">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      onClick={() => handleCourse(category.category_name)}
                    >
                      <img src={category.file_path} /> {category.category_name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* <!-- Search for dekstop --> */}
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 mx-lg-3 for-desktop"
            onSubmit={handleSubmitSearchCourse}
          >
            <span className="form-control-feedback">
              <img src={IcSearch} />
            </span>
            <input
              type="search"
              className="form-control search-style"
              placeholder="What you want to learn?"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          <ul className="navbar-nav navbar-custom">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Find a Job
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!" onClick={handleFaq}>
                FAQ
              </a>
            </li>
          </ul>
          {auth === null ? (
            <div className="d-flex ms-auto">
              <button
                type="button"
                className="btn btn-primary-custom"
                onClick={handleToRegister}
              >
                Register
              </button>
              <button
                type="button"
                className="btn btn-outline-primary-custom"
                onClick={handleToLogin}
              >
                Login
              </button>
            </div>
          ) : (
            <div className="d-flex text-end">
              <div className="dropdown after-log">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <div className="ava">
                      <img
                        src={
                          user?.photo.thumb.url ? user.photo.thumb.url : profile
                        }
                      />
                    </div>
                    <div className="info">
                      <h2>{user ? user.full_name : null}</h2>
                      <p className="mb-0">My Account</p>
                    </div>
                  </div>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <div className="profile-menu">
                    <a
                      onClick={handleProfile}
                      className={`cursor-pointer ${
                        location.pathname === "/profile"
                          ? "active"
                          : location.pathname === "/profile/detailcourse"
                          ? "active"
                          : location.pathname === "payment"
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
                        location.pathname === "/profile/transaction"
                          ? "active"
                          : ""
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
                        location.pathname === "/profile/changepassword"
                          ? "active"
                          : ""
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
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
