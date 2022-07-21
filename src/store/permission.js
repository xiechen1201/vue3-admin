import { asyncRoutes } from "../router";

function hasPermission(route, roles) {
  if (route.meta && route.meta.role) {
    // route.meta.role 是否当前登录的角色
    return roles.some((item) => route.meta.role.includes(item));
  } else {
    return true;
  }
}

function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach((item) => {
    const tmp = {...item};
    if (hasPermission(tmp, roles)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

export default {
  state: () => ({
    routes: [],
  }),
  mutations: {
    SET_ROUTES(state, data) {
      state.routes = data;
    },
  },
  actions: {
    generateRoutes({ commit, rootState }, roles) {
      return new Promise((relove) => {
        const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        commit("SET_ROUTES", accessedRoutes);
        relove(accessedRoutes);
      });
    },
  },
  getters: {},
  namespaced: true,
};
