// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 取消开发提示
Vue.config.productionTip = false;

// 实例化vue
new Vue({
  render: h => h(App)
}).$mount('#app');