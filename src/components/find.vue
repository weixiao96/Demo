<template>
  <div class="footer-pb">
    <yd-navbar title="发现"></yd-navbar>
    <div class="find-Ul">
      <li class="find-Li">
        <div class="find-img">
          <img src="./../../static/images/findImg.png" />
        </div>
        <div class="findText">
          线下活动
        </div>
      </li>
      <li class="find-Li">
        <div class="find-img">
          <img src="./../../static/images/findImg01.png" />
        </div>
        <div class="findText">
          海归专区
        </div>
      </li>
      <li class="find-Li">
        <div class="find-img">
          <img src="./../../static/images/findImg02.png" />
        </div>
        <div class="findText">
          海外专区
        </div>
      </li>
      <li class="find-Li">
        <div class="find-img">
          <img src="./../../static/images/findImg03.png" />
        </div>
        <div class="findText">
          高颜值专区
        </div>
      </li>
      <li class="find-Li">
        <div class="find-img">
          <img src="./../../static/images/findImg04.png" />
        </div>
        <div class="findText">
          高个子专区
        </div>
      </li>
      <li class="find-Li">
        <div class="find-img">
          <img src="./../../static/images/findImg05.png" />
        </div>
        <div class="findText">
          高颜值专区
        </div>
      </li>
    </div>
    <!-- 底部导航 -->
    <yd-tabbar :fixed="true" border-color='#E4E4E4'>
        <yd-tabbar-item title="首页" link="/index" >
            <img slot="icon" style="height: 20px;" src="./../../static/images/footer-iconf1-0.png">
        </yd-tabbar-item>
        <yd-tabbar-item title="发现" link="#" active>
            <img slot="icon" style="height: 20px;" src="./../../static/images/footer-iconf2-1.png">
        </yd-tabbar-item>
        <yd-tabbar-item title="动态" link="#">
           <img slot="icon" style="height: 20px;" src="./../../static/images/footer-iconf3-0.png">
        </yd-tabbar-item>
        <yd-tabbar-item title="消息" link="#">
            <img slot="icon" style="height: 20px;" src="./../../static/images/footer-iconf4-0.png">
            <yd-badge slot="badge" type="danger">2</yd-badge>
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="#">
           <img slot="icon" style="height: 20px;" src="./../../static/images/footer-iconf5-0.png">
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>
<script>
export default {
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
.find-Ul{
  padding: 0 .3rem;
}
.find-Ul li{
  position: relative;
  margin-top: .3rem;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 3.3rem;
}
.find-img{
  width: 100%;
  height: 3.3rem;
}
.find-img img{
  width: 100%;
}
.find-Ul .findText{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
  color: #fff;
  background:rgba(0, 0, 0, 0.5);
}
</style>
