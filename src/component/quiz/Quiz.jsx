/* eslint-disable */
import React, { useState, useEffect } from "react";
import deaf from "../../assets/img/icon/deaf.svg";
import stopwatch from "../../assets/img/icon/stopwatch.svg";
import quizResult from "../../assets/img/icon/quiz-result.svg";
import QuizService from "../../store/services/QuizService";
import Header from "../header";
import { endQuiz } from "../../store/redux/actions/learning/quiz";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CountdownComponent from "../../utils/countdown";
import { getAllCourseById } from "../../store/redux/actions/learning/course";
import { createBrowserHistory } from "history";
import Swal from "sweetalert2";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/education-learning.css";

const Quiz = () => {
  const initialResult = {
    name: "",
    email: "",
    phone_number: "",
    address: "",
    lesson_id: "",
    answer: [],
    time_spent: "",
  };
  const initialTempChosen = {
    id: null,
    answer: null,
    index: null,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const { quiz_id } = useParams();
  const dataUser = useSelector((state) => state.user.user.data);
  const dataCourse = useSelector((state) => state.course.courseById);
  const [user, setUser] = useState();
  const [currentQuest, setCurrentQuest] = useState(0);
  const [course, setCourse] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const [answer, setAnswer] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [question, setQuestion] = useState();
  const [multiple_choice, setChoices] = useState([]);
  const [questLength, setQuestLength] = useState(0);
  const [show, setShow] = useState(false);
  const [tempChosen, setTempChosen] = useState(initialTempChosen);
  const [result, setResult] = useState(initialResult);
  const [modal, setModal] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [chosen, setChosen] = useState([]);
  const [displayChosen, setDisplayChosen] = useState(false);
  const [type, setType] = useState("");
  const timeSpent = useSelector((state) => state.quiz.timeSpent);
  const _choicesArr = [];
  _.map(multiple_choice, (val, key) => {
    _choicesArr.push({ key: key, val: val });
  });
  const [lessonName, setLessonName] = useState(null);
  const handleEndQuiz = (
    name,
    email,
    phone_number,
    address,
    lesson_id,
    answer,
    time_spent
  ) => {
    setResult({
      name: name,
      email: email,
      phone_number: phone_number,
      address: address,
      lesson_id: lesson_id,
      answer: answer,
      time_spent: time_spent,
    });
    setModal(true);
  };

  const nextQuestion = (e) => {
    e.preventDefault();
    if (currentQuest <= 29) {
      setCurrentQuest(currentQuest + 1);
    }
  };

  const prevQuestion = (e) => {
    e.preventDefault();
    if (currentQuest !== 0) {
      setCurrentQuest(currentQuest - 1);
    }
  };

  const handleFinish = (e) => {
    e.preventDefault();
    dispatch(endQuiz(result));
    navigate("/quiz/finished", {
      state: {
        lesson_id: quiz_id,
        course_title: course.title,
        lessonName: lessonName,
        provider_name: course.provider_name,
        subtitle: course.subtitle,
      },
    });
  };

  function selectedChoice(id, answer) {
    setTempChosen({ id: id, answer: answer, index: currentQuest });
  }

  function handleChangeEssay(id, e) {
    setTempChosen({ id: id, answer: e.target.value, index: currentQuest });
  }

  function selectedAnswer() {
    const similarId = answer?.findIndex((obj) => obj.id === tempChosen.id);
    var i = 0;
    const prev = chosen[i === 0 ? chosen.length - 1 : i - 1]?.id;
    const curr = chosen[i]?.id;
    if (type === "multiple") {
      if (answer.length === 0) {
        answer[tempChosen.index].id = tempChosen.id;
        answer[tempChosen.index].answer = tempChosen.answer;
        setAnswer(answer);
      } else if (answer && prev === curr) {
        if (answer[similarId]) {
          answer[similarId].answer = tempChosen.answer;
          setAnswer(answer);
        } else {
          answer[tempChosen.index].id = tempChosen.id;
          answer[tempChosen.index].answer = tempChosen.answer;
          setAnswer(answer);
        }
      } else {
        answer[tempChosen.index].id = tempChosen.id;
        answer[tempChosen.index].answer = tempChosen.answer;
        setAnswer(answer);
      }
    }
  }

  function setEssayAnswer() {
    const similarId = answer?.findIndex((obj) => obj.id === tempChosen.id);
    var i = 0;
    const prevId = chosen[i === 0 ? chosen.length - 1 : i - 1]?.id;
    const currId = chosen[i]?.id;
    if (type === "essay") {
      if (answer && prevId === currId) {
        if (answer[similarId]) {
          answer[similarId].answer = tempChosen.answer;
          setAnswer(answer);
        } else {
          answer[tempChosen.index].id = tempChosen.id;
          answer[tempChosen.index].answer = tempChosen.answer;
          setAnswer(answer);
        }
      } else {
        answer[tempChosen.index].id = tempChosen.id;
        answer[tempChosen.index.answer] = tempChosen.answer;
        setAnswer(answer);
      }
    }
  }

  // setting and getting data
  useEffect(() => {
    if (courseId) {
      dispatch(getAllCourseById(courseId));
    }
  }, [courseId]);

  useEffect(() => {
    if (dataCourse.status === 200) {
      setCourse(dataCourse.data.data);
    }
  }, [dataCourse]);

  useEffect(() => {
    if (course && quiz_id) {
      setLessonName(
        course?.lessons.filter((item) => item.id === JSON.parse(quiz_id))[0]
          .lesson_name
      );
    }
  }, [course, quiz_id]);

  useEffect(() => {
    if (dataUser) {
      setUser(dataUser.user);
    }
  }, [dataUser]);

  useEffect(() => {
    QuizService.getQuizById(quiz_id).then((res) => {
      res.data.map((quiz) => {
        setData(quiz.quiz);
        setCourseId(quiz.course_id);
      });
    });
  }, []);

  useEffect(() => {
    if (!data || data.length > 1) {
      QuizService.getQuizById(quiz_id).then((res) => {
        res.data.map((quiz) => {
          setData(quiz.quiz);
          setCourseId(quiz.course_id);
        });
      });
    }
  }, [data]);

  useEffect(() => {
    if (data.question) {
      setQuestLength(data.question.length);
      const { id, question, multiple_choice, type } =
        data.question[currentQuest];
      setId(id);
      setQuestion(question);
      setChoices(JSON.parse(multiple_choice.choices));
      setShow(true);
      setType(type);
    }
  }, [data, currentQuest]);

  // question section
  useEffect(() => {
    if (timeUp) {
      setResult({
        name: user.full_name,
        email: user.email,
        phone_number: user.phone_country_code + user.phone_number,
        address: user.address,
        lesson_id: quiz_id,
        answer: answer,
        time_spent: timeSpent,
      });
      Swal.fire({
        icon: "warning",
        title: "Time's Up!",
      }).then((res) => {
        if (res.isConfirmed) {
          handleEndQuiz(
            user.full_name,
            user.email,
            user.phone_country_code + user.phone_number,
            user.address,
            quiz_id,
            answer,
            timeSpent
          );
        } else if (res.isDismissed) {
          handleEndQuiz(
            user.full_name,
            user.email,
            user.phone_country_code + user.phone_number,
            user.address,
            quiz_id,
            answer,
            timeSpent
          );
        }
      });
    }
  }, [timeUp]);

  useEffect(() => {
    if (
      type === "essay" &&
      tempChosen.id !== null &&
      tempChosen.answer !== null
    ) {
      setEssayAnswer();
      setTempChosen(initialTempChosen);
    } else {
      setTempChosen(initialTempChosen);
    }
  }, [currentQuest, modal, timeUp]);

  useEffect(() => {
    var item = [];
    if (questLength) {
      for (let index = 0; index < questLength; index++) {
        item.push({ id: "", answer: "" });
      }
      setAnswer(item);
    }
  }, [questLength]);

  useEffect(() => {
    if (type === "multiple") {
      setTimeout(() => setDisplayChosen(true), 100);
    }
  }, [tempChosen]);

  useEffect(() => {
    if (displayChosen === true) {
      setTimeout(() => setDisplayChosen(false), 500);
    }
  }, [displayChosen]);

  useEffect(() => {
    if (tempChosen.id !== null && tempChosen.answer !== null) {
      selectedAnswer();
    }
  }, [tempChosen]);

  useEffect(() => {
    if (chosen.length >= 2) {
      var i = 0;
      const prev = chosen[i === 0 ? chosen.length - 1 : i - 1]?.id;
      const curr = chosen[i]?.id;
      if (prev === curr) {
        chosen.splice(-1);
      }
    }
  }, [chosen]);

  return (
    <>
      <div className="menu-top menu-fixed">
        <Header />
      </div>
      {/* Section education content */}
      <div className="education-learning">
        <div className="education-top">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">My Course</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">{course ? course.title : null}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {lessonName ? lessonName : null}
                </li>
              </ol>
            </nav>
            <h2 className="mt-4">{course ? course.title : null}</h2>
            <div className="d-flex align-items-center">
              <p>
                Created by{" "}
                <strong>{course ? course.provider_name : null}</strong>
              </p>
              <p className="ms-5 d-flex align-items-center">
                <img src={deaf} className="mx-2" /> English, Bahasa, Germany,
                French,Spanish
              </p>
            </div>
            <p>{course ? course.subtitle : null}</p>
          </div>
        </div>
        <div className="education-bottom">
          <div className="container-fluid quiz">
            <div className="top-quiz row">
              <div className="col-md-4" onClick={() => setModal(true)}>
                <h4>Quiz : Introduction to Figma Design</h4>
              </div>
              <div className="col-md-4 text-center d-flex">
                <div className="countdown d-flex align-items-center">
                  <img src={stopwatch} />
                  <div className="time" style={{ minWidth: "100px" }}>
                    <p>Time Remaining</p>
                    <CountdownComponent
                      modal={modal}
                      timeUp={timeUp}
                      setTimeUp={setTimeUp}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <button
                  className="btn btn-outline-secondary-custom"
                  onClick={() =>
                    handleEndQuiz(
                      user.full_name,
                      user.email,
                      user.phone_country_code + user.phone_number,
                      user.address,
                      quiz_id,
                      answer,
                      timeSpent
                    )
                  }
                >
                  END QUIZ
                </button>
              </div>
            </div>
            <div className="bottom-quiz row">
              <div className="col-md-3">
                <ul className="list-unstyled question-status mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="status current-question"></div>
                      <span className="ms-2">Current Question</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="status not-answered"></div>
                      <span className="ms-2">Not answered yet</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="status answered"></div>
                      <span className="ms-2">Answered</span>
                    </div>
                  </li>
                </ul>

                <ul
                  className="list-unstyled total-question question-status"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {show === true &&
                    data.question &&
                    data.question.map((item, index) => (
                      <li key={index}>
                        <a
                          className={`status ${
                            (item.id === id &&
                              item.id === tempChosen.id &&
                              tempChosen.answer) ||
                            (item.id === answer[index]?.id &&
                              answer[index]?.answer)
                              ? "answered"
                              : index === currentQuest
                              ? "current-question"
                              : "not-answered"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentQuest(index);
                          }}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-md-9">
                <div className="top-title">
                  <h2 className="mb-0">
                    Question {show ? currentQuest + 1 : 0} of{" "}
                    {show ? questLength : 0}
                  </h2>
                </div>
                <form>
                  <ul className="list-unstyled">
                    <li>
                      <h5>
                        {show ? `${currentQuest + 1}. ${question}` : null}
                      </h5>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {show && type === "multiple" ? (
                            <ul className="multi-choice list-unstyled mt-3">
                              {_choicesArr.length ? (
                                _choicesArr.map((choice, index) => {
                                  return (
                                    <li key={index}>
                                      <div className="choice">
                                        <label
                                          className="d-flex cursor-pointer"
                                          onClick={() => {
                                            selectedChoice(id, choice.key);
                                          }}
                                        >
                                          <div
                                            className="choice-radio"
                                            style={{
                                              display: "flex",
                                              justifyItems: "center",
                                              alignItems: "center",
                                              fontSize: "14px",
                                              backgroundColor:
                                                (displayChosen === true &&
                                                  id === tempChosen.id &&
                                                  choice.key ===
                                                    tempChosen.answer) ||
                                                (id ===
                                                  answer[currentQuest]?.id &&
                                                  choice.key ===
                                                    answer[currentQuest]
                                                      ?.answer)
                                                  ? "#03c6ae"
                                                  : "transparent",
                                              border:
                                                (displayChosen === true &&
                                                  id === tempChosen.id &&
                                                  choice.key ===
                                                    tempChosen.answer) ||
                                                (id ===
                                                  answer[currentQuest]?.id &&
                                                  choice.key ===
                                                    answer[currentQuest]
                                                      ?.answer)
                                                  ? // (id === tempChosen.id &&
                                                    //   choice.key ===
                                                    //     tempChosen.answer)
                                                    "2px solid #03c6ae"
                                                  : "2px solid #aaaaaa",
                                            }}
                                          >
                                            <i
                                              className="fa fa-check"
                                              style={{
                                                color: "#fff",
                                                margin: "auto",
                                              }}
                                            ></i>
                                          </div>
                                          {show ? choice.val : null}
                                        </label>
                                      </div>
                                    </li>
                                  );
                                })
                              ) : (
                                <>
                                  <li>
                                    <div className="choice">
                                      <label className="d-flex cursor-pointer">
                                        <div className="choice-radio" />
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="choice">
                                      <label className="d-flex cursor-pointer">
                                        <div className="choice-radio" />
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="choice">
                                      <label className="d-flex cursor-pointer">
                                        <div className="choice-radio" />
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="choice">
                                      <label className="d-flex cursor-pointer">
                                        <div className="choice-radio" />
                                      </label>
                                    </div>
                                  </li>
                                </>
                              )}
                            </ul>
                          ) : show && type === "essay" ? (
                            <div className="mt-4 answer">
                              <textarea
                                className="form-control"
                                placeholder="Type your answer here..."
                                rows={5}
                                value={
                                  answer[currentQuest]?.answer
                                    ? answer[currentQuest]?.answer
                                    : tempChosen.answer === null
                                    ? ""
                                    : tempChosen.answer
                                }
                                onChange={(e) => handleChangeEssay(id, e)}
                                required
                              ></textarea>
                            </div>
                          ) : null}
                        </div>
                        <div className="col-md-6 text-center"></div>
                      </div>
                    </li>
                  </ul>
                  <div className="button-wrapper text-center d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary-custom"
                      style={{
                        display: `${currentQuest === 0 ? "none" : "block"}`,
                      }}
                      onClick={prevQuestion}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-secondary-purple ms-auto"
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        display: `${
                          currentQuest === questLength - 1 ? "none" : "block"
                        }`,
                      }}
                      onClick={nextQuestion}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        id="quiz"
        className={
          modal ? "modal confirmation d-block" : "modal confirmation d-none"
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header flex-column pb-1">
              <div className="text-center mb-4">
                <img src={quizResult} />
              </div>
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Review of Quiz Results
              </h5>
            </div>
            <div className="modal-body">
              <h2 className="subtitle f-14">
                {answer.filter((answer) => answer.id !== "").length} questions
                filled out of {questLength} questions
              </h2>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="progress custom-progress finish mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${
                          (answer.filter((answer) => answer.id !== "").length *
                            100) /
                          questLength
                        }%`,
                      }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="text-center">
                    Are you sure you want to end this test?
                    <br />
                    Please double-check your answers before ending this test
                    session.
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {timeUp ? (
                <button
                  className="btn btn-outline-secondary-custom"
                  data-bs-dismiss="modal"
                  disabled
                >
                  Go Back
                </button>
              ) : (
                <a
                  className="btn btn-outline-secondary-custom"
                  data-bs-dismiss="modal"
                  onClick={() => setModal(false)}
                >
                  Go Back
                </a>
              )}
              <a
                className="btn btn-secondary-purple py-2"
                data-bs-dismiss="modal"
                onClick={handleFinish}
              >
                Yes, I’m sure
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
