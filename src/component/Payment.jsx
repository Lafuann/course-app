/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Header from "./header";
import NavbarProfile from "./profile/NavbarProfile";
import feature1 from "../assets/img/feature-1.svg";
import feature2 from "../assets/img/feature-2.svg";
import feature3 from "../assets/img/feature-3.svg";
import feature4 from "../assets/img/feature-4.svg";
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/profile.css";
import "../assets/css/mobile.css";
import { useLocation } from "react-router-dom";
import CourseService from "../store/services/CourseService";

const Payment = () => {
  const { state } = useLocation();
  const [course, setCourse] = useState({});
  useEffect(() => {
    if (state) {
      CourseService.getCourseById(state.id)
        .then((res) => {
          setCourse(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [state]);
  return (
    <>
      <div className="menu-top">
        <Header />
      </div>
      <section className="profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <NavbarProfile />
            </div>
            <div className="col-md-9">
              <div className="section-analistics">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Select Payment Method</h3>
                    <div
                      className="accordion accordion-payment"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <label className="radio-payment">
                              <div className="d-flex">
                                <img
                                  src={require("../assets/img/payment-1.png")}
                                />
                                <div>
                                  <h6>Credit Or Debit Card</h6>
                                  <p>
                                    Use a credit or debit card to pay with
                                    automatic payment enable.
                                  </p>
                                </div>
                              </div>
                              <input
                                type="radio"
                                checked="checked"
                                name="radio"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <form>
                              <div className="form-group">
                                <label>Card Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name=""
                                  placeholder="Ex : 88387738xxx xxx "
                                />
                              </div>

                              <div className="form-group">
                                <label>Number of Cardholders</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name=""
                                  placeholder="Cardholders Name"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <label className="radio-payment">
                              {" "}
                              <div className="d-flex">
                                <img
                                  src={require("../assets/img/payment-2.png")}
                                />
                                <div>
                                  <h6>Paypal</h6>
                                  <p>
                                    Use a paypal to pay with automatic payment
                                    enable.
                                  </p>
                                </div>
                              </div>
                              <input
                                type="radio"
                                checked="checked"
                                name="radio"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </button>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card w-100 text-center">
                      <div className="card-body">
                        <img
                          src={course.cover_photo}
                          className="img-fluid mb-3"
                        />
                        <h5 className="fw-bold f-18">{course.title}</h5>
                        <p className="f-14 text-grey mb-4">
                          {course.provider_name}
                        </p>
                        <div className="price">
                          <h5 className="fw-bold f-22">
                            Rp{" "}
                            {course.discount_price
                              ? course.discount_price
                              : course.price}
                          </h5>
                          {course.discount_price ? (
                            <p className="chopped-price text-grey f-12">
                              Rp {course.price}
                            </p>
                          ) : null}
                          <button
                            type="button"
                            className="btn btn-secondary-purple w-100 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#PayNow"
                          >
                            PAY NOW
                          </button>
                        </div>
                        <div className="features mt-2">
                          <h5 className="text-left f-14 fw-bold mb-3">
                            This Course Include
                          </h5>
                          <div className="feature-1 d-flex">
                            <img className="img-fluid" src={feature1} />
                            <p className="ml-2 align-self-center mb-0">
                              13 Hours on-demand video
                            </p>
                          </div>
                          <div className="feature-2 d-flex">
                            <img className="img-fluid" src={feature2} />
                            <p className="ml-2 align-self-center mb-0">
                              Full Lifetime Update
                            </p>
                          </div>
                          <div className="feature-3 d-flex">
                            <img className="img-fluid" src={feature3} />
                            <p className="ml-2 align-self-center mb-0">
                              Access on Mobile and TV
                            </p>
                          </div>
                          <div className="feature-4 d-flex">
                            <img className="img-fluid" src={feature4} />
                            <p className="ml-2 align-self-center mb-0">
                              Certificate of Completion
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <div
        className="modal fade payment"
        id="PayNow"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header flex-column pb-1">
              <div className="text-center mb-4">
                <img src={require("../assets/img/success.png")} height={100} />
              </div>
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Transaction Success
              </h5>
              <div className="payment-divider"></div>
            </div>
            <div className="modal-body mt-4">
              <p className="subtitle f-14">Total Payment</p>
              <div
                className="text-center"
                style={{ position: "relative", top: "-20px" }}
              >
                <h5 className="fw-bold f-22 payment-purchase">
                  Rp{" "}
                  {course.discount_price ? course.discount_price : course.price}
                </h5>
              </div>
              <div className="description">
                <h5 className="text-center">
                  You make a payment using a credit/debit card, you have
                  completed your payment.
                </h5>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href=""
                className="btn btn-secondary-purple py-2 btn-start-course"
                data-bs-dismiss="modal"
              >
                Start Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
