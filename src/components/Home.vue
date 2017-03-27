<template>
  <div class="home">
    <div class="loading" v-loading.body="fullscreenLoading"  element-loading-text="拼命加载中" v-show="fullscreenLoading"></div>
    <el-row type="flex" class="row-bg" justify="center" v-show="!fullscreenLoading">
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
                <div class="comment">
                  <div v-if="commentdata">
                    <div v-for="(elem, index) in commentdata" :key="elem.key" class="c-content">
                      <div class="c-user-info" style="border-bottom: 1px solid #eee; padding-bottom: 4px;">
                        <span>{{elem.index}}楼</span>
                        <span class="u">{{elem.username}}</span>
                        <span class="c-create-time"> {{elem.time}}</span>
                      </div>
                      <p>
                        {{elem.centent}}
                      </p>
                    </div>
                  </div>
                  <div class="mber0" v-else>
                      <p class="text-centent">
                        暂无评论~
                      </p>
                  </div>
                </div>
            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 服务器
import AV from 'leancloud-storage'
// 深度克隆
import feep from '../common'
// markdown语法转义成html格式
import markdown from 'showdown'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      textarea: null,
      data: null,
      id: null,
      commentdata: null,
      fullscreenLoading: true
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.id = to.params.id
      vm.inits()
    })
  },
  computed: {
    validation () {
      return this.$store.state.validation
    },
    username () {
      return this.$store.state.username
    },
    userid () {
      return this.$store.state.userid
    }
  },
  methods: {
    async submit () {
      var vm = this
      await new Promise((resolve) => {
        // 存储数据
        const TestObject = AV.Object.extend('blogcomment')
        const testObject = new TestObject()
        testObject.save({
          username: vm.username,
          user_id: vm.userid,
          blogessay_id: vm.id,
          centent: vm.textarea,
          likes: 0
        }).then(function (result) {
          console.log(result)
        }, function (error) {
          if (error) throw error
        })
        resolve()
      })
    },
    format (time, formatstr) {
      var t = new Date(time)
      var tf = function (i) { return (i < 10 ? '0' : '') + i }
      return formatstr.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        let str = null
        switch (a) {
          case 'yyyy':
            str = tf(t.getFullYear())
            break
          case 'MM':
            str = tf(t.getMonth() + 1)
            break
          case 'mm':
            str = tf(t.getMinutes())
            break
          case 'dd':
            str = tf(t.getDate())
            break
          case 'HH':
            str = tf(t.getHours())
            break
          case 'ss':
            str = tf(t.getSeconds())
            break
        }
        return str
      })
    },
    comment () {
      var vm = this
      var query = new AV.Query('blogcomment')
      query.startsWith('blogessay_id', vm.id)
      query.find().then((reslut) => {
        let puls = reslut.map((item, index) => {
          item.attributes.time = vm.format(item.get('createdAt'), 'yyyy-MM-dd HH:mm:ss')
          item.attributes.index = index + 1
          return item.attributes
        })
        let feepld = feep(puls.reverse())
        vm.commentdata = feepld.length ? feepld : null
        console.log(feepld)
      }, (error) => {
        throw (error)
      })
    },
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
        vm.comment()
        vm.fullscreenLoading = false
      }, (error) => {
        console.log(error)
      })
    },
    validationfn () {
      let [area, msgerror, msgsuccess] = [this.textarea, {showClose: true, message: '评论不能为空!', type: 'error'}, {showClose: true, message: '发表成功！'}]
      let msg = null
      if (!area) {
        msg = msgerror
        this.$message(msg)
      } else {
        this.submit().then(() => {
          this.$message(msgsuccess)
          this.textarea = ''
          this.comment()
        })
      }
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
  .comment{
    background: #fafafa;
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 15px 25px;
    border-top: 2px solid #eee;
    .u{
      text-decoration: underline;
      color:#406599;
    }
  }
  .box6 .c-content {
    margin-left: 2px;
    overflow: hidden;
    .c-create-time {
      color: #777;
    }
    p {
      font-size: 14px;
      line-height: 22px;
      color: #222;
      font-weight: normal;
    }
  }
  .box6{
    text-align: left;
    max-width: 620px;
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
    background: #fafafa;
    padding: 5px 5px;
    .editor{
      .textarea{
        border-radius: 10px; padding: 10px;height: 50px;
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
