<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { RouterLink } from 'vue-router'

import jobsData from '@/jobs.json'
import JobListing from './JobListing.vue'

defineProps({
  limit: Number,
  showButton: { type: Boolean, default: false },
})

const jobs = ref(jobsData.jobs)
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="mb-6 font-bold text-3xl text-center text-green-500">Browse Jobs</h2>
      <div class="gap-6 grid grid-cols-1 md:grid-cols-3">
        <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto my-10 px-6 max-w-lg">
    <RouterLink
      to="/jobs"
      class="block bg-black hover:bg-gray-700 px-6 py-4 rounded-xl text-center text-white"
      >View All Jobs</RouterLink
    >
  </section>
</template>
