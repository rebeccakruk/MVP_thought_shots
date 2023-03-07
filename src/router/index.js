import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import userLogin from '../components/userLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView.vue
  },
  {
    path: '/login',
    name: 'userLogin',
    component : userLogin
  },
]

const router = new VueRouter({
  routes
})

export default router
