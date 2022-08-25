/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changePhoneNumber,
  changePhoneCountryCode,
} from "../../../store/redux/Authentication";
import { regisStep3 } from "../../../store/redux/actions/auth/regis";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";
import Swal from "sweetalert2";

const PhoneNumber = (props) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState(null);

  const handleChange = (e) => {
    const re = /[0-9]/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    } else {
      e.target.value = "";
      alert("Phone Must be Number!");
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (phoneNumber?.length <= 2 || phoneNumber === null) {
      Swal.fire({
        icon: "error",
        text: "Phone number must be filled!",
      });
    } else if (phoneNumber?.length <= 9) {
      Swal.fire({
        icon: "error",
        text: "Phone number length must be more than 9!",
      });
    } else {
      const phone_number = phoneNumber;
      let phone_country_code = "";
      if (phoneNumber.substring(0, 2) === "62") {
        phone_country_code = "+62";
      } else {
        phone_country_code = "+60";
      }
      // const phone_country_code = phoneNumber.slice(0, 2);
      dispatch(regisStep3(phone_number, phone_country_code));
      props.nextStep();
    }
  };

  function phoneValidation(e) {
    const re = /[0-9]/;
    if (!e.target.value || re.test(e.target.value) === false) {
      return false;
    }
    return true;
  }

  return (
    <>
      <h2>Your Phone Number</h2>
      <form className="pt-3">
        <div className="form-group">
          <div className="input-group">
            <PhoneInput
              addInternationalOption={false}
              inputStyle={{ width: "100%" }}
              placeholder="Enter your phone number"
              aria-label="Username"
              onChange={(e) => {
                setPhoneNumber(e);
              }}
              value={phoneNumber}
              maxLength={9}
              country={"id"}
              onlyCountries={["id", "my"]}
              countryCodeEditable={false}
              required
            />
          </div>
        </div>
        <div className="form-group d-flex justify-content-end">
          <a
            href="#"
            className="btn btn-secondary-purple"
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
            onClick={handleNextStep}
          >
            Next
          </a>
        </div>
      </form>
    </>
  );
};

export default PhoneNumber;
