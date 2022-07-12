<template>
  <div class="nav-bar">
    <el-icon color="#404040" size="25px" @click="handleClickIcon">
      <Fold />
    </el-icon>
    <el-dropdown>
      <el-avatar :size="30" shape="square" :src="userInfo.avatar" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Fold } from "@element-plus/icons-vue";

const store = useStore();
const router = useRouter();
const { userInfo } = store.state.user;

function handleClickIcon() {
  store.commit("menu/changeCollapse");
}
function loginout() {
  store.dispatch("user/loginout").then(() => {
    router.replace({
      path: "/login",
    });
  });
}
</script>

<style lang="scss" scoped>
.nav-bar {
  padding: 0 20px;
  width: calc(100% - 40px);
  height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  .el-icon {
    cursor: pointer;
  }
}
</style>
