/* eslint-disable */
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../header";
import NeedOurHelp from "../NeedOurHelp";
import SLiderExploreTopCourses from "./SliderExploreTopCourses";
import backToTop from "../../assets/img/back-to-top.png";
import SliderNewestCourse from "./SliderNewestCourse";
import SliderTestimoni from "./SliderTestimoni";
import "../../assets/css/main.css";
import "../../assets/css/mobile.css";
import "../../assets/css/custom-by-dev.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCourse } from "../../store/redux/actions/learning/course";

const Dashboard = () => {
  const [visible, setVisible] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const handleEducation = () => {
    navigate("/education", { state: { course_name: null } });
  };

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  const handleFindOut = (e) => {
    e.preventDefault();
    scrollToTop();
    navigate("/about");
  };
  return (
    <>
      <div className="menu-top">
        <Header />
      </div>
      <div className="header-bg">
        {/* <!-- Header--> */}
        <header>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 left-banner">
                <div className="">
                  <label>YOUR UNIVERSITY FOR LIFE</label>
                  <h1 className="display-5 fw-bold lh-1 mb-3">
                    GIG UNIVERSITY (GIGU)
                  </h1>
                  <p className="lead my-5">
                    Micro-Learning on the go. Just a click away.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start button-header">
                    <button
                      type="button"
                      className="btn btn-primary-custom px-4 me-md-2"
                      onClick={handleEducation}
                    >
                      Explore All Courses
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary-purple border border-white btn-lg px-4"
                      onClick={handleFindOut}
                    >
                      Find out more about GIGU
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-8 col-lg-6 right-banner">
                {/* <img src={banner[0].file_path} /> */}
                <img src={require("../../assets/img/img-header.png")} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <!-- Discover section--> */}
      <section className="discover">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="discover-left">
                <h5>GIG UNIVERSITY</h5>
                <h3>
                  Your Lifelong Journey <span>Starts Here!</span>
                </h3>
                <div
                  className="accordion accordion-flush accordion-discover"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="true"
                        aria-controls="flush-collapseOne"
                      >
                        <label>Acquire new knowledge and skills</label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>“Learn-To-Earn”</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <label>Courses taught by real-world experts</label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We vet every instructor and trainer to ensure they
                          have credibility and real-world experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <label>
                          Online learning designed for real life situations
                        </label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We provide authentic and purposeful learning
                          activities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <label>Learn at your convenience.</label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>Use your personal device(s) to learn on the go.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-right">
                <img
                  src={require("../../assets/img/laptop-woman-mockup.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Explore course section--> */}
      <SLiderExploreTopCourses />

      {/* <!-- Newest course section--> */}
      <SliderNewestCourse />

      {/* <!-- MENGAPA GIG UNIVERSITY section--> */}
      <section className="why-gig py-5">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-md-4">
              <h4>WHY GIG UNIVERSITY</h4>
              <h2>Why GigU?</h2>
              <img
                src={require("../../assets/img/why-gig.png")}
                className="img-abso-left"
              />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-5">
                  <div className="box">
                    <img src={require("../../assets/img/ic-why-2.png")} />
                    <br />
                    <h5>Value for money</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 offset-md-2">
                  <div className="box">
                    <img src={require("../../assets/img/ic-why-4.png")} />
                    <br />
                    <h5>Professional Digital Certification</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="box">
                    <img src={require("../../assets/img/ic-why-3.png")} />
                    <br />
                    <h5>
                      Creation of e-Portfolio as your online resume on GigU
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 offset-md-2">
                  <div className="box">
                    <img src={require("../../assets/img/ic-why-1.png")} />
                    <br />
                    <h5>Instructors who are experts in their areas. </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-12 text-center"
                  onClick={handleEducation}
                >
                  <a href="" className="btn btn-primary-custom">
                    Browse all courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimoni --> */}
      <SliderTestimoni />

      {/* <!-- Banner bottom section--> */}
      <section className="bottom-banner">
        <div className="container-fluid">
          <div className="download-app p-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-white">
                  Download our
                  <br />
                  GigU apps
                </h2>
                <p className="text-white text-start mt-4">
                  Now access to GIG University is easier and can be done
                  anywhere by downloading our Mobile Application. Available for
                  both Android and iOS users.
                </p>
                <ul className="list-unstyled d-flex mt-4">
                  <li className="me-3">
                    <a href="">
                      <img src={require("../../assets/img/app-store.png")} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={require("../../assets/img/google-play.png")} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 position-relative">
                <img
                  src={require("../../assets/img/app-download.png")}
                  className="img-fluid phone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <NeedOurHelp />
      <Footer />
      <button>
        {visible ? (
          <div className="scroll-to-top-btn visible">
            <img src={backToTop} alt="" onClick={scrollToTop} />
          </div>
        ) : (
          <div className="scroll-to-top-btn hidden">
            <img src={backToTop} alt="" onClick={scrollToTop} />
          </div>
        )}
      </button>
    </>
  );
};

export default Dashboard;
