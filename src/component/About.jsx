/* eslint-disable */
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import search from "../assets/img/icon/search.svg";
import backToTop from "../assets/img/back-to-top.png";
import logoLogin from "../assets/img/logo-login.svg";
import why01 from "../assets/img/icon/why-01.svg";
import why02 from "../assets/img/icon/why-02.svg";
import why03 from "../assets/img/icon/why-03.svg";
import why04 from "../assets/img/icon/why-04.svg";
import why05 from "../assets/img/icon/why-05.svg";
import why06 from "../assets/img/icon/why-06.svg";
import Header from "./header";
import NeedOurHelp from "./NeedOurHelp";

const About = () => {
  const [visible, setVisible] = useState();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <>
      <>
        <div className="menu-top sticky-on-top">
          {/* <!--<div className="top-head d-flex flex-wrap justify-content-center">
        <p>
          Courses as low as Rp129,000 ends Jan 28.| Succeed with skills that live on the leading-edge. 1 day left!
        </p>
      </div>--> */}
          <Header />
        </div>
        <div className="header-bg round-left-bottom">
          {/* <!-- Header--> */}
          <header>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 left-banner">
                  <div className="">
                    <label>ABOUT GIG UNIVERSITY</label>
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                      Lorem ipsum dollar sit amet
                    </h1>
                    <p className="lead my-5">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-6 right-banner">
                  <img src={require("../assets/img/img-header.png")} />
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
                    Discover Lifelong <span>Learning</span>
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
                          <label>Upgrade Yourself</label>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            This course will assist you in the ongoing
                            development of your skills and abilities by focusing
                            on the nature of the self-development process.
                          </p>
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
                            We vet every instructor to ensure they have
                            credible, real-world experience in the subjects
                            they’ll be teaching.
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
                          <label>Online Learning Designed For Real Life</label>
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
                            Authentic topic and quiz are coherent, meaningful,
                            and purposeful activities which support student
                            learning by immersing learners in the demands of
                            real life.
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
                          <label>
                            Learn at your own pace access on mobile and desktop
                          </label>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            With mobile learning, learners are now able to learn
                            in their own style and at their own pace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="discover-right">
                  <img src={require("../assets/img/laptop-woman-mockup.png")} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="visi-misi py-5">
          {/* <!-- Visi section --> */}
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 text-center px-3">
                <img
                  src={require("../assets/img/visi.png")}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 px-5">
                <div className="why-gig">
                  <h4>GIG UNIVERSITY VISION</h4>
                  <h2>“Grow your skills with Gig University E-Learning”</h2>
                  <p className="mb-0 mt-4">
                    Explore expert-led courses, available both for free and with
                    a subscription. Whether you want to learn leadership skills,
                    build a mobile app, or how to use software, Gig E-Learning
                    has something for you. Take marketing classes, get
                    management training, learn graphic design, take photography
                    courses, watch web and interactive design tutorials, and
                    much more.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center flex-row-reverse mt-5 pt-5">
              <div className="col-md-6 text-center px-3">
                <img
                  src={require("../assets/img/misi.png")}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 px-5">
                <div className="why-gig">
                  <h4>GIG UNIVERSITY MISSION</h4>
                  <h2>
                    “Explore curated courses for a guided learning experience”
                  </h2>
                  <p className="mb-0 mt-4">
                    Join a dynamic virtual classroom, where you'll be immersed
                    in experiential activities and collaborative group work with
                    your peers, while learning from and interacting with our
                    leading faculty and guest speakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      {/* <!-- MENGAPA GIG UNIVERSITY section--> */}
      <section className="why-gig on-about py-5">
        <div className="container-fluid position-relative">
          <h2 className="text-center">Why Gig University?</h2>
          <p className="text-center">
            A try out system that is easy to use anytime.
          </p>
          <ul className="row list-unstyled">
            <li className="col-md-4">
              <img src={why01} style={{ maxWidth: "25%" }} alt="" />
              <h3>Simple</h3>
              <p className="mb-0">
                Make it easy for users to take advantage of the try out
                platform. This feature can be seen from the dynamic and
                responsive web interface.
              </p>
            </li>
            <li className="col-md-4">
              <img src={why02} alt="" />
              <h3>Computer Based</h3>
              <p className="mb-0">
                Make it easy for users to take advantage of the try out
                platform. This feature can be seen from the dynamic and
                responsive web interface.
              </p>
            </li>
            <li className="col-md-4">
              <img src={why03} alt="" />
              <h3>Score</h3>
              <p className="mb-0">
                Make it easy for users to take advantage of the try out
                platform. This feature can be seen from the dynamic and
                responsive web interface.
              </p>
            </li>
            <li className="col-md-4">
              <img src={why04} alt="" />
              <h3>Graphic</h3>
              <p className="mb-0">
                Make it easy for users to take advantage of the try out
                platform. This feature can be seen from the dynamic and
                responsive web interface.
              </p>
            </li>
            <li className="col-md-4">
              <img src={why05} alt="" />
              <h3>Forum</h3>
              <p className="mb-0">
                Make it easy for users to take advantage of the try out
                platform. This feature can be seen from the dynamic and
                responsive web interface.
              </p>
            </li>
            <li className="col-md-4">
              <img src={why06} alt="" />
              <h3>Economis</h3>
              <p className="mb-0">
                Make it easy for users to take advantage of the try out
                platform. This feature can be seen from the dynamic and
                responsive web interface.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- Help Us section--> */}
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

export default About;
