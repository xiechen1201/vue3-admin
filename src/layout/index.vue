<template>
  <el-container>
    <el-aside width="200px">
      <SubMenu />
    </el-aside>
    <el-main>
      <NavBar />
      <div class="page-content">
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import SubMenu from "./coms/SubMenu.vue";
import NavBar from "./coms/NavBar.vue";
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-main {
    padding: 0;
    .page-content {
      padding: 20px;
      min-height: calc(100vh - 90px);
      background-color: #f5f5f5;
    }
  }
}
</style>
