/* eslint-disable */
import React, { useRef } from "react";
import Slider from "react-slick";
import star from "../assets/img/ic-star.svg";
import date from "../assets/img/icon/date2.svg";
import locationIcon from "../assets/img/icon/loc.svg";
import { useNavigate } from "react-router-dom";

const SliderComponentTraining = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  const slider = useRef();
  const slickSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    // arrows: true,
    pauseOnHover: false,
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
          arrows: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
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
  const checkstar = (value) => {
    let star = [];
    for (let i = 0; i < value; i++) {
      star.push(i);
    }
    return star;
  };
  const handleChangePage = () => {
    if (data.btnText == "Training") {
      navigate("/training");
    } else {
      navigate("/education");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row content-recomend-edu">
        <div className="col-md-4">
          <div className="title-section-left">
            <h3>Recommend Training</h3>
            <p>
              Search, find and compare training for your development. Choose in
              house & public training the best for you.
            </p>
            <div className="d-flex slide-recomend-edu-arrow">
              <i className=" fas fa-angle-left" onClick={slickPrev}></i>
              <i className=" fas fa-angle-right" onClick={slickNext}></i>
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary-custom"
              onClick={handleChangePage}
            >
              See All Courses
            </button>
          </div>
        </div>
        {/* slider */}
        <div className="col-md-8">
          <Slider
            className="slider-recomend-edu"
            ref={slider}
            {...slickSettings}
          >
            {data.map((e) => {
              return (
                <div className="card-recomend card-list-recomend" key={e.id}>
                  <div className="recomend-card-img">
                    <img
                      src={require(`../${"assets/img/banner/training/banner-training-01.jpg"}`)}
                      alt=""
                    />

                    <div className="ribbon">
                      <span className="left">
                        SAVE
                        <br />
                        UP TO
                      </span>
                      <span className="right">50%</span>
                    </div>
                  </div>
                  <div className="recomend-training-info">
                    <h3>{e.name}</h3>
                    <div className="row">
                      <div className="col-md-7">
                        <p>
                          <span>
                            <img src={date} alt="" />
                          </span>
                          {`${e.service_date_start} - ${e.service_date_end}`}
                        </p>
                        <p>
                          <span>
                            <img src={locationIcon} alt="" />
                          </span>
                          {e.service_city}
                        </p>
                      </div>
                      <div className="col-md-5">
                        <p>Start from:</p>
                        <label>{e.start_from_price_with_currency}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponentTraining;
