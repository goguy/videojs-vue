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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/videoJs',
    name: 'VideoJs',
    component: () => import('../views/VideoJs.vue')
  },
  {
    path: '/videoJsOptions',
    name: 'VideoJsOptions',
    component: () => import('../views/VideoJsOptions.vue')
  },
  {
    path: '/videoJsList',
    name: 'VideoJsList',
    component: () => import('../views/VideoJsList.vue')
  },
  {
    path: '/videoJsDesignList',
    name: 'VideoJsDesignList',
    component: () => import('../views/VideoJsDesignList.vue')
  },
  {
    path: '/videoJsListBasic',
    name: 'VideoJsListBasic',
    component: () => import('../views/VideoJsListBasic.vue')
  },
  {
    path: '/videoJsListBasicDesign',
    name: 'VideoJsListBasicDesign',
    component: () => import('../views/VideoJsListBasicDesign.vue')
  },
  {
    path: '/videoJsFade',
    name: 'VideoJsFade',
    component: () => import('../views/VideoJsFade.vue')
  },
  {
    path: '/workListEx',
    name: 'WorkListEx',
    component: () => import('../views/WorkListEx.vue')
  },
  {
    path: '/workTime',
    name: 'WorkTime',
    component: () => import('../views/WorkTime.vue')
  },
  {
    path: '/webApp',
    name: 'WebApp',
    component: () => import('../views/WebApp.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
