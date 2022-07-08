import { createStore } from "vuex";
import menu from "./menu";
import user from "./user"

const store = createStore({
  modules: {
    menu,
    user,
  },
});

export default store;
