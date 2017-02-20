<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="(item,i) in routes">
        <el-menu-item :index="item.path">
          <router-link :to="item.path">{{item.name}}</router-link>
        </el-menu-item>
      </template>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
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
          name: '分类'
        },
        {
          path: '/home',
          name: '记录详情'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.el-menu-item a{
  display: block;
  height: 100%;
  width: 100%;
}
</style>
