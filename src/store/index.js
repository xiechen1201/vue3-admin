import { createStore } from "vuex";
import menu from "./menu";
import user from "./user";
import permission from "./permission";

const store = createStore({
  modules: {
    menu,
    user,
    permission,
  },
});

export default store;
