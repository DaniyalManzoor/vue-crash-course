<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="flex flex-col justify-center items-center h-96 text-center">
    <i class="mb-5 text-7xl text-yellow-500 pi pi-exclamation-triangle"></i>
    <h1 class="mb-4 font-bold text-6xl">404 Not Found</h1>
    <p class="mb-5 text-xl">This page does not exist</p>
    <RouterLink to="/" class="bg-green-700 hover:bg-green-900 mt-4 px-3 py-2 rounded-md text-white"
      >Go Back</RouterLink
    >
  </section>
</template>
