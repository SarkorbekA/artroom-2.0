import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inspirations/:id',
      name: 'inspirations',
      component: () => import('../views/Inspirations.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Product.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/search-by-images',
      name: 'search-by-images',
      component: () => import('../views/SearchByImages.vue')
    }
  ]
})

export default router
