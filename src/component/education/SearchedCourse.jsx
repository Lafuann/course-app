/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../Footer";
import NeedOurHelp from "../NeedOurHelp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import backToTop from "../../assets/img/back-to-top.png";
import "../../assets/css/main.css";
import "../../assets/css/mobile.css";
import "../../assets/css/custom-by-dev.css";
import { DynamicStar } from "react-dynamic-star";
import { createBrowserHistory } from "history";

const SearchedCourse = () => {
  const navigate = useNavigate();
  const history = createBrowserHistory();
  const searchData = useSelector((state) => state.course.search.data);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
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
    if (searchData) {
      setShow(true);
    }
  }, [searchData]);
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
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Courses List</a>
                </li>
              </ol>
            </nav>
          </div>

          <div className="container-fluid">
            <div className="row align-items-center pb-5">
              <div className="col-md-3 left-banner mt-0">
                <h1 className="display-5 fw-bold lh-1 mb-3">Course List</h1>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <!-- explore-course --> */}
      {show ? (
        searchData.data.length ? (
          <section className="explore-course mt-5 explore-education-course">
            <div className="container-fluid">
              <h4 className="mb-5">The result of your search : </h4>
              <div className="row detail-per-category">
                {searchData.data.map((item, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <a
                        className="card-recomend card-list-recomend"
                        onClick={() => {
                          navigate(`/education/${item.id}`);
                          history.go(0);
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
                              rating={parseFloat(item.rating_total).toFixed(1)}
                              width={parseFloat(20)}
                              height={parseFloat(20)}
                              outlined={true}
                              sharpnessStar={2.5}
                              fullStarColor={"#FFBC00"}
                              emptyStarColor={"transparent"}
                            />
                            <b>{item.rating_total}</b> (20.578)
                          </p>
                          <h5>
                            Rp.{" "}
                            {item.discount_price
                              ? item.discount_price
                              : item.price}
                            {item.discount_price ? (
                              <span>Rp. {item.price} </span>
                            ) : null}
                          </h5>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="empty-search">
              <h3 className="text-center text-secondary">No Data Found.</h3>
            </div>
          </section>
        )
      ) : (
        <section>
          <div className="empty-search">
            <h3 className="text-center text-secondary">No Data Found.</h3>
          </div>
        </section>
      )}

      {/* <!-- Help Us section--> */}
      <NeedOurHelp />
      {/* footer */}
      <Footer />
      <button>
        {visible ? (
          <div className="scroll-to-top-btn visible">
            <img src={backToTop} alt="" onClick={scrollToTop} />
          </div>
        ) : (
          <div className="scroll-to-top-btn hidden">
            <img src={backToTop} alt="" onClick={scrollToTop} />
          </div>
        )}
      </button>
    </>
  );
};

export default SearchedCourse;
