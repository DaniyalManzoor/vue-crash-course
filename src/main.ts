import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import router from '@/router'
import Toast, { type PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import './assets/main.css'
import App from './App.vue'

const toastOptions: PluginOptions = {
  maxToasts: 20,
  newestOnTop: true,
}

const app = createApp(App)
app.use(router)
app.use(Toast, toastOptions)
app.mount('#app')
