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
  <div>
    <h1>{{ fullname }}</h1>
    <p>Username: {{ username }}</p>
    <p>Job Title: {{ job_title }}</p>
    <p>Bio: {{ bio }}</p>
    <p>Phone: {{ phone }}</p>
  </div>
</template>
