import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    LoginState: 0
  },
  mutations: {
    increment (state,value) {
      console.log(state,value)
      state.LoginState = value
    }
  },
})
