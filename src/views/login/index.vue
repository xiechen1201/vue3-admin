<template>
  <div class="login-container">
    <el-form :model="form">
      <div class="title-container">
        <h3>Login Form</h3>
      </div>
      <el-form-item>
        <el-input
          v-model="form.name"
          :prefix-icon="Avatar"
          placeholder="输入账号"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          :prefix-icon="Unlock"
          placeholder="输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="isLoading"
          @click="handleClickLogin"
        >
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Avatar, Unlock } from "@element-plus/icons-vue";

const router = useRouter();
const store = useStore();
const form = reactive({
  name: "18801120693",
  password: "abc123456",
});
const isLoading = ref(false);

function handleClickLogin() {
  isLoading.value = true;
  store.dispatch("user/userLogin").then(() => {
    router.replace({
      path: "/",
      query: { form: "login" },
    });
  });
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  background-color: #283443;
  .el-form {
    width: 520px;
    margin: 0 auto;
    padding: 160px 35px 0;
    .title-container h3 {
      font-size: 26px;
      color: #eee;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: 700;
    }
    .el-form-item {
      ::v-deep(.el-input__wrapper) {
        box-shadow: none;
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        height: 52px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
        .el-icon {
          font-size: 20px;
        }
        .el-input__inner {
          font-size: 16px;
          color: #ffffff;
        }
      }
    }
    .el-button {
      width: 100%;
      height: 45px;
    }
  }
}
</style>
