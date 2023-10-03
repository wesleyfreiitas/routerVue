import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Cadastro from '../views/Cadastro.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
  // ,
  // {
  //   path: '/wesley',
  //   name: 'wesley',
  //   component: Cadastro
  // }
  ,
  {
    path: '/wesley/:id',
    name: 'wesley_id',
    component: Cadastro
  }
  ,
  {
    path: '/wesley/:id',
    name: 'wesley_id',
    component: Cadastro,
    children:[
      {
        path:"lima",
        name: "Lima",
        component: About
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
