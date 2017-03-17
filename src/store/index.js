import Vue from 'vue'
import Vuex from 'vuex'
import AV from 'leancloud-storage'
Vue.use(Vuex)
const state = {
  statename: 'statename',
  boxlogin: false,
  validation: null,
  username: '未登录',
  userid: null,
  userlogOut: null
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
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: true
})
