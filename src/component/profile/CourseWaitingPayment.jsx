/*eslint-disable*/
import React, { useEffect, useState } from "react";
import CourseService from "../../store/services/CourseService";
import { DynamicStar } from "react-dynamic-star";

const CourseWaitingPayment = ({ course, provider }) => {
  const [courseById, setCourseById] = useState();

  useEffect(() => {
    if (course) {
      CourseService.getCourseById(course.course_id)
        .then((res) => setCourseById(res.data))
        .catch((err) => {
          return err;
        });
    }
  }, [course]);

  return (
    <>
      {courseById && (
        <div className="card-recomend card-list-recomend card-recomend-profile">
          <div className="recomend-card-img">
            <img src={course.photo} />
          </div>
          <div className="recomend-edu-info">
            <h3>{course.name}</h3>
            {/* <label>{course.provider_name}</label> */}
            <p>
              <span className="stars p-0">
                <DynamicStar
                  rating={parseFloat(courseById.rating_total).toFixed(1)}
                  width={parseFloat(20)}
                  height={parseFloat(20)}
                  outlined={true}
                  sharpnessStar={2.5}
                  fullStarColor={"#FFBC00"}
                  emptyStarColor={"transparent"}
                />
              </span>
              <strong className="ms-2">{courseById.rating_total}</strong>
              <small className="text-grey ms-2">
                ({courseById.user_rating.length})
              </small>
            </p>
            <div className="row align-items-center justify-content-end me-2 mt-3">
              <a
                href={course.payment_detail}
                target="_blank"
                className="profile btn btn-secondary-purple"
              >
                Pay Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseWaitingPayment;
