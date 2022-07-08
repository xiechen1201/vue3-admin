import router from "./router";
import { ref, toRefs } from "vue";
import store from "./store/index";

const { token } = toRefs(store.state.user);
const isLogin = ref(token);

router.beforeEach((to, from) => {
  if (!isLogin.value && to.path !== "/login") {
    return {
      path: "/login",
    };
  } else {
    return true;
  }
  // else if (to.path === "/login") {
  //   return {
  //     path: "/",
  //   };
  // }
});
