/* eslint-disable */
import React from "react";
import search from "../../assets/img/icon/search.svg";
import logoLogin from "../../assets/img/logo-login.svg";
import deaf from "../../assets/img/icon/deaf.svg";
import stopwatch from "../../assets/img/icon/stopwatch.svg";
import quizResult from "../../assets/img/icon/quiz-result.svg";

const ReviewAnswer = () => {
  return (
    <>
      <div className="menu-top menu-fixed">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#!">
              <img src={require("../../assets/img/logo-gig-color.png")} />
              <img src={logoLogin} />
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 mx-lg-3 for-mobile">
              <span className="form-control-feedback">
                <img src={search} />
              </span>
              <input
                type="search"
                className="form-control search-style"
                placeholder="What you want to learn?"
                aria-label="Search"
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
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src={require("../../assets/img/education.png")} />
                        Education
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src={require("../../assets/img/training.png")} />
                        Training
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src={require("../../assets/img/career.png")} />
                        Career
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src={require("../../assets/img/school.png")} />
                        Scholarship
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src={require("../../assets/img/event.png")} />
                        Event
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src={require("../../assets/img/space.png")} />
                        Space
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src={require("../../assets/img/entertain.png")} />
                        Entertainment
                      </a>
                    </li>
                  </ul>
                </li>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 mx-lg-3 for-desktop">
                  <span className="form-control-feedback">
                    <img src={search} />
                  </span>
                  <input
                    type="search"
                    className="form-control search-style"
                    placeholder="What you want to learn?"
                    aria-label="Search"
                  />
                </form>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Find a Job
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    FAQ
                  </a>
                </li>
              </ul>
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
                      <div className="ava"></div>
                      <div className="info">
                        <h2>Intan Anastasia</h2>
                        <p className="mb-0">Akun Saya</p>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Section education content --> */}
      <div className="education-learning">
        <div className="education-top">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">My Course</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Figma 2020 Masterclass</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Lesson 1 . Introduction{" "}
                </li>
              </ol>
            </nav>
            <h2 className="mt-4">Design UI/UX with Figma - Introduction</h2>
            <div className="d-flex align-items-center">
              <p>
                Created by <strong>Martin Perhiniak</strong>
              </p>
              <p className="ms-5 d-flex align-items-center">
                <img src={deaf} className="mx-2" /> English, Bahasa, Germany,
                French,Spanish
              </p>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
        </div>

        <div className="education-bottom">
          <div className="container-fluid quiz">
            <div className="top-quiz row">
              <div className="col-md-4">
                <h4>Quiz : Introduction to Figma Design</h4>
              </div>
            </div>
            <div className="bottom-quiz row">
              <div className="col-md-3">
                <ul className="list-unstyled question-status mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="status current-question"></div>
                      <span className="ms-2">Current Question</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="status answered"></div>
                      <span className="ms-2">Correct answerd</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="status wrong-answered"></div>
                      <span className="ms-2">Wrong answerd</span>
                    </div>
                  </li>
                </ul>

                <ul className="list-unstyled total-question question-status">
                  <li>
                    <a href="" className="status answered">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="" className="status current-question">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      4
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      5
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      6
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      7
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      8
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      9
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      10
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      11
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      12
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      13
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      14
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      15
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      16
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      17
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      18
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      19
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      20
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      21
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      22
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      23
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      24
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      25
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      26
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      27
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      28
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      29
                    </a>
                  </li>
                  <li>
                    <a href="" className="status not-answered">
                      30
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">
                <div className="top-title">
                  <h2 className="mb-0">Question 2 of 30</h2>
                </div>
                <form>
                  <ul className="list-unstyled">
                    <li>
                      <h5>
                        2. Which color mode does a computer monitor use, and
                        which does a printer use?
                      </h5>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <ul className="answer-list list-unstyled mt-3">
                            <li>
                              <div className="edu radio">
                                <input
                                  type="radio"
                                  name="answer-01"
                                  id="01-a"
                                  checked
                                />
                                <label
                                  htmlFor="01-a"
                                  style={{ paddingLeft: "40px" }}
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="edu radio">
                                <input
                                  type="radio"
                                  name="answer-01"
                                  id="01-b"
                                  className="wrong"
                                />
                                <label
                                  htmlFor="01-b"
                                  style={{ paddingLeft: "40px" }}
                                >
                                  Monitor uses RGB, printer uses RGB
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="edu radio">
                                <input
                                  type="radio"
                                  name="answer-01"
                                  id="01-c"
                                />
                                <label
                                  htmlFor="01-c"
                                  style={{ paddingLeft: "40px" }}
                                >
                                  Monitor uses RGB, printer uses CMYK
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="edu radio">
                                <input
                                  type="radio"
                                  name="answer-01"
                                  id="01-d"
                                />
                                <label
                                  htmlFor="01-d"
                                  style={{ paddingLeft: "40px" }}
                                >
                                  Monitor uses RGB, printer uses RGB
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 text-center">
                          <img
                            src={require("../../assets/img/soal.jpg")}
                            className="question"
                          />
                        </div>
                      </div>
                    </li>
                  </ul>

                  <h3 className="key">
                    Your answer is <strong>B wrong</strong>. The correct answer
                    is <strong>A</strong>
                  </h3>

                  <div className="button-wrapper text-center d-flex align-items-center">
                    <a href="" className="btn btn-outline-secondary-custom">
                      Back
                    </a>
                    <button
                      id="btn-quiz-next"
                      className="btn btn-secondary-purple ms-auto"
                      tabIndex="0"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade confirmation"
        id="EndQuiz"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header flex-column pb-1">
              <div className="text-center mb-4">
                <img src={quizResult} />
              </div>
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Review of Quiz Results
              </h5>
            </div>
            <div className="modal-body">
              <h2 className="subtitle f-14">
                15 questions filled out of 30 questions
              </h2>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="progress custom-progress finish mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="text-center">
                    Are you sure you want to end this test?
                    <br />
                    Please double-check your answers before ending this test
                    session.
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href=""
                className="btn btn-outline-secondary-custom"
                data-bs-dismiss="modal"
              >
                Go Back
              </a>
              <a href="" className="btn btn-secondary-purple">
                Yes, I’m sure
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewAnswer;
