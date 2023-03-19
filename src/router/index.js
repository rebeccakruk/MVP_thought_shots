import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import MyPolls from '../views/MyPolls.vue'
import PollsPageView from '../views/PollsPageView.vue'
import userLogin from '../components/userLogin.vue'
import AddQuestions from '../components/AddQuestions.vue'
import UserLogout from '../components/UserLogout.vue'
import UserSignup from '../components/UserSignup.vue'
import UserProfile from '../components/UserProfile.vue'
import UserEdit from '../components/UserEdit.vue'

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
    path: '/addquestions',
    name: 'addquestions',
    component: AddQuestions
  },
  { 
    path: '/pollsView',
    name: 'polls',
    component: PollsPageView
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
  {
    path: '/editprofile',
    name: 'edit',
    component : UserEdit
  },
]

const router = new VueRouter({
  routes
})

export default router
