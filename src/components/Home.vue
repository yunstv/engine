<template>
  <div class="home">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="22">
        <div class="grid-content bg-purple">
            <div class="box6">
                <h1>Sample Box</h1>
                <img src="http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg">
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.
                </p>
                <br />
                <a href="http://www.designshock.com/"> DesignShock.com </a>
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
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      textarea: null
    }
  },
  computed: {
    validation () {
      return this.$store.state.validation
    }
  },
  methods: {
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
  .review{
    overflow: hidden;
    justify-content: flex-start;
    display: flex;
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
