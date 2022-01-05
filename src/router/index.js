// 引入路由模块
import VueRouter from "vue-router";

import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detailed from '../pages/Detailed.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'About',
      path: '/about',
      component: About,
      meta: { isAuth: true ,title: '关于' }
    },

    {
      name: 'Home',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          name: 'News',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' },
          beforeEnter(to, from, next) { // 独享路由守卫
            if (to.meta.isAuth) {
              if (localStorage.getItem('school') === 'guigu') {
                next();
              }else {
                alert('没有权限');
              }
            }else {
              next()
            }
          }
        },

        {
          name: 'Message',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '信息' },
          children: [
            {
              name: 'Detailed',
              path: 'detailed',
              component: Detailed,
              meta: { isAuth: true, title: '详细' },

              /* props 第一种传参方式 该对象中所有的key-vale都会以props的形式传给detailed组件*/
              // props: {a: '1', b: '2'}

              /* props 第二种传参方式 布尔类型 若布尔值为真 会把路由中的params参数 以props的形式传给detailed组件*/
              // props: true

              /* props 第三种传参方式 函数*/
              props($route) {
                return { id: $route.query.id, title: $route.query.title }
              }
            }
          ]
        }
      ]
    }
  ]
})

// 全局前置路由守卫 初始化的时候被调用,每次路由切换的时候调用
/* router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta.isAuth) { // 是否需要鉴权
    if (localStorage.getItem('school') === 'guigu') {
      next();
    } else {
      alert('你没有权限');
    }
  } else {
    next();
  }
}) */

// 全局后置路由守卫 每次路由切换后调用
router.afterEach((to) => {
  document.title = to.meta.title || '系统';
})

export default router;
