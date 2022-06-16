import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/reticula',
      name: 'reticula',
      component: () => import('../views/ReticulaView.vue')
    },
    {
      path: '/tipografia',
      name: 'tipografia',
      component: () => import('../views/TipografiaView.vue')
    },
    {
      path: '/iconografia',
      name: 'iconografia',
      component: () => import('../views/IconografiaView.vue')
    },
    {
      path: '/color',
      name: 'color',
      component: () => import('../views/ColorView.vue')
    },
    {
      path: '/botones',
      name: 'botones',
      component: () => import('../views/BotonesView.vue')
    },
    {
      path: '/hipervinculos',
      name: 'hipervinculos',
      component: () => import('../views/HipervinculosView.vue')
    },
    {
      path: '/listas',
      name: 'listas',
      component: () => import('../views/ListasView.vue')
    }
  ]
})

export default router
