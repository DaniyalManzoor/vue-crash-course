import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import JobView from '@/views/JobView.vue'
import AddJobView from '@/views/AddJobView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import EditJobView from '@/views/EditJobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      children: [
        {
          path: '',
          name: 'jobs',
          component: JobsView,
        },
        {
          path: ':id',
          name: 'job',
          component: JobView,
        },
        {
          path: 'add',
          name: 'add-job',
          component: AddJobView,
        },
        {
          path: 'edit/:id',
          name: 'edit-job',
          component: EditJobView,
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
