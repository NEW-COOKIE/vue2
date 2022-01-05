// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 引入 vueRouter
import VueRouter from 'vue-router';
// 引入route
import router from './route';

Vue.config.productionTip = false;

// 使用vueRouter插件
Vue.use(VueRouter);


// 实例化vue
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
