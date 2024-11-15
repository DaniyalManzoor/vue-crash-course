<script setup lang="ts">
import logo from '@/assets/img/logo.png'
</script>

<template>
  <nav class="border-green-500 bg-green-700 border-b">
    <div class="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex justify-between items-center h-20">
        <div class="flex flex-1 justify-center md:justify-start items-center md:items-stretch">
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="w-auto h-10" :src="logo" alt="Vue Jobs" />
            <span class="md:block hidden ml-2 font-bold text-2xl text-white">Vue Jobs</span>
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <a
                href="index.html"
                class="bg-green-900 hover:bg-gray-900 px-3 py-2 rounded-md text-white hover:text-white"
                >Home</a
              >
              <a
                href="jobs.html"
                class="hover:bg-green-900 px-3 py-2 rounded-md text-white hover:text-white"
                >Jobs</a
              >
              <a
                href="add-job.html"
                class="hover:bg-green-900 px-3 py-2 rounded-md text-white hover:text-white"
                >Add Job</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
