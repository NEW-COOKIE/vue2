// 引入vueRouter组件 
import VueRouter from "vue-router";

// 引入路由组件
import About from '../page/About.vue';
import Home from '../page/Home.vue';
import News from '../page/News.vue';
import Message from '../page/Message.vue'
import Detailed from '../page/Detailed.vue'

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

              // props 第一种写法, 值为对象, 该对象中的key-value中的属性都会以props的形式传给detailed
              // props: {a: '1', b: '2'}

              // props 第二种写法 值为布尔值 若props的值为真 会把params中的所有参数 以props的形式传递给detailed
              // props: true

              // props 第三种写法 值为函数
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
