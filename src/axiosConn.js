import axios from 'axios';

const axiosConn = axios.create();

axios.defaults.xsrfCookieName = "CSRF-TOKEN";

axios.defaults.xsrfHeaderName = "X-CSRF-Token";

axios.defaults.withCredentials = true;

switch (process.env.NODE_ENV) {
  case 'development':
    axiosConn.defaults.baseURL = process.env.REACT_APP_API_URL;
    break;

  default:
    axiosConn.defaults.baseURL = process.env.REACT_APP_BASE_URL_PROD;
}

export default axiosConn;