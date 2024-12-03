import { createRouter, createWebHistory } from 'vue-router';

// 导入你将要使用的组件
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 配置路由：路径和组件的映射关系
const routes = [
  { path: '/', component: Home },  // 根路径 -> Home 组件
  { path: '/about', component: About },  // /about 路径 -> About 组件
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),  // 使用 HTML5 History 模式
  routes,  // 路由数组
});

export default router;  // 导出路由实例
