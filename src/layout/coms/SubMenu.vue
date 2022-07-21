<template>
  <el-menu :collapse="isCollapse">
    <template v-for="(el, index) in menuList">
      <el-sub-menu v-if="hasChildren(el)" :index="String(index)">
        <template #title>
          <span>{{ el.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="(cEl, cIndex) in el.children"
          :index="index + '-' + cIndex"
          @click="handleClickMenuItem(el, cEl)"
        >
          {{ cEl.meta.title }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item
        v-else
        :index="String(index)"
        @click="handleClickMenuItem(null, el)"
      >
        <span>{{ el.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { Menu, Document, Setting } from "@element-plus/icons-vue";

const store = useStore();
const router = useRouter();
const { isCollapse } = toRefs(store.state.menu);
const menuList = store.state.permission.routes;

function hasChildren(data) {
  return data.children && data.children.length > 1;
}
function handleClickMenuItem(parentRoute, currentRoute) {
  if (parentRoute) {
    router.push({
      path: parentRoute.path + "/" + currentRoute.path,
    });
  } else {
    router.push({
      path: currentRoute.path,
    });
  }
}
</script>

<style lang="scss">
:root {
  --el-menu-bg-color: #304156;
  --el-menu-text-color: #bfcbd9;
}

.el-menu {
  height: 100%;
  .el-sub-menu {
    min-width: 200px;
  }
}
</style>
