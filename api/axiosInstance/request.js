import axiosInstance from ".";

const responseBody = (response) => response.data;
const errorBody = (error) => error?.response?.data;

const ApiRequest = {
  get: (url) => axiosInstance.get(url).then(responseBody).catch(errorBody),
  post: (url, body) =>
    axiosInstance.post(url, body).then(responseBody).catch(errorBody),
  patch: (url, body) =>
    axiosInstance.patch(url, body).then(responseBody).catch(errorBody),
  put: (url, body) =>
    axiosInstance.put(url, body).then(responseBody).catch(errorBody),
  delete: (url, body) =>
    axiosInstance.delete(url, body).then(responseBody).catch(errorBody),
};

export default ApiRequest;
