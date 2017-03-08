<template>
  <div class="index">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6">
          <div class="grid-content bg-purple">
            <div class="box15">
                 <h1>Sample Box</h1>   
                 <img src="http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg">
                  <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.
                  </p>
                 <br />
                 <a href="">阅读详情</a>   
                 <div class="box15_ribbon"></div>
            </div>  
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
