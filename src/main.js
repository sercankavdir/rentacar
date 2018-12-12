import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

import Landing from './components/Landing.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import CarInfo from './components/CarInfo.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Landing },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/carInfo', component: CarInfo, name:'CarInfo', props: true}
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
 const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
