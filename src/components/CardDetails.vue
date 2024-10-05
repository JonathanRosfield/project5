<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()


const username = route.params.id; 
const fullname = route.params.fullname; 
const job_title = route.params.job_title; 
const bio = route.params.bio; 
const phone = route.params.phone;
</script>

<template>
  <div class="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto"> 
    <h2 class="text-3xl font-semibold text-gray-800">{{ name }}</h2> 
    <p class="text-lg text-gray-600 font-bold">Username:</p> 
    <p class="text-lg text-gray-800">{{ username }}</p> 
    
    <p class="text-lg text-gray-600 font-bold">Job Title:</p> 
    <p class="text-lg text-gray-800">{{ job_title }}</p> 
    
    <p class="text-lg text-gray-600 font-bold">Bio:</p> 
    <p class="text-lg text-gray-800">{{ bio }}</p> 
    
    <p class="text-lg text-gray-600 font-bold">Phone:</p> 
    <p class="text-lg text-gray-800">{{ phone }}</p> 
  </div>
</template>
