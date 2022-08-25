/*eslint-disable*/
import React, { useEffect, useState } from "react";
import score from "../../assets/img/icon/score.svg";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import CourseService from "../../store/services/CourseService";
import { DynamicStar } from "react-dynamic-star";
import icCheck from "../../assets/img/icon/check.svg";

const CourseCard = ({ coursesData, coursePaid, count }) => {
  const navigate = useNavigate();
  const browserHistory = createBrowserHistory();
  const [courseContent, setCourseContent] = useState();
  const [totalUserRate, setTotalUserRate] = useState();

  useEffect(() => {
    if (coursePaid) {
      CourseService.getCourseContent(coursePaid[count].id)
        .then((res) => setCourseContent(res.data))
        .catch((err) => {
          return err;
        });
      CourseService.getCourseById(coursePaid[count].id)
        .then((res) => setTotalUserRate(res.data.user_rating.length))
        .catch((err) => {
          return err;
        });
    }
  }, [coursePaid]);

  return (
    <>
      <div className="card-recomend card-list-recomend card-recomend-profile">
        <div className="recomend-card-img">
          <img src={coursePaid[count]?.cover_photo} />
        </div>
        <div className="recomend-edu-info">
          <h3>{coursePaid[count]?.title}</h3>
          <label>{coursePaid[count]?.provider_name}</label>
          <p>
            <span className="stars p-0">
              <DynamicStar
                rating={parseFloat(coursePaid[count].rating_total).toFixed(1)}
                width={parseFloat(20)}
                height={parseFloat(20)}
                outlined={true}
                sharpnessStar={2.5}
                fullStarColor={"#FFBC00"}
                emptyStarColor={"transparent"}
              />
            </span>
            <strong className="ms-2">
              {coursesData &&
                coursesData.filter((data) => data.order_status === 1)[count]
                  .rating_total}
            </strong>
            <small className="text-grey ms-2">({totalUserRate})</small>
          </p>

          <label>
            Course Progress 
            {` (${
              courseContent &&
              coursePaid &&
              (
                (coursePaid[count]?.lesson.filter(
                  (item) => item.assessment === 1
                ).length *
                  100) /
                courseContent.length
              ).toFixed(0)
            } %)`}
            {courseContent &&
              coursePaid &&
              (coursePaid[count]?.lesson.filter((item) => item.assessment === 1)
                .length *
                100) /
                courseContent.length ===
                100 && (
                <span class="completed ms-2">
                  <img src={icCheck} /> Completed
                </span>
              )}
          </label>
          <div className="row">
            <div className="col-md-12">
              <div
                className={
                  courseContent &&
                  coursePaid &&
                  (coursePaid[count]?.lesson.filter(
                    (item) => item.assessment === 1
                  ).length *
                    100) /
                    courseContent.length <
                    100
                    ? "progress custom-progress"
                    : "progress custom-progress finish"
                }
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${
                      courseContent && coursePaid
                        ? (coursePaid[count]?.lesson.filter(
                            (item) => item.assessment === 1
                          ).length *
                            100) /
                          courseContent.length
                        : null
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
                <a
                  onClick={() => {
                    navigate(`/profile/detailcourse/${coursePaid[count].id}`, {
                      state: {
                        order_status: coursesData[count].order_status,
                      },
                    });
                    browserHistory.go(0);
                  }}
                >
                  <strong className="cursor-pointer">Detail Score Quiz</strong>
                </a>
              </p>
            </div>
            <div className="col-md-6 text-end">
              {courseContent &&
              coursePaid &&
              (coursePaid[count]?.lesson.filter((item) => item.assessment === 1)
                .length *
                100) /
                courseContent.length <
                100 &&
              (coursePaid[count]?.lesson.filter((item) => item.assessment === 1)
                .length *
                100) /
                courseContent.length >
                0 ? (
                <a
                  className="btn btn-secondary-purple"
                  onClick={() => {
                    navigate(`/learning/${coursePaid[count].id}`, {
                      state: {
                        order_status: coursesData[count].order_status,
                      },
                    });
                    browserHistory.go(0);
                  }}
                >
                  Continue
                </a>
              ) : (coursePaid[count]?.lesson.filter(
                  (item) => item.assessment === 1
                ).length *
                  100) /
                  courseContent?.length ===
                0 ? (
                <a
                  className="btn btn-secondary-purple"
                  onClick={() => {
                    navigate(`/learning/${coursePaid[count].id}`, {
                      state: {
                        order_status: coursesData[count].order_status,
                      },
                    });
                    browserHistory.go(0);
                  }}
                >
                  Start
                </a>
              ) : (
                <a className="btn btn-secondary-green">Finished</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
