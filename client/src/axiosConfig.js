import axios from "axios";


const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER
})

// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem('persist:auth')
//     console.log(token);
//     return config;
//   }, function (error) {
//     console.log(error);
//     // Do something with request error
//     return Promise.reject(error);
//   });

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // gắn token vào header
  let token = window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth'))?.token.slice(1, -1)
  config.headers = {
    authorization: token ? `Bearer ${token}` : null,
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export default instance