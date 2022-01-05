// 引入vueRouter组件 
import VueRouter from "vue-router";

// 引入路由组件
import About from '../page/About.vue';
import Home from '../page/Home.vue';

// 创建路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },

    {
      path: '/home',
      component: Home,
    }
  ]
})
