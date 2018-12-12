import Vue from 'vue'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Landing },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  export const router = new VueRouter({
    routes // short for `routes: routes`
  })