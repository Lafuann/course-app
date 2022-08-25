/* eslint-disable */
import React, { useState } from "react";
import NeedOurHelp from "../NeedOurHelp";
import Footer from "../Footer";
import Header from "../header";
import FeedComponent from "../FeedComponent";

const index = () => {

  return (
    <>
      <div className="menu-top">
        <div className="top-head d-flex flex-wrap justify-content-center">
          <p>
            Courses as low as Rp129,000 ends Jan 28.| Succeed with skills that live on the leading-edge. 1 day left!
          </p>
        </div>
        <Header />
      </div>
      <div className="header-bg header-inside">
        {/* header */}
        <header>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 left-banner">
                <div className="">
                  <label>Our Program</label>
                  <h1 className="display-5 fw-bold lh-1 mb-3">Training</h1>
                </div>
              </div>
              <div className="col-10 col-sm-8 col-lg-6 right-banner">
                <img src={require("../../assets/img/banner-education.png")} />
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className="list-program list-education mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          <div class="sidebar-filter">
              <h4></h4>
              <div class="accordion custom-accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Training Category
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                      <ul class="list-unstyled list-checkbox mb-0">
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_1" />
                            <label for="checkbox_1">All Category</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_2" />
                            <label for="checkbox_2">3D Animation</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_3" />
                            <label for="checkbox_3">2D Animation</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_4" />
                            <label for="checkbox_4">Design Interiror</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_5" />
                            <label for="checkbox_5">Video Editing</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_6" />
                            <label for="checkbox_6">Video Motion</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_6" />
                            <label for="checkbox_6">2D Animation</label>
                          </div>
                        </li>
                      </ul>
                      <div class="text-left"><a href="" class="see-more">Show More</a></div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Location
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      <ul class="list-unstyled list-checkbox mb-0">
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_21" />
                            <label for="checkbox_21">All Locations</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_22" />
                            <label for="checkbox_22">Jakarta</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_23" />
                            <label for="checkbox_23">Bandung</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_24" />
                            <label for="checkbox_24">Surabaya</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_25" />
                            <label for="checkbox_25">Yogyakarta</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_26" />
                            <label for="checkbox_26">Malang</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_27" />
                            <label for="checkbox_27">Semarang</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_28" />
                            <label for="checkbox_28">Bali</label>
                          </div>
                        </li>
                        <li>
                          <div class="checkbox">
                            <input type="checkbox" id="checkbox_29" />
                            <label for="checkbox_29">Medan</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeedComponent title="Courses" />
        </div>
      </div>
    </section>
    {/* need our help */}
    <NeedOurHelp />

    {/* footer */}
    <Footer />
    <a href="#" id="scroll"><img src={require("../../assets/img/back-to-top.png")} alt="" /></a>
    </>
  );
}

export default index;