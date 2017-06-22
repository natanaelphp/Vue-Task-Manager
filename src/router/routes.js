const routes = [
  {
    path: '/',
    component: require('@/components/task/list')
  },
  {
    path: '/new',
    component: require('@/components/task/new')
  },
  {
    path: '/edit/:id',
    component: require('@/components/task/edit')
  },
]

export default routes
