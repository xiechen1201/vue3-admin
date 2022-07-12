import Mock from "mockjs";
const Random = Mock.Random;

// 用户登录
Mock.mock("/user/login", {
  "userID|10": "",
  userName: "18801120693",
  "token|50": "",
  role: ["admin"],
  avatar: Random.image("100x100"),
});