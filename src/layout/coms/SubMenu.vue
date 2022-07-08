<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Menu />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <Menu />
      </el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon>
        <Document />
      </el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { useStore } from "vuex";
import { Menu, Document, Setting } from "@element-plus/icons-vue";

const store = useStore();
const { isCollapse } = toRefs(store.state.menu);
</script>

<style>
:root {
  --el-menu-bg-color: #304156;
  --el-menu-text-color: #bfcbd9;
}

.el-menu {
  height: 100%;
}
</style>
