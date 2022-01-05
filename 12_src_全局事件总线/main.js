// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 关闭引入开发提示
Vue.config.productionTip = false;

// 实例化Vue
new Vue({
  render: h => h(App),

  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  }
}).$mount('#app');
