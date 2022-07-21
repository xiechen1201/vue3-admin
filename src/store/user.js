import { toRefs } from "vue";
import Cookie from "js-cookie";
import { login, userInfo } from "../api/user.js";

function getUserInfo() {
  const info = Cookie.get("userInfo");
  return info ? JSON.parse(info) : null;
}

export default {
  state: () => ({
    token: Cookie.get("token") || "",
    userInfo: null,
  }),
  actions: {
    userLogin({ commit }) {
      return new Promise((resolve) => {
        login({}).then((res) => {
          commit("SET_TOKEN", res);
          resolve();
        });
      });
    },
    userInfo({ commit }) {
      console.warn("请求用户信息")
      return new Promise((resolve) => {
        userInfo({}).then((res) => {
          commit("SET_USER_INFO", res);
          resolve(res)
        });
      });
    },
    loginout({ commit }) {
      return new Promise((resolve) => {
        commit("REMOVE_USET_INFO");
        resolve();
      });
    },
  },
  mutations: {
    SET_TOKEN(state, data) {
      Cookie.set("token", data.token);
      state.token = data.token;
    },
    SET_USER_INFO(state, data) {
      state.userInfo = data;
    },
    REMOVE_USET_INFO(state) {
      Cookie.remove("token");
      Cookie.remove("userInfo");

      const { token, userInfo } = toRefs(state);
      token.value = "";
      userInfo.value = null;
    },
  },
  namespaced: true,
};
