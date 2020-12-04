import axios from 'axios';
import {get} from 'lodash';
import {BASE_API_URL} from './../constants/constants';

const instance = axios.create({
  method: 'get',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 100000,
  validateStatus: (status) => {
    const isValid = status >= 200 && status < 400; // default
    return isValid;
  },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  //Do something before request is sent
  const headers = {
    ...config.headers.common,
    ...config.headers[config.method],
    ...config.headers,
  };
  ['common', 'get', 'post', 'head', 'put', 'patch', 'delete'].forEach(
    (header) => {
      delete headers[header];
    },
  );
  const printableLogs = `${new Date()} | Request: ${config.method.toUpperCase()} | ${
    config.url
  } | ${JSON.stringify(config.data)} | ${JSON.stringify(headers)}`;
  console.log(printableLogs);
  return config;
});

instance.interceptors.request.use(null, (error) => {
  const printableLogs = `${new Date()} | Request Error non-http: ${JSON.stringify(
    error,
  )}`;
  console.log(printableLogs);
  return Promise.reject(error);
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const printableLogs = `${new Date()} | Response Error Http: ${
      error.message
    } | ${originalRequest.url} `;
    console.log(printableLogs);
    return Promise.reject(error);
  },
);

class API {
  constructor() {
    this.BASE_URL = BASE_API_URL;
  }

  async request(request, baseURL = this.BASE_URL, onUploadProgress = null) {
    instance.defaults.baseURL = baseURL;
    if (request.contentType && request.contentType === 'urlencoded') {
      instance.defaults.headers.common['Content-Type'] =
        'application/x-www-form-urlencoded';
    }
    if (request.contentType && request.contentType === 'form-data') {
      instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    }
    instance.defaults.onUploadProgress = (event) => {
      if (onUploadProgress) {
        onUploadProgress(event);
      }
    };
    try {
      const response = await instance(request);
      const printableLogs = `${new Date()} | Response Success Http: ${
        response.status
      } | ${response.config.url}`;
      console.log(printableLogs);
      return response.data;
    } catch (error) {
      var status = 0;
      var data = {
        message: 'Server did not respond please try again later.',
      };
      if (error.response) {
        status = get(error.response, 'status', 0);
        data  = get(error.response, 'data.message', data);
      }
      throw {
        status,
        data,
      };
    }
  }
}

const APIService = new API();

export default APIService;
