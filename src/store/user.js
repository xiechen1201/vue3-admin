import { toRefs } from "vue";
import Cookie from "js-cookie";
import { login } from "../api/user.js";

function getUserInfo() {
  const info = Cookie.get("userInfo");
  return info ? JSON.parse(info) : null;
}

export default {
  state: () => ({
    token: Cookie.get("token") || "",
    userInfo: getUserInfo(),
  }),
  actions: {
    userLogin({ commit }) {
      return new Promise((resolve) => {
        login({}).then((res) => {
          commit("SET_USER_INFO", res);
          resolve();
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
    SET_USER_INFO(state, data) {
      Cookie.set("token", data.token);
      Cookie.set("userInfo", JSON.stringify(data));

      state.token = data.token;
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
