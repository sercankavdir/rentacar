import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

import Landing from './components/Landing.vue'
import CarInfo from './components/CarInfo.vue'
import CarList from './components/CarList.vue'
import AddCar from './components/AddCar.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



const routes = [
    { path: '/', component: Landing },
    { path: '/carList', component: CarList, name:'CarList' },
    { path: '/carInfo', component: CarInfo, name:'CarInfo', props: true},
    { path: '/addCar', component: AddCar, name:'AddCar', props: true},
  ]

 const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
