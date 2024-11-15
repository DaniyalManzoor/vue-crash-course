<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import { RouterLink, useRoute } from 'vue-router'

const getIsActiveLink = (routePath: string) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="border-green-500 bg-green-700 border-b">
    <div class="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex justify-between items-center h-20">
        <div class="flex flex-1 justify-center md:justify-start items-center md:items-stretch">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="w-auto h-10" :src="logo" alt="Vue Jobs" />
            <span class="md:block hidden ml-2 font-bold text-2xl text-white">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  getIsActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                  'text-white',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/jobs"
                :class="[
                  getIsActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                  'text-white',
                ]"
                >Jobs</RouterLink
              >
              <RouterLink
                to="/jobs/add"
                :class="[
                  getIsActiveLink('/jobs/add')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                  'text-white',
                ]"
                >Add Job</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
