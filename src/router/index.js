import { createRouter, createWebHistory } from "vue-router";
import layout from "../layout/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("../views/login/index.vue"),
    },
    {
      path: "/home",
      redirect: "/home/index",
      component: layout,
      children: [
        {
          path: "index",
          component: () => import("../views/home/index.vue"),
        },
      ],
    },
  ],
});

export default router;
