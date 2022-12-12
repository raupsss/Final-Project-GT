import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add()

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
