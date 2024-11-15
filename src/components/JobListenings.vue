<script setup lang="ts">
import { ref, defineProps, onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
//@ts-ignore
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import axios from '@/utils/axios'
import type { Job } from '@/utils/type'

import JobListing from './JobListing.vue'

defineProps({
  limit: Number,
  showButton: { type: Boolean, default: false },
})

const state = reactive({
  jobs: [] as Job[],
  isLoading: true,
  isError: false,
})

onMounted(async () => {
  try {
    const { data } = await axios.get<Job[]>('jobs')
    state.jobs = data
  } catch (error) {
    console.error('error-fetching-jobs-listings', error)
    state.isError = true
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="mb-6 font-bold text-3xl text-center text-green-500">Browse Jobs</h2>
      <!-- show error -->
      <div v-if="state.isError" class="py-6 text-center text-gray-500">
        <h4 class="font-bold text-3xl">Something went wrongs</h4>
        <h6 class="text-1xl">Jobs fetching error</h6>
      </div>
      <!-- loading component-->
      <div v-else-if="state.isLoading" class="py-6 text-center text-gray-500">
        <PulseLoader />
      </div>
      <!-- data rendering -->
      <div v-else class="gap-6 grid grid-cols-1 md:grid-cols-3">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
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
