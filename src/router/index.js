import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import MyPolls from '../views/MyPolls.vue'
import userLogin from '../components/userLogin.vue'
import UserLogout from '../components/UserLogout.vue'
import UserSignup from '../components/UserSignup.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  { 
    path: '/mypolls',
    name: 'mypolls',
    component: MyPolls
  },
  {
    path: '/login',
    name: 'userLogin',
    component : userLogin
  },
  {
    path: '/logout',
    name: 'UserLogout',
    component : UserLogout
  },
  {
    path: '/register',
    name: 'register',
    component : UserSignup
  },
  {
    path: '/userprofile',
    name: 'user',
    component : UserProfile
  },
]

const router = new VueRouter({
  routes
})

export default router
