import request from "../utils/request";

// 用户登录
export function login(params) {
  return request({
    url: "/user/login",
    method: "get",
    params,
  });
}

// 用户信息
export function userInfo(params) {
  return request({
    url: "/user/info",
    method: "get",
    params,
  });
}
