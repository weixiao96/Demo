<template>
  <div>
    <div class="DetaisBox" :class="{active:Active}" :style="{display:state}">
      <div class="infoBg">
       <img src="./../../static/images/DetailsBg.png" />
      </div>
      <div class="infoText">
          <router-link to="/Details">
            <p class="Country"><span>candice</span> <img src="./../../static/images/ListIcon.png" /><img src="./../../static/images/ListIcon1.png" /></p>
            <p class="introduce">上海 · 文化传媒 · 其他</p>
            <div class="Label">找恋爱对象</div>
          </router-link>
      </div>
      <div class="infoContent">
        <ul class="infoUl infoUl01">
          <li class="infoLi pd-right">
            <span class="info-name">
              TA的微信
            </span>
            <div class="info-input NoAfter">
              <img src="./../../static/images/erweima.png" />
            </div>
          </li>
          <li class="infoLi pd-right">
            <span class="info-name">
              参加的活动
            </span>
            <div class="info-input NoAfter">
              <input type="text" value="0次">
            </div>
          </li>
          <li class="infoLi pd-right">
            <span class="info-name">
              发布的朋友圈
            </span>
            <div class="info-input">

            </div>
          </li>
          <li class="">
            <dl class="news">
              <dt class="info">
                <div class="pic">
                  <img src="./../../static/images/HeadPortrait.png"  />
                </div>
                <div class="Nickname">
                  <p class="name">gougougogou</p>
                  <p class="time">07月26日</p>
                </div>
              </dt>
              <dd class="new-content">
                <div class="content-text">
                  <p>心是任何想法都能产生的源泉，这就包含了，对和错两个方面想法。心本体会陷入到对自己本体不能理解的状态中，因为心能产生任何想法，不能分出对错，不能分出自己。</p>
                </div>
                <div class="content-img">
                  <yd-lightbox :num="list.length">
                      <yd-lightbox-img v-for="item in list" :src="item.src" :original="item.original" v-bind:key="item.id"></yd-lightbox-img>
                      <yd-lightbox-txt>
                          <div slot="content">
                              <p>心是任何想法都能产生的源泉，这就包含了，对和错两个方面想法。心本体会陷入到对自己本体不能理解的状态中，因为心能产生任何想法，不能分出对错，不能分出自己。</p>
                          </div>
                      </yd-lightbox-txt>
                  </yd-lightbox>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="infoDetails">
        <div class="DividerBg"></div>
        <div class="infoTitle">
          <span>
            <img src="./../../static/images/infoTitle.png" />
          </span>
          验证条件
        </div>
        <div class="infoDetailsUl">
          <li class="infoDetailsLi">
            <div class="infoDetails-title">
              <span><img src="./../../static/images/info-Iconf.png" /></span>
              姓名
            </div>
            <div class="infoDetails-text">
              秦**
            </div>
          </li>
          <li class="infoDetailsLi">
            <div class="infoDetails-title">
              <span><img src="./../../static/images/info-Iconf01.png" /></span>
              身份认证
            </div>
            <div class="infoDetails-text">
              371324199*********
            </div>
          </li>
          <yd-accordion class="info-yd-accordion" >
              <yd-accordion-item title="学历">
                <div slot="icon"  class="info-yd-accordion-icon"><span><img src="./../../static/images/info-Iconf02.png" /></span></div>
                <div slot="txt" class="targetBut" style=";">已认证</div>
                  <div class="OpenConten">
                      <p>国内/北京大学</p>
                      <p>国外/University of Virginia</p>
                  </div>
              </yd-accordion-item>
              <yd-accordion-item title="房">
                <div slot="icon"  class="info-yd-accordion-icon"><span><img src="./../../static/images/info-Iconf03.png" /></span></div>
                <div slot="txt" class="targetBut" style=";">1套</div>
                  <div class="OpenConten">
                      <p>上海/2套</p>
                  </div>
              </yd-accordion-item>
              <yd-accordion-item title="车">
                <div slot="icon"  class="info-yd-accordion-icon"><span><img src="./../../static/images/info-Iconf04.png" /></span></div>
                <div slot="txt" class="targetBut" style=";">1辆</div>
                  <div class="OpenConten">
                      <p>上海/2辆</p>
                  </div>
              </yd-accordion-item>
          </yd-accordion>
        </div>
        <div class="DividerBg"></div>
        <div class="infoTitle">
          <span>
            <img src="./../../static/images/infoTitle01.png" />
          </span>
          想对Ta说的话
        </div>
        <div class="DetailsContent">
          <p>我不知道我未来的另一半会不会是现在的你，但是我想告诉你的是，无论多长时间，我想让你给我我想要的未来。</p>
        </div>
        <div class="DividerBg"></div>
        <div class="infoTitle">
          <span>
            <img src="./../../static/images/infoTitle02.png" />
          </span>
          基本资料
        </div>
        <div class="DetailsContent">
          <span class="LabelSpan">26岁</span>
          <span class="LabelSpan">186cm</span>
          <span class="LabelSpan">双鱼座</span>
          <span class="LabelSpan">年薪40w-60w岁</span>
          <span class="LabelSpan">单身</span>
          <span class="LabelSpan">上海浦东</span>
          <span class="LabelSpan">籍贯 江苏</span>
          <span class="LabelSpan">找恋爱对象</span>
        </div>
        <div class="DividerBg"></div>
        <div class="infoTitle">
          <span>
            <img src="./../../static/images/infoTitle03.png" />
          </span>
          择偶条件
        </div>
        <div class="DetailsContent">
          <span class="LabelSpan">26岁</span>
          <span class="LabelSpan">186cm</span>
          <span class="LabelSpan">双鱼座</span>
          <span class="LabelSpan">年薪40w-60w岁</span>
          <span class="LabelSpan">单身</span>
          <span class="LabelSpan">上海浦东</span>
          <span class="LabelSpan">籍贯 江苏</span>
          <span class="LabelSpan">找恋爱对象</span>
        </div>
        <div class="DividerBg"></div>
        <div class="infoTitle">
          <span>
            <img src="./../../static/images/infoTitle04.png" />
          </span>
          家庭情况
        </div>
        <div class="DetailsContent">
          <p style="text-align:center;">这个人很懒 什么都没有留下</p>
        </div>
      </div>
      <!-- 联系 漂浮 -->
      <div class="contact">
        <span @click="chat" class="contactIconf">
          <img src="./../../static/images/detailsIconf1.png" />
        </span>
        <span class="contactIconf">
          <img src="./../../static/images/detailsIconf.png" />
        </span>
        <span class="contactIconf fr">
          <img src="./../../static/images/detailsIconf2.png" />
        </span>
      </div>
    </div>
    <!-- 聊天界面 -->
    <div class="chatBox">
        111111111111111111
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Active:false,
      state:'block',
      list: [
        {id:'1',src: './../../static/images/img.png', original: './../../static/images/img.png'},
        {id:'2',src: './../../static/images/img.png', original: './../../static/images/img.png'},
        {id:'3',src: './../../static/images/img.png', original: './../../static/images/img.png'}
      ]
    }
  },
  created: function() {//在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图

  },
  mounted(){//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

  },
  methods: {
    chat:function(){
      var _this = this
      _this.Active = true,
      setTimeout(function(){
      console.log("5555")
      _this.state = 'none'
      },500)
    }
  }
}
</script>
<style scoped>
body{
  /*background-color: #f8f8f8;*/
}
.DetaisBox.active
{
  transition:opacity 0.5s;
 -moz-transition:opacity 0.5s; /* Firefox 4 */
 -webkit-transition:opacity 0.5s; /* Safari and Chrome */
 -o-transition:opacity 0.5s; /* Opera */
 opacity: 0;
 display: none;
}
.DetaisBox.active{

}
.DetailsContent{
  padding: .3rem;
  font-size: 0;
}
.DetailsContent p{
  line-height: .5rem;
  font-size: .26rem;
  color: #999999;
}
.LabelSpan{
  padding: 0 .2rem;
  min-width: 1rem;
  display:inline-block;
  font-size: .26rem;
  height: .54rem;
  line-height: .5rem;
  border:1px solid #c7c9cf;
  border-radius: .1rem;
  color: #999999;
  margin: .1rem;
}
.contact{
  position: fixed;
  left: 0;
  bottom: 0;
  height: .9rem;
  line-height: .9rem;
  background: #eef2f5;
  width: 100%;
  padding: 0 .3rem;
}
.contactIconf{
  display: inline-block;
  width: .42rem;
  height: .42rem;
  vertical-align: middle;
  font-size: 0;
  margin-right: .5rem;
}
.contactIconf img{
  width: 100%;
  height: 100%;
}
.contactIconf.fr{
  margin-top: .28rem;
  margin-right: 0;
}
</style>
