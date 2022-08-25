/* eslint-disable */
import React, { useState, useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import DatePicker from "react-datepicker";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import { createBrowserHistory } from "history";
// styles
import "../../../assets/css/main.css";
import "../../../assets/css/custom-by-dev.css";
import "../../../assets/css/mobile.css";
import { register } from "../../../store/redux/actions/auth/regis";
import Swal from "sweetalert2";

const BitMore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const full_name = useSelector((state) => state.regis.full_name);
  const email = useSelector((state) => state.regis.email);
  const password = useSelector((state) => state.regis.password);
  const phone_number = useSelector((state) => state.regis.phone_number);
  const phone_country_code = useSelector(
    (state) => state.regis.phone_country_code
  );
  const [date_of_birth, setdate_of_birth] = useState();
  const [gender, setGender] = useState();
  const regisStatus = useSelector((state) => state.regis.status);

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formattedDate = moment(date_of_birth).format("YYYY/MM/DD");
    if (date_of_birth && gender !== null) {
      const data = {
        email: email,
        password: password,
        date_of_birth: formattedDate,
        full_name: full_name,
        phone_number: phone_number,
        phone_country_code: phone_country_code,
        gender: gender,
      };
      dispatch(register(data));
    } else {
      Swal.fire({
        icon: "error",
        text: "Date of Birth and Gender Must Be Filled!",
      });
    }
  };

  useEffect(() => {
    if (regisStatus === "success") {
      Swal.fire({
        icon: "success",
        title: "SUCCESS!",
        text: "REGISTRATION SUCCESS! Please check your email for verification",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/");
          history.go(0);
        } else if (res.isDismissed) {
          navigate("/");
          history.go(0);
        }
      });
    }
  }, [regisStatus]);

  const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <div className="input-group">
        <input
          value={value}
          className="form-control border-end-0 input-date"
          placeholder="Enter your date birth"
          onClick={onClick}
          ref={ref}
        />
        <div className="input-group-append border-start-0">
          <span className="input-group-text" id="">
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <h2>A Bit More About You</h2>
      <form className="pt-3">
        <div className="form-group">
          <label>Date of Birth</label>
          <div className="input-group">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                className="form-control input-date"
                placeholderText="Enter your date birth"
                value={date_of_birth}
                dateFormat="dd-MM-yyyy"
                openTo="day"
                customInput={<DatePickerInput />}
                onChange={(date) => setdate_of_birth(date)}
                scrollableYearDropdown={true}
                maxDate={moment().toDate()}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <small>
            You will get benefits on your birthday, so please input it correctly
          </small>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="d-flex">
            <div className="card-radio">
              <input
                type="radio"
                name="gender"
                value="male"
                id="card1"
                onClick={handleChange}
              />
              <label htmlFor="card1">
                <p>Male</p>
                <i className="fas fa-male"></i>
              </label>
            </div>
            <div className="card-radio">
              <input
                type="radio"
                name="gender"
                value="female"
                id="card2"
                onClick={handleChange}
              />
              <label htmlFor="card2">
                <p>Female</p>
                <i className="fas fa-female"></i>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group d-flex justify-content-end">
          <a
            href="#"
            className="btn btn-secondary-purple"
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
            onClick={handleRegister}
          >
            Register
          </a>
        </div>
      </form>
    </>
  );
};

export default BitMore;
