import { authCMSRequest } from '../Api';

class HomePageService {
  async getAllData() {
    const response = await authCMSRequest.get('/api/v1/services/dashboards').then((res) => {
      return res.data;
    }).catch((err) => {
      console.log(err);
    });
    return response;
  }
}

export default new HomePageService();
