import { ref, toRefs } from "vue";
import { getCookie, setCookie } from "@/utils/cookie";

export default {
  state: () => ({
    token: ref(getCookie("token")),
  }),
  actions: {
    setUserToken(state, data) {
      return new Promise((resolve) => {
        state.commit("SET_USER_TOKEN", data);
        setCookie("token", data);

        resolve();
      });
    },
  },
  mutations: {
    SET_USER_TOKEN(state, data) {
      const { token } = toRefs(state);
      token.value = data;
    },
  },
  namespaced: true,
};
