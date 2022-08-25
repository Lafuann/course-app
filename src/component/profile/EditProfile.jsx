/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import backToTop from "../../assets/img/back-to-top.png";
import profile from "../../assets/img/profile.png";

import Footer from "../Footer";
import PhoneInput from "react-phone-input-2";
import { useSelector, useDispatch } from "react-redux";
import { changePhoneNumber } from "../../store/redux/Authentication";
import NavbarProfile from "./NavbarProfile";
import Header from "../header";
import AuthService from "../../store/services/AuthService";
import Api from "../../store/Api";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/mobile.css";
import "../../assets/css/profile.css";
import PhoneInputComponent from "../../utils/PhoneInputComponent";
import {
  editPhoto,
  editProfile,
} from "../../store/redux/actions/profile/editProfile";
import Swal from "sweetalert2";

const EditProfile = () => {
  const initialErrors = {
    fullName: null,
    jobStatus: null,
    address: null,
    city: null,
    postalCode: null,
    phone: null,
    email: null,
    website: null,
    blog: null,
    linkedin: null,
  };
  const [errors, setErrors] = useState(initialErrors);
  const [value, setValue] = useState();
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState([]);
  const [img, setImg] = useState(null);
  const stateData = useSelector((state) => state.user.user.data?.user);
  const [fullName, setFullName] = useState();
  const [job, setJob] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [blog, setBlog] = useState();
  const [linkedin, setLinkedin] = useState();
  const [photo, setPhoto] = useState();
  const [birth, setBirth] = useState();
  const [gender, setGender] = useState();
  const edit = useSelector((state) => state.editProfile);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [hasImage, sethasImage] = useState([]);
  const [phoneCountryCode, setphoneCountryCode] = useState();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (stateData) {
      setFullName(stateData.full_name);
      setJob(stateData.job);
      setAddress(stateData.address);
      setCity(stateData.city);
      setPostalCode(stateData.postal_code);
      setPhoneNumber(stateData.phone_number);
      setCountry(stateData.phone_country_code);
      setEmail(stateData.email);
      setWebsite(stateData.website_url);
      setBlog(stateData.blog_url);
      setLinkedin(stateData.linkedin_url);
      setPhoto(stateData.photo.url);
      setBirth(stateData.date_of_birth);
      setGender(stateData.gender);
    }
  }, [stateData]);

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      const titleCase =
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      return titleCase;
    });
  }

  //validation
  useEffect(() => {
    const re = /^[a-zA-Z\s]*$/;
    if (re.test(fullName) === false) {
      setErrors({
        ...errors,
        fullName: "Please Input Only Letters!",
      });
    } else if (fullName) {
      setErrors({
        ...errors,
        fullName: null,
      });
    } else {
      setErrors({
        ...errors,
        fullName: null,
      });
    }
  }, [fullName]);

  useEffect(() => {
    if (job) {
      setErrors({
        ...errors,
        jobStatus: null,
      });
    }
  }, [job]);

  useEffect(() => {
    if (address) {
      setErrors({
        ...errors,
        address: null,
      });
    }
  }, [address]);

  useEffect(() => {
    if (city) {
      setErrors({
        ...errors,
        city: null,
      });
    }
  }, [city]);

  useEffect(() => {
    const re = /^[0-9]*$/;
    if (postalCode && re.test(postalCode) === false) {
      setErrors({
        ...errors,
        postalCode: "Please Input Only Numbers!",
      });
    } else if (postalCode) {
      setErrors({
        ...errors,
        postalCode: null,
      });
    } else {
      setErrors({
        ...errors,
        postalCode: null,
      });
    }
  }, [postalCode]);

  useEffect(() => {
    if (phoneNumber) {
      setErrors({
        ...errors,
        phone: null,
      });
    }
  }, [phoneNumber]);

  useEffect(() => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email && regex.test(email) === false) {
      setErrors({
        ...errors,
        email: "Email is Invalid!",
      });
    } else if (email) {
      setErrors({
        ...errors,
        email: null,
      });
    } else {
      setErrors({
        ...errors,
        email: null,
      });
    }
  }, [email]);

  useEffect(() => {
    if (website) {
      setErrors({
        ...errors,
        website: null,
      });
    }
  }, [website]);

  useEffect(() => {
    if (blog) {
      setErrors({
        ...errors,
        blog: null,
      });
    }
  }, [blog]);

  useEffect(() => {
    if (linkedin) {
      setErrors({
        ...errors,
        linkedin: null,
      });
    }
  }, [linkedin]);
  // end

  const handleEdit = () => {
    if (
      !fullName &&
      !job &&
      !address &&
      !city &&
      !postalCode &&
      !phoneNumber &&
      !email &&
      !website &&
      !blog &&
      !linkedin
    ) {
      setErrors({
        fullName: "Fullname is Required!",
        jobStatus: "Job Status is Required!",
        address: "Street Address is Required!",
        city: "City is Required!",
        postalCode: "Postal Code is Required!",
        phone: "Phone Number is Required!",
        email: "Email is Required!",
        website: "Website is Required!",
        blog: "Blog is Required!",
        linkedin: "Linkedin accout is Required!",
      });
    } else if (!fullName) {
      setErrors({
        ...errors,
        fullName: "Fullname is Required!",
      });
    } else if (!job) {
      setErrors({
        ...errors,
        jobStatus: "Job Status is Required!",
      });
    } else if (!address) {
      setErrors({
        ...errors,
        address: "Street Address is Required!",
      });
    } else if (!city) {
      setErrors({
        ...errors,
        city: "City is Required!",
      });
    } else if (!postalCode) {
      setErrors({
        ...errors,
        postalCode: "Postal Code is Required!",
      });
    } else if (!phoneNumber) {
      setErrors({
        ...errors,
        phone: "Phone Number is Required!",
      });
    } else if (!email) {
      setErrors({
        ...errors,
        email: "Email is Required!",
      });
    } else if (!website) {
      setErrors({
        ...errors,
        website: "Website is Required!",
      });
    } else if (!blog) {
      setErrors({
        ...errors,
        blog: "Blog is Required!",
      });
    } else if (!linkedin) {
      setErrors({
        ...errors,
        linkedin: "Linkedin account is Required!",
      });
    } else {
      setErrors(initialErrors);

      var profilePict = null;
      if (img !== null) {
        profilePict = img;
      } else if (photo !== null && img === null) {
        var image = new Image();
        image.onload = () => sethasImage(photo);
      } else if (photo === null && img == null) {
        profilePict = null;
      }

      const data = {
        email: email,
        type: "Consumer",
        full_name: fullName,
        date_of_birth: birth,
        job: job,
        gender: gender,
        photo: profilePict ? profilePict : hasImage,
        // photo: null,
        phone_number: phoneNumber,
        phone_country_code: phoneCountryCode,
        address: address,
        country: country,
        city: city,
        postal_code: postalCode,
        website_url: website,
        blog_url: blog,
        linkedin_url: linkedin,
      };
      dispatch(editProfile(data));
    }
  };
  useEffect(() => {
    if (phoneNumber?.substring(0, 2) === "60") {
      setphoneCountryCode("+60");
    } else {
      setphoneCountryCode("+62");
    }
  }, [phoneNumber]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file.size >= 1572864) {
      Swal.fire({
        icon: "error",
        text: "Image size can't be more than 1.5 MB! ",
      }).then((res) => {
        if (res.isConfirmed) {
          setImg(null);
          file = null;
        } else if (res.isDismissed) {
          setImg(null);
          file = null;
        }
      });
    } else {
      setImg(file);
      const imageObj = URL.createObjectURL(file);
      setPhoto(imageObj);
    }
  };

  const convertBase64 = (file, result) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        result(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    if (edit.status === "success") {
      Swal.fire({
        icon: "success",
        title: "SUCCESS!",
        text: "Your profile has been updated!",
      }).then((res) => {
        if (res.isConfirmed) {
          location.reload();
        } else if (res.isDismissed) {
          location.reload();
        }
      });
    }
  }, [edit.status]);

  return (
    <>
      <div className="menu-top sticky-on-top">
        <Header />
      </div>

      {/* profile section */}
      <section className="profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card card-profile">
                <NavbarProfile />
              </div>
            </div>
            <div className="col-md-9">
              <div className="section-analistics">
                <h3 className="mx-4">Edit Profile</h3>
                <div className="card card-edit-prof">
                  <div className="card-body">
                    <form className="row">
                      <div className="col-md-3">
                        <div className="text-center">
                          <div className="photo-wrapper mt-4">
                            <img
                              id="blah"
                              src={photo ? photo : profile}
                              alt="your image"
                            />
                          </div>
                          <div className="input-file-custom">
                            <input
                              accept="image/*"
                              type="file"
                              id="imgInp"
                              onChange={(e) => handleFileUpload(e)}
                            />
                            <label htmlFor="imgInp">Change photo</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="edit-profil-form">
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className={
                                errors.fullName
                                  ? "form-control border-error"
                                  : "form-control"
                              }
                              value={fullName}
                              onChange={(e) =>
                                setFullName(toTitleCase(e.target.value))
                              }
                            />
                            {errors.fullName && (
                              <p className="text-danger">{errors.fullName}</p>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Job Status
                            </label>
                            <input
                              type="text"
                              className={
                                errors.jobStatus
                                  ? "form-control border-error"
                                  : "form-control"
                              }
                              value={job}
                              onChange={(e) => setJob(e.target.value)}
                            />
                            {errors.jobStatus && (
                              <p className="text-danger">{errors.jobStatus}</p>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className={
                                errors.address
                                  ? "form-control border-error"
                                  : "form-control"
                              }
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                            {errors.address && (
                              <p className="text-danger">{errors.address}</p>
                            )}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                  City
                                </label>
                                <input
                                  type="text"
                                  className={
                                    errors.city
                                      ? "form-control border-error"
                                      : "form-control"
                                  }
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                />
                                {errors.city && (
                                  <p className="text-danger">{errors.city}</p>
                                )}
                                {/* <select</select> 
                                  className="form-select "
                                  aria-label="Default select example"
                                >
                                  <option selected
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}>
                                    {city}
                                  </option>
                                  {/* <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option> */}
                                {/* </select>  */}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                  Postal Code
                                </label>
                                <input
                                  type="text"
                                  className={
                                    errors.postalCode
                                      ? "form-control border-error"
                                      : "form-control"
                                  }
                                  value={postalCode}
                                  onChange={(e) =>
                                    setPostalCode(e.target.value)
                                  }
                                />
                                {errors.postalCode && (
                                  <p className="text-danger">
                                    {errors.postalCode}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div>
                              <label htmlFor="" className="form-label">
                                Phone Number
                              </label>
                              <PhoneInputComponent
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber}
                              />
                              {errors.phone && (
                                <p className="text-danger">{errors.phone}</p>
                              )}
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Email
                            </label>
                            <input
                              type="text"
                              className={
                                errors.email
                                  ? "form-control border-error"
                                  : "form-control"
                              }
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                              <p className="text-danger">{errors.email}</p>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Website
                            </label>
                            <input
                              type="text"
                              className={
                                errors.website
                                  ? "form-control border-error"
                                  : "form-control"
                              }
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                            />
                            {errors.website && (
                              <p className="text-danger">{errors.website}</p>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Blog
                            </label>
                            <input
                              type="text"
                              className={
                                errors.blog
                                  ? "form-control border-error"
                                  : "form-control"
                              }
                              value={blog}
                              onChange={(e) => setBlog(e.target.value)}
                            />
                            {errors.blog && (
                              <p className="text-danger">{errors.blog}</p>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Linkedin
                            </label>
                            <input
                              type="text"
                              className={
                                errors.linkedin
                                  ? "form-control border-error"
                                  : "form-control"
                              }
                              value={linkedin}
                              onChange={(e) => setLinkedin(e.target.value)}
                            />
                            {errors.linkedin && (
                              <p className="text-danger">{errors.linkedin}</p>
                            )}
                          </div>

                          <div className="mt-5 text-end">
                            {errors.fullName ||
                            errors.jobStatus ||
                            errors.address ||
                            errors.city ||
                            errors.postalCode ||
                            errors.phone ||
                            errors.email ||
                            errors.website ||
                            errors.blog ||
                            errors.linkedin ? (
                              <button
                                type="button"
                                className="profile btn btn-secondary-purple"
                                onClick={handleEdit}
                                disabled
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="profile btn btn-secondary-purple"
                                onClick={handleEdit}
                              >
                                Save
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
      <a href="#">
        {visible ? (
          <div className="scroll-to-top-btn visible">
            <img src={backToTop} alt="" onClick={scrollToTop} />
          </div>
        ) : (
          <div className="scroll-to-top-btn hidden">
            <img src={backToTop} alt="" onClick={scrollToTop} />
          </div>
        )}
      </a>
    </>
  );
};

export default EditProfile;
