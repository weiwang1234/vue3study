<template>
  <div>
    <button @click="toggle">
      切换显示
    </button>
    <p v-show="isVisible">
      这段文字可以显示或隐藏。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true, // 控制显示/隐藏
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible; // 切换状态
    },
  },
};
</script>
