<template>
    <div>
      <yd-navbar title="注册" border-color='#E4E4E4'>
          <router-link to="#" slot="left">
              <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
      </yd-navbar>
      <div class="infoContent">
        <ul class="infoUl">
          <li class="infoLi pd-right">
            <span class="info-iconf">
             <img src="./../../static/images/shoujihao.png" />
            </span>
            <div class="info-input NoAfter">
              <yd-input slot="right" v-model="iPhone" ref="input"  required regex="mobile" :on-blur="blur" placeholder="请输入手机号码"></yd-input>
              <!-- <input class="tl" type="text" v-model="iPhone" placeholder="请输入手机号" /> -->
            </div>
          </li>
          <li class="infoLi pd-right1 ">
            <span class="info-iconf">
              <img src="./../../static/images/yanzhengma.png" />
            </span>
            <div class="info-input NoAfter">
              <input class="tl" type="text" v-model="code" placeholder="请输入验证码" />
              <!-- <button>获取验证码</button> -->
              <yd-sendcode
              class="code"
              v-model="start"
              @click.native="SendOut"
              second="60"
              init-str="获取验证码"
              run-str="{%s}重新获取"
              reset-str="获取验证码"
              size="large"
              type="primary"
            ></yd-sendcode>
            </div>
          </li>
        </ul>
        <div class="AgreeBox">
          <yd-checkbox class="Agree" shape="circle" color="#cfa670" v-model="checkbox" >我已阅读并同意<a>《用户协议》</a></yd-checkbox>
        </div>
        <div class="NextStep">
          <button @click="NextStep">注册</button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      checkbox:false,
      iPhone:'',
      code:'',
      start: false,
      errorCode:'NoError'
    }
  },
  computed: {
	},
  created: function() {//实例创建完

  },
  methods: {

    blur:function(a){
      this.errorCode = this.$refs.input.errorCode
    },
    NextStep(a){
      console.log(this.iPhone,this.code);
      if (this.errorCode=='NoError'|| this.errorCode == "NOT_NULL") {
        this.$dialog.toast({
            mes: '手机号不能为空',
            icon: 'error',
            timeout: 1000
        });
      }else if (this.errorCode == "NOT_MIN_SIZE") {
        this.$dialog.toast({
            mes: '输入字符位数不足',
            icon: 'error',
            timeout: 1000
        });
      }else if (this.errorCode == "NOT_REGEX_RULE") {
        this.$dialog.toast({
            mes: '不符合规则',
            icon: 'error',
            timeout: 1000
        });
      }else if (this.code == '') {
        this.$dialog.toast({
            mes: '验证码不能为空',
            icon: 'error',
            timeout: 1000
        });
      }else if (this.checkbox == false) {
        this.$dialog.toast({
            mes: '请勾选同意规则',
            icon: 'error',
            timeout: 1000
        });
      }else{
        this.$store.commit('increment',"1")
        this.$router.push({
            path: '/',
            name: 'index'
        })
      }
    },
    SendOut() {
      if(this.errorCode == 'NoError' || this.errorCode == "NOT_REGEX_RULE" || this.errorCode == "NOT_MIN_SIZE" || this.errorCode == "NOT_NULL"){
        this.$dialog.toast({
            mes: '请输入正确的手机号',
            icon: 'error',
            timeout: 1000
        });
      }else{
         this.start=true
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
