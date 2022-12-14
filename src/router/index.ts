import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/home.vue')
  },
  {
    path: '/demo1',
    name: 'Fusionx1',
    component: () => import('@/views/Others/demo1/demo.vue')
  },
  {
    path: '/demo2',
    name: 'Fusionx2',
    component: () => import('@/views/Others/demo2/demo.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
