import { ref, toRefs } from "vue";

export default {
  state: () => ({
    isCollapse: ref(false),
  }),
  mutations: {
    changeCollapse(state) {
      const { isCollapse } = toRefs(state);
      isCollapse.value = !isCollapse.value;
    },
  },
  actions: {},
  getters: {},
  namespaced: true,
};
