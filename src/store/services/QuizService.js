import { authEDURequest } from "../Api";

export const postAnswer = (data) =>
  authEDURequest.post("/api/add-quiz", data, {});

export const getQuizById = (id) =>
  authEDURequest.get("/api/quiz/get-quiz/" + id);

export const getScore = (data) => authEDURequest.get("/api/get-score?" + data);

class QuizService {
  async getQuizById(id) {
    const response = await authEDURequest
      .get("/api/quiz/get-quiz/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }
}

export default new QuizService();
