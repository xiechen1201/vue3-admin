<template>
  <div class="nav-bar">
    <el-icon color="#404040" size="25px" @click="handleClickIcon">
      <Fold />
    </el-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { Fold } from "@element-plus/icons-vue";

const store = useStore()

function handleClickIcon(){
  store.commit("menu/changeCollapse")
}
</script>

<style lang="scss" scoped>
.nav-bar {
  padding: 0 20px;
  height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  align-items: center;
  .el-icon {
    cursor: pointer;
  }
}
</style>
