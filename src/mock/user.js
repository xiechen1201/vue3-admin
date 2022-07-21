import Mock from "mockjs";
const Random = Mock.Random;

// 用户登录
Mock.mock("/user/login", {
  "token|50": "",
});

// 用户信息
Mock.mock("/user/info", {
  "userID|10": "",
  userName: "18801120693",
  roles: ["admin"],
  avatar: Random.image("100x100"),
});
