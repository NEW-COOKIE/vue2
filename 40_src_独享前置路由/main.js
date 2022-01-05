// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 引入路由
import VueRouter from 'vue-router';
// 引入route
import router from './router';

// 关闭开发提示
Vue.config.productionTip = false;
// 使用路由插件
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
