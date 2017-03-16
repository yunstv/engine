import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Index from 'components/Index'
import Class from 'components/Class'
import Home from 'components/Home'
Vue.use(Router)
const HotRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home
    }
  ]
})
HotRouter.beforeEach((to, from, next) => {
  next()
})
export default HotRouter
