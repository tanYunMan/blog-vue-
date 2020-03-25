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
                  redirect: '/home'
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
