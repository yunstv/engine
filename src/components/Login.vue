<template>
  <div class="login blowup" v-show="boxlogin">
    <div>
      <i class="el-icon-close" @click="blowup"></i>
      <ul>
        <li style="padding-top: 0px;">
         <h1 class="text-centent">登录梦周十blog</h1>
        </li>
        <li :class="username&&'on'">
          <input type="text" autocomplete="off" class="el-input__inner" id="basic-name" v-model="username">
          <label for="basic-name">账号</label>
        </li>
        <li :class="userpass&&'on'">
          <input type="password" autocomplete="off" class="el-input__inner" id="basic-pass" v-model="userpass">
          <label for="basic-pass">密码</label>
        </li>
        <li>
          <div>
            <el-button size="large" :plain="true" type="info" :loading="loading" @click="login">{{loading?'正在登录':'登录'}}</el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login',
      username: null,
      userpass: null,
      loading: false,
      state: {
        success: {
          title: '成功登录梦周十的blog！',
          message: '登录成功后，您将有权限进行评论！',
          type: 'success'
        },
        warning: {
          title: '帐号不存在或密码错误',
          message: '您可尝试重新输入密码或注册帐号',
          type: 'warning'
        }
      }
    }
  },
  computed: {
    boxlogin () {
      return this.$store.state.boxlogin
    },
    validation () {
      return this.$store.state.validation
    }
  },
  methods: {
    login () {
      let $self = this
      let api = {
        username: $self.username,
        userpass: $self.userpass,
        callback: function (state) {
          let msg = $self.state
          state ? ((() => {
            $self.$notify(msg.success)
            $self.blowup()
          })()) : ((() => {
            $self.$notify(msg.warning)
          })())
          $self.loading = false
        }
      }
      $self.loading = true
      this.$store.dispatch('setValidation', api)
    },
    blowup () {
      this.$store.dispatch('setBoxlogin', false)
      console.log(this.boxlogin)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.login{
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  >div{
    width: 350px;
    height: 450px;
    background: #f1f1f1;
    border-radius: 10px;
    position: relative;
    >i{position: absolute; right: 10px; top: 10px;cursor: pointer; transition: all .5s;}
    >i:hover{
      transform: rotate(135deg);
    }
    ul{
      list-style-type: none;
      margin:0;
      padding:0;
      text-align: left;
      padding: 20px 50px;
      margin-top: 20px;
      .text-centent{
        text-align: center;
      }
      .el-input__inner{
        height: 50px;
        margin-bottom: -50px;
      }
      .el-input__inner:focus +label,.on .el-input__inner +label{
        top: -5px;
        left: 0;
      }
      li{
        height: 50px;
        position: relative;
        padding-top: 40px;
      }
      label{
        padding: 15px 0 8px 0;
        display: block;
        position: absolute;
        left: 10px;
        top: 40px;
        transition: all .5s;
      }
      [type="button"]{
        display: block;
        width: 100%;
      }
    }
}
}
.login.blowup{
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
}
</style>
