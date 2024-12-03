<!-- App.vue -->
<template>
  <div id="app">
    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    UserList
  }
};
</script>

<style>
/* 样式可以根据需要添加 */
</style>
