/* eslint-disable */
import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./Footer";
import backToTop from "../assets/img/back-to-top.png";
import GoogleMapReact from "google-map-react";
// styles
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/mobile.css";

const Marker = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  const center = {
    lat: 3.164546034877243,
    lng: 101.61205215318498,
  };
  const zoom = 11;
  const [visible, setVisible] = useState();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  return (
    <>
      <div className="menu-top">
        <Header />
      </div>
      <section className="contact-us">
        <div className="top-contact">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-6">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyABjcc5LXxf8f2ZjBTNJBS7ZAhAgY_NX5c",
                  }}
                  defaultCenter={center}
                  defaultZoom={zoom}
                >
                  <Marker
                    lat={3.164546034877243}
                    lng={101.61205215318498}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
              <div className="col-md-6 p-5">
                <h2 className="mb-4">Contact Us</h2>
                <p className="mb-4">
                  When you enter into any new area of science you almost always
                  find yourself.
                </p>
                <form>
                  <div className="contact-form row mt-4">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ex:giguniv@mail.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="50"
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="text-end mt-4">
                        <button
                          type="button"
                          className="btn btn-secondary-purple"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-5 bottom-contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <p className="mx-3 text-start">
                  If you are a serious astronomy fanatic like a lot of us are,
                  you can probably remember that one event in childhood that
                  started you along this exciting hobby.
                </p>
              </div>
              <div className="col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <div className="d-flex">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="info pt-1">
                        <h4>Address</h4>
                        <p>Kelurahan Durian Taruang, Padang, Sumatera Barat</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info pt-1">
                        <h4>Email</h4>
                        <a href="">info@pixsellz.io</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="info pt-1">
                        <h4>phone</h4>
                        <p>0852-7813-5376 (Telp/Whatsapp)</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offset-md-1 col-md-3">
                <h4 className="f-12 pt-1">socials</h4>
                <ul className="list-unstyled d-flex align-items-center mt-3">
                  <li>
                    <a href="">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default ContactUs;
