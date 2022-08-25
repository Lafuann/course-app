/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import start from "../../assets/img/ic-star.svg";
import Footer from "../Footer";
import Header from "../header";
import bannerError from "../../assets/img/img-error.png";
import greySearch from "../../assets/img/icon/grey-search.svg";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCourse,
  getAllTrendingCourse,
  getAllCourseById,
  getCategoryById,
} from "../../store/redux/actions/learning/course";

// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/mobile.css";

function customPaging(i) {
  return <span>{i + 5}</span>;
}

const CourseByCategory = (props) => {
  const slider = useRef();
  const settings = {
    // adaptiveHeight: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    speed: 500,
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
  const [cat, setCat] = useState("");
  const [course, setCourse] = useState([]);
  const [trendingCourse, setTrendingCourse] = useState([]);
  const dispatch = useDispatch();

  const getCategories = useSelector((state) => state.category.category);
  const getCourses = useSelector((state) => state.course.categoryById);
  const getTrendingCourse = useSelector((state) => state.course.trendingCourse);
  // const idCourse = useSelector((state) => state.)
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getAllCourse());
    dispatch(getAllTrendingCourse());
    dispatch(getCategoryById(5));
    setCategoryName();
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
    console.log("getCategoryById", getCourses);
  }, [getTrendingCourse, getCategories, getCourses]);

  const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  function checkUser(id) {
    if (token !== null) {
      return `${id}`;
    } else {
      return `/login`;
    }
  }

  // const setCategoryName = () => {
  //   {course.map((idx, index) => {
      
  //   })}
  // }

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
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Bantuan</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Seeing the Potential of Expedition Franchise Business in
                  Indonesia
                </li>
              </ol>
            </nav>
          </div>

          <div className="container-fluid">
            <div className="row align-items-center pb-5">
              <div className="col-md-3 left-banner mt-0">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Trending on
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
                    >
                      <div className="recomend-card-img">
                        <img alt="pict" src={course.cover_photo} />
                      </div>
                      <div className="recomend-edu-info">
                        <h3>{course.title}</h3>
                        <label>{course.author}</label>
                        <p>
                          <img alt="pict" src={start} />
                          <img alt="pict" src={start} />
                          <img alt="pict" src={start} />
                          <img alt="pict" src={start} />
                          <img alt="pict" src={start} />
                          <b>{course.rating_total}</b> (3)
                        </p>
                        <h5>
                          {course.discount_price}
                          <span>{course.price}</span>
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

      <section className="explore-course mt-5 explore-education-course">
        <div className="container-fluid">
          <div className="d-flex align-items-center mb-5">
            <div className="title-section-left w-100">
              <h3>
                <span className="bg-grey">
                  <img src="assets/img/icon/explore-01.svg" />
                </span>
                Development
              </h3>
              <div className="row">
                <p className="mb-0 col-md-6">
                  Search, find and compare training for your development. Choose
                  in house & public training the best for you.
                </p>
                <form className="col-md-6 sorting-search">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="input-search">
                        <input
                          type="text"
                          name=""
                          placeholder="Search courses"
                        />
                        <img src={greySearch} />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Sort by</option>
                        <option value="1">Newest Course</option>
                        <option value="2">Oldest Courses</option>
                        <option value="3">Best Seller</option>
                        <option value="4">Lowest Price</option>
                        <option value="5">Highest Price</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row detail-per-category">
            <div className="col-md-4">
              <a href="" className="card-recomend card-list-recomend">
                <div className="recomend-card-img">
                  <img src="assets/img/banner/education/banner-edu-01.jpg" />
                </div>
                <div className="recomend-edu-info">
                  <h3>Ilustrator CC 2020 Masterclass</h3>
                  <label>Martin Perhiniak</label>
                  <p>
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <b>5.0</b> (20.578)
                  </p>
                  <h5>
                    Rp. 236.600<span>Rp. 2.800.000</span>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="" className="card-recomend card-list-recomend">
                <div className="recomend-card-img">
                  <img src="assets/img/banner/education/banner-edu-01.jpg" />
                </div>
                <div className="recomend-edu-info">
                  <h3>Ilustrator CC 2020 Masterclass</h3>
                  <label>Martin Perhiniak</label>
                  <p>
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <b>5.0</b> (20.578)
                  </p>
                  <h5>
                    Rp. 236.600<span>Rp. 2.800.000</span>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="" className="card-recomend card-list-recomend">
                <div className="recomend-card-img">
                  <img src="assets/img/banner/education/banner-edu-01.jpg" />
                </div>
                <div className="recomend-edu-info">
                  <h3>Ilustrator CC 2020 Masterclass</h3>
                  <label>Martin Perhiniak</label>
                  <p>
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <b>5.0</b> (20.578)
                  </p>
                  <h5>
                    Rp. 236.600<span>Rp. 2.800.000</span>
                  </h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="" className="card-recomend card-list-recomend">
                <div className="recomend-card-img">
                  <img src="assets/img/banner/education/banner-edu-01.jpg" />
                </div>
                <div className="recomend-edu-info">
                  <h3>Ilustrator CC 2020 Masterclass</h3>
                  <label>Martin Perhiniak</label>
                  <p>
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <img src="assets/img/ic-star.svg" />
                    <b>5.0</b> (20.578)
                  </p>
                  <h5>
                    Rp. 236.600<span>Rp. 2.800.000</span>
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Help Us section--> */}
      <section className="bg-light py-5 help-us">
        <div className="container-fluid">
          <div className="text-center">
            <h2>Need Our Help?</h2>
            <p className="my-4">
              If you’re a learner on the GIG University platform and have
              questions or need technical assistance, please visit our Learner
              Help Center Or you can chat us for further questions.
            </p>
            <ul className="list-unstyled d-flex align-items-center justify-content-center">
              <li>
                <a href="#!" className="btn btn-secondary-purple">
                  Chat Us Now
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="btn btn-outline-secondary-custom mt-0 bg-white"
                >
                  Go to FAQ Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
      <a href="#!" id="scroll">
        <img alt="pict" src={require("../../assets/img/back-to-top.png")} />
      </a>
    </>
  );
};

export default CourseByCategory;
