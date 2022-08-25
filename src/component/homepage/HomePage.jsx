/* eslint-disable */
import React from "react";
import logoLogin from "../../assets/img/logo-login.svg";
import Header from "../header";
// import "../../assets/css/landing.css";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* header */}
      <section id="section_landing-header" className="header-bg">
        <header>
          <div id="landing" className="container-fluid">
            <div className="row">
              <div className="col-lg-6 left-banner">
                <div className="bottom-landing">
                  <h1 className="mb-3">
                    Online Learning <br />
                    Designed For Real Life
                  </h1>
                  <p>
                    We will teach you to really understand and get work-ready
                    skills for your future career.
                  </p>

                  <p className="fw-700 f-16 mb-1 mt-2">Download our app</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start button-header">
                    <button type="button" className="btn">
                      <img src={require("../../assets/img/app-store.png")} />
                    </button>
                    <button type="button" className="btn">
                      <img src={require("../../assets/img/google-play.png")} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* <!-- Discover section--> */}
      <section id="section_landing-discover" className="discover mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="discover-left">
                <h5>ABOUT GIG UNIVERSITY</h5>
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
                          This course will assist you in the ongoing development
                          of your skills and abilities by focusing on the nature
                          of the self-development process.
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
                        <label>Courses taught by real-world experts </label>
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
                          We vet every instructor to ensure they have credible,
                          real-world experience in the subjects they’ll be
                          teaching.
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
                          Authentic topic and quiz are coherent, meaningful, and
                          purposeful activities which support student learning
                          by immersing learners in the demands of real life.
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
                          {" "}
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
                <img
                  src={require("../../assets/img/laptop-woman-mockup.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="linear-bg">
        {/* <!-- Grow skill section--> */}
        <section id="section_landing-skill" className="side-img mt-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="text-center">
                  <img
                    src={require("../../assets/img/img-skill.png")}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <h3 className="mb-4">
                  Grow your skills with Gig University E-Learning.
                </h3>
                <p className="mb-0">
                  Explore expert-led courses, available both for free and with a
                  subscription. Whether you want to learn leadership skills,
                  build a mobile app, or how to use software, Gig E-Learning has
                  something for you. Take marketing classes, get management
                  training, learn graphic design, take photography courses,
                  watch web and interactive design tutorials, and much more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Grow skill section--> */}
        <section id="section_landing-explore" className="side-img mt-5">
          <div className="container-fluid">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-md-5 offset-md-1">
                <div className="text-center">
                  <img
                    src={require("../../assets/img/img-explore.png")}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <h3 className="mb-4">
                  Explore curated courses for a guided learning experience
                </h3>
                <p className="mb-0">
                  Get access to more than 100+ of Gig University's most popular
                  courses for yourself. Learn and improve skills in business,
                  technology, design and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Grow skill section--> */}
        <section id="section_landing-build" className="side-img mt-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="text-center">
                  <img
                    src={require("../../assets/img/img-build.png")}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <h3 className="mb-4">
                  Build your skill set with video and pdf courses
                </h3>
                <p className="mb-0">
                  You can choose the course according to the field you want.
                  Then you will get learning videos and PDF materials according
                  to the chosen course topic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Grow skill section--> */}
        <section id="section_landing-score" className="side-img mt-5">
          <div className="container-fluid">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-md-5 offset-md-1">
                <div className="text-center">
                  <img
                    src={require("../../assets/img/img-score.png")}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <h3 className="mb-4">
                  Build your skill set with video and pdf courses
                </h3>
                <p className="mb-0">
                  Demonstrating your knowledge is a critical part of learning.
                  Gig E-learning courses and programs provide a space to
                  practice with quizzes. You'll get score from each quiz you
                  take.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- MENGAPA GIG UNIVERSITY section--> */}
      <section className="why-gig py-5">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-md-5">
              <h4>MENGAPA GIG UNIVERSITY</h4>
              <h2>
                What did you get at
                <br />
                GIG University?
              </h2>
              <img
                src={require("../../assets/img/why-gig.png")}
                className="img-abso-left"
              />
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-5">
                  <div className="box">
                    <h5>Thrive by learning the latest skills.</h5>
                    <p>
                      Gig E-learning courses help you explore new topics and
                      gain new skills.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 offset-md-2">
                  <div className="box">
                    <h5>A broad selection of courses & training</h5>
                    <p>
                      Choose from hundreds of free courses or pay to earn a
                      Course or Specialization Certificate.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="box">
                    <h5>Find a trending skills needed</h5>
                    <p>
                      Get to know the latest trending skills needed and improve
                      your career prospects with it.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 offset-md-2">
                  <div className="box">
                    <h5>Browse a Job and build your career</h5>
                    <p>
                      Search, find and apply to job opportunities for you next
                      career.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <div className="button-header">
                    <button type="button" className="btn">
                      <img src={require("../../assets/img/app-store.png")} />
                    </button>
                    <button type="button" className="btn">
                      <img src={require("../../assets/img/google-play.png")} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner bottom section--> */}
      <section className="bottom-banner">
        <div className="container-fluid">
          <div className="download-app p-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-white">
                  Download Aplikasi
                  <br />
                  GIG University
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

      {/* <!-- Help Us section--> */}
      <section className="py-5 help-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="text-center">
                <h2>Need Our Help?</h2>
                <p className="my-4">
                  If you’re a learner on the GIG University platform and have
                  questions or need technical assistance, please visit our
                  Learner Help Center Or you can chat us for further questions.
                </p>
                <ul className="list-unstyled d-flex align-items-center justify-content-center">
                  <li>
                    <a href="" className="btn btn-secondary-purple">
                      Chat Us Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Help Us section--> */}
      <footer className="home-footer py-5">
        <div className="container-fluid text-center">
          <div className="mb-4">
            <a href="">
              <img src={logoLogin} />
            </a>
          </div>
          <ul className="mb-4 list-unstyled">
            <li>
              <a href="">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <p className="m-0">
            Copyright © 2020. GIG University. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
