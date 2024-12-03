<template>
    <div class="login-form">
      <h2>登录</h2>
      <form @submit.prevent="handleSubmit">
        <!-- 用户名输入 -->
        <div>
          <label for="username">用户名：</label>
          <input
            v-model.lazy="username"
            type="text"
            id="username"
            placeholder="请输入用户名"
          />
          <p v-if="usernameError" class="error">{{ usernameError }}</p>
        </div>
  
        <!-- 密码输入 -->
        <div>
          <label for="password">密码：</label>
          <input
            v-model.trim="password"
            type="password"
            id="password"
            placeholder="请输入密码"
          />
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>
  
        <!-- 提交按钮 -->
        <div>
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 定义表单数据
  const username = ref('');
  const password = ref('');
  
  // 错误信息
  const usernameError = ref('');
  const passwordError = ref('');
  
  // 表单提交处理
  const handleSubmit = () => {
    // 清空错误信息
    usernameError.value = '';
    passwordError.value = '';
  
    // 简单的表单验证
    if (!username.value) {
      usernameError.value = '用户名不能为空';
    }
  
    if (!password.value) {
      passwordError.value = '密码不能为空';
    }
  
    if (!usernameError.value && !passwordError.value) {
      // 这里可以进行表单提交操作
      console.log('表单提交成功', { username: username.value, password: password.value });
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369e7f;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
  </style>
  