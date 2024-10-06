<template>
  <!-- Username input -->
  <form class="max-w-md mx-auto mt-20 p-8 border border-gray-300 rounded-lg shadow-lg bg-white" @submit.prevent>
    <div class="mb-6">
      <label for="username" class="block mb-2 text-lg font-bold text-gray-700">Username</label>
      <input 
        id="username" 
        v-model="username" 
        type="text" 
        placeholder="Enter your username" 
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    
    <!-- Password Input -->
    <div class="mb-6">
      <label for="password" class="block mb-2 text-lg font-bold text-gray-700">Password</label>
      <input 
        id="password" 
        v-model="password" 
        type="password" 
        placeholder="Enter your password" 
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    <!-- Login Button -->
    <button 
      @click="logUserIn" 
      class="w-full bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
    >
      LOGIN
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const { login, logout } = useAuth()
const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'SettingsPage' })
    }
  } else {
    logout()
  }
}
</script>
