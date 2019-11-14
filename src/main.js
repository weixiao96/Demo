// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
// YDUI
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css';
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
import ImgFun from './../static/js/common.js'
Vue.prototype.$http = Axios
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(YDUI);
Vue.prototype.common = ImgFun
// Axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';//配置请求头
// Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';//配置请求头
// Axios.defaults.withCredentials = true;
// // Axios.defaults.baseURL = process.env.API_ADDRESS;////配置接口地址
// Axios.interceptors.request.use((request) => {
//   //判断是否序列化
//   if (request.headers['Content-Type'] != 'application/json;charset=UTF-8') {
//     request.data = Qs.stringify(request.data,{ arrayFormat: 'repeat' })
//
//   }
//   return request
// })
Vue.use(VueAxios, Axios)
var Vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
