<script setup lang="ts">
import Card from './Card.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg">
        <Card>
          <h2 class="font-bold text-2xl">For Developers</h2>
          <p class="mt-2 mb-4">Browse our Vue jobs and start your career today</p>
          <RouterLink
            to="/jobs"
            class="inline-block bg-black hover:bg-gray-700 px-4 py-2 rounded-lg text-white"
          >
            Browse Jobs
          </RouterLink>
        </Card>
        <Card bg="bg-green-100">
          <h2 class="font-bold text-2xl">For Employers</h2>
          <p class="mt-2 mb-4">List your job to find the perfect developer for the role</p>
          <RouterLink
            to="/jobs/add"
            class="inline-block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
          >
            Add Job
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
