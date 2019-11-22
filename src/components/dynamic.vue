<template>
  <div class="footer-pb">
    <yd-tab horizontal-scroll class="Tab" :callback="itemClick">
        <yd-tab-panel label="近期活动">
近期活动
        </yd-tab-panel>
        <yd-tab-panel label="往期活动">
往期活动
        </yd-tab-panel>
    </yd-tab></div>
</template>
<script>
export default {
  components:{
  },
  data () {
    return {

    }
  },
  created: function() {//在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图

  },
  mounted(){//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  },
  methods: {

    }
}
</script>
<style scoped>
body{
  /* background-color: #f8f8f8; */
}


</style>
