/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../Footer";
import NeedOurHelp from "../NeedOurHelp";
import backToTop from "../../assets/img/back-to-top.png";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/faq.css";
import "../../assets/css/mobile.css";

const FaqDetail = () => {
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
          <div className="container-fluid faq-ornament faq-detail">
            <div className="row align-items-center">
              <div className="col-md-10 offset-md-1 left-banner h-124">
                <div className="text-start">
                  <h1 className="display-5 fw-bold lh-1 mb-3">Help</h1>
                  <p className="text-start">What we can help?</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className="faq-section mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1 bottom">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="accordion accordion-flush"
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
                          What can students do at GIG University ?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="for-img mb-4"></div>
                          <p>
                            There is something about parenthood that gives us a
                            sense of history and a deeply rooted desire to send
                            on into the next generation the great things we have
                            discovered about life. And part of that is the
                            desire to instill in our children the love of
                            science, of learning.
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
                          How to apply to GIG University ?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="for-img mb-4"></div>
                          <p>
                            There is something about parenthood that gives us a
                            sense of history and a deeply rooted desire to send
                            on into the next generation the great things we have
                            discovered about life. And part of that is the
                            desire to instill in our children the love of
                            science, of learning.
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
                          How to make a course purchase ?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="for-img mb-4"></div>
                          <p>
                            There is something about parenthood that gives us a
                            sense of history and a deeply rooted desire to send
                            on into the next generation the great things we have
                            discovered about life. And part of that is the
                            desire to instill in our children the love of
                            science, of learning.
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
                          GIG University can be accessed from anywhere ?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="for-img mb-4"></div>
                          <p>
                            There is something about parenthood that gives us a
                            sense of history and a deeply rooted desire to send
                            on into the next generation the great things we have
                            discovered about life. And part of that is the
                            desire to instill in our children the love of
                            science, of learning.
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
                          How much does it cost to join GIG University ?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="for-img mb-4"></div>
                          <p>
                            There is something about parenthood that gives us a
                            sense of history and a deeply rooted desire to send
                            on into the next generation the great things we have
                            discovered about life. And part of that is the
                            desire to instill in our children the love of
                            science, of learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 offset-md-1 pt-4">
                  <ul className="right-menu list-unstyled">
                    <li>
                      <h2>More Topics</h2>
                    </li>
                    <li>
                      <a href="">Join to be a student</a>
                    </li>
                    <li>
                      <a href="">Service Pack</a>
                    </li>
                    <li>
                      <a href="">Payment</a>
                    </li>
                  </ul>
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

export default FaqDetail;
