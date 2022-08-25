/* eslint-disable */
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import icStar from "../../assets/img/ic-star.svg";
import "../../assets/css/main.css";
import "../../assets/css/mobile.css";
import "../../assets/css/custom-by-dev.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DynamicStar } from "react-dynamic-star";

const SliderNewestCourse = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");
  const getCourse = useSelector((state) => state.course.course);

  const sortedCourse = courses.sort(
    (a, b) => new Date(a.updated_date) - new Date(b.updated_date)
  );

  const slider = useRef();
  const slickSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          variableWidth: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          variableWidth: true,
          arrows: false,
        },
      },
    ],
  };
  const slickNext = () => {
    slider.current.slickNext();
  };
  const slickPrev = () => {
    slider.current.slickPrev();
  };

  useEffect(() => {
    if (getCourse.status === 200) {
      setCourses(getCourse.data.data.data);
    }
  }, [getCourse]);

  function checkUser(id) {
    if (token !== null) {
      return `/education/${id}`;
    } else {
      return `/login`;
    }
  }
  return (
    <>
      <section className="newest-course mt-5">
        <div className="container-fluid">
          <div className="d-flex align-items-center mb-5">
            <div className="title-section-left">
              <h3>Newest Courses</h3>
            </div>
            <div className="d-flex slide-newest-course-arrow ms-auto">
              <img
                src={require("../../assets/img/icon/arrow-prev.png")}
                alt="prev"
                className="custom-slick-button mr-1"
                height={45}
                onClick={slickPrev}
              />
              <img
                src={require("../../assets/img/icon/arrow-next.png")}
                alt="next"
                className="custom-slick-button"
                height={45}
                onClick={slickNext}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid pe-0">
          <div className="slider-newest-course">
            <Slider ref={slider} {...slickSettings}>
              {sortedCourse.map((course, index) => {
                return (
                  <Link
                    className="card-recomend card-list-recomend"
                    to={{
                      pathname: checkUser(course.id),
                    }}
                    key={index}
                  >
                    <div className="recomend-card-img">
                      <img src={course.cover_photo} />
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
                          totalStar={course.user_rating.length}
                        />
                        <b>{course.rating_total}</b> ({" "}
                        {course.user_rating.length} )
                      </p>
                      <h5>
                        Rp. {course.discount_price}
                        <span>Rp. {course.price}</span>
                      </h5>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderNewestCourse;
