import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    LoginIn(state){
      state.isLogin = true;
    }
  },
  actions: {
    LoginIn(content){
      content.commit('LoginIn')
    }
  },
  modules: {
  }
})
