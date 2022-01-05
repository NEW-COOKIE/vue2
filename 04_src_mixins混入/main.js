import Vue from 'vue';
import App from './App.vue';
// import {hunhe} from './mixins';

Vue.config.productionTip = false;

// Vue.mixin(hunhe); // 全局使用混入

new Vue({
  render: h => h(App)
}).$mount('#app');
