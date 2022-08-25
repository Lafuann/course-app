/*eslint-disable*/
import React from "react";
import Header from "../header";
import NavbarProfile from "./NavbarProfile";
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/profile.css";
import "../../assets/css/mobile.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBuyHistory } from "../../store/redux/actions/learning/course";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import moment from "moment";

const MyTransaction = () => {
  moment.locale("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bookedCourse, setBookedCourse] = useState([]);
  const booked = useSelector((state) => state.course.buyHistory);
  const [paidCourse, setPaidCourse] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(1);
  const [statusFetch, setStatusFetch] = useState(false);

  useEffect(() => {
    dispatch(getBuyHistory());
    setStatusFetch(true);
  }, []);

  useEffect(() => {
    if (statusFetch) {
      if (booked.status === 200) {
        setBookedCourse(booked.data.bookings);
        setBookings(booked.data);
        setPaidCourse(
          bookedCourse.filter((courses) => courses.order_status === 1)
        );
      }
    }

    if (status) {
      if (counter === isNaN) {
        dispatch(getBuyHistory(counter));
        setStatus(false);
      } else {
        dispatch(getBuyHistory(counter));
        setStatus(false);
      }
    }
  }, [booked, status, counter]);

  const handlePageClick = (e) => {
    setCounter(e.nextSelectedPage + 1);
    setStatus(true);
  };

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
                <h3>My Transactions</h3>
                <div className="row search-row">
                  <div className="col-md-4"></div>
                  <div className="col-md-5">
                    <div className="custom-search-input">
                      <div className="input-group col-md-12">
                        <input
                          type="text"
                          className=" search-query form-control"
                          placeholder="Search activity..."
                        />
                        <button className="btn " type="button">
                          <span className="fa fa-search"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle form-select filter-input form-control"
                        type="button"
                      >
                        Filter
                      </button>
                      <form className="dropdown-menu filter-dropdown dropdown-menu-end">
                        <div className="row">
                          <div className="col-md-12">
                            <h2>Status</h2>
                            <ul className="list-unstyled list-checkbox mb-0">
                              <li>
                                <div className="checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox_1_status"
                                  />
                                  <label htmlFor="checkbox_1_status">
                                    All Status
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox_2_status"
                                  />
                                  <label htmlFor="checkbox_2_status">
                                    Waiting
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox_3_status"
                                  />
                                  <label htmlFor="checkbox_3_status">
                                    On Progress
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox_4_status"
                                  />
                                  <label htmlFor="checkbox_4_status">
                                    Done
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox_5_status"
                                  />
                                  <label htmlFor="checkbox_5_status">
                                    Cancel
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-12 mt-4">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-secondary-purple">
                                  Apply
                                </button>
                              </div>
                              <div className="col-md-6">
                                <button className="btn btn-secondary-custom text-purple">
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <ul
                      className="nav nav-pills mb-3 nav-tab-activity"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li
                        className="nav-item tab-activity "
                        role="presentation"
                      >
                        <button
                          className="nav-link active"
                          id="pills-course-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-course"
                          type="button"
                          role="tab"
                          aria-controls="pills-course"
                          aria-selected="true"
                        >
                          All Transaction
                        </button>
                      </li>
                      <li className="nav-item tab-activity" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-training-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-training"
                          type="button"
                          role="tab"
                          aria-controls="pills-training"
                          aria-selected="false"
                        >
                          Waiting for Payment
                        </button>
                      </li>
                      <li className="nav-item tab-activity" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-job-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-job"
                          type="button"
                          role="tab"
                          aria-controls="pills-job"
                          aria-selected="false"
                        >
                          Paid
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* All transaction */}
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-course"
                      role="tabpanel"
                      aria-labelledby="pills-course-tab"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          {bookedCourse.map((course, index) => {
                            return (
                              <>
                                {course && bookedCourse !== null ? (
                                  <div className="transaction-box">
                                    <div className="head-transaction">
                                      <div className="d-flex justify-content-between">
                                        <span>
                                          Transaction ID : {course.order_id}
                                        </span>
                                        <span>
                                          {moment(course.updated_at).format(
                                            "D MMM Y"
                                          )}{" "}
                                          ||{" "}
                                          {moment(course.updated_at).format(
                                            "h:mm:ss a"
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between body-transaction">
                                      <div className="transaction-info">
                                        <div className="d-flex">
                                          <h3>{course.name}</h3>
                                          {course.order_status === 0 ? (
                                            <span className="badge-purple">
                                              Waiting for payment
                                            </span>
                                          ) : (
                                            <span className="badge-blue">
                                              Paid
                                            </span>
                                          )}
                                        </div>
                                        <p className="author">
                                          {course.provider}
                                        </p>
                                        <p>
                                          Total Payment :
                                          <CurrencyFormat
                                            value={course.order_fee}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rp. "}
                                            renderText={(value) => (
                                              <span className="price-big">
                                                {value}
                                              </span>
                                            )}
                                          />
                                        </p>
                                      </div>
                                      {course.order_status === 0 ? (
                                        <a
                                          href={course.payment_detail}
                                          target="_blank"
                                          className="btn btn-secondary-purple"
                                        >
                                          Pay Now
                                        </a>
                                      ) : (
                                        <Link
                                          href=""
                                          className="btn btn-primary-custom"
                                          to={{
                                            pathname: `/learning/${course.course_id}`,
                                          }}
                                          onClick={() => {window.location.href=`/learning/${course.course_id}`}}
                                        >
                                          <a>Start Courses</a>
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  bookedCourse.length === null && (
                                    <span className="text-center mt-4 empty-course-text">
                                      You don't have any course.
                                    </span>
                                  )
                                )}
                              </>
                            );
                          })}
                        </div>
                      </div>
                      <div className="App">
                        <ReactPaginate
                          previousLabel={"prev"}
                          nextLabel={"next"}
                          breakLabel={"..."}
                          disabledClassName={"nextLabel"}
                          breakClassName={"break-me"}
                          pageCount={bookings.last_page}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={3}
                          onClick={(e) => handlePageClick(e)}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                        />
                      </div>
                    </div>

                    {/* Waiting for Payment */}
                    <div
                      className="tab-pane fade"
                      id="pills-training"
                      role="tabpanel"
                      aria-labelledby="pills-job-tab"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          {bookedCourse
                            .filter((courses) => courses.order_status === 0)
                            .map((course, index) => {
                              return (
                                <>
                                  <div className="transaction-box">
                                    <div className="head-transaction">
                                      <div className="d-flex justify-content-between">
                                        <span>
                                          Transaction ID : {course.order_id}
                                        </span>
                                        <span>
                                          {moment(course.updated_at).format(
                                            "D MMM Y"
                                          )}{" "}
                                          ||{" "}
                                          {moment(course.updated_at).format(
                                            "h:mm:ss a"
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between body-transaction">
                                      <div className="transaction-info">
                                        <div className="d-flex">
                                          <h3>{course.name}</h3>
                                          <span className="badge-purple">
                                            Waiting for payment
                                          </span>
                                        </div>
                                        <br />
                                        {/* <p className="author">Martin Perhiniak</p> */}
                                        <p>
                                          Total Payment :
                                          <CurrencyFormat
                                            value={course.order_fee}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rp. "}
                                            renderText={(value) => (
                                              <span className="price-big">
                                                {value}
                                              </span>
                                            )}
                                          />
                                          {/* <span className="old-price">
                                        Rp. 2.800.000
                                      </span> */}
                                        </p>
                                      </div>
                                      <a
                                        href={course.payment_detail}
                                        target="_blank"
                                        className="btn btn-secondary-purple"
                                      >
                                        Pay Now
                                      </a>
                                    </div>
                                  </div>
                                  {/* :
                              <div className="transaction-box">
                                <span className="text-center mt-4 empty-course-text">
                                  You don't have any course.
                                </span>
                              </div>
                              } */}
                                </>
                              );
                            })}
                        </div>
                        <div className="App">
                          <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            disabledClassName={"next"}
                            breakClassName={"break-me"}
                            pageCount={bookings.last_page}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onClick={(e) => handlePageClick(e)}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Paid Course */}
                    <div
                      className="tab-pane fade"
                      id="pills-job"
                      role="tabpanel"
                      aria-labelledby="pills-job-tab"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          {bookedCourse
                            .filter((courses) => courses.order_status === 1)
                            .map((course) => {
                              return (
                                <>
                                  <div className="transaction-box">
                                    <div className="head-transaction">
                                      <div className="d-flex justify-content-between">
                                        <span>
                                          Transaction ID : {course.order_id}
                                        </span>
                                        <span>
                                          {moment(course.updated_at).format(
                                            "D MMM Y"
                                          )}{" "}
                                          ||{" "}
                                          {moment(course.updated_at).format(
                                            "h:mm:ss a"
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between body-transaction">
                                      <div className="transaction-info">
                                        <div className="d-flex">
                                          <h3>{course.name}</h3>
                                          <span className="badge-blue">
                                            Paid
                                          </span>
                                        </div>
                                        <br />
                                        {/* <p className="author">Martin Perhiniak</p> */}
                                        <p>
                                          Total Payment :
                                          <CurrencyFormat
                                            value={course.order_fee}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Rp. "}
                                            renderText={(value) => (
                                              <span className="price-big">
                                                {value}
                                              </span>
                                            )}
                                          />
                                          {/* <span className="old-price">
                                      Rp. 2.800.000
                                    </span> */}
                                        </p>
                                      </div>
                                      <Link
                                        href=""
                                        className="btn btn-primary-custom"
                                        to={{
                                          pathname: `/learning/${course.course_id}`,
                                        }}
                                        onClick={() => {window.location.href=`/learning/${course.course_id}`}}
                                      >
                                        <a>Start Courses</a>
                                      </Link>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                        </div>
                        <div className="App">
                          <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            disabledClassName={"next"}
                            breakClassName={"break-me"}
                            pageCount={bookings.last_page}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onClick={(e) => handlePageClick(e)}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                          />
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
    </>
  );
};

export default MyTransaction;
