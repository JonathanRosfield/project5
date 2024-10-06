import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import CardDetails from './components/CardDetails.vue'
import LoginPage from './components/LoginPage.vue'
import SettingsPage from './components/SettingsPage.vue'

import { useAuth } from './composables/useAuth'
const {isAuthenticated} = useAuth()

const routes = [
  { path: '/project5/', name: 'Home', component: HomePage },
  { path: '/project5/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/project5/employees/:id/:fullname/:job_title/:bio/:phone', name: 'CardDetails', component: CardDetails },
  { path: '/project5/login', name: 'LoginPage', component: LoginPage },
  { path: '/project5/settings', name: 'SettingsPage', component: SettingsPage, meta: {requiresAuth: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query: {redirect: to.fullPath}})
  } else {
    next()
  }
}) 

export default router
