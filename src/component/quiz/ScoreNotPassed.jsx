import React from "react";
import Header from "../header";
import deaf from "../../assets/img/icon/deaf.svg";
import smile from "../../assets/img/icon/smile.svg";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/education-learning.css";
import "../../assets/css/mobile.css";

const ScoreNotPassed = () => {
  return (
    <>
      <div className="menu-top menu-fixed">
        <Header />
      </div>
      <div className="education-learning">
        <div className="education-top">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#!">My Course</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">Figma 2020 Masterclass</a>
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
                <img src={deaf} className="mx-2" alt="" /> English, Bahasa,
                Germany, French,Spanish
              </p>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
        </div>

        <div className="education-bottom score">
          <div className="container-fluid quiz">
            <div className="top-quiz row">
              <div className="col-md-12">
                <h4 className="p-0">Quiz : Introduction to Figma Design</h4>
              </div>
            </div>
            <div className="bottom-quiz row">
              <div className="col-md-10 offset-md-1 py-5 my-5">
                <div className="row">
                  <div className="col-md-5">
                    <h3>Here are your test results</h3>
                    <h5 className="mt-4">
                      Thank you for participating in the Lesson 1. How to
                      Understand FIgma Quiz
                    </h5>
                    <p className="mt-4">
                      You have completed the Lesson 1 Quiz.
                      <br />
                      To see the detailed results of this quiz please click the
                      button below
                    </p>
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <a href="#!" className="btn btn-secondary-purple">
                          View Detail Score
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a
                          href="#!"
                          className="btn btn-outline-secondary-custom"
                        >
                          Continue Next Lesson
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 offset-md-1">
                    <div className="row chart-score position-relative">
                      <div className="col-md-10 offset-md-1">
                        <div className="box-chart">
                          <div className="piechartWrapper">
                            <div
                              className="piechart"
                              id="not-passed"
                              data-percent="25"
                            >
                              <img src={smile} className="smile" alt="" />
                              <h5 className="text-score">Score</h5>
                              <span>25</span>
                            </div>
                            <div className="text-center mb-4">
                              <div className="text-not-passed w-auto d-inline-block">
                                Not PASSED
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-score">
                      <ul className="row mb-0 list-unstyled">
                        <li className="col-md-4">
                          <h5 className="text-green">25%</h5>
                          <p>Correct answer</p>
                        </li>
                        <li className="col-md-4">
                          <h5 className="text-red">72%</h5>
                          <p>Wrong answer</p>
                        </li>
                        <li className="col-md-4">
                          <h5 className="text-dark">3%</h5>
                          <p>Not answered</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreNotPassed;
