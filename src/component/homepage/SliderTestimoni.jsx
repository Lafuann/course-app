/* eslint-disable */
import React, { useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router";

const SliderTestimoni = () => {
  const navigate = useNavigate();

  const handleToRegister = () => {
    navigate("/register");
  };
  const slider = useRef();
  const slickSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  const slickNext = () => {
    slider.current.slickNext();
  };
  const slickPrev = () => {
    slider.current.slickPrev();
  };
  return (
    <>
      <section className="content-testimonial py-5">
        <div className="container-fluid">
          <div className="slider-single-item">
            <Slider ref={slider} {...slickSettings}>
              <div className="single-box">
                <div className="row why-gig py-5">
                  <div className="col-md-6 text-center">
                    <div className="testimonial-img">
                      <img
                        src={require("../../assets/img/testimonial-01.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h4>WHY GIG UNIVERSITY</h4>
                    <h2>GigU is here for you!</h2>
                    <p>
                      “I love GigU! I have learned a lot from the instructor. I
                      feel more confident.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-box">
                <div className="row why-gig py-5">
                  <div className="col-md-6 text-center">
                    <div className="testimonial-img">
                      <img
                        src={require("../../assets/img/testimonial-02.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h4>WHY GIG UNIVERSITY</h4>
                    <h2>GigU is here for you!</h2>
                    <p>
                      “I enjoyed my journey. I now look forward to more
                      courses.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-box">
                <div className="row why-gig py-5">
                  <div className="col-md-6 text-center">
                    <div className="testimonial-img">
                      <img
                        src={require("../../assets/img/testimonial-03.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h4>WHY GIG UNIVERSITY</h4>
                    <h2>GigU is here for you!</h2>
                    <p>
                      “I love GigU! GigU offers so many courses that I like."
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-box">
                <div className="row why-gig py-5">
                  <div className="col-md-6 text-center">
                    <div className="testimonial-img">
                      <img
                        src={require("../../assets/img/testimonial-04.jpg")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h4>WHY GIG UNIVERSITY</h4>
                    <h2>GigU is here for you!</h2>
                    <p>
                      “I love what my Mentor from GigU; GS Fauziyah Md Aris aka
                      Qash Aris taught me, that is, to be Crazy, Creative, &
                      Cool (3Cs). I had a great learning session with her
                      because her course is fun, informative and full of
                      guidance. I would encourage you to enroll in her course;
                      3C with Qash Aris if you want to explore and build your
                      creativity on digital platform.”
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="row navigation">
            <div className="col-md-6 offset-md-6">
              <div className="d-flex slide-testimonial-arrow align-items-center justify-content-center mb-4">
                <img
                  src={require("../../assets/img/icon/left-chevron.png")}
                  alt="prev"
                  className="custom-slick-button"
                  onClick={slickPrev}
                  height={20}
                />
                <div
                  className="slick-navigation"
                  style={{ width: "100px", backgroundColor: "#000" }}
                ></div>
                <img
                  src={require("../../assets/img/icon/right-chevron.png")}
                  alt="next"
                  className="custom-slick-button"
                  onClick={slickNext}
                  height={20}
                />
              </div>
              <button
                className="btn-secondary-purple"
                onClick={handleToRegister}
              >
                <a style={{ all: "unset" }}>Register Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderTestimoni;
