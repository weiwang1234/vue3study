<template>
  <div>
    <button @click="toggleLogin">
      {{ isLoggedIn ? '退出登录' : '登录' }}
    </button> <!-- 根据状态显示按钮文字 -->
    <p v-if="isLoggedIn">
      欢迎回来，用户！
    </p>
    <p v-else>
      请先登录。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // 初始值为 false
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn; // 每次点击切换状态
    },
  },
};
</script>
