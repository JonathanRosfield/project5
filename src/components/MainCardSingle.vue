<script setup>
import { faker } from '@faker-js/faker';

const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
const fullname = faker.person.fullName({ firstName: firstname, lastName: lastname });
const job_title = faker.person.jobTitle();
const username = faker.internet.userName({ firstName: firstname, lastName: lastname }).toLowerCase();
const phone = faker.phone.imei();
const avatar = faker.image.avatar(); 
const bio = "Click here to see more information about this contact"; 
</script>

<template>
  <RouterLink :to="{ name: 'CardDetails', params: { id: username, fullname, job_title, bio, phone } }">
    <div class="border border-gray-400 rounded-xl shadow-lg bg-white hover:scale-105 h-full">
      <img :src="avatar" class="rounded-t-xl w-full h-64 object-cover" />
      <div class="p-6">
        <p class="mb-2 text-2xl font-bold text-blue-600">{{ fullname }}</p>
        <p class="mb-2 font-semibold text-gray-700">{{ job_title }}</p>
        <p class="mb-2 font-normal text-gray-500">{{ bio }}</p>
      </div>
    </div>
  </RouterLink>
</template>
