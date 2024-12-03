<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <LoginForm />

    <MyCounter /> <!-- 引入 DynamicContent 组件 -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
//import DynamicContent from './components/DynamicContent.vue'; // 确保路径正确
import LoginForm from './components/LoginForm.vue'; // 确保路径正确

export default {
  name: 'App',
  components: {
    LoginForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
