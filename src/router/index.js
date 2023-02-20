import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Workers',
        component: () => import('@/views/WorkersPage.vue'),
        children: [
          {
            path:':id',
            name: 'Worker',
            component: () => import('@/views/WorkerId')
          }
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
