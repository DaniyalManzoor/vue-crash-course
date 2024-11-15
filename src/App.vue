<script setup lang="ts">
import Navbar from './components/Navbar.vue'

//like outlet in react router
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  <RouterView />
</template>
