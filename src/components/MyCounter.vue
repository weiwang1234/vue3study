<template>
  <div id="app">
    <h1>计数器应用</h1>
    <p>当前计数：{{ count }}</p>
    <button @click="decrement">
      - 减少
    </button>
    <button @click="increment">
      + 增加
    </button>
    <button @click="reset">
      清零
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0, // 初始化计数值
    };
  },
  methods: {
    // 增加计数
    increment() {
      this.count++;
    },
    // 减少计数
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    // 重置计数
    reset() {
      this.count = 0;
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
}
button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background-color: #f0f0f0;
}
</style>
