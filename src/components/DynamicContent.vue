<template>
  <div class="dynamic-content">
    <h2>Welcome to Dynamic Content</h2>
    <p>This is content from the DynamicContent.vue component.</p>
    <!-- 添加图片 -->
    <img
      :src="imageSrc"
      :alt="imageAlt"
    >
  </div>
</template>

<script>
export default {
  name: 'DynamicContent',
  data() {
    return {
      imageSrc: "https://via.placeholder.com/150", // 图片地址
      imageAlt: "示例图片", // 图片描述
    };
  },
};
</script>

<style scoped>
.dynamic-content {
  text-align: center;
  margin: 20px;
  padding: 20px;
  background-color: #f0f8ff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

img {
  margin-top: 20px;
  max-width: 100%; /* 确保图片不会超出容器 */
  height: auto;
}
</style>
