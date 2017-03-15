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
// 表查询
// const query = new AV.Query('blogessay')
// query.find().then((reslut) => {
//   console.log(reslut)
// }, (error) => {
//   console.log(error)
// })
// 获取数据 建立表id查询 相关全部数据
// const query = new AV.Query('TestObject')
// query.get('58abd14c2f301e006c3bb6c2').then(function (data) {
//   console.log(data.get('words'))
// }, function (error) {
//   console.error(error)
// })
// 获取数据 建立表id查询 可以通过创建的变量名 通过相应字段 get 相应值
// const testObject = AV.Object.createWithoutData('TestObject', '58abd14c2f301e006c3bb6c2')
// testObject.fetch().then((data) => {
//   console.log(testObject.get('words'))
// }, (error) => {
//   console.error(error)
// })
// 存储数据
// const TestObject = AV.Object.extend('blogessay')
// const testObject = new TestObject()
// testObject.save({
//   title: '技术',
//   images: 'http://cdn-qn0.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png',
//   content: '<p>简约自在</p>'
// }).then(function (error) {
//   if (error) throw error
//   console.log('LeanCloud Rocks!')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
