import request from "../utils/request";

// 用户登录
export function login(params) {
  return request({
    url: "/user/login",
    method: "get",
    params,
  });
}
