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
    name: "Home",
    meta: {
      title: "主页",
    },
    children: [
      {
        path: "index",
        name: "HomeIndex",
        component: () => import("../views/home/index.vue"),
      },
    ],
  },
];

// 需要权限才能访问的路由
export const asyncRoutes = [
  {
    path: "/table",
    redirect: "/table/index",
    component: layout,
    name: "Table",
    meta: {
      title: "表格",
      role: ["admin"],
    },
    children: [
      {
        path: "index",
        name: "TableIndex",
        component: () => import("../views/table/index.vue"),
        meta: {
          title: "列表",
        },
      },
      {
        path: "edit",
        name: "TableEdit",
        component: () => import("../views/table/edit.vue"),
        meta: {
          title: "编辑",
        },
      },
    ],
  },
  {
    path: "/from",
    redirect: "/from/index",
    component: layout,
    name: "Form",
    meta: {
      title: "表单",
      role: ["admin"],
    },
    children: [
      {
        path: "index",
        name: "From",
        component: () => import("../views/from/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
