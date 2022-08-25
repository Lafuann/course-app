/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../Footer";
import NeedOurHelp from "../NeedOurHelp";
import student from "../../assets/img/icon/student.svg";
import teacher from "../../assets/img/icon/teacher.svg";
import onlineCourse from "../../assets/img/icon/online-courses.svg";
import payment from "../../assets/img/icon/payment.svg";
import backToTop from "../../assets/img/back-to-top.png";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/faq.css";
import "../../assets/css/mobile.css";

const Faq = () => {
  const [visible, setVisible] = useState();

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
  return (
    <>
      <div className="menu-top">
        <Header />
      </div>
      <div className="header-bg header-inside">
        <header>
          <div className="container-fluid faq-ornament">
            <div className="row align-items-center">
              <div className="col-md-10 offset-md-1 left-banner h-124">
                <div className="text-center">
                  <h1 className="mb-3">Help</h1>
                  <p className="mb-4" style={{ maxWidth: "100%" }}>
                    What we can help ?
                  </p>
                  <div className="input-center mb-3 px-5">
                    <input
                      type="text"
                      placeholder="Type keywords : (eg: Payment Process)"
                      className="form-control icon-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className="faq-section mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1 top">
              <p className="px-4 mb-4">Problem Topic</p>
              <ul className="faq-category row list-unstyled">
                <li className="col-md-3">
                  <a href="" className="box">
                    <div className="img">
                      <img src={student} />
                    </div>
                    <h4>Student</h4>
                  </a>
                </li>
                <li className="col-md-3">
                  <a href="" className="box">
                    <div className="img">
                      <img src={teacher} />
                    </div>
                    <h4>Teacher</h4>
                  </a>
                </li>
                <li className="col-md-3">
                  <a href="" className="box">
                    <div className="img">
                      <img src={onlineCourse} />
                    </div>
                    <h4>Course</h4>
                  </a>
                </li>
                <li className="col-md-3">
                  <a href="" className="box">
                    <div className="img">
                      <img src={payment} />
                    </div>
                    <h4>Payment</h4>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 offset-md-2 bottom mt-5">
              <h2 className="mb-3">Most asked</h2>
              <p className="main f-20 text-center">
                Frequently asked questions?
              </p>

              <div
                className="accordion accordion-flush mt-5"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What is GIG University ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>
                        There is something about parenthood that gives us a
                        sense of history and a deeply rooted desire to send on
                        into the next generation the great things we have
                        discovered about life. And part of that is the desire to
                        instill in our children the love of science, of
                        learning.
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
                      Who can use GIG University ?
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
                        There is something about parenthood that gives us a
                        sense of history and a deeply rooted desire to send on
                        into the next generation the great things we have
                        discovered about life. And part of that is the desire to
                        instill in our children the love of science, of
                        learning.
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
                      GIG University can be accessed from anywhere ?
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
                        There is something about parenthood that gives us a
                        sense of history and a deeply rooted desire to send on
                        into the next generation the great things we have
                        discovered about life. And part of that is the desire to
                        instill in our children the love of science, of
                        learning.
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
                      How much does it cost to join GIG University ?
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
                        There is something about parenthood that gives us a
                        sense of history and a deeply rooted desire to send on
                        into the next generation the great things we have
                        discovered about life. And part of that is the desire to
                        instill in our children the love of science, of
                        learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      How to apply at GIG University?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>
                        There is something about parenthood that gives us a
                        sense of history and a deeply rooted desire to send on
                        into the next generation the great things we have
                        discovered about life. And part of that is the desire to
                        instill in our children the love of science, of
                        learning.
                      </p>
                    </div>
                  </div>
                </div>
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

export default Faq;
