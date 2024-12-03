<template>
  <div>
    <h1>父组件</h1>
    <childComponent :message="parentMessage" />
  </div>
</template>

<script setup>
import childComponent from './components/childComponent.vue';

const parentMessage = '你好，子组件！11';
</script>
