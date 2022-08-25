/* eslint-disable */
import React, { useEffect, useState } from "react";
import '../assets/js/scripts'
import NeedOurHelp from "./NeedOurHelp";
import Footer from "./Footer";
import Header from "./header";
import rating from '../assets/img/rating.svg';
import feature1 from '../assets/img/feature-1.svg';
import feature2 from '../assets/img/feature-2.svg';
import feature3 from '../assets/img/feature-3.svg';
import feature4 from '../assets/img/feature-4.svg';

const DetailEducation = () => {

  useEffect(() => {
    
  })

  return (
    <>
      <div class="menu-top">
        <div class="top-head d-flex flex-wrap justify-content-center bg-darkpurple">
          <p class="text-white">
            Kita akan ajarin kamu sampai kamu siap untuk bekarya di industri!
          </p>
        </div>
        <Header />
      </div>

      <div class="header-bg header-inside for-detail">
        {/* <!-- Header--> */}
        <header>
          <div class="container-fluid p30">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Bantuan</a></li>
                <li class="breadcrumb-item active" aria-current="page">Melihat Potensi Bisnis Franchise Ekspedisi di Indonesia</li>
              </ol>
            </nav>
          </div>

          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-8 left-banner mt-5">
                <div class="row">
                  <div class="col-5">
                    <img class="w-100 main-img" src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
                  </div>
                  <div class="col-7">
                    <h3 class="display-5 fw-bold lh-1 mb-3">Adobe Ilustrator CC 2020 Masterclass</h3>
                    <div class="d-flex">
                      <div class="rating">
                        <img src={rating} />
                      </div>
                      <div class="testi ml-2 mr-2">
                        <p class="f-14">(20.578)</p>
                      </div>
                      <div class="tags best-seller">Best Seller</div>
                    </div>
                    <p class="f-14">Created by <strong>Martin Perhiniak</strong></p>
                    <p class="f-14">Master Adobe Illustrator CC with this in-depth training for all levels. The whole course content, including examples, techniques, exercises and quizzes have been carefully selected and refined to .... <a href="" class="fw-bold f-14 text-white text-decoration-none">Read more</a></p>
                  </div>
                </div>
              </div>
              <div class="col-10 col-sm-8 col-lg-3 right-banner floating">
                <div class="card w-100 text-center">
                  <div class="card-body">
                    <h5 class="fw-bold f-18">Adobe Ilustrator CC 2020 Masterclass</h5>
                    <p class="f-14 text-grey mb-4">Martin Perhiniak</p>
                    <div class="price">
                      <h5 class="fw-bold f-22">Rp 236.000</h5>
                      <p class="chopped-price text-grey f-12"> Rp 2.800.000</p>
                      <button class="btn btn-primary-custom w-100 no-border m-0">BUY NOW</button>
                      <button class="btn btn-outline-grey w-100 no-border m-0 text-purple bg-white">Share This Course</button>
                    </div>
                    <div class="features mt-2">
                      <h5 class="text-left f-14 fw-bold mb-3">This Course Include</h5>
                      <div class="feature-1 d-flex">
                        <img class="img-fluid" src={feature1} />
                        <p class="ml-2 align-self-center mb-0">13 Hours on-demand video</p>
                      </div>
                      <div class="feature-2 d-flex">
                        <img class="img-fluid" src={feature2} />
                        <p class="ml-2 align-self-center mb-0">Full Lifetime Update</p>
                      </div>
                      <div class="feature-3 d-flex">
                        <img class="img-fluid" src={feature3} />
                        <p class="ml-2 align-self-center mb-0">Access on Mobile and TV</p>
                      </div>
                      <div class="feature-4 d-flex">
                        <img class="img-fluid" src={feature4} />
                        <p class="ml-2 align-self-center mb-0">Certificate of Completion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* <!-- Content--> */}
      <section class="edu-detail-content pb-5">
        <div class="recomend-education">
          <div class="container-fluid">
            <div class="row content-recomend-edu">
              <div class="col-md-7">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">What You Will Learn</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Requirements</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Description</button>
                  </li>
                </ul>
                <div class="tab-content mt-4" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Designing Logos</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Turning Photographs into Vector Artwork</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Preparing graphics for web and print</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Working with type in creative ways</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Learn useful keyboard shortcuts and best practices</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Test your knowledge with quizzes at the end of each chapter</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Creating vector illustrations</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Vectorizing and colorizing traced hand drawings</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Designing infographics</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Mastering advanced Illustrator tools and techniques</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Practice everything you learn with provided Exercise Files</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Learn Illustrator from the start the way a professional would use it</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Designing Logos</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Turning Photographs into Vector Artwork</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Preparing graphics for web and print</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Working with type in creative ways</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Learn useful keyboard shortcuts and best practices</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Test your knowledge with quizzes at the end of each chapter</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Creating vector illustrations</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Vectorizing and colorizing traced hand drawings</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Designing infographics</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Mastering advanced Illustrator tools and techniques</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Practice everything you learn with provided Exercise Files</p>
                    </div>
                    <div class="d-flex mt-2">
                      <img src={require("../assets/img/ic-check.png")} />
                      <p class="ml-2 align-self-center mb-0">Learn Illustrator from the start the way a professional would use it</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <p class="mt-2">In this class, you'll learn how to use Procreate on the iPad Pro with ease. By the time class is over, creating digital illustrations will feel intuitive and natural as drawing with pencil and paper. Class covers all the hidden tools and gestures you need to make creating digital illustrations easy and fun. Plus you'll learn how to make and share a cool time lapse video of your art!</p>
                    <p>As a full-time illustrator, Procreate has changed the way I work. It's my favorite tool for creating art. I can draw anywhere: from my own couch to an airplane. I can undo a mistake with a simple double tap and I have all the colors I could want, with just the tap of a button (and without the hassle of cleaning up all my paints).
                      You can find art I've created in Procreate on greeting cards in your favorite grocery stores, in popular home decor stores, magazines, and if you have babies, they might be wearing art I drew in Procreate. Want to see what I'm working on now?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
              </div>
            </div>
          </div>
        </div>
        {/* <!--List Educations--> */}
        <div class="list-program list-education">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-9">
                <div class="mb-4 d-flex justify-content-between">
                  <div class="d-flex">
                    <h4 class="f-16 bold">Course Content</h4>
                  </div>
                </div>
                <table class="table border-table">
                  <tbody>
                    <tr>
                      <td class="vertical-align-middle">
                        <img src={require("../assets/img/lesson.png")} />
                      </td>
                      <td>
                        <div class="f-14 bold">Lesson 1 :</div>
                        <div class="f-16 bold">Introduction to Ilustrator CC </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="vertical-align-middle">
                        <img src={require("../assets/img/lesson.png")} />
                      </td>
                      <td>
                        <div class="f-14 bold">Lesson 1 :</div>
                        <div class="f-16 bold">Introduction to Ilustrator CC </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="vertical-align-middle">
                        <img src={require("../assets/img/lesson.png")} />
                      </td>
                      <td>
                        <div class="f-14 bold">Lesson 1 :</div>
                        <div class="f-16 bold">Introduction to Ilustrator CC </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="vertical-align-middle">
                        <img src={require("../assets/img/lesson.png")} />
                      </td>
                      <td>
                        <div class="f-14 bold">Lesson 1 :</div>
                        <div class="f-16 bold">Introduction to Ilustrator CC </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button class="btn-outline-grey w-100 no-border m-0 bg-white">See More 10 Lessons</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* need our help */}
      <NeedOurHelp />

      {/* footer */}
      <Footer />
      <a href="#" id="scroll"><img src={require("../assets/img/back-to-top.png")} alt="" /></a>
    </>
  );
}

export default DetailEducation;