import { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const HomeView = defineComponent({
  setup() {
    return () => '<div>Home</div>'
  }
})


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
