<template>
    <div>
      <p>{{ message }}</p>
      <button @click="sendToParent">发送数据到父组件</button>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['sendMessage']);
  
  defineProps({
    message: {
      type: String,
      required: true,
    },
  });
  
  const sendToParent = () => {
    console.log('按钮点击了！');  // 确认按钮点击事件是否触发
    emit('sendMessage', '这是来自子组件的数据');
  };
  </script>
  
  <style scoped>
  /* 子组件的样式 */
  button {
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  