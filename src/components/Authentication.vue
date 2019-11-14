<template>
    <div>
      <yd-navbar title="实名认证" border-color='#E4E4E4'>
          <router-link to="#" slot="left">
              <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
      </yd-navbar>
      <div class="infoContent">
        <ul class="infoUl">
          <li class="infoLi pd-right">
            <span class="info-name">
             真实姓名
            </span>
            <div class="info-input NoAfter">
              <input type="text" v-model="formVal.name" placeholder="请输入您的真实姓名" />
            </div>
          </li>
          <li class="infoLi pd-right">
            <span class="info-name">
             认证类型
            </span>
            <div class="info-input NoAfter arrow ">
              <select v-model="formVal.selected">
                <option disabled value="">请选择</option>
                <option>身份证</option>
                <option>港澳台</option>
                <option>护照</option>
              </select>
            </div>
          </li>
          <li class="infoLi pd-right">
            <div class="info-input NoAfter">
              <input type="text" v-model="formVal.number" placeholder="请输入证件号码" />
            </div>
          </li>
        </ul>
        <div class="NextStep">
          <button @click="NextStep">提交</button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      formVal:{
        name:'',
        selected:'',
        number:''
      }

    }
  },
  computed: {
	},
  created: function() {//实例创建完

  },
  methods: {
    NextStep:function(){
      console.log(this.formVal.name,this.formVal.number);
      if (this.formVal.name=='') {
        this.$dialog.toast({
            mes: '昵称不能为空！',
            icon: 'error',
            timeout: 1000
        });
      }else if (this.formVal.number =='' ) {
        this.$dialog.toast({
            mes: '请填写证件信息!',
            icon: 'error',
            timeout: 1000
        });
      }else{
        this.$router.push({
            path: '/index',
            name: 'index'
        })
        this.$store.commit('increment',"2")
      }
    }
  }
}
</script>
<style scoped>
body{
  background-color: #fff;
}
.modalLi{
  font-size: .28rem;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
}
</style>
