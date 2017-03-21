<template>
  <div class="login blowup" v-show="boxlogin">
    <div>
      <i class="el-icon-close" @click="blowup"></i>
      <div class="ov">
        <ul v-if="isshowregister">
          <li style="padding-top: 0px;">
           <h1 class="text-centent">登录梦周十blog</h1>
          </li>
          <li :class="username&&'on'">
            <input type="text" autocomplete="off" class="el-input__inner" v-model="username">
            <label for="basic-name">账号</label>
          </li>
          <li :class="userpass&&'on'">
            <input type="password" autocomplete="off" class="el-input__inner" v-model="userpass">
            <label for="basic-pass">密码</label>
          </li>
          <li>
            <div>
              <el-button size="large" :plain="true" type="info" :loading="loading" @click="login">{{loading?'正在登录':'登录'}}</el-button>
            </div>
          </li>
          <li class="gks"><span @click="isshowregister=!isshowregister">注册</span></li>
          </ul>
          <ul v-if="!isshowregister">
            <li style="padding-top: 0px; margin-bottom: 0; margin-top: -47px; height: 19px;">
             <h1 class="text-centent">注册</h1>
            </li>
            <li :class="register_username&&'on'">
              <input type="text" autocomplete="off" class="el-input__inner" v-model="register_username">
              <label for="basic-name">账号</label>
            </li>
            <li :class="register_useremaill&&'on'">
              <input type="text" autocomplete="off" class="el-input__inner" v-model="register_useremaill">
              <label for="basic-pass">邮箱</label>
            </li>
            <li :class="register_userpass&&'on'">
              <input type="password" autocomplete="off" class="el-input__inner" v-model="register_userpass">
              <label for="basic-pass">密码</label>
            </li>
            <li>
              <div>
                <el-button size="large" :plain="true" type="info" :loading="register_loading" @click="register_login">{{register_loading?'正在注册':'注册'}}</el-button>
              </div>
            </li>
            <li class="gks"><span @click="isshowregister=!isshowregister">登录</span></li>
        </ul>
      </div>
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
      register_username: null,
      register_userpass: null,
      register_useremaill: null,
      loading: false,
      register_loading: false,
      isshowregister: true,
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
      },
      register_state: {
        success: {
          title: '成功注册梦周十的blog！',
          message: '请登录',
          type: 'success'
        },
        warning: {
          title: '帐号或者邮箱已被注册',
          message: '您可尝试重新输入帐号或者邮箱',
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
    register_login () {
      var $self = this
      let api = {
        username: $self.register_username,
        userpass: $self.register_userpass,
        useremaill: $self.register_useremaill,
        callback: function (state, bools) {
          let msg = $self.register_state
          bools ? ((() => {
            $self.$notify(msg.success)
            $self.username = $self.register_username
            $self.isshowregister = true
          })()) : ((() => {
            $self.$notify(msg.warning)
          })())
          $self.register_loading = false
        }
      }
      if (!api.username || api.username.length < 3) {
        return $self.$message({showClose: true, message: '帐号字符长度必须大于3', type: 'error'})
      }
      var iseamill = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/
      if (!iseamill.test(api.useremaill)) {
        return $self.$message({showClose: true, message: '请输入正确的邮箱格式', type: 'error'})
      }
      if (!api.userpass || api.userpass.length < 6) {
        return $self.$message({showClose: true, message: '密码字符长度必须大于6', type: 'error'})
      }
      $self.register_loading = true
      this.$store.dispatch('setRegisterUser', api)
    },
    login () {
      let $self = this
      let api = {
        username: $self.username,
        userpass: $self.userpass,
        callback: function (state, bools) {
          let msg = $self.state
          bools ? ((() => {
            $self.$notify(msg.success)
            $self.blowup()
          })()) : ((() => {
            $self.$notify(msg.warning)
          })())
          $self.loading = false
        }
      }
      if (!api.username || api.username.length < 3) {
        return $self.$message({showClose: true, message: '帐号字符长度必须大于3', type: 'error'})
      }
      if (!api.userpass || api.userpass.length < 6) {
        return $self.$message({showClose: true, message: '密码字符长度必须大于6', type: 'error'})
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
    .ov{
      position: relative;
      overflow: auto;
      height: 409px;
      margin-top: 29px;
      .gks{
        padding-top: 0px;
        height: 1px;
        margin: 0px 0px;
        margin-top: 2px;
        text-align: right;
        font-size: 16px;
        text-decoration: underline;
      }
    }
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
