<template>
  <div class="home">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22">
        <div class="grid-content bg-purple">
            <div class="box6">
                <div class="text-left centents" v-html="data&&data.content"></div>
                <div class="box6_corner_lf"></div>
                <div class="box6_corner_rt"></div>
                <div class="review">
                  <div class="editor">
                    <textarea class="textarea" placeholder="说点什么" v-model="textarea"></textarea>
                    <div class="botton" @click="verify($event)">发表</div>
                  </div>
                </div>
            </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import AV from 'leancloud-storage'
import feep from '../common'
import markdown from 'showdown'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      textarea: null,
      data: null,
      id: null
    }
  },
  beforeRouteEnter (to, from, next) {
    // do something before updating vue instance
    next(vm => {
      vm.id = to.params.id
      vm.inits()
    })
  },
  computed: {
    validation () {
      return this.$store.state.validation
    }
  },
  methods: {
    inits () {
      var vm = this
      var converter = new markdown.Converter()
      // 表查询
      const query = new AV.Query('blogessay')
      query.get(vm.id).then((reslut) => {
        let puls = reslut.attributes
        let feepld = feep(puls)
        feepld.content = converter.makeHtml(feepld.content)
        vm.data = feepld
      }, (error) => {
        console.log(error)
      })
    },
    validationfn () {
      let [area, msgerror, msgsuccess] = [this.textarea, {showClose: true, message: '评论不能为空!', type: 'error'}, {showClose: true, message: '发表成功！'}]
      let msg = null
      if (!area) msg = msgerror
      else msg = msgsuccess
      this.$message(msg)
    },
    verify () {
      if (!this.validation) this.$store.dispatch('setBoxlogin', true)
      else this.validationfn()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .box6{
    text-align: left;
    .centents{
      background: #fafafa;
      padding: 15px 5px;
    }
  }
  .review{
    overflow: hidden;
    justify-content: flex-start;
    display: flex;
    text-align: center;
    .editor{
      .textarea{
        border-radius: 10px; padding: 10px; width: 500px; height: 50px;
      }
      .textarea:focus{
        outline: 0;
        border: 1px solid #324157;
        box-shadow: 0px 0px 10px 0px #324157;
      }
      .botton{
        display: inline-block;
        width: 60px;
        height: 74px;
        vertical-align: bottom;
        background: #fff;
        border: 1px solid #a9a9a9;
        border-radius: 5px;
        line-height: 74px;
        cursor: pointer;
      }
      .botton:hover{
        background: #324157;
        color: #fff;
        border-color:#324157;
      }
    }
  }
</style>
