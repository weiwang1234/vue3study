<template>
  <div>
    <input
      v-model="newItem"
      placeholder="添加新项"
    >
    <button @click="addItem">
      添加
    </button>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        {{ index + 1 }}. {{ item }}
        <button @click="removeItem(index)">
          删除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['苹果', '香蕉', '橘子','葡萄'], // 初始列表
      newItem: '', // 输入的新项
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.items.push(this.newItem); // 添加新项
        this.newItem = ''; // 清空输入框
      }
    },
    removeItem(index) {
      this.items.splice(index, 2); // 删除对应索引的项
    },
  },
};
</script>
