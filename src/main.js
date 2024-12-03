import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 导入路由配置

const app = createApp(App);
app.use(router);  // 注册 Vue Router
app.mount('#app');  // 挂载 Vue 应用
