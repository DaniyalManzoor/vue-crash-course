<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRoute, RouterLink, useRouter } from 'vue-router'
//@ts-ignore
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import axios from '@/utils/axios'
import type { Job } from '@/utils/type'
import BackButton from '@/components/BackButton.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const route = useRoute()
const router = useRouter()

const state = reactive({
  job: {} as Job,
  isLoading: true,
  isError: false,
})

const jobId = route.params.id

const handleDelete = async () => {
  const confirm = window.confirm('Are you sure! you want to delete this job?')
  if (!confirm) return
  try {
    await axios.delete<Job>(`jobs/${jobId}`)
    toast.success('Job Deleted Successfully')
    router.push('/jobs')
  } catch (error) {
    console.error('error-deleting-job-listing', error)
    toast.error('Job Not Deleted')
  }
}

onMounted(async () => {
  try {
    const { data } = await axios.get<Job>(`jobs/${jobId}`)
    state.job = data
  } catch (error) {
    console.error('error-fetching-job-listing', error)
    state.isError = true
  } finally {
    state.isLoading = false
  }
})
</script>
<template>
  <BackButton />
  <section class="bg-green-50">
    <div v-if="state.isError" class="py-6 text-center text-gray-500">
      <h4 class="font-bold text-3xl">Something went wrongs</h4>
      <h6 class="text-1xl">Jobs fetching error</h6>
    </div>
    <div v-else-if="state.isLoading" class="py-6 text-center text-gray-500">
      <PulseLoader />
    </div>
    <div v-else class="m-auto px-6 py-10 container">
      <div class="gap-6 grid grid-cols-1 md:grid-cols-70/30 w-full">
        <main>
          <div class="bg-white shadow-md p-6 rounded-lg text-center md:text-left">
            <div class="mb-4 text-gray-500">{{ state.job.type }}</div>
            <h1 class="mb-4 font-bold text-3xl">{{ state.job.title }}</h1>
            <div class="flex justify-center md:justify-start mb-4 text-gray-500 align-middle">
              <i class="mr-2 pi-map-marker text-lg text-orange-700 pi"></i>
              <p class="text-orange-700">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-white shadow-md mt-6 p-6 rounded-lg">
            <h3 class="mb-6 font-bold text-green-800 text-lg">Job Description</h3>

            <p class="mb-4">
              {{ state.job.description }}
            </p>

            <h3 class="mb-2 font-bold text-green-800 text-lg">Salary</h3>

            <p class="mb-4">{{ state.job.salary }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white shadow-md p-6 rounded-lg">
            <h3 class="mb-6 font-bold text-xl">Company Info</h3>

            <h2 class="text-2xl">{{ state.job.company.name }}</h2>

            <p class="my-2">
              {{ state.job.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="bg-green-100 my-2 p-2 font-bold">{{ state.job.company.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="bg-green-100 my-2 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white shadow-md mt-6 p-6 rounded-lg">
            <h3 class="mb-6 font-bold text-xl">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class="block bg-green-500 hover:bg-green-600 focus:shadow-outline mt-4 px-4 py-2 rounded-full w-full font-bold text-center text-white focus:outline-none"
              >Edit Job</RouterLink
            >
            <button
              @click="handleDelete"
              class="block bg-red-500 hover:bg-red-600 focus:shadow-outline mt-4 px-4 py-2 rounded-full w-full font-bold text-white focus:outline-none"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
