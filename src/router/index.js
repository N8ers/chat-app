import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Chat from '../views/Chat.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
