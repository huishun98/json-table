import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Url from '../views/Url.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:queryUrl(.*)',
    name: 'Url',
    component: Url,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
