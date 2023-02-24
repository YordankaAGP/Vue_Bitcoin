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
      path: '/bitcoin-rp',
      name: 'bitcoin-rp',
      component: () => import('../views/BitcoinToRp.vue')
    },
    {
      path: '/rp-bitcoin',
      name: 'rp-bitcoin',
      component: () => import('../views/RpToBitcoin.vue')
    }
  ]
})

export default router
