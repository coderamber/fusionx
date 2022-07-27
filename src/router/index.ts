import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/home.vue')
  },
  {
    path: '/fusionx1',
    name: 'Fusionx1',
    component: () => import('@/views/Others/demo1/demo.vue')
  },
  {
    path: '/fusionx2',
    name: 'Fusionx2',
    component: () => import('@/views/Others/demo2/demo.vue')
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router