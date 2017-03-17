<template>
  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; overflow: hidden;">
    <div id="app" :class="depicstate&&'animation'">
      <Login></Login>
      <div class="content">
        <span class="berfot" @click="depictn"></span>
        <i class="depict active-on-animation" @click="depictn"></i>
        <i class="btnlog"></i>
        <label class="label-title">分类: javaScript<i></i><u>{{username}}</u><i class="exits" @click="exitsback" v-if="validation">退出</i></label>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" :class="nubrou&&'on'">
          <template v-for="(item,i) in routes">
            <el-menu-item :index="item.path" :class="item.active&&'is-active-on'">
              <router-link :to="item.path">{{item.name}}</router-link>
            </el-menu-item>
          </template>
        </el-menu>
        <router-view></router-view>
      </div>
      <div class="data">
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import Login from './components/Login'
export default {
  name: 'app',
  components: {
    Card,
    Login
  },
  computed: {
    boxlogin () {
      return this.$store.state.boxlogin
    },
    username () {
      return this.$store.state.username
    },
    validation () {
      return this.$store.state.validation
    }
  },
  watch: {
    $route (to, from) {
      let nubrou = !this.nubrou
      if (window.DOC) {
        nubrou = false
        this.nubrou = false
        console.log(window.DOC, this.nubrou)
      }
      if (nubrou) {
        return false
      }
      console.log('state')
      this.roufun(!this.nubrou)
    }
  },
  created () {
    this.roufun(this.nubrou)
    this.$store.dispatch('setUsername', '')
  },
  data () {
    return {
      depicstate: false,
      docbools: window.DOC,
      nubrou: true,
      routes: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/index',
          name: '生活记录轴'
        },
        {
          path: '/class',
          name: '-- 排除'
        },
        {
          path: '/home',
          name: '记录详情'
        }
      ]
    }
  },
  methods: {
    exitsback () {
      var vm = this
      vm.$confirm('确定退出账号吗？', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        vm.$store.dispatch('setUserlogOut', '')
        vm.$message({
          type: 'success',
          message: '已退出'
        })
      }).catch(() => {
        console.log('取消')
      })
    },
    depictn () {
      this.depicstate = !this.depicstate
    },
    roufun (o) {
      this.nubrou = o
      this.routes.forEach((item, index) => {
        let bool = false
        if (o && item.path === this.$route.path) {
          bool = true
        }
        this.routes[index].active = bool
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.label-title{position: absolute; right: 60px; color: #fff; z-index: 3; top: 20px;
  i{
    margin-left: 15px;
  }
  .exits{ font-style: inherit;margin-left: 5px;cursor:pointer;color: #ccc;}
}
body{margin: 0;padding: 0;}
.is-active::before,.is-active-on::before{
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background: #20a0ff;
    opacity: 0;
}
.is-active::before{
  opacity: 1;
}
.on .is-active::before{
  opacity: 0;
}
.on .is-active-on::before{
  opacity: 1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
  transition: all .3s;
}
#app div.content>div,#app.animation .content .berfot{
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
#app div.content{
  width: 100%;
  position: relative;
  height: 100%;
}
#app div.data{
  position: absolute;
  width: 300px;
  height: 100%;
  background: #fff;
  left: -300px;
  top: 0;
}
#app.animation .content .berfot{
  z-index: 5;
  background: rgba(0, 0, 0, .3);
  cursor: pointer;
}
#app.animation{
  transform: translate(300px,0);
}
#app div.content>div{
  top: 60px;
  overflow-x: hidden;
  overflow-y: auto;
}
#app .depict{
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
}
.el-menu-item a{
  display: block;
  height: 100%;
  width: 100%;
}
.active-on-animation{
  animation: activeon-animation 5s linear infinite alternate;
}
@keyframes activeon-animation
{
  0% {background:#fff;}
  100% {background:#fe6300;}
}
</style>
