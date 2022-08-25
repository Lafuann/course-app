/* eslint-disable */
import React, { useRef } from "react";
import Slider from "react-slick";
import loc from "../../assets/img/icon/loc.svg";
import date2 from "../../assets/img/icon/date2.svg";

const SliderEntertainment = () => {
  const slider = useRef();
  const slickSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
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

  return (
    <div class="container-fluid">
      <div class="row content-recomend-training">
        <div class="col-md-4">
          <div class="title-section-left">
            <h3>
              Recommend
              <br />
              Entertainment
            </h3>
            <p>
              Search, find and compare training for your development. Choose in
              house & public training the best for you.
            </p>
            <div class="d-flex slide-recomend-training-arrow">
              {/* <i className="slick-prev fas fa-angle-left" onClick={slickPrev}></i> */}
              <img
                src={require("../../assets/img/icon/arrow-prev.png")}
                alt="prev"
                height={60}
                onClick={slickPrev}
              />
              {/* <i
                className="slick-next fas fa-angle-right"
                onClick={slickNext}
              ></i> */}
              <img
                src={require("../../assets/img/icon/arrow-next.png")}
                alt="next"
                height={60}
                onClick={slickNext}
              />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <Slider
            class="slider-recomend-training"
            ref={slider}
            {...slickSettings}
          >
            <div class="card-recomend card-list-recomend">
              <div class="recomend-card-img">
                <img
                  src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")}
                />
              </div>
              <div class="recomend-training-info">
                <h3>Virtual Reality Labs</h3>
                <div class="row">
                  <div class="col-md-7">
                    <p>
                      <span>
                        <img src={date2} />
                      </span>
                      12 Mar - 13 Jun 2019
                    </p>
                    <p>
                      <span>
                        <img src={loc} />
                      </span>
                      Geeksfarm, Malaysia
                    </p>
                  </div>
                  <div class="col-md-5">
                    <p>Start from:</p>
                    <label>Rp. 236.000</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-recomend card-list-recomend">
              <div class="recomend-card-img">
                <img
                  src={require("../../assets/img/banner/entertainment/banner-entertainment-2.png")}
                />
              </div>
              <div class="recomend-training-info">
                <h3>E-Sport Megatron City</h3>
                <div class="row">
                  <div class="col-md-7">
                    <p>
                      <span>
                        <img src={date2} />
                      </span>
                      12 Mar - 13 Jun 2019
                    </p>
                    <p>
                      <span>
                        <img src={loc} />
                      </span>
                      Geeksfarm, Malaysia
                    </p>
                  </div>
                  <div class="col-md-5">
                    <p>Start from:</p>
                    <label>Rp. 236.000</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-recomend card-list-recomend">
              <div class="recomend-card-img">
                <img
                  src={require("../../assets/img/banner/entertainment/banner-entertainment-4.png")}
                />
              </div>
              <div class="recomend-training-info">
                <h3>360 Dome Experience</h3>
                <div class="row">
                  <div class="col-md-7">
                    <p>
                      <span>
                        <img src={date2} />
                      </span>
                      12 Mar - 13 Jun 2019
                    </p>
                    <p>
                      <span>
                        <img src={loc} />
                      </span>
                      Geeksfarm, Malaysia
                    </p>
                  </div>
                  <div class="col-md-5">
                    <p>Start from:</p>
                    <label>Rp. 236.000</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-recomend card-list-recomend">
              <div class="recomend-card-img">
                <img
                  src={require("../../assets/img/banner/training/banner-training-01.jpg")}
                />
              </div>
              <div class="recomend-training-info">
                <h3>Making 3D Game using Unity</h3>
                <div class="row">
                  <div class="col-md-7">
                    <p>
                      <span>
                        <img src={date2} />
                      </span>
                      12 Mar - 13 Jun 2019
                    </p>
                    <p>
                      <span>
                        <img src={loc} />
                      </span>
                      Geeksfarm, Malaysia
                    </p>
                  </div>
                  <div class="col-md-5">
                    <p>Start from:</p>
                    <label>Rp. 236.000</label>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderEntertainment;
