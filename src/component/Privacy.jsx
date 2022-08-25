/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import backToTop from "../assets/img/back-to-top.png";
// styles
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/mobile.css";
import NeedOurHelp from "./NeedOurHelp";

const Privacy = () => {
  const [visible, setVisible] = useState();

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
  return (
    <>
      <div className="menu-top sticky-on-top">
        <Header />
      </div>
      <div className="header-bg header-inside">
        {/* <!-- Header--> */}
        <header>
          <div className="container-fluid terms-ornament">
            <div className="row align-items-center">
              <div className="col-md-12 left-banner mt-0">
                <div className="text-center">
                  <h1 className="display-5 fw-bold lh-1 mb-3 text-start">
                    Privacy Policy
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <!--Content Education--> */}
      {/* <!-- FAQ section--> */}
      <section className="terms-section mt-5">
        <div className="container-fluid">
          <div className="py-4">
            <h2 className="mb-3">Privacy Policy</h2>
            <p className="mb-5">
              This Privacy Policy was last updated on December 1, 2021.
              <br />
              <br />
              Thank you for joining Udemy. We at Udemy (“Udemy”, “we”, “us”)
              respect your privacy and want you to understand how we collect,
              use, and share data about you. This Privacy Policy covers our data
              collection practices and describes your rights regarding your
              personal data.
              <br />
              <br />
              Unless we link to a different policy or state otherwise, this
              Privacy Policy applies when you visit or use the Udemy and CorpU
              websites, mobile applications, APIs, or related services,
              including CorpU Open (the “Services”). It also applies to
              prospective customers of our business and enterprise products.
              <br />
              <br />
              By using the Services, you agree to the terms of this Privacy
              Policy. You shouldn’t use the Services if you don’t agree with
              this Privacy Policy or any other agreement that governs your use
              of the Services.
            </p>

            <ul className="list-unstyled mb-5">
              <li>
                <a href="#section-A" className="js-anchor-link">
                  A. Obtainment and Collection of Users’ Personal Data
                </a>
              </li>
              <li>
                <a href="#section-B" className="js-anchor-link">
                  B. Use of Users’ Personal Data
                </a>
              </li>
              <li>
                <a href="#section-C" className="js-anchor-link">
                  C. Disclosure and Transfer of Users’ Personal Data
                </a>
              </li>
              <li>
                <a href="#section-D" className="js-anchor-link">
                  D. Cookies
                </a>
              </li>
              <li>
                <a href="#section-E" className="js-anchor-link">
                  E. User Selection and Transparency
                </a>
              </li>
              <li>
                <a href="#section-F" className="js-anchor-link">
                  F. Security, Storage and Removal of Users’ Personal Data
                </a>
              </li>
              <li>
                <a href="#section-G" className="js-anchor-link">
                  G. Access and Correction of Users’ Personal Data or Consent
                  Withdrawal
                </a>
              </li>
              <li>
                <a href="#section-H" className="js-anchor-link">
                  H. Complaints related to Protection of Users’ Personal Data
                </a>
              </li>
              <li>
                <a href="#section-I" className="js-anchor-link">
                  I. Contact Us
                </a>
              </li>
              <li>
                <a href="#section-J" className="js-anchor-link">
                  J. Privacy Policy Update
                </a>
              </li>
            </ul>

            <div id="section-A">
              <h2 className="mb-3">
                A. Obtainment and Collection of Users’ Personal Data
              </h2>
              <p className="mb-5">
                Personal Data for the purpose of processing User transactions,
                managing and ease the process of using the Site as described in
                this Privacy Policy, and for other purposes insofar permissible
                under the applicable laws and regulations. The collected Users’
                Personal Data are as follows:
                <br />
                <br />
                Data provided independently by the User, including but not
                limited to data provided at the time the User: creates or
                updates the Tokopedia account, including among others username,
                email address, telephone number, password, address, photos and
                other identifiable information of the User; contacts Tokopedia,
                including through customer service; fills out a survey sent by
                Tokopedia or other parties officially appointed to represent
                Tokopedia; interacts with other Users through messaging feature,
                product discussion, review, rating, Resolution Center (as
                defined in the Terms and Conditions) and other interactive
                features (whether one or two way) available on the Site; uses
                services on the Site, including detailed transactions data,
                among others the type, number and/or description of products or
                services being purchased, shipping address, payment channel
                being used, number of transactions, date and time of
                transaction, as well as other transaction details; fills in
                payment data at the time the User conducts a payment transaction
                activity through the Site, including but not limited to bank
                account data, credit card, electronic money/wallet, virtual
                account, instant payment, internet banking, retail stores;
                and/or uses features on the Site which require access permission
                to the relevant data stored in the User’s device. Data stored at
                the time the User uses the Site, including but not limited to:
                real or approximate location data such as IP address, Wi-Fi
                location and geo-location; data in the form of the time of every
                activity of a User in relation to the use of Site, including the
                time of registration, login and transaction; User usage or
                preference data, including User interactions in using the Site,
                saved selection, and selected setting. The data is obtained
                using cookies, pixel tags and similar technologies that create
                and maintain a unique identifier; device data, among others the
                device type used to access the Site, including hardware model,
                operating system and its version, software, IMEI number, file
                name and its version, language selection, unique device
                identifier, advertising identifier, serial number, device
                movement information, and/or cellular data in the form of email
                from marketing service providers.
              </p>
            </div>

            <div id="section-B">
              <h2 className="mb-3">B. Use of Users’ Personal Data</h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-C">
              <h2 className="mb-3">
                C. Disclosure and Transfer of Users’ Personal Data
              </h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-D">
              <h2 className="mb-3">D. Cookies</h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-E">
              <h2 className="mb-3">E. User Selection and Transparency</h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-F">
              <h2 className="mb-3">
                F. Security, Storage and Removal of Users’ Personal Data
              </h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-G">
              <h2 className="mb-3">
                G. Access and Correction of Users’ Personal Data or Consent
                Withdrawal
              </h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-H">
              <h2 className="mb-3">
                H. Complaints related to Protection of Users’ Personal Data
              </h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-I">
              <h2 className="mb-3">I. Contact Us</h2>
              <p className="mb-5"></p>
            </div>

            <div id="section-J">
              <h2 className="mb-3">J. Privacy Policy Update</h2>
              <p className="mb-5"></p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Help Us section--> */}
      <NeedOurHelp />
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

export default Privacy;
