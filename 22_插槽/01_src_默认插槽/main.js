// 引入vue
import Vue from 'vue';
// 引入vueresource
import VueResource from 'vue-resource';
// 引入App
import App from './App.vue';

// 取消开发提示
Vue.config.productionTip = false;

// 使用vueresource插件
Vue.use(VueResource); 

// 实例化vue
new Vue({
  render: h => h(App),

  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
}).$mount('#app');