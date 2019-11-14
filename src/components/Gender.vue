<template>
    <div class="Login_bg" :style = "{width: fullWidth + 'px',height: fullHeight + 'px' }">
      <div class="GenderConter">
        <h1 class="GenderTitle">你是？</h1>
        <div class="Gender" @click="Choice(0)">
          <div class="GenderIconf">
            <span><img src="../../static/images/GenderIcon.png" /></span>
          </div>
          <p class="">男</p>
        </div>
        <div class="Gender" @click="Choice(1)">
          <div class="GenderIconf">
            <span><img src="../../static/images/GenderIcon1.png" /></span>
          </div>
          <p class="">女</p>
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
  created: function() {//在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
    
  },
  mounted(){//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

  },
  methods: {
    Choice:function(a){
      if (a==0) {
        this.$router.push({
            path: '/index',
            name: 'index',
            params: {
                sex: a
            }
        })
      }else {
        this.$router.push({
            path: '/index',
            name: 'index',
            params: {
                sex: a
            }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
