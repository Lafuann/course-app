import React from "react";
import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
  };

  const pengaturan = {
    speed: 500,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    appendDots: (dots) => (
      <div className="slick-navigation">
        <ul>{dots}</ul>
      </div>
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderCourses = [
    {
      imgSrc: "assets/img/banner/education/banner-edu-01.jpg",
      title: "Design UI/UX with Figma",
      author: "Martin Perhiniak",
    },
    {
      imgSrc: "assets/img/banner/education/banner-edu-02.jpg",
      title: "Build Mobile App with React.js",
      author: "Martin Perhiniak",
    },
    {
      imgSrc: "assets/img/banner/education/banner-edu-03.jpg",
      title: "Digital Marketing",
      author: "Martin Perhiniak",
    },
    {
      imgSrc: "assets/img/banner/education/banner-edu-01.jpg",
      title: "Ilustrator CC 2020 Masterclass",
      author: "Martin Perhiniak",
    },
    {
      imgSrc: "assets/img/banner/education/banner-edu-02.jpg",
      title: "Ilustrator CC 2020 Masterclass",
      author: "Martin Perhiniak",
    },
  ];

  const sliderTesti = [
    {
      imgSrc: "assets/img/testimonial-01.jpg",
      said: "“I really enjoyed the class and felt the challenge. It built confidence. I look forward to taking another class in the future. Thanks for this wonderful on-line opportunity. “",
    },
    {
      imgSrc: "assets/img/testimonial-02.jpg",
      said: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad officia soluta perspiciatis. Expedita consequuntur facilis harum. Modi labore aliquam debitis dicta ex optio similique. “",
    },
    {
      imgSrc: "assets/img/testimonial-03.jpg",
      said: "“Iure provident accusamus deleniti labore doloremque sed aliquid asperiores, error modi eius unde sapiente optio enim quos, expedita itaque soluta laudantium, a magni voluptate!. “",
    },
  ];

  return (
    <div className="">
      <div className="menu-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid ">
            <a className="navbar-brand" href="/#!">
              <img src="assets/img/logo-login.svg" alt="" />
              <img src="assets/img/logo-login.svg" alt="" />
            </a>

            {/* <!-- Search for Mobile --> */}
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 mx-lg-3 for-mobile">
              <span className="form-control-feedback">
                <img src="assets/img/icon/search.svg" alt="" />
              </span>
              <input
                type="search"
                className="form-control search-style"
                placeholder="What you want to learn?"
                aria-label="Search"
              />
            </form>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse has-search navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-custom">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/#">
                        <img src="assets/img/education.png" alt="" /> Education
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <img src="assets/img/training.png" alt="" /> Training
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <img src="assets/img/career.png" alt="" /> Career
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <img src="assets/img/school.png" alt="" /> Scholarship
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <img src="assets/img/event.png" alt="" /> Event
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <img src="assets/img/space.png" alt="" /> Space
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <img src="assets/img/entertain.png" alt="" />{" "}
                        Entertainment
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* <!-- Search for dekstop --> */}
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 mx-lg-3 for-desktop">
                <span className="form-control-feedback">
                  <img src="assets/img/icon/search.svg" alt="" />
                </span>
                <input
                  type="search"
                  className="form-control search-style"
                  placeholder="What you want to learn?"
                  aria-label="Search"
                />
              </form>

              <ul className="navbar-nav navbar-custom">
                <li className="nav-item">
                  <a className="nav-link" href="/#!">
                    Find a Job
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#!">
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="d-flex ms-auto">
                <button type="button" className="btn btn-primary-custom">
                  Register
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary-custom"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-bg">
        {/* <!-- Header--> */}
        <header>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 left-banner">
                <div className="">
                  <label>UNIVERSITAS TERBUKA UNTUK MASA DEPAN ANDA</label>
                  <h1 className="display-5 fw-bold lh-1 mb-3">
                    Online Learning Designed For Real Life
                  </h1>
                  <p className="lead my-5">
                    Kita akan ajarin kamu sampai bener-bener paham dan mendapat
                    keahlian siap kerja untuk karier masa depan kamu.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start button-header">
                    <button
                      type="button"
                      className="btn btn-primary-custom px-4 me-md-2"
                    >
                      Explore All Courses
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary-custom btn-lg px-4"
                    >
                      Find out more about GIG
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-8 col-lg-6 right-banner">
                <img src="assets/img/img-header.png" alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <!-- Discover section--> */}
      <section className="discover">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="discover-left">
                <h5>GIG UNIVERSITY</h5>
                <h3>
                  Discover Lifelong <span>Learning</span>
                </h3>
                <div
                  className="accordion accordion-flush accordion-discover"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="true"
                        aria-controls="flush-collapseOne"
                      >
                        <label>Upgrade Yourself</label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          This course will assist you in the ongoing development
                          of your skills and abilities by focusing on the nature
                          of the self-development process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <label>Courses taught by real-world experts</label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We vet every instructor to ensure they have credible,
                          real-world experience in the subjects they’ll be
                          teaching.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <label>Online Learning Designed For Real Life</label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Authentic topic and quiz are coherent, meaningful, and
                          purposeful activities which support student learning
                          by immersing learners in the demands of real life.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <label>
                          Learn at your own pace access on mobile and desktop
                        </label>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          With mobile learning, learners are now able to learn
                          in their own style and at their own pace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-right">
                <img src="assets/img/laptop-woman-mockup.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Explore course section--> */}
      <section className="explore-course mt-5">
        <div className="container-fluid">
          <div className="d-flex align-items-center mb-3">
            <div className="title-section-left">
              <h3>Explore top Courses</h3>
              <p>
                Search, find and compare training for your development. Choose
                in house & public training the best for you.
              </p>
            </div>
          </div>

          <nav className="mb-4">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-01-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-01"
                type="button"
                role="tab"
                aria-controls="nav-01"
                aria-selected="true"
              >
                <img src="assets/img/icon/explore-01.svg" alt="" />
                Development
              </button>
              <button
                className="nav-link"
                id="nav-02-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-02"
                type="button"
                role="tab"
                aria-controls="nav-02"
                aria-selected="false"
              >
                <img src="assets/img/icon/explore-02.svg" alt="" />
                Development
              </button>
              <button
                className="nav-link"
                id="nav-03-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-03"
                type="button"
                role="tab"
                aria-controls="nav-03"
                aria-selected="false"
              >
                <img src="assets/img/icon/explore-03.svg" alt="" />
                Development
              </button>
              <button
                className="nav-link"
                id="nav-04-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-04"
                type="button"
                role="tab"
                aria-controls="nav-04"
                aria-selected="false"
              >
                <img src="assets/img/icon/explore-04.svg" alt="" />
                Development
              </button>
              <button
                className="nav-link"
                id="nav-05-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-05"
                type="button"
                role="tab"
                aria-controls="nav-05"
                aria-selected="false"
              >
                <img src="assets/img/icon/explore-05.svg" alt="" />
                Development
              </button>
            </div>
          </nav>
        </div>
        <div className="container-fluid pe-0">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-01"
              role="tabpanel"
              aria-labelledby="nav-01-tab"
            >
              <div className="slider-explore-course">
                <Slider {...settings}>
                  {sliderCourses.map((course, index) => (
                    <a href="/" className="card-recomend card-list-recomend">
                      <div className="recomend-card-img">
                        <img src={course.imgSrc} alt="" />
                      </div>
                      <div className="recomend-edu-info">
                        <h3>{course.title}</h3>
                        <label>{course.author}</label>
                        ASDASDASD
                        <p>
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <b>5.0</b> (20.578)
                        </p>
                        <h5>
                          Rp. 236.600<span>Rp. 2.800.000</span>
                        </h5>
                      </div>
                    </a>
                  ))}
                </Slider>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-02"
              role="tabpanel"
              aria-labelledby="nav-02-tab"
            >
              <div className="slider-explore-course">
                <Slider {...settings}>
                  {sliderCourses.map((course, index) => (
                    <a href="/" className="card-recomend card-list-recomend">
                      <div className="recomend-card-img">
                        <img src={course.imgSrc} alt="" />
                      </div>
                      <div className="recomend-edu-info">
                        <h3>{course.title}</h3>
                        <label>{course.author}</label>
                        <p>
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <b>5.0</b> (20.578)
                        </p>
                        <h5>
                          Rp. 236.600<span>Rp. 2.800.000</span>
                        </h5>
                      </div>
                    </a>
                  ))}
                </Slider>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-03"
              role="tabpanel"
              aria-labelledby="nav-03-tab"
            >
              <div className="slider-explore-course">
                <Slider {...settings}>
                  {sliderCourses.map((course, index) => (
                    <a href="/" className="card-recomend card-list-recomend">
                      <div className="recomend-card-img">
                        <img src={course.imgSrc} alt="" />
                      </div>
                      <div className="recomend-edu-info">
                        <h3>{course.title}</h3>
                        <label>{course.author}</label>
                        <p>
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <b>5.0</b> (20.578)
                        </p>
                        <h5>
                          Rp. 236.600<span>Rp. 2.800.000</span>
                        </h5>
                      </div>
                    </a>
                  ))}
                </Slider>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-04"
              role="tabpanel"
              aria-labelledby="nav-04-tab"
            >
              <div className="slider-explore-course">
                <Slider {...settings}>
                  {sliderCourses.map((course, index) => (
                    <a href="/" className="card-recomend card-list-recomend">
                      <div className="recomend-card-img">
                        <img src={course.imgSrc} alt="" />
                      </div>
                      <div className="recomend-edu-info">
                        <h3>{course.title}</h3>
                        <label>{course.author}</label>
                        <p>
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <b>5.0</b> (20.578)
                        </p>
                        <h5>
                          Rp. 236.600<span>Rp. 2.800.000</span>
                        </h5>
                      </div>
                    </a>
                  ))}
                </Slider>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-05"
              role="tabpanel"
              aria-labelledby="nav-05-tab"
            >
              <div className="slider-explore-course">
                <Slider {...settings}>
                  {sliderCourses.map((course, index) => (
                    <a href="/" className="card-recomend card-list-recomend">
                      <div className="recomend-card-img">
                        <img src={course.imgSrc} alt="" />
                      </div>
                      <div className="recomend-edu-info">
                        <h3>{course.title}</h3>
                        <label>{course.author}</label>
                        <p>
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <img src="assets/img/ic-star.svg" alt="" />
                          <b>5.0</b> (20.578)
                        </p>
                        <h5>
                          Rp. 236.600<span>Rp. 2.800.000</span>
                        </h5>
                      </div>
                    </a>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="/" className="btn btn-secondary-custom btn-lg text-purple">
            <img src="assets/img/colorful-dots.png" className="me-2" alt="" />{" "}
            See All Courses
          </a>
        </div>
      </section>

      {/* <!-- Newest course section--> */}
      <section className="newest-course mt-5">
        <div className="container-fluid">
          <div className="d-flex align-items-center mb-5">
            <div className="title-section-left">
              <h3>Newest Courses</h3>
            </div>
            <div className="d-flex slide-newest-course-arrow ms-auto">
              <i className="slick-prev position-relative"></i>
              <i className="slick-next position-relative"></i>
            </div>
          </div>
        </div>
        <div className="container-fluid pe-0">
          <div className="slider-newest-course">
            <Slider {...settings}>
              {sliderCourses.map((course, index) => (
                <a href="/" className="card-recomend card-list-recomend">
                  <div className="recomend-card-img">
                    <img src={course.imgSrc} alt="" />
                  </div>
                  <div className="recomend-edu-info">
                    <h3>{course.title}</h3>
                    <label>{course.author}</label>
                    <p>
                      <img src="assets/img/ic-star.svg" alt="" />
                      <img src="assets/img/ic-star.svg" alt="" />
                      <img src="assets/img/ic-star.svg" alt="" />
                      <img src="assets/img/ic-star.svg" alt="" />
                      <img src="assets/img/ic-star.svg" alt="" />
                      <b>5.0</b> (20.578)
                    </p>
                    <h5>
                      Rp. 236.600<span>Rp. 2.800.000</span>
                    </h5>
                  </div>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* <!-- MENGAPA GIG UNIVERSITY section--> */}
      <section className="why-gig py-5">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-md-4">
              <h4>MENGAPA GIG UNIVERSITY</h4>
              <h2>What did you get at GIG University?</h2>
              <img
                src="assets/img/why-gig.png"
                className="img-abso-left"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-5">
                  <div className="box">
                    <h5>A broad selection of courses & training</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 offset-md-2">
                  <div className="box">
                    <h5>A broad selection of courses & training</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="box">
                    <h5>Find and apply a suitable jobs for you</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 offset-md-2">
                  <div className="box">
                    <h5>Find a coworking space for you to study</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <a href="/" className="btn btn-primary-custom">
                    Lihat Semua Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimoni --> */}
      <section className="content-testimonial py-5">
        <div className="container-fluid">
          <div className="slider-single-item">
            <Slider {...pengaturan}>
              {sliderTesti.map((testi, index) => (
                <div className="single-box">
                  <div className="row why-gig py-5">
                    <div className="col-md-6 text-center">
                      <div className="testimonial-img">
                        <img src={testi.imgSrc} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <h4>MENGAPA GIG UNIVERSITY</h4>
                      <h2>What did you get at GIG University?</h2>
                      <p>{testi.said}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="row navigation">
            <div className="col-md-6 offset-md-6">
              <div className="d-flex slide-testimonial-arrow align-items-center justify-content-center mb-4">
                <i className="slick-prev position-relative">
                  {/* <FontAwesomeIcon icon={["fas", "fa-angle-left"]} /> */}
                </i>
                ASDASDASD
                <div className="slick-navigation"></div>
                <i className="slick-next position-relative">
                  {/* <FontAwesomeIcon icon={["fas", "fa-angle-right"]} /> */}
                </i>
              </div>

              <a href="/" className="btn-secondary-purple">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner bottom section--> */}
      <section className="bottom-banner">
        <div className="container-fluid">
          <div className="download-app p-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-white">
                  Download Aplikasi
                  <br />
                  GIG University
                </h2>
                <p className="text-white text-start mt-4">
                  Now access to GIG University is easier and can be done
                  anywhere by downloading our Mobile Application. Available for
                  both Android and iOS users.
                </p>
                <ul className="list-unstyled d-flex mt-4">
                  <li className="me-3">
                    <a href="/">
                      <img src="assets/img/app-store.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="assets/img/google-play.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 position-relative">
                <img
                  src="assets/img/app-download.png"
                  className="img-fluid phone"
                  alt=""
                />
              </div>
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
                <a href="/" className="btn btn-secondary-purple">
                  Chat Us Now
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="btn btn-outline-secondary-custom mt-0 bg-white"
                >
                  Go to FAQ Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5">
        <div className="container-fluid px-5">
          <div className="footer-top d-flex align-items-center">
            <img
              src="assets/img/logo-gig-color.png"
              className="img-fluid"
              alt=""
            />
            <p>
              GIG University hadir memberikan solusi untuk persiapan Uji
              Kompetensi anda dengan menyediakan layanan try out dan bimbingan
              belajar berbasis digital
            </p>
          </div>
          <div className="row footer-middle mt-5">
            <div className="col-md-4">
              <p>
                Kelurahan Durian Taruang, Padang,
                <br />
                Sumatera Barat
                <br />
                <br />
                0852-7813-5376 (Telp/Whatsapp)
              </p>
            </div>
            <div className="col-md-3">
              <h4>Program Kami</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Paket Gratis</a>
                </li>
                <li>
                  <a href="/">Paket Non Pembahasan</a>
                </li>
                <li>
                  <a href="/">Paket Pembahasan</a>
                </li>
                <li>
                  <a href="/">Paket Intensif</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>GIG University</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Tentang kami</a>
                </li>
                <li>
                  <a href="/">Bantuan</a>
                </li>
                <li>
                  <a href="/">Kontak Kami</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4>Bantuan</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Tentang kami</a>
                </li>
                <li>
                  <a href="/">Bantuan</a>
                </li>
                <li>
                  <a href="/">Kontak Kami</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-5">
            <p className="m-0 text-center">
              Copyright &copy; 2020. GIG University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <a href="/#" id="scroll" style={{ display: "none" }}>
        <img src="assets/img/back-to-top.png" alt="" />
      </a>
    </div>
  );
}

export default Homepage;
