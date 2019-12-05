import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '745288766308-qj69ueokmpap95s1itb0undjshu9jl52.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/adwords',
  prompt: 'select_account'
};
Vue.use(GAuth, gauthOption);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
