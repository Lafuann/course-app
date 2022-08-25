/* eslint-disable */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePhoneNumber } from "../store/redux/Authentication";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const FormPhoneNumber = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState();

  const handleChange = (e) => {
    dispatch(changePhoneNumber(e));
  };

  return (
    <div className="">
      <PhoneInput
        addInternationalOption={false}
        inputStyle={{ width: "100%" }}
        placeholder="Enter your phone number"
        aria-label="Username"
        onChange={handleChange}
        value={phone}
        maxLength={12}
        country={"id"}
        onlyCountries={["id", "my"]}
      />
    </div>
  );
};

export default FormPhoneNumber;
