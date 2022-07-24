import axios from 'axios';

const axiosConn = axios.create();

switch (process.env.NODE_ENV) {
  case 'development':
    axiosConn.defaults.baseURL = process.env.REACT_APP_BASE_URL_LOCAL;
    break;

  default:
    axiosConn.defaults.baseURL = process.env.REACT_APP_BASE_URL_PROD;
}

export default axiosConn;