<template>
  <div>
    <yd-tab horizontal-scroll class="Tab" :callback="itemClick">
        <yd-tab-panel label="近期活动">
          <ul class="ActiveUl">
            <li class="ActiveLi" v-for="(value,index) in List" :key='index' @click="ActiveDetails">
                <div class="ActiveLiImg">
                   <img :src="value.img" />
                </div>
                <div class="ActiveTextBox">
                  <div class="ActiveText">
                    <p>
                      <span class="activityIconf">
                        <img src="../../static/images/activityIconf.png" />
                      </span>
                        {{value.time}}
                    </p>
                    <p>
                      <span class="activityIconf">
                        <img src="../../static/images/activityIconf01.png" />
                      </span>
                        {{value.address}}
                    </p>
                  </div>
                  <div class="ActivePrice">
                      <label>￥</label>100<span> 起</span>
                  </div>

              </div>
            </li>
          </ul>
        </yd-tab-panel>
        <yd-tab-panel label="往期活动">
          <ul class="ActivityHistoryUl">
            <li class="ActivityHistoryli" v-for="(value,index) in List01" :key='index'>
              <div class="ActivityHistoryImg">
                <img :src="value.img" />
              </div>
              <div class="ActivityHistoryText">
                {{value.title}}
              </div>
            </li>
          </ul>
        </yd-tab-panel>
    </yd-tab></div>
</template>
<script>
export default {
  components:{
  },
  data () {
    return {
      List:[
        {
          img:'../../static/images/activityImg.png',
          time:'2018-07-07(周日)',
          address:'上海市徐汇区海泉路149号',
        },{
          img:'../../static/images/activityImg01.png',
          time:'2018-07-07(周日)',
          address:'上海市徐汇区海泉路149号',
        },{
          img:'../../static/images/activityImg.png',
          time:'2018-07-07(周日)',
          address:'上海市徐汇区海泉路149号',
        },{
          img:'../../static/images/activityImg01.png',
          time:'2018-07-07(周日)',
          address:'上海市徐汇区海泉路149号',
        }
      ],
      List01:[{
          img:'../../static/images/activityImg02.png',
          title:'海洋科技 —— 爱情连连看',
        },{
          img:'../../static/images/activityImg03.png',
          title:'海洋科技 —— 爱情连连看',
        },{
          img:'../../static/images/activityImg04.png',
          title:'海洋科技 —— 爱情连连看',
        }
      ],

    }
  },
  created: function() {//在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图

  },
  mounted(){//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  },
  methods: {
      itemClick:function(a){
        console.log(a)
      },
      ActiveDetails:function(){
        this.$router.push({
            path: '/activeDetail',
            name: 'activeDetail',
            params: {
              id:"999"
            }
            })
      }
    }
}
</script>
<style scoped>
body{
  /* background-color: #f8f8f8; */
}
</style>
