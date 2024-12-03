<template>
    <div>
      <h1>用户 ID: {{ userId }}</h1>
      <p>这是用户页面，显示用户的 ID。</p>
    </div>
  </template>
  
  <script setup>
  // 使用 Vue Router 提供的 `useRoute` 获取动态路由参数
  import { useRoute } from 'vue-router';
  
  const route = useRoute();  // 获取当前路由对象
  const userId = route.params.id;  // 获取路由参数 id
  </script>
  