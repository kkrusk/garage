import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DisplayGarage from '../views/DisplayGarage.vue'
import InsertGarage from '../views/InsertGarage.vue'
/* eslint-disable */

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/garage/insert',
    name: 'insert',
    component: InsertGarage
  },
  {
    path: '/garage',
    name: 'garage',
    component: DisplayGarage
  }
]

const router = new VueRouter({
  routes
})

export default router
