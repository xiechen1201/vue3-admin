<template>这是home页面</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import "element-plus/es/components/notification/style/css";

const route = useRoute();
const router = useRouter();

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
