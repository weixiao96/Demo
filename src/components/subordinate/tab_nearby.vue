<template>
  <div class="footer-pb">
    <div class="TabCont">
      <!-- 筛选 -->
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
              <p class="Country"><span>{{item.Country }}</span> <img :src="item.images" /><img :src="item.images1" /></p>
              <p class="introduce">{{item.introduce}}</p>
              <p class="Motto">{{item.Motto}}</p>
              <div class="commentBox">
                <div class="comment"  @click="spot(item.id)"><span><img :src="item.img1" /></span>60</div>
                <div class="comment"><span><img src="./../../../static/images/icon-comment.png" /></span></div>
              </div>
              <div class="Location">
                <span class="LocationIcinf">
                  <img src="../../../static/images/Location.png" />
                </span>
                {{item.distance}}kg
              </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[],
      distance:'2.3'
    }
  },
  created: function() {//在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
    this.List()
  },
  mounted(){//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

  },
  methods: {
    spot:function(id){
      var index = id - 1;
      console.log(this.$store.state.LoginState);
      if(this.$store.state.LoginState=="2"){
        for (var i = 0; i < this.list.length; i++) {
          if (index == i) {
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
    List:function(){
      this.axios.get('static/json/content.json',).then(res => {
        var obj = eval('(' + res.data + ')');
        this.list = obj.List
      })
    }
  }
}
</script>
<style scoped>
body{
  /* background-color: #f8f8f8; */
}
.Location{
  position: absolute;
  right: .3rem;
  bottom: .26rem;
  color: #cfa670
}
.LocationIcinf{
  display: inline-block;
  width: .24rem;
  height: .31rem;
  vertical-align: middle;
}
.LocationIcinf img{
  width: 100%;
  height: 100%;
  margin-top: -3px
}
</style>
