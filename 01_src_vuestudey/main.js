/* 入口文件 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  /* render: function (createElement) {
    createElement(App)
  } */
}).$mount('#app')
