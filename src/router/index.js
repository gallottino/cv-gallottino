import { createRouter, createWebHistory } from 'vue-router'
import CV from '../components/CV.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CV
    },
  ]
})

export default router
