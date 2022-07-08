import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./style/index.scss";

const app = createApp(App).use(router);
app.mount("#app");
