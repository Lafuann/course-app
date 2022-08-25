/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/mobile.css";
import scrollToTop from "../utils/scrollToTop";

const Footer = () => {
  const navigate = useNavigate();
  const handleContactUs = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  const handleAbout = (e) => {
    e.preventDefault();
    scrollToTop();
    navigate("/about");
  };

  const handleHelp = (e) => {
    e.preventDefault();
    scrollToTop();
    navigate("/help");
  };
  return (
    <footer className="py-5">
      <div className="container-fluid px-5">
        <div className="footer-top d-flex align-items-center">
          <img
            src={require("../assets/img/logo-gig-color.png")}
            className="img-fluid"
            alt=""
          />
          <p>
            GIG University (GigU) is your university for life! Built with love
            and passion, built for you and for your future.
            <br />
            We look forward to welcoming you our GigU community.
          </p>
        </div>
        <div className="row footer-middle mt-5">
          <div className="col-md-4">
            <p>
              GigU HQ
              <br />
              E-3-09 1, NEO Damansara
              <br />
              Jalan PJU 8/1, Damansara Perdana,
              <br />
              47820 Petaling Jaya, Selangor, MALAYSIA.
              <br />
              <br />
              +6016-729-2557
            </p>
            <ul className="mb-4 list-unstyled row">
              <a href="" className="col-auto">
                <i className="fab fa-facebook" style={{ color: "#000" }}></i>
              </a>
              <a href="" className="col-auto">
                <i className="fab fa-twitter" style={{ color: "#000" }}></i>
              </a>
              <a href="" className="col-auto">
                <i className="fab fa-instagram" style={{ color: "#000" }}></i>
              </a>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>GigU Courses and Programmes</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">FREE for YOU</a>
              </li>
              <li>
                <a href="#">100% Online Courses</a>
              </li>
              <li>
                <a href="#">Hybrid Courses</a>
              </li>
              <li>
                <a href="#">GIGU Professional Programmes</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>GIG University (GigU)</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" onClick={handleAbout}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={handleHelp}>
                  Help
                </a>
              </li>
              <li>
                <a href="#" onClick={handleContactUs}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Help</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" onClick={handleAbout}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={handleHelp}>
                  Help
                </a>
              </li>
              <li>
                <a href="#" onClick={handleContactUs}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-5">
          <p className="m-0 text-center">
            Copyright © 2020. GIG University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
