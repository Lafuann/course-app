/* eslint-disable */
import React, { useEffect, useState } from "react";
import QuizService from "../../store/services/QuizService";

const VideoSection = ({
  lesson,
  index,
  setQuizId,
  setDataQuiz,
  user,
  listLesson,
}) => {
  const [takeQuiz, setTakeQuiz] = useState(false);
  useEffect(() => {
    if (takeQuiz === true) {
      QuizService.getQuizById(lesson.id).then((res) =>
        setDataQuiz({ lessonName: lesson.lesson_name, quiz: res.data[0] })
      );
    }
  }, [takeQuiz]);

  const checkIsDone = () => {
    for (let indexLesson = 0; indexLesson < listLesson?.length; indexLesson++) {
      if (
        lesson.id === user[0]?.lesson[indexLesson]?.id &&
        user[0]?.lesson[indexLesson]?.assessment === 1 &&
        user[0]?.lesson[indexLesson]?.status_assessment === 1
      ) {
        return true;
      }
    }
  };

  const checkIsWait = () => {
    for (let indexLesson = 0; indexLesson < listLesson?.length; indexLesson++) {
      if (
        lesson.id === user[0]?.lesson[indexLesson]?.id &&
        user[0]?.lesson[indexLesson]?.assessment === 1 &&
        user[0]?.lesson[indexLesson]?.status_assessment === 0
      ) {
        return true;
      }
    }
  };

  return (
    <>
      <div
        className="tab-pane fade show active"
        id={`video-0${index + 1}`}
        role="tabpanel"
        aria-labelledby="right-tab"
        key={index}
      >
        <h4>Lesson&nbsp; {lesson.id}</h4>
        <h2 className="d-flex align-items-center mb-4">
          {lesson.lesson_name}
          {checkIsDone() ? (
            <button
              type="button"
              className="ms-auto btn btn-secondary-green btn-modal"
              disabled
            >
              Finished
            </button>
          ) : checkIsWait() ? (
            <button
              type="button"
              className="ms-auto btn btn-secondary-yellow btn-modal"
              disabled
            >
              Submitted
            </button>
          ) : (
            <button
              type="button"
              className="ms-auto btn btn-secondary-purple btn-modal"
              data-bs-toggle="modal"
              data-bs-target="#CourseConfirmationStart"
              onClick={() => {
                setTakeQuiz(true);
                setQuizId(lesson.id);
              }}
            >
              Take a Quiz
            </button>
          )}
        </h2>
        <div className="video-wrapper">
          <video
            title="learning-video"
            width="100%"
            height="520"
            controls
            src={lesson.content_path}
          ></video>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
