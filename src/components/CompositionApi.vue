<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

const link = ref('https://www.google.com')
const counter = ref(0)
const newTask = ref('')

const user = reactive({
  name: 'Jhon Doe',
  status: 'active',
  tasks: ['Task One', 'Task Two', 'Task Three'],
})

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data: Array<Record<'title', string>> = await res.json()
    user.tasks = data.map((task) => task.title)
  } catch (error) {
    console.error(error)
  }
})

const handleClick = () => {
  console.log('composition-api-status-click', user.status)
  if (user.status === 'active') user.status = 'pending'
  else if (user.status === 'pending') user.status = 'inactive'
  else user.status = 'active'
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    user.tasks.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index: number) => {
  user.tasks.splice(index, 1)
}

const increment = () => {
  counter.value++
}
</script>

<template>
  <h1>{{ user.name }}</h1>
  <p v-if="user.status === 'active'">User is active</p>
  <p v-else-if="user.status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h2>Tasks</h2>
  <form @submit.prevent="addTask">
    <label for="new-task">Input Task</label>
    <input type="text" id="new-task" name="new-task" v-model="newTask" />
    <button type="submit" :disabled="!newTask">Submit</button>
  </form>
  <ul>
    <li v-for="(task, index) in user.tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <div>
    <!-- bind the value to native html attribute -->
    <!-- <a v-bind:href="link">Click for google</a> -->
    <!-- short way -->
    <a :href="link">Click for google</a>

    <!-- <button v-on:click="handleClick">Change Status</button> -->
    <button @click="handleClick">Change Status</button>
    <button @click="increment">increment {{ counter }}</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
}
</style>
