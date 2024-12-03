<template>
  <div id="app">
    <!-- 导航链接 -->
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>

    <!-- 路由视图，显示当前路由匹配的组件 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
  </script>
