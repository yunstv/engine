import Vue from 'vue'
import Vuex from 'vuex'
import AV from 'leancloud-storage'
Vue.use(Vuex)
const state = {
  statename: 'statename',
  boxlogin: false,
  validation: null,
  registerUser: null,
  username: '未登录',
  userid: null,
  userlogOut: null,
  routespath: [
    {
      path: '/',
      pathname: 'Hello',
      name: '个人介绍'
    },
    {
      path: '/index',
      pathname: 'index',
      name: '文章列表'
    }
  ]
}
const actions = {
  setBoxlogin: ({ commit }, value) => {
    commit('SET_BOXLOGIN', value)
  },
  setValidation: ({ commit }, value) => {
    AV.User.logIn(value.username, value.userpass).then(function (loginedUser) {
      value.callback(loginedUser, true)
      loginedUser.username = loginedUser.get('username')
      loginedUser.validation = true
      commit('SET_USERNAME', loginedUser)
    }, function (error) {
      value.callback(error, false)
      commit('SET_VALIDATION', false)
    })
  },
  setUserlogOut: ({ commit }, value) => {
    AV.User.logOut()
    commit('SET_USERNAME', {username: '未登录', id: '', validation: false})
  },
  setUsername: ({ commit }, value) => {
    let information = AV.User.current()
    if (information) {
      information.username = information.get('username')
      information.validation = true
      commit('SET_USERNAME', information)
    }
  },
  setRoutespath: ({ commit }, obj) => {
    obj.routespath.forEach((item, index) => {
      let bool = false
      if (item.pathname === obj.name) {
        bool = true
      }
      item.active = bool
    })
    commit('SET_ROUTESPATH', obj.routespath)
  },
  setRegisterUser: ({ commit }, obj) => {
    // 新建 AVUser 对象实例
    var user = new AV.User()
    // 设置用户名
    user.setUsername(obj.username)
    // 设置密码
    user.setPassword(obj.userpass)
    // 设置邮箱
    user.setEmail(obj.useremaill)
    user.signUp().then(function (loginedUser) {
      obj.callback(loginedUser, true)
    }, function (error) {
      obj.callback(error, false)
    })
  }
}
const mutations = {
  SET_BOXLOGIN (state, value) {
    Vue.set(state, 'boxlogin', value)
  },
  SET_VALIDATION (state, value) {
    Vue.set(state, 'validation', value)
  },
  SET_USERNAME (state, value) {
    Vue.set(state, 'username', value.username)
    Vue.set(state, 'userid', value.id)
    Vue.set(state, 'validation', value.validation)
  },
  SET_ROUTESPATH (state, obj) {
    Vue.set(state, 'routespath', obj)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: true
})
