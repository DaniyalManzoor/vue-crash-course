<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100',
  },
})
</script>

<template>
  <div :class="`${bg} shadow-md p-6 rounded-lg`">
    <!-- work as children -->
    <slot></slot>
  </div>
</template>
