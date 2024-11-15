import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import router from '@/router'

import './assets/main.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
