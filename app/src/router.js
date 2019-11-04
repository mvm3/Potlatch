import Vue from 'vue'
import Router from 'vue-router'

// import App from './App.vue'

import Login from './components/pages/Login.vue'
import Home from './components/pages/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
      , name: 'Home'
      , component: Home
    }
    , {
      path: '/login'
      , name: 'Login'
      , component: Login
    }    
  ]
})