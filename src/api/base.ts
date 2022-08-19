import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { ACCESS_TOKEN, BASE_URL, HTTP_METHODS } from '../consts';
import { getLocalStorage } from '../utils';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleRequest = (config: AxiosRequestConfig) => {
  const TOKEN = getLocalStorage(ACCESS_TOKEN);

  return TOKEN
    ? {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    : config;
};

const createApiMethod = (_axiosInstance: AxiosInstance, methodType: Method) => (config: AxiosRequestConfig) => {
  return axiosInstance({ ...handleRequest(config), method: methodType });
};

export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
