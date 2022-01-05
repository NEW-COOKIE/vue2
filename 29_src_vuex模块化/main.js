// 引入Vue
import Vue from 'vue';
// 引入vueResource插件
import vueResource from 'vue-resource';
// 引入App
import App from './App.vue';
// 引入store 用于使用vuex
import store from './store';
// 使用插件
Vue.use(vueResource);

// 实例化vue
new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
}).$mount('#app');
