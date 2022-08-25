import { authCMSRequest, authEDURequest } from "../Api";
import qs from "qs";

const token = localStorage.getItem("token");

export const getAllCourse = () =>
  authEDURequest.get("/api/courses/get-course-list", {});

export const getAllCategory = () =>
  authEDURequest.get("/api/category/get-all-category", {});

export const getTrendingCourse = () =>
  authEDURequest.get("/api/courses/best-seller", {});

export const getCourseByUser = (email) =>
  authEDURequest.get("api/courses/get-my-learning/" + email);

export const getCourseById = (id) =>
  authEDURequest.get("/api/courses/course-show/" + id);

export const getCategoryById = (id) =>
  authEDURequest.get("/api/courses/category/" + id);

export const getCommentByCourse = (id) =>
  authEDURequest.get("/api/discuss/get-comment/" + id);

export const searchCourse = (course) =>
  authEDURequest.get("/api/courses/course-search/" + course);

export const buyCourse = (id) =>
  authCMSRequest.get("/api/v1/bookings/course?" + id);

export const buyHistory = (page) =>
  authCMSRequest.get("/api/v1/bookings/history?" + qs.stringify({ page }));

export const getDetailScore = (data) =>
  authEDURequest.get("/api/get-detail-score?" + qs.stringify({ data }));

export const getCourseContent = (id) =>
  authEDURequest.get("/api/get-content/" + id);

export const sendComment = (data) =>
  authEDURequest.post("/api/discuss/add-comment", data);

export const sendRating = (data) =>
  authEDURequest.patch("/api/courses/update-rating", data);

export const getRating = (id) =>
  authEDURequest.get(`/api/courses/get-rating/${id}`);

export const postLikeComment = (data) =>
  authEDURequest.post("/api/discuss/add-liked", data);

export const deleteLikeComment = (data) =>
  authEDURequest.delete("/api/discuss/delete-dislike", qs.stringify({ data }));

class CourseService {
  async buyCourses(course_id) {
    const data = { course_id };
    console.log("encodeURIComponent", encodeURIComponent(course_id));
    const response = await authCMSRequest
      .get("/api/v1/bookings/course", encodeURIComponent(course_id))
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async getCourseById(id) {
    const response = await authEDURequest
      .get("/api/courses/course-show/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async getUsersCourse(email) {
    const response = await authEDURequest
      .get("/api/courses/get-my-learning/" + email)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetAllCourse() {
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

  async SearchCourse(course) {
    const response = await authEDURequest
      .get("/api/courses/course-search/" + course, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetBanner() {
    const response = await authEDURequest
      .get("api/banner/get-all-banner", {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async GetAllCategory() {
    const response = await authEDURequest
      .get("/api/category/get-all-category", {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }

  async GetCategoryById(id) {
    const response = await authEDURequest
      .get("/api/courses/category/" + id, {})
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }
  async getCourseContent(id) {
    const response = await authEDURequest
      .get("/api/get-content/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }
}

export default new CourseService();
