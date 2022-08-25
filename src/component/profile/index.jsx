/* eslint-disable */
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../header";
import { Link } from "react-router-dom";
import NavbarProfile from "./NavbarProfile";
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/profile.css";
import "../../assets/css/mobile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBuyHistory,
  getCourseByUser,
} from "../../store/redux/actions/learning/course";
import ReactPaginate from "react-paginate";
import CourseCard from "./CourseCard";
import CourseCardInProgress from "./CourseCardInProgress";
import CourseCardDone from "./CourseCardDone";
import CourseWaitingPayment from "./CourseWaitingPayment";

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.user?.data?.user.email);
  const category = useSelector((state) => state.category);
  const myCourses = useSelector((state) => state.course.myCourses);
  const history = useSelector((state) => state.course.buyHistory);
  const coursesData = myCourses.data;
  const [coursePaid, setCoursePaid] = useState([]);
  const [bookedCourse, setBookedCourse] = useState([]);
  const [bookings, setbookings] = useState([]);
  const [title, setTitle] = useState([]);
  const [provider, setProvider] = useState();
  const [rating, setRating] = useState();
  const [tab, setTab] = useState("all");
  const [dropdown, setDropdown] = useState(false);
  const [unpaidCourse, setUnpaidCourse] = useState([]);
  const [cover, setCover] = useState();
  const [isFetch, setisFetch] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [pageIndex, setpageIndex] = useState(1);
  const [courseContent, setCourseContent] = useState();
  const [show, setShow] = useState(false);
  const [showCard, setshowCard] = useState(false);
  const [doneCourse, setDoneCourse] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [countInProgress, setcountInProgress] = useState(0);
  const [courseDone, setcourseDone] = useState([]);
  const [lesson, setlesson] = useState([]);

  const counterProgress = 0;
  let amt = 0;
  let count = 0;
  let row = 0;
  const arrayBlock = (coursePaid, x) => {
    const arr = coursePaid.slice();
    const blocks = [];
    while (arr.length) blocks.push(arr.splice(0, x));
    return blocks;
  };
  if (coursePaid) {
    if (coursePaid.length >= 2) {
      row = 2;
    } else {
      row = coursePaid.length;
    }
  }

  const countAmount = () => {
    count = amt++;
  };

  useEffect(() => {
    if (userEmail) {
      dispatch(getCourseByUser(userEmail));
    }
  }, [userEmail]);

  useEffect(() => {
    if (courseContent) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [courseContent]);

  useEffect(() => {
    if (coursesData && coursesData !== "Data Not Found!") {
      setCoursePaid(coursesData.filter((data) => data.order_status === 1));
    } else if (!coursesData) {
      setCoursePaid(null);
    } else if (coursesData === "Data Not Found!") {
      setCoursePaid(null);
    } else setCoursePaid(null);
  }, [coursesData]);

  useEffect(() => {
    dispatch(getBuyHistory(1));
    setisFetch(true);
  }, []);

  useEffect(() => {
    if (isFetch) {
      if (history.status === 200) {
        setBookedCourse(history.data.bookings);
        setbookings(history.data);
        setUnpaidCourse(
          history.data.bookings.filter((courses) => courses.order_status === 0)
        );
      }
    }

    if (isClicked) {
      if (pageIndex == NaN) {
        dispatch(getBuyHistory(pageIndex));
        setisClicked(false);
      } else {
        dispatch(getBuyHistory(pageIndex));
        setisClicked(false);
      }
    }
  }, [history, isClicked, pageIndex]);

  const handleFilter = () => {
    setDropdown(!dropdown);
  };

  const handlePageClick = (e) => {
    setpageIndex(e.nextSelectedPage + 1);
    setisClicked(true);
  };

  return (
    <>
      <div className="menu-top">
        <Header />
      </div>

      {/* profile section */}
      <section className="profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card card-profile">
                <NavbarProfile />
              </div>
            </div>
            <div className="col-md-9">
              <div className="section-analistics">
                {tab === "all" ? (
                  <h3>My Courses</h3>
                ) : tab === "waiting" ? (
                  <h3>My Payment</h3>
                ) : tab === "in progress" ? (
                  <h3>My Progress Courses</h3>
                ) : tab === "done" ? (
                  <h3>My Courses Done</h3>
                ) : null}
                <div className="row search-row">
                  <div className="col-md-4"></div>
                  {/* <div className="col-md-5">
                    <div className="custom-search-input">
                      <div className="input-group col-md-12">
                        <input
                          type="text"
                          className="search-query form-control"
                          placeholder="Search activity..."
                        />
                        <button className="btn " type="button">
                          <span className="fa fa-search"></span>
                        </button>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-md-3">
                    <div className="dropdown">
                      {/* <button
                        className="btn dropdown-toggle form-select filter-input form-control"
                        type="button"
                        onClick={handleFilter}
                      >
                        Filter By Date
                      </button> */}
                      {dropdown === true && (
                        <form
                          id="filter"
                          className="dropdown-menu filter-that's hilariousdropdown dropdown-menu-end"
                        >
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
                      )}
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
                          onClick={() => setTab("all")}
                        >
                          All Course
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
                          onClick={() => setTab("waiting")}
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
                          onClick={() => setTab("in progress")}
                        >
                          Course in Progress
                        </button>
                      </li>
                      <li className="nav-item tab-activity" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-scholarship-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-scholarship"
                          type="button"
                          role="tab"
                          aria-controls="pills-scholarship"
                          aria-selected="false"
                          onClick={() => setTab("done")}
                        >
                          Course Done
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    {/* All Course */}
                    <div
                      className="tab-pane fade show active"
                      id="pills-course"
                      role="tabpanel"
                      aria-labelledby="pills-course-tab"
                    >
                      {coursesData && coursePaid
                        ? arrayBlock(
                            [...Array(coursePaid.length).keys()],
                            row
                          ).map((row, i) => (
                            <div key={i} className="row">
                              {row.map((value, i) => (
                                <div key={i} className="col-md-6">
                                  {countAmount()}
                                  <CourseCard
                                    coursesData={coursesData}
                                    coursePaid={coursePaid}
                                    count={count}
                                    i={i}
                                  />
                                </div>
                              ))}
                            </div>
                          ))
                        : coursePaid === null && (
                            <span className="text-center mt-4 empty-course-text">
                              You don't have any course.
                            </span>
                          )}
                    </div>
                    {/* Waiting for Payment */}
                    <div
                      className="tab-pane fade"
                      id="pills-training"
                      role="tabpanel"
                      aria-labelledby="pills-training-tab"
                    >
                      {unpaidCourse ? (
                        <div className="row">
                          {unpaidCourse.map((course, index) => (
                            <div className="col-md-6" key={index}>
                              {course ? (
                                <CourseWaitingPayment
                                  course={course}
                                  provider={provider}
                                />
                              ) : (
                                course.length ===
                                0(
                                  <span className="text-center mt-4 empty-course-text">
                                    You don't have any course.
                                  </span>
                                )
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        unpaidCourse === null && (
                          <span className="text-center mt-4 empty-course-text">
                            You don't have any course.
                          </span>
                        )
                      )}
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

                    {/* Course in Progress */}
                    <div
                      className="tab-pane fade"
                      id="pills-job"
                      role="tabpanel"
                      aria-labelledby="pills-job-tab"
                    >
                      {coursesData && coursePaid ? (
                        <div className="row">
                          {tab === "in progress" ? (
                            <>
                              {coursePaid.map((course, index) => (
                                <CourseCardInProgress
                                  course={course}
                                  index={index}
                                  setInProgress={setInProgress}
                                  // counter={counterProgress}
                                />
                              ))}
                            </>
                          ) : null
                          // <>
                          // <span className="text-center my-4 pt-4">
                          //   You didn't have finished course.
                          // </span>
                          // </>
                          }
                        </div>
                      ) : (
                        coursePaid === null && (
                          <span className="text-center mt-4 empty-course-text">
                            You don't have any course.
                          </span>
                        )
                      )}
                    </div>

                    {/* Course Done */}
                    <div
                      className="tab-pane fade"
                      id="pills-scholarship"
                      role="tabpanel"
                      aria-labelledby="pills-scholarship-tab"
                    >
                      {coursesData && coursePaid ? (
                        <div className="row">
                          {tab === "done" ? (
                            <>
                              {coursePaid.map((course, index) => (
                                <CourseCardDone
                                  course={course}
                                  index={index}
                                  setDoneCourse={setDoneCourse}
                                  courses={coursesData}
                                />
                              ))}
                            </>
                          ) : null
                          // () => {
                          //   <>
                          // <span className="text-center my-4 pt-4">
                          //   You didn't have done any courses yet.
                          // </span>
                          //   </>
                          // }
                          }
                        </div>
                      ) : (
                        coursePaid === null && (
                          <span className="text-center mt-4 empty-course-text">
                            You don't have any course.
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
      <a href="#" id="scroll">
        <img src={require("../../assets/img/back-to-top.png")} alt="" />
      </a>
    </>
  );
};

export default index;
