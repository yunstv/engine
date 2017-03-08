import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  statename: 'statename',
  boxlogin: false
}
const actions = {
  setBoxlogin: ({ commit }, value) => {
    commit('SET_BOXLOGIN', value)
  }
}
const mutations = {
  SET_BOXLOGIN (state, value) {
    Vue.set(state, 'boxlogin', value)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: true
})
