/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import icStar from "../../assets/img/ic-star.svg";
import "../../assets/css/main.css";
import "../../assets/css/mobile.css";
import "../../assets/css/custom-by-dev.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DynamicStar } from "react-dynamic-star";

const SliderExploreTopCourses = () => {
  const [course, setCourse] = useState([]);
  const [tab, setTab] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategotyId] = useState(null);
  const token = localStorage.getItem("token");
  const getCategory = useSelector((state) => state.category.category);
  const getCourse = useSelector((state) => state.course.course);
  const navigate = useNavigate();
  const slider = useRef();
  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef();
  const slider4 = useRef();
  const slider5 = useRef();
  const slider6 = useRef();
  const slider7 = useRef();
  const slider8 = useRef();
  const slider9 = useRef();
  const slider10 = useRef();
  const slider11 = useRef();
  const slider12 = useRef();
  const slider13 = useRef();
  const slider14 = useRef();
  const slider15 = useRef();
  const slider16 = useRef();
  const slider17 = useRef();
  const slider18 = useRef();
  const slider19 = useRef();
  const slider20 = useRef();

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
    if (tab === 1) {
      slider1.current.slickNext();
    } else if (tab === 2) {
      slider2.current.slickNext();
    } else if (tab === 3) {
      slider3.current.slickNext();
    } else if (tab === 4) {
      slider4.current.slickNext();
    } else if (tab === 5) {
      slider5.current.slickNext();
    } else if (tab === 6) {
      slider6.current.slickNext();
    } else if (tab === 7) {
      slider7.current.slickNext();
    } else if (tab === 8) {
      slider8.current.slickNext();
    } else if (tab === 9) {
      slider9.current.slickNext();
    } else if (tab === 10) {
      slider10.current.slickNext();
    } else if (tab === 11) {
      slider11.current.slickNext();
    } else if (tab === 12) {
      slider12.current.slickNext();
    } else if (tab === 13) {
      slider13.current.slickNext();
    } else if (tab === 14) {
      slider14.current.slickNext();
    } else if (tab === 15) {
      slider15.current.slickNext();
    } else if (tab === 16) {
      slider16.current.slickNext();
    } else if (tab === 17) {
      slider17.current.slickNext();
    } else if (tab === 18) {
      slider18.current.slickNext();
    } else if (tab === 19) {
      slider19.current.slickNext();
    } else if (tab === 20) {
      slider20.current.slickNext();
    } else {
      slider.current.slickNext();
    }
  };
  const slickPrev = () => {
    if (tab === 1) {
      slider1.current.slickPrev();
    } else if (tab === 2) {
      slider2.current.slickPrev();
    } else if (tab === 3) {
      slider3.current.slickPrev();
    } else if (tab === 4) {
      slider4.current.slickPrev();
    } else if (tab === 5) {
      slider5.current.slickPrev();
    } else if (tab === 6) {
      slider6.current.slickPrev();
    } else if (tab === 7) {
      slider7.current.slickPrev();
    } else if (tab === 8) {
      slider8.current.slickPrev();
    } else if (tab === 9) {
      slider9.current.slickPrev();
    } else if (tab === 10) {
      slider10.current.slickPrev();
    } else if (tab === 11) {
      slider11.current.slickPrev();
    } else if (tab === 12) {
      slider12.current.slickPrev();
    } else if (tab === 13) {
      slider13.current.slickPrev();
    } else if (tab === 14) {
      slider14.current.slickPrev();
    } else if (tab === 15) {
      slider15.current.slickPrev();
    } else if (tab === 16) {
      slider16.current.slickPrev();
    } else if (tab === 17) {
      slider17.current.slickPrev();
    } else if (tab === 18) {
      slider18.current.slickPrev();
    } else if (tab === 19) {
      slider19.current.slickPrev();
    } else if (tab === 20) {
      slider20.current.slickPrev();
    } else {
      slider.current.slickPrev();
    }
  };

  useEffect(() => {
    if (getCourse.status === 200) {
      setCourse(getCourse.data.data.data);
    }
    if (getCategory.status === 200) {
      setCategories(getCategory.data.data);
    }
  }, [getCourse, getCategory]);

  function checkUser(id) {
    if (token !== null) {
      return `/education/${id}`;
    } else {
      return `/login`;
    }
  }

  const handleEducation = () => {
    navigate("/education", { state: { course_name: null } });
  };

  const handleFilter = (index, id) => {
    setTab(index);
    setCategotyId(id);
  };

  return (
    <>
      <section className="explore-course mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="d-flex align-items-center mb-3">
                <div className="title-section-left">
                  <h3>Explore our top Courses</h3>
                  <p>Starts your journey with GigU now!</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="text-end pt-3">
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

          <nav className="mb-4">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {categories.map((cat, index) => (
                <button
                  className={`nav-link mb-2 ${tab === index ? "active" : ""}`}
                  // className="nav-link"
                  type="button"
                  onClick={() => handleFilter(index, cat.id)}
                  key={index}
                >
                  <img src={cat.file_path} style={{ width: "50px" }} />
                  {cat.category_name}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div
          className={`container-fluid pe-0 ${
            course.filter((item) => item.category_id === categoryId).length ===
            0
              ? ""
              : "ps-0"
          }`}
        >
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active">
              <div className="slider-explore-course">
                <Slider
                  ref={
                    tab === 1
                      ? slider1
                      : tab === 2
                      ? slider2
                      : tab === 3
                      ? slider3
                      : tab === 4
                      ? slider4
                      : tab === 5
                      ? slider5
                      : tab === 6
                      ? slider6
                      : tab === 7
                      ? slider7
                      : slider
                  }
                  {...slickSettings}
                >
                  {categoryId === null ? (
                    course.map((course, index) => (
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
                              rating={parseFloat(course.rating_total).toFixed(
                                1
                              )}
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
                            Rp.{" "}
                            {course.discount_price
                              ? course.discount_price
                              : course.price}
                            {course.discount_price ? (
                              <span>Rp. {course.price}</span>
                            ) : null}
                          </h5>
                        </div>
                      </Link>
                      // </a>
                    ))
                  ) : course.filter((item) => item.category_id === categoryId)
                      .length === 0 ? (
                    <div className="text-center empty-course-by-cat">
                      <label>No data found.</label>
                    </div>
                  ) : (
                    course
                      .filter((item) => item.category_id === categoryId)
                      .map((item, index) => {
                        return (
                          <>
                            <Link
                              className="card-recomend card-list-recomend"
                              to={{
                                pathname: checkUser(item.id),
                              }}
                              key={index}
                            >
                              <div className="recomend-card-img">
                                <img src={item.cover_photo} />
                              </div>
                              <div className="recomend-edu-info">
                                <h3>{item.title}</h3>
                                <label>{item.provider_name}</label>
                                <p className="d-flex">
                                  <DynamicStar
                                    rating={parseFloat(
                                      item.rating_total
                                    ).toFixed(1)}
                                    width={parseFloat(20)}
                                    height={parseFloat(20)}
                                    outlined={true}
                                    sharpnessStar={2.5}
                                    fullStarColor={"#FFBC00"}
                                    emptyStarColor={"transparent"}
                                    totalStar={item.user_rating.length}
                                  />
                                  <b>{item.rating_total}</b> ({" "}
                                  {item.user_rating.length} )
                                </p>
                                <h5>
                                  Rp.{" "}
                                  {item.discount_price
                                    ? item.discount_price
                                    : item.price}
                                  {item.discount_price ? (
                                    <span>Rp. {item.price}</span>
                                  ) : null}
                                </h5>
                              </div>
                            </Link>
                          </>
                        );
                      })
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={handleEducation}
            className="btn btn-secondary-custom btn-lg text-purple"
          >
            <a>
              <img
                src={require("../../assets/img/colorful-dots.png")}
                className="me-2"
              />{" "}
              See All Courses
            </a>
          </button>
        </div>
      </section>
      {/* end Slider */}
    </>
  );
};

export default SliderExploreTopCourses;
