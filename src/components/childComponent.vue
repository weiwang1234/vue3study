<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
  
  <script setup>
  defineProps({
    message: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* 可以添加一些样式 */
  </style>
  