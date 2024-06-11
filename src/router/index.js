import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/GameView.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('@/views/ContactusView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue')
    },
    {
      path: '/heart',
      name: 'heart',
      component: () => import('@/views/HeartView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path:'/ProductPage/:productId',
      name:'ProductPage',
      component: () => import(/* webpackChunkName: "ProductPage" */ '@/views/ProductPage.vue')
    },
    {
      path:'/ActivityPage',
      name:'ActivityPage',
      component: () => import('@/views/ActivityPage.vue')
    },
    {
      path:'/UserLayout',
      name:'UserLayout',
      component:() => import('@/components/UserLayout.vue')
    }
  ]
})

export default router
