<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev',
  },
  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs',
  },
})
</script>

<template>
  <section class="bg-green-700 mb-4 py-20">
    <div class="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="text-center">
        <h1 class="font-extrabold text-4xl text-white sm:text-5xl md:text-6xl">{{ title }}</h1>
        <p class="my-4 text-white text-xl">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>
