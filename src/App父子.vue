<template>
  <div>
    <h1>父组件</h1>
    <message-sender :message="parentMessage" @sendMessage="handleUpdate" />
    <p>从子组件接收到的数据：{{ parentData }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MessageSender from './components/MessageSender.vue';

const parentMessage = '你好，子组件！';
const parentData = ref(''); // 使用 ref 来创建响应式数据

const handleUpdate = (data) => {
  console.log('接收到子组件的数据:', data);
  parentData.value = data; // 使用 .value 来更新响应式数据
};
</script>

<style scoped>
/* 父组件的样式 */
h1 {
  color: #333;
}
</style>
