<template>
    <div class="Login_bg" :style = "{width: fullWidth + 'px',height: fullHeight + 'px' }">
      <div class="loginCont">
        <div class="loginCont-main">
            <div class="loginImg">
              <img src="../../static/images/logo01.png" />
            </div>
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
              <yd-checkbox class="Agree AgreeLogin" shape="circle" color="#cfa670" size="18" v-model="checkbox" >我已阅读并同意<a>《用户协议》</a></yd-checkbox>
            </div>
            <div class="NextStep nofixed">
              <button @click="NextStep">登录</button>
            </div>
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
      errorCode:'NoError',
      fullHeight:  document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth
    }
  },
  mounted(){
    
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
        this.$store.commit('increment',"2")
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginCont{
  width: 92%;
  position: absolute;
  left: 4%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border-radius: .1rem;
  padding: 1.2rem .45rem .45rem .45rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}
.loginImg{
  position: absolute;
  top: -1.3rem;
  left: 50%;
  transform: translateX(-50%);
  width:2.6rem;
  height: 2.6rem;
  padding: .4rem;
  background-color: #fff;
  border-radius: 50%;
}
.loginImg img{
  width: 100%;
  height: 100%;
}
.AgreeLogin .yd-checkbox-text{
  color: #bbb;
  font-size: .24rem;
}
</style>
