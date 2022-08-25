/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router";

const NeedOurHelp = () => {
  const navigate = useNavigate();
  const handleFaq = (e) => {
    navigate("/faq");
  };
  return (
    <section className="bg-light py-5 help-us">
      <div className="container-fluid">
        <div className="text-center">
          <h2>Need Our Help?</h2>
          <ul className="list-unstyled d-flex align-items-center justify-content-center">
            <li>
              <a href="#" className="btn btn-secondary-purple">
                Chat with us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-outline-secondary-custom mt-0 bg-white"
                onClick={handleFaq}
              >
                FAQ Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NeedOurHelp;
