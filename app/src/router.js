import Vue from 'vue'
import Router from 'vue-router'

// import App from './App.vue'

import Login from './components/pages/Login.vue'
import Home from './components/pages/Home.vue'
import ProjectDetails from './components/pages/ProjectDetails.vue'
import Perfil from './components/pages/Perfil.vue'
import Descubra from './components/pages/Descubra.vue'
import Buscador from './components/pages/Buscador.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: ProjectDetails
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/buscador',
      name: 'Buscador',
      component: Buscador
    },
    {
      path: '/descubra',
      name: 'Descubra',
      component: Descubra
    }       
  ]
})