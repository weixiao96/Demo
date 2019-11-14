<template>
  <div class="footer-pb">
    <yd-tab horizontal-scroll class="Tab" :callback="itemClick">
        <yd-tab-panel label="推荐">
          <div class="TabCont">
            <div class="ListUl">
              <li class="ListLi" v-for="item in list">
                <div class="infoImg">
                  <img :src="item.img" />
                  <div class="infoShow">
                      <p class="infoShow-p">{{item.info}} | {{item.info1}}</p>
                      <p class="infoShow-p">{{item.age}}岁 | {{item.height}}cm | {{item.constellation}}座 | {{item.income}}w</p>
                  </div>
                </div>
                <div class="infoText">
                    <router-link to="/Details">
                      <p class="Country"><span>{{item.Country }}</span> <img :src="item.images" /><img :src="item.images1" /></p>
                      <p class="introduce">{{item.introduce}}</p>
                      <p class="Motto">{{item.Motto}}</p>
                    </router-link>
                    <div class="commentBox">
                      <div class="comment" @click="spot(item.id)"><span><img :src="item.img1" /></span>60</div>
                      <div class="comment"><span><img src="./../../static/images/icon-comment.png" /></span></div>
                    </div>
                </div>
              </li>
            </div>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="筛选">
          <tabScreen></tabScreen>
        </yd-tab-panel>
        <yd-tab-panel label="附近">
          <tabNearby></tabNearby>
        </yd-tab-panel>
    </yd-tab>
    <!-- 底部导航 -->
    <yd-tabbar :fixed="true" border-color='#E4E4E4' v-if='LoginState != 0'>
        <yd-tabbar-item title="首页" link="#" active>
            <img slot="icon" style="height: 20px;" src="./../../static/images/footer-iconf1-1.png">
        </yd-tabbar-item>
        <yd-tabbar-item title="发现" link="/find">
            <img slot="icon" style="height: 20px;" src="./../../static/images/footer-iconf2-0.png">
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
    <!-- 提示 -->
    <yd-popup v-model="MidalShow" position="center" width="80%">
        <div style="background-color:#fff;">
            <div class="modalTitle">提示</div>
            <div class="modalCont">
              <p>
                海归之心是一个真实的高品质交友平台,
                需要确保每一个人都是经过认证
              </p>
            </div>
            <div class="modalfooter">
                <yd-button class="modalButton" @click.native="MidalShow = false">取消</yd-button>
                <yd-button class="modalButton" @click.native="Authentication">{{ButText}}</yd-button>
            </div>
        </div>
    </yd-popup>
  </div>
</template>
<script>
import tabScreen from './subordinate/tab_screen'
import tabNearby from './subordinate/tab_nearby'
export default {
  components:{
    tabScreen,
    tabNearby
  },
  data () {
    return {
      sex:'',
      LoginState:this.$store.state.LoginState,
      ButText:'去注册',
      list:[],
      MidalShow:''
    }
  },
  created: function() {//在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
    this.sex = this.$route.params.sex
    if(this.sex==0){
      this.sex = '男'
    }else{
      this.sex = '女'
    }
    if(this.$store.state.LoginState=="0"){
      this.MidalShow=true
      this.ButText ='去注册'
    }else if(this.$store.state.LoginState=="1"){
      this.MidalShow=true
      this.ButText ='去认证'
    }else{
    this.MidalShow=false
    }
    console.log('性别：'+this.sex);
    this.List()
  },
  mounted(){//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  },
  methods: {
    spot:function(id){
      var index = id - 1;
      if(this.$store.state.LoginState=="2"){
        for (var i = 0; i < this.list.length; i++) {
          if (index == i) {
            console.log(this.list[i].img1);
            if (this.list[i].img1 == './../../static/images/icon-xin.png') {
              this.list[i].img1 = './../../static/images/icon-xinA.png'
              this.$dialog.toast({
                  mes: '关注成功',
                  timeout: 500,
                  icon: 'success'
              });
            }else{
              this.list[i].img1 = './../../static/images/icon-xin.png'
              this.$dialog.toast({
                  mes: '取消关注',
                  timeout: 500,
                  icon: 'success'
              });
            }
          }
        }
      }else {
        this.MidalShow=true
      }
    },
    Authentication:function(){
      if(this.$store.state.LoginState=="0"){
        this.$store.commit('increment',"1")
        this.ButText ='去认证'
        this.$router.push({
            path: '/register',
            name: 'register',
            params: {
            }
        })
      }else if(this.$store.state.LoginState=="1"){
        this.$store.commit('increment',"2")
        this.MidalShow=false
        this.$router.push({
            path: '/Authentication',
            name: 'Authentication'
        })

      }
    },
    List:function(){
      this.axios.get('static/json/content.json',).then(res => {
        var obj = eval('(' + res.data + ')');
        this.list = obj.List
      })
    },
    itemClick:function(a){
      if(this.$store.state.LoginState=="0"){
        this.MidalShow=true
        this.ButText ='去注册'
      }else if(this.$store.state.LoginState=="1"){
        this.MidalShow=true
        this.ButText ='去认证'
      }else{
      this.MidalShow=false
      }
    }
  }
}
</script>
<style scoped>
body{
  /* background-color: #f8f8f8; */
}


</style>
