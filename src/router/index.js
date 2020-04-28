import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../components/FirstComponent.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('../views/Delivery.vue')
  },
  {
    path: '/fb',
    name: 'FacebookLogin',
    component: () => import('../components/FBLogin.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
