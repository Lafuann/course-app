/*eslint-disable*/
import React, { useEffect, useState } from "react";
import score from "../../assets/img/icon/score.svg";
import { Link } from "react-router-dom";
import CourseService from "../../store/services/CourseService";
import { DynamicStar } from "react-dynamic-star";
import icCheck from "../../assets/img/icon/check.svg";

const CourseCardDone = ({ course, index, setDoneCourse, courses }) => {
  const [courseContent, setCourseContent] = useState();
  const [totalUserRate, setTotalUserRate] = useState();
  const [courseInProgress, setcourseInProgress] = useState();
  const [status, setstatus] = useState(false);

  useEffect(() => {
    if (course) {
      CourseService.getCourseContent(course.id)
        .then((res) => setCourseContent(res.data))
        .catch((err) => {
          return err;
        });
      CourseService.getCourseById(course.id)
        .then((res) => setTotalUserRate(res.data.user_rating.length))
        .catch((err) => {
          return err;
        });
    }
  }, [course]);

  return (
    <>
      {courseContent &&
      (course.lesson.filter((item) => item.assessment === 1).length * 100) /
        courseContent.length ===
        100 ? (
        <div className="col-md-6">
          <div
            className="card-recomend card-list-recomend card-recomend-profile"
            key={index}
          >
            {/* {count = count + 1} */}
            <div className="recomend-card-img">
              <img src={course.cover_photo} />
            </div>
            <div className="recomend-edu-info">
              <h3>{course.title}</h3>
              <label>{course.provider_name}</label>
              <p>
                <span className="stars p-0">
                  <DynamicStar
                    rating={parseFloat(course.rating_total).toFixed(1)}
                    width={parseFloat(20)}
                    height={parseFloat(20)}
                    outlined={true}
                    sharpnessStar={2.5}
                    fullStarColor={"#FFBC00"}
                    emptyStarColor={"transparent"}
                  />
                </span>
                <strong className="ms-2">{course.rating_total}</strong>
                <small className="text-grey ms-2">({totalUserRate})</small>
              </p>
              <label>
                Course Progress{" "}
                {` (${(
                  (course.lesson.filter((item) => item.assessment === 1)
                    .length *
                    100) /
                  courseContent.length
                ).toFixed(0)} %)`}
                <span class="completed ms-2">
                  <img src={icCheck} /> Completed
                </span>
              </label>
              <div className="row">
                <div className="col-md-12">
                  <div className="progress custom-progress finish">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${
                          (course.lesson.filter((item) => item.assessment === 1)
                            .length *
                            100) /
                          courseContent.length
                        }%`,
                        height: "100%",
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className="mb-0 p-0 d-flex align-items-center text-purple">
                    <span className="ps-0">
                      <img src={score} />
                    </span>
                    <Link
                      to={{
                        pathname: `/profile/detailcourse/${course.id}`,
                      }}
                      style={{
                        textDecoration: "none",
                        color: "#802ec0",
                      }}
                    >
                      <strong className="cursor-pointer">
                        Detail Score Quiz
                      </strong>
                    </Link>
                  </p>
                </div>
                <div className="col-md-6 text-end">
                  {/* {courseProgress(coursePaid, index) < 100 ? ( */}
                  <a className="btn btn-secondary-green">Finished</a>
                  {/* ) : (
                  <a href="" className="btn btn-secondary-green">
                    Start Again
                  </a>
                )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CourseCardDone;
