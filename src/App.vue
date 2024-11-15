<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import HomeCards from './components/HomeCards.vue'
import JobListenings from './components/JobListenings.vue'
</script>

<template>
  <Navbar />
  <Hero />
  <HomeCards />
  <JobListenings :limit="3" :showButton="true" />
</template>
