<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <SubMenu />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import SubMenu from "./coms/SubMenu.vue";
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-header {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
  .el-container {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
}
</style>
