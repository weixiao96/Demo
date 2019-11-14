<template>
    <div class="Login_bg" :style = "{width: fullWidth + 'px',height: fullHeight + 'px' }">
      <div class="Logo">
        <img src="../../static/images/Logo.png" />
      </div>
      <div class="Title_p">全球海归真实交友平台</div>
      <div class="Button-Box">
        <div class="Button-top">
          <router-link  :to="{path:'/login2'}" >
            <button class="Login">登录</button>
          </router-link>
          <router-link  :to="{path:'/register'}" >
            <button class="register">注册</button>
          </router-link>
          <router-link  :to="{path:'/Gender'}" >
            <button class="look">去逛逛</button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      fullHeight:  document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth
    }
  },
  mounted(){
    console.log(this.fullHeight,this.fullWidth);
  },
  created: function() {//实例创建完

  },
  methods: {
    // axios.get('/user?ID=123456').then(function(){
    //
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
