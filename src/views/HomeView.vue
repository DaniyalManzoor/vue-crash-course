<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListenings from '@/components/JobListenings.vue'
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListenings :limit="3" :showButton="true" />
</template>
