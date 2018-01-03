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
  cardData: 12,
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
  ],
  blogclassifyid: null,
  propsvstate: null
}
const actions = {
  setPropsvstate: ({ commit }, name) => {
    commit('SET_PROPSVSTATE', name)
  },
  setBlogclassifyid: ({ commit }, id) => {
    commit('SET_BLOGCLASSIFYID', id)
  },
  setCardData: ({ commit }, value) => {
    let query = new AV.Query('blogclassify')
    let querycomment = new AV.Query('blogessay')
    var json = {}
    var datas = {}
    querycomment.select(['blogclassifyid']).find().then((results) => {
      let arrids = results.map((item, index) => {
        return item.get('blogclassifyid')
      })
      query.contains('essayroot', '1')
      query.find().then((results) => {
        json.root1 = results
        query.contains('essayroot', '2').find().then((results) => {
          json.root2 = results
          query.contains('essayroot', '3').find().then((results) => {
            json.root3 = results
            json.root1.forEach((item, index) => {
              let id1 = item.id
              let labelname1 = item.get('labelname')
              datas[labelname1] = {}
              json.root2.forEach((item, index) => {
                let id2 = item.get('goback')
                let id21 = item.id
                let labelname2 = item.get('labelname')
                if (id1 === id2) {
                  datas[labelname1][labelname2] = []
                  json.root3.forEach((item, index) => {
                    let id3 = item.get('goback')
                    let id31 = item.id
                    let labelname3 = item.get('labelname')
                    if (id3 === id21) {
                      datas[labelname1][labelname2].push({
                        id: id31,
                        name: labelname3,
                        count: (() => {
                          let num = 0
                          arrids.forEach((item, index) => {
                            var id = item
                            if (id31 === id) num += 1
                          })
                          return num
                        })()
                      })
                    }
                  })
                }
              })
            })
            commit('SET_CARDDATA', datas)
          }, (error) => {
            throw (error)
          })
        }, (error) => {
          throw (error)
        })
      }, (error) => {
        throw (error)
      })
    })
  },
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
  SET_PROPSVSTATE (state, name) {
    Vue.set(state, 'propsvstate', name)
  },
  SET_BLOGCLASSIFYID (state, id) {
    Vue.set(state, 'blogclassifyid', id)
  },
  SET_CARDDATA (state, value) {
    Vue.set(state, 'cardData', value)
  },
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
