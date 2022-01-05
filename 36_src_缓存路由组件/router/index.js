// 引入路由模块
import VueRouter from "vue-router";

import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detailed from '../pages/Detailed.vue'

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },

    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },

        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'Detailed',
              path: 'detailed',
              component: Detailed,

              /* props 第一种传参方式 该对象中所有的key-vale都会以props的形式传给detailed组件*/
              // props: {a: '1', b: '2'}

              /* props 第二种传参方式 布尔类型 若布尔值为真 会把路由中的params参数 以props的形式传给detailed组件*/
              // props: true

              /* props 第三种传参方式 函数*/
              props($route) {
                return {id: $route.query.id, title: $route.query.title}
              }
            }
          ]
        }
      ]
    }
  ]
})
