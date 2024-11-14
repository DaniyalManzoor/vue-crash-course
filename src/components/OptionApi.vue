<!-- Two type of syntax Options API and compositions API -->
<!-- This is Options API Syntax in Vue -->
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0,
      name: 'Jhon Done',
      status: 'active',
      // status: "pending"
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https://www.google.com',
    }
  },
  methods: {
    handleClick() {
      console.log('option-api-status-click', this.status)
      if (this.status === 'active') this.status = 'pending'
      else if (this.status === 'pending') this.status = 'inactive'
      else this.status = 'active'
    },
    increment() {
      this.count++
    },
  },
})
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h2>Task</h2>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- bind the value to native html attribute -->
  <!-- <a v-bind:href="link">Click for google</a> -->
  <!-- short way -->
  <div>
    <a :href="link">Click for google</a>

    <!-- <button v-on:click="handleClick">Change Status</button> -->
    <button @click="handleClick">Change Status</button>
    <button @click="increment">increment {{ count }}</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
}
</style>
