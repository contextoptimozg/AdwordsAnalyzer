import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from "../views/SignIn";
import Settings from "../views/Settings";
import Statistic from "../views/Statistic";
import NotFound from "../views/NotFound";
Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: Statistic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
