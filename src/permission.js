import router from "./router";
import { toRefs } from "vue";
import store from "./store/index";

const whiteList = ["/login"];

router.beforeEach((to, from) => {
  const { token } = toRefs(store.state.user);
  const isLogin = !!token.value;

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
