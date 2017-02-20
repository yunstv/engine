<template>
  <div class="hello" v-loading.body="fullscreenLoading"  element-loading-text="拼命加载中">
    <h1 class="actor">{{ msganimation }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msganimation: null,
      fullscreenLoading: false
    }
  },
  watch: {
    msganimation () {
      this.characterAnimationfun()
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
    characterAnimationfun () {
      console.log(1)
      this.msganimation = this.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello{
    min-height: 500px;
    margin-left: -15px;
  }
  p.el-loading-text{
    text-align: center;
    color: #333;
  }
  .actor{
    font-size: 40px;
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
