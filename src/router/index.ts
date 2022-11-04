import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const title = import.meta.env.VITE_TITLE

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/author/:author',
      name: 'author',
      component: () => import('../views/AuthorView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  document.title =
    to.name === 'author' ? `${to.params.author} | ${title}` : title

  return true
})

export default router
