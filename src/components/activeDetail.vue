<template>
  <div>
    <div class="activeDetailBg">
      <img src="../../static/images/activeDetailImg.png" />
    </div>
    <div class="activeMain">
      <h1 class="activeTitle">
       ColleqeFair2018北美名校嘉年华社交
      </h1>
      <div class="ProgressBarBox">
        <div class="ProgressBarMin">
          <div class="ProgressBar"  :style="{width:ProgressRatio+'%'}"></div>
        </div>
        <div class="ProgressBarImg" :style="{left:ProgressRatio+'%'}">
          <img src="../../static/images/ProgressBarImg.png" />
        </div>
      </div>
      <div class="ProgressBarText">
        <div class="left TotalNumber">
          报名限额：{{TotalNumber}}人
        </div>
        <div class="right Enrolment">
          已报人员：<span>{{EnrolmentNumber}}人</span>
        </div>
      </div>
      <ul class="activeDetailsUl">
        <li class="activeDetailsLi">
          <label class="activeDetailsLilabel">
            <i><img src="../../static/images/activeDetailIconf.png" /></i>
            活动时间
          </label>
          <div class="ActiveLiMain">
            2018/07/15 (09:00-17:30）
          </div>
        </li>
        <li class="activeDetailsLi">
          <label class="activeDetailsLilabel">
            <i><img src="../../static/images/activeDetailIconf01.png" /></i>
            活动地点
          </label>
          <div class="ActiveLiMain">
            天辰东路7号
          </div>
        </li>
        <li class="activeDetailsLi">
          <label class="activeDetailsLilabel">
            <i><img src="../../static/images/activeDetailIconf02.png" /></i>
            非会员价
          </label>
          <div class="ActiveLiMain">
           <span class="ActiveLiMainColor">￥100</span>
          </div>
        </li>
        <li class="activeDetailsLi">
          <label class="activeDetailsLilabel">
            <i><img src="../../static/images/activeDetailIconf03.png" /></i>
            会员价
          </label>
          <div class="ActiveLiMain">
            <span class="ActiveLiMainColor">￥80</span>
          </div>
        </li>
        <li class="activeDetailsLi">
          <label class="activeDetailsLilabel">
            <i><img src="../../static/images/activeDetailIconf04.png" /></i>
            已报人员
          </label>
          <div class="ActiveLiMain">
            <span class="HeadPortraits" v-for="(value,index) in HeadPortraitList" :key="index">
              <img :src="value" />
            </span>
             <yd-button  class="HeadPortraitsMask" @click.native="openHeadPortraits = true" size="large" type="hollow">
               <img src="../../static/images/arrow.png" />
             </yd-button>
          </div>
        </li>
        <li class="activeDetailsLi  height">
          <label class="activeDetailsLilabel">
            <i><img src="../../static/images/activeDetailIconf05.png" /></i>
            活动详情
          </label>
          <div class="ActiveDetails">
            <div class="ActiveDetailsText">
              <h1 class="ActiveDetailsTextTitle">7月15日</h1>
              <p class="ActiveDetailsTextP">yi年一度最值得去的北美名校展就要来了！</p>
              <p class="ActiveDetailsTextP">北京，上海，成都，广州</p>
              <p class="ActiveDetailsTextP">的同学们有福了！</p>
              <p class="ActiveDetailsTextP">上百家 TOP100 的北美知名大学的院校代表和学姐学长们将与你面对面交流。</p>
            </div>
            <img class="ActiveDetailsImg" src="../../static/images/ActiveDetailsImg.png" />
            <div class="ActiveDetailsText">
              <h1 class="ActiveDetailsTextTitle">7月15日</h1>
              <p class="ActiveDetailsTextP">yi年一度最值得去的北美名校展就要来了！</p>
              <p class="ActiveDetailsTextP">北京，上海，成都，广州</p>
              <p class="ActiveDetailsTextP">的同学们有福了！</p>
              <p class="ActiveDetailsTextP">上百家 TOP100 的北美知名大学的院校代表和学姐学长们将与你面对面交流。</p>
            </div>
            <div class="ActiveDetailsInfo">
                <h1 class="ActiveDetailsInfoH1">
                  <img src="../../static/images/placeImg.png" />
                </h1>
                <p class="ActiveDetailsInfoP">时间：2018年7月22日 13:00~17:3</p>
                <p class="ActiveDetailsInfoP">地点：上海国际会议中心</p>
                <div class="code">
                  <img src="../../static/images/code.png" />
                </div>
                <p class="codeP">长按二维码免费报名</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <button class="Submission">
      立即报名
    </button>
    <!--  -->
    <yd-popup v-model="openHeadPortraits" position="center">
        <yd-button type="danger" style="margin: 30px;" @click.native="show4 = false">Close Right Popup</yd-button>
    </yd-popup>
  </div>
</template>
<script>
  export default {
    components:{
    },
    data () {
      return {
        openHeadPortraits:false,
        HeadPortraitList:[
        '../../static/images/RegistrationHead.png',
        '../../static/images/RegistrationHead01.png',
        '../../static/images/RegistrationHead02.png',
        '../../static/images/RegistrationHead03.png'],
        params:this.$route,
        TotalNumber:Number(1000),
        EnrolmentNumber:Number(300),
        ProgressRatio:''
      }
    },
    created: function() {//在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图

    },
    mounted(){//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
      var _this = this
      // css 过渡
      setTimeout(function(){
        _this.ProgressRatio = (_this.EnrolmentNumber / _this.TotalNumber)*100
      },100)


    },
    methods: {

    }
  }
</script>
<style>

</style>
