/* eslint-disable */
import React, { useState, useEffect } from "react";
// styles
import "../../assets/css/main.css";
import "../../assets/css/custom-by-dev.css";
import "../../assets/css/mobile.css";
import "../../assets/css/profile.css";

import Header from "../header";
import cv from "../../assets/img/icon/cv.svg";
import personalInformation from "../../assets/img/icon/personal-information.svg";
import typeOfApp from "../../assets/img/icon/type-of-app.svg";
import workExp from "../../assets/img/icon/works-experience.svg";
import listWork from "../../assets/img/icon/list-works.svg";
import eduTraining from "../../assets/img/icon/edu-training.svg";
import listEdu from "../../assets/img/icon/list-education.svg";
import certificate from "../../assets/img/icon/certificate.svg";
import personalSkill from "../../assets/img/icon/personal-skill.svg";
// import PhoneInput from "react-phone-number-input";
import Multiselect from "multiselect-react-dropdown";
import NavbarProfile from "./NavbarProfile";
import AuthService from '../../store/services/AuthService'
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css';
//redux
import { useDispatch } from "react-redux";
import { changeFirstName, changeLastName, changeStreetAddress, changeCity, changePostalCode, changePhoneNumber, changePhoneCountryCode, 
  changeEmail, changeWebsite, changeBlog, changeLinkedin } from "../../store/redux/CurriculumVitae"
import { useSelector } from "react-redux";

const CurriculumVitae = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [value, setValue] = useState();
  const [showWorkForm, setShowWorkForm] = useState(false);
  const [showEduForm, setShowEduForm] = useState(false);
  const [workEditForm, setWorkEditForm] = useState(false);
  const [eduEditForm, setEduEditForm] = useState(false);
  const [workExperience, setWorkExperience] = useState([]);
  const [user, setUser] = useState([]);
  const [cv, setCV] = useState([]);
  const options = [
    { value: 1, label: "UI Designer" },
    { value: 2, label: "UI/UX Designer" },
    { value: 3, label: "UX Designer" },
    { value: 4, label: "Fullstack Designer" },
    { value: 5, label: "Graphic Designer" },
  ];
  // const {refresh} = useRequestMe();

  //Page 1
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [phoneCountryCode, setPhoneCountryCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [blog, setBlog] = useState();
  const [linkedin, setLinkedin] = useState();
  const [combine, setCombine] = useState();

  //Page 2
  const rfirstName = useSelector((state) => state.cv.first_name);
  const rlastName = useSelector((state) => state.cv.last_name);
  const raddress = useSelector((state) => state.cv.street_address);
  const rcity = useSelector((state) => state.cv.city);
  const rpostalCode = useSelector((state) => state.cv.postal_code);
  const rphoneCountryCode = useSelector((state) => state.cv.phone_country_code);
  const rphoneNumber = useSelector((state) => state.cv.phone_number);
  const remail = useSelector((state) => state.cv.email);
  const rwebsite = useSelector((state) => state.cv.website);
  const rblog = useSelector((state) => state.cv.blog);
  const rlinkedin = useSelector((state) => state.cv.linkedin);
  const [jobApplied, setJobApplied] = useState();
  const [position, setPosition] = useState();
  const [workTypes, setWorkTypes] = useState();
  const [salary, setSalary] = useState();

  //Page 3
  // const [work, setWork] = useState([]);
  const [workID, setWorkID] = useState();
  const [workName, setWorkName] = useState();
  const [workPosition, setWorkPosition] = useState();
  const [workFrom, setWorkFrom] = useState();
  const [workTo, setWorkTo] = useState();
  const [workOnGoing, setWorkOnGoing] = useState();

  //Page 4
  const [idEdu, setIdEdu] = useState();
  const [eduType, setEduType] = useState();
  const [eduName, setEduName] = useState();
  const [eduDepartment, setEduDepartment] = useState();
  const [eduLocation, setEduLocation] = useState();
  const [eduFrom, setEduForm] = useState();
  const [eduTo, setEduTo] = useState();
  const [eduOnGoing, setOnGoing] = useState();

  //Page 5
  const [languages, setLanguages] = useState();
  const [communications, setCommunications] = useState();
  const [organisationalOrManagerial, setOrganisationalOrManagerial] = useState();
  const [jobRelated, setJobRelated] = useState();
  const [digital, setDigital] = useState();
  
  // const { works } = useEffect(
  //   AuthService.GetAllWorkExperience().then(res => {
  //   })
  // )

  useEffect(async () => {
    const dataUser = JSON.parse(localStorage.getItem("users"));
    if (dataUser) {
      setUser(dataUser);
    }

    async () => {
      const urlProfile = dataUser.photo.thumb.url;
      if (urlProfile != null) {
        const res = await fetch(urlProfile);
        const imageBlob = await res.blob();
        const imageObj = URL.createObjectURL(imageBlob);
        setImg(imageObj);
      } else {
        setImg(null);
      }
    };
    getDataCV();
    getAllWorkExperience();
    // getEditWorkExperience();
    getPersonalSkills();
    // handleEditWork(id);
    // getEducation();
    // setEduType("Education");
    console.log("edu " + eduType);   
    // console.log("tes " + work)
  }, []);

  const handlePage1 = (e) => {
    // localStorage.getItem("token");
    // var num = phoneNumber;

    // var numPhone = num.slice(2);
    // var numCode = num.slice(0,2);
    e.preventDefault();
    dispatch(changeFirstName(firstName));
    dispatch(changeLastName(lastName));
    dispatch(changeStreetAddress(address));
    dispatch(changeCity(city));
    dispatch(changePostalCode(postalCode));
    dispatch(changePhoneCountryCode(phoneCountryCode));
    dispatch(changePhoneNumber(phoneNumber));
    dispatch(changeEmail(email));
    dispatch(changeWebsite(website));
    dispatch(changeBlog(blog));
    dispatch(changeLinkedin(linkedin));
    alert("Fill Next Step to Complete Personal Information Data!");
    setStep(2);
    // const data = {
    //   first_name : firstName,
    //   last_name : lastName,
    //   street_address : address,
    //   city : city,
    //   postal_code : postalCode,
    //   phone_country_code : phoneCountryCode,
    //   phone_number : phoneNumber,
    //   email : email,
    //   website : website,
    //   blog : blog,
    //   linkedin : linkedin,
    //   // job_applied_for : jobApplied,
    //   // position : position,
    //   // work_types : workTypes,
    //   // salary : salary,
    // }

    // AuthService.EditCV(data).then(res => {
    //   const { cv } = res;
    //   alert(res.message);
    //   // history.go(0);
    //   setStep(2);
    // })
  }

  const handlePage2 = (e) => {
    // localStorage.getItem("token");
    e.preventDefault();
    const data = {
      first_name : rfirstName,
      last_name : rlastName,
      street_address : raddress,
      city : rcity,
      postal_code : rpostalCode,
      phone_country_code : rphoneCountryCode,
      phone_number : rphoneNumber,
      email : remail,
      website : rwebsite,
      blog : rblog,
      linkedin : rlinkedin,
      job_applied_for : jobApplied,
      position : position,
      work_types : workTypes,
      salary : salary,
    }

    AuthService.EditCV(data).then(res => {
      // const { cv } = res;
      // alert(res.message);
      alert("CV Succesfully Updated!");
      setStep(3);
      // history.go(0);
    })
  }

  const getDataCV = () => {
    AuthService.GetCV().then(res => {
      const { cv } = res;
      console.log(res.data);
      //Page 1
      var num = res.data.phone_number;
      // console.log(num);
      var numPhone = num.slice(2);
      // console.log(numPhone);
      var numCode = num.slice(0,2);
      console.log(numCode);
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
      setAddress(res.data.street_address);
      setCity(res.data.city);
      setPostalCode(res.data.postal_code);
      // setPhoneCountryCode(res.data.phone_country_code);
      // setPhoneNumber(res.data.phone_number);
      setPhoneCountryCode(res.data.phone_country_code);
      setPhoneNumber(res.data.phone_number);
      
      setEmail(res.data.email);
      setWebsite(res.data.website);
      setBlog(res.data.blog);
      setLinkedin(res.data.linkedin);

      var num = res.data.phone_number;
      var code = res.data.phone_country_code;
      var comb = code + num;
      setCombine(comb);

      //Page 2
      setJobApplied(res.data.job_applied_for);
      setPosition(res.data.position);
      setWorkTypes(res.data.work_types);
      setSalary(res.data.salary);
    })
  }

  const getAllWorkExperience = () => {
    AuthService.GetAllWorkExperience().then(res => {
      const { work } = res;
      // setWorkID(res.data.id);
      setWorkExperience(res.data);
      // forceUpdate();
      // console.log(workExperience);
      setWorkName(res.data.name);
      setWorkPosition(res.data.position);
      setWorkFrom(res.data.from)
      setWorkTo(res.data.to);
      setWorkOnGoing(res.data.on_going);
    })
  }

  const getEditWorkExperience = () => {
    AuthService.GetAllWorkExperience().then(res => {
      // const { work } = res;
      console.log(res.data[0]);
      setWorkID(res.data[0].id);
      setWorkName(res.data[0].name);
      setWorkPosition(res.data[0].position);
      setWorkFrom(res.data[0].from)
      setWorkTo(res.data[0].to);
      setWorkOnGoing(res.data[0].on_going);
    })
  }

  const handlePage3 = () => {
    const data = {
      name: workName,
      position: workPosition,
      from: workFrom,
      to: workTo,
      on_going: workOnGoing,
    }
    AuthService.AddWorkExperience(data).then(res => {
      alert("success");
      // console.log("res " + res);
      getAllWorkExperience();
    }).catch(err => {
      console.log("err " + err);
    })
  }

  const handlePage3Edit = () => {
    const data = {
      id: workID,
      name: workName,
      position: workPosition,
      from: workFrom,
      to: workTo,
      on_going: 'tes',
    }
    AuthService.EditWorkExperience(data).then(res => {
      alert("success");
      console.log("res " + res);
    }).catch(err => {
      console.log("err " + err);
    })
  }

  const getPersonalSkills = () => {
    AuthService.GetPersonalSkills().then(res => {
      console.log(res.data);
      setLanguages(res.data.languages);
      setCommunications(res.data.communications);
      setOrganisationalOrManagerial(res.data.organisational_or_managerial)
      setJobRelated(res.data.job_related);
      setDigital(res.data.digital);
      setEduType("Education");
    })
  }

  const addPersonalSkills = () => {
    const data = {
      languages: languages,
      communications: communications,
      organisational_or_managerial: organisationalOrManagerial,
      job_related: jobRelated,
      digital: digital,
    }
    AuthService.EditPersonalSkills(data).then(res => {
      alert("CV Succesfully Updated!")
    })
  }

  const getEducation = () => {
    setEduType("Education");
    const data = {
      type: 'Education',
    }
    AuthService.GetAllEducationsTraining(data).then(res => {
      console.log(res);
    })
  }

  const editEducation = () => {
    const data = {
      type: 'Education',
      name: eduName,
      departmen: eduDepartment,
      from: eduFrom,
      to: eduTo,
      on_going: 'tes',
    }
    AuthService.EditEducations(data).then(res => {
      alert("success");
      console.log("res " + res);
    }).catch(err => {
      console.log("err " + err);
    })
  }

  const handleDeleteWork = (id) => {
    // e.preventDefault();
    AuthService.DeleteWorkExperience(id).then(res => {

      alert("Deleted");
      getAllWorkExperience();
    }).catch(err => {
      alert("Dont");
      console.log("dont deleted")
      console.log(err);
    })
  }
  const handleEditWork = (id) => {
    // e.preventDefault();
    console.log("get id " + id)
    AuthService.GetEditWorkExperience(id).then(res => {
      // alert("Deleted!");
      // setWorkName(res.data.name); 
      // console.log("edit " + {res});
      alert(res.message);
      // getAllWorkExperience();
    }).catch(err => {
      alert("Dont");
      console.log("dont deleted")
      console.log(err);
    })
  }

  return (
    <>
      <div className="menu-top">
        <Header login={true} />
      </div>
      <section className="profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <NavbarProfile />
            </div>
              <div className="col-md-9">
                <div className="section-analistics">
                  <h3>My Curriculum Vitae</h3>
                  <div className="card card-edit-prof">
                    <div className="card-body">
                      <div className="wizard-cv">
                        <div className="wizard">
                          <div className="wizard-inner p-4">
                            <div className="row m-0">
                              <div className="row">
                                <div className="col-md-auto">
                                  <div className="rounded">
                                    <img src={cv} alt="" />
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <h3 className="col-md-6">
                                    Update <br />
                                    My Curriculum Vitae
                                  </h3>
                                </div>
                              </div>
                              <ul
                                className="nav nav-tabs col-md-12"
                                role="tablist"
                              >
                                <li
                                  role="tab"
                                  className={step === 1 ? "active" : "disabled"}
                                >
                                  <button type="button" title="Step 1">
                                    <span className="round-tab">1</span>
                                    Personal
                                    <br />
                                    Information
                                  </button>
                                </li>
                                <li
                                  role="tab"
                                  className={step === 2 ? "active" : "disabled"}
                                >
                                  <button type="button" title="Step 2">
                                    <span className="round-tab">2</span>
                                    Type of
                                    <br />
                                    Application
                                  </button>
                                </li>
                                <li
                                  role="tab"
                                  className={step === 3 ? "active" : "disabled"}
                                >
                                  <button type="button" title="Step 3">
                                    <span className="round-tab">3</span>
                                    Work
                                    <br />
                                    Experience
                                  </button>
                                </li>
                                <li
                                  role="tab"
                                  className={step === 4 ? "active" : "disabled"}
                                >
                                  <button type="button" title="Complete">
                                    <span className="round-tab">4</span>
                                    Education
                                    <br />& Training
                                  </button>
                                </li>
                                <li
                                  role="tab"
                                  className={step === 5 ? "active" : "disabled"}
                                >
                                  <button type="button" title="Complete">
                                    <span className="round-tab">5</span>
                                    Personal
                                    <br />
                                    Skills
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <form>
                            <div className="tab-content">
                              {step === 1 ? (
                                <div id="step1">
                                <h3>
                                  <img alt="pict" src={personalInformation} />
                                  Personal Information
                                </h3>
                                <div className="bs-calltoaction">
                                  <p className="info">
                                    Enter your personal details. All fields are
                                    optional.
                                    <br />
                                    Empty fields will not be included in the
                                    final document.
                                  </p>
                                  <div className="edit-profil-form row mt-4">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          First Name
                                        </label>
                                        <input
                                          type="text"
                                          // placeholder={firstName}
                                          className="form-control"
                                          value={firstName}
                                          onChange={(e) => { setFirstName(e.target.value) }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Last Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          // placeholder={lastName}
                                          value={lastName}
                                          onChange={(e) => setLastName(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Street Address
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={address}
                                          onChange={(e) => setAddress(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          City
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={city}
                                          onChange={(e) => setCity(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Postal Code
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={postalCode}
                                          onChange={(e) => setPostalCode(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <div>
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Phone Number
                                          </label>
                                        </div>
                                        {/* <PhoneInput
                                          international
                                          countryCallingCodeEditable={true}
                                          defaultCountry="ID"
                                          value={user.phone_number}
                                          onChange={setValue}
                                          className="phone-input form-control"
                                        /> */}
                                        <PhoneInput 
                                          addInternationalOption={false}
                                          inputStyle={{width:'100%'}}
                                          placeholder="Enter your phone number"
                                          aria-label="Username"
                                          onChange={(e) => {setPhoneNumber(e)}}
                                          value={phoneNumber}
                                          maxLength={12}
                                          country={'id'}
                                          onlyCountries={['id', 'my']}
                                        />
                                        {/* <input
                                          type="text"
                                          className="form-control"
                                          value={phoneNumber}
                                          onChange={(e) => setPhoneNumber(e.target.value)}
                                        /> */}
                                        {/* <span id="valid-msg" className="hide">
                                          Valid
                                        </span>
                                        <span id="error-msg" className="hide">
                                          Invalid number
                                        </span> */}
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Email
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Website
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={website}
                                          onChange={(e) => setWebsite(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Blog
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={blog}
                                          onChange={(e) => setBlog(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Linkedin
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={linkedin}
                                          onChange={(e) => setLinkedin(e.target.value)}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ul className="list-inline pull-right mt-5">
                                  <li>
                                    <button
                                      type="button"
                                      className="profile btn btn-secondary-purple next-step"
                                      onClick={handlePage1}
                                      // onClick={{handlePage1} ; setStep(2)}
                                      // onClick={() => {
                                      //   handlePage1;
                                      // }}
                                      // onClick={(e) => {
                                      //   e.preventDefault();
                                      //   setStep(2);
                                      // }}
                                      
                                    >
                                      Save & Continue
                                    </button>
                                  </li>
                                </ul>
                                </div>
                              ) : step === 2 ? (
                                <div id="step2">
                                  <h3>
                                    <img alt="pict" src={typeOfApp} /> Type of
                                    Application
                                  </h3>
                                  <div className="bs-calltoaction">
                                    <p className="info">
                                      This Heading Gives An Immediate Overview Of
                                      The Purpose Of Your Application.
                                    </p>
                                    <div className="edit-profil-form row mt-4">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Job Applied for
                                          </label>
                                          <div>
                                            <Multiselect
                                              customCloseIcon={
                                                <>
                                                  <div
                                                    href="#!"
                                                    style={{
                                                      cursor: "pointer",
                                                      fontStyle: "normal",
                                                      background: "transparent",
                                                      color: "#03C6AE",
                                                      fontSize: "17px",
                                                      position: "relative",
                                                      left: "5px",
                                                      bottom: "2px",
                                                      border: "none",
                                                    }}
                                                  >
                                                    x
                                                  </div>
                                                </>
                                              }
                                              displayValue="label"
                                              id="css_custom"
                                              onKeyPressFn={function noRefCheck() {}}
                                              onRemove={function noRefCheck() {}}
                                              onSearch={function noRefCheck() {}}
                                              onSelect={function noRefCheck() {}}
                                              options={options}
                                              value={jobApplied}
                                              onChange={(e) => setJobApplied(e.target.value)}
                                              placeholder="Select job you want..."
                                              style={{
                                                chips: {
                                                  border: "1px solid #03C6AE",
                                                  boxSizing: "border-box",
                                                  borderRadius: "100px",
                                                  position: "relative",
                                                  padding: "3px 10px 3px 10px",
                                                  background: "transparent",
                                                  fonstStyle: "normal",
                                                  fontWeight: "400",
                                                  fontSize: "11px",
                                                  lineHeight: "15px",
                                                  color: "#03C6AE",
                                                  marginTop: "10px",
                                                },
                                                multiselectContainer: {
                                                  color: "#000",
                                                },
                                                searchBox: {
                                                  minHeight: "48px",
                                                  padding: "0 0 0 10px",
                                                },
                                                inputField: {
                                                  height: "20px",
                                                  margin: "11px 0",
                                                },
                                              }}
                                            />
                                            {/* <select
                                              className="js-select2 form-control"
                                              multiple="multiple"
                                            >
                                              <option value="O1" data-badge="">
                                                UI Designer
                                              </option>
                                              <option value="O2" data-badge="">
                                                UI/UX Designer
                                              </option>
                                              <option value="O3" data-badge="">
                                                UX Designer
                                              </option>
                                              <option value="O4" data-badge="">
                                                Fullstack Designer
                                              </option>
                                              <option value="O5" data-badge="">
                                                Graphic Designer
                                              </option>
                                            </select> */}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Position
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your position"
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Work Type
                                          </label>
                                          <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            value={workTypes}
                                            onChange={(e) => setWorkTypes(e.target.value)}
                                          >
                                            <option selected>
                                              Select work type
                                            </option>
                                            <option value="full_type">Full Type</option>
                                            <option value="part_time">Part Time</option>
                                            <option value="freelance">Freelance</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Salary
                                          </label>
                                          <div className="input-group mb-3 salary">
                                            <span
                                              className="input-group-text"
                                              id="basic-addon1"
                                            >
                                              RM
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter salary"
                                              value={salary}
                                              onChange={(e) => setSalary(e.target.value)}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="list-inline pull-right mt-5">
                                    <li>
                                      <button
                                        type="button"
                                        className="btn btn-default prev-step"
                                      >
                                        Previous
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        type="button"
                                        className="profile btn btn-secondary-purple next-step"
                                        onClick={(e) => handlePage2(e)}
                                      >
                                        Save & Continue
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              ) : step === 3 ? (
                                <div id="step3">
                                  <h3>
                                    <img alt="pict" src={workExp} />
                                    Works Experience
                                  </h3>
                                  <div className="bs-calltoaction">
                                    <p className="info">
                                      This Heading Gives An Immediate Overview Of
                                      The Purpose Of Your Application.
                                    </p>
                                  </div>

                                  {workExperience.map((work) => 
                                  <ul className="list-unstyled list-works mt-5">
                                    <li>
                                      <div className="d-flex align-items-start">
                                        <div className="icon">
                                          <img alt="pict" src={listWork} />
                                        </div>
                                        <div className="info">

                                          <div className="d-flex align-items-center">
                                            <div className="clearfix">
                                              <p className="text-purple">
                                                <strong>
                                                  {work.name}
                                                </strong>
                                              </p>
                                              <p>Bandung</p>
                                              <p className="text-dark">
                                                <strong>
                                                  {work.position}
                                                </strong>
                                              </p>
                                              <p>{work.from} - {work.to}</p>
                                            </div>
                                            <div className="ms-auto">
                                              <div className="d-flex align-items-center">
                                                <a
                                                  className="edit-experience text-green cursor-pointer"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    handleEditWork(work.id);
                                                    setWorkEditForm(true);
                                                  }}
                                                >
                                                  <i className="fas fa-pencil-alt"></i>
                                                   Edit
                                                </a>
                                                <a className="text-green cursor-pointer ml-2" 
                                                onClick={() => handleDeleteWork(work.id)}>
                                                  <i className="fas fa-trash"></i>
                                                   Delete
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </li>
                                    
                                    {workEditForm && (
                                      <li>
                                        <div className="add-experience-form">
                                          <div className="edit-profil-form row mt-4">
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label
                                                  htmlFor=""
                                                  className="form-label"
                                                >
                                                  Company
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Enter job company"
                                                  value={workName}
                                                  onChange={(e) => setWorkName(e.target.value)}
                                                />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label
                                                  htmlFor=""
                                                  className="form-label"
                                                >
                                                  Occupation or position held
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Enter your answer"
                                                  value={workPosition}
                                                  onChange={(e) => setWorkPosition(e.target.value)}
                                                />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label
                                                  htmlFor=""
                                                  className="form-label"
                                                >
                                                  From
                                                </label>
                                                <div
                                                  id="profile"
                                                  className="form-account"
                                                >
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control border-end-0 input-date"
                                                      name=""
                                                      placeholder="DD/MM/YYYY"
                                                      value={workFrom}
                                                      onChange={(e) => setWorkFrom(e.target.value)}
                                                    />
                                                    <div className="input-group-append border-start-0">
                                                      <span
                                                        className="input-group-text"
                                                        id=""
                                                      >
                                                        <i
                                                          className="fa fa-calendar"
                                                          aria-hidden="true"
                                                        ></i>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label
                                                  htmlFor=""
                                                  className="form-label"
                                                >
                                                  To
                                                </label>
                                                <div
                                                  id="profile"
                                                  className="form-account"
                                                >
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control border-end-0 input-date"
                                                      name=""
                                                      placeholder="DD/MM/YYYY"
                                                      value={workTo}
                                                      onChange={(e) => setWorkTo(e.target.value)}
                                                    />
                                                    <div className="input-group-append border-start-0">
                                                      <span
                                                        className="input-group-text"
                                                        id=""
                                                      >
                                                        <i
                                                          className="fa fa-calendar"
                                                          aria-hidden="true"
                                                        ></i>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-12">
                                              <div className="form-group checkbox">
                                                <input
                                                  type="checkbox"
                                                  id="ongoing-add-01"
                                                />
                                                <label htmlFor="ongoing-add-01">
                                                  On Going Experience
                                                </label>
                                              </div>
                                            </div>
                                            <ul className="list-inline pull-right mt-5">
                                              <li>
                                                <button
                                                  type="button"
                                                  className="profile btn btn-secondary-purple next-step"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    setWorkEditForm(false);
                                                    handlePage3Edit();
                                                  }}
                                                >
                                                  Save & Change
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </li>
                                    )}
                                  </ul>
                                  )}

                                  <div className="form-experience edit-form-experience">
                                    <div className="edit-profil-form row mt-4">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Company Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter job company"
                                            value="Institut Teknologi Bandung (ITB)"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Occupation or position held
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your answer"
                                            value="Senior UI Designer"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            From
                                          </label>
                                          <div
                                            id="profile"
                                            className="form-account"
                                          >
                                            <div className="input-group">
                                              <input
                                                type="text"
                                                className="form-control border-end-0 input-date"
                                                name=""
                                                placeholder="DD/MM/YYYY"
                                                value="02/28/2022"
                                              />
                                              <div className="input-group-append border-start-0">
                                                <span
                                                  className="input-group-text"
                                                  id=""
                                                >
                                                  <i
                                                    className="fa fa-calendar"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            To
                                          </label>
                                          <div
                                            id="profile"
                                            className="form-account"
                                          >
                                            <div className="input-group">
                                              <input
                                                type="text"
                                                className="form-control border-end-0 input-date"
                                                name=""
                                                placeholder="DD/MM/YYYY"
                                                value="02/28/2022"
                                              />
                                              <div className="input-group-append border-start-0">
                                                <span
                                                  className="input-group-text"
                                                  id=""
                                                >
                                                  <i
                                                    className="fa fa-calendar"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group checkbox">
                                          <input
                                            type="checkbox"
                                            id="ongoing-edit-01"
                                            checked=""
                                          />
                                          <label htmlFor="ongoing-edit-01">
                                            On Going Experience
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="edit-profil-form row my-5">
                                    <div className="text-end">
                                      <button
                                        type="button"
                                        className="add-experience px-3"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setShowWorkForm(true);
                                        }}
                                      >
                                        <i className="fas fa-plus-circle"></i> Add
                                        New Work Experience
                                      </button>
                                    </div>
                                  </div>

                                  {showWorkForm && (
                                    <div className="add-experience-form">
                                      <div className="edit-profil-form row mt-4">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Company
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter job company"
                                              onChange={(e) => setWorkName(e.target.value)}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Occupation or position held
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter your answer"
                                              onChange={(e) => setWorkPosition(e.target.value)}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              From
                                            </label>
                                            <div
                                              id="profile"
                                              className="form-account"
                                            >
                                              <div className="input-group">
                                                <input
                                                  type="text"
                                                  className="form-control border-end-0 input-date"
                                                  name=""
                                                  placeholder="DD/MM/YYYY"
                                                  onChange={(e) => setWorkFrom(e.target.value)}
                                                />
                                                <div className="input-group-append border-start-0">
                                                  <span
                                                    className="input-group-text"
                                                    id=""
                                                  >
                                                    <i
                                                      className="fa fa-calendar"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              To
                                            </label>
                                            <div
                                              id="profile"
                                              className="form-account"
                                            >
                                              <div className="input-group">
                                                <input
                                                  type="text"
                                                  className="form-control border-end-0 input-date"
                                                  name=""
                                                  placeholder="DD/MM/YYYY"
                                                  onChange={(e) => setWorkTo(e.target.value)}
                                                />
                                                <div className="input-group-append border-start-0">
                                                  <span
                                                    className="input-group-text"
                                                    id=""
                                                  >
                                                    <i
                                                      className="fa fa-calendar"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="form-group checkbox">
                                            <input
                                              type="checkbox"
                                              id="ongoing-add-01"
                                            />
                                            <label htmlFor="ongoing-add-01">
                                              On Going Experience
                                            </label>
                                          </div>
                                        </div>
                                        <ul className="list-inline pull-right mt-5">
                                          <li>
                                            <button
                                              type="button"
                                              className="profile btn btn-secondary-purple next-step"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setShowWorkForm(false);
                                                handlePage3();
                                              }}
                                            >
                                              Save & Change
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  )}
                                  {showWorkForm === false && (
                                    <ul className="list-inline pull-right mt-5">
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-default prev-step"
                                        >
                                          Previous
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          type="button"
                                          className="profile btn btn-secondary-purple next-step"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setStep(4);
                                            // handlePage3();
                                          }}
                                        >
                                          Save & Continue
                                        </button>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                              ) : step === 4 ? (
                                <div id="step4">
                                  <h3>
                                    <img alt="pict" src={eduTraining} />
                                    Education & Training
                                  </h3>
                                  <div className="bs-calltoaction">
                                    <p className="info">
                                      This Heading Gives An Immediate Overview Of
                                      The Purpose Of Your Application.
                                    </p>
                                  </div>

                                  <div className="tabs-modal">
                                    <ul
                                      className="nav nav-pills nav-education nav-modal"
                                      id="pills-tab"
                                      role="tablist"
                                    >
                                      <li
                                        className="nav-item"
                                        role="presentation"
                                      >
                                        <button
                                          className="nav-link active"
                                          id="pills-education-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-education"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-education"
                                          aria-selected="true"
                                        >
                                          Education
                                        </button>
                                      </li>
                                      <li
                                        className="nav-item"
                                        role="presentation"
                                      >
                                        <button
                                          className="nav-link"
                                          id="pills-training-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-training"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-training"
                                          aria-selected="false"
                                        >
                                          Training
                                        </button>
                                      </li>
                                    </ul>
                                    <div
                                      className="tab-content"
                                      id="pills-tabContent"
                                    >
                                      <div
                                        className="tab-pane fade show active"
                                        id="pills-education"
                                        aria-labelledby="pills-education-tab"
                                      >
                                        <ul className="list-unstyled list-works mt-5">
                                          <li>
                                            <div className="d-flex align-items-start">
                                              <div className="icon">
                                                <img alt="pict" src={listEdu} />
                                              </div>
                                              <div className="info">
                                                <div className="d-flex align-items-center">
                                                  <div className="clearfix">
                                                    <p className="text-purple">
                                                      <strong>
                                                        Institut Teknologi Bandung
                                                        (ITB)
                                                      </strong>
                                                    </p>
                                                    <p>Bandung</p>
                                                    <p className="text-dark">
                                                      <strong>
                                                        System Information
                                                      </strong>
                                                    </p>
                                                    <p>2013 - 2018</p>
                                                  </div>
                                                  <div className="ms-auto">
                                                    <div className="d-flex align-items-center">
                                                      <button
                                                        type="button"
                                                        className="edit-experience text-green"
                                                        onClick={(e) => {
                                                          e.preventDefault();
                                                          setEduEditForm(true);
                                                        }}
                                                      >
                                                        <i className="fas fa-pencil-alt"></i>
                                                        Edit
                                                      </button>
                                                      <button className="text-green">
                                                        <i className="fas fa-trash"></i>
                                                        Delete
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="d-flex align-items-start">
                                              <div className="icon">
                                                <img alt="pict" src={listEdu} />
                                              </div>
                                              <div className="info">
                                                <div className="d-flex align-items-center">
                                                  <div className="clearfix">
                                                    <p className="text-purple">
                                                      <strong>
                                                        SMA BPI V Bandung
                                                      </strong>
                                                    </p>
                                                    <p>Bandung</p>
                                                    <p className="text-dark">
                                                      <strong>IPA</strong>
                                                    </p>
                                                    <p>2010 - 2013</p>
                                                  </div>
                                                  <div className="ms-auto">
                                                    <div className="d-flex align-items-center">
                                                      <button
                                                        type="button"
                                                        className="edit-experience text-green"
                                                        onClick={(e) => {
                                                          e.preventDefault();
                                                          setEduEditForm(true);
                                                        }}
                                                      >
                                                        <i className="fas fa-pencil-alt"></i>
                                                        Edit
                                                      </button>
                                                      <button className="text-green">
                                                        <i className="fas fa-trash"></i>
                                                        Delete
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          {eduEditForm && (
                                            <li>
                                              <div className="add-experience-form">
                                                <div className="edit-profil-form row mt-4">
                                                  <div className="col-md-12">
                                                    <div className="mb-3">
                                                      <label
                                                        htmlFor=""
                                                        className="form-label"
                                                      >
                                                        Select Type
                                                      </label>
                                                      <div className="row">
                                                        <div className="col-md-3">
                                                          <div className="radio">
                                                            <input
                                                              type="radio"
                                                              name="answer-01"
                                                              id="01-a"
                                                            />
                                                            <label htmlFor="01-a">
                                                              Education
                                                            </label>
                                                          </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                          <div className="radio">
                                                            <input
                                                              type="radio"
                                                              name="answer-01"
                                                              id="01-b"
                                                            />
                                                            <label htmlFor="01-b">
                                                              Training
                                                            </label>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4">
                                                    <div className="mb-3">
                                                      <label
                                                        htmlFor=""
                                                        className="form-label"
                                                      >
                                                        Institute/Collage Name
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter your institute/Collage Name"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4">
                                                    <div className="mb-3">
                                                      <label
                                                        htmlFor=""
                                                        className="form-label"
                                                      >
                                                        Department
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter your department"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4">
                                                    <div className="mb-3">
                                                      <label
                                                        htmlFor=""
                                                        className="form-label"
                                                      >
                                                        Location
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter your department"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                    <div className="mb-3">
                                                      <label
                                                        htmlFor=""
                                                        className="form-label"
                                                      >
                                                        From
                                                      </label>
                                                      <div
                                                        id="profile"
                                                        className="form-account"
                                                      >
                                                        <div className="input-group">
                                                          <input
                                                            type="text"
                                                            className="form-control border-end-0 input-date"
                                                            name=""
                                                            placeholder="DD/MM/YYYY"
                                                          />
                                                          <div className="input-group-append border-start-0">
                                                            <span
                                                              className="input-group-text"
                                                              id=""
                                                            >
                                                              <i
                                                                className="fa fa-calendar"
                                                                aria-hidden="true"
                                                              ></i>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                    <div className="mb-3">
                                                      <label
                                                        htmlFor=""
                                                        className="form-label"
                                                      >
                                                        To
                                                      </label>
                                                      <div
                                                        id="profile"
                                                        className="form-account"
                                                      >
                                                        <div className="input-group">
                                                          <input
                                                            type="text"
                                                            className="form-control border-end-0 input-date"
                                                            name=""
                                                            placeholder="DD/MM/YYYY"
                                                          />
                                                          <div className="input-group-append border-start-0">
                                                            <span
                                                              className="input-group-text"
                                                              id=""
                                                            >
                                                              <i
                                                                className="fa fa-calendar"
                                                                aria-hidden="true"
                                                              ></i>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-12">
                                                    <div className="form-group checkbox">
                                                      <input
                                                        type="checkbox"
                                                        id="ongoing-add-02"
                                                      />
                                                      <label htmlFor="ongoing-add-02">
                                                        On Going Experience
                                                      </label>
                                                    </div>
                                                  </div>
                                                  <ul className="list-inline pull-right mt-5">
                                                    <li>
                                                      <button
                                                        type="button"
                                                        className="profile btn btn-secondary-purple next-step"
                                                        onClick={(e) => {
                                                          e.preventDefault();
                                                          setEduEditForm(false);
                                                        }}
                                                      >
                                                        Save & Change
                                                      </button>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </li>
                                          )}
                                        </ul>
                                      </div>
                                      <div
                                        className="tab-pane fade"
                                        id="pills-training"
                                        aria-labelledby="pills-training-tab"
                                      >
                                        <ul className="list-unstyled list-works mt-5">
                                          <li>
                                            <div className="d-flex align-items-start">
                                              <div className="icon">
                                                <img alt="pict" src={listEdu} />
                                              </div>
                                              <div className="info">
                                                <div className="d-flex align-items-center">
                                                  <div className="clearfix">
                                                    <p className="text-purple">
                                                      <strong>
                                                        Education Skill
                                                      </strong>
                                                    </p>
                                                    <p className="text-dark">
                                                      <strong>
                                                        UI/UX Designer
                                                      </strong>
                                                    </p>
                                                    <p>Nov 2016 - Mar 2017</p>
                                                    <p className="f-12">
                                                      <img
                                                        alt="pict"
                                                        src={certificate}
                                                        className="me-2"
                                                      />
                                                      Certificate
                                                    </p>
                                                  </div>
                                                  <div className="ms-auto">
                                                    <div className="d-flex align-items-center">
                                                      <button
                                                        type="button"
                                                        className="edit-experience text-green"
                                                      >
                                                        <i className="fas fa-pencil-alt"></i>
                                                        Edit
                                                      </button>
                                                      <button className="text-green">
                                                        <i className="fas fa-trash"></i>
                                                        Delete
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="d-flex align-items-start">
                                              <div className="icon">
                                                <img alt="pict" src={listEdu} />
                                              </div>
                                              <div className="info">
                                                <div className="d-flex align-items-center">
                                                  <div className="clearfix">
                                                    <p className="text-purple">
                                                      <strong>
                                                        Education Skill
                                                      </strong>
                                                    </p>
                                                    <p className="text-dark">
                                                      <strong>
                                                        UI/UX Designer
                                                      </strong>
                                                    </p>
                                                    <p>Nov 2016 - Mar 2017</p>
                                                    <p className="f-12">
                                                      <img
                                                        alt="pict"
                                                        src={certificate}
                                                        className="me-2"
                                                      />
                                                      Certificate
                                                    </p>
                                                  </div>
                                                  <div className="ms-auto">
                                                    <div className="d-flex align-items-center">
                                                      <button
                                                        type="button"
                                                        className="edit-experience text-green"
                                                      >
                                                        <i className="fas fa-pencil-alt"></i>
                                                        Edit
                                                      </button>
                                                      <button className="text-green">
                                                        <i className="fas fa-trash"></i>
                                                        Delete
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="form-experience edit-form-experience">
                                    <div className="edit-profil-form row mt-4">
                                      <div className="col-md-12">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Select Type
                                          </label>
                                          <div className="row">
                                            <div className="col-md-3">
                                              <div className="radio">
                                                <input
                                                  type="radio"
                                                  name="edit-01"
                                                  id="edit-01-a"
                                                  checked=""
                                                />
                                                <label htmlFor="edit-01-a">
                                                  Education
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-md-3">
                                              <div className="radio">
                                                <input
                                                  type="radio"
                                                  name="edit-01"
                                                  id="edit-01-b"
                                                />
                                                <label htmlFor="edit-01-b">
                                                  Training
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Institute/Collage Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your institute/Collage Name"
                                            value="Institut Teknologi Bandung (ITB)"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Department
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your department"
                                            value="System Information"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Location
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your department"
                                            value="Bandung"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            From
                                          </label>
                                          <div
                                            id="profile"
                                            className="form-account"
                                          >
                                            <div className="input-group">
                                              <input
                                                type="text"
                                                className="form-control border-end-0 input-date"
                                                name=""
                                                placeholder="DD/MM/YYYY"
                                              />
                                              <div className="input-group-append border-start-0">
                                                <span
                                                  className="input-group-text"
                                                  id=""
                                                >
                                                  <i
                                                    className="fa fa-calendar"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            To
                                          </label>
                                          <div
                                            id="profile"
                                            className="form-account"
                                          >
                                            <div className="input-group">
                                              <input
                                                type="text"
                                                className="form-control border-end-0 input-date"
                                                name=""
                                                placeholder="DD/MM/YYYY"
                                              />
                                              <div className="input-group-append border-start-0">
                                                <span
                                                  className="input-group-text"
                                                  id=""
                                                >
                                                  <i
                                                    className="fa fa-calendar"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group checkbox">
                                          <input
                                            type="checkbox"
                                            id="ongoing-add-01"
                                          />
                                          <label htmlFor="ongoing-add-01">
                                            On Going Experience
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="edit-profil-form row my-5">
                                    <div className="text-end">
                                      <button
                                        type="button"
                                        className="add-experience add-education px-3"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setShowEduForm(true);
                                        }}
                                      >
                                        <i className="fas fa-plus-circle"></i> Add
                                        New Education Experience
                                      </button>
                                    </div>
                                  </div>

                                  {showEduForm && (
                                    <div className="add-experience-form">
                                      <div className="edit-profil-form row mt-4">
                                        <div className="col-md-12">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Select Type
                                            </label>
                                            <div className="row">
                                              <div className="col-md-3">
                                                <div className="radio">
                                                  <input
                                                    type="radio"
                                                    name="answer-01"
                                                    id="01-a"
                                                  />
                                                  <label htmlFor="01-a">
                                                    Education
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col-md-3">
                                                <div className="radio">
                                                  <input
                                                    type="radio"
                                                    name="answer-01"
                                                    id="01-b"
                                                  />
                                                  <label htmlFor="01-b">
                                                    Training
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Institute/Collage Name
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter your institute/Collage Name"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Department
                                            </label>
                                            <input
                                                                                        // placeholder="Enter organisational/managerial skills"    type="text"
                                              className="form-control"
                                              placeholder="Enter your department"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Location
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter your department"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              From
                                            </label>
                                            <div
                                              id="profile"
                                              className="form-account"
                                            >
                                              <div className="input-group">
                                                <input
                                                  type="text"
                                                  className="form-control border-end-0 input-date"
                                                  name=""
                                                  placeholder="DD/MM/YYYY"
                                                />
                                                <div className="input-group-append border-start-0">
                                                  <span
                                                    className="input-group-text"
                                                    id=""
                                                  >
                                                    <i
                                                      className="fa fa-calendar"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              To
                                            </label>
                                            <div
                                              id="profile"
                                              className="form-account"
                                            >
                                              <div className="input-group">
                                                <input
                                                  type="text"
                                                  className="form-control border-end-0 input-date"
                                                  name=""
                                                  placeholder="DD/MM/YYYY"
                                                />
                                                <div className="input-group-append border-start-0">
                                                  <span
                                                    className="input-group-text"
                                                    id=""
                                                  >
                                                    <i
                                                      className="fa fa-calendar"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="form-group checkbox">
                                            <input
                                              type="checkbox"
                                              id="ongoing-add-02"
                                            />
                                            <label htmlFor="ongoing-add-02">
                                              On Going Experience
                                            </label>
                                          </div>
                                        </div>
                                        <ul className="list-inline pull-right mt-5">
                                          <li>
                                            <button
                                              type="button"
                                              className="profile btn btn-secondary-purple next-step"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setShowEduForm(false);
                                              }}
                                            >
                                              Save & Change
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  )}
                                  {showEduForm === false && (
                                    <ul className="list-inline pull-right mt-5">
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-default prev-step"
                                        >
                                          Previous
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          type="button"
                                          className="profile btn btn-secondary-purple next-step"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setStep(5);
                                          }}
                                        >
                                          Save & Continue
                                        </button>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                step === 5 && (
                                  <div id="step5">
                                    <h3>
                                      <img alt="pict" src={personalSkill} />
                                      Personal Skill
                                    </h3>
                                    <div className="bs-calltoaction">
                                      <p className="info">
                                        This heading gives an immediate overview
                                        of the purpose of your application.
                                      </p>
                                    </div>

                                    <div className="form-personal-skill">
                                      <div className="edit-profil-form row mt-4">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Language(s)
                                            </label>
                                            <input
                                              className="form-control"
                                              type="text"
                                              name="tags"
                                              // placeholder="Enter language"
                                              data-role="tagsinput"
                                              value={languages}
                                              onChange={(e) => setLanguages(e.target.value)}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Communication Skills
                                            </label>
                                            <input
                                              className="form-control"
                                              type="text"
                                              name="tags"
                                              placeholder="Enter communication skills"
                                              data-role="tagsinput"
                                              value={communications}
                                              onChange={(e) => setCommunications(e.target.value)}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Organisational/ Managerial Skills
                                            </label>
                                            <input
                                              className="form-control"
                                              type="text"
                                              name="tags"
                                              // placeholder="Enter organisational/managerial skills"
                                              data-role="tagsinput"
                                              value={organisationalOrManagerial}
                                              onChange={(e) => setOrganisationalOrManagerial(e.target.value)}
                                            />
                                            <small>
                                              if you have more than one skills
                                              separate it with comma (,)
                                            </small>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Job Related Skills
                                            </label>
                                            <input
                                              className="form-control"
                                              type="text"
                                              name="tags"
                                              placeholder="Enter job related skill"
                                              data-role="tagsinput"
                                              value={jobRelated}
                                              onChange={(e) => setJobRelated(e.target.value)}
                                            />
                                            <small>
                                              if you have more than one skills
                                              separate it with comma (,)
                                            </small>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor=""
                                              className="form-label"
                                            >
                                              Digital Skill
                                            </label>
                                            <input
                                              className="form-control"
                                              type="text"
                                              name="tags"
                                              placeholder="Enter digital skill"
                                              data-role="tagsinput"
                                              value={digital}
                                              onChange={(e) => setDigital(e.target.value)}
                                            />
                                            <small>
                                              if you have more than one skills
                                              separate it with comma (,)
                                            </small>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <ul className="list-inline pull-right mt-5">
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-default prev-step"
                                        >
                                          Previous
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          type="sumbit"
                                          className="profile btn btn-secondary-purple next-step"
                                          onClick={addPersonalSkills}
                                        >
                                          Save & Continue
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                )
                              )}

                              <div className="clearfix"></div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumVitae;
