import router from "./router";
import store from "./store/index";

const whiteList = ["/login"];

router.beforeEach((to, from) => {
  const { token } = store.state.user;
  const isLogin = !!token;

  if (isLogin) {
    if (to.path === "/login") {
      return {
        path: "/",
      };
    } else {
      return true;
    }
  } else {
    if (whiteList.includes(to.path)) {
      return true;
    } else {
      return {
        path: "/login",
      };
    }
  }
});
