/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import start from "../../assets/img/ic-star.svg";
import Footer from "../Footer";
import Header from "../header";
import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DynamicStar } from "react-dynamic-star";
import {
  getAllCourse,
  getAllTrendingCourse,
  clearBuyCourse,
} from "../../store/redux/actions/learning/course";

// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/mobile.css";
import NeedOurHelp from "../NeedOurHelp";

function customPaging(i) {
  return <span>{i + 5}</span>;
}

const Education = (props) => {
  const slider = useRef();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
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

  //define state
  const [categories, setCategories] = useState([]);
  const [course, setCourse] = useState([]);
  const [trendingCourse, setTrendingCourse] = useState([]);
  const dispatch = useDispatch();

  const getCategories = useSelector((state) => state.category.category);
  const getCourses = useSelector((state) => state.course.course);
  const getTrendingCourse = useSelector((state) => state.course.trendingCourse);
  const token = localStorage.getItem("token");
  const location = useLocation();
  const [scroll, setscroll] = useState();
  const [visible, setVisible] = useState();
  const [rating, setrating] = useState();
  const [star, setStar] = useState({
    rating: 2,
    totalStars: 5,
    sharpness: 2.5,
    width: 100,
    height: 100,
    outlined: true,
    outlinedColor: "",
    fullStarColor: "#FFBC00",
    emptyStarColor: "transparent",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    dispatch(getAllCourse());
    dispatch(getAllTrendingCourse());
  }, []);

  useEffect(() => {
    if (getTrendingCourse.status === 200) {
      setTrendingCourse(getTrendingCourse.data.data.data);
    }
    if (getCategories.status === 200) {
      setCategories(getCategories.data.data);
    }
    if (getCourses.status === 200) {
      setCourse(getCourses.data.data.data);
    }
  }, [getTrendingCourse, getCategories, getCourses]);

  function checkUser(id) {
    if (token !== null) {
      return `${id}`;
    } else {
      return `/login`;
    }
  }

  useEffect(() => {
    setscroll(document.getElementById(location.state.course_name));
    if (location.state.course_name) {
      if (scroll) {
        setTimeout(() => scroll?.scrollIntoView({ behavior: "smooth" }), 500);
      }
    }
  }, [scroll, location]);

  const handleFloatValue = (e, property) => {
    const float = e.target.value.replace(/,/g, ".");
    setStar((prev) => ({ ...prev, [property]: float }));
  };

  const handleFixed = (rating) => {
    setrating(rating);
  };

  return (
    <>
      <div className="menu-top">
        <Header />
      </div>
      <div className="header-bg header-inside">
        {/* <!-- Header--> */}
        <header>
          <div className="container-fluid py-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-5">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/education">Education</a>
                </li>
              </ol>
            </nav>
          </div>

          <div className="container-fluid">
            <div className="row align-items-center pb-5">
              <div className="col-md-3 left-banner mt-0">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Trending
                  <br />
                  Courses
                </h1>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section className="section-trending-course">
        <div className="container-fluid pe-0">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex slide-trending-course-arrow ms-auto">
                <img
                  src={require("../../assets/img/icon/arrow-prev.png")}
                  alt="prev"
                  className="custom-slick-button mr-2"
                  height={50}
                  onClick={slickPrev}
                />
                <img
                  src={require("../../assets/img/icon/arrow-next.png")}
                  alt="next"
                  className="custom-slick-button"
                  height={50}
                  onClick={slickNext}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="slider-trending-course">
                <Slider
                  className="slider-recomend-training"
                  ref={slider}
                  dots={false}
                  slidesToShow={2.5}
                  slidesToScroll={1}
                  customPaging={customPaging}
                  infinite={false}
                  arrows={false}
                >
                  {course.map((course, index) => (
                    <Link
                      className="card-recomend card-list-recomend"
                      to={{
                        pathname: checkUser(course.id),
                      }}
                      key={index}
                    >
                      <div className="recomend-card-img">
                        <img alt="pict" src={course.cover_photo} />
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
                          <b>{course.rating_total}</b> ({course.user_rating.length})
                        </p>
                        <h5>
                          Rp.{" "}
                          {course.discount_price
                            ? course.discount_price
                            : course.price}
                          <span>
                            {course.discount_price
                              ? `Rp. ${course.price}`
                              : null}
                          </span>
                        </h5>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- explore-course --> */}
      {categories.map((category, index) => (
        <section
          className="explore-course mt-5 explore-education-course"
          key={index}
        >
          {/* category section */}
          <div className="container-fluid">
            <div className="d-flex align-items-center mb-5">
              <div
                className="title-section-left"
                key={index}
                id={category.category_name}
              >
                <h3>
                  <span className="bg-grey">
                    <img alt="pict" src={category.file_path} />
                  </span>
                  {category.category_name}
                </h3>
                <p>
                  Search, find and compare training for your development. Choose
                  in house & public training the best for you.
                </p>
              </div>
            </div>
          </div>

          {/* course section */}
          <div className="container-fluid pe-0">
            <div className="slider-explore-course">
              <div className="education courses-list">
                {course.map((course, index) =>
                  course.category_id === category.id ? (
                    <>
                      <div className="card-course">
                        <Link
                          className="card-recomend card-list-recomend"
                          to={{
                            pathname: checkUser(course.id),
                          }}
                          onClick={() => dispatch(clearBuyCourse())}
                          key={index}
                        >
                          <div className="recomend-card-img">
                            <img alt="pict" src={course.cover_photo} />
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
                              <b>{course.rating_total}</b> ({course.user_rating.length})
                            </p>
                            <h5>
                              Rp. {course.discount_price}
                              <span>Rp. {course.price}</span>
                            </h5>
                          </div>
                        </Link>
                      </div>
                    </>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* <!-- Help Us section--> */}
      <NeedOurHelp />

      {/* footer */}
      <Footer />
      <button>
        {visible ? (
          <div className="scroll-to-top-btn visible">
            <img
              alt="pict"
              src={require("../../assets/img/back-to-top.png")}
              onClick={scrollToTop}
            />
          </div>
        ) : (
          <div className="scroll-to-top-btn hidden">
            <img
              alt="pict"
              src={require("../../assets/img/back-to-top.png")}
              onClick={scrollToTop}
            />
          </div>
        )}
      </button>
    </>
  );
};

export default Education;
