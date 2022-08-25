/* eslint-disable */
import React, { useRef, useEffect, useState } from "react";
import Header from "../header";
import feature1 from "../../assets/img/feature-1.svg";
import feature2 from "../../assets/img/feature-2.svg";
import feature3 from "../../assets/img/feature-3.svg";
import feature4 from "../../assets/img/feature-4.svg";
import icComment from "../../assets/img/icon/comments.svg";
import rating from "../../assets/img/rating.svg";
import Footer from "../Footer";
import share from "../../assets/img/icon/share.svg";
import profile from "../../assets/img/profile.png";
import discuss from "../../assets/img/discussion-blank.png";
import Slider from "react-slick";
import intro from "../../assets/img/intro.svg";
import arrow from "../../assets/img/icon/arrow.svg";
import loading from "../../assets/img/icon/loading-animated.svg";
import loadingDualRing from "../../assets/img/icon/loading-dual-ring.svg";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/mobile.css";
import { useParams, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import { DynamicStar } from "react-dynamic-star";
import {
  getAllCourseById,
  getAllCommentByCourse,
  getBuyCourse,
  getRating,
  likeComment,
  dislikeComment,
  resetCourseStatus,
} from "../../store/redux/actions/learning/course";
import { getUser } from "../../store/redux/actions/profile/user";
import { postComment } from "../../store/redux/actions/learning/course";
import Swal from "sweetalert2";
import ReadMore from "../../utils/readmore";

function customPaging(i) {
  return <span>{i + 1}</span>;
}

const EducationDetail = () => {
  const slider = useRef();
  const slickNext = () => {
    slider.current.slickNext();
  };
  const slickPrev = () => {
    slider.current.slickPrev();
  };
  const initialData = {
    name: "",
    email: "",
    photo_path: "",
    comment: "",
    parent_id: "",
    course_id: "",
  };
  const initialReply = {
    name: "",
    email: "",
    photo_path: "",
    comment: "",
    parent_id: "",
    course_id: "",
  };
  const initialLike = {
    email: "",
    comment_id: "",
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

  const params = useParams();
  const navigate = useNavigate();
  const history = createBrowserHistory();
  const [course, setCourse] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  const [comment, setComment] = useState([]);
  const [revComment, setRevComment] = useState([]);
  const [revCourseRating, setRevCourseRating] = useState([]);
  const dispatch = useDispatch();
  const getCourseById = useSelector((state) => state.course.courseById);
  const getAllCourse = useSelector((state) => state.course.course);
  const getComment = useSelector((state) => state.course.comment);
  const dataUser = useSelector((state) => state.user.user.data);
  const getBuy = useSelector((state) => state.course.buyCourse);
  const getCourseRating = useSelector((state) => state.course.courseRating);
  // get message for post comment
  const getStatus = useSelector((state) => state.course.status);
  const getLikeStatus = useSelector((state) => state.course.likeCommentStatus);
  const [status, setstatus] = useState(false);
  const [data, setData] = useState(initialData);
  const [reply, setReply] = useState(initialReply);
  const [user, setUser] = useState([]);
  const [child, setChild] = useState({ id: null, show: false });
  const [filterRating, setFilterRating] = useState(0);
  const [likeData, setLikeData] = useState(initialLike);
  const [submitLike, setSubmitLike] = useState(false);
  /* scroll to top function */
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
  /* end */

  const handleEducation = () => {
    navigate("/education", { state: { course_name: null } });
  };
  const handleEduDetail = (id) => {
    navigate(`/education/${id}`);
    history.go(0);
  };
  const handlePostComment = (e) => {
    e.preventDefault();
    dispatch(postComment(data));
    setData({ ...data, comment: "", parent_id: "" });
  };
  const handlePostReply = (e) => {
    e.preventDefault();
    dispatch(postComment(reply));
    setReply({ ...reply, comment: "", parent_id: "" });
  };
  const handleChangeComment = (e) => {
    setData({ ...data, comment: e.target.value });
  };

  const handleChangeChild = (e, id) => {
    setReply({ ...reply, comment: e.target.value, parent_id: id });
  };

  const handleLearning = (id) => {
    navigate("/learning/" + id);
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
      return `${day}. ${month} at ${hours}:${minutes}`;
    }

    return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
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
    if (course) {
      setData({ ...data, course_id: course.id });
    }
  }, [course]);

  useEffect(() => {
    if (course) {
      setReply({ ...reply, course_id: course.id });
    }
  }, [course]);

  useEffect(() => {
    setData({
      ...data,
      name: user.full_name,
      email: user.email,
      photo_path: user?.photo?.thumb.url,
    });
  }, [data.comment]);

  useEffect(() => {
    setReply({
      ...reply,
      name: user.full_name,
      email: user.email,
      photo_path: user?.photo?.thumb.url,
    });
  }, [reply.comment]);

  useEffect(() => {
    if (getStatus === "post comment success") {
      dispatch(getAllCommentByCourse(params.id));
    }
    if (getStatus === "like comment success") {
      dispatch(getAllCommentByCourse(params.id));
    }
    if (getStatus === "dislike comment success") {
      dispatch(getAllCommentByCourse(params.id));
    }
    if (getStatus === "course has been paid") {
      Swal.fire({
        icon: "warning",
        text: "You already paid this course.",
      }).then((res) => {
        if (res.isConfirmed) {
          dispatch(resetCourseStatus());
        } else if (res.isDismissed) {
          dispatch(resetCourseStatus());
        }
      });
    }
  }, [getStatus]);

  useEffect(() => {
    if (getLikeStatus === "Comment Already Liked !") {
      // dispatch(dislikeComment(likeData));
      Swal.fire({
        icon: "warning",
        text: `${getLikeStatus}`,
      }).then((res) => {
        if (res.isConfirmed) {
          dispatch(resetCourseStatus());
        } else if (res.isDismissed) {
          dispatch(resetCourseStatus());
        }
      });
    }
  }, [getLikeStatus]);

  useEffect(() => {
    if (submitLike === true) {
      dispatch(likeComment(likeData));
      setTimeout(() => setSubmitLike(false), 500);
    }
  }, [submitLike]);

  useEffect(() => {
    dispatch(getAllCourseById(params.id));
    dispatch(getAllCommentByCourse(params.id));
    dispatch(getRating(params.id));
  }, []);

  useEffect(() => {
    if (dataUser) {
      setUser(dataUser.user);
    }
  }, [dataUser]);

  const handleBuyCourse = (e) => {
    e.preventDefault();
    dispatch(getBuyCourse(params.id));
    setstatus(true);
  };

  useEffect(() => {
    if (comment.length) {
      setRevComment([...comment].reverse());
    }
  }, [comment]);

  useEffect(() => {
    if (getCourseRating.data) {
      setRevCourseRating([...getCourseRating.data].reverse());
    }
  }, [getCourseRating]);

  useEffect(() => {
    if (getCourseById.status === 200) {
      setCourse(getCourseById.data.data);
    }
    if (getAllCourse.status === 200) {
      setAllCourse(getAllCourse.data.data.data);
    }
    if (getComment.status === 200) {
      setComment(getComment.data);
    }
    // if (getUser) {
    //   setUser(getUser.user);
    // }
    if (status) {
      if (getBuy.status === 200) {
        Swal.fire({
          icon: "info",
          text: "You have order a course! Please continue payment in Profile - My Transaction!",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/profile/transaction");
            history.go(0);
          } else if (res.isDismissed) {
            navigate("/profile");
            history.go(0);
          }
        });
        navigate("/profile/transaction");
      }
    }
  }, [getCourseById, getAllCourse, getComment, getUser, getBuy]);

  return (
    <>
      <div className="menu-top">
        <Header />
      </div>
      <div className="header-bg header-inside for-detail pt-0">
        {/* <!-- Header--> */}
        <header>
          <div className="container-fluid py-3"></div>

          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-9 left-banner mt-0">
                <div className="row">
                  <div className="col-5 my-auto">
                    <img
                      alt=""
                      className="w-100 main-img"
                      src={course.cover_photo}
                    />
                  </div>
                  <div className="col-7">
                    <h3 className="display-5 fw-bold lh-1 mb-3">
                      {course.title}
                    </h3>
                    <div className="d-flex">
                      <div className="rating mt-1">
                        <p>
                          <DynamicStar
                            rating={parseFloat(course.rating_total).toFixed(1)}
                            width={parseFloat(20)}
                            height={parseFloat(20)}
                            outlined={true}
                            sharpnessStar={2.5}
                            fullStarColor={"#FFBC00"}
                            emptyStarColor={"transparent"}
                          />
                        </p>
                      </div>
                      <div className="ml-2 mr-2">
                        <span className="text-white">
                          ( {course.user_rating?.length} )
                        </span>
                        {/* </p> */}
                      </div>
                      {/* <div className="tags best-seller">Best Seller</div> */}
                    </div>
                    <p className="f-14">
                      Created by <strong>{course.provider_name}</strong>
                    </p>

                    {/* <SmartText text='cobain' /> */}
                    {/* <p
                      className="f-14"
                      dangerouslySetInnerHTML={{ __html: course.course_info }}
                    /> */}
                    {course.course_info && (
                      <ReadMore htmlText={course.course_info} />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-8 col-lg-3 right-banner floating">
                <div className="card w-100 text-center">
                  <div className="card-body">
                    <h5 className="fw-bold f-18">{course.subtitle}</h5>
                    <p className="f-14 text-grey mb-4">
                      {course.provider_name}
                    </p>
                    <div className="price">
                      <h5 className="fw-bold f-22">
                        Rp.{" "}
                        {course.discount_price
                          ? course.discount_price
                          : course.price}
                      </h5>
                      {course.discount_price ? (
                        <p className="chopped-price text-grey f-12">
                          {" "}
                          Rp. {course.price}
                        </p>
                      ) : null}
                      {/* <a href={getBuy.data.bookings.payment_detail} target="_blank"
                      rel="noreferrer"> */}
                      <button
                        disabled={
                          getStatus === "request booking" ? true : false
                        }
                        className="btn btn-primary-custom w-100 m-0"
                        onClick={(e) => handleBuyCourse(e)}
                      >
                        {getStatus === "request booking" ? (
                          <img src={loading} width={20} />
                        ) : (
                          "BUY NOW"
                        )}
                      </button>
                      <button className="btn btn-outline-grey w-100 no-border m-0 text-purple bg-white d-flex align-items-center justify-content-center">
                        <img alt="" src={share} /> Share This Course
                      </button>
                    </div>
                    <div className="features mt-2">
                      <h5 className="text-left f-14 fw-bold mb-3">
                        This Course Include
                      </h5>
                      <div className="feature-1 d-flex">
                        <img alt="" className="img-fluid" src={feature1} />
                        <p className="ml-2 align-self-center mb-0">
                          13 Hours on-demand video
                        </p>
                      </div>
                      <div className="feature-2 d-flex">
                        <img alt="" className="img-fluid" src={feature2} />
                        <p className="ml-2 align-self-center mb-0">
                          Full Lifetime Update
                        </p>
                      </div>
                      <div className="feature-3 d-flex">
                        <img alt="" className="img-fluid" src={feature3} />
                        <p className="ml-2 align-self-center mb-0">
                          Access on Mobile and TV
                        </p>
                      </div>
                      <div className="feature-4 d-flex">
                        <img alt="" className="img-fluid" src={feature4} />
                        <p className="ml-2 align-self-center mb-0">
                          Certificate of Completion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card w-100 mentor mt-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="avatar">
                        <img
                          alt=""
                          src={require("../../assets/img/avatar.png")}
                        />
                      </div>
                      <h2>
                        {course.provider_name}
                        <span className="mt-1">Mentor</span>
                      </h2>
                    </div>
                    <p>
                      Ray LeBov began working in Sacramento in 1975, when he was
                      appointed as counsel to th Legislature’s Joint Committee
                      on the Structure of the Judiciary. He served in various
                      other legislative staff positions until 1991, most notably
                      as counsel to the Assembly Committee on the Judiciary for
                      his last twelve years.
                    </p>
                    {/* <a
                        href
                        className="btn btn-outline-secondary-custom mt-0 bg-white w-100"
                      >
                        See All Courses by Mentor
                      </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <!--Content Education--> */}

      {/* <!-- Content--> */}
      <section className="edu-detail-content pb-5">
        <div className="recomend-education">
          <div className="container-fluid">
            <div className="row content-recomend-edu">
              <div className="col-md-7">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      What You Will Learn
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Requirements
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Description
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-4" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    dangerouslySetInnerHTML={{
                      __html: course.what_you_will_learn,
                    }}
                  />

                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    dangerouslySetInnerHTML={{ __html: course.requirement }}
                  />

                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    dangerouslySetInnerHTML={{ __html: course.description }}
                  />
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
        {/* <!--List Educations--> */}
        <div className="list-program list-education">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <div className="mb-4 d-flex justify-content-between">
                  <div className="d-flex">
                    <h4 className="f-16 bold">Course Content</h4>
                  </div>
                </div>

                <div className="modal-accordion-profile tabs-quiz tabs-quiz-education">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <ol className="list-group ">
                        {course.lessons ? (
                          course.lessons.map((lesson, index) => {
                            return (
                              <li className="list-group-item" key={index}>
                                <a
                                  href=""
                                  className=" d-flex justify-content-between align-items-start"
                                  onClick={() =>
                                    handleLearning(lesson.course_id)
                                  }
                                >
                                  <div className="list-img-course">
                                    <img src={intro} />
                                  </div>
                                  <div className="ms-2 me-auto">
                                    <div className="list-text-course">
                                      <h5>{lesson.lesson_name}</h5>
                                      <p>{lesson.description}</p>
                                    </div>
                                    {/* <div className="text-progres-course">
                                      <label>
                                        <span className="completed ms-0">
                                          <img src={check} /> Progress Completed
                                        </span>
                                      </label>
                                    </div> */}
                                  </div>
                                  <span>
                                    <img src={arrow} />
                                  </span>
                                </a>
                              </li>
                            );
                          })
                        ) : (
                          <p className="emty-course-text">Lesson is Empty</p>
                        )}
                      </ol>
                    </div>
                  </div>
                </div>
                {/* <button className="btn-outline-grey w-100 no-border m-0 bg-white text-purple mt-4">
                  See More 10 Lessons
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="recomend-education star-reviews mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link px-3 active"
                      id="reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#reviews"
                      type="button"
                      role="tab"
                      aria-controls="reviews"
                      aria-selected="true"
                    >
                      Reviews
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link px-3"
                      id="discussion-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#discussion"
                      type="button"
                      role="tab"
                      aria-controls="discussion"
                      aria-selected="false"
                    >
                      Discussions
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-4" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <h2 className="f-16 bold">
                      How do students rate this class
                    </h2>

                    <div className="row align-items-center box-ratings mt-4">
                      <div className="col-md-3 text-center">
                        <h3>{course.rating_total}</h3>
                        <div className="d-flex align-items-center my-3 justify-content-center">
                          <DynamicStar
                            rating={parseFloat(course.rating_total).toFixed(1)}
                            width={parseFloat(20)}
                            height={parseFloat(20)}
                            outlined={true}
                            sharpnessStar={2.5}
                            fullStarColor={"#FFBC00"}
                            emptyStarColor={"transparent"}
                            totalStar={course.user_rating?.length}
                          />
                        </div>
                        <span className="d-block">Ratings</span>
                      </div>
                      <div className="col-md-9">
                        <div className="d-flex align-items-center">
                          <span>5</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${
                                  course && course?.user_rating?.length
                                    ? (course?.user_rating?.filter(
                                        (item) => item.rating === "5"
                                      ).length *
                                        1000) /
                                      100
                                    : null
                                }%`,
                              }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span>10</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>4</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${
                                  course && course?.user_rating?.length
                                    ? (course?.user_rating?.filter(
                                        (item) => item.rating === "4"
                                      ).length *
                                        1000) /
                                      100
                                    : null
                                }%`,
                              }}
                              aria-valuenow="55"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span>10</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>3</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${
                                  course && course?.user_rating?.length
                                    ? (course?.user_rating?.filter(
                                        (item) => item.rating === "3"
                                      ).length *
                                        1000) /
                                      100
                                    : null
                                }%`,
                              }}
                              aria-valuenow="20"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span>3</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>2</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${
                                  course && course?.user_rating?.length
                                    ? (course?.user_rating?.filter(
                                        (item) => item.rating === "2"
                                      ).length *
                                        1000) /
                                      100
                                    : null
                                }%`,
                              }}
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span>0</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>1</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${
                                  course && course?.user_rating?.length
                                    ? (course?.user_rating?.filter(
                                        (item) => item.rating === "1"
                                      ).length *
                                        1000) /
                                      100
                                    : null
                                }%`,
                              }}
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span>0</span>
                        </div>
                      </div>
                    </div>

                    <div className="tabs-rating mt-5">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              filterRating === 0 ? "active" : ""
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => setFilterRating(0)}
                          >
                            All
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              filterRating === 5 ? "active" : ""
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => setFilterRating(5)}
                          >
                            <i className="fas fa-star"></i> 5
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              filterRating === 4 ? "active" : ""
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => setFilterRating(4)}
                          >
                            <i className="fas fa-star"></i> 4
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              filterRating === 3 ? "active" : ""
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => setFilterRating(3)}
                          >
                            <i className="fas fa-star"></i> 3
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              filterRating === 2 ? "active" : ""
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => setFilterRating(2)}
                          >
                            <i className="fas fa-star"></i> 2
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              filterRating === 1 ? "active" : ""
                            }`}
                            type="button"
                            role="tab"
                            onClick={() => setFilterRating(1)}
                          >
                            <i className="fas fa-star"></i> 1
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content mt-4" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="star-all"
                          role="tabpanel"
                          aria-labelledby="star-all-tab"
                        >
                          <ul className="for-detail list-unstyled">
                            {filterRating === 0 ? (
                              revCourseRating ? (
                                revCourseRating.map((comment, index) => (
                                  <li key={index}>
                                    <div className="row">
                                      <div className="mentor col-md-4">
                                        <div className="d-flex align-items-center">
                                          <div className="avatar">
                                            <img
                                              alt=""
                                              src={
                                                comment.photo_path
                                                  ? comment.photo_path
                                                  : profile
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
                                        <div className="d-flex align-items-center">
                                          {/* <h2>
                                            Kelas ini melebihi harapan saya!
                                          </h2> */}
                                          <div className="d-flex align-items-center ms-auto justify-content-center">
                                            <DynamicStar
                                              rating={parseFloat(
                                                comment.rating
                                              ).toFixed(1)}
                                              width={parseFloat(20)}
                                              height={parseFloat(20)}
                                              outlined={true}
                                              sharpnessStar={2.5}
                                              fullStarColor={"#FFBC00"}
                                              emptyStarColor={"transparent"}
                                              totalStar={
                                                course.user_rating?.length
                                              }
                                            />
                                          </div>
                                        </div>
                                        <p> {comment.comment} </p>
                                      </div>
                                    </div>
                                  </li>
                                ))
                              ) : null
                            ) : revCourseRating.filter(
                                (rating) => rating.rating === filterRating
                              ).length === 0 ? (
                              <div className="text-center">
                                <label>No Data Found.</label>
                              </div>
                            ) : (
                              revCourseRating
                                .filter(
                                  (rating) => rating.rating === filterRating
                                )
                                .map((item, index) => {
                                  return (
                                    <li key={index}>
                                      <div className="row">
                                        <div className="mentor col-md-4">
                                          <div className="d-flex align-items-center">
                                            <div className="avatar">
                                              <img
                                                alt=""
                                                src={
                                                  user?.photo?.thumb.url
                                                    ? user.photo.thumb.url
                                                    : profile
                                                }
                                              />
                                            </div>
                                            <h2>
                                              {item.name}
                                              <span className="mt-1">
                                                {timeAgo(
                                                  new Date(item.updated_at)
                                                )}
                                              </span>
                                            </h2>
                                          </div>
                                        </div>
                                        <div className="comments col-md-8">
                                          <div className="d-flex align-items-center">
                                            <h2>
                                              Kelas ini melebihi harapan saya!
                                            </h2>
                                            <div className="d-flex align-items-center ms-auto justify-content-center">
                                              <DynamicStar
                                                rating={parseFloat(
                                                  item.rating
                                                ).toFixed(1)}
                                                width={parseFloat(20)}
                                                height={parseFloat(20)}
                                                outlined={true}
                                                sharpnessStar={2.5}
                                                fullStarColor={"#FFBC00"}
                                                emptyStarColor={"transparent"}
                                                totalStar={
                                                  course.user_rating?.length
                                                }
                                              />
                                            </div>
                                          </div>
                                          <p> {item.comment} </p>
                                        </div>
                                      </div>
                                    </li>
                                  );
                                })
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="discussion"
                    role="tabpanel"
                    aria-labelledby="discussion-tab"
                  >
                    {comment.data === "Data Not Found!" ? (
                      <div className="text-center discussion-blank my-5">
                        <img alt="" src={discuss} className="mb-4" />
                        <h2>
                          Join this course to discuss with mentor and other
                          student
                        </h2>
                        <p>
                          This content is only avaibale for student join the
                          course.
                        </p>
                      </div>
                    ) : (
                      <div className="tabs-rating tabs-discussion">
                        <form className="for-detail">
                          <div className="form-group comments-column d-block">
                            <div className="d-flex">
                              <div className="mentor col-md-4">
                                <div className="d-flex align-items-center">
                                  <div className="avatar">
                                    <img
                                      src={
                                        user?.photo?.thumb.url
                                          ? user.photo.thumb.url
                                          : profile
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="textarea ps-3">
                                <textarea
                                  className="form-control"
                                  placeholder="Leave a message...."
                                  value={data.comment}
                                  onChange={(e) => handleChangeComment(e)}
                                ></textarea>
                                <div className="text-end">
                                  <button
                                    className="btn btn-secondary-purple"
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
                          {revComment &&
                            revComment.map((item, index) => {
                              return (
                                <li key={index}>
                                  <div className="mentor">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar">
                                        <img
                                          src={
                                            item.photo_path
                                              ? item.photo_path
                                              : profile
                                          }
                                        />
                                      </div>
                                      <div className="info-discussion ps-3">
                                        <h2>
                                          {item.name}
                                          <span className="mt-1"></span>
                                        </h2>
                                      </div>
                                    </div>

                                    <div className="ps-3 comments-bottom">
                                      {/* <h2 className="my-4">Hi everybody!</h2> */}
                                      <div className="paragraph">
                                        <p className="f-14 mb-0">
                                          {item.comment}
                                        </p>
                                        {/* <a
                                      href="javascript:void(0)"
                                      className="text-purple fw-bold f-14 read-more"
                                    >
                                      Read more
                                    </a> */}
                                      </div>
                                      <form className="comments-form mt-4">
                                        <ul className="d-flex align-items-center">
                                          <li className="d-flex">
                                            {getStatus ===
                                              "request like comment" ||
                                            (getStatus ===
                                              "request dislike comment" &&
                                              item.id ===
                                                likeData.comment_id) ? (
                                              //   ||
                                              // getLikeStatus ===
                                              //   "Comment Already Liked !"
                                              <img
                                                src={loadingDualRing}
                                                width={30}
                                                style={{ marginTop: "-4px" }}
                                              />
                                            ) : (
                                              <button
                                                className="love d-flex"
                                                type="button"
                                                onClick={() => {
                                                  setLikeData({
                                                    email: user.email,
                                                    comment_id: item.id,
                                                  });
                                                  setSubmitLike(true);
                                                }}
                                              >
                                                <i
                                                  className="far fa-heart"
                                                  aria-hidden="true"
                                                ></i>
                                              </button>
                                            )}

                                            <div className="total-text-comment">
                                              &nbsp;•&nbsp;{item.liked}
                                            </div>
                                          </li>
                                          <li className="d-flex">
                                            <button
                                              className="comments-btn d-flex"
                                              type="button"
                                              onClick={() => {
                                                setChild({
                                                  id: item.id,
                                                  show:
                                                    child.show === true
                                                      ? false
                                                      : true,
                                                });
                                              }}
                                            >
                                              <img src={icComment} />
                                            </button>
                                            <div className="total-text-comment">
                                              &nbsp;•&nbsp;{item.child.length}
                                            </div>
                                          </li>
                                          {/* <li>
                                          <span>Last active 1 week ago</span>
                                        </li> */}
                                        </ul>
                                        <div
                                          className={`form-group mt-5 comments-column ${
                                            child &&
                                            child.show === true &&
                                            item.id === child.id
                                              ? "d-block"
                                              : "d-none"
                                          }`}
                                        >
                                          <div className="d-flex">
                                            <div className="mentor col-md-4">
                                              <div className="d-flex align-items-center">
                                                <div className="avatar">
                                                  <img
                                                    src={
                                                      user?.photo?.thumb.url
                                                        ? user?.photo?.thumb.url
                                                        : profile
                                                    }
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="textarea">
                                              <textarea
                                                className="form-control"
                                                placeholder="Leave a message...."
                                                value={reply.comment}
                                                onChange={(e) =>
                                                  handleChangeChild(e, item.id)
                                                }
                                              ></textarea>
                                              <div className="text-end">
                                                <button
                                                  className="btn btn-secondary-purple"
                                                  onClick={handlePostReply}
                                                >
                                                  Send
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                          <ul className="for-detail list-unstyled mt-0">
                                            {item.child.length
                                              ? [...item.child]
                                                  .reverse()
                                                  .filter(
                                                    (childs) =>
                                                      childs.parent_id ===
                                                      item.id
                                                  )
                                                  .map((child, index) => {
                                                    return (
                                                      <li key={index}>
                                                        <div
                                                          id="child"
                                                          className="mentor"
                                                        >
                                                          <div className="d-flex align-items-center">
                                                            <div className="avatar">
                                                              <img
                                                                src={
                                                                  child.photo_path
                                                                    ? child.photo_path
                                                                    : profile
                                                                }
                                                              />
                                                            </div>
                                                            <div className="info-discussion ps-3">
                                                              <h2>
                                                                {child.name}
                                                              </h2>
                                                            </div>
                                                          </div>
                                                          <div className="ps-3 comments-bottom">
                                                            <div className="paragraph">
                                                              <p className="f-14 mb-0">
                                                                {child.comment}
                                                              </p>
                                                            </div>
                                                            <form className="comments-form mt-4">
                                                              <ul className="d-flex align-items-center">
                                                                <li className="d-flex">
                                                                  {getStatus ===
                                                                    "request like comment" ||
                                                                  (getStatus ===
                                                                    "request dislike comment" &&
                                                                    child.id ===
                                                                      likeData.comment_id) ? (
                                                                    //   ||
                                                                    // getLikeStatus ===
                                                                    //   "Comment Already Liked !"
                                                                    <img
                                                                      src={
                                                                        loadingDualRing
                                                                      }
                                                                      width={30}
                                                                      style={{
                                                                        marginTop:
                                                                          "-4px",
                                                                      }}
                                                                    />
                                                                  ) : (
                                                                    <button
                                                                      className="love d-flex"
                                                                      type="button"
                                                                      onClick={() => {
                                                                        setLikeData(
                                                                          {
                                                                            email:
                                                                              user.email,
                                                                            comment_id:
                                                                              child.id,
                                                                          }
                                                                        );
                                                                        setSubmitLike(
                                                                          true
                                                                        );
                                                                      }}
                                                                    >
                                                                      <i
                                                                        className="far fa-heart"
                                                                        aria-hidden="true"
                                                                      ></i>
                                                                    </button>
                                                                  )}

                                                                  <div className="total-text-comment">
                                                                    &nbsp;•&nbsp;
                                                                    {
                                                                      child.liked
                                                                    }
                                                                  </div>
                                                                </li>
                                                                {/* <li>
                                                                <span>Last active 1 week ago</span>
                                                              </li> */}
                                                              </ul>
                                                            </form>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="my-3"
                                                          style={{
                                                            border:
                                                              ".5px solid #eee",
                                                          }}
                                                        />
                                                      </li>
                                                    );
                                                  })
                                              : null}
                                          </ul>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recomend-education">
        <div className="container-fluid">
          <div className="row content-recomend-edu">
            <div className="col-md-4">
              <div className="title-section-left">
                <h3>
                  Recommend
                  <br />
                  Education
                </h3>
                <p>
                  Find online courses and degrees from us and start learning
                  online anywhere and anytime.
                </p>
                <div className="d-flex slide-recomend-edu-arrow-button mx-auto">
                  <img
                    src={require("../../assets/img/icon/arrow-prev.png")}
                    alt="prev"
                    className="custom-slick-button mr-2"
                    height={50}
                    onClick={slickPrev}
                  />
                  <img
                    src={require("../../assets/img/icon/arrow-next.png")}
                    alt="next"
                    className="custom-slick-button"
                    height={50}
                    onClick={slickNext}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary-custom"
                  onClick={handleEducation}
                >
                  See All Courses
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <div className="slider-recomend-edu">
                <Slider
                  className="slider-recomend-training"
                  ref={slider}
                  dots={false}
                  slidesToShow={2.5}
                  slidesToScroll={1}
                  customPaging={customPaging}
                  infinite={false}
                  arrows={false}
                >
                  {allCourse.map((course, index) => (
                    <a
                      className="card-recomend card-list-recomend"
                      key={index}
                      style={{ paddingRight: "10px" }}
                      onClick={() => {
                        if (course.id === parseInt(params.id)) {
                          scrollToTop();
                        } else {
                          handleEduDetail(course.id);
                        }
                      }}
                    >
                      <div className="recomend-card-img">
                        <img alt="pict" src={course.cover_photo} />
                      </div>
                      <div className="recomend-edu-info">
                        <h3>{course.title}</h3>
                        <label>{course.provider_name}</label>
                        <p className="d-flex">
                          <DynamicStar
                            rating={parseFloat(course.rating_total).toFixed(1)}
                            width={parseFloat(20)}
                            height={parseFloat(20)}
                            outlined={true}
                            sharpnessStar={2.5}
                            fullStarColor={"#FFBC00"}
                            emptyStarColor={"transparent"}
                          />
                          <b>{course.rating_total}</b> ({" "}
                          {course.user_rating.length} )
                        </p>
                        <h5>
                          Rp. {course.discount_price}
                          <span>Rp. {course.price}</span>
                        </h5>
                      </div>
                    </a>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <button>
        {visible ? (
          <div className="scroll-to-top-btn visible">
            <img
              src={require("../../assets/img/back-to-top.png")}
              alt=""
              onClick={scrollToTop}
            />
          </div>
        ) : (
          <div className="scroll-to-top-btn hidden">
            <img
              src={require("../../assets/img/back-to-top.png")}
              alt=""
              onClick={scrollToTop}
            />
          </div>
        )}
      </button>
    </>
  );
};

export default EducationDetail;
