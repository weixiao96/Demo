<template>
  <div class="hello">
    <router-link  :to="{path:'/'}" ><h1 class="Tips_h1">去首頁</h1></router-link>
    <ul class="newList">
        <li  v-for="item in items" >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="TextCont">
            <h1>{{item.title}}</h1>
            <div class="TextCont_text">
              {{item.content}}
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          img:'../../static/images/logo.png',
          title:'今天年假有一年',
          content:'真好，今年年假有一年，真好，今年年假有一年，真好，今年年假有一年真好'
        },
        {
          img:'../../static/images/logo.png',
          title:'减肥成功啦',
          content:'这个月减肥成功减下十斤，太棒了！这个月减肥成功减下十斤，太棒了！这个月减肥成功减下十斤，太棒了！'
        },
        {
          img:'../../static/images/logo.png',
          title:'今天有肉吃',
          content:'今天实在是太幸福了，有肉吃，真好！'
        },
        {
          img:'../../static/images/logo.png',
          title:'放假了',
          content:'3月十号开始放假至4月一号'
        }
      ]
    }
  },
  mounted(){
    this.List()
  },
  created: function() {//实例创建完

  },
  methods: {
    List(){
      console.log(5555)
      this.$http.get('url', {
       params:{
         // 参数：参数值
       }
     }).then(res => {

       console.log(res);//答应请求成功后后端返回给你的数据
       this.items = res.data // 假设请求成功后 赋值给你定义好的空数组 或者别的

     })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Tips_h1{
  height: .6rem;
  line-height: .6rem;
  text-align: center;
  font-size: .24rem;
  color: #f00
}
.newList{
  position: relative;
  margin: 0 .3rem
}
.newList li {
    position: relative;
    height: 2rem;
    padding: .2rem 0;
    padding-left: 1.8rem;
    border-bottom: 1px solid #ddd;
}
.img {
    height: 1.6rem;
    width: 1.6rem;
    position: absolute;
    left: 0;
    top: .15rem;
}
.img img{
  width:100%;
  height:100%;
  border-radius: 5px;
  overflow: hidden;
}
.TextCont{
  height: 1.6rem;
}
.TextCont h1{
  height: .4rem;
  line-height: .4rem;
  font-size: .26rem
}
.TextCont_text{
  height: 1.2rem;
  line-height: .4rem;
  overflow: hidden;

}
</style>
