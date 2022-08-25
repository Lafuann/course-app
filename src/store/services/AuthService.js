import normalRequest, { authCMSRequest, authEDURequest } from "../Api";
import qs from "qs";
// import Header from '../../component/header';
// import axios from "axios"

export const login = (data) =>
  normalRequest.post("/api/v1/users/login?via=email", data);

export const logout = () => authCMSRequest.post("/api/v1/users/logout", {});

export const register = (data) =>
  normalRequest.post("/api/v1/users/register", data, {});

export const getUser = () => authCMSRequest.get("api/v1/users/edit", {});

export const loginGoogle = (data) =>
  normalRequest.post("/api/v1/users/login?via=google", data);

export const regisGoogle = (data) =>
  normalRequest.post("/api/v1/users/register?provider=google", data, {});

export const editProfile = (data) =>
  authCMSRequest.put("/api/v1/users/update", data, {});

export const forgotPassword = (data) =>
  normalRequest.post("/api/v1/users/forgot_password", data);

export const changePassword = (data) =>
  authCMSRequest.post("/api/v1/users/change_password", data, {});

  export const editPhoto = (data) =>
  authCMSRequest.put("/api/v1/users/update", data, {});
class AuthService {
  async LoginByPhoneNumber(phone_number, phone_country_code) {
    const data = qs.stringify({
      phone_number,
      phone_country_code,
    });
    const response = await normalRequest
      .post("/api/v1/users/login?via=phone", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return response;
  }
  async RegisterByGoogle(email, google_id) {
    const data = qs.stringify({
      email,
      google_id,
      type: "Consumer",
    });
    const response = await normalRequest
      .post("/api/v1/users/register?provider=google", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async EditProfile(payload) {
    // localStorage.getItem("token");
    const data = qs.stringify({
      email: payload.email,
      type: "Consumer",
      full_name: payload.full_name,
      date_of_birth: payload.date_of_birth,
      job: payload.job,
      gender: payload.gender,
      phone_number: payload.phone_number,
      phone_country_code: "+62",
      photo: payload.photo,
      address: payload.address,
      city: payload.city,
      country: "Indonesia",
      postal_code: payload.postal_code,
      website_url: payload.website_url,
      blog_url: payload.blog_url,
      linkedin_url: payload.linkedin_url,
    });

    const response = await authCMSRequest
      .put("/api/v1/users/update", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  // https://wlmalaysia-cms.stagingapps.net/
  // uploads/consumer/photo/22/thumb_rizki%20fadilah_profile_picture.jpg
  // async UploadPhoto(payload){
  //   const photo = qs.stringify(payload.photo);
  //   const id = qs.stringify(payload.photo);
  //   const response = await authCMSRequest.put('/api/v1')
  //   return response;
  // }

  async ChangePassword(payload) {
    localStorage.getItem("token");
    const data = qs.stringify({
      old_password: payload.old_password,
      new_password: payload.new_password,
      password_confirmation: payload.password_confirmation,
    });

    const response = await authCMSRequest
      .post("/api/v1/users/change_password", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }
  async ForgotPassword(email) {
    const data = qs.stringify({
      email,
    });
    const response = await normalRequest
      .post("/api/v1/users/forgot_password", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetCV() {
    const response = await authCMSRequest
      .get("/api/v1/cv/edit", {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async AddCV(payload) {
    localStorage.getItem("token");
    const data = qs.stringify({
      first_name: payload.first_name,
      last_name: payload.last_name,
      street_address: payload.street_address,
      city: payload.city,
      postal_code: payload.postal_code,
      phone_country_code: payload.phone_country_code,
      phone_number: payload.phone_number,
      email: payload.email,
      website: payload.website,
      blog: payload.blog,
      linkedin: payload.linkedin,
      job_applied_for: payload.job_applied_for,
      position: payload.position,
      work_types: payload.work_types,
      salary: payload.salary,
    });
    const response = await authCMSRequest
      .post("api/v1/cv", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async EditCV(payload) {
    localStorage.getItem("token");
    const data = qs.stringify({
      first_name: payload.first_name,
      last_name: payload.last_name,
      street_address: payload.street_address,
      city: payload.city,
      postal_code: payload.postal_code,
      phone_country_code: payload.phone_country_code,
      phone_number: payload.phone_number,
      email: payload.email,
      website: payload.website,
      blog: payload.blog,
      linkedin: payload.linkedin,
      job_applied_for: payload.job_applied_for,
      position: payload.position,
      work_types: payload.work_types,
      salary: payload.salary,
    });
    const response = await authCMSRequest
      .put("api/v1/cv", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async AddWorkExperience(payload) {
    localStorage.getItem("token");
    const data = qs.stringify({
      id: payload.id,
      name: payload.name,
      position: payload.position,
      from: payload.from,
      to: payload.to,
      on_going: payload.on_going,
    });
    const response = await authCMSRequest
      .post("/api/v1/work_experiences", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async EditWorkExperience(payload) {
    // localStorage.getItem("token");
    const data = qs.stringify({
      id: payload.id,
      name: payload.name,
      position: payload.position,
      from: payload.from,
      to: payload.to,
      on_going: payload.on_going,
    });
    const response = await authCMSRequest
      .put("/api/v1/work_experiences", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetAllWorkExperience() {
    const response = await authCMSRequest
      .get("/api/v1/work_experiences/all", {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetEditWorkExperience(id) {
    // localStorage.setItem("token");
    // var id = 19;
    // const id = qs.stringify({id: payload.id});
    const response = await authCMSRequest
      .get("/api/v1/work_experiences/edit", id, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async DeleteWorkExperience(id) {
    const response = await authCMSRequest
      .delete("/api/v1/work_experiences/" + id, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async AddEducationsTraining(payload) {
    const data = qs.stringify({
      type: payload.type,
      name: payload.name,
      department: payload.department,
      location: payload.location,
      from: payload.from,
      to: payload.to,
      on_going: payload.on_going,
    });

    const response = await authCMSRequest
      .post("/api/v1/educations_trainings", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async EditEducations(payload) {
    const data = qs.stringify({
      type: payload.type,
      name: payload.name,
      department: payload.department,
      location: payload.location,
      from: payload.from,
      to: payload.to,
      on_going: payload.on_going,
    });

    const response = await authCMSRequest
      .put("/api/v1/educations_trainings", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetAllEducationsTraining(payload) {
    const data = qs.stringify({
      type: payload.type,
    });
    const response = await authCMSRequest
      .get("/api/v1/educations_trainings/all", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    // // response = axios.create({
    // //   headers : {

    // //   }
    // // })
    // Request.Headers.Add("type", data);
    // Response.Headers.Add("type", data);
    return response;
  }

  async GetEditEducationsTraining() {
    const response = await authCMSRequest
      .get("/api/v1/educations_trainings/edit", {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async DeleteEducationsTraining(payload) {
    const data = qs.stringify({
      id: payload.id,
    });
    const response = await authCMSRequest
      .delete("/api/v1/educations_trainings", data, {})
      .then((res) => {
        // async Ge
      });
    return response;
  }

  async AddPersonalSkills(payload) {
    const data = qs.stringify({
      languages: payload.languages,
      communications: payload.communications,
      organisational_or_managerial: payload.organisational_or_managerial,
      job_related: payload.job_related,
      digital: payload.digital,
    });
    const response = await authCMSRequest
      .post("/api/v1/personal_skills", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async EditPersonalSkills(payload) {
    const data = qs.stringify({
      languages: payload.languages,
      communications: payload.communications,
      organisational_or_managerial: payload.organisational_or_managerial,
      job_related: payload.job_related,
      digital: payload.digital,
    });
    const response = await authCMSRequest
      .put("/api/v1/personal_skills", data, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetPersonalSkills() {
    const response = await authCMSRequest
      .get("/api/v1/personal_skills/edit", {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetCourse() {
    const response = await authEDURequest
      .get("/api/courses/get-course-list", {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  // async GetCourse() {
  //   var axios = require('axios');

  //   var config = {
  //     method: 'get',
  //     url: 'https://cors-anywhere.herokuapp.com/https://wlmalaysia-edu.stagingapps.net/api/courses/get-course-list',
  //     headers: {
  //       'Authorization': 'Basic YXBpOmJvb2tpbmc=',
  //       'Cookie': 'gig_university_e_learning_session=XoXMrPB2UvOFQBcsmqCATXQTqrrdIU57OxRGb9fw'
  //     }
  //   };

  //   axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
}

export default new AuthService();
