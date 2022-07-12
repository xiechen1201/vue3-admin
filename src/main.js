import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./permission";
import "./style/index.scss";
import"./mock/index.js"

const app = createApp(App).use(router).use(store);
app.mount("#app");
