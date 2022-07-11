import { ref, toRefs } from "vue";
import { getCookie, setCookie } from "@/utils/cookie";

export default {
  state: () => ({
    token: ref(getCookie("token")),
  }),
  actions: {
    setUserToken({ commit }, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("SET_USER_TOKEN", data);
          setCookie("token", data);
          resolve();
        }, 2000);
      });
    },
    loginout({ commit }) {
      return new Promise((resolve) => {
        commit("REMOVE_USET_TOKEN");
        setCookie("token", "");
        resolve();
      });
    },
  },
  mutations: {
    SET_USER_TOKEN(state, data) {
      const { token } = toRefs(state);
      token.value = data;
    },
    REMOVE_USET_TOKEN(state) {
      const { token } = toRefs(state);
      token.value = "";
    },
  },
  namespaced: true,
};
