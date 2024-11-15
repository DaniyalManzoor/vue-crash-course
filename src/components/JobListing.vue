<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed, defineProps, ref } from 'vue'

interface Job {
  id: string
  title: string
  type: string
  description: string
  salary: string
  location: string
}
const props = defineProps<{ job: Job }>()

const isShowFullDescription = ref(false)

const truncatedDescription = computed(() => {
  let description = props.job.description
  if (!isShowFullDescription.value) {
    description = description.substring(0, 90) + '...'
  }
  return description
})

const handleIsShowFullDescription = () => {
  isShowFullDescription.value = !isShowFullDescription.value
}
</script>

<template>
  <div class="relative bg-white shadow-md rounded-xl">
    <div class="p-4">
      <div class="mb-6">
        <div class="my-2 text-gray-600">{{ job.type }}</div>
        <h3 class="font-bold text-xl">{{ job.title }}</h3>
      </div>
      <div class="mb-5">
        {{ truncatedDescription }}
        <button class="inline-block text-green-500 underline" @click="handleIsShowFullDescription">
          {{ isShowFullDescription ? 'Less' : 'More' }}
        </button>
      </div>
      <h3 class="mb-5 text-green-500 hover:text-green-600">{{ job.salary }}/ Year</h3>

      <div class="border-gray-100 mb-5 border"></div>
      <div class="flex lg:flex-row flex-col justify-between mb-4">
        <div class="mb-3 text-orange-700">
          <i class="pi-map-marker text-lg text-orange-500 pi"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="`/jobs/${job.id}`"
          class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg h-[36px] text-center text-sm text-white"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
