/* eslint-disable */
import React, { useEffect, useState } from "react";
import sad from "../../assets/img/icon/sad.svg";
import smile from "../../assets/img/icon/smile.svg";
import waiting from "../../assets/img/icon/waiting.svg";
import check from "../../assets/img/icon/check.svg";
import back from "../../assets/img/icon/back.svg";
import ava from "../../assets/img/avatar.png";
import ava2 from "../../assets/img/avatar2.png";
import course1 from "../../assets/img/icon/course-01.svg";
import course2 from "../../assets/img/icon/course-02.svg";
import course3 from "../../assets/img/icon/course-03.svg";
import course4 from "../../assets/img/icon/course-04.svg";
import profile from "../../assets/img/profile.png";
import cc from "../../assets/img/icon/cc.svg";
import intro from "../../assets/img/intro.svg";
import play from "../../assets/img/icon/play.svg";
import doc from "../../assets/img/icon/document.svg";
import arrow from "../../assets/img/icon/arrow.svg";
import Footer from "../Footer";
import Header from "../header";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import NavbarProfile from "./NavbarProfile";
import { PieChart } from "react-minimal-pie-chart";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/mobile.css";
import "../../assets/css/profile.css";
import PieChartComponent from "../../utils/piechart";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCourseById,
  getAllCommentByCourse,
  getDetailScore,
  sendRating,
  getCourseContent,
  getCourseByUser,
  postComment,
} from "../../store/redux/actions/learning/course";
import { createBrowserHistory } from "history";
import Swal from "sweetalert2";

const DetailCourse = () => {
  const initialRate = {
    course_id: "",
    name: "",
    email: "",
    photo_path: "",
    rating: "",
    comment: "",
  };
  const initialReply = {
    name: "",
    email: "",
    photo_path: "",
    comment: "",
    parent_id: "",
    course_id: "",
  };
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = createBrowserHistory();
  const courseById = useSelector((state) => state.course.courseById?.data);
  const getComment = useSelector((state) => state.course.comment);
  const dataUser = useSelector((state) => state.user.user.data);
  const scoreDetail = useSelector((state) => state.course.detailScore);
  const myCourses = useSelector((state) => state.course.myCourses?.data);
  const params = useParams();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [comments, setComment] = useState([]);
  const [user, setUser] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [detailScore, setDetailScore] = useState([]);
  const [detail, setDetail] = useState({});
  const [rate, setRate] = useState(initialRate);
  const [passed, setpassed] = useState([]);
  const [notPassed, setnotPassed] = useState([]);
  const [beingAssessed, setbeingAssessed] = useState([]);
  const [progress, setprogress] = useState([]);
  const [reply, setReply] = useState(initialReply);
  const progressVal = useSelector((state) => state.course.courseContent?.data);
  const [lesson, setlesson] = useState([]);
  const [progressCompleted, setprogressCompleted] = useState([]);
  const [visible, setVisible] = useState();
  const getStatus = useSelector((state) => state.course.status);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (prefomattedDate) {
      return `${prefomattedDate} at ${hours}:${minutes}`;
    }

    if (hideYear) {
      return `${day} ${month} at ${hours}:${minutes}`;
    }

    return `${day} ${month} ${year} at ${hours}:${minutes}`;
  }

  function timeAgo(dateParam) {
    if (!dateParam) {
      return null;
    }

    const date =
      typeof dateParam === "object" ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();

    if (seconds < 5) {
      return "now";
    } else if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 90) {
      return "about a minute ago";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (isToday) {
      return getFormattedDate(date, "Today");
    } else if (isYesterday) {
      return getFormattedDate(date, "Yesterday");
    } else if (isThisYear) {
      return getFormattedDate(date, false, true);
    }

    return getFormattedDate(date);
  }

  useEffect(() => {
    if (getStatus === "post comment success") {
      dispatch(getAllCommentByCourse(params.id));
    }
    if (getStatus === "post rating success") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Rating Successfully Added!",
        confirmButtonColor: "#802ec0",
        confirmButtonText: "Close",
      }).then((res) => {
        if (res.isConfirmed) {
          history.go(0);
        } else if (res.isDismissed) {
          history.go(0);
        }
      });
    }
  }, [getStatus]);

  const handleBack = (e) => {
    navigate("/profile");
    history.go(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendRating(rate));
    setIsModal(false);
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

  useEffect(() => {
    if (rate.rating) {
      setRate({
        ...rate,
        course_id: id,
        name: user.full_name,
        email: user.email,
        photo_path:user?.photo?.thumb.url,
      });
    }
  }, [rate.rating]);

  useEffect(() => {
    if (dataUser) {
      setUser(dataUser.user);
    }
  }, [dataUser]);

  useEffect(() => {
    if (user.email) {
      dispatch(getDetailScore(user.email, id));
      dispatch(getCourseByUser(user.email));
    }
  }, [user]);

  useEffect(() => {
    // if (scoreDetail) {
    if (scoreDetail.status === 200) {
      setDetailScore(scoreDetail.data.data);
    }
    // }
  }, [scoreDetail]);

  useEffect(() => {
    if (detailScore === "Data Not Found") {
      setpassed(null);
      setnotPassed(null);
    } else if (detailScore !== "Data Not Found") {
      setpassed(
        detailScore?.filter(
          (passed) => passed.passed === 1 && passed.status === 1
        )
      );
      setnotPassed(
        detailScore?.filter(
          (passed) => passed.passed === 0 && passed.status === 1
        )
      );
      setbeingAssessed(detailScore?.filter((passed) => passed.status === 0));
    }
  }, [detailScore]);

  useEffect(() => {
    if (data) {
      dispatch(getCourseContent(data.id));
    }
  }, [data]);

  useEffect(() => {
    if (progressVal) {
      setprogress(progressVal.data);
    }
  }, [progressVal]);

  useEffect(() => {
    if (id) {
      dispatch(getAllCourseById(id));
    }
  }, [id]);

  useEffect(() => {
    dispatch(getAllCommentByCourse(params.id));
  }, []);

  useEffect(() => {
    if (myCourses) {
      setlesson(myCourses.filter((lesson) => lesson.id === data.id));
    }
  }, [myCourses, user, dataUser]);

  useEffect(() => {
    if (courseById) {
      setData(courseById.data);
    }
    if (getComment.status === 200) {
      setComment(getComment.data);
    }
  }, [courseById, getComment]);

  useEffect(() => {
    if (myCourses) {
      {
        myCourses.map((courses) => {
          progress.map((progress) => {
            if (courses.id === progress.course_id) {
              setprogressCompleted(
                courses.lesson.filter((data) => data.assessment === 1)
              );
            }
          });
        });
      }
    }
  }, [myCourses, progressVal]);

  const handlePostComment = (e) => {
    e.preventDefault();
    dispatch(postComment(reply));
    setReply({ ...reply, comment: "" });
  };

  useEffect(() => {
    setReply({
      ...reply,
      name: user.full_name,
      email: user.email,
      photo_path: user?.photo?.thumb.url,
    });
  }, [reply.comment]);

  const handleChangeComment = (e) => {
    setReply({ ...reply, comment: e.target.value });
  };

  useEffect(() => {
    if (params) {
      setReply({ ...reply, course_id: params.id });
    }
  }, [user]);

  const isWait = (item) => {
    if (item.status === 0) {
      return true;
    }
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
                <div className="modal-body modal-body-profile">
                  <div className="clearfix mb-3">
                    <a onClick={handleBack} className="back">
                      <img src={back} /> Back
                    </a>
                  </div>
                  <div className="row header-profile-modal align-items-start">
                    <div className="col-md-5">
                      <div className="img-popup-profile">
                        <img src={data.cover_photo} />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="caption-popup-rpofile">
                        <h3>{data.title}</h3>
                        <p>{data.subtitle}</p>
                        <p className="created-by pt-3">
                          <img src={ava2} /> Created by{" "}
                          <span>{data.provider_name}</span>
                        </p>
                        <p className="d-flex align-items-center">
                          <img src={cc} className="me-2" /> English, Bahasa,
                          Germany, French,Spanish
                        </p>
                        <button
                          type="button"
                          className="btn btn-outline-secondary-custom mt-0 bg-white mt-3"
                          onClick={() => setIsModal(true)}
                        >
                          <i className="fas fa-star me-2"></i> Give Rate &
                          Review for this Course
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="tabs-modal">
                        <ul
                          className="nav nav-pills nav-justified nav-modal"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-content-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-content"
                              type="button"
                              role="tab"
                              aria-controls="pills-content"
                              aria-selected="true"
                            >
                              Course Content
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-info-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-info"
                              type="button"
                              role="tab"
                              aria-controls="pills-info"
                              aria-selected="false"
                            >
                              Course Info
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-discussion-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-discussion"
                              type="button"
                              role="tab"
                              aria-controls="pills-discussion"
                              aria-selected="false"
                            >
                              Discussions
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-quiz-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-quiz"
                              type="button"
                              role="tab"
                              aria-controls="pills-quiz"
                              aria-selected="false"
                            >
                              Detail Score Quiz
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-content"
                            role="tabpanel"
                            aria-labelledby="pills-content-tab"
                          >
                            <div className="modal-accordion-profile">
                              <ol className="list-group ">
                                {data.lessons ? (
                                  data.lessons.map((lesson, index) => {
                                    return (
                                      <li
                                        className="list-group-item cursor-pointer"
                                        key={index}
                                      >
                                        {progressCompleted.map((data) => {
                                          data.id === lesson.id ? (
                                            <p>completed</p>
                                          ) : (
                                            <p>failed</p>
                                          );
                                        })}
                                        <div
                                          href=""
                                          className=" d-flex justify-content-between align-items-start"
                                          onClick={() =>
                                            navigate(
                                              `/learning/${lesson.course_id}`,
                                              {
                                                state: {
                                                  order_status:
                                                    location.state.order_status,
                                                },
                                              }
                                            )
                                          }
                                        >
                                          <div className="list-img-course">
                                            <img src={intro} />
                                          </div>
                                          <div className="ms-2 me-auto">
                                            <div className="list-text-course">
                                              <h5
                                                style={{ paddingTop: "10px" }}
                                              >
                                                {lesson.lesson_name}
                                              </h5>
                                              {lesson?.content === 'VIDEO' ?
                                                <label>
                                                  <span>
                                                    <img alt="pict" src={play} />
                                                  </span>
                                                  {" "}Video
                                                </label>
                                              :
                                                <label>
                                                  <span>
                                                    <img alt="pict" src={doc} />
                                                  </span>
                                                  {" "}Document
                                                </label>
                                              }
                                              {/* <p>
                                                {data.lessons.length} lessons
                                              </p> */}
                                              {/* <div className="d-flex align-items-center vid-document">
                                                <label>
                                                  <span>
                                                    <img src={play} />
                                                  </span>
                                                  {
                                                    data.lessons.filter(
                                                      (less) =>
                                                        less.content === "VIDEO"
                                                    ).length
                                                  }{" "}
                                                  Videos
                                                </label>
                                                <label>
                                                  <span>
                                                    <img src={doc} />
                                                  </span>
                                                  {
                                                    data.lessons.filter(
                                                      (less) =>
                                                        less.content === "PDF"
                                                    ).length
                                                  }{" "}
                                                  Documents
                                                </label>
                                              </div> */}
                                            </div>
                                            {/* <div className="text-progres-course">
                                              <label>
                                                <span className="completed ms-0">
                                                  <img src={check} /> Progress
                                                  Completed
                                                </span>
                                              </label>
                                            </div> */}
                                          </div>
                                          <span>
                                            <img src={arrow} />
                                          </span>
                                        </div>
                                      </li>
                                    );
                                  })
                                ) : (
                                  <p className="emty-course-text">
                                    Lesson is Empty
                                  </p>
                                )}
                              </ol>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-info"
                            role="tabpanel"
                            aria-labelledby="pills-info-tab"
                          >
                            <div className="modal-accordion-profile">
                              <div className="content-course-info">
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: data.course_info,
                                  }}
                                />
                                {/* <ul className="course-info-list list-unstyled mt-4">
                                  <li>Designing logos</li>
                                  <li>
                                    Turning photographs into vector artwork
                                  </li>
                                  <li>Preparing graphics for web and print</li>
                                  <li>Working with type in creative ways</li>
                                  <li>
                                    Learn useful keyboard shortcuts and best
                                    practices
                                  </li>
                                  <li>
                                    Test your knowledge with quizzes at the end
                                    of each chapter
                                  </li>
                                  <li>Creating vector illustrations</li>
                                  <li>
                                    Vectorizing and colorizing traced hand
                                    drawings
                                  </li>
                                  <li>Designing infographics</li>
                                  <li>
                                    Mastering advanced Illustrator tools and
                                    techniques
                                  </li>
                                  <li>
                                    Practice everything you learn with provided
                                    Exercise Files
                                  </li>
                                  <li>
                                    Learn Illustrator from the start the way a
                                    professional would use it
                                  </li>
                                </ul> 
                                <h3>This Course Include</h3>
                                <ul className="list-group list-unstyled">
                                  <li className="list-group-item">
                                    <img src={course1} /> 13 hours on-demand
                                    video
                                  </li>
                                  <li className="list-group-item">
                                    <img src={course2} /> Full lifetime access
                                  </li>
                                  <li className="list-group-item">
                                    <img src={course3} /> Access on mobile and
                                    TV
                                  </li>
                                  <li className="list-group-item">
                                    <img src={course4} /> Certificate of
                                    Completion
                                  </li>
                                </ul>
                                */}
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-discussion"
                            role="tabpanel"
                            aria-labelledby="pills-discussion-tab"
                          >
                            <div className="tabs-rating tabs-discussion">
                              <form className="for-detail">
                                <div className="form-group comments-column d-block">
                                  <div className="d-flex">
                                    <div className="mentor col-md-4">
                                      <div className="d-flex align-items-center">
                                        <div className="avatar">
                                          <img src={user?.photo?.thumb.url} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="textarea ps-3">
                                      <textarea
                                        className="form-control"
                                        placeholder="Leave a Message...."
                                        value={reply.comment}
                                        onChange={(e) => handleChangeComment(e)}
                                      ></textarea>
                                      <div className="text-end">
                                        <button
                                          className="profile btn btn-secondary-purple"
                                          onClick={handlePostComment}
                                        >
                                          Send
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                              <ul className="for-detail list-unstyled">
                                {[...comments]
                                  .reverse()
                                  .map((comment, index) => (
                                    <li key={index}>
                                      <div className="row">
                                        <div className="mentor col-md-4">
                                          <div className="d-flex align-items-center">
                                            <div className="avatar">
                                              <img
                                                alt=""
                                                src={
                                                  // user?.photo?.thumb.url
                                                  //   ? user.photo.thumb.url
                                                  //   : profile
                                                  comment?.photo_path ?
                                                  comment?.photo_path :
                                                  profile
                                                }
                                              />
                                            </div>
                                            <h2>
                                              {comment.name}
                                              <span className="mt-1">
                                                {timeAgo(
                                                  new Date(comment.updated_at)
                                                )}
                                              </span>
                                            </h2>
                                          </div>
                                        </div>
                                        <div className="comments col-md-8">
                                          <p> {comment.comment} </p>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                              </ul>

                              {/* <button className="btn-outline-grey w-100 no-border m-0 bg-white text-purple mt-5">
                                Show More Comments
                              </button> */}
                            </div>
                          </div>

                          {/* Detail Score Quiz */}
                          <div
                            className="tab-pane fade"
                            id="pills-quiz"
                            role="tabpanel"
                            aria-labelledby="pills-quiz-tab"
                          >
                            {detailScore !== "Data Not Found" ? (
                              <div
                                className="modal-accordion-profile tabs-quiz"
                                id="detailScore"
                              >
                                <div className="box-review mb-3">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="boxes">
                                        <div className="clearfix">
                                          <p>
                                            Course Progress (
                                            {lesson?.map((item) => {
                                              return (
                                                ((item.lesson.filter(
                                                  (data) =>
                                                    data.assessment === 1
                                                ).length *
                                                  100) /
                                                progress.length).toFixed(0)
                                              );
                                            })}{" "}
                                            % )
                                          </p>
                                          <div className="progress custom-progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{
                                                width: `${
                                                  progress && lesson
                                                    ? lesson?.map((item) => {
                                                        return (
                                                          (item.lesson.filter(
                                                            (data) =>
                                                              data.assessment ===
                                                              1
                                                          ).length *
                                                            100) /
                                                          progress.length
                                                        );
                                                      })
                                                    : null
                                                }%`,
                                                height: "100%",
                                              }}
                                              // style={{width:"100%", height:"100%"}}
                                              aria-valuenow="25"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            />
                                            {/* </div> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="boxes">
                                            <div className="clearfix">
                                              <h2>
                                                <span
                                                  className="ms-auto"
                                                  style={{ paddingTop: "26px" }}
                                                >
                                                  {detailScore.length}
                                                </span>
                                              </h2>
                                              <p className="mb-0 font-weight-normal">
                                                Total Quiz Taken
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="boxes">
                                            <div className="clearfix">
                                              <h2>
                                                <img src={smile} />{" "}
                                                <span className="ms-auto">
                                                  {passed.length
                                                    ? passed.length
                                                    : isNaN(passed.length)
                                                    ? 0
                                                    : 0}
                                                </span>
                                                {/* {(() => {
                                                if(passed.length) {
                                                  <span className="ms-auto">{passed.length}</span>
                                                } else {
                                                  if(isNan(passed.length)) {
                                                    <span className="ms-auto">0</span>
                                                  } else {
                                                    <span className="ms-auto">0</span>
                                                  }
                                                }
                                              })} */}
                                              </h2>
                                              <p className="mb-0 font-weight-normal">
                                                Passed
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="boxes">
                                            <div className="clearfix">
                                              <h2>
                                                <img src={sad} />{" "}
                                                <span className="ms-auto">
                                                  {notPassed.length
                                                    ? notPassed.length
                                                    : isNaN(notPassed.length)
                                                    ? 0
                                                    : 0}
                                                </span>
                                              </h2>
                                              <p className="mb-0 font-weight-normal">
                                                Not Passed
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="boxes">
                                            <div className="clearfix">
                                              <h2>
                                                <img src={waiting} />{" "}
                                                <span className="ms-auto">
                                                  {beingAssessed.length
                                                    ? beingAssessed.length
                                                    : isNaN(
                                                        beingAssessed.length
                                                      )
                                                    ? 0
                                                    : 0}
                                                </span>
                                              </h2>
                                              <p className="mb-0 font-weight-normal">
                                                {/* Being Assessed */}
                                                In Scoring
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="accordion"
                                  id="accordionExample"
                                >
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header list-group-item"
                                      id="headingOne"
                                    >
                                      <button
                                        className="accordion-button d-flex justify-content-between align-items-start"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                      >
                                        <div className="list-img-course">
                                          <img src={intro} />
                                        </div>
                                        <div className="ms-2 me-auto">
                                          <div className="list-text-course">
                                            <h5>{data.title}</h5>
                                            <p>
                                              {data?.lessons?.length} lessons
                                            </p>
                                            <div className="d-flex align-items-center vid-document">
                                              <label>
                                                <span>
                                                  <img src={play} />
                                                </span>
                                                {
                                                  data?.lessons?.filter(
                                                    (less) =>
                                                      less.content === "VIDEO"
                                                  ).length
                                                }{" "}
                                                Videos
                                              </label>
                                              <label>
                                                <span>
                                                  <img src={doc} />
                                                </span>
                                                {
                                                  data?.lessons?.filter(
                                                    (less) =>
                                                      less.content === "PDF"
                                                  ).length
                                                }{" "}
                                                Documents
                                              </label>
                                            </div>
                                          </div>
                                          {/* <div className="text-progres-course">
                                            <label>
                                              <span className="completed ms-0">
                                                <img src={check} /> Progress
                                                Completed
                                              </span>
                                            </label>
                                          </div> */}
                                        </div>
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne"
                                      className="accordion-collapse collapse show"
                                      aria-labelledby="headingOne"
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body">
                                        <div className="education-bottom">
                                          <div className="left">
                                            <ul
                                              className="nav nav-tabs nav-tabs-child"
                                              id="myTab"
                                              role="tablist"
                                            >
                                              {detailScore ===
                                              "Data Not Found" ? (
                                                <div className="text-center">
                                                  {detailScore}
                                                </div>
                                              ) : (
                                                detailScore.map(
                                                  (item, index) => {
                                                    return (
                                                      <li
                                                        className="nav-item"
                                                        role="presentation"
                                                        key={index}
                                                      >
                                                        {/* {isWait(item)} */}
                                                        <div className="nav-link active">
                                                          <div className="d-flex mb-0">
                                                            <div className="number">
                                                              {index + 1}
                                                            </div>
                                                            <div className="title">
                                                              <h6 className="d-flex align-items-center">
                                                                {
                                                                  item.lesson_name
                                                                }
                                                                {isWait(
                                                                  item
                                                                ) ? (
                                                                  <div className="text-being-assessed">
                                                                    <span className="completed ms-0">
                                                                      Being
                                                                      Assessed
                                                                    </span>
                                                                  </div>
                                                                ) : item.correct_answer >=
                                                                  60 ? (
                                                                  <div className="text-passed">
                                                                    <span className="completed ms-0">
                                                                      <i className="fas fa-check"></i>{" "}
                                                                      Passed
                                                                    </span>
                                                                  </div>
                                                                ) : (
                                                                  <div className="text-not-passed">
                                                                    <span className="completed ms-0">
                                                                      Not Passed
                                                                    </span>
                                                                  </div>
                                                                )}
                                                              </h6>
                                                              <div className="d-flex align-items-center vid-document">
                                                                <label>
                                                                  Quiz Score
                                                                </label>
                                                                <div className="box-chart">
                                                                  <div
                                                                    className=""
                                                                    style={{
                                                                      paddingLeft:
                                                                        "10px",
                                                                    }}
                                                                  >
                                                                    <PieChartComponent
                                                                      customY={
                                                                        65
                                                                      }
                                                                      pieTitle={
                                                                        "Score"
                                                                      }
                                                                      pieValue={
                                                                        isWait(
                                                                          item
                                                                        )
                                                                          ? "?"
                                                                          : item.correct_answer
                                                                      }
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="play d-flex">
                                                              <a
                                                                href="#detailScore-passed"
                                                                data-bs-toggle="modal"
                                                                className="text-purple f-11 text-decoration-none fw-normal mt-auto"
                                                                onClick={() => {
                                                                  setDetail(
                                                                    item
                                                                  );
                                                                }}
                                                              >
                                                                View Detail
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </li>
                                                    );
                                                  }
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <div className="accordion-item">
                                  <h2
                                    className="accordion-header list-group-item"
                                    id="headingTwo"
                                  >
                                    <button
                                      className="accordion-button d-flex justify-content-between align-items-start collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                      // onClick={handleLearning}
                                    >
                                      <div className="list-img-course">{
                                                    data.lessons.filter(
                                                      (less) =>
                                                        less.content === "VIDEO"
                                                    ).length
                                                  }{" "}
                                        <img src={intro} />
                                      </div>
                                      <div className="ms-2 me-auto">
                                        <div className="list-text-course">
                                          <h5>Course Topic</h5>
                                          <p>8 lessons</p>
                                          <div className="d-flex align-items-center vid-document">
                                            <label>{
                                                    data.lessons.filter(
                                                      (less) =>
                                                        less.content === "VIDEO"
                                                    ).length
                                                  }{" "}
                                              </span>
                                              5 Videos
                                            </label>
                                            <label>
                                              <span>
                                                <img src={doc} />
                                              </span>
                                              3 Documents
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      <strong>
                                        This is the second item's accordion
                                        body.
                                      </strong>
                                    </div>
                                  </div>
                                </div> */}
                                </div>
                              </div>
                            ) : (
                              detailScore === "Data Not Found" && (
                                <div className="text-center mt-3 py-5">
                                  <label>You didn't take any quiz yet.</label>
                                </div>
                              )
                            )}
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

      {/* footer */}
      <Footer />

      {/* Modal Rate */}
      <div
        id="quiz"
        className={`${
          isModal ? "modal confirmation d-block" : "modal confirmation d-none"
        }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div
                className="btn-close cursor-pointer"
                onClick={() => setIsModal(false)}
              />
              <div className="text-center form-rate-review px-5 py-3">
                <h3 className="text-purple fw-bold f-18 mb-4">
                  Rating & Review
                </h3>
                <h4 className="fw-bold f-14 mb-4">
                  Give Rate & Review for this course
                </h4>
                <p className="px-4">
                  Your feedback will help us improve learning experience better.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <div className="d-flex align-items-start justify-content-center">
                      <div className="rating-btn">
                        <input
                          type="radio"
                          id="star5"
                          name="rating"
                          value="5"
                          onClick={() => setRate({ ...rate, rating: 5 })}
                        />
                        <label
                          className="star"
                          htmlFor="star5"
                          title="Awesome"
                          aria-hidden="true"
                        ></label>
                        <input
                          type="radio"
                          id="star4"
                          name="rating"
                          value="4"
                          onClick={() => setRate({ ...rate, rating: 4 })}
                        />
                        <label
                          className="star"
                          htmlFor="star4"
                          title="Great"
                          aria-hidden="true"
                        ></label>
                        <input
                          type="radio"
                          id="star3"
                          name="rating"
                          value="3"
                          onClick={() => setRate({ ...rate, rating: 3 })}
                        />
                        <label
                          className="star"
                          htmlFor="star3"
                          title="Very good"
                          aria-hidden="true"
                        ></label>
                        <input
                          type="radio"
                          id="star2"
                          name="rating"
                          value="2"
                          onClick={() => setRate({ ...rate, rating: 2 })}
                        />
                        <label
                          className="star"
                          htmlFor="star2"
                          title="Good"
                          aria-hidden="true"
                        ></label>
                        <input
                          type="radio"
                          id="star1"
                          name="rating"
                          value="1"
                          onClick={() => setRate({ ...rate, rating: 1 })}
                        />
                        <label
                          className="star"
                          htmlFor="star1"
                          title="Bad"
                          aria-hidden="true"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Write some reviews..."
                      rows="4"
                      cols="50"
                      onChange={(e) =>
                        setRate({ ...rate, comment: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="profile btn btn-secondary-purple w-100"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Course Passed */}
      <div
        className="modal fade"
        id="detailScore-passed"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center form-rate-review modal-score px-5 py-3">
                <h3 className="fw-bold f-24 mb-4">{detail.lesson_name}</h3>
                <div className="clearfix">
                  <div className="row position-relative">
                    <div className="col-md-10 offset-md-1">
                      <div className="box-chart">
                        <div className="piechartWrapper">
                          <PieChart
                            data={[
                              {
                                title: "Score",
                                value: detail.correct_answer,
                                color: `${
                                  isWait(detail)
                                    ? "#e4880f"
                                    : detail.correct_answer >= 60
                                    ? "#03C6AE"
                                    : "#db3563"
                                }`,
                              },
                            ]}
                            background="#ddd"
                            totalValue={100}
                            startAngle={-90}
                            lineWidth={15}
                            className="piechart"
                            label={({ x, y, dx, dy, dataEntry }) => (
                              <>
                                <img alt="pict" src={smile} className="smile" />

                                <text
                                  x={x}
                                  y={y}
                                  // y={-40}
                                  dx={dx}
                                  dy={-2}
                                  // dy={dy}
                                  textAnchor="middle"
                                  style={{
                                    color: "#000",
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                  }}
                                >
                                  SCORE
                                </text>
                                <text
                                  x={x}
                                  y={y}
                                  // y={-40}
                                  dx={dx}
                                  dy={22}
                                  // dy={dy}
                                  textAnchor="middle"
                                  style={{
                                    fontSize: "20px",
                                    fill: `${
                                      isWait(detail)
                                        ? "#e4880f"
                                        : detail.correct_answer >= 60
                                        ? "#03C6AE"
                                        : "#db3563"
                                    }`,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {isWait(detail) ? "?" : dataEntry.value}
                                </text>
                              </>
                            )}
                            labelStyle={{
                              fontSize: "25px",
                              fontWeight: "bold",
                              fill: `${
                                isWait(detail)
                                  ? "#e4880f"
                                  : detail.correct_answer >= 60
                                  ? "#03C6AE"
                                  : "#db3563"
                              }`,
                              color: `${
                                isWait(detail)
                                  ? "#e4880f"
                                  : detail.correct_answer >= 60
                                  ? "#03C6AE"
                                  : "#db3563"
                              }`,
                              rotate: "90deg",
                              //"#db3563"
                            }}
                            labelPosition={0}
                            rounded
                            style={{ height: "160px", rotate: "" }}
                            animate
                          ></PieChart>
                          <div className="text-center mt-2 mb-4">
                            {isWait(detail) ? (
                              <div className="text-being-assessed w-auto d-inline-block">
                                BEING ASSESSED
                              </div>
                            ) : detail.correct_answer >= 60 ? (
                              <div className="text-passed w-auto d-inline-block">
                                PASSED
                              </div>
                            ) : (
                              <div className="text-not-passed w-auto d-inline-block">
                                Not PASSED
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Time Spent <strong className="ms-3">02:25:00</strong>
                  </h4>
                  <div className="box-score">
                    <ul className="row mb-3 list-unstyled">
                      <li className="col-md-4">
                        <h5 className="text-green">
                          {isWait(detail)
                            ? "?"
                            : detail.correct_answer
                            ? detail.correct_answer
                            : 0}{" "}
                          %
                        </h5>
                        <p>Correct answer</p>
                      </li>
                      <li className="col-md-4">
                        <h5 className="text-red">
                          {isWait(detail)
                            ? "?"
                            : detail.wrong_answer
                            ? detail.wrong_answer
                            : 0}{" "}
                          %
                        </h5>
                        <p>Wrong answer</p>
                      </li>
                      <li className="col-md-4">
                        <h5 className="text-dark">
                          {isWait(detail)
                            ? "?"
                            : detail.not_answer
                            ? detail.not_answer
                            : 0}{" "}
                          %
                        </h5>
                        <p>Not answered</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  {/* <div className="col-md-6">
                    <a
                      href=""
                      className="btn btn-outline-secondary-custom w-100 mt-0"
                    >
                      Review Answers
                    </a>
                  </div> */}
                  <div className="col-md-12">
                    {isWait(detail) ? (
                      <div
                        className="label label-secondary-yellow w-100"
                        disabled
                      >
                        Waiting for Scoring
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="profile btn btn-secondary-green w-100"
                        disabled
                      >
                        Finished
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Course Not */}
      <div
        className="modal fade"
        id="detailScore-not-passed"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="col-lg-8">
                <img src={smile} />
              </div>
              <div className="text-center form-rate-review modal-score px-50 py-3">
                <h3 className="fw-bold f-24 mb-4">How to Understand Figma</h3>
                <div className="clearfix">
                  {/* <div className="row chart-score position-relative">
									<div className="col-md-10 offset-md-1">
										<div className="box-chart">
											<div className="piechartWrapper">
												<div className="piechart" id="review-notPassed-01" data-percent="25">
													<img src={sad} className="smile" />
													<h5 className="text-score">Score</h5>
													<span>25</span>
												</div>
												<div className="text-center mb-4">
													<div className="text-not-passed w-auto d-inline-block">Not PASSED</div>
												</div>
											</div>
										</div>
									</div>
								</div> */}

                  <h4>
                    Time Spent <strong className="ms-3">02:25:00</strong>
                  </h4>
                  <div className="box-score">
                    <ul className="row mb-3 list-unstyled">
                      <li className="col-md-4">
                        <h5 className="text-green">20%</h5>
                        <p>Correct answer</p>
                      </li>
                      <li className="col-md-4">
                        <h5 className="text-red">80%</h5>
                        <p>Wrong answer</p>
                      </li>
                      <li className="col-md-4">
                        <h5 className="text-dark">0%</h5>
                        <p>Not answered</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <div className="col-md-6">
                    <a
                      href=""
                      className="btn btn-outline-secondary-custom w-100 mt-0"
                    >
                      Review Answers
                    </a>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="submit"
                      className="profile btn btn-secondary-purple w-100"
                    >
                      Restart Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button>
        {visible ? (
          <div className="scroll-to-top-btn visible" onClick={scrollToTop}>
            <img src={require("../../assets/img/back-to-top.png")} alt="" />
          </div>
        ) : (
          <div className="scroll-to-top-btn hidden">
            <img src={require("../../assets/img/back-to-top.png")} alt="" />
          </div>
        )}
      </button>
    </>
  );
};

export default DetailCourse;
