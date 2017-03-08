<template>
  <div class="hello">
    <div class="loading" v-loading.body="fullscreenLoading"  element-loading-text="拼命加载中" v-show="fullscreenLoading"></div>
      <div class="centent" v-show="!fullscreenLoading">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :xs="22" :sm="18" :md="12" :lg="12">
            <div class="grid-content bg-purple">
              <h1 class="actor">{{ msganimation }}</h1>
              <p v-html="massage"></p>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      text: [
        'hello！ 欢迎光临，我的博客',
        '本博客创立与2017/2/21',
        '博客内容主要是一些随意杂谈， ',
        '生活日记以及前端相关技术内容等...',
        '希望大家能够收藏或者转发!',
        '你的支持是我更新博客的动力~',
        '博主:',
        '梦周十'
      ],
      msganimation: '',
      massage: '',
      fullscreenLoading: true,
      bool: true,
      pares: false,
      flag: 0,
      time1: null,
      time2: null,
      time3: null
    }
  },
  watch: {
    msganimation () {
      let vm = this
      console.log('watch')
      vm.time1 && clearTimeout(vm.time1)
      vm.time1 = setTimeout(() => {
        vm.characterAnimationfun()
      }, 100)
    }
  },
  beforeCreate () {
    console.log('beforeCreate:', this.ready)
  },
  created () {
    console.log('created:', this.ready())
  },
  methods: {
    ready () {
      console.log('ready:')
      let vm = this
      setTimeout(() => {
        vm.fullscreenLoading = false
        vm.characterAnimationfun()
      }, 1000)
      return 'start'
    },
    substringfun () {
      let vm = this
      let sting = String(vm.msganimation)
      let stingz = sting.substring(0, sting.length - 1)
      vm.pares = true
      vm.msganimation = stingz
      if (vm.msganimation.length === 0) {
        vm.massage = vm.text.slice(0, vm.flag + 1).join('<br/>')
      }
      if (vm.msganimation.length === 0 && vm.flag === vm.text.length - 1) {
        setTimeout(() => {
          window.DOC = true
          vm.$router.push({name: 'index'})
        }, 5000)
        return false
      }
      if (vm.pares && vm.msganimation.length === 0) {
        vm.pares = false
        vm.bool = true
        vm.time2 && clearTimeout(vm.time2)
        vm.time2 = setTimeout(() => {
          vm.flag += 1
          vm.characterAnimationfun()
        }, 100)
      }
    },
    characterAnimationfun () {
      let vm = this
      let str = ''
      let split = vm.text[vm.flag].split('')
      let sting = String(vm.msganimation)
      vm.time3 && clearTimeout(vm.time3)
      for (let i = 0; i < split.length; i++) {
        if (vm.pares) {
          vm.substringfun()
          break
        }
        if (sting.length === split.length) {
          vm.time3 = setTimeout(() => {
            vm.substringfun()
          }, 1000)
          vm.bool = false
          break
        }
        if (vm.bool) {
          str += split[i]
          if (i >= sting.length) {
            vm.msganimation = str
            break
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .loading{position: absolute; right: 0; left: 0; top: 0px; bottom: 0;}
  .centent{
    margin: 0 auto;
    min-width: 100px;
    position: relative;
    margin-top: 10%;
  }
  .hello{
    min-height: 500px;
  }
  p.el-loading-text{
    text-align: center;
    color: #333;
  }
  .actor{
    font-size: 40px;
    text-align: left;
    height: 105px;
  }
  .actor:after {
      content: '';
      width: 6px;
      height: 50px;
      vertical-align: -8px;
      margin-left: 5px;
      background-color: #fff;
      display: inline-block;
      animation: blink 400ms infinite alternate;
  }
  @keyframes blink {
    from { opacity: 0;}
    to { opacity: 1;}
  }
</style>
