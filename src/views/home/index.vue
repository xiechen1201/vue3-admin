<template>
  <p>用户信息：{{ store.state.user.userInfo }}</p>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElNotification } from "element-plus";
import "element-plus/es/components/notification/style/css";

const route = useRoute();
const router = useRouter();
const store = useStore();

onMounted(() => {
  const { form } = route.query;
  if (form === "login") {
    router.replace({
      path: route.path,
    });
    ElNotification({
      title: "Success",
      message: "欢迎登录！",
      type: "success",
    });
  }
});
</script>
