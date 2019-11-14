<template>
  <div class="footer-pb">
    <div class="TabCont">
      <!-- 筛选 -->
      <div class="screenBox">
        <div class="DisplayCondition" :class="{active:isActive}">
          <span class="ConditionSub" @click="ConditionSub(a=1)">自定义标准 </span>
          <div class="screenLi">
            <span>{{age}}</span> ·
            <span>{{age}}岁 - {{age2}}岁</span> ·
            <span>{{height}} - {{height2}}</span> ·
            <span>{{income}}w - {{income2}}w</span>
          </div>
        </div>
        <div class="screenList" :class="{active:isActive1}">
          <div class="ConditionSub01">
            <span class="ConditionSub" @click="ConditionSub(a=2)">自定义标准 </span>
          </div>
          <div class="conditionBox">
              <li class="conditionInput">
                  <label>年龄</label>
                  <div class="conditionInputBox">
                    <input type="text" class="W10" v-model='age' />
                    <span>岁</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>至</span>
                    <input type="text" class="W10" v-model='age2' /><span>岁</span>
                  </div>
              </li>
              <li class="conditionInput">
                  <label>身高</label>
                  <div class="conditionInputBox">
                    <input type="text" class="W10" v-model='height' />
                     <span>cm</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>至</span>
                    <input type="text" class="W10" v-model='height2' /> <span>cm</span>
                  </div>
              </li>
              <li class="conditionInput">
                  <label>体重</label>
                  <div class="conditionInputBox">
                    <input type="text" class="W10" v-model='weight' />
                     <span>kg</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>至</span>
                    <input type="text" class="W10" v-model='weight' /> <span>kg</span>
                  </div>
              </li>
              <li class="conditionInput">
                  <label>收入</label>
                  <div class="conditionInputBox">
                    <input type="text" class="W10" v-model='income' />
                     <span>w</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>至</span>
                    <input type="text" class="W10" v-model='income2' /> <span>w</span>
                  </div>
              </li>
              <li class="conditionInput">
                  <label>星座</label>
                  <div class="conditionInputBox">
                    <input type="text" class="W10" v-model='constellation' />
                  </div>
              </li>
              <div class="conditionBut">
                <button  @click="cancel" class="cancel">取消</button>
                <button  @click="confirm" class="confirm">确认</button>
              </div>
          </div>
        </div>
      </div>
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
      region:'',
      age:'24',
      age2:'30',
      height:'175',
      height2:'780',
      weight:'60',
      weight2:'80',
      income:'20',
      income2:'30',
      constellation:'不限',
      isActive:true,
      isActive1:false

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
    },
    ConditionSub:function(a){
      if (a == 1) {
        this.isActive = false
        this.isActive1 = true
      }else{
        this.isActive = true
        this.isActive1 = false
        this.age = '24'
        this.age2 = '30'
        this.height = '175'
        this.height2 = '780'
        this.weight = '60'
        this.weight2 = '80'
        this.income = '20'
        this.income2 = '30'
        this.constellation = '不限'
      }
    },
    confirm:function(a){
      this.isActive = true
      this.isActive1 = false

    },
    cancel:function(a){
      this.isActive = true
      this.isActive1 = false
      this.age = '24'
      this.age2 = '30'
      this.height = '175'
      this.height2 = '780'
      this.weight = '60'
      this.weight2 = '80'
      this.income = '20'
      this.income2 = '30'
      this.constellation = '不限'
    }
  }
}
</script>
<style scoped>
body{
  /* background-color: #f8f8f8; */
}

</style>
