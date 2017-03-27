<template>
  <div class="index">
     <div class="loading" v-loading.body="fullscreenLoading"  element-loading-text="拼命加载中" v-show="fullscreenLoading"></div>
      <el-row :gutter="20" v-show="!fullscreenLoading">
         <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in data" :key="item.key">
          <div class="grid-content bg-purple">
            <router-link :to="item.link">
              <div class="box15">
                   <h1>{{item.title}}</h1>
                   <div class="img">
                      <img :src="item.images">
                   </div>
                   <div class="centents" v-html="item.content"></div>
                   <br />
                   <a href="">阅读详情</a>
                   <div class="box15_ribbon"></div>
              </div>
            </router-link>
          </div>
        </el-col>
      </el-row>
	  </div>
  </div>
</template>
<script>
import AV from 'leancloud-storage'
import feep from '../common'
import markdown from 'showdown'
export default {
  name: 'hello',
  created () {
    var vm = this
    var converter = new markdown.Converter()
    // 表查询
    const query = new AV.Query('blogessay')
    query.find().then((reslut) => {
      var [map, puls] = [reslut, []]
      if (Array === map.constructor) {
        puls = map.map((item, index) => {
          item.attributes.id = item.id
          return item.attributes
        })
      }
      let feepld = feep(puls)
      // get('content')
      feepld = feepld.map((item, index) => {
        item.link = {name: 'home', params: { id: item.id }}
        item.content = converter.makeHtml(item.paper)
        return item
      })
      vm.data = feepld
      vm.fullscreenLoading = false
    }, (error) => {
      console.log(error)
    })
  },
  data () {
    return {
      data: null,
      fullscreenLoading: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

html {
    overflow-x: hidden;
}

@keyframes squeezeBody {
    from { width: 100%; }
    to { width: calc(100% - 300px); }
}

@-webkit-keyframes squeezeBody {
    from { width: 100%; }
    to { width: calc(100% - 300px); }
}

@keyframes stretchBody {
    from { width: calc(100% - 300px); }
    to { width: 100%; }
}

@-webkit-keyframes stretchBody {
    from { width: calc(100% - 300px); }
    to { width: 100%; }
}

.squeezed-body {
    animation: squeezeBody 0.5s ease;
    -webkit-animation: squeezeBody 0.5s ease;
    width: calc(100% - 300px);
}

.full-body {
    animation: stretchBody 0.5s ease;
    -webkit-animation: stretchBody 0.5s ease;
    width: 100%;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Old Standard TT', serif;
    font-weight: bold;
}

h3 {
    border-bottom: 1px solid #ddd;
}

.serif {
    font-family: 'Old Standard TT', serif;
}

.top-bar {
    height: 45px;
    min-height: 45px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}

.bars-lnk {
    color: #fff;
}

.bars-lnk i {
    display: inline-block;
    margin-left: 10px;
    margin-top: 7px;
}

.bars-lnk img {
    display: inline-block;
    margin-left: 10px;
    margin-top: -15px;
    margin-right: 15px;
    height: 35px;
}

.lateral-menu {
    background-color: #333;
    color: rgb(144, 144, 144);
    width: 300px;
    font-family: 'Open Sans', 'Myriad Pro', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif;
}

.lateral-menu label {
    color: rgb(144, 144, 144);
}

.lateral-menu-content {
    padding-left: 10px;
    height: 100%;
    font-size: 12px;
    font-style: normal;
    font-variant: normal;
    font-weight: bold;
    line-height: 16px;
}

.lateral-menu-content .title{
    padding-top: 15px;
    font-size: 2em;
    height: 45px;
}

.lateral-menu-content-inner {
    overflow-y: auto;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 50px;
    padding-right: 10px;
    font-size: 0.9em;
}



.container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 100%;
    padding-top: 65px;
}

.container>* {
    display: block;
    width: 50%;
    margin-left: 10px;
    margin-right: 10px;
    max-height: 100%;
}

.container textarea {
    resize: none;
    font-family: Consolas,"Liberation Mono",Courier,monospace;
    height: 97%;
    max-height: 97%;
    width: 45%;
}

#preview {
    height: 97%;
    max-height: 97%;
    border: 1px solid #eee;
    overflow-y: scroll;
    width: 55%;
    padding: 10px;
}
h1, h2 {
  font-weight: normal;
}
h1{
  margin-bottom: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.img{
  max-width: 100%;
  overflow: hidden;
}
</style>
