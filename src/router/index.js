import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const HotRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: () => import('components/Hello')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('components/Index')
    },
    {
      path: '/home/:id',
      name: 'home',
      component: () => import('components/Home')
    }
  ]
})
HotRouter.beforeEach((to, from, next) => {
  next()
})
export default HotRouter
