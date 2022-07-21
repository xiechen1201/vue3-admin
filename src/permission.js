import router from "./router";
import store from "./store/index";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const { token } = store.state.user;
  const isLogin = !!token;

  // 如果登录
  if (isLogin) {
    if (to.path === "/login") {
      next({
        path: "/",
      });
    } else {
      const hasRoles =
        store.state.user.userInfo &&
        store.state.user.userInfo.roles &&
        store.state.user.userInfo.roles.length > 0;

      // 如果存在角色
      if (hasRoles) {
        next();
      } else {
        const { roles } = await store.dispatch("user/userInfo");
        const accessRoutes = await store.dispatch(
          "permission/generateRoutes",
          roles
        );
        accessRoutes.forEach((element) => {
          router.addRoute(element);
        });
        next({ ...to, replace: true });
      }
    }
  } else {
    // 如果存在于白名单中
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  }
});
