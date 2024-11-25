<template>
  <div>
    <button @click="toggle">
      切换显示
    </button>
    <p v-show="isVisible">
      v-show：不会移除 DOM 节点，只是隐藏。
    </p>
    <p v-if="isVisible1">
      v-if：元素会被移除或重新插入 DOM。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      isVisible1: true,

    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
      //this.isVisible1 = !this.isVisible1;

    },
  },
};
</script>
