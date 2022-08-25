/* eslint-disable */
import React, { useState, useEffect } from "react";
import Header from "../header";
import deaf from "../../assets/img/icon/deaf.svg";
import purplePlay from "../../assets/img/icon/purple-play.svg";
import play from "../../assets/img/icon/play.svg";
import check from "../../assets/img/icon/check.svg";
import lesson from "../../assets/img/lesson.png";
import list from "../../assets/img/icon/list.svg";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/education-learning.css";
import "../../assets/css/mobile.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCourseById,
  getCourseContent,
  getCourseByUser,
} from "../../store/redux/actions/learning/course";
import restore from "../../assets/img/icon/restore.svg";
import Swal from "sweetalert2";
import VideoSection from "./VideoSection";
import PdfSection from "./PdfSection";

const Learning = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [tab, setTab] = useState("video");
  const userEmail = useSelector((state) => state.user.user?.data?.user.email);
  const myCourses = useSelector((state) => state.course.myCourses);
  const coursesData = myCourses.data;
  const courseData = useSelector((state) => state.course.courseContent.data);
  const courseInfo = useSelector((state) => state.course.courseById?.data);
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [videoSection, setVideoSection] = useState();
  const [pdfSection, setPdfSection] = useState();
  const [quizId, setQuizId] = useState(null);
  const [coursePaid, setCoursePaid] = useState();
  const [isPaid, setIsPaid] = useState();
  const [vidLesson, setVidLesson] = useState({ data: null, i: null });
  const [pdfLesson, setPdfLesson] = useState({ data: null, i: null });
  const [dataQuiz, setDataQuiz] = useState({ lessonName: "", quiz: [] });
  const [modal, setmodal] = useState(false);
  const [courseByUser, setcourseByUser] = useState([]);

  useEffect(() => {
    if (coursesData) {
      setcourseByUser(
        coursesData.filter((data) => data.id === courseData.data[0]?.course_id)
      );
    }
  }, [coursesData, courseData]);

  useEffect(() => {
    if (userEmail) {
      dispatch(getCourseByUser(userEmail));
    }
  }, [userEmail]);

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
    if (coursePaid) {
      if (coursePaid.filter((item) => item.id === info.id).length) {
        setIsPaid(true);
      } else {
        setIsPaid(false);
      }
    }
  }, [coursePaid, info]);

  useEffect(() => {
    if (isPaid === false) {
      Swal.fire({
        icon: "warning",
        title: "Forbidden.",
        text: "Please buy this course to see this learning.",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/education", { state: { course_name: null } });
        } else if (res.isDismissed) {
          navigate("/education", { state: { course_name: null } });
        }
      });
    }
  }, [isPaid]);

  useEffect(() => {
    if (id) {
      dispatch(getAllCourseById(id));
      dispatch(getCourseContent(id));
    }
  }, [id]);

  useEffect(() => {
    if (courseData) {
      setData(courseData.data);
    }
    if (courseInfo) {
      setInfo(courseInfo.data);
    }
  }, [courseData, courseInfo]);

  useEffect(() => {
    if (data) {
      setVideoSection(data.filter((lesson) => lesson.content === "VIDEO"));
      setPdfSection(data.filter((lesson) => lesson.content === "PDF"));
    }
  }, [data]);

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
                  <a href="#!">{info?.title}</a>
                </li>
              </ol>
            </nav>
            <h2 className="mt-4">{info?.title}</h2>
            <div className="d-flex align-items-center">
              <p>
                Created by <strong>{info?.provider_name}</strong>
              </p>
              <p className="ms-5 d-flex align-items-center">
                <img alt="pict" src={deaf} className="mx-2" /> English, Bahasa,
                Germany, French,Spanish
              </p>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
        </div>

        <div className="education-bottom">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-4 left">
                <ul
                  className="nav nav-tabs parent-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${tab === "video" ? "active" : ""}`}
                      type="button"
                      role="tab"
                      onClick={() => setTab("video")}
                    >
                      Video
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${tab === "file" ? "active" : ""}`}
                      type="button"
                      role="tab"
                      onClick={() => setTab("file")}
                    >
                      PDF File
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  {tab === "video" ? (
                    <div
                      className={`tab-pane fade ${
                        tab === "video" ? "show active" : ""
                      }`}
                      role="tabpanel"
                    >
                      <ul
                        className="nav nav-tabs nav-tabs-child mt-4"
                        id="myTab"
                        role="tablist"
                      >
                        {videoSection &&
                          videoSection.map((lesson, index) => (
                            <li
                              className="nav-item"
                              role="presentation"
                              key={index}
                            >
                              <button
                                className="nav-link active"
                                id={`video-tab-0${index + 1}`}
                                data-bs-toggle="tab"
                                data-bs-target="#video-01"
                                type="button"
                                role="tab"
                                aria-controls={`video-0${index + 1}`}
                                aria-selected="true"
                                onClick={() =>
                                  setVidLesson({ data: lesson, i: index })
                                }
                              >
                                <div className="d-flex">
                                  <div className="number">{index + 1}</div>
                                  <div className="title">
                                    <h6>{lesson.lesson_name}</h6>
                                    <div className="d-flex align-items-center vid-document">
                                      <label>
                                        <span>
                                          <img alt="pict" src={play} />
                                        </span>
                                        Video
                                      </label>
                                      {/* <div className="text-progres-course">
                                        <span className="completed ms-0">
                                          <img alt="pict" src={check} /> Diputar
                                        </span>
                                      </div> */}
                                    </div>
                                  </div>
                                  <div className="play">
                                    <img alt="pict" src={purplePlay} />
                                  </div>
                                </div>
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ) : (
                    tab === "file" && (
                      <div
                        className={`tab-pane fade ${
                          tab === "file" ? "show active" : ""
                        }`}
                        role="tabpanel"
                      >
                        <ul
                          className="nav nav-tabs nav-tabs-file nav-tabs-child mt-4"
                          id="myTab"
                          role="tablist"
                        >
                          {pdfSection &&
                            pdfSection.map((item, index) => (
                              <li
                                className="nav-item"
                                role="presentation"
                                key={index}
                              >
                                <button
                                  className="nav-link active"
                                  id="file-tab-01"
                                  data-bs-toggle="tab"
                                  data-bs-target="#file-01"
                                  type="button"
                                  role="tab"
                                  aria-controls="file-01"
                                  aria-selected="true"
                                  onClick={() =>
                                    setPdfLesson({ data: item, i: index })
                                  }
                                >
                                  <div className="d-flex">
                                    <div className="lesson">
                                      <img alt="pict" src={lesson} />
                                    </div>
                                    <div className="title">
                                      <h6 className="vid-document d-flex align-items-center">
                                        {item.lesson_name}
                                        {/* <div className="text-progres-course">
                                          <span className="completed ms-0">
                                            <img alt="pict" src={check} /> Baca
                                          </span>
                                        </div> */}
                                      </h6>
                                      <div className="d-flex align-items-center vid-document">
                                        <label>{item.description}</label>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="col-md-8 right">
                <div className="box">
                  <div className="tab-content" id="myTabContent">
                    {tab === "video" ? (
                      <>
                        {vidLesson.data ? (
                          <VideoSection
                            lesson={vidLesson.data}
                            index={vidLesson.i}
                            setQuizId={setQuizId}
                            setDataQuiz={setDataQuiz}
                            user={courseByUser}
                            listLesson={data}
                            key={{ vidLesson, coursesData, data }}
                          />
                        ) : (
                          <div
                            className="tab-pane fade show active"
                            role="tabpanel"
                          >
                            <h4>Please choose the video.</h4>
                            <h2 className="d-flex align-items-center mb-4"></h2>
                            <div className="video-wrapper">
                              <video
                                title="learning-video"
                                width="100%"
                                height="520"
                              ></video>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      tab === "file" && (
                        <>
                          {pdfLesson.data ? (
                            <PdfSection
                              lesson={pdfLesson.data}
                              index={pdfLesson.i}
                              setQuizId={setQuizId}
                              setDataQuiz={setDataQuiz}
                              user={courseByUser}
                              listLesson={data}
                              key={{ pdfLesson, coursesData, data }}
                            />
                          ) : (
                            <div
                              className="tab-pane fade show active"
                              role="tabpanel"
                            >
                              <h4 className="f-24 d-flex align-items-center mb-4">
                                Please choose the Article.
                              </h4>
                              <iframe
                                title="learning"
                                width="100%"
                                height="520"
                              ></iframe>
                            </div>
                          )}
                          {/* {pdfSection &&
                            pdfSection.map((lesson, index) => (
                              
                            ))} */}
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL */}
      <div
        className="modal fade confirmation"
        id="CourseConfirmationStart"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Quiz
              </h5>
            </div>
            {dataQuiz.quiz.quiz && (
              <div className="modal-body">
                <h2 className="subtitle">
                  {dataQuiz.quiz && <>{dataQuiz.lessonName}</>}
                </h2>
                <div className="box-grey my-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <img alt="pict" src={list} />
                        <p>
                          Questions
                          <strong>
                            {dataQuiz.quiz.quiz
                              ? dataQuiz.quiz.quiz.question.length
                              : 0}{" "}
                            questions
                          </strong>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <img alt="pict" src={restore} />
                        <p>
                          Time
                          <strong>
                            {dataQuiz.quiz.quiz
                              ? dataQuiz.quiz.quiz.time / 60
                              : 0}{" "}
                            minutes
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary-custom"
                data-bs-dismiss="modal"
              >
                Back
              </button>
              <Link
                to={{ pathname: `/quiz/${quizId}` }}
                onClick={() => {
                  window.location.href = `/quiz/${quizId}`;
                }}
              >
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary-purple"
                >
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
