/* eslint-disable */
import React, { useState } from "react";
import loc from '../../assets/img/icon/loc.svg';
import date2 from '../../assets/img/icon/date2.svg';
import NeedOurHelp from "../NeedOurHelp";
import Footer from "../Footer";
import Header from "../header";
import FeedComponent from "../FeedComponent";

const index = () => {

  return (
    <>
      <div className="menu-top">
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
                  <h1 class="display-5 fw-bold lh-1 mb-3">Entertainment</h1>
                </div>
              </div>
              <div className="col-10 col-sm-8 col-lg-6 right-banner">
                <img src={require("../../assets/img/banner-education.png")} />
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* contain */}
      <section class="list-program list-education mt-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="sidebar-filter">
                <h4></h4>
                <div class="accordion custom-accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Entertainment Category
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
                                <label for="checkbox_2">Competition</label>
                            </div>
                          </li>
                          <li>
                            <div class="checkbox">
                              <input type="checkbox" id="checkbox_3" />
                                <label for="checkbox_3">Training</label>
                            </div>
                          </li>
                          <li>
                            <div class="checkbox">
                              <input type="checkbox" id="checkbox_4" />
                                <label for="checkbox_4">Exhibition</label>
                            </div>
                          </li>
                          <li>
                            <div class="checkbox">
                              <input type="checkbox" id="checkbox_5" />
                                <label for="checkbox_5">E-Sport Competition</label>
                            </div>
                          </li>
                          <li>
                            <div class="checkbox">
                              <input type="checkbox" id="checkbox_6" />
                                <label for="checkbox_6">Codes Competition</label>
                            </div>
                          </li>
                          <li>
                            <div class="checkbox">
                              <input type="checkbox" id="checkbox_6" />
                                <label for="checkbox_6">Technology Festival</label>
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
            <div class="col-md-9">
              <div class="mb-4 px-3 d-flex justify-content-between">
                <div class="d-flex">
                  <h2>All Entertainment</h2>
                  <p class="total-grey ml-2">145 Entertainment</p>
                </div>
                <div class="form-group d-flex">
                  <label class="sort">Urut berdasarkan</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Terbaru</option>
                    <option value="1">Terlama</option>
                  </select>
                </div>
              </div>
              <div class="row px-2">
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Virtual Reality Labs</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-2.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>E-Sport Megatron City</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Robotic Inc Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-4.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>360 Dome Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Virtual Reality Labs</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-2.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>E-Sport Megatron City</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Robotic Inc Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-4.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>360 Dome Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Virtual Reality Labs</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-2.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>E-Sport Megatron City</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Robotic Inc Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-4.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>360 Dome Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Virtual Reality Labs</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-2.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>E-Sport Megatron City</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-1.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>Robotic Inc Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-recomend card-list-recomend">
                    <div class="recomend-card-img">
                      <img src={require("../../assets/img/banner/entertainment/banner-entertainment-4.png")} />
                    </div>
                    <div class="recomend-training-info">
                      <h3>360 Dome Experience</h3>
                      <div class="row">
                        <div class="col-md-7">
                          <p><span><img src={date2} /></span>12 Mar - 13 Jun 2019</p>
                          <p><span><img src={loc} /></span>Geeksfarm, Malaysia</p>
                        </div>
                        <div class="col-md-5">
                          <p>Start from:</p>
                          <label>Rp. 236.000</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
                <div class="col-md-12 seo-description">
                  <h6>Explore  All Online Classes</h6>
                  <p>What will you discover as you learn more about illustration? With these Skillshare classes, you can take your skills further, exploring new techniques and topics, like figure drawing, lighting, anatomy, textures, expression, hand lettering, and logo and graphic design. Whether you’re looking for illustration basics for beginners, or you’re an artist looking to take your illustration to the next level, you’ll find tutorials for every skill level, taught by expert illustrators, artists, designers and creative professionals. You can discover different illustration styles, like sketching, comics, editorial and architectural drawing, and learn to use digital illustration tools like Adobe illustrator, Procreate, and Adobe Fresco. With hands-on projects, short lessons, and a community of creators, these Skillshare classes will set your creative journey on the right path.</p>
                </div>
              </div>
            </div>
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