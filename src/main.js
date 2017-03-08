// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'assets/css/common.css'
import AV from 'leancloud-storage'
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)
Vue.use(ElementUI)

const appId = 'p1fezCcoa6ApiO7DYAoxCOlG-gzGzoHsz'
const appKey = 'Yy7ha8Nc6VdlyB5mJPlGjP0t'

AV.init({ appId, appKey })

// const TestObject = AV.Object.extend('TestObject')
// const testObject = new TestObject()
// testObject.save({
//  words: 'Hello World!',
//  data: ['1', '2']
// }).then(function (error) {
//  if (error) throw error
//  console.log('LeanCloud Rocks!')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
