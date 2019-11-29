<template>
  <div>
    <div class="DetaisBox" v-if="show">
      <div class="like">
        <img src="../../static/images/like.png" />
        {{LikeNumber}}
      </div>
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
                  <img src="./../../static/images/HeadPortrait.png" />
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
          <yd-accordion class="info-yd-accordion">
            <yd-accordion-item title="学历">
              <div slot="icon" class="info-yd-accordion-icon"><span><img src="./../../static/images/info-Iconf02.png" /></span></div>
              <div slot="txt" class="targetBut" style=";">已认证</div>
              <div class="OpenConten">
                <p>国内/北京大学</p>
                <p>国外/University of Virginia</p>
              </div>
            </yd-accordion-item>
            <yd-accordion-item title="房">
              <div slot="icon" class="info-yd-accordion-icon"><span><img src="./../../static/images/info-Iconf03.png" /></span></div>
              <div slot="txt" class="targetBut" style=";">1套</div>
              <div class="OpenConten">
                <p>上海/2套</p>
              </div>
            </yd-accordion-item>
            <yd-accordion-item title="车">
              <div slot="icon" class="info-yd-accordion-icon"><span><img src="./../../static/images/info-Iconf04.png" /></span></div>
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
        <span @click="show = !show" class="contactIconf">
          <img src="./../../static/images/DetailsIconf1.png" />
          <img src="" />
        </span>
        <span class="contactIconf" @click="Fabulous">
          <!-- <img :src="FabulousImg" /> -->
          <img :src="FabulousImg" />
        </span>
        <span class="contactIconf fr">
          <yd-button size="large" type="danger" @click.native="show2 = true"><img src="./../../static/images/DetailsIconf2.png" /></yd-button>
        </span>
      </div>
    </div>
    <!-- 聊天界面 -->
    <transition name="slide-fade" @before-enter="beforeEnter">
      <div v-if="!show" class="chatBox" :style="{height: fullHeight + 'px'}">
        <!-- 按钮 关闭 -->
        <div class="Close" @click="show = !show">
          <img src="../../static/images/Close.png" />
        </div>
        <div ref="HeadpPortraitBg" class="HeadpPortraitBg">
          <div class="CharHeadpPortrait">
            <img src="../../static/images/DetailsBg.png" />
          </div>
          <div class="CharInfo">
            <!--  -->
            <div class='HeadPortrait'>
              <img src="../../static/images/DetailsBg.png" />
            </div>
            <p class="CharName">Miro Badev</p>
            <p class="region">mirobadev@gmail.com</p>
          </div>
        </div>
        <div class="charInterface" id="data-list-content" :style="{height:charInterfaceH + 'px'}">
          <div v-for="(obj,index) in Message">
            <div v-if="obj.sign=='ni'" class="reply">
              <div class="time">{{obj.time}}</div>
              <div class="msg">
                <img src="../../static/images/DetailsBg.png" alt="">
                <p>
                  {{obj.content}}
                </p>
              </div>
            </div>
            <div v-else class="ask">
              <div class="time">{{obj.time}}</div>
              <div class="msg">
                <img src="../../static/images/DetailsBg.png" alt="">
                <p>
                   {{obj.content}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref="SendOut" class="SendOutBox">
          <span class="charPhoto">
            <img src="../../static/images/char_Photo.png" />
          </span>
          <input type="text" placeholder="你想说什么" v-model="SendOutContent" class="SendOut_input" @keyup.enter="SendOut_but"/>
          <button @click="SendOut_but" class="SendOut_but">发送</button>
        </div>
      </div>
    </transition>
    <!-- 右侧弹出 -->
    <yd-popup class="operationBox" v-model="show2" position="bottom">
        <ul class="operation">
          <li>
             举报
          </li>
          <li>
             拉黑
          </li>
          <li>
             取消
          </li>
        </ul>
    </yd-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show2: false,
        show: true,
        fullHeight:'',
        infoHeight: '',
        charInterfaceH: '',
        LikeNumber:'1059',
        state:false,
        FabulousImg:require('@/../static/images/DetailsIconf.png'),
        list: [{
            id: '1',
            src: './../../static/images/img.png',
            original: './../../static/images/img.png'
          },
          {
            id: '2',
            src: './../../static/images/img.png',
            original: './../../static/images/img.png'
          },
          {
            id: '3',
            src: './../../static/images/img.png',
            original: './../../static/images/img.png'
          }
        ],
        Message:[
          {
            id:1,
            sign:'ni',
            content:'你好',
            time:'2019-11-22 9:54:36',
          },
          {
            id:2,
            sign:'wo',
            content:'你好ya',
            time:'2019-11-22 10:34:36',
          }
        ],
        SendOutContent:''
      }
    },
    created: function() { //在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图

    },
    mounted() { //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

    },
    methods: {
      beforeEnter: function(el) {
        let _this = this
        this.fullHeight = _this.common.data.fullHeight
        setTimeout(function() {
          _this.infoHeight = _this.$refs.HeadpPortraitBg.offsetHeight; //聊天界面高度
          _this.SendOutHeight = _this.$refs.SendOut.offsetHeight; //发送操作高度
          _this.charInterfaceH = _this.fullHeight - _this.infoHeight - _this.SendOutHeight
        }, 100);
      },
      SendOut_but:function(){
        // 获取聊天界面的id
        var div = document.getElementById('data-list-content')
        div.scrollTop = div.scrollHeight
        if(this.SendOutContent == ''){
          this.$dialog.toast({
              mes: '请输入内容',
              icon: 'error',
              timeout: 1000
          });
        }else{
          let data = {
            sign:'wo',
            content:this.SendOutContent,
            time:this.common.getNowFormatDate()
          }
          this.Message.push(data)
          this.SendOutContent = ''
        }
        //$nextTick方法 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 。
        // 始终让滚动条保持在底部
        this.$nextTick(() => {
          var div = document.getElementById('data-list-content')
          div.scrollTop = div.scrollHeight
        })
      },
      Fabulous:function(){
        if(this.state){
          this.LikeNumber = Number(this.LikeNumber) - 1
          this.FabulousImg = require('@/../static/images/DetailsIconf.png')
          this.state = false
          this.$dialog.toast({
              mes: '取消成功',
              icon: 'success',
              timeout: 1000
          });
        }else{
          this.LikeNumber = Number(this.LikeNumber) + 1
          this.FabulousImg = require('@/../static/images/detailsIconfActive.png')
          this.state = true
          this.$dialog.toast({
              mes: '关注成功',
              icon: 'success',
              timeout: 1000
          });
        }
      }
    }
  }
</script>
<style scoped>

</style>
