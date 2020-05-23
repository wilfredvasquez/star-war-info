import Home from '@/components/views/people/Index.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '*', redirect: Home,  name: 'Home'  }
]

export default routes