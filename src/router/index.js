import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
      {
          path: '/',
          component: () => import('@/App.vue'),
          children: [
              //默认没参数的跳转
              {
                  path: '/',
                  redirect: '/login'
              },
              //首页
              {
                  path: '/home',
                  name: 'home',
                  component: () => import('@/pages/front/classify.vue')
              },{
                path: '/photo',
                name: 'photo',
                component: () => import('@/pages/front/photo.vue')
            },{
                path: '/login',
                name: 'login',
                component: () => import('@/pages/front/login.vue')
            },{
                path: '/views',
                name: 'views',
                component: () => import('@/pages/front/views.vue')
            },{
                path: '/advice',
                name: 'advice',
                component: () => import('@/pages/front/advice.vue')
            },{
                path: '/perMessage',
                name: 'perMessage',
                component: () => import('@/pages/front/perMessage.vue')
            },

          ]
      },
      //注意：下面这个404的匹配要放到最下面
      {
          path: '*',
          component: () => import('@/pages/404/index.vue')
      }
  ]
})
