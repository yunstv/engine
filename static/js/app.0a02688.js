webpackJsonp([4],{103:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s.n(a),i=s(72),r=s.n(i),o=s(67),l=s(69),c=s.n(l),u=s(70),p=(s.n(u),s(71)),d=(s.n(p),s(28)),m=s.n(d),v=s(45),f=s(68);n.a.use(v.a),n.a.use(c.a);m.a.init({appId:"p1fezCcoa6ApiO7DYAoxCOlG-gzGzoHsz",appKey:"Yy7ha8Nc6VdlyB5mJPlGjP0t"}),new n.a({el:"#app",router:o.a,store:f.a,template:"<App/>",components:{App:r.a}})},104:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(159),n=s.n(a),i=s(160),r=s.n(i);e.default={name:"app",components:{Card:n.a,Login:r.a},computed:{boxlogin:function(){return this.$store.state.boxlogin},username:function(){return this.$store.state.username},validation:function(){return this.$store.state.validation},routespath:function(){return this.$store.state.routespath},propsvstate:function(){return this.$store.state.propsvstate}},watch:{$route:function(t,e){this.routermain()}},created:function(){this.routermain(),this.$store.dispatch("setUsername","")},data:function(){return{depicstate:!1,docbools:window.DOC,nubrou:!0,routes:null,carddata:!1}},methods:{routermain:function(){this.$store.dispatch("setRoutespath",{name:this.$route.name,routespath:this.routespath})},verify:function(){this.validation||this.$store.dispatch("setBoxlogin",!0)},exitsback:function(){var t=this;t.$confirm("确定退出账号吗？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("setUserlogOut",""),t.$message({type:"success",message:"已退出"})}).catch(function(){console.log("取消")})},depictn:function(){this.depicstate=!this.depicstate,!this.carddata&&(this.carddata=!0,this.$store.dispatch("setCardData",""))},depictncard:function(){this.depicstate=!this.depicstate},handleSelect:function(t,e){console.log(t,e)}}}},105:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"card",data:function(){return{msg:"home"}},computed:{cardData:function(){return this.$store.state.cardData}},methods:{routerssearching:function(t,e){this.$router.push({path:"index",query:{active:t,class:e}})},allblog:function(){this.$store.dispatch("setBlogclassifyid",null),this.$store.dispatch("setPropsvstate",null),this.$router.push({name:"index"})},routers:function(t,e,s,a){if(0===s)return!1;this.$store.dispatch("setBlogclassifyid",t),this.$store.dispatch("setPropsvstate",e),this.$router.push({path:"index",query:{active:a,class:e}})}}}},106:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{msg:"login",username:null,userpass:null,register_username:null,register_userpass:null,register_useremaill:null,loading:!1,register_loading:!1,isshowregister:!0,state:{success:{title:"成功登录梦周十的blog！",message:"登录成功后，您将有权限进行评论！",type:"success"},warning:{title:"帐号不存在或密码错误",message:"您可尝试重新输入密码或注册帐号",type:"warning"}},register_state:{success:{title:"成功注册梦周十的blog！",message:"请登录",type:"success"},warning:{title:"帐号或者邮箱已被注册",message:"您可尝试重新输入帐号或者邮箱",type:"warning"}}}},computed:{boxlogin:function(){return this.$store.state.boxlogin},validation:function(){return this.$store.state.validation}},methods:{register_login:function(){var t=this,e={username:t.register_username,userpass:t.register_userpass,useremaill:t.register_useremaill,callback:function(e,s){var a=t.register_state;s?function(){t.$notify(a.success),t.username=t.register_username,t.isshowregister=!0}():function(){t.$notify(a.warning)}(),t.register_loading=!1}};return!e.username||e.username.length<3?t.$message({showClose:!0,message:"帐号字符长度必须大于3",type:"error"}):/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(e.useremaill)?!e.userpass||e.userpass.length<6?t.$message({showClose:!0,message:"密码字符长度必须大于6",type:"error"}):(t.register_loading=!0,void this.$store.dispatch("setRegisterUser",e)):t.$message({showClose:!0,message:"请输入正确的邮箱格式",type:"error"})},login:function(){var t=this,e={username:t.username,userpass:t.userpass,callback:function(e,s){var a=t.state;s?function(){t.$notify(a.success),t.blowup()}():function(){t.$notify(a.warning)}(),t.loading=!1}};return!e.username||e.username.length<3?t.$message({showClose:!0,message:"帐号字符长度必须大于3",type:"error"}):!e.userpass||e.userpass.length<6?t.$message({showClose:!0,message:"密码字符长度必须大于6",type:"error"}):(t.loading=!0,void this.$store.dispatch("setValidation",e))},blowup:function(){this.$store.dispatch("setBoxlogin",!1)}}}},152:function(t,e){},153:function(t,e){},154:function(t,e){},159:function(t,e,s){s(153);var a=s(24)(s(105),s(162),"data-v-85f4eec2",null);t.exports=a.exports},160:function(t,e,s){s(154);var a=s(24)(s(106),s(163),"data-v-e3267d2c",null);t.exports=a.exports},161:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",overflow:"hidden"}},[s("div",{class:t.depicstate&&"animation",attrs:{id:"app"}},[s("Login"),t._v(" "),s("div",{staticClass:"content"},[s("span",{staticClass:"berfot",on:{click:t.depictncard}}),t._v(" "),s("i",{staticClass:"depict active-on-animation",on:{click:t.depictn}}),t._v(" "),s("i",{staticClass:"btnlog"}),t._v(" "),s("label",{staticClass:"label-title"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.propsvstate,expression:"propsvstate"}]},[t._v("分类: "+t._s(t.propsvstate))]),s("i"),s("u",{on:{click:t.verify}},[t._v(t._s(t.username))]),t.validation?s("i",{staticClass:"exits",on:{click:t.exitsback}},[t._v("退出")]):t._e()]),t._v(" "),s("el-menu",{staticClass:"el-menu-demo",class:t.nubrou&&"on",attrs:{theme:"dark","default-active":"1",mode:"horizontal"},on:{select:t.handleSelect}},[t._l(t.routespath,function(e,a){return t.routespath?[s("el-menu-item",{class:e.active&&"is-active-on",attrs:{index:e.path}},[s("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)]:t._e()})],2),t._v(" "),s("router-view")],1),t._v(" "),s("div",{staticClass:"data"},[s("Card")],1)],1)])},staticRenderFns:[]}},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"filters"}),t._v(" "),s("div",{staticClass:"bio"},[t._m(0,!1,!1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.cardData,expression:"!cardData"}],staticClass:"load"},[s("p",{staticStyle:{"text-align":"center","margin-top":"50px","font-size":"14px"}},[t._v("列表加载中...")])]),t._v(" "),t.cardData?s("nav",{staticClass:"list",staticStyle:{height:"53%",overflow:"auto"}},[t._l(t.cardData,function(e,a){return"分类"==a?s("dl",{key:e.key},[s("dt",[t._v(t._s(a))]),t._v(" "),t._l(e,function(e,a){return s("dd",[t._v("\n          "+t._s(a)+"\n          "),t._l(e,function(e,a){return s("p",{on:{click:function(s){t.routers(e.id,e.name,e.count,1)}}},[t._v("\n            "+t._s(e.name)+"\n            "),s("span",[t._v(t._s(e.count))])])})],2)})],2):t._e()}),t._v(" "),t._l(t.cardData,function(e,a){return"标签"==a?s("dl",{key:e.key},[s("dt",[t._v(t._s(a))]),t._v(" "),s("dd",{staticClass:"dd"},t._l(e,function(e,a){return s("span",{staticClass:"label",on:{click:function(e){t.routerssearching(2,a)}}},[t._v(t._s(a))])}))]):t._e()}),t._v(" "),t._l(t.cardData,function(e,a){return"归档"==a?s("dl",{key:e.key,staticClass:"time"},[s("dt",[t._v(t._s(a))]),t._v(" "),t._l(e,function(e,a){return s("dd",{on:{click:function(e){t.routerssearching(3,a)}}},[t._v("\n          "+t._s(a)+"\n          "),s("span")])})],2):t._e()}),t._v(" "),s("dl",[s("dt",[s("div",{staticClass:"btn",on:{click:t.allblog}},[t._v("\n          全部\n        ")])])])],2):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"frienhover"},[s("div",{staticClass:"friendship"},[s("div",{staticClass:"t"},[t._v("\n          友情链接\n        ")]),t._v(" "),s("div",[s("a",{attrs:{href:"http://www.cnblogs.com/jbml-154312/",title:"http://www.cnblogs.com/jbml-154312/",alt:"http://www.cnblogs.com/jbml-154312/",target:"_blank"}},[t._v("久伴沫离")])]),t._v(" "),s("div",[s("a",{attrs:{href:"http://www.hewenjun.top/",title:"http://www.hewenjun.top/",alt:"http://www.hewenjun.top/",target:"_blank"}},[t._v("勤能补拙")])])]),t._v(" "),s("img",{attrs:{src:"http://www.yunstv.cn/myimags.jpg"}}),t._v(" "),s("p",[t._v("梦周十")]),t._v(" "),s("p",{staticStyle:{"font-size":"12px","margin-top":"-22px"}},[t._v("\n        当我和世界不一样，那就让我不一样\n      ")]),t._v(" "),s("nav",{staticClass:"header-nav"},[s("div",{staticClass:"social"},[s("a",{staticClass:"github",attrs:{target:"_blank",href:"https://github.com/yunstv",title:"github"}},[t._v("github")]),t._v(" "),s("a",{staticClass:"weibo",attrs:{target:"_blank",href:"http://weibo.com/3609009263/profile",title:"weibo"}},[t._v("weibo")])])])])}]}},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.boxlogin,expression:"boxlogin"}],staticClass:"login blowup"},[s("div",[s("i",{staticClass:"el-icon-close",on:{click:t.blowup}}),t._v(" "),s("div",{staticClass:"ov"},[t.isshowregister?s("ul",[t._m(0,!1,!1),t._v(" "),s("li",{class:t.username&&"on"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"basic-name"}},[t._v("账号")])]),t._v(" "),s("li",{class:t.userpass&&"on"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userpass,expression:"userpass"}],staticClass:"el-input__inner",attrs:{type:"password",autocomplete:"off"},domProps:{value:t.userpass},on:{input:function(e){e.target.composing||(t.userpass=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"basic-pass"}},[t._v("密码")])]),t._v(" "),s("li",[s("div",[s("el-button",{attrs:{size:"large",plain:!0,type:"info",loading:t.loading},on:{click:t.login}},[t._v(t._s(t.loading?"正在登录":"登录"))])],1)]),t._v(" "),s("li",{staticClass:"gks"},[s("span",{on:{click:function(e){t.isshowregister=!t.isshowregister}}},[t._v("注册")])])]):t._e(),t._v(" "),t.isshowregister?t._e():s("ul",[t._m(1,!1,!1),t._v(" "),s("li",{class:t.register_username&&"on"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register_username,expression:"register_username"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.register_username},on:{input:function(e){e.target.composing||(t.register_username=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"basic-name"}},[t._v("账号")])]),t._v(" "),s("li",{class:t.register_useremaill&&"on"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register_useremaill,expression:"register_useremaill"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.register_useremaill},on:{input:function(e){e.target.composing||(t.register_useremaill=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"basic-pass"}},[t._v("邮箱")])]),t._v(" "),s("li",{class:t.register_userpass&&"on"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register_userpass,expression:"register_userpass"}],staticClass:"el-input__inner",attrs:{type:"password",autocomplete:"off"},domProps:{value:t.register_userpass},on:{input:function(e){e.target.composing||(t.register_userpass=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"basic-pass"}},[t._v("密码")])]),t._v(" "),s("li",[s("div",[s("el-button",{attrs:{size:"large",plain:!0,type:"info",loading:t.register_loading},on:{click:t.register_login}},[t._v(t._s(t.register_loading?"正在注册":"注册"))])],1)]),t._v(" "),s("li",{staticClass:"gks"},[s("span",{on:{click:function(e){t.isshowregister=!t.isshowregister}}},[t._v("登录")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticStyle:{"padding-top":"0px"}},[s("h1",{staticClass:"text-centent"},[t._v("登录梦周十blog")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticStyle:{"padding-top":"0px","margin-bottom":"0","margin-top":"-47px",height:"19px"}},[s("h1",{staticClass:"text-centent"},[t._v("注册")])])}]}},67:function(t,e,s){"use strict";var a=s(2),n=s.n(a),i=s(164);n.a.use(i.a);var r=new i.a({routes:[{path:"/",name:"Hello",component:function(){return s.e(2).then(s.bind(null,168))}},{path:"/index",name:"index",component:function(){return s.e(1).then(s.bind(null,170))}},{path:"/home/:id",name:"home",component:function(){return s.e(0).then(s.bind(null,169))}}]});r.beforeEach(function(t,e,s){s()}),e.a=r},68:function(t,e,s){"use strict";var a=s(2),n=s.n(a),i=s(45),r=s(28),o=s.n(r);n.a.use(i.a);var l={statename:"statename",boxlogin:!1,validation:null,registerUser:null,username:"未登录",userid:null,userlogOut:null,cardData:12,routespath:[{path:"/",pathname:"Hello",name:"个人介绍"},{path:"/index",pathname:"index",name:"文章列表"}],blogclassifyid:null,propsvstate:null},c={setPropsvstate:function(t,e){(0,t.commit)("SET_PROPSVSTATE",e)},setBlogclassifyid:function(t,e){(0,t.commit)("SET_BLOGCLASSIFYID",e)},setCardData:function(t,e){var s=t.commit,a=new o.a.Query("blogclassify"),n=new o.a.Query("blogessay"),i={},r={};n.select(["blogclassifyid"]).find().then(function(t){var e=t.map(function(t,e){return t.get("blogclassifyid")});a.contains("essayroot","1"),a.find().then(function(t){i.root1=t,a.contains("essayroot","2").find().then(function(t){i.root2=t,a.contains("essayroot","3").find().then(function(t){i.root3=t,i.root1.forEach(function(t,s){var a=t.id,n=t.get("labelname");r[n]={},i.root2.forEach(function(t,s){var o=t.get("goback"),l=t.id,c=t.get("labelname");a===o&&(r[n][c]=[],i.root3.forEach(function(t,s){var a=t.get("goback"),i=t.id,o=t.get("labelname");a===l&&r[n][c].push({id:i,name:o,count:function(){var t=0;return e.forEach(function(e,s){i===e&&(t+=1)}),t}()})}))})}),s("SET_CARDDATA",r)},function(t){throw t})},function(t){throw t})},function(t){throw t})})},setBoxlogin:function(t,e){(0,t.commit)("SET_BOXLOGIN",e)},setValidation:function(t,e){var s=t.commit;o.a.User.logIn(e.username,e.userpass).then(function(t){e.callback(t,!0),t.username=t.get("username"),t.validation=!0,s("SET_USERNAME",t)},function(t){e.callback(t,!1),s("SET_VALIDATION",!1)})},setUserlogOut:function(t,e){var s=t.commit;o.a.User.logOut(),s("SET_USERNAME",{username:"未登录",id:"",validation:!1})},setUsername:function(t,e){var s=t.commit,a=o.a.User.current();a&&(a.username=a.get("username"),a.validation=!0,s("SET_USERNAME",a))},setRoutespath:function(t,e){var s=t.commit;e.routespath.forEach(function(t,s){var a=!1;t.pathname===e.name&&(a=!0),t.active=a}),s("SET_ROUTESPATH",e.routespath)},setRegisterUser:function(t,e){var s=(t.commit,new o.a.User);s.setUsername(e.username),s.setPassword(e.userpass),s.setEmail(e.useremaill),s.signUp().then(function(t){e.callback(t,!0)},function(t){e.callback(t,!1)})}},u={SET_PROPSVSTATE:function(t,e){n.a.set(t,"propsvstate",e)},SET_BLOGCLASSIFYID:function(t,e){n.a.set(t,"blogclassifyid",e)},SET_CARDDATA:function(t,e){n.a.set(t,"cardData",e)},SET_BOXLOGIN:function(t,e){n.a.set(t,"boxlogin",e)},SET_VALIDATION:function(t,e){n.a.set(t,"validation",e)},SET_USERNAME:function(t,e){n.a.set(t,"username",e.username),n.a.set(t,"userid",e.id),n.a.set(t,"validation",e.validation)},SET_ROUTESPATH:function(t,e){n.a.set(t,"routespath",e)}};e.a=new i.a.Store({state:l,actions:c,mutations:u,strict:!0})},70:function(t,e){},71:function(t,e){},72:function(t,e,s){s(152);var a=s(24)(s(104),s(161),null,null);t.exports=a.exports}},[103]);