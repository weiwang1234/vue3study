<!-- UserList.vue -->
<template>
  <div>
    <h1>用户列表</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <p v-else>加载中...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []  // 用来存储用户列表数据
    };
  },
  mounted() {
    // 在组件挂载后调用 Axios 请求数据
    this.fetchUsers();
  },
  methods: {
    // 获取用户列表数据的方法
    async fetchUsers() {
      try {
        // 使用 Axios 获取数据
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // 将获取到的数据赋值给 users
        this.users = response.data;
      } catch (error) {
        console.error('获取用户数据失败:', error);
      }
    }
  }
};
</script>

<style scoped>
/* 样式可以根据需要添加 */
</style>