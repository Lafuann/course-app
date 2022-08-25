/* eslint-disable */
import React, { useState } from "react";
import Quiz from "./Quiz";
import ReviewAnswer from "./ReviewAnswer";
import { useSelector } from "react-redux";

const Courses = () => {
  const [section, setSection] = useState("course");
  const id = useSelector((state) => state.quiz.quizId);

  return (
    <>
      {section === "course" ? (
        <Quiz section={section} setSection={setSection} quizId={id} />
      ) : (
        section === "review" && (
          <ReviewAnswer section={section} setSection={setSection} />
        )
      )}
    </>
  );
};

export default Courses;
