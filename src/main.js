import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// library.add(faTwitter)


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
