import { createRouter, createWebHistory } from "vue-router";
import layout from "../layout/index.vue";

// 不需要权限就能访问的路由
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    redirect: "/home/index",
    component: layout,
    children: [
      {
        path: "index",
        name: "Home",
        component: () => import("../views/home/index.vue"),
        meta: {
          title: "主页",
        },
      },
    ],
  },
];

// 需要权限才能访问的路由
export const asyncRoutes = [
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/table/index.vue"),
    meta: {
      role: ["admin"],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
