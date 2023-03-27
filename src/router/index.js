import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import NewPoll from '../views/NewPoll.vue'
import OwnerPoll from '@/views/OwnerPoll.vue'
import PollsPageView from '../views/PollsPageView.vue'
import SelectedPoll from '../views/SelectedPoll.vue'
import UserLogin from '../components/UserLogin.vue'
import AddQuestions from '../components/AddQuestions.vue'
import UserPage from '../views/UserPage.vue'
import UserLogout from '../components/UserLogout.vue'
import UserSignup from '../components/UserSignup.vue'
import EditPoll from '../views/EditPoll.vue'
import UserEdit from '../components/UserEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: UserPage
  },
  { 
    path: '/newpoll',
    name: 'newpoll',
    component: NewPoll
  },
  { 
    path: '/ownerpoll/',
    name: 'ownerpoll',
    component: OwnerPoll
  },
  { 
    path: '/selectedpoll/:pollId/',
    name: 'selectedpoll',
    component: SelectedPoll,
    props: true
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
    path: '/editprofile',
    name: 'edit',
    component : UserEdit
  },
  {
    path: '/editpoll/:pollId/',
    name: 'editpoll',
    component : EditPoll,
    props: true
  },
  {
    path: '/:catchAll(.*)*',
    name: 'pagenotfound',
    component: PageNotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
