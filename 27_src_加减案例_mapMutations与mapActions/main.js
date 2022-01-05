// 引入vue
import Vue from 'vue';
// 引入vueResource
import VueResource from 'vue-resource';

// 引入App
import App from './App.vue';
// 
import store from './store';

// 使用vueResource插件
Vue.use(VueResource);

// 关闭开发提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  beforeCreate() { // 安装全局事件总线
    Vue.prototype.$bus = this;
  }
}).$mount('#app');
