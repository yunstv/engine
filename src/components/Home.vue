<template>
  <div class="home">
      <el-row>
        <el-col :span="4">
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
            </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
