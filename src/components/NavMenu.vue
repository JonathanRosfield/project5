<template>
  <nav class="bg-slate-900 h-21 items-center text-white flex justify-center space-x-8 px-6 shadow-lg">
    
    <RouterLink :to="{name: 'Home'}" class="hover:text-blue-400 text-xl transition duration-300">Home</RouterLink>
    <RouterLink :to="{name: 'Other'}" class="hover:text-blue-400 text-xl transition duration-300">Other</RouterLink>
    <RouterLink :to="{name: 'SettingsPage'}" class="hover:text-blue-400 text-xl transition duration-300">Settings</RouterLink>

    
    <div v-if="isAuthenticated" class="ml-auto flex items-center space-x-4">
      <span class="text-sm font-light">Welcome, <span class="font-semibold">{{ user.email }}</span></span>
      <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 text-red-100 hover:bg-red-700 transition duration-300 ease-in-out">
        LOGOUT
      </button>
    </div>

    
    <div v-else class="ml-auto">
      <RouterLink :to="{name: 'LoginPage'}" class="hover:text-blue-400 text-xl transition duration-300">Login</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from '../composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()
</script>
