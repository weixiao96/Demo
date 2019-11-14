<template>
    <div>
      <yd-navbar title="注册" border-color='#E4E4E4'>
          <router-link to="#" slot="left">
              <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
      </yd-navbar>
      <div class="Headframe-box">
        <div class="Headframe">
          <div class="Headframeimg" @click="">
            <input type="file" name="image" accept="image/*" @change='onchangeImgFun' class="header-upload-btn">
            <img :src="imgStr" />
          </div>
          <img src="./../../static/images/camera.png"  class="camera"/>
        </div>
      </div>
      <div class="infoContent">
        <ul class="infoUl">
          <li class="infoLi pd-right">
            <span class="info-name">
              昵称
            </span>
            <div class="info-input NoAfter">
              <input type="text" v-model="formBbj.name" placeholder="请输入姓名" />
            </div>
          </li>
          <li class="infoLi pd-left pd-right">
            <span class="info-name width">
              性别
            </span>
            <div class="info-input NoAfter">
              <div class="radio-tip">（性别选择后将无法修改）</div>
              <yd-radio-group class="radio" v-model="formBbj.sex" color="#cdb181">
                  <yd-radio val="男"></yd-radio>
                  <yd-radio val="女"></yd-radio>
              </yd-radio-group>
            </div>
          </li>
          <li class="infoLi">
            <span class="info-name">
              生日
            </span>
            <div class="info-input">
              <yd-datetime type="date" v-model="formBbj.Birthday" slot="right"></yd-datetime>
            </div>
          </li>
          <li class="infoLi">
            <span class="info-name">
              居住地
            </span>
            <div class="info-input">
              <input
              slot="right"
              type="text"
              @click.stop="show = true"
              v-model="formBbj.home"
              readonly
              placeholder="请选择地址">
            </div>
          </li>
          <li class="infoLi pd-right">
            <span class="info-name">
              学校
            </span>
            <div class="info-input NoAfter">
              <input type="text" v-model="formBbj.school" placeholder="请输入学校" />
            </div>
          </li>
          <li class="infoLi">
            <span class="info-name">
              交友目的
            </span>
            <div class="info-input">
              <yd-button class="ChooseFriends" @click.native="ChooseFriends = true">{{formBbj.objective}}</yd-button>
            </div>
          </li>
        </ul>
        <div class="NextStep">
          <button @click="NextStep">下一步</button>
        </div>
      </div>
      <!-- 地址  -->
      <yd-cityselect v-model="show" :callback="result" :items="district"></yd-cityselect>
      <!-- 交友目的 -->
      <yd-popup v-model="ChooseFriends" position="bottom" height="30%">
        <li class="modalLi" @click="modalLi">找结婚对象</li>
        <li class="modalLi" @click="modalLi">找恋爱对象</li>
        <li class="modalLi" @click="modalLi">知心朋友</li>
        <li class="modalLi" @click="modalLi">找恋爱对象</li>
        <li class="modalLi" @click="modalLi">知心朋友</li>
      </yd-popup>
    </div>

</template>
<script>
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
  data () {
    return {
      datetime: '',
      show: false,
      model: '',
      district: District,
      ChooseFriends:false,
      imgStr:'./../../static/images/Pic.png',
      formBbj:{
        name:'',
        sex:'女',
        Birthday:'2000-05-11',
        home:'山东',
        school:'',
        objective:'请选择交友目的'
      }
    }
  },
  computed: {
    
	},
  created: function() {//实例创建完

  },
  methods: {
    result(ret) {
        this.formBbj.home = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
    },
    modalLi(a){
      this.ChooseFriends = false;
      this.formBbj.objective = a.currentTarget.innerHTML
    },
    NextStep(a){
      console.log(this.formBbj)
      if (this.formBbj.name=='') {
        this.$dialog.toast({
            mes: '昵称不能为空！',
            icon: 'error',
            timeout: 1000
        });
      }else if (this.formBbj.objective =='请选择交友目的' ) {
        this.$dialog.toast({
            mes: '请选择交友目的!',
            icon: 'error',
            timeout: 1000
        });
      }else{
        this.$router.push({
            path: '/register2',
            name: 'register2'
        })
      }
    },
    onchangeImgFun (e) {
      let state = this.common.ImgFun(e)
      let FilesImg = this.common.data.FilesImg
      this.imgStr = window.URL.createObjectURL(FilesImg)
      if (state == 'false') {
          this.$dialog.toast({
      				mes: '图片大小超出范围',
      				icon: 'error',
      				timeout: 1000
      		});
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
