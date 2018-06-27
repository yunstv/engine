<template>
  <div class="card">
    <div class="filters"></div>
    <div class="bio">
      <div class="frienhover">
        <div class="friendship">
          <div class="t">
            友情链接
          </div>
          <div>
            <a href="http://www.cnblogs.com/jbml-154312/" title="http://www.cnblogs.com/jbml-154312/" alt="http://www.cnblogs.com/jbml-154312/" target="_blank">久伴沫离</a>
          </div>
          <div>
            <a href="http://www.hewenjun.top/" title="http://www.hewenjun.top/" alt="http://www.hewenjun.top/" target="_blank">勤能补拙</a>
          </div>

        </div>
        <img src="static/img/17945292.jpg">
        <p>梦周十</p>
        <p style="font-size: 12px; margin-top: -22px;">
          当我和世界不一样，那就让我不一样
        </p>
        <nav class="header-nav">
          <div class="social">
              <a class="github" target="_blank" href="https://github.com/yunstv" title="github">github</a>
              <a class="weibo" target="_blank" href="http://weibo.com/3609009263/profile" title="weibo">weibo</a>
          </div>
        </nav>
      </div>
      <div class="load" v-show="!cardData">
        <p style="text-align:center;margin-top:50px;font-size:14px;">列表加载中...</p>
      </div>
      <nav class="list" v-if="cardData" style="height: 53%; overflow: auto;">
        <dl v-for="(elem, index) in cardData" :key="elem.key" v-if="index=='分类'">
          <dt>{{index}}</dt>
          <dd v-for="(elem1, index1) in elem">
            {{index1}}
            <p v-for="(elem2, index2) in elem1" @click="routers(elem2.id, elem2.name, elem2.count, 1)">
              {{elem2.name}}
              <span>{{elem2.count}}</span>
            </p>
          </dd>
        </dl>
        <dl v-for="(elem, index) in cardData" :key="elem.key" v-if="index=='标签'">
          <dt>{{index}}</dt>
          <dd class="dd">
            <span v-for="(elem1, index1) in elem" class="label" @click="routerssearching(2, index1)">{{index1}}</span>
          </dd>
        </dl>
        <dl v-for="(elem, index) in cardData" :key="elem.key" v-if="index=='归档'" class="time">
          <dt>{{index}}</dt>
          <dd v-for="(elem1, index1) in elem" @click="routerssearching(3, index1)">
            {{index1}}
            <span></span>
          </dd>
        </dl>
        <dl>
          <dt><div class="btn" @click="allblog">
            全部
          </div></dt>
        </dl>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  data () {
    return {
      msg: 'home'
    }
  },
  computed: {
    cardData () {
      return this.$store.state.cardData
    }
  },
  methods: {
    routerssearching (active, name) {
      this.$router.push({path: 'index', query: {active: active, class: name}})
    },
    allblog () {
      this.$store.dispatch('setBlogclassifyid', null)
      this.$store.dispatch('setPropsvstate', null)
      this.$router.push({name: 'index'})
    },
    routers (id, name, count, active) {
      if (count === 0) return false
      this.$store.dispatch('setBlogclassifyid', id)
      this.$store.dispatch('setPropsvstate', name)
      this.$router.push({path: 'index', query: {active: active, class: name}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .list{
    padding: 0px 40px;
    *{
      margin-left: 0;
      text-align: left;
      color: #fff;
      font-size: 16px;
    }
    .btn{
      text-align: center; border: 1px solid #fff; line-height: 27px; cursor: pointer; position: absolute; bottom: 29px; right: 25px; left: 25px;
    }
    dl.time{
      margin:0 -40px;
      dd,dt{
        padding: 3px 40px 3px 40px;
      }
      dd:hover{
        background:rgba(0, 0, 0, .3);
        text-decoration: none;
      }
    }
    dl{
      dt{
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;
      }
      .dd{
        margin-bottom: -15px;
      }
      dd{
        overflow: hidden;
        cursor: pointer;
        margin-bottom: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
        span{
          float: right;
        }
        span.label{
          float: left;
          display: inline-block;
          margin-right: 15px;
          margin-bottom: 10px;
        }
        span.label:hover{
          color: #ccc;
        }
      }
      dd p:hover{
        text-decoration: underline;
      }
    }
  }
  .header-nav .social {
      margin-right: 15px;
      margin-top: 10px;
      text-align: center;
  }
  .header-nav .social a.github {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFjklEQVR4Xu2bjXEVNxCAdysgVACuIFBBnAqCKwipILiCxBVAKghUAFRAXEGggtgVhFSwme9Yvbl/aXX37t1j0ExiZnyn035a7a+scqJhZo9F5JF//l5V706xFD3mR13I70XkiYhc+s/vMt/8LCIfReQv//npmHBWB2BmCPiziDx3gddgDJDXIvJGVQG02lgNgJmxw7+KyLPVVjc+0TsR+UNV0ZDFYzEAF/w3V/HFCwpMAICbpSCqAbiq/7nBjueYoBG/1B6NKgBmhpojfM6g5Ra/1u/xIEAIH4swADNDcAzcHscrVb2OLKwYgKv82xOc9Yg8PIsWXJUeiSIALvyHFd1aVKjo87jNH0sgZAG48H+LCJHbOQ3swtMchFkAZ7jz/Q3KakIOAGpPgHPO452qXk0JMAnAzF55ZHfOwqe1EzD9PibIKACP7tj93HjIGTMzkh1cI/FByvBy79b+/l5E2Bx29s6P6b8Fk2EUB3HCAEDA6L1X1UHcb2aAgPbaID4xr6oS+XWGmSHYDxkIo0ZxDECp6k+qFQtxEMz1wBeGACw0ZXP93Ui2huiSf5NGM/4TkReqSjY4OswM4OQjuUES9aL9UAeA5+//5Gbx34+qVPtd16YnNSGqQwTEx5wr89CcIK1kXLTrC30AUCaXLxlZACWTrPFMwGbxOWoKh1D+ACC4+0x0rgBY+0EL2gAiu88kxNsDg7TGjkbnCB6Bjha0AeBKIuntwKBEF77W8xUxy2dVfcj3GwAVBHlt1A2uJVRkHjNDE3+KvJM0OAGIqj+u6VJVibVPPjwQw60ml1uypsYYJgBR9b9WVXz8boaZ4d9fBhbUHAOtsP40MXaZGpsZ0V4kAr0AAOFsaRABYGpvk1FZYAdWf9SjT0p2peMKAKVhZJq0E0mVfmmL5yq0+QYAJYlEWj9tKjK/3Y7gMbiNArhV1V0XSIIb2gCg3le6q504eo9qEIwJGgAWEGQ30d/UmqNRYRTA13YE5BuAoNWkOPE0cGQ2fzRo0+6jXkBUNdtM2Vzq1geDNi3sBvnUbgohfdDByhCvNwCiqeRuPUHUAzQpfUUofKeqF6dU8xkXSEE3kqhdA4DIrqQJ0v7ubsphaVEVSd2X48z/g4aDV3bnDYLWv+GGQU8AIglRgj7bGNnyiFQc4y8GUPUyAYimxEm+k9cGKmoAnQ1MADAcpR2h/ubSr7vZcsdb55522GjXt2A9TV2jXRavOQbpOxRHqROGb2kVLHTwiBtu6n+lWWx/jkNO0wYwVRq7dcr0DHhmrnUGAG5qva8RbO4d7zNS+qattbQmcfBi/d7gWFGxc83ES9AET3PFx/6FZyqwgCweZka7G+iRi9Yl83eKun0AU6XlzkVE3w3AlFZgw4UUM4v2KkqE55lOSX/sfgCCpd58f9JDHuCaQDUpN7jRQYs8dMvbIQM+0uzIrWVQ0xwDgMpNCYYQWM9GmEL/W507VMT2OQBcm+t0s6buCM3dEumoc4GqVmePleHtFITRjZgCgPGZO+Od3oC7JexHalDSO+R9jOXrqPq3/PycNuZ2u/37yWM4d02Oj081HMNGLbLa9rMVeUr/U7ON3NxFybm22eA81QqZ8f+RqvXYVLOZa7a8NRNrYwjJBY56S2ShBmRzlSwAt/ZzPjn9QRM/cTPJQzR/FhcNgPpbuABAkfcpAuAQCEEjnddGlqVF1EoA2Z1PoIsBOARsAtpQHJxsDACD9zxyLEMAHALeIZcLHDR5QwC4umfRazthAA6BOAG/n72euhEA6hFkoaFwuzmiS1yXX0jgSExeVD4yADJMVL76744XAWhFbBhI/huAOBIABCfCXHxVZxUALRC4PkpUGEsM5eIbJa0LDxg4bA8luOod72v8qgBaIJpCxlolMs81srfGa47z/5KTlx8jRxXEAAAAAElFTkSuQmCC');
  }
  .header-nav .social a.weibo{
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAGTElEQVR4Xu2bj3FcNRDGdysAVwBUAKkAqIC4gjgVECogVACpgLiCJBUQV5CkAkgF2BUs8zukGz2dpF29uxv7xqcZjyd+T3raT99+++e9qDzyoY/cfjkDcGbAI0fg7AKnQgAz+1pEnonID2nP34nIrYj8k/79XkT4+aSq/D00ToIBZvaliPwtIvz2Bsa/FZFrVQWQ4TgVAF6IyO+eMY3rr0XkN1XNLNm55VQAuBKRP1cAwBQY8VxVYcVpAsCuzeyjiHy7EgSmAQKMWIyTYEDesZllAfyYhS7pA4LINZjy1QCkHRBOCoDI6SeQOOkeED+W4nhUANLp/CQihDAUPIetdzOhKmJ4fY+ZAQJhsx7s4UkWxqMAYGY8GDpmyrY2wUng19MjAZv1oBv3zawXPd6q6iUPPhgAaVM/iwgPjcbr7UlEUTCzP0SE55SDMPdSVa8nmLBxhYMAkE6cjUUML/f4SlUBLDTMDLH7MLgZRiF0C2aZGQDVmkCidLUXAGlDJCg9qnuG3ahqeG4SuL+cRfHxhXsN5l2sBsDM8HGMnz31cv9TADBxIG7luoTJJ+UfOnnE5SoAzIysDAD2HdMAVEYBPgzC/WqK/6Kq/H0zOoJ4PQVAEjooiC8eYmz80FuISnCUz6d9UfiUmeKCBR03uAkDcATjsXuRmRV5A6cKyDXQ+DeGIp6LSq9j4EWZb5iZVWDfhgBIYvcmJTTegc1c34QiMyNZgglPJybvpLUNAxdZX+O6nwekRgShZx+x69lFeGLdtWt7BnrXxwAcifYTh+zeSkq9YU0nR/Bc4K7rAidgPHZvo0hiKl2jPD6rKjVIjgKtJKovgmaGz8/4pHtcR7hhEUZTbkLoQyyflhlhJwy+ajLAzF6KyK9H2PChlwyF0eQirRpiNxEKppuzhtwUExC8fTo75bMve62ueoOJHWVb7Y6otmBA8nsUf+s7k5Z+Th1ZihEUftu5aa2T/DbHe9xtChhVDYXxQgdgNsUXLnK1Uw12Sk0PA4yGXu/X1vfFBgEeINjkqLXFlJ2ix9to6/oWwYaKeuthODX4TqPRmxi5XgjaF879sI0DWNVlKgEgx4+UpvgOhm8LjYhBa+5JLslzWq2tekkY8aLVFBk9ewPAxOkjZvhO90XDGkO9OYPWVmsqjKQSDL0eywD0GojlA0Ihpyho8GUYVaa50DUXM1MgTobmbc/PAzcD8K+Tj7vGJ8PJHaItrqmTSkwFvO89o9J1Xomh+sOhjfhYT9jm272VUu5A5jhb1MAIYnmIDROumqPEN54rAEArQ8q2/p8sDPzpAIkTxtMdDvmsmfGOj/I5MhZdoWYYNLMRrZrv0/JCByyVQ3RNbjDzpth1XRgw8v9FOVkj6IBX307e0EtublX1InKkk4xze44AULeJ8j6Gvj+5kdz5Gbnbonnh6I3XGs/T9wJgSMtOexrNQN3xU0IgdCWT2zDJaWm7/ppcgHWjALiuBQNab014lgdArR2fMLpqQhIVWB83Q+RG3eSh3hS6M/OxhLsmAPRU1QMAg3Ke3o0WEwVW1AWoViNt+TtVdcMyAPRU1dOAkgFdXwtmcKHNTuYBbgSAVQAASlC0HkNlrvx5BEDk05bQS1IzmynYhvlLNjanwj117vpQIwqQzNRvZUeqH062VsT/cKcoA5DFqq698fNuOlnlAdxL7g0INDZGH0iUbHOFKpCul+uFqL9gQEKY6o18vh6vVfV5Ky4nn8Rgr2nRC+v3avxGA8qdDZAegYAiE/tn+nlkhZue3Cj7MzOqS7eiS2tMnfwOAwJxtlu5JSElmnifqWE4YA6NSm956OBGwp2bs4xA7r0XwBAErKUJ/B3VblZvSRxzIwQD8inTpBh+FJVcilN3X5kno8g/YFLzK9CR4V0GFEwYURvjAQLahWr53maKDlJUNPNS75LxoTK693y3r550Acr2KjlOlRPgN5+sDQFJp8xasCT/RA4r3xPSj+iCLgCVNoyAKJ/JqbToHuk69/ZOQxb9OGgbPgxAAUT+JpewuTb8RQ+I00ZDMNz99j+6aHnfNABV2EQn8F1+R5uV3j45aYx1RdNbKHJ9LwDqB6TwBRhkgvwuq7H6v7gwPbvK5l2iFyUiBs3ec1AAZh/+EO4/A/AQTuE+93BmwH2i/xCe/egZ8B9wyvOISD9bxgAAAABJRU5ErkJggg==');
  }
  .header-nav .social a.mail{
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADw0lEQVR4Xu2b63XTQBCFZyoAKoAOiCsgVECoAFIBoQKSCiAVEFeQUAGkAkIFJBUQKhjOZ0Y+a3klra21bD32X07W8t47d54rq4x86cjxy0TApICRMzC5QEwAZvZCRJ4PTBwPqnpfxrRUgJkdicgnETkZGPAynBsR+ViQsSDAzAD9VUSeDhx8Ae9RRE5V9UZd7j9HBD4kYQYBVyLybiSWL8OcQ8CfkvX/isiXgRJyJiJPAmz3EGAlsJeqysbBLTPDsB9CYDECblX1eHDo/wf7c890S3hjI2At3sUIeFTVZwNVANmOeqdWAfzzLTlySCR4uv+9VglGgiB75qr6fmAERNN9zAUK3DNVvRsCCV7mI/+1VUfAnarO+k6AmVHeA54GbyMC2Hylqqd9JsHMrusavDoFFLh7S4KZ0eDVxrIUAnqphBTwAEslgL0/PD3SSh7scp9H9knVbLQX8A+/jKBkokKNcJDZwaM94GMB75cbsbEXuPBuEIvHSIAXhgnk1YNZZoav4/OxBXgUQZPH1Gu5Ygq4UNVzlxIg31Q89GCCY4O/fyMQqupjajO0IKAAHftQQAiu8JqH70MKbqTv5fo+OEsjlkoFhIDMDPnQG4TDhGIL4IkLuExny8+Ev8fmmAx1Tspn2koBgRIILJBQFRfOVPWyCwbMjEBWNbXC3wG/NgJvRUBARN0Mkf8xct6JS7jkP9cUN7VNXBYCIMIjLhaIuQRxAZdYs0AbdXg7i+RX+nl/JpJHgbWZKRsBTgIHwSViN0hZ40KDvz+45Btrk6wEOAkEIEh4VWHd1nHBzMjby6xU+p5bB5/kctkJCOLC2rQ1OOhWcSHB3zeeXu+MgMS4kFwvNOT3JH+PKXKnBARxgXpg63ohIb8fb9uL7JyAIC7U9RH4M/Jd8Vu3Ov5edSmzqOfbpNhOCEisF0iRxI0icpNRAB4dW+Ua0nZKgKsBUBQubRaFVZa7ys4JcBLq+og6YqL1fBsm90JAEBewYuo1/Nwru6T8nkrK3ggoNVQEQd5IKWcKLE5RdZ67jA6+P+lydKWHTmV3032e7oqgd99FO713BWxKUu79EwGJ7wd04gK5rZvyvEkBkwLSXpGZXCAci6f4Vl/2pMaAjQcNPSIg+poc5WZYlfF3lubjwIhhfMf1WXiP8DC9KuvjZvry2BTnwIyY9Tj0Hkfh6/IML8dCwrLVDn8wQWOC71fdBmelf48P47aYcf3i4ib6myF3i6rx1B7P3uqr6TirfzLT6tE9/vD0q7EeGy/L0ScFZKGxxw8ZvQL+Ae7gYuxjwI8aAAAAAElFTkSuQmCC');
  }
  .header-nav .social a {
      border-radius: 50%;
      display: -moz-inline-stack;
      display: inline-block;
      vertical-align: middle;
      zoom: 1;
      text-indent: -9999px;
      margin: 0 8px 15px;
      opacity: .7;
      width: 28px;
      height: 28px;
      transition: .3s;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
  }
  .card{
    background: url(~/static/img/timg.jpeg);
    background-size: cover;
    height: 100%;
  }  .card .filters, .card .bio{
    position: absolute; top: 0; bottom: 0; left: 0; right: 0;
  }
  .card .filters{
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    -o-filter: blur(5px);
    filter: blur(5px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4,MakeShadow=false);
    background: inherit;
    z-index: 3;
    margin: 0 -5px;
  }
  .bio{
    padding: 40px 0 0;
    z-index: 4;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid #324157;
    }
    p{
      font-size: 24px;
      color: #fff;
      margin-top: 10px;
    }
    .list p{
      font-size: 16px;
      color: #fff;
      margin-top: 10px;
      margin-bottom: -5px;
      margin-left: 8px;
    }
  }
</style>
