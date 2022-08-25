/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import NeedOurHelp from "./NeedOurHelp";
import backToTop from "../assets/img/back-to-top.png";
// styles
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/mobile.css";

const TermsCondition = () => {
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
                    Terms and
                    <br />
                    Condition
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <!--Content Education-->
  <!-- FAQ section--> */}
      <section className="terms-section mt-5">
        <div className="container-fluid">
          <div className="py-4">
            <h2 className="mb-3">Terms of services</h2>
            <p className="mb-5">
              Welcome to , an online learning community to master real-world
              skills. The Skillshare website and service including (without
              limitation) all websites, mobile applications and other
              interactive properties through which the service is delivered
              (collectively, the “Service”) are owned, operated and distributed
              by SkillShare, Inc., a Delaware corporation (referred to in these
              Terms of Service as “Skillshare” or “we” and through similar words
              such as “us,” “our,” etc.). By accessing any part of the Service,
              you are agreeing to the terms and conditions described below
              (“these Terms of Service”), the terms and conditions of our
              privacy policy (the “Privacy Policy”) and any other legal notices
              published by us on the Service (collectively, the “Governing
              Documents”). If you do not agree to any of these terms, you should
              not use the Service. These Terms of Service apply to all users,
              including both users who are simply viewing content available via
              the Service and users who have registered as members of
              Skillshare. If you are a business to business purchaser of
              Skillshare for Teams, your access and use of the Service are
              additionally subject to the Master Services Agreement which is
              located at http://teams.skillshare.com/master-services-agreement/
              <br />
              <br />
              We may, at our sole discretion, modify these Terms of Service at
              any time. By accessing the Service at any time after such
              modifications, you are agreeing to such modifications. These Terms
              of Service were last modified as of November 30, 2021.
            </p>

            <h2 className="mb-3">Description of Service</h2>
            <p className="mb-5">
              The Skillshare Service allows students to find classes that they
              are interested in taking, and allows teachers to find students
              interested in taking their classes.
              <br />
              <br />
              We reserve the right to refuse to provide the Service to any
              person for any reason and/or to discontinue the Service in whole
              or in part at any time, with or without prior notice.
            </p>

            <h2 className="mb-3">Copyright, Licenses and User Submissions</h2>
            <p className="mb-5">
              The entire contents of the Service are protected by international
              copyright and trademark laws and other proprietary rights. The
              owners of the copyrights and trademarks are Skillshare, its
              affiliates and/or other third party licensors. YOU MAY NOT MODIFY,
              COPY, REPRODUCE, REPUBLISH, UPLOAD, POST, TRANSMIT, OR DISTRIBUTE,
              IN ANY MANNER, THE MATERIAL ON THE SERVICE, INCLUDING TEXT,
              GRAPHICS, CODE AND/OR SOFTWARE. You may print and download
              portions of material from the different areas of the Service
              solely for your own non-commercial use provided that you agree not
              to change or delete any copyright or proprietary notices from the
              materials, and not to share any material that you paid for with
              anyone else who has not also purchased a license for that
              material.
              <br />
              <br />
              You may not use any robots, spiders, or similar data mining, data
              gathering or extraction tools or manual processes to collect,
              gather or copy any content or data on or related to the Service in
              a manner not authorized by Skillshare in writing. You may not
              engage in practices of “screen scraping,” “database scraping” or
              any other practice or activity the purpose of which is to obtain
              lists of users, portions of a database, or other lists or
              information from the Service, in any manner and any quantities not
              authorized by Skillshare in writing. You may not frame or utilize
              framing techniques to enclose any trademark, logo or other
              proprietary information (including images, text, page layout or
              form) of Skillshare or its affiliates without express written
              consent. You may not use meta tags or any other “hidden text”
              utilizing the Skillshare name or trademarks without the express
              written consent of Skillshare.
              <br />
              <br />
              Content submitted by users for inclusion on the Service
              (including, without limitation, any information submitted on
              message boards, forums or other public areas of the Service) is
              sometimes referred to in these Terms of Service as “User
              Submissions.” Whether or not any User Submission is published, it
              will be subject to these Terms of Service. Skillshare does not
              guarantee any confidentiality with respect to a User Submission,
              regardless of whether or not it is published. You are solely
              responsible for your own User Submissions and the consequences of
              posting or publishing them. You represent and warrant that you own
              or have the necessary licenses, rights, consents and permissions
              to your User Submissions (and all content included therein),
              including the right to authorize Skillshare to use the User
              Submissions in the manner contemplated by the Service and these
              Terms of Service.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Help Us section--> */}
      <NeedOurHelp />
      {/* Footer */}
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

export default TermsCondition;
