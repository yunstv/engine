import Vue from 'vue'
import Vuex from 'vuex'
import AV from 'leancloud-storage'
Vue.use(Vuex)
const state = {
  statename: 'statename',
  boxlogin: false,
  validation: null,
  username: '未登录'
}
const actions = {
  setBoxlogin: ({ commit }, value) => {
    commit('SET_BOXLOGIN', value)
  },
  setValidation: ({ commit }, value) => {
    AV.User.logIn(value.username, value.userpass).then(function (loginedUser) {
      value.callback(loginedUser, true)
      commit('SET_VALIDATION', true)
      commit('SET_USERNAME', loginedUser.get('username'))
    }, function (error) {
      value.callback(error, false)
      commit('SET_VALIDATION', false)
    })
  },
  setUsername: ({ commit }, value) => {
    let information = AV.User.current().get('username')
    if (information) commit('SET_USERNAME', information)
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
    Vue.set(state, 'username', value)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: true
})
