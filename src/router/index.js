import { createRouter, createWebHistory } from 'vue-router'
import Kalendar from '../Kalendar/StranaApp.vue'
import Home from '../HlavnaStranka/HlavnaStranka.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kalendar',
    name: 'kalendar',
    component: Kalendar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
