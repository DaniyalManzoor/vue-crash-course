<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class="m-auto px-6 py-6 container">
      <RouterLink to="/jobs" class="flex items-center text-green-500 hover:text-green-600">
        <i class="pi-arrow-circle-left mr-2 pi"></i>Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
