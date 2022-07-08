<template>这是home页面</template>

<script setup>
import { onMounted } from "vue";
import { ElNotification } from "element-plus";
import 'element-plus/es/components/notification/style/css'

onMounted(() => {
  ElNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
});
</script>
