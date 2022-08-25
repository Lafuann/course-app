/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Header from "../header";
import deaf from "../../assets/img/icon/deaf.svg";
import smile from "../../assets/img/icon/smile.svg";
import { PieChart } from "react-minimal-pie-chart";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/education-learning.css";
import "../../assets/css/mobile.css";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getScore } from "../../store/redux/actions/learning/quiz";
import { createBrowserHistory } from "history";
import {
  getCourseByUser,
  getCourseContent,
} from "../../store/redux/actions/learning/course";
import ButtonLesson from "./ButtonLesson";
const Score = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.user.user);
  const dataScore = useSelector((state) => state.quiz.score);
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(null);
  const history = createBrowserHistory();
  const courseContent = useSelector(
    (state) => state.course.courseContent?.data
  );
  const courseByUser = useSelector((state) => state.course.myCourses?.data);
  const [listLesson, setlistLesson] = useState([]);
  const [courseUser, setcourseUser] = useState([]);
  const [lessonByCourse, setlessonByCourse] = useState([]);
  const getStatus = useSelector((state) => state.quiz.status);
  const [test, settest] = useState([]);
  const [courseLesson, setcourseLesson] = useState([]);
  const [lessonDone, setlessonDone] = useState([]);
  const [lessonNotTaken, setlessonNotTaken] = useState([]);
  const [courseObject, setcourseObject] = useState([]);
  let course = [];

  const handleToMyCourse = () => {
    navigate("/profile");
    history.go(0);
  };

  const handleNextLesson = () => {
    navigate("/profile");
  };

  const handleToNextLesson = (id) => {
    navigate(`/quiz/${id}`);
    history.go(0);
  };

  useEffect(() => {
    if(getStatus === 'getting score' || getStatus ==='get score success'){
      if (user) {
        dispatch(getCourseByUser(user.email));
      }
      if (courseContent) {
        setlistLesson(courseContent?.data);
      }
      if (courseByUser) {
        setcourseUser(
          courseByUser.filter((data) => data.id === listLesson[0]?.course_id)
        );
      }
    }
  }, [getStatus, user, courseContent, listLesson, courseByUser])

  useEffect(() => {
    if (dataScore?.status === 200) {
      setScore(dataScore.data);
    }
  }, [dataScore]);
  useEffect(() => {
    if (dataUser.status === 200) {
      setUser(dataUser?.data.user);
    }
  }, [dataUser]);

  useEffect(() => {
    if (user) {
      const data = {
        email: user.email,
        lesson_id: state.lesson_id,
      };
      dispatch(getScore(data));
    }
  }, [user]);

  useEffect(() => {
    if (score) {
      dispatch(getCourseContent(score.course_id));
    } else if (!score && courseByUser) {
      dispatch(getCourseContent(courseByUser[0]?.id));
    }
  }, [score, courseByUser]);

  useEffect(() => {
    if (courseContent) {
      setlistLesson(courseContent?.data);
    }
  }, [courseContent]);

  useEffect(() => {
    if (user) {
      dispatch(getCourseByUser(user.email));
    }
  }, [user]);

  useEffect(() => {
    if (courseByUser) {
      setcourseUser(
        courseByUser.filter((data) => data?.id === listLesson[0]?.course_id)
      );
    }
  }, [courseByUser, listLesson]);

  const getLesson = () => {
    if (user) {
      dispatch(getCourseByUser(user.email));
    }
  };

  useEffect(() => {
    var item = [];
    if (courseUser) {
      courseUser[0]?.lesson?.map((data, index) => {
        item = item.concat(data);
      });
      setlessonByCourse(item);
    }
  }, [courseUser]);

  return (
    <>
      <div className="menu-top menu-fixed">
        <Header />
      </div>
      <div className="education-learning">
        <div className="education-top">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#!">My Course</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">{state ? state.course_title : null}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {state ? state.lessonName : null}
                </li>
              </ol>
            </nav>
            <h2 className="mt-4">{state ? state.lessonName : null}</h2>
            <div className="d-flex align-items-center">
              <p>
                Created by <strong>{state ? state.provider_name : null}</strong>
              </p>
              <p className="ms-5 d-flex align-items-center">
                <img alt="pict" src={deaf} className="mx-2" /> English, Bahasa,
                Germany, French,Spanish
              </p>
            </div>
            <p>{state ? state.subtitle : null}</p>
          </div>
        </div>

        <div className="education-bottom score">
          <div className="container-fluid quiz">
            <div className="top-quiz row">
              <div className="col-md-12">
                <h4 className="p-0">
                  Quiz : {state ? state.lessonName : null}
                </h4>
              </div>
            </div>
            <div className="bottom-quiz row">
              <div className="col-md-10 offset-md-1 py-5 my-5">
                <div className="row">
                  <div className="col-md-5">
                    {score !== null ? (
                      <h3>Here are your test results</h3>
                    ) : (
                      <h3>
                        Please wait until we are done assessing your answer
                      </h3>
                    )}
                    <h5 className="mt-4">
                      Thank you for participating in the {state.lessonName}{" "}
                      Quiz.
                    </h5>
                    <p className="mt-4">
                      You have completed the {state.lessonName}.
                      <br />
                      To see the detailed results of this quiz please click the
                      button below
                    </p>
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <a
                          style={{ padding: "10px 20px" }}
                          className="btn btn-secondary-purple"
                          href="#detailScore-passed"
                          data-bs-toggle="modal"
                        >
                          View Detail Score
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a
                          style={{ padding: "10px 20px" }}
                          // href="#!"
                          onClick={getLesson}
                          className="btn btn-outline-secondary-custom"
                          href="#nextLesson"
                          data-bs-toggle="modal"
                        >
                          Continue Next Lesson
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 offset-md-1">
                    <div className="row chart-score position-relative">
                      <div className="col-md-10 offset-md-1">
                        <div className="box-chart">
                          <div className="piechartWrapper">
                            <PieChart
                              data={[
                                {
                                  title: "Score",
                                  value: score ? parseFloat(score.correct_answer).toFixed(0) : null,
                                  color: `${
                                    score
                                      ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                        ? "#03C6AE"
                                        : "#db3563"
                                      : null
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
                                  <img
                                    alt="pict"
                                    src={smile}
                                    className="smile"
                                  />

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
                                        score
                                          ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                            ? "#03C6AE"
                                            : "#db3563"
                                          : null
                                      }`,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {score !== null ? parseFloat(dataEntry.value).toFixed(0) + "%" : "?"}
                                  </text>
                                </>
                              )}
                              labelStyle={{
                                fontSize: "25px",
                                fontWeight: "bold",
                                fill: `${
                                  score
                                    ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                      ? "#03C6AE"
                                      : "#db3563"
                                    : null
                                }`,
                                color: `${
                                  score
                                    ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                      ? "#03C6AE"
                                      : "#db3563"
                                    : null
                                }`,
                                rotate: "90deg",
                                //"#db3563"
                              }}
                              labelPosition={0}
                              rounded
                              style={{ height: "170px", rotate: "" }}
                              animate
                            ></PieChart>
                            <div className="text-center mt-2 mb-4">
                              {score ? (
                                parseFloat(score.correct_answer).toFixed(0) >= 60 ? (
                                  <div className="text-passed w-auto d-inline-block">
                                    PASSED
                                  </div>
                                ) : (
                                  <div className="text-not-passed w-auto d-inline-block">
                                    Not PASSED
                                  </div>
                                )
                              ) : (
                                <div className="text-being-assessed w-auto d-inline-block">
                                  Being Assessed
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-score">
                      <ul className="row mb-0 list-unstyled">
                        <li className="col-md-4">
                          <h5 className="text-green">
                            {score !== null
                              ? score
                                ? parseFloat(score.correct_answer).toFixed(0) + "%"
                                : 0("%")
                              : "? %"}
                          </h5>
                          <p>Correct answer</p>
                        </li>
                        <li className="col-md-4">
                          <h5 className="text-red">
                            {score !== null
                              ? score
                                ? parseFloat(score.wrong_answer).toFixed(0) + "%"
                                : 0("%")
                              : "? %"}
                          </h5>
                          <p>Wrong answer</p>
                        </li>
                        <li className="col-md-4">
                          <h5 className="text-dark">
                            {score !== null
                              ? score
                                ? parseFloat(score.not_answer).toFixed(0) + "%"
                                : 0("%")
                              : "? %"}
                          </h5>
                          <p>Not answered</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail Score */}
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
                <h3 className="fw-bold f-24 mb-4">How to Understand Figma</h3>
                <div className="clearfix">
                  <div className="row position-relative">
                    <div className="col-md-10 offset-md-1">
                      <div className="box-chart">
                        <div className="piechartWrapper">
                          <PieChart
                            data={[
                              {
                                title: "Score",
                                value: score ? parseFloat(score.correct_answer).toFixed(0) : 0,
                                color: `${
                                  score
                                    ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                      ? "#03C6AE"
                                      : "#db3563"
                                    : null
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
                                      score
                                        ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                          ? "#03C6AE"
                                          : "#db3563"
                                        : null
                                    }`,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {score !== null ? parseFloat(dataEntry.value).toFixed(0) + "%" : "?"}
                                </text>
                              </>
                            )}
                            labelStyle={{
                              fontSize: "25px",
                              fontWeight: "bold",
                              fill: `${
                                score
                                  ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                    ? "#03C6AE"
                                    : "#db3563"
                                  : null
                              }`,
                              color: `${
                                score
                                  ? parseFloat(score.correct_answer).toFixed(0) >= 60
                                    ? "#03C6AE"
                                    : "#db3563"
                                  : null
                              }`,
                              rotate: "90deg",
                              //"#db3563"
                            }}
                            labelPosition={0}
                            rounded
                            style={{ height: "170px", rotate: "" }}
                            animate
                          ></PieChart>
                          <div className="text-center mt-2 mb-4">
                            {score ? (
                              parseFloat(score.correct_answer).toFixed(0) >= 60 ? (
                                <div className="text-passed w-auto d-inline-block">
                                  PASSED
                                </div>
                              ) : (
                                <div className="text-not-passed w-auto d-inline-block">
                                  Not PASSED
                                </div>
                              )
                            ) : (
                              <div className="text-being-assessed w-auto d-inline-block">
                                Being Assessed
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-score">
                    <ul className="row mb-0 list-unstyled">
                      <li className="col-md-4">
                        <h5 className="text-green">
                          {score !== null
                            ? score
                              ? parseFloat(score.correct_answer).toFixed(0) + "%" 
                              : 0("%")
                            : "? %"}
                        </h5>
                        <p>Correct answer</p>
                      </li>
                      <li className="col-md-4">
                        <h5 className="text-red">
                          {score !== null
                            ? score
                              ? parseFloat(score.wrong_answer).toFixed(0) + "%" 
                              : 0("%")
                            : "? %"}
                        </h5>
                        <p>Wrong answer</p>
                      </li>
                      <li className="col-md-4">
                        <h5 className="text-dark">
                          {score !== null
                            ? score
                              ? parseFloat(score.not_answer).toFixed(0) + "%"
                              : 0("%")
                            : "? %"}
                        </h5>
                        <p>Not answered</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group mb-0 row">
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="profile btn btn-secondary-purple w-100"
                      onClick={handleToMyCourse}
                    >
                      Go To My Courses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Next Lesson */}
      <div
        className="modal fade"
        id="nextLesson"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center form-rate-review modal-score px-5 py-3">
                <h3 className="fw-bold f-24 mb-4" id="modalHeader">
                  Lesson List
                </h3>
                <div className="clearfix">
                  <div className="row position-relative">
                    <div className="col-md-8 offset-md-1">
                      <div className="box-chart">
                        <div className="text-center mt-2 mb-4">
                          {listLesson.map((lesson, index) => (
                            <ul className="row mb-5 list-unstyled">
                              <li className="col-sm-8 mt-2">
                                <h5 className="text-dark">
                                  {lesson.lesson_name}
                                </h5>
                              </li>
                              <li className="col-sm-4">
                                <ButtonLesson
                                  listLesson={listLesson}
                                  lessonByCourse={lessonByCourse}
                                  count={index}
                                  lesson_id={lesson?.course_id}
                                  key={{lessonByCourse, listLesson}}
                                />
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
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
                    <button
                      type="submit"
                      className="profile btn btn-secondary-purple w-100"
                      onClick={handleToMyCourse}
                    >
                      Go To My Courses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
