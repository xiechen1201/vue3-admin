import axios from "axios";

// 创建一个 axios 实例
const instance = axios.create({
  //  baseURL: "",
  // timeout: 1000,
});

// 请求之前做某事
instance.interceptors.request.use(
  // 成功的回调函数
  function (config) {
    return config;
  },
  // 失败的回调函数
  function (error) {
    return Promise.reject(error);
  }
);

//请求之后做某事
instance.interceptors.response.use(
  // 成功的回调函数
  function (response) {
    const { status, data } = response;
    if (status === 200) return data;
  },
  // 失败的回调函数
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
