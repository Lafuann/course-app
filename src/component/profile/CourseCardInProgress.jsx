/*eslint-disable*/
import React, { useEffect, useState } from "react";
import score from "../../assets/img/icon/score.svg";
import { useNavigate, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import CourseService from "../../store/services/CourseService";
import { DynamicStar } from "react-dynamic-star";

const CourseCardInProgress = ({ course, index, setInProgress }) => {
  const navigate = useNavigate();
  const browserHistory = createBrowserHistory();
  const [courseContent, setCourseContent] = useState();
  const [totalUserRate, setTotalUserRate] = useState();

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

  useEffect(() => {
    if (courseContent) {
      if (
        (course.lesson.filter((item) => item.assessment === 1).length * 100) /
          courseContent.length <
        100
      ) {
        setInProgress(true);
      } else if (
        (course.lesson.filter((item) => item.assessment === 1).length * 100) /
          courseContent.length ===
        100
      ) {
        setInProgress(false);
      }
    }
  }, [courseContent]);

  return (
    <>
      {courseContent &&
        (course.lesson.filter((item) => item.assessment === 1).length * 100) /
          courseContent.length <
          100 && (
          <div className="col-md-6">
            <div
              className="card-recomend card-list-recomend card-recomend-profile"
              key={index}
            >
              <div className="recomend-card-img">
                <img src={course.cover_photo} />
              </div>
              <div className="recomend-edu-info">
                <h3>
                  {course.title}
                </h3>
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
                </label>
                <div className="row">
                  <div className="col-md-12">
                    <div className="progress custom-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${
                            (course.lesson.filter(
                              (item) => item.assessment === 1
                            ).length *
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
                    <a
                      className="btn btn-secondary-purple"
                      onClick={() => {
                        navigate(`/learning/${course.id}`, {
                          state: {
                            order_status: course.order_status,
                          },
                        });
                        browserHistory.go(0);
                      }}
                    >
                      Continue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default CourseCardInProgress;
