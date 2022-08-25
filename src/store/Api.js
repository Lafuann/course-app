import axios from "axios"

const token = localStorage.getItem('token');
const normalRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_CMS_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'app_code': 'wl-malaysia'
  }
})
delete normalRequest.defaults.headers.common["Authorization"];
export default normalRequest;

export const authCMSRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_CMS_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'app_code': 'wl-malaysia',
    'token': token,
  }
})
export const authEDURequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_EDU_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Method': '*',
    'app_code': 'wl-malaysia',
    'token': token,
  },
  auth: {
    username: 'api',
    password: 'booking'
  },
})
