<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'

import axios from '@/utils/axios'
import type { Job, JobWithoutId } from '@/utils/type'

const toast = useToast()
const route = useRoute()
const router = useRouter()

const jobId = route.params.id

const form = reactive<JobWithoutId>({
  type: 'Full-Time',
  title: '',
  description: '',
  location: '',
  salary: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})
const state = reactive({
  job: {} as Job,
  isLoading: true,
  isError: false,
})

const handleSubmit = async () => {
  try {
    const updateJob: JobWithoutId = {
      type: form.type,
      title: form.title,
      description: form.description,
      location: form.location,
      salary: form.salary,
      company: {
        name: form.company.name,
        description: form.company.description,
        contactEmail: form.company.contactEmail,
        contactPhone: form.company.contactPhone,
      },
    }
    const res = await axios.put<Job>(`/jobs/${jobId}`, updateJob)
    toast.success(`Job Updated Successfully for ${res.data.title}`)
    router.push(`/jobs/${res.data.id}`)
  } catch (error) {
    console.error('add-job-error', error)
    toast.error('Job Was Not Updated')
  }
}

onMounted(async () => {
  try {
    const { data } = await axios.get<Job>(`jobs/${jobId}`)
    state.job = data
    //Populate inputs
    form.type = data.type
    form.title = data.title
    form.description = data.description
    form.salary = data.salary
    form.location = data.location
    form.company.name = data.company.name
    form.company.description = data.company.description
    form.company.contactPhone = data.company.contactPhone
    form.company.contactEmail = data.company.contactEmail
  } catch (error) {
    console.error('error-fetching-job-listing', error)
    state.isError = true
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-green-50">
    <div class="m-auto py-24 max-w-2xl container">
      <div class="bg-white shadow-md m-4 md:m-0 mb-4 px-6 py-8 border rounded-md">
        <form @submit.prevent="handleSubmit">
          <h2 class="mb-6 font-semibold text-3xl text-center">Edit Job</h2>
          <div class="mb-4">
            <label for="type" class="block mb-2 font-bold text-gray-700">Job Type</label>
            <select
              id="type"
              name="type"
              class="px-3 py-2 border rounded w-full"
              required
              v-model="form.type"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold text-gray-700">Job Listing Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="mb-2 px-3 py-2 border rounded w-full"
              placeholder="eg. Beautiful Apartment In Miami"
              required
              v-model="form.title"
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block mb-2 font-bold text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              class="px-3 py-2 border rounded w-full"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
              v-model="form.description"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="block mb-2 font-bold text-gray-700">Salary</label>
            <select
              id="salary"
              name="salary"
              class="px-3 py-2 border rounded w-full"
              required
              v-model="form.salary"
            >
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold text-gray-700"> Location </label>
            <input
              type="text"
              id="location"
              name="location"
              class="mb-2 px-3 py-2 border rounded w-full"
              placeholder="Company Location"
              required
              v-model="form.location"
            />
          </div>

          <h3 class="mb-5 text-2xl">Company Info</h3>

          <div class="mb-4">
            <label for="company" class="block mb-2 font-bold text-gray-700">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              class="px-3 py-2 border rounded w-full"
              placeholder="Company Name"
              v-model="form.company.name"
            />
          </div>

          <div class="mb-4">
            <label for="company_description" class="block mb-2 font-bold text-gray-700"
              >Company Description</label
            >
            <textarea
              id="company_description"
              name="company_description"
              class="px-3 py-2 border rounded w-full"
              rows="4"
              placeholder="What does your company do?"
              v-model="form.company.description"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block mb-2 font-bold text-gray-700"
              >Contact Email</label
            >
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              class="px-3 py-2 border rounded w-full"
              placeholder="Email address for applicants"
              required
              v-model="form.company.contactEmail"
            />
          </div>
          <div class="mb-4">
            <label for="contact_phone" class="block mb-2 font-bold text-gray-700"
              >Contact Phone</label
            >
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="px-3 py-2 border rounded w-full"
              placeholder="Optional phone for applicants"
              v-model="form.company.contactPhone"
            />
          </div>

          <button
            class="bg-green-500 hover:bg-green-600 focus:shadow-outline px-4 py-2 rounded-full w-full font-bold text-white focus:outline-none"
            type="submit"
          >
            Update Job
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
