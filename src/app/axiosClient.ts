import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const AxiosClient = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

AxiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        // navigate('/register');
        break;
      case 404:
        // case 403:
        // navigate('/');
        break;
    }
    return Promise.reject(error.response.data);
  }
);

export default AxiosClient;
