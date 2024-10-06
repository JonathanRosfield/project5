<script setup>
import MainCardSingle from './MainCardSingle.vue';




</script>

<template>
<!-- Header -->
<div class="text-center bg-blue-600 text-white py-4">
    <h1 class="text-4xl font-bold">Contact List</h1>
</div>

<div class="grid grid-cols-3 gap-5 p-6 bg-gray-300 min-h-screen">
    <MainCardSingle v-for = "card in 12" :key="card"> </MainCardSingle>
</div>


</template>