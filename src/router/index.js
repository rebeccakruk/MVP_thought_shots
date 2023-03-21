import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
// import PageNotFound from '@/views/PageNotFound.vue'
import MyPolls from '../views/MyPolls.vue'
import OwnerPoll from '../views/OwnerPoll.vue'
import PollsPageView from '../views/PollsPageView.vue'
import UserLogin from '../components/UserLogin.vue'
import AddQuestions from '../components/AddQuestions.vue'
import UserLogout from '../components/UserLogout.vue'
import UserSignup from '../components/UserSignup.vue'
import UserProfile from '../components/UserProfile.vue'
import EditPoll from '../components/EditPoll.vue'
import UserEdit from '../components/UserEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  // {
  //   path: '/:catchAll(.*)*',
  //   name: 'pagenotfound',
  //   component: PageNotFound
  // },
  { 
    path: '/mypolls',
    name: 'mypolls',
    component: MyPolls
  },
  { 
    path: '/ownerpoll',
    name: 'ownerpoll',
    component: OwnerPoll
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
    component : UserLogin
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
  {
    path: '/editpoll',
    name: 'editpoll',
    component : EditPoll
  },
]

const router = new VueRouter({
  routes
})

export default router
