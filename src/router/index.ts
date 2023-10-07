import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/MainView.vue'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/EditView.vue'),
  },
]




export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
